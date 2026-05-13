"use client";

import { Compass, MapPin, Search, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { memo, useCallback, useEffect, useRef, useState, type CSSProperties, type RefObject } from "react";
import { localizeText, searchSuggestions, t } from "@/lib/i18n";
import { getStoryEmoji } from "@/lib/story-emoji";
import { categoryMeta } from "@/lib/story-types";
import type { Story } from "@/lib/story-types";
import { playUiSound } from "@/lib/sound";
import { useExploreStore } from "@/store/useExploreStore";
import { StoryArtwork } from "@/components/StoryArtwork";

type StoryListProps = {
  stories: Story[];
  query: string;
  resultsLabel: string;
  onReset: () => void;
  onPickRandom: () => void;
};

export function StoryList({
  stories,
  query,
  resultsLabel,
  onReset,
  onPickRandom
}: StoryListProps) {
  const locale = useExploreStore((state) => state.locale);
  const selectedStoryId = useExploreStore((state) => state.selectedStoryId);
  const selectStory = useExploreStore((state) => state.selectStory);
  const soundEnabled = useExploreStore((state) => state.soundEnabled);
  const [galleryExpanded, setGalleryExpanded] = useState(false);
  const storyRowRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const registerStoryRow = useCallback((storyId: string, node: HTMLButtonElement | null) => {
    storyRowRefs.current[storyId] = node;
  }, []);

  const suggestions = [
    query.trim() ? searchSuggestions[0] : searchSuggestions[1],
    searchSuggestions[2],
    searchSuggestions[3]
  ];

  useEffect(() => {
    if (!selectedStoryId) {
      return;
    }

    const targetRow = storyRowRefs.current[selectedStoryId];
    targetRow?.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, [selectedStoryId]);

  return (
    <div className="story-list">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">{t(locale, "explorer")}</p>
          <h2>{resultsLabel}</h2>
        </div>
      </div>

      {stories.length === 0 ? (
        <div className="list-empty-state">
          <Search size={18} aria-hidden="true" />
          <strong>{t(locale, "emptyTitle")}</strong>
          <p>{t(locale, "emptyBody")}</p>
          <div className="empty-state-actions">
            <button className="ghost-button empty-state-button" onClick={onReset} type="button">
              {t(locale, "resetFilters")}
            </button>
            <div className="empty-state-suggestions" aria-label={t(locale, "suggestedSearches")}>
              {suggestions.map((suggestion) => (
                <button
                  className="category-chip suggestion-chip"
                  key={suggestion.query.en}
                  onClick={() => {
                    const { clearFilters, setSearchQuery } = useExploreStore.getState();
                    clearFilters();
                    setSearchQuery(suggestion.query[locale]);
                  }}
                  type="button"
                >
                  {suggestion.display[locale]}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="story-items">
            {stories.map((story) => (
              <StoryRow
                key={story.id}
                registerRow={registerStoryRow}
                rowRefs={storyRowRefs}
                stories={stories}
                story={story}
              />
            ))}
          </div>

          <div className="thumbnail-wall-section" data-expanded={galleryExpanded}>
            <div className="thumbnail-wall-heading">
              <button
                aria-expanded={galleryExpanded}
                className="ghost-button gallery-toggle-button"
                onClick={() => setGalleryExpanded(!galleryExpanded)}
                type="button"
              >
                {galleryExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                {galleryExpanded ? t(locale, "hideGallery") : t(locale, "showGallery")}
              </button>
              <button className="ghost-button gallery-random-button" onClick={onPickRandom} type="button">
                <Sparkles size={14} />
                {t(locale, "randomStory")}
              </button>
            </div>
            {galleryExpanded ? (
              <div className="thumbnail-wall" aria-label="Story thumbnail gallery">
                {stories.map((story) => {
                  const meta = categoryMeta[story.category];
                  const selected = selectedStoryId === story.id;

                  return (
                    <button
                      aria-label={`${t(locale, "openStory")} ${localizeText(story.title, locale)}`}
                      className="thumbnail-tile"
                      data-selected={selected}
                      key={story.id}
                      onClick={() => {
                        selectStory(story.id);
                        if (soundEnabled) {
                          playUiSound("select");
                        }
                      }}
                      style={{ "--story-color": meta.color } as CSSProperties}
                      type="button"
                    >
                      <StoryArtwork
                        className="thumbnail-image"
                        sizes="(max-width: 900px) 22vw, 82px"
                        story={story}
                      />
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        </>
      )}

      {stories.length > 0 ? (
        <div className="list-footer-note">
          <Compass size={14} />
          <span>{t(locale, "footerNote")}</span>
        </div>
      ) : null}
    </div>
  );
}

type StoryRowProps = {
  registerRow: (storyId: string, node: HTMLButtonElement | null) => void;
  rowRefs: RefObject<Record<string, HTMLButtonElement | null>>;
  stories: Story[];
  story: Story;
};

const StoryRow = memo(function StoryRow({ registerRow, rowRefs, stories, story }: StoryRowProps) {
  const locale = useExploreStore((state) => state.locale);
  const selected = useExploreStore((state) => state.selectedStoryId === story.id);
  const hovered = useExploreStore((state) => state.hoveredStoryId === story.id);
  const touring = useExploreStore(
    (state) => state.tourActive && state.selectedStoryId === story.id
  );
  const selectStory = useExploreStore((state) => state.selectStory);
  const setHoveredStoryId = useExploreStore((state) => state.setHoveredStoryId);
  const soundEnabled = useExploreStore((state) => state.soundEnabled);
  const meta = categoryMeta[story.category];
  const storyEmoji = getStoryEmoji(story.id);

  return (
    <button
      aria-current={touring ? "step" : undefined}
      className="story-row"
      data-hovered={hovered}
      data-selected={selected}
      data-touring={touring}
      onClick={() => {
        selectStory(story.id);
        if (soundEnabled) {
          playUiSound("select");
        }
      }}
      onFocus={() => {
        setHoveredStoryId(story.id);
      }}
      onKeyDown={(event) => {
        const currentIndex = stories.findIndex((item) => item.id === story.id);

        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault();
          const offset = event.key === "ArrowDown" ? 1 : -1;
          const nextIndex = (currentIndex + offset + stories.length) % stories.length;
          rowRefs.current[stories[nextIndex]?.id ?? ""]?.focus();
        }

        if (event.key === "Home") {
          event.preventDefault();
          rowRefs.current[stories[0]?.id ?? ""]?.focus();
        }

        if (event.key === "End") {
          event.preventDefault();
          rowRefs.current[stories[stories.length - 1]?.id ?? ""]?.focus();
        }
      }}
      onMouseEnter={() => {
        setHoveredStoryId(story.id);
        if (soundEnabled) {
          playUiSound("hover");
        }
      }}
      onMouseLeave={() => {
        setHoveredStoryId(null);
      }}
      onBlur={() => {
        if (hovered) {
          setHoveredStoryId(null);
        }
      }}
      ref={(node) => {
        registerRow(story.id, node);
      }}
      style={{ "--story-color": meta.color } as CSSProperties}
      type="button"
    >
      <span className="story-thumb">
        <StoryArtwork className="story-thumb-image" sizes="52px" story={story} />
        <span className="story-thumb-emoji" aria-hidden="true">{storyEmoji}</span>
      </span>
      <span className="story-copy">
        <strong>{localizeText(story.title, locale)}</strong>
        <span>
          <MapPin size={13} />
          {localizeText(story.country, locale)} · {localizeText(story.culture, locale)}
        </span>
      </span>
      <span className="story-category">{localizeText(meta.shortLabel, locale)}</span>
    </button>
  );
});
