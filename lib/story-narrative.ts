import { storyNarratives } from "@/lib/story-narratives.generated";
import curatedNarratives from "@/lib/story-narratives.curated.json";
import { localeMetadata, type Locale, type LocalizedParagraphs, type Story } from "@/lib/story-types";

const curatedNarrativeMap = curatedNarratives as unknown as Record<string, LocalizedParagraphs>;

const BOILERPLATE_PATTERNS_EN = [
  "goes farther until",
  "moves deeper until",
  "close around the road",
  "close around the way forward",
  "appears before the conflict can ease",
  "keeps going instead of turning back",
  "tighten the struggle",
  "Then one decisive act changes the balance",
  "reaches the last part of the conflict",
  "stays with the survivors after the turning point",
  "Some go forward, while others are left behind",
  "The end arrives in the result that action has made",
  "is best understood within the storytelling traditions",
  "It stays anchored in",
  "It is most useful as a guide to the themes of",
  "That keeps the story tied to landscape, community, and transmission",
  "first moves toward",
  "follows on the same road",
  "grows as the way narrows",
  "waits at the turning point",
  "presses on instead of stopping",
  "tighten around the middle of the struggle",
  "turns the next step into open danger",
  "One act finally breaks the deadlock",
  "path changes shape for everyone involved",
  "Those left behind must live with what happened there",
  "The last scene settles on that result"
];

const BOILERPLATE_PATTERNS_ZH = [
  "先朝着",
  "很快也跟上了这条路",
  "随着前行一点点变大",
  "就在转折前等着众人",
  "没有停下，而是继续往里走",
  "把中段的局面越收越紧",
  "直到一次动作打破僵局",
  "所有人的去路都变了样",
  "被留在后面的人也只能继续面对这件事的后果",
  "讲述就停在这个结果上",
  "最好先放回",
  "的讲述传统里来理解",
  "这条叙述把重心落在",
  "因此开头就把地点、社群和传承方式一起摆了出来"
];

function containsBoilerplate(paragraphs: string[] | undefined): boolean {
  if (!paragraphs?.length) {
    return false;
  }
  const text = paragraphs.join("\n");
  for (const phrase of BOILERPLATE_PATTERNS_EN) {
    if (text.includes(phrase)) {
      return true;
    }
  }
  for (const phrase of BOILERPLATE_PATTERNS_ZH) {
    if (text.includes(phrase)) {
      return true;
    }
  }
  return false;
}

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
  const narratives = story.narrativeParagraphs ?? curatedNarrativeMap[story.id] ?? storyNarratives[story.id];

  if (!narratives) {
    return [];
  }

  if (containsBoilerplate(narratives.en) || containsBoilerplate(narratives.zh)) {
    return [];
  }

  return narratives[locale] ?? narratives.en ?? narratives.zh ?? [];
}
