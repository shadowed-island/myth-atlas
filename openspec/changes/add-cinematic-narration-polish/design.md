## Context

The app already has a working globe, dense particles, emoji markers, sound toggle, and guided tour. This pass focuses on the remaining gap: making tour playback feel more like a narrated short video and making the world surface read as clustered cultural regions.

## Goals / Non-Goals

**Goals:**

- Add continent or region glow zones.
- Add visible story-to-story route arcs.
- Add cinematic caption overlay during tour mode.
- Add opt-in speech synthesis narration.

**Non-Goals:**

- Recording or bundling external narration files.
- Copying the reference video's exact captions, music, or watermark.
- Adding backend story routes.

## Decisions

- Use procedural region positions rather than real geographic polygon data for this polish pass.
- Use browser `speechSynthesis` for narration so no audio asset pipeline is required.
- Keep captions tied to the selected story and tour state so manual browsing remains uncluttered.

## Risks / Trade-offs

- Speech voices vary by OS and browser -> treat narration as optional enhancement.
- Procedural region zones are evocative rather than cartographically exact -> acceptable for this visual polish pass.
- Additional WebGL geometry can affect mobile performance -> keep route and region counts bounded.
