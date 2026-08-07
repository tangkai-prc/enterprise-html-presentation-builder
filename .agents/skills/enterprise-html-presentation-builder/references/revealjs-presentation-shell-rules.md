# Reveal.js Presentation Shell Rules

## Purpose

Define the reusable browser UI around a Reveal.js deck: a collapsible fixed left-side thumbnail preview rail, previous/next controls, page counter, and dedicated new-tab fullscreen playback.

Read this file whenever generating or changing presentation-shell controls. Read `revealjs-development-rules.md` and `single-file-html-rules.md` with it for final delivery.

## Default shell

Normal user-facing decks should include:

- A fixed left-side thumbnail preview rail, expanded by default on desktop.
- A compact button that collapses and restores the rail.
- One thumbnail and concise caption per Reveal.js slide.
- A visible active-slide state in the preview rail.
- Previous and next buttons.
- A current/total slide counter.
- A Play action that opens the same deck in a new tab at the current slide and requests fullscreen there.
- A one-click fullscreen fallback when browser user-activation policy blocks the automatic request.

Do not add a redundant overview/grid button or a separate Preview button when the fixed thumbnail rail already provides those functions, unless the user explicitly requests them.

The shell may be omitted when the user explicitly requests a minimal, embedded, kiosk, autoplay-only, or print-oriented presentation.

## State ownership boundary

Reveal.js is the only slide controller.

- Do not maintain a separate `current` slide variable that controls visibility.
- Do not toggle `active` on the actual slides.
- Do not reimplement Arrow, Page Up, Page Down, Space, touch, fragment, or overview navigation.
- A static array of slide elements may be used to render thumbnails and derive a flat counter, but the current item must always come from `Reveal.getCurrentSlide()` or a Reveal.js lifecycle event.
- Custom buttons must call Reveal.js APIs.

Use these mappings:

| Shell action | Reveal.js or browser behavior |
| --- | --- |
| Preview click | `Reveal.getIndices(slide)` then `Reveal.slide(h, v, f)` |
| Collapse/restore preview | Toggle a shell-only `preview-collapsed` body class, then call `Reveal.layout()` |
| Previous | `Reveal.prev()` |
| Next | `Reveal.next()` |
| Play | Open the current file with a playback query parameter and semantic slide hash |
| Active preview and counter | `ready` and `slidechanged` events |
| Fullscreen layout | `Reveal.layout()` from `fullscreenchange` |

When the custom shell supplies visible previous/next controls, initialize Reveal.js with `controls: false` to avoid duplicate controls. Keep `keyboard`, `touch`, `overview`, `progress`, and `hash` enabled unless the project brief says otherwise.

## DOM placement

Place the shell as a sibling immediately after `.reveal`, not inside an individual slide:

```html
<div class="reveal">...</div>
<button class="preview-toggle" id="previewToggle" type="button" aria-controls="previewNav">‹</button>
<aside class="preview-nav" id="previewNav" aria-label="幻灯片预览导航"></aside>
<nav class="presentation-controls" id="presentationControls" aria-label="演示控制">...</nav>
<div class="fullscreen-prompt" id="fullscreenPrompt" hidden>...</div>
```

This keeps shell controls outside Reveal.js scaling and overview transforms. Give every button a visible label or accessible name, a `type="button"`, a focus-visible style, and a useful tooltip.

## Preview construction

Build previews after Reveal.js is ready.

- Derive the slide list from `Reveal.getSlides()`.
- Clone slide DOM at runtime so the final HTML does not embed a second copy of every slide.
- Remove duplicate `id` values from each clone.
- Remove or disable `href`, `name`, `tabindex`, `contenteditable`, form controls, media controls, and other interactive behavior inside each clone.
- Apply `pointer-events: none` and `aria-hidden="true"` to preview content.
- Scale the clone from the configured logical slide size into a 16:9 preview frame.
- Derive the caption from `data-nav-caption`, `data-topic`, the first visible heading, or a localized `第 N 页` fallback.
- Navigate only on click or keyboard activation. Hover may emphasize the thumbnail but must not change slides.
- Mark the active thumbnail with a class and `aria-current="page"`, then scroll it into the nearest visible rail position.
- Keep the rail open after thumbnail navigation; the user controls collapse explicitly.

If a deck contains vertical slides, keep `Reveal.getSlides()` order and navigate each thumbnail with the slide's `h`, `v`, and optional fragment indices.

## Fixed left preview rail

