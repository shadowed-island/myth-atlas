import { mkdir } from "node:fs/promises";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright-core";

const chromePath =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const baseUrl = process.env.SNAPSHOT_URL || "http://127.0.0.1:3210";
const resultsDir = new URL("../e2e-results/", import.meta.url);

async function waitForServer(url, timeout = 90_000) {
  const started = Date.now();
  while (Date.now() - started < timeout) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {}
    await delay(500);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

async function main() {
  await mkdir(resultsDir, { recursive: true });
  await waitForServer(baseUrl);

  const browser = await chromium.launch({
    executablePath: chromePath,
    headless: true,
    args: [
      "--use-gl=swiftshader",
      "--enable-webgl",
      "--ignore-gpu-blocklist"
    ]
  });
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 1100 },
    deviceScaleFactor: 2
  });
  const page = await ctx.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle", timeout: 60_000 });
  await delay(3500);

  const fullPath = new URL("snapshot-default.png", resultsDir).pathname;
  await page.screenshot({ path: fullPath, fullPage: false });
  console.log(`saved: ${fullPath}`);

  // scroll to bottom to see immersive-bar
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await delay(600);
  const bottomPath = new URL("snapshot-bottom.png", resultsDir).pathname;
  await page.screenshot({ path: bottomPath, fullPage: false });
  console.log(`saved: ${bottomPath}`);
  await page.evaluate(() => window.scrollTo(0, 0));
  await delay(400);

  // select first story for "filled" state
  const firstRow = page.locator(".story-row").first();
  if ((await firstRow.count()) > 0) {
    await firstRow.click();
    await delay(1500);
    const filledPath = new URL("snapshot-selected.png", resultsDir).pathname;
    await page.screenshot({ path: filledPath, fullPage: false });
    console.log(`saved: ${filledPath}`);
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
