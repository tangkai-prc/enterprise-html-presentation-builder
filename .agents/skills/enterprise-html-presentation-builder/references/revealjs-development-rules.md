# Reveal.js Development Rules

## Purpose

Use Reveal.js as the default runtime for enterprise HTML presentations while preserving offline, single-file delivery.

## Contents

- Confirmed runtime
- Development and delivery modes
- Required document structure
- Baseline initialization
- Navigation rules
- Presentation shell controls
- Presentation-specific interaction
- Plugin policy
- Single-file packaging
- Verification

## Confirmed runtime

The current workspace has Reveal.js `6.0.1` at:

```text
/Users/tangkai/code/revealJs/node_modules/reveal.js
```

Treat this directory as read-only. Use its prebuilt UMD distribution:

- `dist/reset.css`
- `dist/reveal.css`
- `dist/reveal.js`
- `dist/plugin/*.js` only when a plugin is required
- `dist/plugin/highlight/monokai.css` only when syntax highlighting is required

Resolve the runtime in this order:

1. A project-specific `reveal_root` recorded in `inputs/<project-id>/customization.md`.
2. A project-local `node_modules/reveal.js`.
3. The confirmed workspace path above.
4. User approval for installation if no compatible distribution exists.

Never make final HTML depend on an absolute local path.

## Development and delivery modes

Use two explicit modes:

### Development mode

- Keep slide markup, enterprise CSS, and presentation-specific JavaScript readable.
- Use local Reveal.js file references only for non-deliverable prototypes.
- Write prototypes under `outputs/prototypes/`.
- Do not copy or edit the external Reveal.js installation.
- Do not add Vite, React, or a CDN merely to run Reveal.js.

### Delivery mode

- Write user-facing output under `outputs/<project-id>/`.
- Produce one `.html` file unless the user explicitly requests an asset folder.
- Inline Reveal.js CSS and UMD JavaScript, selected plugin bundles, enterprise CSS, custom JavaScript, and approved assets.
- Preserve the Reveal.js MIT license notice in generated output.
- Remove development-only absolute paths before delivery.

## Required document structure

Use the standard Reveal.js shell:

```html
<div class="reveal">
  <div class="slides">
    <section class="slide cover" data-slide-type="cover">...</section>
    <section class="slide agenda" data-slide-type="agenda">...</section>
    <section class="slide content" data-slide-type="content">...</section>
  </div>
</div>
```

Rules:

- Treat each direct child of `.slides` as one horizontal slide.
- Use nested direct-child `<section>` elements only when vertical slides are explicitly requested.
- Keep `data-slide-type`, chapter metadata, subtitle metadata, and stable slide IDs on the Reveal.js slide element.
- Do not add an `active` class to control slide visibility.
- Do not create a parallel custom slide index or toggle slide visibility manually.
- Use Reveal.js `.present`, `.past`, and `.future` states only for styling when necessary.

## Baseline initialization

Start from this configuration and change it only for a documented project requirement:

```js
Reveal.initialize({
  width: 1280,
  height: 720,
  margin: 0,
  minScale: 0.2,
  maxScale: 2,
  center: false,
  controls: true,
  progress: true,
  slideNumber: false,
  hash: true,
  history: false,
  keyboard: true,
  touch: true,
  overview: true,
  transition: "none",
  backgroundTransition: "none",
  plugins: []
});
```

Use the custom enterprise footer for page numbers instead of Reveal.js slide numbers unless the user requests otherwise.

When the presentation uses the custom shell from `revealjs-presentation-shell-rules.md`, set `controls: false` to prevent duplicate Reveal.js arrow controls. Keep the rest of the baseline behavior, including progress, keyboard, touch, overview, and hash routing.

## Navigation rules

- Give semantic targets stable IDs such as `chapter-1` and `chapter-1-subtitle-2`.
- Link to named Reveal.js routes with `href="#/chapter-1"` and `href="#/chapter-1-subtitle-2"`.
- Prefer Reveal.js hash routing for normal agenda and subtitle links.
- When custom behavior is necessary, navigate through the API:

```js
const target = document.getElementById(targetId);
const { h, v } = Reveal.getIndices(target);
Reveal.slide(h, v);
```

- Update repeated-agenda highlights and subtitle states from `ready` and `slidechanged` events.
- Do not use native page scrolling, page reloads, or a second router for in-deck navigation.

## Presentation shell controls

