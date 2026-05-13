import type { Locale, LocalizedText } from "@/lib/story-types";

export function localizeText(text: LocalizedText, locale: Locale) {
  return text[locale];
}

export function localizeTextArray(values: LocalizedText[] | undefined, locale: Locale) {
  return values?.map((value) => localizeText(value, locale)) ?? [];
}

export const uiText = {
  appEyebrow: { en: "Myth Atlas", zh: "Myth Atlas" },
  appTitle: { en: "Story Globe", zh: "故事地球仪" },
  appSubtitle: {
    en: "Browse world myths by region, culture, and recurring themes.",
    zh: "按地区、文化与反复出现的主题浏览世界神话故事。"
  },
  searchPlaceholder: {
    en: "Search a place, tradition, character, or theme",
    zh: "搜索地点、传统、角色或主题"
  },
  searchAriaLabel: { en: "Search stories", zh: "搜索故事" },
  randomStory: { en: "Random story", zh: "随机故事" },
  resetFilters: { en: "Reset filters", zh: "重置筛选" },
  resetView: { en: "Reset view", zh: "重置视图" },
  explorer: { en: "Explorer", zh: "探索区" },
  gallery: { en: "Gallery", zh: "画廊" },
  showGallery: { en: "Show gallery", zh: "展开画廊" },
  hideGallery: { en: "Hide gallery", zh: "收起画廊" },
  emptyTitle: {
    en: "No stories match this search yet.",
    zh: "暂时没有匹配这次搜索的故事。"
  },
  emptyBody: {
    en: "Try a broader place, culture, theme, or clear the current lenses to reopen the full atlas.",
    zh: "试试更宽泛的地点、文化或主题，或清除当前筛选，重新打开完整故事地图。"
  },
  suggestedSearches: { en: "Suggested searches", zh: "推荐搜索" },
  footerNote: {
    en: "Pick a row, click a marker, or jump into a random path.",
    zh: "选择一行、点击标记，或随机跳入一条故事路径。"
  },
  mapTitle: { en: "Myth atlas", zh: "神话地图" },
  terrainLegendTitle: { en: "Terrain key", zh: "地形图例" },
  terrainLegendHint: { en: "Early-spring relief overlay", zh: "初春风格化地貌图层" },
  globalAtlas: { en: "Global atlas", zh: "全球故事地图" },
  visibleStories: { en: "visible stories", zh: "可见故事" },
  dragToOrbit: { en: "drag to orbit", zh: "拖拽旋转" },
  selectToFocus: { en: "select to focus", zh: "选择后聚焦" },
  desktopGuideTitle: { en: "Quick desktop guide", zh: "桌面快速指引" },
  desktopGuideBody: {
    en: "Drag to orbit, scroll to zoom, and click any map pin to open its story.",
    zh: "拖拽可旋转，滚轮可缩放，点击任意地图标记即可打开对应故事。"
  },
  desktopGuideInline: {
    en: "Drag to orbit · Scroll to zoom · Click a map pin to open a story",
    zh: "拖拽旋转 · 滚轮缩放 · 点击地图标记打开故事"
  },
  gotIt: { en: "Got it", zh: "知道了" },
  localTipsAria: { en: "Local exploration tips", zh: "本地探索提示" },
  localExplore: { en: "Explore locally", zh: "本地探索" },
  localExploreBody: {
    en: "Follow regions, compare themes, and jump between related stories.",
    zh: "沿地区浏览、比较主题，并在相关故事之间快速切换。"
  },
  tryExamples: { en: "Try: Greece, sun, underworld, trickster", zh: "试试：希腊、太阳、冥界、骗子" },
  chooseStoryTitle: {
    en: "Choose a story to open its context.",
    zh: "选择一个故事以展开它的背景。"
  },
  chooseStoryBody: {
    en: "Start with a list row, a globe marker, or let the atlas pick a random route.",
    zh: "你可以从列表、地球标记开始，或让地图为你随机挑选一条路径。"
  },
  startWithGreece: { en: "Start with Greece", zh: "从希腊开始" },
  closeStoryDetails: { en: "Close story details", zh: "关闭故事详情" },
  themes: { en: "Themes", zh: "主题" },
  tags: { en: "Tags", zh: "标签" },
  relatedPaths: { en: "Related paths", zh: "相关路径" },
  learnMore: { en: "Learn more", zh: "了解更多" },
  language: { en: "Language", zh: "语言" },
  chinese: { en: "中文", zh: "中文" },
  english: { en: "English", zh: "English" },
  openStory: { en: "Open", zh: "打开" },
  selectStory: { en: "Select", zh: "选择" },
  soundOn: { en: "Play background music", zh: "播放背景音乐" },
  soundOff: { en: "Pause background music", zh: "暂停背景音乐" },
  tourStart: { en: "Start guided story tour", zh: "开始导览故事巡游" },
  tourStop: { en: "Stop guided story tour", zh: "停止导览故事巡游" },
  narrationOn: { en: "Enable spoken narration", zh: "开启语音讲述" },
  narrationOff: { en: "Disable spoken narration", zh: "关闭语音讲述" },
  focusEnter: { en: "Enter focused globe view", zh: "进入聚焦地球视图" },
  focusExit: { en: "Exit focused globe view", zh: "退出聚焦地球视图" }
} as const;

export function t(locale: Locale, key: keyof typeof uiText) {
  return uiText[key][locale];
}

export function getActiveLensesLabel(locale: Locale, count: number) {
  if (locale === "zh") {
    return `已启用 ${count} 个筛选视角`;
  }

  return `${count} active ${count === 1 ? "lens" : "lenses"}`;
}

export function getResultsLabel(locale: Locale, count: number, query: string, activeCategoryCount: number) {
  const trimmedQuery = query.trim();

  if (locale === "zh") {
    if (trimmedQuery && activeCategoryCount > 0) {
      return `共 ${count} 个故事，匹配“${trimmedQuery}”，并启用 ${activeCategoryCount} 个筛选视角`;
    }

    if (trimmedQuery) {
      return `共 ${count} 个故事，匹配“${trimmedQuery}”`;
    }

    if (activeCategoryCount > 0) {
      return `共 ${count} 个故事，已启用 ${activeCategoryCount} 个筛选视角`;
    }

    return `故事地图中共 ${count} 个故事`;
  }

  const countLabel = `${count} ${count === 1 ? "story" : "stories"}`;

  if (trimmedQuery && activeCategoryCount > 0) {
    return `${countLabel} for “${trimmedQuery}” in ${activeCategoryCount} active ${activeCategoryCount === 1 ? "lens" : "lenses"}`;
  }

  if (trimmedQuery) {
    return `${countLabel} for “${trimmedQuery}”`;
  }

  if (activeCategoryCount > 0) {
    return `${countLabel} in ${activeCategoryCount} active ${activeCategoryCount === 1 ? "lens" : "lenses"}`;
  }

  return `${countLabel} in the atlas`;
}

export const searchSuggestions = [
  { query: { en: "sun", zh: "太阳" }, display: { en: "sun", zh: "太阳" } },
  { query: { en: "Greece", zh: "希腊" }, display: { en: "Greece", zh: "希腊" } },
  { query: { en: "Egypt", zh: "埃及" }, display: { en: "Egypt", zh: "埃及" } },
  { query: { en: "trickster", zh: "骗子" }, display: { en: "trickster", zh: "骗子" } }
] as const;
