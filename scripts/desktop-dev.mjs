import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";

const desktopPort = Number(process.env.MYTH_ATLAS_DESKTOP_PORT ?? 3000);
const desktopUrl = `http://127.0.0.1:${desktopPort}`;
const pnpmCommand = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
const needsShell = process.platform === "win32";

let nextProcess = null;
let electronProcess = null;
let shuttingDown = false;

function spawnCommand(command, args, env = process.env) {
  return spawn(command, args, {
    cwd: process.cwd(),
    env,
    shell: needsShell,
    stdio: "inherit"
  });
}

async function waitForServer(url, timeout = 60_000) {
  const started = Date.now();

  while (Date.now() - started < timeout) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {
      // Server is still booting.
    }

    await delay(400);
  }

  throw new Error(`Timed out waiting for ${url}`);
}

function waitForExit(child) {
  return new Promise((resolve, reject) => {
    child.once("error", reject);
    child.once("exit", (code, signal) => {
      if (signal) {
        resolve(0);
        return;
      }

      resolve(code ?? 0);
    });
  });
}

function terminateChild(child) {
  if (!child || child.killed) {
    return;
  }

  child.kill("SIGTERM");
}

async function shutdown(code = 0) {
  if (shuttingDown) {
    return;
  }

  shuttingDown = true;
  terminateChild(electronProcess);
  terminateChild(nextProcess);
  process.exit(code);
}

process.on("SIGINT", () => void shutdown(0));
process.on("SIGTERM", () => void shutdown(0));

async function main() {
  nextProcess = spawnCommand(pnpmCommand, [
    "exec",
    "next",
    "dev",
    "--webpack",
    "--hostname",
    "127.0.0.1",
    "--port",
    String(desktopPort)
  ]);

  await waitForServer(desktopUrl);

  const electronBuild = spawnCommand(pnpmCommand, [
    "exec",
    "tsc",
    "-p",
    "tsconfig.electron.json"
  ]);
  const electronBuildCode = await waitForExit(electronBuild);
  if (electronBuildCode !== 0) {
    throw new Error(`Electron build failed with exit code ${electronBuildCode}`);
  }

  electronProcess = spawnCommand(
    pnpmCommand,
    ["exec", "electron", ".electron-build/electron/main.js"],
    {
      ...process.env,
      MYTH_ATLAS_DEV_URL: desktopUrl
    }
  );

  const electronCode = await waitForExit(electronProcess);
  await shutdown(electronCode);
}

main().catch(async (error) => {
  console.error(error);
  await shutdown(1);
});
