# Single-file HTML Rules

## Purpose

Define the rules for generating enterprise-style single-file HTML browser presentations.

This file is used when the user wants a browser-based presentation that can be opened locally without a build system.

The goal is to create a controlled, offline-capable presentation file that can preserve enterprise style, support simple navigation, and later support AI-generated interactive demo pages.

## Delivery target

Default output:

- One `.html` file
- Offline-capable
- Openable by double-click
- Designed for Chrome or Edge first
- 16:9 presentation canvas
- Embedded CSS
- Embedded JavaScript
- No required external CDN
- No required build step

Optional future outputs:

- HTML plus asset folder
- reveal.js project
- React/Vite project
- PDF export
- Screenshot-based PPTX fallback

## Default mode

For MVP, prefer single-file HTML instead of reveal.js, React, Vite, or other dependencies.

Use this mode when:

- The user wants to build the minimum system first.
- The user wants to avoid dependency installation.
- The user wants a portable file for browser playback.
- The user wants to protect the local development environment.
- The user wants to validate enterprise visual style before adding interaction.

Do not install dependencies by default.

If the user explicitly requests reveal.js, propose the install command but do not run it without approval:

```bash
npm install reveal.js vite
```