import { localizeText, localizeTextArray } from "@/lib/i18n";
import { categoryMeta } from "@/lib/story-types";
import type { Locale, Story, StoryCategory } from "@/lib/story-types";

const paragraphSize = 5;

const categoryNarrative: Record<StoryCategory, Record<Locale, [string, string]>> = {
  myth: {
    en: [
      "Because it is a myth, the tale moves on a scale where divine decisions can alter ordinary life.",
      "Its images ask why the world has pain, order, beauty, danger, or wonder in the first place."
    ],
    zh: [
      "因为它属于神话，故事的尺度常常高于日常生活，神灵或祖灵的决定会改变人间秩序。",
      "它关心的不只是某个人的遭遇，也是在追问世界为何会有痛苦、秩序、美、危险和奇迹。"
    ]
  },
  folktale: {
    en: [
      "Because it is a folktale, the tale keeps close to practical needs, family memory, and spoken wit.",
      "Its turns often feel simple at first, but they usually hide a sharp lesson about how people survive together."
    ],
    zh: [
      "因为它属于民间故事，叙事总是贴近日常需要、家族记忆和口耳相传的机智。",
      "它的转折看似朴素，却常常藏着关于人如何相处、求生与识人辨事的尖锐经验。"
    ]
  },
  epic: {
    en: [
      "Because it belongs to epic tradition, the tale gives private emotion the weight of public destiny.",
      "Every challenge expands the hero's journey until one life begins to stand for a whole community's values."
    ],
    zh: [
      "因为它带有史诗传统，私人情感会被放大成关乎族群、王国或时代命运的事件。",
      "每一次挑战都会扩展英雄旅程，使一个人的抉择开始代表整个共同体的价值。"
    ]
  },
  creature: {
    en: [
      "Because it centers on a creature, the tale works through the thrill of meeting something not fully human.",
      "The creature marks a border where fear, knowledge, appetite, and wonder all become difficult to separate."
    ],
    zh: [
      "因为它围绕异兽或怪异存在展开，故事的张力来自人类与非人之物相遇的瞬间。",
      "这个存在像一道边界，让恐惧、知识、欲望与惊奇变得难以分开。"
    ]
  },
  religion: {
    en: [
      "Because it is a sacred story, the tale treats action, place, and speech as part of a larger moral order.",
      "Its memorable moments often become ritual memory, teaching people how to face awe, duty, and mystery."
    ],
    zh: [
      "因为它属于神圣故事，行动、地点与言语都被放进更大的道德和宇宙秩序中理解。",
      "其中最难忘的时刻常会成为仪式记忆，教人面对敬畏、责任与奥秘。"
    ]
  },
  history: {
    en: [
      "Because it is legendary history, the tale stands between remembered event and shaped cultural memory.",
      "It is less interested in bare chronology than in why later generations kept returning to this figure or deed."
    ],
    zh: [
      "因为它属于传奇历史，故事站在真实记忆与后世塑造之间。",
      "它关心的不只是事件顺序，更是后人为什么反复回到这个人物或行动。"
    ]
  }
};

export function getStoryNarrativeSentences(story: Story, locale: Locale) {
  return locale === "zh" ? getZhNarrativeSentences(story) : getEnNarrativeSentences(story);
}

export function getStoryNarrativeParagraphs(story: Story, locale: Locale) {
  return getStoryNarrativeSentenceParagraphs(story, locale).map((paragraph) =>
    paragraph.join(locale === "zh" ? "" : " ")
  );
}

export function getStoryNarrativeSentenceParagraphs(story: Story, locale: Locale) {
  const sentences = getStoryNarrativeSentences(story, locale);
  const paragraphs: string[][] = [];

  for (let index = 0; index < sentences.length; index += paragraphSize) {
    paragraphs.push(sentences.slice(index, index + paragraphSize));
  }

  return paragraphs;
}

