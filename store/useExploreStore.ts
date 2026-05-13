"use client";

import { create } from "zustand";
import type { Locale, StoryCategory } from "@/lib/story-types";

type ExploreState = {
  locale: Locale;
  searchQuery: string;
  activeCategories: StoryCategory[];
  selectedStoryId: string | null;
  hoveredStoryId: string | null;
  focusedStoryId: string | null;
  soundEnabled: boolean;
  tourActive: boolean;
  tourIndex: number;
  narrationEnabled: boolean;
  narrationStoryId: string | null;
  narrationSegmentIndex: number | null;
  focusMode: boolean;
  setLocale: (locale: Locale) => void;
  setSearchQuery: (searchQuery: string) => void;
  toggleCategory: (category: StoryCategory) => void;
  clearFilters: () => void;
  selectStory: (storyId: string | null) => void;
  setHoveredStoryId: (storyId: string | null) => void;
  focusStory: (storyId: string | null) => void;
  setSoundEnabled: (soundEnabled: boolean) => void;
  setTourActive: (tourActive: boolean) => void;
  advanceTour: (storyId: string, tourIndex: number) => void;
  setNarrationEnabled: (narrationEnabled: boolean) => void;
  setNarrationPosition: (storyId: string | null, segmentIndex: number | null) => void;
  setFocusMode: (focusMode: boolean) => void;
};

export const useExploreStore = create<ExploreState>((set) => ({
  locale: "en",
  searchQuery: "",
  activeCategories: [],
  selectedStoryId: null,
  hoveredStoryId: null,
  focusedStoryId: null,
  soundEnabled: true,
  tourActive: false,
  tourIndex: 0,
  narrationEnabled: false,
  narrationStoryId: null,
  narrationSegmentIndex: null,
  focusMode: false,
  setLocale: (locale) => set({ locale }),
  setSearchQuery: (searchQuery) => set({ searchQuery, tourActive: false }),
  toggleCategory: (category) =>
    set((state) => {
      const hasCategory = state.activeCategories.includes(category);
      return {
        activeCategories: hasCategory
          ? state.activeCategories.filter((item) => item !== category)
          : [...state.activeCategories, category],
        tourActive: false
      };
    }),
  clearFilters: () => set({ activeCategories: [], searchQuery: "", tourActive: false }),
  selectStory: (storyId) =>
    set({
      selectedStoryId: storyId,
      focusedStoryId: storyId,
      tourActive: false,
      narrationStoryId: null,
      narrationSegmentIndex: null
    }),
  setHoveredStoryId: (storyId) => set({ hoveredStoryId: storyId }),
  focusStory: (storyId) => set({ focusedStoryId: storyId }),
  setSoundEnabled: (soundEnabled) => set({ soundEnabled }),
  setTourActive: (tourActive) => set({ tourActive }),
  advanceTour: (storyId, tourIndex) =>
    set({
      selectedStoryId: storyId,
      focusedStoryId: storyId,
      tourIndex
    }),
  setNarrationEnabled: (narrationEnabled) =>
    set({
      narrationEnabled,
      ...(narrationEnabled ? {} : { narrationStoryId: null, narrationSegmentIndex: null })
    }),
  setNarrationPosition: (storyId, segmentIndex) =>
    set({ narrationStoryId: storyId, narrationSegmentIndex: segmentIndex }),
  setFocusMode: (focusMode) => set({ focusMode })
}));
