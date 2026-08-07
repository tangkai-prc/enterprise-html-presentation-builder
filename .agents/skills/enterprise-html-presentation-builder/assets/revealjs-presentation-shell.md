# Reveal.js Presentation Shell Pattern

## Purpose

Reusable, framework-free shell for a user-facing Reveal.js deck. The normal tab is the editing/viewing surface: a fixed thumbnail rail occupies the left side and is expanded by default. The rail can be collapsed with a small toggle. Play opens the same file at the current slide in a dedicated tab and requests fullscreen there.

Use with:

- `references/revealjs-development-rules.md`
- `references/revealjs-presentation-shell-rules.md`
- `references/single-file-html-rules.md`

## Markup

Place this immediately after the closing `.reveal` element:

```html
<button class="preview-toggle" id="previewToggle" type="button"
  title="收起幻灯片预览" aria-label="收起幻灯片预览"
  aria-expanded="true" aria-controls="previewNav">‹</button>

<aside class="preview-nav" id="previewNav" aria-label="幻灯片预览导航"></aside>

<nav class="presentation-controls is-visible" id="presentationControls" aria-label="演示控制">
  <button id="previousSlide" type="button" title="上一页" aria-label="上一页">‹</button>
  <output class="slide-counter" id="slideCounter" aria-live="polite">1 / 1</output>
  <button id="nextSlide" type="button" title="下一页" aria-label="下一页">›</button>
  <button class="editing-only" id="playPresentation" type="button"
    title="新标签全屏播放" aria-label="在新标签中全屏播放">播放</button>
</nav>

<div class="fullscreen-prompt" id="fullscreenPrompt" role="dialog"
  aria-modal="true" aria-label="进入全屏" hidden>
  <p>浏览器需要再次确认全屏显示。</p>
  <button id="enterFullscreen" type="button">进入全屏</button>
</div>

<div class="shell-status" id="shellStatus" role="status" aria-live="polite"></div>
```

Do not add a separate Reveal overview/grid button or a second Preview button to the default shell. The rail itself is the slide overview.

## CSS foundation

Replace colors with the project's confirmed style tokens. `--logical-slide-width` and `--logical-slide-height` must match `Reveal.initialize()`.

