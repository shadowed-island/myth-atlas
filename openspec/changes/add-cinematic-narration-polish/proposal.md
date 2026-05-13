## Why

The previous polish pass improved visual density and basic audio, but the reference video also conveys a cinematic tour: regional motion, story-to-story paths, and narrated short-video style captions. This change adds that final layer of guided sensory polish.

## What Changes

- Add continent-scale glow zones and labels to make the globe read as world regions.
- Add glowing route arcs between representative stories.
- Add a cinematic caption overlay during guided tour playback.
- Add browser speech synthesis narration during tour when sound and narration are enabled.
- Extend e2e coverage for narration and tour caption behavior.

## Capabilities

### New Capabilities

- None.

### Modified Capabilities

- `story-globe`: Adds region heat zones, story route arcs, narrated tour captions, and stronger short-video style guided exploration.

## Impact

- Updates the Three.js scene with procedural route arcs and region glow layers.
- Extends existing Web Audio behavior with browser speech synthesis.
- Adds tour caption UI and e2e coverage.
