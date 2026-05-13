## Why

The current Myth Atlas experience works as a browser-first Next.js app, but the goal is to ship it as an installable desktop experience with a dedicated window, packaged assets, and platform-aware lifecycle behavior. Doing that now lets the project keep its existing renderer while adding a clear desktop delivery path before more web-only assumptions accumulate.

## What Changes

- Add an Electron main process that launches Myth Atlas in a desktop window and manages application lifecycle events.
- Add a preload bridge and desktop security baseline so the renderer stays isolated from unrestricted Node.js APIs.
- Support a development workflow where Electron loads the local Next dev server.
- Support a production workflow where Electron loads a packaged static build of the current app.
- Add desktop packaging scripts, build outputs, and smoke-test expectations for the Electron distribution path.
- Preserve the existing story globe UI and client-side interaction model rather than rewriting the renderer stack.

## Capabilities

### New Capabilities

- `electron-app-shell`: Covers Electron window creation, secure renderer bootstrapping, development and packaged app loading, and desktop lifecycle expectations.

### Modified Capabilities

- None.

## Impact

- Adds Electron-specific runtime and packaging dependencies plus main/preload entry points.
- Changes build and local development workflows so the app can run both in browser mode and desktop mode.
- Affects asset loading assumptions for static files, audio, and client-side routes in packaged builds.
- Introduces desktop-focused verification alongside the existing browser-based checks.