For a normal user-facing deck, provide a fixed left-side thumbnail preview rail that is expanded by default and can be collapsed, plus a floating control strip with previous, counter, next, and Play actions. Play opens a dedicated tab and requests fullscreen there. A project may omit this shell only when the user requests a minimal, embedded, kiosk, or print-oriented mode.

Read `revealjs-presentation-shell-rules.md` for the complete behavior and use `../assets/revealjs-presentation-shell.md` as the reusable implementation pattern.

Rules:

- Reveal.js remains the only owner of the current slide and navigation state.
- Preview clicks navigate with `Reveal.getIndices()` and `Reveal.slide()`.
- Previous and next controls call `Reveal.prev()` and `Reveal.next()`.
- Build active-preview, counter, and disabled-button state from `ready` and `slidechanged` events.
- Open the Play action in a new tab, preserve the semantic current-slide route, and request fullscreen only in that playback tab.
- Provide a visible one-click fullscreen fallback in the playback tab because browsers may reject automatic fullscreen without fresh user activation.
- Do not add duplicate Arrow, Page Up, Page Down, or Space handlers.
- Do not navigate when a preview is merely hovered.
- Call `Reveal.layout()` after preview collapse/expand, fullscreen changes, and viewport-resizing shell changes.

## Presentation-specific interaction

- Register slide lifecycle behavior through `Reveal.on("ready", ...)` and `Reveal.on("slidechanged", ...)`.
- Keep interactive-demo state local and offline by default.
- Let Reveal.js own keyboard, touch, overview, fragment, and scaling behavior.
- Do not register duplicate Arrow, Page Up, Page Down, or Space navigation handlers.
- Prevent control interactions from advancing slides when a button, input, textarea, select, or editable region is active.
- Call `Reveal.layout()` after a visible interaction materially changes slide dimensions.

## Plugin policy

- Start with no plugins.
- Add only plugins required by the presentation brief.
- Inline each selected UMD plugin before calling `Reveal.initialize()` and list its global plugin object in `plugins`.
- Convert project Markdown to slide HTML during generation instead of fetching external Markdown at runtime.
- Do not enable math rendering unless all renderer scripts, fonts, and styles can work offline.
- Inline highlighting CSS when using the highlight plugin.
- Do not use plugins that require unresolved network requests in a strict offline deliverable.

## Single-file packaging

For strict single-file delivery:

1. Inline `reset.css`, `reveal.css`, and enterprise theme CSS in `<style>` elements.
2. Inline `dist/reveal.js` in a `<script>` element before presentation-specific scripts.
3. Inline required plugin UMD bundles and their CSS.
4. Replace image, font, audio, and small video references with data URLs; prefer inline SVG for vector assets.
5. Resolve every CSS `@import` and `url(...)`; do not leave relative theme or font references unresolved.
6. Remove all external stylesheet, script, module, font, image, data, and API requests.
7. Avoid runtime `fetch()`, dynamic imports, and remote iframes.
8. Escape literal `</script>` sequences when inserting JavaScript into an HTML script element.

Use `dist/reveal.js`, not `dist/reveal.mjs`, for direct single-file inlining unless a bundling step explicitly handles ES modules.

## Verification

Before handoff, verify that:

- The DOM contains exactly one `.reveal > .slides` shell.
- PPTX-derived slides use a master-rule layer plus editable HTML objects and do not embed rendered full-slide screenshots unless explicitly approved.
- PPTX-derived edit mode exposes the expected `contenteditable="true"` text objects, while playback mode and preview clones expose none.
- Reveal.js initializes without console errors.
- Arrow keys, touch, overview, fullscreen, progress, and hash navigation work as required.
- Thumbnail previews are sanitized, clickable, synchronized with the current Reveal.js slide, and do not contain duplicate IDs or editable controls.
- The fixed left rail, collapse control, previous/next controls, counter, new-tab Play action, fullscreen fallback, and fullscreen exit remain usable by mouse, touch, and keyboard focus.
- Agenda and subtitle links reach slides by stable IDs.
- Repeated-agenda and subtitle highlights restore correctly after hover or focus.
- Interactive controls do not trigger unintended slide navigation.
- The final HTML contains no absolute dependency paths or unresolved asset references.
- The final HTML works after the network is disabled and the file is moved to another directory.
- The browser makes no required external requests.
- The Reveal.js version and MIT notice are recorded in an HTML comment.
