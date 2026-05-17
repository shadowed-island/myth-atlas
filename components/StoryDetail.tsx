"use client";

import { Compass, ExternalLink, MapPinned, Shuffle, Sun, X } from "lucide-react";
import { useEffect, useMemo, useRef } from "react";
import { isDesktopApp, openDesktopExternalUrl } from "@/lib/desktop";
import { getRelatedStories } from "@/lib/filter";
import { localizeText, localizeTextArray, t } from "@/lib/i18n";
import { getStoryNarrativeSentenceParagraphs } from "@/lib/story-narrative";
import { stories } from "@/lib/stories";
import { categoryMeta } from "@/lib/story-types";
import { useExploreStore } from "@/store/useExploreStore";
import { StoryArtwork } from "@/components/StoryArtwork";
import { playUiSound } from "@/lib/sound";

type StoryDetailProps = {
  layout: "desktop" | "mobile";
  onPickRandomStory?: () => void;
};

export function StoryDetail({ layout, onPickRandomStory }: StoryDetailProps) {
  const locale = useExploreStore((state) => state.locale);
  const selectedStoryId = useExploreStore((state) => state.selectedStoryId);
  const selectStory = useExploreStore((state) => state.selectStory);
  const soundEnabled = useExploreStore((state) => state.soundEnabled);
  const narrationStoryId = useExploreStore((state) => state.narrationStoryId);
  const narrationSegmentIndex = useExploreStore((state) => state.narrationSegmentIndex);
  const setSearchQuery = useExploreStore((state) => state.setSearchQuery);
  const clearFilters = useExploreStore((state) => state.clearFilters);
  const selectedStory = useMemo(
    () => stories.find((story) => story.id === selectedStoryId),
    [selectedStoryId]
  );
  const activeNarrationRef = useRef<HTMLElement | null>(null);
  const detailCardRef = useRef<HTMLElement | null>(null);
  const activeNarrationSegmentIndex =
    selectedStory && narrationStoryId === selectedStory.id ? narrationSegmentIndex : null;

  useEffect(() => {
    if (!selectedStory || activeNarrationSegmentIndex === null) {
      return;
    }

    activeNarrationRef.current?.scrollIntoView({
      block: "center",
      behavior: "smooth"
    });
  }, [activeNarrationSegmentIndex, selectedStory]);

  useEffect(() => {
    if (!selectedStory || layout !== "mobile") {
      return;
    }

    if (!window.matchMedia("(max-width: 1023px)").matches) {
      return;
    }

    window.requestAnimationFrame(() => {
      detailCardRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end"
      });
    });
  }, [layout, selectedStory]);

  const meta = selectedStory ? categoryMeta[selectedStory.category] : null;
  const relatedStories = useMemo(
    () => (selectedStory ? getRelatedStories(stories, selectedStory) : []),
    [selectedStory]
  );
  const themes = useMemo(
    () => localizeTextArray(selectedStory?.themes, locale),
    [locale, selectedStory]
  );
  const tags = useMemo(
    () => localizeTextArray(selectedStory?.tags, locale),
    [locale, selectedStory]
  );
  const narrativeParagraphs = useMemo(
    () => (selectedStory ? getStoryNarrativeSentenceParagraphs(selectedStory, locale) : []),
    [locale, selectedStory]
  );
  const narrativeParagraphOffsets = useMemo(
    () =>
      narrativeParagraphs.reduce<number[]>((offsets, paragraph, index) => {
        const previousOffset = index === 0 ? 1 : offsets[index - 1] + narrativeParagraphs[index - 1].length;
        offsets.push(previousOffset);
        return offsets;
      }, []),
    [narrativeParagraphs]
  );
  const sourceMeta = useMemo(() => {
    if (!selectedStory?.sourceUrl) {
      return null;
    }

    try {
      const url = new URL(selectedStory.sourceUrl);
      const isWikipedia = url.hostname.includes("wikipedia.org");

      return {
        href: selectedStory.sourceUrl,
        hostname: url.hostname.replace(/^www\./, ""),
        label: isWikipedia ? t(locale, "wikipediaEntry") : t(locale, "referenceLink")
      };
    } catch {
      return {
        href: selectedStory.sourceUrl,
        hostname: selectedStory.sourceUrl,
        label: t(locale, "referenceLink")
      };
    }
  }, [locale, selectedStory]);
  const setActiveNarrationElement = (element: HTMLElement | null) => {
    if (element) {
      activeNarrationRef.current = element;
    }
  };
  const handleSourceLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const sourceUrl = selectedStory?.sourceUrl;

    if (!sourceUrl || !isDesktopApp()) {
      return;
    }

    event.preventDefault();
    void openDesktopExternalUrl(sourceUrl);
  };

  if (!selectedStory || !meta) {
    if (layout === "mobile") {
      return null;
    }

    return (
      <div className={`detail-card-empty detail-card-${layout} detail-empty detail-empty-guided`}>
        <div className="detail-empty-copy">
          <span className="detail-empty-icon" aria-hidden="true">
            <MapPinned size={20} />
          </span>
          <div>
            <strong>{t(locale, "chooseStoryTitle")}</strong>
            <p>{t(locale, "chooseStoryBody")}</p>
          </div>
        </div>
        <div className="detail-empty-actions">
          <button className="ghost-button empty-state-button" onClick={() => selectStory("pandora")} type="button">
            <Compass size={14} />
            {t(locale, "startWithGreece")}
          </button>
          <button
            className="ghost-button empty-state-button"
            onClick={() => {
              clearFilters();
              setSearchQuery(locale === "zh" ? "太阳" : "sun");
              selectStory(null);
            }}
            type="button"
          >
            <Sun size={14} />
            {t(locale, "trySunStories")}
          </button>
          <button className="ghost-button empty-state-button" onClick={onPickRandomStory} type="button">
            <Shuffle size={14} />
            {t(locale, "useRandomStory")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <article
      className={`detail-card detail-card-${layout}`}
      ref={detailCardRef}
      style={{ "--detail-color": meta.color } as React.CSSProperties}
    >
      <button
        aria-label={t(locale, "closeStoryDetails")}
        className="icon-button close-detail"
        onClick={() => {
          selectStory(null);
          if (soundEnabled) {
            playUiSound("hover");
          }
        }}
        type="button"
      >
        <X size={16} />
      </button>

      <StoryArtwork
        className="detail-image"
        priority={layout === "mobile"}
        sizes={layout === "mobile" ? "100vw" : "390px"}
        story={selectedStory}
      />

      <div className="detail-body">
        <p className="detail-kicker">
          {localizeText(meta.label, locale)} · {localizeText(selectedStory.country, locale)} · {localizeText(selectedStory.culture, locale)}
        </p>
        {selectedStory.originalTitle ? (
          <p className="detail-original-title">{localizeText(selectedStory.originalTitle, locale)}</p>
        ) : null}
        <h2
          className="detail-title"
          data-narrating={activeNarrationSegmentIndex === 0}
          ref={activeNarrationSegmentIndex === 0 ? setActiveNarrationElement : undefined}
        >
          {localizeText(selectedStory.title, locale)}
        </h2>
        <div className="detail-intro-card">
          <p className="detail-summary">{localizeText(selectedStory.summary, locale)}</p>
          {selectedStory.background ? (
            <p className="detail-context">{localizeText(selectedStory.background, locale)}</p>
          ) : null}
        </div>
        {relatedStories.length > 0 ? (
          <div className="detail-section related-stories detail-related-priority">
            <span className="detail-section-label">{t(locale, "relatedPaths")}</span>
            <div className="related-story-list">
              {relatedStories.map((story) => (
                <button
                  className="related-story-button"
                  key={story.id}
                  onClick={() => {
                    selectStory(story.id);
                    if (soundEnabled) {
                      playUiSound("select");
                    }
                  }}
                  type="button"
                >
                  <strong>{localizeText(story.title, locale)}</strong>
                  <span>
                    {localizeText(story.country, locale)} · {localizeText(categoryMeta[story.category].shortLabel, locale)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : null}
        <div className="detail-narrative">
          {narrativeParagraphs.map((paragraph, index) => (
            <p className={index === 0 ? "detail-background" : undefined} key={index}>
              {paragraph.map((sentence, sentenceIndex) => {
                const segmentIndex = narrativeParagraphOffsets[index] + sentenceIndex;
                const isActive = activeNarrationSegmentIndex === segmentIndex;
                const isRead =
                  activeNarrationSegmentIndex !== null && segmentIndex < activeNarrationSegmentIndex;

                return (
                  <span
                    className="narration-sentence"
                    data-narrating={isActive}
                    data-read={isRead}
                    key={sentence}
                    ref={isActive ? setActiveNarrationElement : undefined}
                  >
                    {sentence}
                    {locale === "en" ? " " : null}
                  </span>
                );
              })}
            </p>
          ))}
        </div>
        {themes.length ? (
          <div className="detail-section">
            <span className="detail-section-label">{t(locale, "themes")}</span>
            <div className="tag-row">
              {themes.map((theme) => (
                <span key={theme}>{theme}</span>
              ))}
            </div>
          </div>
        ) : null}
        <div className="detail-section">
          <span className="detail-section-label">{t(locale, "tags")}</span>
          <div className="tag-row">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        {sourceMeta ? (
          <div className="detail-section detail-source-section">
            <span className="detail-section-label">{t(locale, "source")}</span>
            <p className="detail-source-note">{t(locale, "sourceNote")}</p>
            <a
              className="source-link"
              href={sourceMeta.href}
              onClick={handleSourceLinkClick}
              rel="noreferrer"
              target="_blank"
            >
              <span className="source-link-copy">
                <strong>{sourceMeta.label}</strong>
                <span>{sourceMeta.hostname}</span>
              </span>
              <ExternalLink size={14} />
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
