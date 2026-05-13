## Context

The current app is a functional 3D story globe with searchable stories, filters, responsive panels, and basic luminous styling. The reference video has a denser sensory profile: many glowing cultural markers, emoji-like points, thumbnail walls, camera movement, and audio atmosphere.

The goal is not to copy the Douyin shell, watermark, or exact video edit. The goal is to make the web app feel much closer to the underlying product experience shown in the video.

## Goals / Non-Goals

**Goals:**

- Make the globe read as a dense myth/story star map within the first second.
- Add multiple marker forms: glow particles, emoji symbols, active story nodes, and heat clusters.
- Add a guided tour that demonstrates the product without requiring manual exploration.
- Add opt-in audio: ambience, hover/click chimes, and camera travel sweeps.
- Keep performance reasonable on desktop and mobile.

**Non-Goals:**

- Exact reproduction of Douyin UI, overlays, subtitles, or watermark.
- Licensed music extraction from the reference video.
- AI voiceover generation.
- Backend data ingestion or CMS work.
- Tens of thousands of real story records.

## Decisions

### Use procedural density rather than large real datasets

Decorative points and emoji markers can be generated deterministically around the existing seed stories. This creates the visual density of the reference while preserving the small curated data model.

Alternative considered: adding hundreds of real story records now. That would improve content depth but would slow the visual iteration and introduce source/copyright work.

### Keep audio generated in Web Audio

Small synthesized ambience and UI sounds avoid asset licensing and loading concerns. Audio will only start after the user explicitly enables it, matching browser autoplay policies.

Alternative considered: bundling music/audio files. That can sound richer, but licensing and file management are premature for this iteration.

### Add guided tour as a stateful UI behavior

The tour should select stories in sequence, focus the globe, and surface detail cards. This mirrors the reference video's narrated exploration without turning the app into a video player.

Alternative considered: purely decorative camera auto-rotation. That is simpler but does not communicate the product's story-browsing behavior.

## Risks / Trade-offs

- More particles can hurt mobile performance -> cap procedural point counts and use Points geometry rather than many meshes.
- Emoji labels can clutter the scene -> show only a bounded number and keep them non-interactive unless tied to story nodes.
- Web Audio can annoy users -> default to muted and expose an explicit sound toggle.
- Tour timers can fight manual exploration -> stop or reset tour state when users interact manually.

## Open Questions

- Should future polish include generated voice narration in Chinese?
- Should we eventually use real local image thumbnails instead of procedural thumbnails?
- Should mobile default to tour mode or manual mode?
