import { describe, expect, it } from "vitest";
import { getStoryNarrativeSentences } from "@/lib/story-narrative";
import { stories } from "@/lib/stories";

describe("story narrative expansion", () => {
  it("expands every story to roughly 20-30 sentences in Chinese and English", () => {
    for (const story of stories) {
      expect(getStoryNarrativeSentences(story, "zh"), story.id).toHaveLength(23);
      expect(getStoryNarrativeSentences(story, "en"), story.id).toHaveLength(23);
    }
  });
});
