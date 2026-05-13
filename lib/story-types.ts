export const storyCategories = [
  "myth",
  "folktale",
  "epic",
  "creature",
  "religion",
  "history"
] as const;

export type StoryCategory = (typeof storyCategories)[number];
export type Locale = "en" | "zh";

export type LocalizedText = {
  en: string;
  zh: string;
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
    label: { en: "Myth", zh: "神话" },
    shortLabel: { en: "Myth", zh: "神话" },
    color: "#ffd36e",
    glow: "rgba(255, 211, 110, 0.72)",
    icon: "Sparkles"
  },
  folktale: {
    label: { en: "Folktale", zh: "民间故事" },
    shortLabel: { en: "Tale", zh: "民话" },
    color: "#6ed6ff",
    glow: "rgba(110, 214, 255, 0.68)",
    icon: "BookOpen"
  },
  epic: {
    label: { en: "Epic", zh: "史诗" },
    shortLabel: { en: "Epic", zh: "史诗" },
    color: "#ff6e8a",
    glow: "rgba(255, 110, 138, 0.7)",
    icon: "Swords"
  },
  creature: {
    label: { en: "Creature", zh: "异兽传说" },
    shortLabel: { en: "Beast", zh: "异兽" },
    color: "#c88dff",
    glow: "rgba(200, 141, 255, 0.7)",
    icon: "Moon"
  },
  religion: {
    label: { en: "Sacred Story", zh: "神圣故事" },
    shortLabel: { en: "Sacred", zh: "圣传" },
    color: "#f4f1e8",
    glow: "rgba(244, 241, 232, 0.55)",
    icon: "Sun"
  },
  history: {
    label: { en: "Legendary History", zh: "传奇历史" },
    shortLabel: { en: "History", zh: "史传" },
    color: "#7dffa8",
    glow: "rgba(125, 255, 168, 0.62)",
    icon: "Landmark"
  }
};