```css
:root {
  --logical-slide-width: 1280;
  --logical-slide-height: 720;
  --preview-space: 184px;
  --preview-frame-width: 144px;
  --shell-accent: #007f78;
  --shell-surface: rgba(10, 18, 24, .86);
  --shell-border: rgba(255, 255, 255, .28);
}

body.preview-collapsed { --preview-space: 0px; }
html:fullscreen body { --preview-space: 0px; }

.reveal {
  position: fixed;
  left: var(--preview-space);
  top: 0;
  width: calc(100% - var(--preview-space));
  height: 100%;
  transition: left .22s ease, width .22s ease;
}

.preview-nav {
  position: fixed;
  left: 14px;
  top: 46px;
  bottom: 72px;
  z-index: 90;
  width: 164px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  padding: 3px 8px 3px 3px;
  box-sizing: border-box;
  opacity: .62;
  transition: opacity .22s ease;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, .38) transparent;
}

.preview-nav:hover,
.preview-nav:focus-within,
.preview-nav.is-active { opacity: .98; }

.preview-toggle {
  position: fixed;
  left: 8px;
  top: 8px;
  z-index: 95;
  width: 30px;
  height: 30px;
  border: 1px solid var(--shell-border);
  border-radius: 6px;
  color: #fff;
  background: var(--shell-surface);
  font: 900 15px/1 Arial, sans-serif;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.preview-thumb {
  position: relative;
  flex: 0 0 auto;
  width: 156px;
  height: 112px;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, .24);
  border-radius: 6px;
  color: #fff;
  background: rgba(0, 34, 31, .62);
  cursor: pointer;
}

.preview-thumb:hover,
.preview-thumb:focus-visible { border-color: rgba(255, 255, 255, .82); }

.preview-thumb.is-active {
  border-color: #fff;
  background: var(--shell-accent);
  box-shadow: 0 0 0 2px rgba(255, 255, 255, .28);
}

.preview-frame {
  position: absolute;
  left: 6px;
  top: 6px;
  width: var(--preview-frame-width);
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #fff;
  pointer-events: none;
}

.preview-slide-clone {
  display: block !important;
  position: absolute !important;
  left: 0 !important;
  top: 0 !important;
  visibility: visible !important;
  opacity: 1 !important;
  transform-origin: top left !important;
  pointer-events: none !important;
}

.preview-caption {
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 5px;
  height: 18px;
  overflow: hidden;
  color: rgba(255, 255, 255, .96);
  font: 700 11px/18px Arial, sans-serif;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  pointer-events: none;
}

.presentation-controls {
  position: fixed;
  left: calc(var(--preview-space) + 18px);
  bottom: 18px;
  z-index: 95;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: .22;
  transform: translateY(5px);
  transition: left .22s ease, opacity .2s ease, transform .2s ease;
}

.presentation-controls.is-visible,
.presentation-controls:hover,
.presentation-controls:focus-within {
  opacity: 1;
  transform: translateY(0);
}

.presentation-controls button,
.slide-counter {
  min-width: 38px;
  height: 38px;
  box-sizing: border-box;
  border: 1px solid var(--shell-border);
  border-radius: 7px;
  color: #fff;
  background: var(--shell-surface);
  font: 700 14px/1 Arial, sans-serif;
}

.presentation-controls button { padding: 0 11px; cursor: pointer; }
.presentation-controls button:disabled { opacity: .36; cursor: default; }
.slide-counter { min-width: 68px; display: grid; place-items: center; }

.fullscreen-prompt {
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 120;
  width: min(360px, calc(100vw - 36px));
  padding: 22px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, .32);
  border-radius: 12px;
  color: #fff;
  background: rgba(0, 65, 60, .96);
  box-shadow: 0 18px 54px rgba(0, 25, 23, .34);
  text-align: center;
  transform: translate(-50%, -50%);
}

.fullscreen-prompt[hidden] { display: none; }
.fullscreen-prompt p { margin: 0 0 14px; }
.fullscreen-prompt button { min-width: 120px; height: 40px; }

.shell-status {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 110;
  max-width: 320px;
  color: #fff;
  background: rgba(0, 65, 60, .94);
}

.shell-status:empty { display: none; }

.presentation-controls button:focus-visible,
.preview-toggle:focus-visible,
.preview-thumb:focus-visible,
.fullscreen-prompt button:focus-visible {
  outline: 3px solid #fff;
  outline-offset: 2px;
}

body.preview-collapsed .preview-nav,
html:fullscreen .preview-nav,
html:fullscreen .preview-toggle { display: none !important; }

body.playback-mode .editing-only,
html:fullscreen .editing-only { display: none !important; }

@media (max-width: 700px) {
  :root { --preview-space: 0px; }
  .preview-nav { width: 174px; background: rgba(0, 50, 46, .94); }
  .presentation-controls { left: 10px; right: 10px; justify-content: center; }
  .presentation-controls button { padding: 0 8px; }
}

@media print {
  .reveal { left: 0; width: 100%; }
  .preview-nav,
  .preview-toggle,
  .presentation-controls,
  .fullscreen-prompt,
  .shell-status { display: none !important; }
}
```

## JavaScript foundation

Install this exactly once after Reveal.js is ready. Do not add another Arrow, Page Up, Page Down, or Space handler. Hover may change visual emphasis only; never attach slide navigation to `mouseenter`, `mouseover`, or CSS hover side effects.

