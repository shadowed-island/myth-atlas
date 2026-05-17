"use client";

import dynamic from "next/dynamic";
import {
  BookOpen,
  Captions,
  Compass,
  Globe,
  MousePointer2,
  Play,
  Rotate3D,
  Search,
  Sparkles,
  Square,
  Volume2,
  VolumeX,
  Expand
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { filterStories, getResultsLabel, prioritizeStoriesByFocus } from "@/lib/filter";
import { localeOptions, localizeText, t } from "@/lib/i18n";
import { detectInitialLocale, persistLocale } from "@/lib/locale";
import { getStoryNarrativeSentences } from "@/lib/story-narrative";
import { stories } from "@/lib/stories";
import { localeMetadata, type Locale, type Story } from "@/lib/story-types";
import {
  playUiSound,
  setAmbienceEnabled,
  speakNarrationLine,
  startAmbienceAutoplay,
  stopNarration
} from "@/lib/sound";
import { useExploreStore } from "@/store/useExploreStore";
import { StoryDetail } from "@/components/StoryDetail";
import { StoryList } from "@/components/StoryList";

const GlobeScene = dynamic(
  () => import("@/components/GlobeScene").then((mod) => mod.GlobeScene),
  {
    ssr: false,
    loading: () => (
      <div className="globe-loading">
        <Sparkles size={22} />
      </div>
    )
  }
);

const tourPauseAfterNarrationMs = 5000;

type NarrationPassage = {
  ranges: Array<{ end: number; segmentIndex: number; start: number }>;
  segmentDurations: number[];
  text: string;
};

function getStoryNarrationPassage(
  story: Story,
  locale: Locale,
  mode: "full" | "intro"
): NarrationPassage {
  const title = localizeText(story.title, locale);
  const sentences = getStoryNarrativeSentences(story, locale);
  const segments = mode === "intro" ? [title, ...(sentences[0] ? [sentences[0]] : [])] : [title, ...sentences];
  const ranges: NarrationPassage["ranges"] = [];
  let text = "";

  segments.forEach((segment, index) => {
    const separator = getNarrationSeparator(locale, index);
    text += separator;
    const start = text.length;
    text += segment;
    ranges.push({ start, end: text.length, segmentIndex: index });
  });

  return {
    ranges,
    segmentDurations: segments.map((segment, index) =>
      estimateNarrationSegmentDuration(segment, locale, index === 0)
    ),
    text
  };
}

function getNarrationSeparator(locale: Locale, index: number) {
  if (index === 0) {
    return "";
  }

  if (locale === "zh") {
    return index === 1 ? "。" : localeMetadata[locale].sentenceJoiner;
  }

  return localeMetadata[locale].sentenceJoiner;
}

function estimateNarrationSegmentDuration(segment: string, locale: Locale, isTitle: boolean) {
  if (isTitle) {
    return Math.max(900, segment.length * 85);
  }

  if (locale === "zh") {
    return Math.min(7600, Math.max(1400, segment.length * 190));
  }

  const wordCount = segment.trim().split(/\s+/).filter(Boolean).length;
  return Math.min(8200, Math.max(1500, wordCount * 430));
}

function findNarrationSegmentIndex(passage: NarrationPassage, charIndex: number) {
  return (
    passage.ranges.find((range) => charIndex >= range.start && charIndex < range.end)
      ?.segmentIndex ?? passage.ranges.at(-1)?.segmentIndex ?? 0
  );
}

export function StoryGlobeApp() {
  const locale = useExploreStore((state) => state.locale);
  const setLocale = useExploreStore((state) => state.setLocale);
  const searchQuery = useExploreStore((state) => state.searchQuery);
  const activeCategories = useExploreStore((state) => state.activeCategories);
  const setSearchQuery = useExploreStore((state) => state.setSearchQuery);
  const toggleCategory = useExploreStore((state) => state.toggleCategory);
  const clearFilters = useExploreStore((state) => state.clearFilters);
  const soundEnabled = useExploreStore((state) => state.soundEnabled);
  const setSoundEnabled = useExploreStore((state) => state.setSoundEnabled);
  const tourActive = useExploreStore((state) => state.tourActive);
  const setTourActive = useExploreStore((state) => state.setTourActive);
  const advanceTour = useExploreStore((state) => state.advanceTour);
  const narrationEnabled = useExploreStore((state) => state.narrationEnabled);
  const setNarrationEnabled = useExploreStore((state) => state.setNarrationEnabled);
  const setNarrationPosition = useExploreStore((state) => state.setNarrationPosition);
  const selectedStoryId = useExploreStore((state) => state.selectedStoryId);
  const focusMode = useExploreStore((state) => state.focusMode);
  const setFocusMode = useExploreStore((state) => state.setFocusMode);
  const selectStory = useExploreStore((state) => state.selectStory);
  const storyListViewMode = useExploreStore((state) => state.storyListViewMode);
  const setStoryListViewMode = useExploreStore((state) => state.setStoryListViewMode);
  const [showDesktopHintDismissed, setShowDesktopHintDismissed] = useState(false);
  const globeStageRef = useRef<HTMLElement | null>(null);
  const previousTourActiveRef = useRef(tourActive);

  const visibleStories = useMemo(
    () => filterStories(stories, searchQuery, activeCategories),
    [activeCategories, searchQuery]
  );
  const selectedStory = stories.find((story) => story.id === selectedStoryId) ?? null;
  const prioritizedStories = useMemo(
    () => prioritizeStoriesByFocus(visibleStories, selectedStory),
    [selectedStory, visibleStories]
  );
  const resultsLabel = useMemo(
    () => getResultsLabel(visibleStories, searchQuery, activeCategories, locale),
    [activeCategories, locale, searchQuery, visibleStories]
  );
  const hasActiveFilters = searchQuery.trim().length > 0 || activeCategories.length > 0;
  const showDesktopHint =
    !showDesktopHintDismissed &&
    !selectedStoryId &&
    !searchQuery.trim() &&
    activeCategories.length === 0 &&
    !focusMode &&
    !tourActive;
  const showCondensedHud = !selectedStory && !tourActive;
  const hasNarrationContext = Boolean(selectedStory) || tourActive;
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement | null>(null);

  const pickRandomStory = () => {
    if (visibleStories.length === 0) {
      return;
    }

    const randomStory = visibleStories[Math.floor(Math.random() * visibleStories.length)];
    selectStory(randomStory.id);
    setShowDesktopHintDismissed(true);
    if (soundEnabled) {
      playUiSound("select");
    }
  };

  const resetExploration = () => {
    clearFilters();
    setShowDesktopHintDismissed(true);
  };

  useEffect(() => {
    const detected = detectInitialLocale();
    if (detected !== useExploreStore.getState().locale) {
      setLocale(detected);
    }
  }, [setLocale]);

  useEffect(() => {
    persistLocale(locale);
  }, [locale]);

  useEffect(() => {
    document.documentElement.lang = localeMetadata[locale].htmlLang;
    document.documentElement.dir = localeMetadata[locale].dir;
    document.body.dir = localeMetadata[locale].dir;
  }, [locale]);

  useEffect(() => {
    if (!languageMenuOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!languageMenuRef.current?.contains(event.target as Node)) {
        setLanguageMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLanguageMenuOpen(false);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [languageMenuOpen]);

  useEffect(() => {
    if (!soundEnabled) {
      void setAmbienceEnabled(false);
      return undefined;
    }

    return startAmbienceAutoplay();
  }, [soundEnabled]);

  useEffect(() => {
    if (!hasNarrationContext && narrationEnabled) {
      setNarrationEnabled(false);
    }
  }, [hasNarrationContext, narrationEnabled, setNarrationEnabled]);

  useEffect(() => {
    if (!narrationEnabled || !selectedStory || tourActive) {
      if (!narrationEnabled || !selectedStory) {
        stopNarration();
        setNarrationPosition(null, null);
      }
      return;
    }

    let cancelled = false;
    let elapsed = 0;
    const timers: number[] = [];
    const passage = getStoryNarrationPassage(selectedStory, locale, "full");
    const markSegment = (segmentIndex: number) => {
      if (!cancelled) {
        setNarrationPosition(selectedStory.id, segmentIndex);
      }
    };

    markSegment(0);
    passage.segmentDurations.forEach((duration, index) => {
      if (index > 0) {
        timers.push(window.setTimeout(() => markSegment(index), elapsed));
      }
      elapsed += duration;
    });

    void speakNarrationLine(passage.text, locale, {
      onBoundary: (charIndex) => markSegment(findNarrationSegmentIndex(passage, charIndex)),
      onStart: () => markSegment(0)
    }).then(() => {
      if (!cancelled) {
        timers.push(window.setTimeout(() => setNarrationPosition(null, null), 900));
      }
    });

    return () => {
      cancelled = true;
      timers.forEach((timer) => window.clearTimeout(timer));
      stopNarration();
      setNarrationPosition(null, null);
    };
  }, [locale, narrationEnabled, selectedStory, setNarrationPosition, tourActive]);

  useEffect(() => {
    if (previousTourActiveRef.current && !tourActive) {
      stopNarration();
    }
    previousTourActiveRef.current = tourActive;
  }, [tourActive]);

  useEffect(() => {
    if (!focusMode) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFocusMode(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focusMode, setFocusMode]);

  useEffect(() => {
    if (!selectedStoryId || !globeStageRef.current) {
      return;
    }

    if (!window.matchMedia("(max-width: 1023px)").matches) {
      return;
    }

    window.requestAnimationFrame(() => {
      globeStageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }, [selectedStoryId]);

  useEffect(() => {
    if (!tourActive || visibleStories.length === 0) {
      return;
    }

    let nextTourIndex = useExploreStore.getState().tourIndex;
    let cancelled = false;
    let pauseTimer: number | null = null;
    let resolvePause: (() => void) | null = null;
    let narrationTimers: number[] = [];

    const clearNarrationTimers = () => {
      narrationTimers.forEach((timer) => window.clearTimeout(timer));
      narrationTimers = [];
    };

    const waitForPause = () =>
      new Promise<void>((resolve) => {
        resolvePause = resolve;
        pauseTimer = window.setTimeout(() => {
          pauseTimer = null;
          resolvePause = null;
          resolve();
        }, tourPauseAfterNarrationMs);
      });

    const runTour = async () => {
      while (!cancelled) {
        const nextIndex = nextTourIndex % visibleStories.length;
        const story = visibleStories[nextIndex];
        nextTourIndex += 1;
        advanceTour(story.id, nextTourIndex);
        playUiSound("tour");
        if (narrationEnabled) {
          clearNarrationTimers();
          const passage = getStoryNarrationPassage(story, locale, "intro");
          const markSegment = (segmentIndex: number) => {
            if (!cancelled) {
              setNarrationPosition(story.id, segmentIndex);
            }
          };
          let elapsed = 0;

          markSegment(0);
          passage.segmentDurations.forEach((duration, index) => {
            if (index > 0) {
              narrationTimers.push(window.setTimeout(() => markSegment(index), elapsed));
            }
            elapsed += duration;
          });

          await speakNarrationLine(passage.text, locale, {
            onBoundary: (charIndex) => markSegment(findNarrationSegmentIndex(passage, charIndex)),
            onStart: () => markSegment(0)
          });
        }

        if (cancelled) {
          return;
        }

        await waitForPause();
      }
    };

    void runTour();
    return () => {
      cancelled = true;
      if (pauseTimer) {
        window.clearTimeout(pauseTimer);
      }
      clearNarrationTimers();
      resolvePause?.();
      stopNarration();
      setNarrationPosition(null, null);
    };
  }, [advanceTour, locale, narrationEnabled, setNarrationPosition, tourActive, visibleStories]);

  return (
    <main className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section
        className="workspace"
        aria-label="Myth Atlas story globe"
        data-focus-mode={focusMode}
      >
        <header className="topbar">
          <div className="brand-lockup">
            <div className="brand-mark">
              <Compass size={20} />
            </div>
            <div>
              <p className="eyebrow">{t(locale, "appEyebrow")}</p>
              <h1>{t(locale, "appTitle")}</h1>
              <p className="brand-subtitle">{t(locale, "appSubtitle")}</p>
            </div>
          </div>

          <label className="search-control">
            <Search size={18} aria-hidden="true" />
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder={t(locale, "searchPlaceholder")}
              aria-label={t(locale, "searchAriaLabel")}
            />
          </label>

          <div className="topbar-tools">
            <button
              aria-label={tourActive ? t(locale, "tourStop") : t(locale, "tourStart")}
              aria-pressed={tourActive}
              className="topbar-icon-button"
              data-active={tourActive}
              onClick={() => {
                setTourActive(!tourActive);
                setShowDesktopHintDismissed(true);
                playUiSound("select");
              }}
              title={tourActive ? t(locale, "tourStop") : t(locale, "tourStart")}
              type="button"
            >
              {tourActive ? <Square size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
            </button>
            <button
              aria-label={narrationEnabled ? t(locale, "narrationOff") : t(locale, "narrationOn")}
              aria-pressed={narrationEnabled}
              className="topbar-icon-button"
              data-active={narrationEnabled}
              disabled={!hasNarrationContext}
              onClick={() => {
                setNarrationEnabled(!narrationEnabled);
                playUiSound("hover");
              }}
              title={
                hasNarrationContext
                  ? narrationEnabled
                    ? t(locale, "narrationOff")
                    : t(locale, "narrationOn")
                  : t(locale, "narrationCardHintDisabled")
              }
              type="button"
            >
              <Captions size={16} aria-hidden="true" />
            </button>
            <button
              aria-label={soundEnabled ? t(locale, "soundOff") : t(locale, "soundOn")}
              aria-pressed={soundEnabled}
              className="topbar-icon-button"
              data-active={soundEnabled}
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? t(locale, "soundOff") : t(locale, "soundOn")}
              type="button"
            >
              {soundEnabled ? (
                <Volume2 size={16} aria-hidden="true" />
              ) : (
                <VolumeX size={16} aria-hidden="true" />
              )}
            </button>
            <span aria-hidden="true" className="topbar-tools-divider" />
            <button
              aria-label={focusMode ? t(locale, "focusExit") : t(locale, "focusEnter")}
              aria-pressed={focusMode}
              className="topbar-icon-button"
              data-active={focusMode}
              onClick={() => {
                setFocusMode(!focusMode);
                setShowDesktopHintDismissed(true);
                playUiSound("hover");
              }}
              title={focusMode ? t(locale, "focusExit") : t(locale, "focusEnter")}
              type="button"
            >
              <Expand size={16} aria-hidden="true" />
            </button>
            <div className="topbar-language">
              <div className="language-menu" ref={languageMenuRef}>
                <button
                  aria-expanded={languageMenuOpen}
                  aria-haspopup="menu"
                  aria-label={`${t(locale, "language")}: ${localeMetadata[locale].nativeLabel}`}
                  className="ghost-button language-trigger-button"
                  onClick={() => setLanguageMenuOpen((open) => !open)}
                  title={`${t(locale, "language")}: ${localeMetadata[locale].nativeLabel}`}
                  type="button"
                >
                  <Globe size={16} aria-hidden="true" />
                  <span className="language-trigger-label" lang={localeMetadata[locale].htmlLang}>
                    {localeMetadata[locale].nativeLabel}
                  </span>
                </button>
                {languageMenuOpen ? (
                  <div
                    aria-label={t(locale, "language")}
                    className="language-menu-popover"
                    role="menu"
                  >
                    {localeOptions.map((option) => {
                      const showEnglishAlias = option.code !== "en";
                      return (
                        <button
                          aria-checked={locale === option.code}
                          className="language-menu-option"
                          data-active={locale === option.code}
                          key={option.code}
                          onClick={() => {
                            setLocale(option.code);
                            setLanguageMenuOpen(false);
                          }}
                          role="menuitemradio"
                          type="button"
                        >
                          <span className="language-option-native" lang={option.htmlLang}>
                            {option.nativeLabel}
                          </span>
                          {showEnglishAlias ? (
                            <span className="language-option-english">{option.englishLabel}</span>
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </header>

        <div className="content-grid" data-detail-state={selectedStoryId ? "filled" : "empty"}>
          <aside className="explorer-panel" aria-label="Story explorer">
            <StoryList
              hasActiveFilters={hasActiveFilters}
              onPickRandomStory={pickRandomStory}
              onReset={resetExploration}
              onToggleCategory={(category) => {
                toggleCategory(category);
                setShowDesktopHintDismissed(true);
              }}
              onViewModeChange={setStoryListViewMode}
              query={searchQuery}
              resultsLabel={resultsLabel}
              stories={prioritizedStories}
              viewMode={storyListViewMode}
            />
          </aside>

          <section className="globe-stage" aria-label="Interactive 3D globe" ref={globeStageRef}>
            <div className="canvas-wrap">
              <GlobeScene locale={locale} stories={visibleStories} zoomScopeRef={globeStageRef} />
            </div>
            <div className="globe-hud" data-condensed={showCondensedHud}>
              <div>
                <span>{visibleStories.length}</span>
                <p>{t(locale, "visibleStories")}</p>
              </div>
              <div>
                <Rotate3D size={16} />
                <p>{t(locale, "dragToOrbit")}</p>
              </div>
              <div>
                <BookOpen size={16} />
                <p>{t(locale, "selectToFocus")}</p>
              </div>
            </div>
            {showDesktopHint ? (
              <div className="desktop-hint-inline" role="note" aria-label="Desktop navigation hints">
                <MousePointer2 size={15} />
                <p>{t(locale, "desktopGuideInline")}</p>
                <button className="ghost-button desktop-hint-dismiss" onClick={() => setShowDesktopHintDismissed(true)} type="button">
                  {t(locale, "gotIt")}
                </button>
              </div>
            ) : null}
            <StoryDetail layout="mobile" onPickRandomStory={pickRandomStory} />
          </section>

          <aside className="detail-panel" aria-label="Story detail">
            <StoryDetail layout="desktop" onPickRandomStory={pickRandomStory} />
          </aside>
        </div>
      </section>
    </main>
  );
}
