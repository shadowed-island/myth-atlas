import {
  getLocalizedValues,
  getResultsLabel as getLocalizedResultsLabel,
  localizeText
} from "@/lib/i18n";
import type { Locale, Story, StoryCategory } from "@/lib/story-types";

function toSearchableText(story: Story) {
  return [
    ...getLocalizedValues(story.title),
    ...getLocalizedValues(story.originalTitle),
    ...getLocalizedValues(story.country),
    ...getLocalizedValues(story.region),
    ...getLocalizedValues(story.culture),
    story.category,
    ...getLocalizedValues(story.summary),
    ...getLocalizedValues(story.background),
    ...(story.themes ?? []).flatMap((theme) => getLocalizedValues(theme)),
    ...story.tags.flatMap((tag) => getLocalizedValues(tag))
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

  const orderById = new Map(stories.map((story, index) => [story.id, index]));
  const focusCountry = localizeText(focusStory.country, "en");
  const focusRegion = focusStory.region ? localizeText(focusStory.region, "en") : null;

  return [...stories].sort((left, right) => {
    const leftScore = getFocusScore(left, focusStory, focusCountry, focusRegion);
    const rightScore = getFocusScore(right, focusStory, focusCountry, focusRegion);

    if (leftScore !== rightScore) {
      return rightScore - leftScore;
    }

    return (orderById.get(left.id) ?? 0) - (orderById.get(right.id) ?? 0);
  });
}

export function getRelatedStories(stories: Story[], focusStory: Story, limit = 3) {
  const focusTags = new Set(focusStory.tags.map((tag) => localizeText(tag, "en")));

  return stories
    .filter((story) => story.id !== focusStory.id)
    .map((story, index) => ({
      story,
      index,
      score: getRelatedStoryScore(story, focusStory, focusTags)
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

function getFocusScore(
  story: Story,
  focusStory: Story,
  focusCountry: string,
  focusRegion: string | null
) {
  if (story.id === focusStory.id) {
    return 4;
  }

  if (localizeText(story.country, "en") === focusCountry) {
    return 3;
  }

  if (
    story.region &&
    focusRegion &&
    localizeText(story.region, "en") === focusRegion
  ) {
    return 2;
  }

  if (story.category === focusStory.category) {
    return 1;
  }

  return 0;
}

function getRelatedStoryScore(story: Story, focusStory: Story, focusTags: Set<string>) {
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

  const sharedTagCount = story.tags.filter((tag) => focusTags.has(localizeText(tag, "en"))).length;
  score += sharedTagCount;

  return score;
}
