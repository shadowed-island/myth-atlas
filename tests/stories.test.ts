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

  it("keeps a curated story set with broad geographic coverage", () => {
    expect(stories).toHaveLength(300);

    const regionNames = stories.map((story) =>
      story.region ? localizeText(story.region, "en") : ""
    );
    const countRegions = (patterns: string[]) =>
      regionNames.filter((region) => patterns.some((pattern) => region.includes(pattern))).length;

    expect(countRegions(["Africa"])).toBeGreaterThanOrEqual(40);
    expect(countRegions(["Asia"])).toBeGreaterThanOrEqual(50);
    expect(countRegions(["Europe"])).toBeGreaterThanOrEqual(60);
    expect(countRegions(["America", "Mesoamerica", "Central America", "Caribbean"])).toBeGreaterThanOrEqual(40);
    expect(countRegions(["Oceania", "Polynesia", "Melanesia", "Micronesia"])).toBeGreaterThanOrEqual(15);
    expect(countRegions(["Caucasus"])).toBeGreaterThanOrEqual(5);
    expect(countRegions(["Arctic"])).toBeGreaterThanOrEqual(5);
  });

  it("uses only WebP artwork assets for story images", () => {
    const artworkDir = join(process.cwd(), "public", "story-artwork");
    const artworkFiles = readdirSync(artworkDir);

    expect(artworkFiles.filter((file) => /\.(jpe?g|png)$/i.test(file))).toEqual([]);

    for (const story of stories) {
      // Stories without curated artwork are allowed to have an undefined
      // imageUrl — StoryArtwork falls back to an emoji marker. The
      // bottom-of-file forEach in lib/stories.ts only fills in a
      // /story-artwork/generated/<id>.webp path when that file actually
      // exists on disk (per lib/story-artwork-manifest.generated.ts), so
      // no 404s are emitted at runtime.
      const url = story.imageUrl;
      if (url === undefined) {
        continue;
      }
      expect(url, story.id).toMatch(/\.webp$/);
      expect(existsSync(join(process.cwd(), "public", url)), story.id).toBe(true);
    }
  });
});
