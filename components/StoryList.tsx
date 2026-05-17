"use client";

import { Compass, LayoutGrid, MapPin, Rows3, Search, Shuffle, Undo2 } from "lucide-react";
import { memo, useCallback, useEffect, useRef, type CSSProperties, type RefObject } from "react";
import { categoryIconComponents } from "@/lib/category-icons";
import { localizeText, searchSuggestions, t } from "@/lib/i18n";
import { getStoryEmoji } from "@/lib/story-emoji";
import { getStoryNarrativeLead } from "@/lib/story-narrative";
import { categoryMeta, storyCategories, type Story } from "@/lib/story-types";
import { playUiSound } from "@/lib/sound";
import { useExploreStore } from "@/store/useExploreStore";
import { StoryArtwork } from "@/components/StoryArtwork";

type StoryListProps = {
  stories: Story[];
  query: string;
  resultsLabel: string;
  hasActiveFilters: boolean;
  viewMode: "list" | "cards";
  onReset: () => void;
  onPickRandomStory: () => void;
  onToggleCategory: (category: (typeof storyCategories)[number]) => void;
  onViewModeChange: (viewMode: "list" | "cards") => void;
};

export function StoryList({
  stories,
  query,
  resultsLabel,
  hasActiveFilters,
  viewMode,
  onReset,
  onPickRandomStory,
  onToggleCategory,
  onViewModeChange
}: StoryListProps) {
  const locale = useExploreStore((state) => state.locale);
  const selectedStoryId = useExploreStore((state) => state.selectedStoryId);
  const activeCategories = useExploreStore((state) => state.activeCategories);
  const storyItemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const registerStoryItem = useCallback((storyId: string, node: HTMLButtonElement | null) => {
    storyItemRefs.current[storyId] = node;
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

    const targetItem = storyItemRefs.current[selectedStoryId];
    const listContainer = targetItem?.closest(".story-items, .story-card-grid");
    if (!targetItem || !(listContainer instanceof HTMLElement)) {
      return;
    }

    const itemRect = targetItem.getBoundingClientRect();
    const containerRect = listContainer.getBoundingClientRect();
    const isFullyVisible =
      itemRect.top >= containerRect.top &&
      itemRect.bottom <= containerRect.bottom;

    if (isFullyVisible) {
      return;
    }

    targetItem.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }, [selectedStoryId, viewMode]);

  return (
    <div className="story-list">
      <div className="panel-heading explore-heading">
        <div>
          <p className="eyebrow">{t(locale, "explorer")}</p>
          <h2>{resultsLabel}</h2>
        </div>
      </div>

      <section className="explore-section explore-view-mode" aria-label={t(locale, "listView")}>
        <div className="explore-section-header">
          <span className="explore-section-label">{t(locale, "explorer")}</span>
        </div>
        <div className="segmented-toggle" aria-label={t(locale, "explorer")}>
          <button
            aria-label={t(locale, "switchToListView")}
            aria-pressed={viewMode === "list"}
            className="segmented-toggle-button"
            data-active={viewMode === "list"}
            onClick={() => onViewModeChange("list")}
            type="button"
          >
            <Rows3 size={15} />
            {t(locale, "listView")}
          </button>
          <button
            aria-label={t(locale, "switchToCardView")}
            aria-pressed={viewMode === "cards"}
            className="segmented-toggle-button"
            data-active={viewMode === "cards"}
            onClick={() => onViewModeChange("cards")}
            type="button"
          >
            <LayoutGrid size={15} />
            {t(locale, "cardView")}
          </button>
        </div>
      </section>

      <section className="explore-section explore-filters" aria-label={t(locale, "filters")}>
        <div className="explore-section-header">
          <span className="explore-section-label">{t(locale, "filters")}</span>
        </div>
        <div className="category-strip category-strip-panel">
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
                onClick={() => onToggleCategory(category)}
                style={{ "--chip-color": meta.color } as CSSProperties}
                type="button"
              >
                <CategoryIcon className="chip-icon" size={15} strokeWidth={2.25} aria-hidden="true" />
                {localizeText(meta.shortLabel, locale)}
              </button>
            );
          })}
        </div>
      </section>

      <section className="explore-section explore-quick-actions" aria-label={t(locale, "quickActions")}>
        <div className="explore-section-header">
          <span className="explore-section-label">{t(locale, "quickActions")}</span>
        </div>
        <div className="quick-action-row">
          <button
            className="ghost-button quick-action-button"
            onClick={onPickRandomStory}
            title={t(locale, "randomStory")}
            type="button"
          >
            <Shuffle size={15} />
            {t(locale, "randomShort")}
          </button>
          <button
            className="ghost-button quick-action-button"
            data-active={hasActiveFilters}
            onClick={onReset}
            title={hasActiveFilters ? t(locale, "resetFilters") : t(locale, "resetView")}
            type="button"
          >
            <Undo2 size={15} />
            {hasActiveFilters ? t(locale, "clearShort") : t(locale, "resetShort")}
          </button>
        </div>
      </section>

      <section className="explore-results" aria-label={resultsLabel}>
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
        ) : viewMode === "list" ? (
          <div className="story-items" data-view-mode="list">
            {stories.map((story) => (
              <StoryRow
                key={story.id}
                registerItem={registerStoryItem}
                itemRefs={storyItemRefs}
                stories={stories}
                story={story}
              />
            ))}
          </div>
        ) : (
          <div className="story-card-grid" data-view-mode="cards">
            {stories.map((story) => (
              <StoryCard
                key={story.id}
                registerItem={registerStoryItem}
                story={story}
              />
            ))}
          </div>
        )}
      </section>

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
  registerItem: (storyId: string, node: HTMLButtonElement | null) => void;
  itemRefs: RefObject<Record<string, HTMLButtonElement | null>>;
  stories: Story[];
  story: Story;
};

