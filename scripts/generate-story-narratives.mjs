import { spawnSync } from "node:child_process";
import path from "node:path";

const workspaceDir = process.cwd();
const scriptPath = path.join(workspaceDir, "scripts/generate-story-narratives.py");

const result = runPython("python3") ?? runPython("python");

if (!result) {
  console.error("Unable to find a Python interpreter for scripts/generate-story-narratives.py");
  process.exit(1);
}

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);

function runPython(command) {
  const output = spawnSync(command, [scriptPath], {
    cwd: workspaceDir,
    env: process.env,
    stdio: "inherit"
  });

  if (output.error && output.error.code === "ENOENT") {
    return null;
  }

  return output;
}
