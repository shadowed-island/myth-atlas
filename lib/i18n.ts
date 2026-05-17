import {
  defaultLocale,
  localeMetadata,
  supportedLocales,
  type Locale,
  type LocalizedText
} from "@/lib/story-types";

export function localizeText(text: LocalizedText, locale: Locale) {
  return getLocalizedValue(text, locale) ?? "";
}

export function localizeTextArray(values: LocalizedText[] | undefined, locale: Locale) {
  return values?.map((value) => localizeText(value, locale)) ?? [];
}

export function localizeParagraphs(
  values: Partial<Record<Locale, string[]>> | undefined,
  locale: Locale
) {
  return getLocalizedValue(values, locale) ?? [];
}

export function getLocalizedValues<T>(values: Partial<Record<Locale, T>> | undefined) {
  if (!values) {
    return [];
  }

  const orderedValues = supportedLocales
    .map((candidateLocale) => values[candidateLocale])
    .filter((value): value is T => Boolean(value));

  return [...new Set(orderedValues)];
}

function getLocalizedValue<T>(values: Partial<Record<Locale, T>> | undefined, locale: Locale) {
  if (!values) {
    return undefined;
  }

  const orderedLocales = [locale, defaultLocale, ...supportedLocales];

  for (const candidateLocale of orderedLocales) {
    const value = values[candidateLocale];

    if (value) {
      return value;
    }
  }

  return undefined;
}

const localized = (en: string, zh: string, es: string, ar: string) => ({
  en,
  zh,
  es,
  ar
});

