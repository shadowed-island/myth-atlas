import { mkdir, readFile, rm } from "node:fs/promises";
import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright-core";

const debugPort = 9333 + Math.floor(Math.random() * 200);
const resultsDir = new URL("../../e2e-results/", import.meta.url);
const externalCapturePath = new URL("desktop-external-url.txt", resultsDir).pathname;
const pnpmCommand = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
const needsShell = process.platform === "win32";

let electronProcess = null;

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function waitForJson(url, timeout = 30_000) {
  const started = Date.now();

  while (Date.now() - started < timeout) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return response.json();
      }
    } catch {
      // CDP endpoint still booting.
    }

    await delay(250);
  }

  throw new Error(`Timed out waiting for ${url}`);
}

async function waitForBrowserPage(browser, timeout = 30_000) {
  const started = Date.now();

  while (Date.now() - started < timeout) {
    for (const context of browser.contexts()) {
      const page = context.pages()[0];
      if (page) {
        return page;
      }
    }

    await delay(200);
  }

  throw new Error("Timed out waiting for Electron page");
}

async function waitForFileContains(pathname, matcher, timeout = 10_000) {
  const started = Date.now();

  while (Date.now() - started < timeout) {
    try {
      const content = await readFile(pathname, "utf8");
      if (matcher.test(content)) {
        return content;
      }
    } catch {
      // File not written yet.
    }

    await delay(200);
  }

  throw new Error(`Timed out waiting for ${pathname}`);
}

async function main() {
  await mkdir(resultsDir, { recursive: true });
  await rm(externalCapturePath, { force: true });

  electronProcess = spawn(
    pnpmCommand,
    [
      "exec",
      "electron",
      `--remote-debugging-port=${debugPort}`,
      ".electron-build/electron/main.js"
    ],
    {
      cwd: new URL("../../", import.meta.url),
      env: {
        ...process.env,
        MYTH_ATLAS_DESKTOP_DIST_DIR: "out",
        MYTH_ATLAS_E2E_CAPTURE_EXTERNAL: externalCapturePath,
        MYTH_ATLAS_FORCE_PROD: "1"
      },
      shell: needsShell,
      stdio: ["ignore", "pipe", "pipe"]
    }
  );

  electronProcess.stdout.on("data", (chunk) => {
    process.stdout.write(`[desktop-smoke] ${chunk}`);
  });
  electronProcess.stderr.on("data", (chunk) => {
    process.stderr.write(`[desktop-smoke] ${chunk}`);
  });

  await waitForJson(`http://127.0.0.1:${debugPort}/json/version`);
  const browser = await chromium.connectOverCDP(`http://127.0.0.1:${debugPort}`);

  try {
    const page = await waitForBrowserPage(browser);
    const errors = [];

    page.on("console", (message) => {
      if (message.type() === "error") {
        errors.push(message.text());
      }
    });
    page.on("pageerror", (error) => {
      errors.push(error.message);
    });

    await page.waitForSelector("canvas", { timeout: 20_000 });
    await page.locator(".story-row").first().click();
    await page.waitForSelector(".detail-card-desktop .detail-title", {
      timeout: 10_000
    });

    const artworkLoaded = await page
      .locator(".story-row .story-thumb-image")
      .first()
      .evaluate((node) => {
        if (!(node instanceof HTMLImageElement)) {
          return false;
        }

        return node.complete && node.naturalWidth > 0;
      });

    assert(artworkLoaded, "Expected story artwork thumbnail to load in Electron production mode");

    await page.screenshot({
      path: new URL("desktop-smoke.png", resultsDir).pathname,
      fullPage: true
    });

    await page.locator(".detail-card-desktop .source-link").click();
    const capturedExternalUrl = await waitForFileContains(
      externalCapturePath,
      /^https?:\/\//m
    );

    assert(
      !errors.length,
      `Unexpected renderer errors during Electron smoke test:\n${errors.join("\n")}`
    );
    assert(
      /^https?:\/\//m.test(capturedExternalUrl),
      "Expected Electron external link interception to capture a browser URL"
    );
  } finally {
    await browser.close();
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => {
    if (electronProcess && !electronProcess.killed) {
      electronProcess.kill("SIGTERM");
    }
  });
