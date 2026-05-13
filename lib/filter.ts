import { getResultsLabel as getLocalizedResultsLabel, localizeText } from "@/lib/i18n";
import type { Locale, Story, StoryCategory } from "@/lib/story-types";

function toSearchableText(story: Story) {
  return [
    localizeText(story.title, "en"),
    localizeText(story.title, "zh"),
    story.originalTitle ? localizeText(story.originalTitle, "en") : "",
    story.originalTitle ? localizeText(story.originalTitle, "zh") : "",
    localizeText(story.country, "en"),
    localizeText(story.country, "zh"),
    story.region ? localizeText(story.region, "en") : "",
    story.region ? localizeText(story.region, "zh") : "",
    localizeText(story.culture, "en"),
    localizeText(story.culture, "zh"),
    story.category,
    localizeText(story.summary, "en"),
    localizeText(story.summary, "zh"),
    story.background ? localizeText(story.background, "en") : "",
    story.background ? localizeText(story.background, "zh") : "",
    ...(story.themes ?? []).flatMap((theme) => [localizeText(theme, "en"), localizeText(theme, "zh")]),
    ...story.tags.flatMap((tag) => [localizeText(tag, "en"), localizeText(tag, "zh")])
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function storyMatchesQuery(story: Story, query: string) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return true;
  }

  return toSearchableText(story).includes(normalized);
}

export function filterStories(
  stories: Story[],
  query: string,
  activeCategories: StoryCategory[]
) {
  const categorySet = new Set(activeCategories);

  return stories.filter((story) => {
    const matchesCategory = categorySet.size === 0 || categorySet.has(story.category);

    return matchesCategory && storyMatchesQuery(story, query);
  });
}

export function getResultsLabel(
  stories: Story[],
  query: string,
  activeCategories: StoryCategory[],
  locale: Locale = "en"
) {
  return getLocalizedResultsLabel(locale, stories.length, query, activeCategories.length);
}

export function prioritizeStoriesByFocus(stories: Story[], focusStory: Story | null) {
  if (!focusStory) {
    return stories;
  }

  return [...stories].sort((left, right) => {
    const leftScore = getFocusScore(left, focusStory);
    const rightScore = getFocusScore(right, focusStory);

    if (leftScore !== rightScore) {
      return rightScore - leftScore;
    }

    return stories.indexOf(left) - stories.indexOf(right);
  });
}

export function getRelatedStories(stories: Story[], focusStory: Story, limit = 3) {
  return stories
    .filter((story) => story.id !== focusStory.id)
    .map((story, index) => ({
      story,
      index,
      score: getRelatedStoryScore(story, focusStory)
    }))
    .filter((entry) => entry.score > 0)
    .sort((left, right) => {
      if (left.score !== right.score) {
        return right.score - left.score;
      }

      return left.index - right.index;
    })
    .slice(0, limit)
    .map((entry) => entry.story);
}

function getFocusScore(story: Story, focusStory: Story) {
  if (story.id === focusStory.id) {
    return 4;
  }

  if (localizeText(story.country, "en") === localizeText(focusStory.country, "en")) {
    return 3;
  }

  if (
    story.region &&
    focusStory.region &&
    localizeText(story.region, "en") === localizeText(focusStory.region, "en")
  ) {
    return 2;
  }

  if (story.category === focusStory.category) {
    return 1;
  }

  return 0;
}

function getRelatedStoryScore(story: Story, focusStory: Story) {
  let score = 0;

  if (
    story.region &&
    focusStory.region &&
    localizeText(story.region, "en") === localizeText(focusStory.region, "en")
  ) {
    score += 6;
  }

  if (story.category === focusStory.category) {
    score += 3;
  }

  const focusTags = focusStory.tags.map((tag) => localizeText(tag, "en"));
  const sharedTagCount = story.tags.filter((tag) => focusTags.includes(localizeText(tag, "en"))).length;
  score += sharedTagCount;

  return score;
}
