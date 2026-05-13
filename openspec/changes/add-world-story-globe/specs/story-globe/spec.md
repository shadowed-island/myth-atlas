## ADDED Requirements

### Requirement: Interactive 3D globe

The system SHALL provide an interactive 3D globe that users can rotate, zoom, and use as the primary story exploration surface.

#### Scenario: User rotates the globe

- **WHEN** the user drags across the globe
- **THEN** the globe rotates in the drag direction while keeping story nodes attached to their geographic positions

#### Scenario: User zooms the globe

- **WHEN** the user scrolls, pinches, or uses an equivalent zoom gesture
- **THEN** the camera zoom level changes without losing the current geographic focus

### Requirement: Story nodes by location

The system SHALL render story nodes on the globe using latitude and longitude from the story dataset.

#### Scenario: Stories are loaded

- **WHEN** the story dataset is available
- **THEN** each story with valid coordinates appears as a node at the corresponding globe position

#### Scenario: Story has a category

- **WHEN** a story node is rendered
- **THEN** the node visually reflects the story category using a consistent color, icon, or marker style

### Requirement: Story selection

The system SHALL allow users to select a story from either the globe or the story list and view its details.

#### Scenario: User selects a globe node

- **WHEN** the user clicks or taps a story node on the globe
- **THEN** the system opens the story detail view for that story

#### Scenario: User selects a list item

- **WHEN** the user selects a story from the explorer panel
- **THEN** the system opens the story detail view and moves the globe focus toward that story location

### Requirement: Story detail view

The system SHALL show a detail view for the selected story containing core metadata and readable story content.

#### Scenario: Detail view opens

- **WHEN** a story is selected
- **THEN** the detail view shows the story title, country or region, culture, category, summary, image when available, tags, and source reference when available

#### Scenario: Detail view closes

- **WHEN** the user dismisses the detail view
- **THEN** the selected story state is cleared while preserving the current globe position and active filters

### Requirement: Search

The system SHALL allow users to search stories by title, country, culture, and tag.

#### Scenario: User searches by country

- **WHEN** the user enters a country name in the search field
- **THEN** the explorer panel and visible story nodes update to prioritize matching stories

#### Scenario: User searches by story title

- **WHEN** the user enters part of a story title
- **THEN** matching stories appear in the explorer panel and can be selected

### Requirement: Category filtering

The system SHALL allow users to filter visible stories by category.

#### Scenario: User enables a category filter

- **WHEN** the user selects one or more story categories
- **THEN** the globe and explorer panel show only stories matching the active categories

#### Scenario: User clears filters

- **WHEN** the user clears all category filters
- **THEN** the globe and explorer panel return to showing the full story dataset subject to any active search query

### Requirement: Explorer panel synchronization

The system SHALL keep the explorer panel synchronized with globe and filter state.

#### Scenario: Visible stories change

- **WHEN** search or filters change the current story set
- **THEN** the explorer panel updates to show the same story set represented on the globe

#### Scenario: Globe focus changes to a region

- **WHEN** the globe is focused on a country or region
- **THEN** the explorer panel highlights or prioritizes stories from that country or region

### Requirement: Responsive layout

The system SHALL provide layouts appropriate for desktop and vertical mobile screens.

#### Scenario: Desktop viewport

- **WHEN** the app is viewed on a desktop-sized screen
- **THEN** the globe remains the primary surface and the explorer panel is available beside it

#### Scenario: Mobile viewport

- **WHEN** the app is viewed on a vertical mobile-sized screen
- **THEN** the globe remains usable and story details appear in a bottom-oriented panel or drawer
