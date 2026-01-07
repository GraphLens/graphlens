
<div align="center">
    <img src="./assets/logo.png" alt="logo" width="150" />
    <h1>GraphLens</h1>
    <p align="center">
        <a href="https://marketplace.visualstudio.com/items?itemName=GraphLens.graphlens&ssr=false#overview">
            <img src="https://img.shields.io/badge/version-0.1.8-blue.svg" alt="version" />
        </a>
        <a href="https://github.com/GraphLens/graphlens">
            <img src="https://img.shields.io/badge/status-Public%20Beta-orange.svg" alt="status" />
        </a>
        <a href="https://github.com/GraphLens/graphlens?tab=License-1-ov-file">
            <img src="https://img.shields.io/badge/license-Proprietary-red.svg" alt="license" />
        </a>
        <a href="https://marketplace.visualstudio.com/items?itemName=GraphLens.graphlens&ssr=false#overview">
            <img src="https://img.shields.io/visual-studio-marketplace/i/GraphLens.graphlens?color=blue&label=installs" alt="installs">
        </a>
        <a href="https://marketplace.visualstudio.com/items?itemName=GraphLens.graphlens&ssr=false#review-details">
            <img src="https://img.shields.io/visual-studio-marketplace/r/GraphLens.graphlens?style=flat&label=rating" alt="rating">
        </a>
    </p>
    <h3>Interactive architecture visualizer for Angular projects</h3>
    <p>Transforms tangled code into structured, navigable graphs</p>
    <a href="https://marketplace.visualstudio.com/items?itemName=graphlens.graphlens" target="_blank">Marketplace</a> •
    <a href="https://github.com/GraphLens/demo">GitHub Demo</a> •
    <a href="https://github.com/GraphLens/graphlens/issues">Issues</a>
</div>

---


### 📢 Announcement

> **Happy New Year!** Check the **General info** panel for the Holiday Atmosphere! 🎄❄️✨

> **Beta Release:** We are excited to present the first public version of GraphLens! A roadmap and improvement proposals will be introduced later.

