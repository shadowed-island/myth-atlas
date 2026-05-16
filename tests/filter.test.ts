import { describe, expect, it } from "vitest";
import {
  filterStories,
  getRelatedStories,
  getResultsLabel,
  prioritizeStoriesByFocus,
  storyMatchesQuery
} from "@/lib/filter";
import { localizeText } from "@/lib/i18n";
import { stories } from "@/lib/stories";

describe("story filtering", () => {
  it("matches country, title, culture, and tags in both languages", () => {
    expect(storyMatchesQuery(stories[0], "china")).toBe(true);
    expect(storyMatchesQuery(stories[0], "中国")).toBe(true);
    expect(storyMatchesQuery(stories[0], "Monkey")).toBe(true);
    expect(storyMatchesQuery(stories[0], "孙悟空")).toBe(true);
    expect(storyMatchesQuery(stories[0], "buddhism")).toBe(true);
    expect(storyMatchesQuery(stories[0], "佛教")).toBe(true);
    expect(storyMatchesQuery(stories[0], "not-present")).toBe(false);
  });

  it("matches richer background and theme content", () => {
    expect(storyMatchesQuery(stories[0], "Ming-era")).toBe(true);
    expect(storyMatchesQuery(stories[0], "明代")).toBe(true);
    expect(storyMatchesQuery(stories[1], "curiosity")).toBe(true);
    expect(storyMatchesQuery(stories[1], "好奇")).toBe(true);
  });

  it("filters by category and query together", () => {
    const results = filterStories(stories, "sun", ["religion", "folktale"]);

    expect(results.map((story) => story.id)).toEqual(
      expect.arrayContaining(["amaterasu-cave", "maui-snares-sun"])
    );
    expect(results.every((story) => ["religion", "folktale"].includes(story.category))).toBe(
      true
    );
  });

  it("builds readable results labels in both locales", () => {
    expect(getResultsLabel(stories, "sun", [], "en")).toBe(`${stories.length} stories for “sun”`);
    expect(getResultsLabel(stories.slice(0, 1), "", ["myth"], "en")).toBe("1 story in 1 active lens");
    expect(getResultsLabel(stories, "太阳", [], "zh")).toBe(`共 ${stories.length} 个故事，匹配“太阳”`);
    expect(getResultsLabel(stories.slice(0, 1), "", ["myth"], "zh")).toBe("共 1 个故事，已启用 1 个筛选视角");
    expect(getResultsLabel(stories, "sol", [], "es")).toBe(`${stories.length} historias para “sol”`);
    expect(getResultsLabel(stories.slice(0, 1), "", ["myth"], "ar")).toBe("1 قصة مع 1 عدسة نشطة");
  });

  it("falls back to English when newer locales do not yet have story copy", () => {
    expect(localizeText(stories[0].title, "es")).toBe("The Monkey King's Journey");
    expect(localizeText(stories[0].summary, "ar")).toContain("Sun Wukong");
  });

  it("prioritizes focused story geography without dropping results", () => {
    const focusStory = stories.find((story) => story.id === "journey-to-the-west");
    const results = prioritizeStoriesByFocus(stories, focusStory ?? null);

    expect(results).toHaveLength(stories.length);
    expect(results[0].id).toBe("journey-to-the-west");
    expect(results.slice(0, 3).map((story) => localizeText(story.region!, "en"))).toContain("East Asia");
  });

  it("finds related stories using region, category, and tags", () => {
    const focusStory = stories.find((story) => story.id === "osiris");
    const results = getRelatedStories(stories, focusStory!, 3);

    expect(results).toHaveLength(3);
    expect(results.map((story) => story.id)).toContain("dido-carthage");
    expect(results.every((story) => story.id !== focusStory!.id)).toBe(true);
  });
});