export const uiText = {
  appEyebrow: localized("Myth Atlas", "Myth Atlas", "Myth Atlas", "أطلس الأساطير"),
  appTitle: localized("Story Globe", "故事地球仪", "Globo de historias", "كرة الحكايات"),
  appSubtitle: localized(
    "Browse world myths by region, culture, and recurring themes.",
    "按地区、文化与反复出现的主题浏览世界神话故事。",
    "Explora mitos del mundo por región, cultura y temas recurrentes.",
    "استكشف أساطير العالم حسب المنطقة والثقافة والموضوعات المتكررة."
  ),
  searchPlaceholder: localized(
    "Search a place, tradition, character, or theme",
    "搜索地点、传统、角色或主题",
    "Busca un lugar, tradición, personaje o tema",
    "ابحث عن مكان أو تقليد أو شخصية أو موضوع"
  ),
  searchAriaLabel: localized("Search stories", "搜索故事", "Buscar historias", "ابحث في القصص"),
  randomStory: localized("Random story", "随机故事", "Historia aleatoria", "قصة عشوائية"),
  randomShort: localized("Random", "随机", "Aleatorio", "عشوائي"),
  resetFilters: localized("Reset filters", "重置筛选", "Restablecer filtros", "إعادة ضبط المرشحات"),
  resetView: localized("Reset view", "重置视图", "Restablecer vista", "إعادة ضبط العرض"),
  resetShort: localized("Reset", "重置", "Reiniciar", "إعادة"),
  clearShort: localized("Clear", "清除", "Limpiar", "مسح"),
  explorer: localized("Explore", "探索", "Explorar", "استكشف"),
  filters: localized("Filters", "筛选", "Filtros", "المرشحات"),
  quickActions: localized("Quick actions", "快捷入口", "Acciones rápidas", "إجراءات سريعة"),
  immersiveControls: localized("Playback controls", "播放控制", "Controles de reproducción", "أدوات التحكم في التشغيل"),
  narrationCardHintDisabled: localized(
    "Select a story or start the tour to enable.",
    "选择一个故事或开启巡游即可启用。",
    "Selecciona una historia o inicia el recorrido para activarla.",
    "اختر قصة أو ابدأ الجولة لتفعيل السرد."
  ),
  listView: localized("List", "列表", "Lista", "قائمة"),
  cardView: localized("Cards", "卡片", "Tarjetas", "بطاقات"),
  switchToListView: localized(
    "Switch to list view",
    "切换到列表视图",
    "Cambiar a vista de lista",
    "التبديل إلى عرض القائمة"
  ),
  switchToCardView: localized(
    "Switch to card view",
    "切换到卡片视图",
    "Cambiar a vista de tarjetas",
    "التبديل إلى عرض البطاقات"
  ),
  gallery: localized("Gallery", "画廊", "Galería", "المعرض"),
  showGallery: localized("Show gallery", "展开画廊", "Mostrar galería", "إظهار المعرض"),
  hideGallery: localized("Hide gallery", "收起画廊", "Ocultar galería", "إخفاء المعرض"),
  emptyTitle: localized(
    "No stories match this search yet.",
    "暂时没有匹配这次搜索的故事。",
    "Todavía no hay historias que coincidan con esta búsqueda.",
    "لا توجد قصص تطابق هذا البحث حتى الآن."
  ),
  emptyBody: localized(
    "Try a broader place, culture, theme, or clear the current lenses to reopen the full atlas.",
    "试试更宽泛的地点、文化或主题，或清除当前筛选，重新打开完整故事地图。",
    "Prueba con un lugar, cultura o tema más amplio, o limpia los filtros actuales para reabrir el atlas completo.",
    "جرّب مكانًا أو ثقافة أو موضوعًا أوسع، أو امسح المرشحات الحالية لإعادة فتح الأطلس الكامل."
  ),
  suggestedSearches: localized("Suggested searches", "推荐搜索", "Búsquedas sugeridas", "عمليات بحث مقترحة"),
  footerNote: localized(
    "Pick a row, click a marker, or jump into a random path.",
    "选择一行、点击标记，或随机跳入一条故事路径。",
    "Elige una fila, haz clic en un marcador o entra en una ruta aleatoria.",
    "اختر صفًا أو انقر على علامة أو انتقل إلى مسار عشوائي."
  ),
  mapTitle: localized("Myth atlas", "神话地图", "Atlas mítico", "أطلس الأساطير"),
  terrainLegendTitle: localized("Terrain key", "地形图例", "Clave del terreno", "مفتاح التضاريس"),
  terrainLegendHint: localized(
    "Early-spring relief overlay",
    "初春风格化地貌图层",
    "Superposición de relieve de inicios de primavera",
    "طبقة تضاريس بطابع أوائل الربيع"
  ),
  globalAtlas: localized("Global atlas", "全球故事地图", "Atlas global", "الأطلس العالمي"),
  visibleStories: localized("visible stories", "可见故事", "historias visibles", "قصص ظاهرة"),
  dragToOrbit: localized("drag to orbit", "拖拽旋转", "arrastra para orbitar", "اسحب للدوران"),
  selectToFocus: localized("select to focus", "选择后聚焦", "selecciona para enfocar", "اختر للتركيز"),
  desktopGuideTitle: localized("Quick desktop guide", "桌面快速指引", "Guía rápida de escritorio", "دليل سريع لسطح المكتب"),
  desktopGuideBody: localized(
    "Drag to orbit, scroll to zoom, and click any map pin to open its story.",
    "拖拽可旋转，滚轮可缩放，点击任意地图标记即可打开对应故事。",
    "Arrastra para orbitar, desplaza para acercar y haz clic en cualquier marcador para abrir su historia.",
    "اسحب للدوران، ومرّر للتكبير، وانقر على أي علامة على الخريطة لفتح قصتها."
  ),
  desktopGuideInline: localized(
    "Drag to orbit · Scroll to zoom · Click a map pin to open a story",
    "拖拽旋转 · 滚轮缩放 · 点击地图标记打开故事",
    "Arrastra para orbitar · Desplaza para acercar · Haz clic en un marcador para abrir una historia",
    "اسحب للدوران · مرّر للتكبير · انقر على علامة لفتح قصة"
  ),
  gotIt: localized("Got it", "知道了", "Entendido", "فهمت"),
  localTipsAria: localized("Local exploration tips", "本地探索提示", "Consejos de exploración local", "نصائح للاستكشاف المحلي"),
  localExplore: localized("Explore locally", "本地探索", "Explora localmente", "استكشف محليًا"),
  localExploreBody: localized(
    "Follow regions, compare themes, and jump between related stories.",
    "沿地区浏览、比较主题，并在相关故事之间快速切换。",
    "Sigue regiones, compara temas y salta entre historias relacionadas.",
    "تتبّع المناطق، وقارن بين الموضوعات، وانتقل بين القصص المرتبطة."
  ),
  tryExamples: localized(
    "Try: Greece, sun, underworld, trickster",
    "试试：希腊、太阳、冥界、骗子",
    "Prueba: Grecia, sol, inframundo, embaucador",
    "جرّب: اليونان، الشمس، العالم السفلي، المخادع"
  ),
  chooseStoryTitle: localized(
    "Choose a story to open its context.",
    "选择一个故事以展开它的背景。",
    "Elige una historia para abrir su contexto.",
    "اختر قصة لفتح سياقها."
  ),
  chooseStoryBody: localized(
    "Start with a list row, a globe marker, or let the atlas pick a random route.",
    "你可以从列表、地球标记开始，或让地图为你随机挑选一条路径。",
    "Empieza con una fila de la lista, un marcador del globo o deja que el atlas elija una ruta aleatoria.",
    "ابدأ من صف في القائمة أو علامة على الكرة، أو دع الأطلس يختار لك مسارًا عشوائيًا."
  ),
  startWithGreece: localized("Start with Greece", "从希腊开始", "Comenzar con Grecia", "ابدأ باليونان"),
  trySunStories: localized("Try sun stories", "试试太阳主题", "Probar historias del sol", "جرّب قصص الشمس"),
  useRandomStory: localized("Use random story", "随机进入故事", "Usar historia aleatoria", "استخدم قصة عشوائية"),
  closeStoryDetails: localized("Close story details", "关闭故事详情", "Cerrar detalles de la historia", "إغلاق تفاصيل القصة"),
  themes: localized("Themes", "主题", "Temas", "الموضوعات"),
  tags: localized("Tags", "标签", "Etiquetas", "الوسوم"),
  relatedPaths: localized("Related paths", "相关路径", "Rutas relacionadas", "مسارات مرتبطة"),
  source: localized("Source", "来源", "Fuente", "المصدر"),
  sourceNote: localized(
    "Open the reference entry for a fuller version of this story.",
    "打开参考词条，查看这个故事更完整的背景。",
    "Abre la referencia para ver una versión más completa de esta historia.",
    "افتح المرجع لقراءة نسخة أكمل من هذه القصة."
  ),
  wikipediaEntry: localized("Wikipedia entry", "维基百科词条", "Entrada de Wikipedia", "مقالة ويكيبيديا"),
  referenceLink: localized("Reference link", "参考链接", "Enlace de referencia", "رابط المرجع"),
  learnMore: localized("Learn more", "了解更多", "Más información", "اعرف المزيد"),
  language: localized("Language", "语言", "Idioma", "اللغة"),
  openStory: localized("Open", "打开", "Abrir", "افتح"),
  selectStory: localized("Select", "选择", "Seleccionar", "اختر"),
  soundOn: localized("Play background music", "播放背景音乐", "Reproducir música de fondo", "تشغيل موسيقى الخلفية"),
  soundOff: localized("Pause background music", "暂停背景音乐", "Pausar música de fondo", "إيقاف موسيقى الخلفية مؤقتًا"),
  tourStart: localized("Start guided story tour", "开始导览故事巡游", "Iniciar recorrido guiado", "ابدأ الجولة القصصية الموجهة"),
  tourStop: localized("Stop guided story tour", "停止导览故事巡游", "Detener recorrido guiado", "أوقف الجولة القصصية الموجهة"),
  narrationOn: localized("Enable spoken narration", "开启语音讲述", "Activar narración hablada", "تفعيل السرد الصوتي"),
  narrationOff: localized("Disable spoken narration", "关闭语音讲述", "Desactivar narración hablada", "تعطيل السرد الصوتي"),
  focusEnter: localized("Enter focused globe view", "进入聚焦地球视图", "Entrar en vista enfocada", "الدخول إلى العرض المركّز"),
  focusExit: localized("Exit focused globe view", "退出聚焦地球视图", "Salir de la vista enfocada", "الخروج من العرض المركّز")
} as const;