const StoryRow = memo(function StoryRow({ registerItem, itemRefs, stories, story }: StoryRowProps) {
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
  const storyLead = getStoryNarrativeLead(story, locale) || localizeText(story.summary, locale);

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
          itemRefs.current[stories[nextIndex]?.id ?? ""]?.focus();
        }

        if (event.key === "Home") {
          event.preventDefault();
          itemRefs.current[stories[0]?.id ?? ""]?.focus();
        }

        if (event.key === "End") {
          event.preventDefault();
          itemRefs.current[stories[stories.length - 1]?.id ?? ""]?.focus();
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
        registerItem(story.id, node);
      }}
      style={{ "--story-color": meta.color } as CSSProperties}
      type="button"
    >
      <span className="story-thumb">
        <StoryArtwork className="story-thumb-image" sizes="52px" story={story} />
        <span className="story-thumb-emoji" aria-hidden="true">{storyEmoji}</span>
      </span>
      <div className="story-copy">
        <div className="story-copy-header">
          <strong className="story-title">{localizeText(story.title, locale)}</strong>
          <span className="story-category">{localizeText(meta.shortLabel, locale)}</span>
        </div>
        <span className="story-meta">
          <MapPin size={13} />
          <span className="story-meta-text">
            {localizeText(story.country, locale)} · {localizeText(story.culture, locale)}
          </span>
        </span>
        <p className="story-summary">{storyLead}</p>
      </div>
    </button>
  );
});

type StoryCardProps = {
  registerItem: (storyId: string, node: HTMLButtonElement | null) => void;
  story: Story;
};

const StoryCard = memo(function StoryCard({ registerItem, story }: StoryCardProps) {
  const locale = useExploreStore((state) => state.locale);
  const selected = useExploreStore((state) => state.selectedStoryId === story.id);
  const selectStory = useExploreStore((state) => state.selectStory);
  const setHoveredStoryId = useExploreStore((state) => state.setHoveredStoryId);
  const soundEnabled = useExploreStore((state) => state.soundEnabled);
  const meta = categoryMeta[story.category];
  const storyLead = getStoryNarrativeLead(story, locale) || localizeText(story.summary, locale);

  return (
    <button
      aria-label={`${t(locale, "openStory")} ${localizeText(story.title, locale)}`}
      className="story-card"
      data-selected={selected}
      onClick={() => {
        selectStory(story.id);
        if (soundEnabled) {
          playUiSound("select");
        }
      }}
      onFocus={() => {
        setHoveredStoryId(story.id);
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
      ref={(node) => {
        registerItem(story.id, node);
      }}
      style={{ "--story-color": meta.color } as CSSProperties}
      type="button"
    >
      <StoryArtwork className="story-card-image" sizes="(max-width: 1023px) 44vw, 200px" story={story} />
      <span className="story-card-body">
        <span className="story-card-topline">
          <strong className="story-card-title">{localizeText(story.title, locale)}</strong>
          <span className="story-category">{localizeText(meta.shortLabel, locale)}</span>
        </span>
        <span className="story-meta">
          <MapPin size={13} />
          <span className="story-meta-text">
            {localizeText(story.country, locale)} · {localizeText(story.culture, locale)}
          </span>
        </span>
        <span className="story-card-summary">{storyLead}</span>
      </span>
    </button>
  );
});