Use one CSS variable such as `--preview-space` and one body class such as `preview-collapsed`.

- Reserve the rail width on the left so it does not cover slide content.
- Shift and resize `.reveal` using `left: var(--preview-space)` and `width: calc(100% - var(--preview-space))`.
- Keep the rail expanded by default on desktop.
- When collapsed, set the reserved width to zero, hide the rail, and keep a small restore button visible.
- Update toggle text, title, `aria-label`, and `aria-expanded` for both states.
- Call `Reveal.layout()` immediately and again after the width transition completes.
- In actual fullscreen mode, hide both the rail and toggle and let `.reveal` use the full viewport.
- In a playback tab that is no longer fullscreen, restore the rail, toggle, and reserved preview width automatically; keep only editing-only controls hidden.
- On narrow screens, start collapsed or treat the rail as an overlay while keeping the restore control discoverable.

## Control synchronization

On `ready` and `slidechanged`:

- Read the current slide from the event or `Reveal.getCurrentSlide()`.
- Find its derived flat index in `Reveal.getSlides()`.
- Update the counter as `current / total`.
- Update the active thumbnail and `aria-current`.
- Update previous/next disabled state.
- Preserve document-title, agenda, subtitle, and chapter-state synchronization already required by the presentation.

Buttons and shell links must stop propagation so their clicks do not advance the deck. Controls must remain keyboard reachable even when an auto-hide visual treatment is used.

## New-tab playback and fullscreen

The Play button must open a dedicated tab instead of switching the editing/current tab into playback mode.

- Build the target from the current single-file URL, add a query parameter such as `play=1`, and preserve a semantic current-slide hash such as `#/chapter-1`.
- Call `window.open()` directly inside the Play button click handler so popup blockers see a user gesture.
- In the new tab, add a `playback-mode` body class, hide editing-only chrome, and request fullscreen on `document.documentElement`.
- Hide the preview rail and toggle only while `document.fullscreenElement` is active. If the user exits fullscreen with Escape, restore them even though `playback-mode` remains active.
- Automatic fullscreen in a newly loaded tab is not guaranteed because browsers require transient user activation. Never claim otherwise.
- If the request rejects or remains inactive, show a centered, focusable `进入全屏` button. That second click must call `requestFullscreen()` directly.
- Do not show the fallback prompt when fullscreen succeeds.
- Listen for `fullscreenchange`, including exits triggered by Escape.
- Toggle a body class such as `fullscreen-mode` from the actual `document.fullscreenElement` state.
- Make shell visibility depend on the browser's native `:fullscreen` state, not on `playback-mode`; a synchronized `fullscreen-mode` class may be kept for state hooks but must not be the only visibility signal.
- Call `Reveal.layout()` after fullscreen entry or exit.
- Keep the original tab on its current slide and do not mutate its editing state.

The playback URL should remain valid for `file://` and local HTTP use. Use `new URL(window.location.href)`, `searchParams.set()`, and a stable named Reveal.js route rather than constructing a machine-specific path.

## Single-file constraints

- Inline all shell CSS and JavaScript.
- Use text, CSS, or inline SVG icons; do not fetch icon fonts or external images.
- Generate thumbnail previews from existing slide DOM instead of external screenshot files.
- Reopen the same single-file URL for playback; do not generate or depend on a second HTML file.
- Do not introduce `fetch()`, dynamic imports, CDN links, external UI libraries, or machine-specific paths.

## Verification

Before handoff, verify:

- Preview count equals `Reveal.getSlides().length`.
- The preview rail is visible by default on desktop.
- Collapse hides the rail and expands the Reveal.js stage; restore reverses both changes.
- Clicking a thumbnail changes the Reveal.js current slide and hash without collapsing the rail.
- Hovering a thumbnail does not navigate.
- Previous, next, counter, collapse/restore, and Play controls work.
- No overview/grid button or redundant Preview button is present by default.
- Active preview and counter remain correct after keyboard, touch, hash, and agenda navigation.
- Preview clones contain no duplicate IDs or editable/focusable slide controls.
- Play opens a distinct tab at the current semantic route while the original tab stays in place.
- Automatic fullscreen succeeds when permitted; otherwise the visible one-click fallback succeeds.
- Fullscreen entry and Escape-driven exit update the shell and stage correctly.
- After Escape exits fullscreen in the playback tab, the left preview rail and restore/collapse toggle are visible again.
- No console error or required external request occurs offline.