export function t(locale: Locale, key: keyof typeof uiText) {
  return localizeText(uiText[key], locale);
}

export function getActiveLensesLabel(locale: Locale, count: number) {
  if (locale === "zh") {
    return `已启用 ${count} 个筛选视角`;
  }

  if (locale === "es") {
    return `${count} ${count === 1 ? "filtro activo" : "filtros activos"}`;
  }

  if (locale === "ar") {
    return `${count} ${count === 1 ? "عدسة نشطة" : "عدسات نشطة"}`;
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

  if (locale === "es") {
    const countLabel = `${count} ${count === 1 ? "historia" : "historias"}`;

    if (trimmedQuery && activeCategoryCount > 0) {
      return `${countLabel} para “${trimmedQuery}” con ${activeCategoryCount} ${activeCategoryCount === 1 ? "filtro activo" : "filtros activos"}`;
    }

    if (trimmedQuery) {
      return `${countLabel} para “${trimmedQuery}”`;
    }

    if (activeCategoryCount > 0) {
      return `${countLabel} con ${activeCategoryCount} ${activeCategoryCount === 1 ? "filtro activo" : "filtros activos"}`;
    }

    return `${countLabel} en el atlas`;
  }

  if (locale === "ar") {
    if (trimmedQuery && activeCategoryCount > 0) {
      return `${count} ${count === 1 ? "قصة" : "قصص"} تطابق “${trimmedQuery}” مع ${activeCategoryCount} ${activeCategoryCount === 1 ? "عدسة نشطة" : "عدسات نشطة"}`;
    }

    if (trimmedQuery) {
      return `${count} ${count === 1 ? "قصة" : "قصص"} تطابق “${trimmedQuery}”`;
    }

    if (activeCategoryCount > 0) {
      return `${count} ${count === 1 ? "قصة" : "قصص"} مع ${activeCategoryCount} ${activeCategoryCount === 1 ? "عدسة نشطة" : "عدسات نشطة"}`;
    }

    return `${count} ${count === 1 ? "قصة" : "قصص"} في الأطلس`;
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
  {
    query: { en: "sun", zh: "太阳", es: "sol", ar: "الشمس" },
    display: { en: "sun", zh: "太阳", es: "sol", ar: "الشمس" }
  },
  {
    query: { en: "Greece", zh: "希腊", es: "Grecia", ar: "اليونان" },
    display: { en: "Greece", zh: "希腊", es: "Grecia", ar: "اليونان" }
  },
  {
    query: { en: "Egypt", zh: "埃及", es: "Egipto", ar: "مصر" },
    display: { en: "Egypt", zh: "埃及", es: "Egipto", ar: "مصر" }
  },
  {
    query: { en: "trickster", zh: "骗子", es: "embaucador", ar: "مخادع" },
    display: { en: "trickster", zh: "骗子", es: "embaucador", ar: "مخادع" }
  }
] as const;

export const localeOptions = supportedLocales.map((locale) => localeMetadata[locale]);
