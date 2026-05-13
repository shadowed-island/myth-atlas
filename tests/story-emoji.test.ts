import { describe, expect, it } from "vitest";
import { getStoryEmoji, getStoryMarkerEmoji } from "@/lib/story-emoji";
import { stories } from "@/lib/stories";

describe("story emoji", () => {
  it("uses marker-safe emoji for globe points with square-backed glyphs", () => {
    expect(getStoryEmoji("popocatepetl-iztaccihuatl")).toBe("⛰️");
    expect(getStoryMarkerEmoji("popocatepetl-iztaccihuatl")).toBe("🌋");
  });

  it("falls back to the story emoji for regular globe points", () => {
    expect(getStoryMarkerEmoji("journey-to-the-west")).toBe(getStoryEmoji("journey-to-the-west"));
  });

  it("has a visible emoji marker for every story", () => {
    const missingMarkers = stories
      .filter((story) => getStoryMarkerEmoji(story.id) === "●")
      .map((story) => story.id);

    expect(missingMarkers).toEqual([]);
  });
});
