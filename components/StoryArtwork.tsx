"use client";

import Image from "next/image";
import { useState } from "react";
import { localizeText } from "@/lib/i18n";
import { getStoryEmoji } from "@/lib/story-emoji";
import { categoryMeta } from "@/lib/story-types";
import type { Story } from "@/lib/story-types";
import { useExploreStore } from "@/store/useExploreStore";

type StoryArtworkProps = {
  story: Story;
  className: string;
  priority?: boolean;
  sizes?: string;
};

export function StoryArtwork({
  story,
  className,
  priority = false,
  sizes = "(max-width: 900px) 100vw, 390px"
}: StoryArtworkProps) {
  const locale = useExploreStore((state) => state.locale);
  const meta = categoryMeta[story.category];
  const fallbackGlyph = getStoryEmoji(story.id);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const failed = Boolean(story.imageUrl && failedSrc === story.imageUrl);
  const countryCode = localizeText(story.country, "en").slice(0, 2).toUpperCase();

  if (story.imageUrl && !failed) {
    return (
      <Image
        alt=""
        className={className}
        decoding="async"
        height={1280}
        onError={() => setFailedSrc(story.imageUrl ?? null)}
        priority={priority}
        sizes={sizes}
        src={story.imageUrl}
        width={1280}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`${className} artwork-fallback`}
      style={{ "--artwork-color": meta.color } as React.CSSProperties}
    >
      <span className="artwork-glyph">{fallbackGlyph}</span>
      <span className="artwork-country">{countryCode || localizeText(story.country, locale).slice(0, 2).toUpperCase()}</span>
    </span>
  );
}
