## ADDED Requirements

### Requirement: Desktop application window

The system SHALL provide an Electron desktop application window that launches the Myth Atlas experience as the primary surface.

#### Scenario: User launches the desktop app

- **WHEN** the packaged or development Electron app starts
- **THEN** a BrowserWindow opens and displays the Myth Atlas renderer without requiring the user to open a browser manually

#### Scenario: User re-activates the app on macOS

- **WHEN** the app is running on macOS and the user activates it after closing all windows
- **THEN** the system recreates or reopens the primary Myth Atlas window

### Requirement: Secure renderer boundary

The system SHALL run the renderer with Electron security settings that prevent unrestricted Node.js access from application UI code.

#### Scenario: Renderer boots in desktop mode

- **WHEN** the BrowserWindow is created
- **THEN** the renderer runs with context isolation enabled and direct Node.js integration disabled

#### Scenario: Renderer needs desktop-specific behavior

- **WHEN** the UI uses a desktop-only integration
- **THEN** it accesses that behavior through a preload-defined API instead of importing Node.js modules directly

### Requirement: Development desktop workflow

The system SHALL support a development workflow where Electron loads the existing Next.js development server.

#### Scenario: Developer starts desktop development

- **WHEN** the desktop development command is run
- **THEN** Electron waits for or connects to the configured local Next.js dev server and loads the app over `http://127.0.0.1` or equivalent loopback origin

#### Scenario: Renderer code changes during development

- **WHEN** the Next.js dev server rebuilds renderer assets
- **THEN** the Electron window reflects those updated assets without requiring a packaged rebuild

### Requirement: Packaged desktop renderer loading

The system SHALL support packaged desktop builds that load a static export of the renderer without depending on an external production web server.

#### Scenario: User opens a packaged desktop build

- **WHEN** the packaged Electron app starts
- **THEN** the main process serves or loads the bundled static renderer assets from the application package and displays the app successfully

#### Scenario: Renderer requests bundled assets

- **WHEN** the packaged renderer requests `/_next` assets, story artwork, or bundled audio files
- **THEN** those assets resolve from packaged application resources without requiring internet access

### Requirement: Export-compatible renderer behavior

The system SHALL keep the Next.js renderer compatible with static export for the desktop distribution path.

#### Scenario: Desktop production build runs

- **WHEN** the desktop production build generates the renderer bundle
- **THEN** the renderer is exported as static assets without requiring server-side rendering features

#### Scenario: Story artwork is rendered in exported mode

- **WHEN** the renderer displays story artwork in the exported desktop build
- **THEN** image rendering works without relying on a live Next.js image optimization server

### Requirement: External links open outside the app shell

The system SHALL route external reference links from Myth Atlas content to the user's system browser instead of opening arbitrary in-app browsing windows.

#### Scenario: User opens a story source link

- **WHEN** the user activates an external story reference link from the desktop app
- **THEN** the URL opens in the system browser and the primary Myth Atlas window remains focused on the app experience

#### Scenario: Renderer attempts to open a new external window

- **WHEN** the renderer requests a new window for an external URL
- **THEN** the desktop shell denies the in-app window creation and delegates the URL to the operating system when appropriate

### Requirement: Desktop packaging workflow

The system SHALL provide a repeatable workflow to build distributable Myth Atlas desktop artifacts.

#### Scenario: Maintainer runs desktop packaging

- **WHEN** a maintainer runs the desktop packaging command
- **THEN** the repository produces platform-specific Electron application artifacts from the current renderer and Electron entry points

#### Scenario: Maintainer verifies a packaged build

- **WHEN** a desktop build completes
- **THEN** the repository provides a defined smoke-test path to confirm the app window opens and critical assets load
