import { describe, expect, it } from "vitest";
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { stories } from "@/lib/stories";
import { localizeText } from "@/lib/i18n";

describe("story data", () => {
  it("keeps story ids unique for React keys and selection state", () => {
    const ids = stories.map((story) => story.id);
    const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);

    expect(duplicateIds).toEqual([]);
  });

  it("includes the expanded five-continent story set", () => {
    expect(stories).toHaveLength(312);

    const regionNames = stories.map((story) =>
      story.region ? localizeText(story.region, "en") : ""
    );
    const countRegions = (patterns: string[]) =>
      regionNames.filter((region) => patterns.some((pattern) => region.includes(pattern))).length;

    expect(countRegions(["Africa"])).toBeGreaterThanOrEqual(25);
    expect(countRegions(["Asia"])).toBeGreaterThanOrEqual(25);
    expect(countRegions(["Europe"])).toBeGreaterThanOrEqual(25);
    expect(countRegions(["America", "Mesoamerica", "Central America"])).toBeGreaterThanOrEqual(25);
    expect(countRegions(["Oceania"])).toBeGreaterThanOrEqual(25);
  });

  it("uses only WebP artwork assets for story images", () => {
    const artworkDir = join(process.cwd(), "public", "story-artwork");
    const artworkFiles = readdirSync(artworkDir);

    expect(artworkFiles.filter((file) => /\.(jpe?g|png)$/i.test(file))).toEqual([]);

    for (const story of stories) {
      expect(story.imageUrl, story.id).toBeDefined();
      expect(story.imageUrl, story.id).toMatch(/\.webp$/);
      expect(existsSync(join(process.cwd(), "public", story.imageUrl!))).toBe(true);
    }
  });
});
