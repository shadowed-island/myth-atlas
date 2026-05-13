"use client";

import dynamic from "next/dynamic";
import {
  BookOpen,
  Compass,
  Expand,
  Play,
  Rotate3D,
  Search,
  Sparkles,
  Square,
  Volume2,
  VolumeX,
  Captions,
  Shuffle,
  Undo2,
  MousePointer2
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { filterStories, getResultsLabel, prioritizeStoriesByFocus } from "@/lib/filter";
import { localizeText, t, getActiveLensesLabel } from "@/lib/i18n";
import { getStoryNarrativeSentences } from "@/lib/story-narrative";
import { stories } from "@/lib/stories";
import { categoryIconComponents } from "@/lib/category-icons";
import { categoryMeta, storyCategories } from "@/lib/story-types";
import type { Locale, Story } from "@/lib/story-types";
import {
  playUiSound,
  setAmbienceEnabled,
  speakNarrationLine,
  startAmbienceAutoplay,
  stopNarration
} from "@/lib/sound";
import { useExploreStore } from "@/store/useExploreStore";
import { StoryDetail } from "@/components/StoryDetail";
import { StoryArtwork } from "@/components/StoryArtwork";
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
  const segments = mode === "intro" ? [title, sentences[0] ?? localizeText(story.summary, locale)] : [title, ...sentences];
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
    return index === 1 ? "。" : "";
  }

  return " ";
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
  const hoveredStoryId = useExploreStore((state) => state.hoveredStoryId);
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
  const [showDesktopHintDismissed, setShowDesktopHintDismissed] = useState(false);
  const globeStageRef = useRef<HTMLElement | null>(null);
  const previousTourActiveRef = useRef(tourActive);

  const visibleStories = useMemo(
    () => filterStories(stories, searchQuery, activeCategories),
    [activeCategories, searchQuery]
  );
  const selectedStory = stories.find((story) => story.id === selectedStoryId) ?? null;
  const hoveredStory = stories.find((story) => story.id === hoveredStoryId) ?? null;
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
  const activeStory = selectedStory ?? hoveredStory;
  const showGuidedCaption = narrationEnabled && Boolean(selectedStory);
  const showSpotlight = Boolean(selectedStory) && !showGuidedCaption;

  const activeLocation = activeStory
    ? `${localizeText(activeStory.country, locale)} · ${localizeText(activeStory.culture, locale)}`
    : activeCategories.length > 0
      ? getActiveLensesLabel(locale, activeCategories.length)
      : t(locale, "globalAtlas");

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

          <div className="topbar-secondary-actions">
            <div className="language-toggle" aria-label={t(locale, "language")} role="group">
              <button
                className="language-button"
                data-active={locale === "zh"}
                onClick={() => setLocale("zh")}
                type="button"
              >
                {t(locale, "chinese")}
              </button>
              <button
                className="language-button"
                data-active={locale === "en"}
                onClick={() => setLocale("en")}
                type="button"
              >
                {t(locale, "english")}
              </button>
            </div>
            <button className="ghost-button" onClick={pickRandomStory} type="button">
              <Shuffle size={15} />
              {t(locale, "randomStory")}
            </button>
            <button
              className="ghost-button"
              data-active={hasActiveFilters}
              onClick={resetExploration}
              type="button"
            >
              <Undo2 size={15} />
              {hasActiveFilters ? t(locale, "resetFilters") : t(locale, "resetView")}
            </button>
          </div>

          <div className="top-actions">
            <button
              aria-label={soundEnabled ? t(locale, "soundOff") : t(locale, "soundOn")}
              aria-pressed={soundEnabled}
              className="icon-button action-button"
              data-tooltip={soundEnabled ? t(locale, "soundOff") : t(locale, "soundOn")}
              onClick={() => setSoundEnabled(!soundEnabled)}
              type="button"
            >
              {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>
            <button
              aria-label={tourActive ? t(locale, "tourStop") : t(locale, "tourStart")}
              aria-pressed={tourActive}
              className="icon-button action-button action-button-primary"
              data-tooltip={tourActive ? t(locale, "tourStop") : t(locale, "tourStart")}
              onClick={() => {
                setTourActive(!tourActive);
                setShowDesktopHintDismissed(true);
                playUiSound("select");
              }}
              type="button"
            >
              {tourActive ? <Square size={16} /> : <Play size={17} />}
            </button>
            <button
              aria-label={narrationEnabled ? t(locale, "narrationOff") : t(locale, "narrationOn")}
              aria-pressed={narrationEnabled}
              className="icon-button action-button"
              data-tooltip={narrationEnabled ? t(locale, "narrationOff") : t(locale, "narrationOn")}
              disabled={!hasNarrationContext}
              onClick={() => {
                setNarrationEnabled(!narrationEnabled);
                playUiSound("hover");
              }}
              type="button"
            >
              <Captions size={18} />
            </button>
            <button
              aria-label={focusMode ? t(locale, "focusExit") : t(locale, "focusEnter")}
              aria-pressed={focusMode}
              className="icon-button action-button"
              data-tooltip={focusMode ? t(locale, "focusExit") : t(locale, "focusEnter")}
              onClick={() => {
                setFocusMode(!focusMode);
                setShowDesktopHintDismissed(true);
                playUiSound("hover");
              }}
              type="button"
            >
              <Expand size={18} />
            </button>
          </div>
        </header>

        <div className="category-strip" aria-label="Story categories">
          {storyCategories.map((category) => {
            const meta = categoryMeta[category];
            const active = activeCategories.includes(category);
            const CategoryIcon = categoryIconComponents[category];

            return (
              <button
                aria-pressed={active}
                className="category-chip"
                data-active={active}
                key={category}
                onClick={() => {
                  toggleCategory(category);
                  setShowDesktopHintDismissed(true);
                }}
                style={{ "--chip-color": meta.color } as React.CSSProperties}
                type="button"
              >
                <CategoryIcon className="chip-icon" size={15} strokeWidth={2.25} aria-hidden="true" />
                {localizeText(meta.shortLabel, locale)}
              </button>
            );
          })}
        </div>

        <div className="content-grid">
          <section className="globe-stage" aria-label="Interactive 3D globe" ref={globeStageRef}>
            <div className="canvas-wrap">
              <GlobeScene locale={locale} stories={visibleStories} zoomScopeRef={globeStageRef} />
            </div>
            <div className="map-title-card" aria-live="polite">
              <span>{t(locale, "mapTitle")}</span>
              <strong>{activeLocation}</strong>
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
            {showGuidedCaption && selectedStory ? (
              <div className="cinematic-caption">
                <span>{localizeText(selectedStory.country, locale)} · {localizeText(selectedStory.culture, locale)}</span>
                <strong>{localizeText(selectedStory.title, locale)}</strong>
                <p>{localizeText(selectedStory.summary, locale)}</p>
              </div>
            ) : null}
            {showSpotlight && selectedStory ? (
              <aside
                className="story-spotlight"
                style={
                  {
                    "--spotlight-color": categoryMeta[selectedStory.category].color
                  } as React.CSSProperties
                }
              >
                <StoryArtwork
                  className="spotlight-artwork"
                  priority
                  sizes="92px"
                  story={selectedStory}
                />
                <div>
                  <span>{localizeText(selectedStory.country, locale)} · {localizeText(selectedStory.culture, locale)}</span>
                  <strong>{localizeText(selectedStory.title, locale)}</strong>
                  <p>{localizeText(selectedStory.summary, locale)}</p>
                </div>
              </aside>
            ) : null}
            <StoryDetail layout="mobile" />
          </section>

          <aside className="explorer-panel" aria-label="Story explorer">
            <StoryList
              stories={prioritizedStories}
              query={searchQuery}
              resultsLabel={resultsLabel}
              onPickRandom={pickRandomStory}
              onReset={resetExploration}
            />
            <StoryDetail layout="desktop" />
          </aside>
        </div>
      </section>
    </main>
  );
}