function getZhNarrativeSentences(story: Story) {
  const title = localizeText(story.title, "zh");
  const originalTitle = story.originalTitle ? localizeText(story.originalTitle, "zh") : "";
  const country = localizeText(story.country, "zh");
  const region = story.region ? localizeText(story.region, "zh") : "";
  const culture = localizeText(story.culture, "zh");
  const category = localizeText(categoryMeta[story.category].label, "zh");
  const themes = withFallbacks(localizeTextArray(story.themes, "zh"), ["命运", "选择", "记忆"]);
  const tags = withFallbacks(localizeTextArray(story.tags, "zh"), ["旅程", "考验", "传承", "象征"]);
  const [categoryFrame, categoryMeaning] = categoryNarrative[story.category].zh;
  const place = region ? `${region}的${country}` : country;
  const originalNote = originalTitle ? `它也与《${originalTitle}》这一名称相连，使读者能看到文本传统和民间想象之间的呼应。` : `它没有只停留在一个标题里，而是在不断讲述中吸收了许多地方化的细节。`;

  return [
    localizeText(story.summary, "zh"),
    story.background ? localizeText(story.background, "zh") : `${title}长期保存在${culture}的讲述传统里，成为理解${category}的一条入口。`,
    `故事的舞台落在${place}，它把地理位置、族群记忆和想象世界连在一起。`,
    `在${culture}的讲述里，${title}不是一个孤立桥段，而是一种解释世界的方式。`,
    originalNote,
    categoryFrame,
    categoryMeaning,
    `开端通常会把人物推到一个不稳定的时刻，让平静生活突然显露裂缝。`,
    `冲突并不只来自外部敌人，也来自禁令、誓言、误解、欲望或必须承担的责任。`,
    `最吸引人的地方，是故事让“${themes[0]}”变成可以被看见的行动。`,
    `同时，“${themes[1]}”让人物的选择不再轻松，每一步都带着代价。`,
    `继续往深处看，“${themes[2]}”像一条暗线，把开端、试炼和结局重新连在一起。`,
    `围绕“${tags[0]}”的意象，让听众很快进入这个故事的情绪。`,
    `“${tags[1]}”则把故事从普通经历推向更强的象征层面。`,
    `当“${tags[2]}”出现时，人物需要判断自己应该顺从、反抗还是等待时机。`,
    `而“${tags[3]}”让这个传说在画面上更容易被记住，也更适合被一代代复述。`,
    `这些意象让故事不只是事件摘要，而像一幅层层展开的地图。`,
    `人物的选择往往没有完全安全的道路，所以紧张感会一直留到最后。`,
    `听众会看到力量和脆弱并存，也会看到聪明有时比蛮力更重要。`,
    `结局留下的不是一个简单答案，而是对人如何面对未知的追问。`,
    `这也是它能跨越时间流传的原因：不同年代的人都能在其中找到自己的处境。`,
    `放在世界故事地图上，${title}与其他地区的传说遥相呼应，显出人类叙事共同关心的主题。`,
    `因此，阅读${title}时，可以把它当作一段冒险，也可以把它当作${culture}保存经验、价值和想象力的方式。`
  ];
}

function getEnNarrativeSentences(story: Story) {
  const title = localizeText(story.title, "en");
  const originalTitle = story.originalTitle ? localizeText(story.originalTitle, "en") : "";
  const country = localizeText(story.country, "en");
  const region = story.region ? localizeText(story.region, "en") : "";
  const culture = localizeText(story.culture, "en");
  const category = localizeText(categoryMeta[story.category].label, "en");
  const themes = withFallbacks(localizeTextArray(story.themes, "en"), ["fate", "choice", "memory"]);
  const tags = withFallbacks(localizeTextArray(story.tags, "en"), ["journey", "trial", "inheritance", "symbol"]);
  const [categoryFrame, categoryMeaning] = categoryNarrative[story.category].en;
  const place = region ? `${country} in ${region}` : country;
  const originalNote = originalTitle ? `It is also linked to the name ${originalTitle}, which lets readers sense the exchange between textual tradition and popular imagination.` : `It does not stay confined to a title, because repeated tellings keep adding local emphasis and memorable detail.`;

  return [
    localizeText(story.summary, "en"),
    story.background ? localizeText(story.background, "en") : `${title} has remained within ${culture} storytelling as an entry point into ${category}.`,
    `The setting begins in ${place}, joining geography, cultural memory, and the imagined world of the tale.`,
    `Within ${culture} tradition, ${title} is not only an isolated episode but a way of explaining how the world feels ordered.`,
    originalNote,
    categoryFrame,
    categoryMeaning,
    `The opening usually places its figures at an unstable moment, when ordinary life suddenly shows a crack.`,
    `The conflict does not come only from an outward opponent, but also from a prohibition, vow, misunderstanding, desire, or duty.`,
    `What makes the tale compelling is the way it turns ${themes[0]} into visible action.`,
    `At the same time, ${themes[1]} makes every choice less simple and gives each step a cost.`,
    `Look deeper, and ${themes[2]} becomes a hidden thread connecting beginning, ordeal, and ending.`,
    `The image of ${tags[0]} quickly draws the listener into the emotional world of the story.`,
    `${capitalize(tags[1])} pushes the episode beyond ordinary experience and into a stronger symbolic register.`,
    `When ${tags[2]} enters the tale, the characters must decide whether to obey, resist, bargain, or wait.`,
    `${capitalize(tags[3])} makes the legend easier to remember visually and easier to retell across generations.`,
    `Together, these images make the story feel less like a summary of events and more like a layered map.`,
    `The characters rarely find a completely safe road, so the tension keeps pulling forward until the final turn.`,
    `Listeners encounter strength and vulnerability at the same time, and cleverness often matters as much as force.`,
    `The ending leaves more than a simple answer, because it asks how people should face uncertainty.`,
    `That is why the tale can keep traveling through time: different generations recognize their own dilemmas inside it.`,
    `On the world story map, ${title} echoes legends from other regions and shows how widely humans return to similar questions.`,
    `For that reason, ${title} can be read both as an adventure and as ${culture}'s way of preserving experience, value, and imagination.`
  ];
}

function withFallbacks(values: string[], fallbacks: string[]) {
  const output = [...values];

  for (const fallback of fallbacks) {
    if (output.length >= 4) {
      break;
    }

    output.push(fallback);
  }

  return output.slice(0, 4);
}

function capitalize(value: string) {
  return value ? value[0].toUpperCase() + value.slice(1) : value;
}