```js
function installPresentationShell(deck = Reveal) {
  const previewNav = document.getElementById("previewNav");
  const previewToggle = document.getElementById("previewToggle");
  const controls = document.getElementById("presentationControls");
  const previous = document.getElementById("previousSlide");
  const next = document.getElementById("nextSlide");
  const counter = document.getElementById("slideCounter");
  const play = document.getElementById("playPresentation");
  const fullscreenPrompt = document.getElementById("fullscreenPrompt");
  const enterFullscreen = document.getElementById("enterFullscreen");
  const shellStatus = document.getElementById("shellStatus");
  const slides = deck.getSlides();
  const config = deck.getConfig();
  const logicalWidth = Number(config.width) || 1280;
  const logicalHeight = Number(config.height) || 720;
  const playbackRequested = new URL(window.location.href).searchParams.get("play") === "1";
  let previewButtons = [];
  let controlsTimer;
  let layoutTimer;

  function captionFor(slide, index) {
    const title = slide.querySelector("h1, h2, h3, [data-slide-title]")?.textContent?.trim();
    return slide.dataset.navCaption || slide.dataset.topic || title || `第 ${index + 1} 页`;
  }

  function sanitizeClone(clone) {
    clone.classList.remove("past", "present", "future");
    clone.classList.add("preview-slide-clone");
    clone.setAttribute("aria-hidden", "true");
    clone.removeAttribute("id");
    clone.querySelectorAll("[id]").forEach((node) => node.removeAttribute("id"));
    clone.querySelectorAll("[href]").forEach((node) => node.removeAttribute("href"));
    clone.querySelectorAll("[name]").forEach((node) => node.removeAttribute("name"));
    clone.querySelectorAll("[contenteditable]").forEach((node) => node.removeAttribute("contenteditable"));
    clone.querySelectorAll("a, button, input, textarea, select, video, audio, [tabindex]").forEach((node) => {
      node.setAttribute("tabindex", "-1");
      if ("controls" in node) node.controls = false;
    });
    clone.style.width = `${logicalWidth}px`;
    clone.style.height = `${logicalHeight}px`;
  }

  function buildPreviews() {
    previewNav.replaceChildren();
    previewButtons = slides.map((slide, index) => {
      const button = document.createElement("button");
      const frame = document.createElement("span");
      const caption = document.createElement("span");
      const clone = slide.cloneNode(true);
      const label = captionFor(slide, index);

      button.type = "button";
      button.className = "preview-thumb";
      button.title = `跳转到第 ${index + 1} 页：${label}`;
      button.setAttribute("aria-label", button.title);
      frame.className = "preview-frame";
      caption.className = "preview-caption";
      caption.textContent = `${index + 1}. ${label}`;
      sanitizeClone(clone);
      frame.appendChild(clone);
      button.append(frame, caption);
      previewNav.appendChild(button);

      const scale = (frame.getBoundingClientRect().width || 144) / logicalWidth;
      clone.style.transform = `scale(${scale})`;
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        const { h, v, f } = deck.getIndices(slide);
        deck.slide(h, v, f);
      });
      return button;
    });
  }

  function layoutAfterRailChange() {
    deck.layout();
    clearTimeout(layoutTimer);
    layoutTimer = setTimeout(() => deck.layout(), 240);
  }

  function syncPreviewToggle() {
    const collapsed = document.body.classList.contains("preview-collapsed");
    const label = collapsed ? "展开幻灯片预览" : "收起幻灯片预览";
    previewToggle.textContent = collapsed ? "›" : "‹";
    previewToggle.title = label;
    previewToggle.setAttribute("aria-label", label);
    previewToggle.setAttribute("aria-expanded", String(!collapsed));
  }

  function setPreviewCollapsed(collapsed) {
    document.body.classList.toggle("preview-collapsed", Boolean(collapsed));
    syncPreviewToggle();
    layoutAfterRailChange();
  }

  function syncShell(event = {}) {
    const currentSlide = event.currentSlide || deck.getCurrentSlide();
    const index = Math.max(0, slides.indexOf(currentSlide));
    counter.textContent = `${index + 1} / ${slides.length}`;
    previewButtons.forEach((button, buttonIndex) => {
      const active = buttonIndex === index;
      button.classList.toggle("is-active", active);
      if (active) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });
    const activePreview = previewButtons[index];
    if (activePreview && !document.body.classList.contains("preview-collapsed")) {
      activePreview.scrollIntoView({ block: "nearest" });
    }
    previous.disabled = index === 0;
    next.disabled = index === slides.length - 1;
  }

  function revealControls() {
    controls.classList.add("is-visible");
    clearTimeout(controlsTimer);
    controlsTimer = setTimeout(() => controls.classList.remove("is-visible"), 2800);
  }

  function playbackUrl() {
    const target = new URL(window.location.href);
    const currentSlide = deck.getCurrentSlide();
    target.searchParams.set("play", "1");
    if (currentSlide?.id) target.hash = `#/${currentSlide.id}`;
    return target.href;
  }

  function openPlayback() {
    shellStatus.textContent = "";
    const playbackWindow = window.open(playbackUrl(), "_blank");
    if (playbackWindow) playbackWindow.opener = null;
    else shellStatus.textContent = "浏览器阻止了播放标签页，请允许弹出窗口后重试。";
  }

  function showFullscreenFallback() {
    if (!playbackRequested || document.fullscreenElement) return;
    fullscreenPrompt.hidden = false;
    enterFullscreen.focus();
  }

  async function requestPlaybackFullscreen(showFallback = true) {
    try {
      if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
    } catch (error) {
      if (showFallback) showFullscreenFallback();
      return;
    }
    if (!document.fullscreenElement && showFallback) showFullscreenFallback();
  }

  function syncFullscreen() {
    const active = Boolean(document.fullscreenElement);
    document.body.classList.toggle("fullscreen-mode", active);
    if (active) fullscreenPrompt.hidden = true;
    layoutAfterRailChange();
  }

  controls.addEventListener("click", (event) => event.stopPropagation());
  previewToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    setPreviewCollapsed(!document.body.classList.contains("preview-collapsed"));
  });
  previous.addEventListener("click", () => deck.prev());
  next.addEventListener("click", () => deck.next());
  play.addEventListener("click", openPlayback);
  enterFullscreen.addEventListener("click", () => requestPlaybackFullscreen(true));
  document.addEventListener("fullscreenchange", syncFullscreen);
  document.addEventListener("pointermove", revealControls, { passive: true });
  document.addEventListener("touchstart", revealControls, { passive: true });
  deck.on("slidechanged", syncShell);
  window.addEventListener("resize", layoutAfterRailChange);

  if (playbackRequested) {
    document.body.classList.add("playback-mode");
    document.querySelectorAll("[contenteditable='true']").forEach((node) => {
      node.setAttribute("contenteditable", "false");
      node.setAttribute("tabindex", "-1");
    });
  }

  buildPreviews();
  syncPreviewToggle();
  syncFullscreen();
  syncShell();
  revealControls();
  if (playbackRequested) setTimeout(() => requestPlaybackFullscreen(true), 0);
}

