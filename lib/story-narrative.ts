import { storyNarratives } from "@/lib/story-narratives.generated";
import { localeMetadata, type Locale, type Story } from "@/lib/story-types";

export function getStoryNarrativeSentences(story: Story, locale: Locale) {
  return getStoryNarrativeSentenceParagraphs(story, locale).flat();
}

export function getStoryNarrativeLead(story: Story, locale: Locale) {
  return getStoryNarrativeSentences(story, locale)[0] ?? "";
}

export function getStoryNarrativeParagraphs(story: Story, locale: Locale) {
  const paragraphs = getLocalizedNarrativeParagraphs(story, locale);

  if (paragraphs?.length) {
    return paragraphs;
  }

  return getStoryNarrativeSentenceParagraphs(story, locale).map((paragraph) =>
    paragraph.join(localeMetadata[locale].sentenceJoiner)
  );
}

export function getStoryNarrativeSentenceParagraphs(story: Story, locale: Locale) {
  const paragraphs = getLocalizedNarrativeParagraphs(story, locale);

  if (!paragraphs?.length) {
    return [];
  }

  return paragraphs.map((paragraph) => splitParagraphIntoSentences(paragraph, locale));
}

function splitParagraphIntoSentences(paragraph: string, locale: Locale) {
  const pattern =
    locale === "zh"
      ? /[^。！？!?]+[。！？!?]?/g
      : /[^.!?؟]+[.!?؟]+(?:["'”])?|[^.!?؟]+$/g;

  return (paragraph.match(pattern) ?? [])
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function getLocalizedNarrativeParagraphs(story: Story, locale: Locale) {
  const narratives = story.narrativeParagraphs ?? storyNarratives[story.id];

  return narratives?.[locale] ?? narratives?.en ?? narratives?.zh ?? [];
}
