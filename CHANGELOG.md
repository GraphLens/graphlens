# Change Log

All notable changes to the **GraphLens** extension will be documented in this file

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
