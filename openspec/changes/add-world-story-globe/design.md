## Context

The repository currently contains only the reference video and newly initialized OpenSpec artifacts. The desired product is a web-based "world story globe" inspired by the video: a dark, luminous 3D earth covered with mythology and folklore story nodes, searchable and browsable by geography, culture, and category.

The first version should prove the interaction model and visual direction without taking on platform concerns such as accounts, submissions, moderation, or CMS operations.

## Goals / Non-Goals

**Goals:**

- Build an interactive 3D globe as the primary screen.
- Show curated story nodes at latitude/longitude coordinates.
- Support search, category filters, story selection, and globe/list synchronization.
- Deliver a responsive layout that works on desktop and vertical mobile screens.
- Keep the first data source simple enough to iterate quickly.

**Non-Goals:**

- User accounts, favorites, comments, or submissions.
- CMS/editor workflows.
- AI-generated story content.
- Real-time collaboration.
- Production-scale rendering for tens of thousands of nodes.
- Full GIS feature parity with a traditional map product.

## Decisions

### Use Next.js, React, and TypeScript for the app shell

Next.js provides a straightforward path for a web app with route structure, API endpoints, metadata, image handling, and future server-side needs. TypeScript is important because story records, coordinates, categories, and selection state are central to the product.

Alternative considered: Vite + React. It is simpler and fast for prototypes, but Next.js leaves more room for content pages, API routes, and deployment conventions without much extra cost.

### Use Three.js through `@react-three/fiber` for the globe

The reference experience depends on WebGL: a 3D earth, camera movement, glow, dense markers, and animated particles. `@react-three/fiber` lets the app keep React UI and Three.js scene state in one mental model.

Alternative considered: MapLibre GL JS or deck.gl. Those are excellent for geospatial map applications, but the desired first impression is a cinematic 3D globe rather than a conventional vector map.

### Start with static JSON story seed data

The MVP should focus on interaction and visual fit. Static seed data makes it easy to shape the schema, test the UI, and avoid premature backend work.

Alternative considered: PostgreSQL/PostGIS from the beginning. It will likely be useful later for spatial queries, but it adds operational cost before the product shape is validated.

### Use a single shared exploration state

The globe, search field, filters, story list, and detail drawer should all read from one shared state model: selected story, active filters, active country/region, camera target, and hovered node. Zustand is a good fit for this small interactive state surface.

Alternative considered: Context only. It can work, but globe interactions and UI panels will benefit from explicit, testable state transitions.

### Treat dense-node rendering as a later optimization track

The MVP can render dozens or hundreds of points directly. Video-level density should later use instancing, clustering, level-of-detail rules, and label visibility thresholds.

Alternative considered: Optimize for thousands of nodes immediately. That risks spending too much time on engine work before confirming the story experience.

## Risks / Trade-offs

- WebGL performance on mobile → Start with bounded seed data, use simple geometries, and add instancing only when density requires it.
- Visual clutter from many labels → Show labels only for selected, hovered, or zoom-appropriate nodes.
- Ambiguous story locations → Store both precise coordinates and broader place metadata so the UI can explain uncertainty.
- Content copyright risk → Store source references and use public-domain or licensed images/content for seed data.
- 3D accessibility limits → Keep search, list navigation, and detail cards fully usable outside the canvas.

## Migration Plan

This is a new feature with no existing user data. The first implementation can ship behind the app's default route or a dedicated route. If the 3D route causes performance issues, it can be disabled without affecting other functionality because there is no existing app surface yet.

## Open Questions

- Should the first dataset focus only on mythology, or include broader folktales and legends?
- Should the MVP be Chinese-only, English-only, or bilingual?
- What is the target first-story count: 50, 100, or 200?
- Should story cards show full text or only summaries with source links?
- Should the initial globe use a realistic earth texture, a stylized dark map, or a custom generated visual style?
