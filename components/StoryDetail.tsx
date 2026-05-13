"use client";

import { Compass, ExternalLink, MapPinned, X } from "lucide-react";
import { useEffect, useRef } from "react";
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
};

export function StoryDetail({ layout }: StoryDetailProps) {
  const locale = useExploreStore((state) => state.locale);
  const selectedStoryId = useExploreStore((state) => state.selectedStoryId);
  const selectStory = useExploreStore((state) => state.selectStory);
  const soundEnabled = useExploreStore((state) => state.soundEnabled);
  const narrationStoryId = useExploreStore((state) => state.narrationStoryId);
  const narrationSegmentIndex = useExploreStore((state) => state.narrationSegmentIndex);
  const selectedStory = stories.find((story) => story.id === selectedStoryId);
  const activeNarrationRef = useRef<HTMLElement | null>(null);
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

  if (!selectedStory) {
    if (layout === "mobile") {
      return null;
    }

    return (
      <div className={`detail-card detail-card-${layout} detail-empty detail-empty-guided`}>
        <MapPinned size={20} />
        <div>
          <strong>{t(locale, "chooseStoryTitle")}</strong>
          <p>{t(locale, "chooseStoryBody")}</p>
        </div>
        <div className="empty-state-actions">
          <button className="ghost-button empty-state-button" onClick={() => selectStory("pandora")} type="button">
            <Compass size={14} />
            {t(locale, "startWithGreece")}
          </button>
        </div>
      </div>
    );
  }

  const meta = categoryMeta[selectedStory.category];
  const relatedStories = getRelatedStories(stories, selectedStory);
  const themes = localizeTextArray(selectedStory.themes, locale);
  const tags = localizeTextArray(selectedStory.tags, locale);
  const narrativeParagraphs = getStoryNarrativeSentenceParagraphs(selectedStory, locale);
  const setActiveNarrationElement = (element: HTMLElement | null) => {
    if (element) {
      activeNarrationRef.current = element;
    }
  };
  const handleSourceLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!selectedStory.sourceUrl || !isDesktopApp()) {
      return;
    }

    event.preventDefault();
    void openDesktopExternalUrl(selectedStory.sourceUrl);
  };

  return (
    <article
      className={`detail-card detail-card-${layout}`}
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
        <h2
          className="detail-title"
          data-narrating={activeNarrationSegmentIndex === 0}
          ref={activeNarrationSegmentIndex === 0 ? setActiveNarrationElement : undefined}
        >
          {localizeText(selectedStory.title, locale)}
        </h2>
        <div className="detail-narrative">
          {narrativeParagraphs.map((paragraph, index) => (
            <p className={index === 0 ? "detail-background" : undefined} key={index}>
              {paragraph.map((sentence, sentenceIndex) => {
                const segmentIndex = index * 5 + sentenceIndex + 1;
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
        {relatedStories.length > 0 ? (
          <div className="detail-section related-stories">
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
        {selectedStory.sourceUrl ? (
          <a
            className="source-link"
            href={selectedStory.sourceUrl}
            onClick={handleSourceLinkClick}
            rel="noreferrer"
            target="_blank"
          >
            {t(locale, "learnMore")} <ExternalLink size={14} />
          </a>
        ) : null}
      </div>
    </article>
  );
}
