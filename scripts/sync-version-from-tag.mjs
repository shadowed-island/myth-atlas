import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const rawTag = process.argv[2] ?? process.env.GITHUB_REF_NAME ?? process.env.RELEASE_TAG;

if (!rawTag) {
  console.error("Missing release tag. Pass a tag argument or set GITHUB_REF_NAME.");
  process.exit(1);
}

const normalizedTag = rawTag.trim();
const match = normalizedTag.match(
  /^v?(\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?)$/
);

if (!match) {
  console.error(
    `Unsupported release tag "${normalizedTag}". Expected semantic version like v0.1.5 or 0.1.5.`
  );
  process.exit(1);
}

const version = match[1];
const packageJsonPath = path.join(process.cwd(), "package.json");
const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));

packageJson.version = version;

await writeFile(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);

console.log(`Synced package.json version to ${version} from tag ${normalizedTag}.`);
