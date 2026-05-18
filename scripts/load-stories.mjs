import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

export function loadStories(workspaceDir = process.cwd()) {
  const storiesPath = path.join(workspaceDir, "lib/stories.ts");
  const source = fs.readFileSync(storiesPath, "utf8");
  const executable = source
    .replace(/^import .*$/gm, "")
    .replace(/const text = \(en: string, zh: string\) =>/g, "const text = (en, zh) =>")
    .replace(/export const stories: Story\[\] =/g, "const stories =")
    .replace(/type AdditionalStorySeed = readonly \[[\s\S]*?\];\n\n/g, "")
    .replace(/const additionalStorySeeds: AdditionalStorySeed\[\] =/g, "const additionalStorySeeds =")
    .replace(/const categoryStoryLanguage: Record<Story\["category"\], \{[\s\S]*?\}> =/g, "const categoryStoryLanguage =")
    .replace(/function getAdditionalStoryId\(baseId: string\)/g, "function getAdditionalStoryId(baseId)")
    .replace(/\}\s+satisfies Story;/g, "};")
    .concat("\nmodule.exports = { stories };");

  // The vm sandbox can't import the generated artwork manifest. Replace it
  // with a real fs-backed set so the bottom-of-file forEach behaves the
  // same as it does at runtime.
  const artworkDir = path.join(workspaceDir, "public", "story-artwork", "generated");
  const generatedArtworkIds = new Set(
    fs.existsSync(artworkDir)
      ? fs.readdirSync(artworkDir)
          .filter((f) => f.endsWith(".webp"))
          .map((f) => f.replace(/\.webp$/, ""))
      : []
  );

  const sandbox = {
    module: { exports: {} },
    exports: {},
    generatedArtworkIds
  };

  vm.runInNewContext(executable, sandbox, { filename: storiesPath });

  return sandbox.module.exports.stories;
}