Reveal.initialize({
  width: 1280,
  height: 720,
  controls: false,
  progress: true,
  hash: true,
  keyboard: true,
  touch: true,
  overview: true,
  transition: "none",
  plugins: []
}).then(() => installPresentationShell(Reveal));
```

## Adaptation checklist

- Localize all labels to the deck language.
- Replace shell colors with confirmed enterprise tokens.
- Match logical dimensions and thumbnail aspect ratio to the deck.
- Keep the left rail expanded by default on desktop and reserve space for it.
- Keep thumbnail clones noninteractive, hidden from assistive technology, and free of duplicate IDs.
- Let hover highlight a thumbnail only; navigate only after a click.
- Keep a visible collapse/restore toggle and call `Reveal.layout()` before and after its CSS transition.
- Do not add a separate overview/grid button or redundant Preview button by default.
- Open Play with the same HTML file, a playback query parameter, and the current named route.
- Keep a one-click fullscreen fallback because automatic new-tab fullscreen is browser-dependent.
- Hide the preview rail only during actual fullscreen; restore the rail and toggle after Escape exits fullscreen, including in playback mode.
- Keep one Reveal.js controller and one `Reveal.initialize()` call.
- Verify expanded/collapsed rail, active preview, counter, click navigation, new-tab playback, fullscreen fallback, and offline playback in a real browser.
