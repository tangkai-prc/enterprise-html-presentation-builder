# Single-file HTML Rules

## Purpose

Generate an enterprise-style Reveal.js presentation that can be delivered as one offline HTML file and opened locally without a build system.

Read `revealjs-development-rules.md` together with this file whenever generating or packaging a presentation.

## Delivery target

Default output:

- One `.html` file
- Reveal.js runtime embedded
- Offline-capable and openable by double-click
- Designed for Chrome or Edge first
- 16:9 presentation canvas, normally 1280×720 logical pixels
- Embedded CSS and JavaScript
- Embedded approved assets
- No required CDN, dependency installation, asset folder, or build step at playback time

Optional outputs only when explicitly requested:

- Development HTML plus local asset references
- HTML plus asset folder
- PDF export
- Screenshot-based PPTX fallback

## Development versus delivery

Keep development source readable and allow a prototype to reference the confirmed local Reveal.js distribution. Treat that prototype as non-portable.

For final delivery:

- Inline `dist/reset.css`, `dist/reveal.css`, and the enterprise theme.
- Inline the UMD build from `dist/reveal.js`.
- Inline only the required plugin UMD bundles and plugin CSS.
- Inline custom slide CSS and presentation-specific JavaScript.
- Convert approved images, fonts, audio, and other required binary assets to data URLs; prefer inline SVG for vectors.
- Preserve the Reveal.js MIT license notice and record the bundled version.
- Remove all local absolute paths, development comments containing confidential paths, and unresolved file references.

Do not paste the Reveal.js distribution into reusable Markdown assets. Read it from the confirmed dependency during packaging and place it only in generated HTML output.

## Runtime constraints

- Use Reveal.js for slide visibility, navigation, keyboard input, touch, scaling, overview, progress, fragments, and lifecycle events.
- Do not maintain a second slide index or toggle a custom `active` class on slides.
- Do not register duplicate Arrow, Page Up, Page Down, or Space navigation handlers.
- Use stable slide IDs and Reveal.js named routes for agenda, chapter, and subtitle navigation.
- Use static embedded data for interactive demos by default.
- Avoid `fetch()`, dynamic imports, remote APIs, external iframes, and online map tiles.
- Resolve every CSS `@import` and `url(...)` before delivery.
- Avoid external fonts unless their files are approved and embedded.
- Do not use React, Vite, or another framework unless explicitly requested.

## Asset size guidance

- Base64 encoding increases binary asset size, so optimize images before embedding.
- Prefer SVG/CSS for logos, diagrams, icons, and decorative geometry.
- Flag large audio or video assets before embedding because they can make the HTML impractical to share or open.
- If strict single-file delivery becomes impractical, report the size issue and propose HTML plus an asset folder; do not silently change the delivery mode.

## Verification

The single-file deliverable passes when:

- It initializes Reveal.js without console errors.
- It contains no required external stylesheet, script, font, image, data, or API request.
- It contains no dependency reference to `/Users/tangkai/code/revealJs` or another machine-specific path.
- Keyboard, touch, overview, progress, fullscreen, agenda links, and subtitle links behave as specified.
- The fixed left-side thumbnail preview rail, collapse control, and floating control strip work without loading preview images or scripts from external files.
- Preview clicks and previous/next buttons use Reveal.js APIs rather than a parallel slide controller.
- Play opens the same single-file deck in a dedicated tab, preserves the current semantic route, and requests fullscreen there.
- If automatic fullscreen is rejected by browser policy, the playback tab presents a visible one-click fullscreen fallback instead of failing silently.
- Preview collapse and fullscreen state expand the Reveal.js viewport and call `Reveal.layout()` when available width changes.
- Interactive controls do not accidentally advance slides.
- All approved images, fonts, charts, screenshots, and icons render after the network is disabled.
- It still works after the HTML file is moved to a different directory.
- The output records the Reveal.js version and retains its MIT license notice.
