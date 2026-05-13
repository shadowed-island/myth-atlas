## Context

Myth Atlas is currently a Next.js App Router application whose primary experience is a client-rendered 3D globe. The renderer already depends heavily on browser APIs and browser-oriented asset paths: WebGL via `@react-three/fiber`, browser audio APIs, speech synthesis, `next/image`, and many root-relative `public/` asset references for story artwork and ambience audio.

The desktop migration should preserve that renderer rather than replace it. The design therefore needs to add Electron around the existing app while avoiding common packaging problems such as broken `/_next` assets, broken `/public` paths, unsafe renderer privileges, and accidental in-app handling of external reference links.

## Goals / Non-Goals

**Goals:**

- Ship Myth Atlas as an Electron desktop application without rewriting the current Next.js renderer.
- Keep browser development and desktop development both available during the migration.
- Support packaged desktop builds that do not depend on a separately managed Next.js production server.
- Maintain a secure renderer boundary with preload-mediated APIs instead of direct Node.js access.
- Preserve the current story globe UX, including WebGL, artwork, audio, and narration behaviors wherever Chromium supports them.

**Non-Goals:**

- Replacing browser speech synthesis or audio with native OS integrations in this change.
- Introducing multi-window workflows, deep native menus, tray behavior, or auto-update infrastructure.
- Rebuilding the renderer in Vite, pure React, or another desktop-specific framework.
- Adding backend services, sync, account state, or online-only desktop features.

## Decisions

### Keep Next.js as the renderer and add Electron main/preload entry points

The existing app already behaves like a browser renderer and has no server-side product requirements. Preserving it minimizes migration risk and keeps the current UI, tests, and data flow relevant.

Alternative considered: rewrite the renderer stack for Electron. That would create a much larger change, add visual regression risk, and discard working browser behavior without solving the real packaging problem.

### Use two runtime modes: Next dev server in development, exported static build behind a local packaged static server in production

Development should remain straightforward: start `next dev`, then point Electron at `http://127.0.0.1:<port>`. Production should not run a full Next server inside Electron because the app does not need server-side rendering, API routes, or server actions.

However, the production app should also avoid loading the exported app directly from `file://`. The current codebase uses root-relative `public/` asset paths such as `/audio/...` and `/story-artwork/...`, and Next build output also references `/_next/...` assets. Serving the exported `out/` directory through a loopback-only static file server started by the Electron main process preserves HTTP semantics for those paths and avoids a large renderer refactor.

Alternative considered: `loadFile()` from the export directory. This is smaller on paper, but it pushes path-rewriting work into the renderer and risks subtle asset failures.

Alternative considered: run a packaged Next custom server in production. This would support the existing app too, but it adds server runtime complexity with little product benefit.

### Make the renderer export-compatible instead of server-dependent

The Next app should be configured for static export so packaged desktop builds are a pure static artifact plus Electron shell. That includes setting export-oriented Next config and ensuring any renderer features remain compatible with static output.

Because the app uses `next/image` for story artwork, the design should disable the default image optimization path for exported builds, typically by using unoptimized image output. This keeps local artwork rendering compatible with a static export and avoids introducing an image server just for desktop packaging.

Alternative considered: replace `next/image` everywhere with raw `<img>` tags. That is possible, but it is broader renderer churn than the desktop shell requires.

### Keep Electron security defaults strict and expose only a minimal preload API

The BrowserWindow should keep `nodeIntegration` disabled, `contextIsolation` enabled, and renderer access limited to a narrow preload bridge. The preload API should cover only desktop-specific needs that the current web app cannot do directly, such as retrieving app metadata, opening external URLs safely, or reporting desktop mode.

Alternative considered: exposing `ipcRenderer` directly or enabling Node.js APIs in the renderer. That would make the migration faster but would unnecessarily weaken the security model.

### Open external story source links in the system browser, not inside the app window

Story detail cards already expose external reference URLs. In the desktop shell, these links should open through the OS browser so Myth Atlas remains a single-purpose reading and exploration surface instead of spawning uncontrolled in-app browsing windows.

Alternative considered: allowing Electron to create new web contents for external links. That increases complexity and broadens the app's attack surface.

### Preserve browser-based verification and add desktop smoke coverage instead of replacing the test strategy

The current tests and browser E2E checks remain valuable because the renderer still exists as a web app. Desktop migration should therefore add smoke tests for Electron boot, packaged asset loading, and external link handling, while keeping the browser-based suite as the faster main regression loop.

Alternative considered: move all E2E testing to Electron immediately. That would slow iteration and reduce coverage of the standalone renderer.

## Risks / Trade-offs

- [Static export incompatibility] → Keep the Electron migration within static-compatible Next features and verify `next build` plus export output early.
- [Packaged asset path regressions] → Serve packaged assets over a loopback static server and add smoke coverage for artwork, audio, and `/_next` asset loading.
- [Speech/audio differences across desktop platforms] → Preserve current browser-based implementations and degrade gracefully when Chromium voice availability differs by OS.
- [Security drift from convenience IPC] → Limit preload surface area and forbid direct renderer access to Node.js or broad IPC passthrough.
- [Dual-mode maintenance burden for browser and desktop] → Share the same renderer, reuse existing tests, and keep desktop-specific logic isolated to Electron entry points and a small adapter layer.

## Migration Plan

1. Update the renderer build configuration for static export compatibility, including image handling and any export-sensitive path assumptions.
2. Add Electron main and preload entry points plus development scripts that launch Electron against the local Next dev server.
3. Add production build scripts that export the renderer, start a packaged local static server, and point Electron at it.
4. Add desktop-specific smoke verification for window launch, key asset loading, and external link behavior.
5. Package the desktop app for the target platform.

Rollback is straightforward because the browser app remains intact: if the Electron path fails or slips, the repository can continue shipping and testing the existing web mode while desktop scripts stay unused.

## Open Questions

- Which packaging tool should the repo standardize on: `electron-builder` or Electron Forge?
- Should the preload API expose desktop-only polish features in the first pass, such as menu actions or version display, or stay nearly empty?
- Does the project want packaged desktop artifacts for macOS only first, or should Windows packaging be part of the initial acceptance bar?