> **New to GraphLens?** [Try the Demo](https://github.com/GraphLens/demo) and [Read the FAQ](#6-faq) to learn the basics.


### ⚠️ Disclaimer

GraphLens is currently in **Public Beta**. While we strive for stability, occasional inaccuracies in analysis or graph rendering may occur in projects with non-standard configurations and complex code patterns.

GraphLens supports **Angular v2+** projects utilizing `angular.json`. Please review the [Current limitations](#4-current-limitations) section before use.

---


## 1. Definition & Purpose

**GraphLens** is a professional VS Code extension for Frontend Developers, Software Architects, Analysts, and QA Specialists working with Angular.

In large-scale Web projects, connections between modules, routes and components often become invisible and tangled, turning into "spaghetti code". This leads to excessive cognitive load and reduced efficiency of development.

GraphLens solves this problem by performing automated analysis of your project, visualizing its structure in the form of interactive graphs and tree views, and providing seamless navigation through project entities in real time.

It acts as an explorer and visualizer for your code, helping you to:
-   **Visualize** the high-level structure and architecture.
-   **Navigate** efficiently through software entities.
-   **Onboard** faster into new or legacy projects.
-   **Communicate** more effectively with your teammates.
-   **Plan** development and refactoring by seeing the complete picture of entities and their relationships.


## 2. Features

### 2.1. How It Works

GraphLens activates automatically if an `angular.json` file is detected in the VS Code workspace, or when opening TypeScript and HTML files.

The extension scans your VS Code workspace and explores Angular projects and _program entities_<sup>1</sup>: Modules, Components, Directives, and Routes. It analyzes Angular metadata properties (imports, declarations, exports, etc.) to resolve relationships between program entities. Based on collected data, it builds interactive directed graphs for three _abstraction levels_<sup>2</sup> of architecture: Modules Hierarchy, Navigation Map, and Components Tree.

GraphLens fully supports both classic NgModules and modern Standalone API architectures. However, the scope of analysis is currently restricted to the Angular program entities mentioned above.

The analysis is performed entirely without AI models. All processing is performed locally – your project data never leaves your machine. The analysis results are deterministic, reproducible and consistent given the same input. Under identical conditions you will always get an accurate "snapshot" of your project's reality.

#### Quick demonstration

> ![GraphLens Demo](./assets/demo.gif)

### 2.2. Commands

Commands are accessible via the custom command palette `graph-lens.open-command-palette`, as well as through the standard Command Palette under the `GraphLens` title.

**Key Commands:**

| Command | Description |
| :--- | :--- |
| `GraphLens: Open Command Palette` | Open the main commands menu with all available actions |
| `GraphLens: Refresh Project` | Re-scan the project and update the graphs manually |
| `GraphLens: Open WebView` | Open WebView panel with project general info and graphs |

A detailed list of commands is available in the **Features -> Commands** tab within the extension description in the VS Code.

### 2.3. TreeView Panel in Activity Bar

The GraphLens side panel with cube icon provides a Tree view of your Angular workspaces and projects:

Key features:
-   **Project Structure:** Quick overview of project structure and entities.
-   **Context Menu:** Convenient navigation and context actions via right-click.
-   **Entity Locator:** Quick jump to the entity's location on the graphs.

### 2.4. WebView Panel as Portal for Graphs

The main workspace of the extension is an interactive graphs.

Key features:
-   **Architecture Layout:** Comprehensive visualization of Angular Modules, Components, and Routing levels.
-   **Interactions Highlight:** Select any node to trace its specific relationships.
-   **Context Actions:** Seamless navigation to source code, Tree View focusing, and other graph tools.
-   **Theming:** Full support for VS Code High Contrast, Dark and Light themes.

### 2.5. Manual Refresh

The graphs do not update automatically upon file save. To reflect changes in your code, please run the `Refresh current project` or `Restart exploration` commands via the GraphLens palette. Please note that `Restart exploration` command will trigger re-exploration of the entire workspace.


## 3. Requirements

To ensure GraphLens works correctly, your environment must meet the following criteria:

### 3.1. VS Code Version

Requires **Visual Studio Code v1.85.0** or newer.

### 3.2. Trusted Workspaces

The extension executes analysis scripts, so it will not function in Restricted Mode. Please ensure your project folder is added to **Trusted Workspaces**.

### 3.3. External Dependencies

**Critical:** For a complete dependency graph analysis, external dependencies must be installed.

Please run `npm install` (or `yarn`, `pnpm`) in your project root before launching GraphLens. If TypeScript cannot resolve imports (files appear red in the editor), the analysis may be incomplete or contain errors.

### 3.4. TypeScript Language Server

GraphLens leverages VS Code's built-in capabilities to find definitions and references.

-   Ensure the built-in **TypeScript and JavaScript Language Features** extension is enabled. GraphLens relies on the data provided by the TS Server to correctly analyze projects.
-   For projects under active development that may contain TS errors, it's recommended to enable `"typescript.tsserver.experimental.enableProjectDiagnostics": true`. This allows the extension to resolve links more accurately during parsing, though it may increase the initial analysis time.


## 4. Current Limitations

-   **Program Entities Types:** Supports only Angular Modules, Components, Directives, and Routes. Content projection, DI services and other Angular building entities are not supported yet, but are planned for future releases.
-   **Project Types:** Supports only Angular applications. Angular libraries are not supported yet.
-   **Configurations:** Supports projects with `angular.json` configuration. Legacy configurations with `.angular-cli.json` are not supported currently.
-   **Monorepos:** Nx workspaces, specific configurations, and custom monorepo structures are not supported.
-   **Manual Refresh:** The graphs do not update automatically upon file save. See the [Manual Refresh](#25-manual-refresh) section for details.
-   **SSR Support:** Server-side logic is not supported.
-   **Frameworks:** Supports **Angular v2+** only. React, Vue, Svelte, and Angular meta-frameworks are not supported at this moment.
-   **IDE Support:** Available for **Visual Studio Code** only. Extension version for JetBrains IDEs (WebStorm, IntelliJ IDEA) is planned for future releases.


## 5. Roadmap

A detailed development roadmap for this year is available here – [Roadmap 2026](https://github.com/GraphLens/graphlens/issues/3).


## 6. FAQ

<details>
    <summary><strong>Does it support Standalone API / Components?</strong></summary>

    Yes! GraphLens fully supports the Modern Angular API, including Standalone API / Components. It parses the `imports` array in your component metadata to build the dependency graph.
</details>

<details>
    <summary><strong>Will it work with React, Vue, or Svelte?</strong></summary>

    Currently, GraphLens is designed exclusively for Angular v2+. Focusing on a single framework allows the extension to provide better quality of analysis of working projects.
</details>

<details>
    <summary><strong>Is there an extension for other code editors?</strong></summary>

    Currently, no, but it is planned for mid-term future releases.
</details>


## 7. Feedback & Contribution

The extension source code is proprietary, but the project will evolve together with the community.
There is a public repository for feedback:

-   **Found a bug?** [Create an Issue](https://github.com/GraphLens/graphlens/issues)
-   **Have an idea?** [Start a Discussion](https://github.com/GraphLens/graphlens/discussions)
-   **Stay updated:** [GitHub GraphLens](https://github.com/GraphLens/graphlens)

If you find GraphLens useful, please consider [leaving a review on the Marketplace](https://marketplace.visualstudio.com/items?itemName=graphlens.graphlens). It helps immensely!


## 8. License

**GraphLens** is proprietary software.
Copyright © 2025-2026 Dmitrii Kostiuk. All Rights Reserved.

This extension is licensed under the **GraphLens End-User License Agreement (EULA)**

-   **You are free to:** Use for personal, educational, and commercial projects free of charge. You own the generated graphs, tree views, and visualizations.
-   **You may not:** Decompile, reverse engineer, extract internal data, modify, resell, or create derivative works based on this software.

See the full [LICENSE](LICENSE) file for details.

---


### 📚 Notes & Terminology

1. **Program entities:** Refer to the common building blocks of Angular application, currently including Angular Modules, Routes, Components, and Directives.
2. **Abstraction or Program levels**: Represent different layers of the application structure formed by these common entities and include Modules Hierarchy, Navigation Map, and Components Tree.

---

**Created with respect for human ingenuity ✨🚀**
