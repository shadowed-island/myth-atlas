export const storyCategories = [
  "myth",
  "folktale",
  "epic",
  "creature",
  "religion",
  "history"
] as const;

export type StoryCategory = (typeof storyCategories)[number];
export const supportedLocales = ["en", "zh", "es", "ar"] as const;

export type Locale = (typeof supportedLocales)[number];
export type LocaleDirection = "ltr" | "rtl";

export const defaultLocale: Locale = "en";

export type LocaleMetadata = {
  code: Locale;
  dir: LocaleDirection;
  englishLabel: string;
  htmlLang: string;
  nativeLabel: string;
  sentenceJoiner: string;
  speechLang: string;
};

export const localeMetadata: Record<Locale, LocaleMetadata> = {
  en: {
    code: "en",
    dir: "ltr",
    englishLabel: "English",
    htmlLang: "en",
    nativeLabel: "English",
    sentenceJoiner: " ",
    speechLang: "en-US"
  },
  zh: {
    code: "zh",
    dir: "ltr",
    englishLabel: "Chinese",
    htmlLang: "zh-CN",
    nativeLabel: "中文",
    sentenceJoiner: "",
    speechLang: "zh-CN"
  },
  es: {
    code: "es",
    dir: "ltr",
    englishLabel: "Spanish",
    htmlLang: "es",
    nativeLabel: "Español",
    sentenceJoiner: " ",
    speechLang: "es-ES"
  },
  ar: {
    code: "ar",
    dir: "rtl",
    englishLabel: "Arabic",
    htmlLang: "ar",
    nativeLabel: "العربية",
    sentenceJoiner: " ",
    speechLang: "ar-SA"
  }
};

export type LocalizedText = Partial<Record<Locale, string>> & {
  en: string;
};

export type LocalizedParagraphs = Partial<Record<Locale, string[]>> & {
  en: string[];
};

export type Story = {
  id: string;
  title: LocalizedText;
  originalTitle?: LocalizedText;
  country: LocalizedText;
  region?: LocalizedText;
  culture: LocalizedText;
  latitude: number;
  longitude: number;
  category: StoryCategory;
  summary: LocalizedText;
  background?: LocalizedText;
  narrativeParagraphs?: LocalizedParagraphs;
  themes?: LocalizedText[];
  imageUrl?: string;
  tags: LocalizedText[];
  sourceUrl?: string;
};

export type CategoryMeta = {
  label: LocalizedText;
  shortLabel: LocalizedText;
  color: string;
  glow: string;
  icon: string;
};

export const categoryMeta: Record<StoryCategory, CategoryMeta> = {
  myth: {
    label: { en: "Myth", zh: "神话", es: "Mito", ar: "أسطورة" },
    shortLabel: { en: "Myth", zh: "神话", es: "Mito", ar: "أسطورة" },
    color: "#ffd36e",
    glow: "rgba(255, 211, 110, 0.72)",
    icon: "Sparkles"
  },
  folktale: {
    label: { en: "Folktale", zh: "民间故事", es: "Cuento popular", ar: "حكاية شعبية" },
    shortLabel: { en: "Tale", zh: "民话", es: "Cuento", ar: "حكاية" },
    color: "#6ed6ff",
    glow: "rgba(110, 214, 255, 0.68)",
    icon: "BookOpen"
  },
  epic: {
    label: { en: "Epic", zh: "史诗", es: "Epopeya", ar: "ملحمة" },
    shortLabel: { en: "Epic", zh: "史诗", es: "Épica", ar: "ملحمة" },
    color: "#ff6e8a",
    glow: "rgba(255, 110, 138, 0.7)",
    icon: "Swords"
  },
  creature: {
    label: { en: "Creature", zh: "异兽传说", es: "Criatura", ar: "مخلوق" },
    shortLabel: { en: "Beast", zh: "异兽", es: "Bestia", ar: "مخلوق" },
    color: "#c88dff",
    glow: "rgba(200, 141, 255, 0.7)",
    icon: "Moon"
  },
  religion: {
    label: { en: "Sacred Story", zh: "神圣故事", es: "Relato sagrado", ar: "قصة مقدسة" },
    shortLabel: { en: "Sacred", zh: "圣传", es: "Sagrado", ar: "مقدس" },
    color: "#f4f1e8",
    glow: "rgba(244, 241, 232, 0.55)",
    icon: "Sun"
  },
  history: {
    label: { en: "Legendary History", zh: "传奇历史", es: "Historia legendaria", ar: "تاريخ أسطوري" },
    shortLabel: { en: "History", zh: "史传", es: "Historia", ar: "تاريخ" },
    color: "#7dffa8",
    glow: "rgba(125, 255, 168, 0.62)",
    icon: "Landmark"
  }
};
