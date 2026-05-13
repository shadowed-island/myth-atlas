## 1. Renderer Export Compatibility

- [x] 1.1 Update the Next.js configuration for static export compatibility in the desktop production path.
- [x] 1.2 Adjust image handling so story artwork renders correctly in exported builds without a Next.js image optimization server.
- [x] 1.3 Audit and fix renderer asset assumptions that would break packaged desktop loading, including root-relative audio and artwork paths as needed.
- [x] 1.4 Verify the existing browser-mode app still builds and preserves core renderer behavior after export-oriented changes.

## 2. Electron Runtime Scaffold

- [x] 2.1 Add Electron runtime dependencies, entry points, and TypeScript/build configuration for main and preload processes.
- [x] 2.2 Implement secure BrowserWindow creation with context isolation, disabled direct Node integration, and standard app lifecycle handling.
- [x] 2.3 Implement a minimal preload bridge for desktop-only capabilities and wire desktop mode detection into the renderer where needed.
- [x] 2.4 Route external story source links through the desktop shell so they open in the system browser instead of in-app windows.

## 3. Development And Packaged Loading

- [x] 3.1 Add a desktop development command that starts or connects to the local Next.js dev server and launches Electron against it.
- [x] 3.2 Add a production desktop path that exports the renderer, serves the packaged static assets from the Electron app, and loads them successfully.
- [x] 3.3 Ensure packaged desktop builds include the exported renderer assets, preload bundle, main bundle, and required static media files.

## 4. Packaging Workflow

- [x] 4.1 Add repository scripts and configuration to build distributable Electron application artifacts for the initial target platform.
- [x] 4.2 Document or script the expected desktop build outputs so maintainers can reliably produce testable artifacts from a clean checkout.

## 5. Verification

- [x] 5.1 Add desktop smoke coverage that confirms the Electron window opens and the exported renderer loads critical assets.
- [x] 5.2 Verify external link handling opens system-browser URLs without spawning uncontrolled in-app windows.
- [x] 5.3 Re-run relevant browser-mode checks to confirm the Electron migration does not regress the existing web renderer workflow.
