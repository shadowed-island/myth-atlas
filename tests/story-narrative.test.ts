import { describe, expect, it } from "vitest";
import {
  getStoryNarrativeParagraphs,
  getStoryNarrativeSentenceParagraphs,
  getStoryNarrativeSentences
} from "@/lib/story-narrative";
import { stories } from "@/lib/stories";

describe("story narrative expansion", () => {
  it("keeps every story at three paragraphs and 10-15 sentences in Chinese and English", () => {
    for (const story of stories) {
      expect(getStoryNarrativeSentenceParagraphs(story, "zh"), story.id).toHaveLength(3);
      expect(getStoryNarrativeSentenceParagraphs(story, "en"), story.id).toHaveLength(3);
      expect(getStoryNarrativeSentences(story, "zh"), story.id).toHaveLength(12);
      expect(getStoryNarrativeSentences(story, "en"), story.id).toHaveLength(12);
    }
  });

  it("does not leave template boilerplate in any story narrative", () => {
    const zhBoilerplate = [
      "很快也跟上了这条路",
      "就在转折前等着众人",
      "直到一次动作打破僵局",
      "所有人的去路都变了样",
      "讲述就停在这个结果上"
    ];
    const enBoilerplate = [
      "follows on the same road",
      "waits at the turning point",
      "One act finally breaks the deadlock",
      "Those left behind must live with what happened there",
      "The last scene settles on that result"
    ];

    for (const story of stories) {
      const zh = getStoryNarrativeParagraphs(story, "zh").join("\n");
      const en = getStoryNarrativeParagraphs(story, "en").join("\n");

      for (const phrase of zhBoilerplate) {
        expect(zh.includes(phrase), `${story.id} contains zh boilerplate: ${phrase}`).toBe(false);
      }

      for (const phrase of enBoilerplate) {
        expect(en.includes(phrase), `${story.id} contains en boilerplate: ${phrase}`).toBe(false);
      }
    }
  });
});
