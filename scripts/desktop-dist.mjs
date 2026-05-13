import { spawn } from "node:child_process";

const pnpmCommand = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
const needsShell = process.platform === "win32";
const args = [
  "exec",
  "electron-builder",
  "--config",
  "electron-builder.json",
  ...process.argv.slice(2)
];

const child = spawn(pnpmCommand, args, {
  cwd: process.cwd(),
  env: {
    ...process.env,
    ELECTRON_MIRROR:
      process.env.ELECTRON_MIRROR ?? "https://cdn.npmmirror.com/binaries/electron/"
  },
  shell: needsShell,
  stdio: "inherit"
});

child.once("error", (error) => {
  console.error(error);
  process.exit(1);
});

child.once("exit", (code, signal) => {
  if (signal) {
    process.exit(1);
    return;
  }

  process.exit(code ?? 0);
});
