# Change Log

All notable changes to the **GraphLens** extension will be documented in this file

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [Unreleased] - 2026-01-03

### Documentation

-   Added contribution guidelines `CONTRIBUTING.md`.
-   Added GitHub Issue Templates `BUG_REPORT.md` and `FEATURE_REQUEST.md`.


## [0.1.6] - 2026-01-03

### Documentation

#### Updated README
-   Added interactive Marketplace badges of installs and rating, and added links to all badges.
-   Updated top links for better readability.
-   Added a link to "Current limitations" in the "Disclaimer" section.
-   Refined the "Current limitations" list for better clarity and readability.


## [0.1.5] - 2025-12-31

### New Year Release 🎄❄️✨

#### Holiday Atmosphere in the WebView
-   Added New Year decorations and animations: garlands, falling snow, and Santa hats on root nodes. To enable these features check the "General info" panel.
-   Internal improvements for better UX.

#### Core & Architecture
-   Implemented bidirectional communication to persist settings between the Extension and WebView


## [0.1.4] - 2025-12-30

### Documentation

#### Updated README
-   New Demo Content: added "Demo" and "New to GraphLens?" linking to the demo repository.
-   Current Limitations: clarified lack of support for Angular SSR.
-   Improved readability.


## [0.1.3] - 2025-12-27

### Documentation & License

#### Updated LICENSE to v1.2
-   Explicitly included Tree views results in the list of outputs owned by the user.
-   Reordered clauses in Section 2 for better logical flow.

#### Updated README
-   Aligned "License" section with LICENSE v1.2.
-   Improved readability.
-   Updated version badges.


## [0.1.2] - 2025-12-27

### Documentation & License

#### Updated LICENSE to v1.1
-   Added clause **2(e)** explicitly prohibiting automated data extraction and scraping of internal structures.
-   Clarified author's rights regarding future commercial or enterprise editions.

#### Updated README
-   Aligned "License" section with LICENSE v1.1.
-   Refined "Current Limitations" list: removed redundant wording and clarified IDE support plans.
-   Updated version badges.


## [0.1.1] - 2025-12-26

-   Improved README readability.
-   Fixed demonstration animation link in README.


## [0.1.0] - 2025-12-25

### 🎉 Initial Release
First public beta release of **GraphLens** — the Interactive architecture visualizer for Angular projects.

### Features

#### Graphs Visualization
-   **Architecture Layout:** Comprehensive visualization of Angular Modules, Components, and Routing levels.
-   **Interactions Highlight:** Select any node to trace its specific relationships.
-   **Context Actions:** Seamless navigation to source code, Tree View focusing, and other graph tools.

#### Tree View in Activity Bar
-   **Project Structure:** Quick overview of project structure and entities.
-   **Context Menu:** Convenient navigation and context actions via right-click.
-   **Entity Locator:** Quick jump to the entity's location on the graph.

#### User Experience
-   **Privacy-First Analysis:** All computations are performed locally without AI models or data transmission.
-   **Theme Support:** Full support for VS Code High Contrast, Dark and Light themes.

### Limitations
* Supports Angular v2+ only. React and Vue are not supported.
* Nx Monorepo specific tools are not yet supported.
* Angular libraries are not supported yet.
* The graphs do not update automatically upon file save.
