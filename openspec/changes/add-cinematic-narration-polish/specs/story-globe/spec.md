## ADDED Requirements

### Requirement: Cinematic tour narration

The system SHALL provide optional browser-generated narration during guided story tours.

#### Scenario: Tour narration plays

- **WHEN** sound, narration, and guided tour are enabled
- **THEN** the system narrates the currently selected tour story using browser speech synthesis when available

#### Scenario: Tour caption appears

- **WHEN** guided tour is active and a story is selected
- **THEN** the system displays a cinematic caption with the story location, title, and summary

### Requirement: Regional cinematic layers

The system SHALL render region-scale glow zones and route arcs to make the globe feel closer to the reference video's world-story visualization.

#### Scenario: Region zones render

- **WHEN** the globe scene is visible
- **THEN** continent or region glow zones appear without changing the story dataset

#### Scenario: Route arcs render

- **WHEN** the globe scene is visible
- **THEN** glowing arcs connect representative stories as decorative tour paths
