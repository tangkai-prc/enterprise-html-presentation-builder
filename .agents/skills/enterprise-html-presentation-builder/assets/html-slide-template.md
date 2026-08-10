<!--
规则作用：
本文件用于沉淀企业浏览器演示的 HTML 幻灯片模板片段，包括封面页、目录页、章节页、内容页、双栏页、图文页、数据页、交互演示页和结束页。
它不是最终 HTML 产物，而是 Codex 生成基于 Reveal.js 的单文件 HTML 或交互演示页面时可复用的结构模板。
Codex 使用本文件时，应根据 layout-taxonomy.md、master-rules-editable-objects.md、style-token-template.md、asset-sourcing-rules.md 和 asset-placement-rules.md 选择合适页面类型，并保持 Logo、页眉页脚、页码、图片位置和企业视觉风格一致。
-->

# HTML Slide Template Patterns

## Purpose

Provide reusable HTML slide structure patterns for enterprise-style browser presentations.

This file is used as an asset template. Codex may copy, adapt, or combine these patterns when generating Reveal.js slide markup, a single-file HTML prototype, or a browser-based interactive presentation.

The goal is to keep generated slides consistent, inspectable, and aligned with the enterprise template rules.

## Usage rules

Use this file when:

- The user asks to generate a single-file HTML presentation prototype.
- The user asks to generate a browser presentation based on enterprise PPT style.
- The user asks to add a new slide layout.
- The user asks to add an interactive demo page.
- The user asks to standardize slide HTML structure.

Do not use this file to claim exact PPTX-to-HTML conversion.

Always combine this file with:

- `references/layout-taxonomy.md`
- `references/master-rules-editable-objects.md` when final HTML is derived from a PPTX or applies a PPTX template
- `references/single-file-html-rules.md`
- `references/revealjs-development-rules.md`
- `references/revealjs-presentation-shell-rules.md` when preview navigation or fullscreen controls are required
- `references/asset-placement-rules.md`
- `assets/style-token-template.md`

## Reveal.js document shell

Use Reveal.js as the default runtime. Final single-file output should follow this order:

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Presentation Title</title>

    <!-- reveal.js 6.0.1, MIT License -->
    <style>
      /* BUILD: inline dist/reset.css */
      /* BUILD: inline dist/reveal.css */
      /* BUILD: inline enterprise theme and slide CSS */
    </style>
  </head>
  <body>
    <div class="reveal">
      <div class="slides">
        <!-- BUILD: insert Reveal.js slide sections here -->
      </div>
    </div>

    <!-- BUILD: insert the shell from assets/revealjs-presentation-shell.md -->

    <script>
      /* BUILD: inline dist/reveal.js UMD distribution */
    </script>
    <script>
      /* BUILD: inline selected UMD plugins, if any */
    </script>
    <script>
      /* BUILD: initialize Reveal.js, then presentation-specific behavior */
    </script>
  </body>
</html>
```

Replace every `BUILD` marker during delivery. Do not leave external Reveal.js paths, CDN links, or unresolved asset references in final HTML.

For a normal user-facing deck, insert the reusable shell after `.reveal`. The shell provides a fixed left-side thumbnail preview rail that is expanded by default and can be collapsed, plus previous, counter, next, and new-tab Play controls. The playback tab requests fullscreen and exposes a one-click fallback when browser policy blocks automatic fullscreen. Omit the shell only for an explicitly requested minimal, embedded, kiosk, or print mode.

## Global slide shell

All slides should use a common shell where possible.

```html
<section class="slide content" data-slide-type="content">
  <div class="brand-logo" aria-label="Corporate logo">LOGO</div>

  <header class="slide-header">
    <div class="kicker">SECTION LABEL</div>
    <h1 class="slide-title">Slide Title</h1>
  </header>

  <main class="slide-body">
    <!-- Slide-specific content -->
  </main>

  <footer class="slide-footer">
    <span class="footer-left">Confidential</span>
    <span class="footer-right">1 / N</span>
  </footer>
</section>
```

Rules:

- Use `<section class="slide ...">` for each slide.
- Place every horizontal slide directly under `.reveal > .slides`.
- Use `data-slide-type` to make slide type explicit.
- Let Reveal.js control slide visibility; do not add or toggle a custom `active` class.
- Keep brand logo placement consistent.
- Keep footer structure consistent.
- Use layout-specific classes for slide bodies.
- Avoid inline styles unless a one-off prototype requires them.
- Use placeholders when final assets are missing.

## PPTX-derived editable object shell

When final HTML is derived from a content PPTX or applies a PPTX template, use a separate master-rule layer and editable-object layer:

```html
<section
  class="slide content ppt-rebuilt"
  data-slide-type="content"
  data-source-slide="3"
  data-template-layout="content-standard"
>
  <div class="template-layer" aria-hidden="true">
    <div class="template-background" data-template-role="master-background"></div>
    <div class="template-decoration" data-template-role="master-decoration"></div>
  </div>

  <div class="brand-logo" data-template-role="master-logo" role="img" aria-label="Corporate logo"></div>

  <main class="ppt-content-layer">
    <div
      class="ppt-object ppt-text"
      data-source-aid="sh/example-title"
      data-object-type="text"
    >
      <div
        class="ppt-text-body"
        contenteditable="true"
        spellcheck="false"
        data-editable-text="true"
      >
        Editable slide title
      </div>
    </div>

    <figure
      class="ppt-object ppt-image-frame"
      data-source-aid="im/example-photo"
      data-object-type="image"
    >
      <img src="data:image/png;base64,..." alt="Independent source image" />
    </figure>
  </main>

  <div class="page-number" data-template-role="master-page-number">3</div>
</section>
```

Rules:

- Generate shared master markup from one template function or reusable fragment.
- Keep source text, shapes, lines, and images as separate positioned objects.
- Keep `data-source-slide`, stable source-object IDs, object type, template layout, and template-role metadata where available.
- Do not use a rendered full-slide image inside `.ppt-content-layer` or as a shortcut slide background.
- Allow only original template-owned decorative background assets that contain no rasterized slide text or slide-specific content.
- Disable `contenteditable` in playback mode and remove it from preview clones.
- Use an isolated raster fallback only for one unsupported complex object and record that deviation.

## Cover slide

Purpose:

Opening page for the presentation.

```html
<section class="slide cover" data-slide-type="cover">
  <div class="brand-logo cover-logo" aria-label="Corporate logo">LOGO</div>

  <div class="cover-decoration" aria-hidden="true"></div>

  <main class="cover-content">
    <div class="kicker">ENTERPRISE PRESENTATION</div>
    <h1 class="cover-title">Presentation Title</h1>
    <p class="cover-subtitle">Subtitle / Organization / Date</p>
  </main>

  <footer class="slide-footer cover-footer">
    <span class="footer-left">Confidential</span>
    <span class="footer-right">1 / N</span>
  </footer>
</section>
```

Content placeholders:

- `Presentation Title`
- `Subtitle / Organization / Date`
- `LOGO`
- `Confidential`

Placement rules:

- Title may be center-left, center, or lower-left depending on enterprise style.
- Logo should follow template position.
- Decoration should stay behind content.
- Avoid dense body text.

## Agenda slide

Purpose:

Show presentation structure.

```html
<section class="slide agenda" data-slide-type="agenda">
  <div class="brand-logo" aria-label="Corporate logo">LOGO</div>

  <header class="slide-header">
    <div class="kicker">CONTENTS</div>
    <h1 class="slide-title">目录</h1>
  </header>

  <main class="slide-body agenda-grid">
    <article class="agenda-item">
      <div class="agenda-number">01</div>
      <div class="agenda-title">Chapter Title</div>
    </article>

    <article class="agenda-item">
      <div class="agenda-number">02</div>
      <div class="agenda-title">Chapter Title</div>
    </article>

    <article class="agenda-item">
      <div class="agenda-number">03</div>
      <div class="agenda-title">Chapter Title</div>
    </article>

    <article class="agenda-item">
      <div class="agenda-number">04</div>
      <div class="agenda-title">Chapter Title</div>
    </article>
  </main>

  <footer class="slide-footer">
    <span class="footer-left">Confidential</span>
    <span class="footer-right">2 / N</span>
  </footer>
</section>
```

Rules:

- Use 3–6 agenda items by default.
- Keep section numbers visually prominent.
- Keep agenda item labels short.
- Do not place long descriptions in agenda items.

## Section divider slide

Purpose:

Start a new chapter or major topic.

```html
<section class="slide section-page" data-slide-type="section">
  <div class="brand-logo" aria-label="Corporate logo">LOGO</div>

  <main class="section-content">
    <div class="section-number">01</div>
    <div class="kicker">CHAPTER</div>
    <h1 class="section-title">Title of Chapter</h1>
    <p class="section-subtitle">Optional subtitle</p>
  </main>

  <footer class="slide-footer section-footer">
    <span class="footer-left">Confidential</span>
    <span class="footer-right">3 / N</span>
  </footer>
</section>
```

Rules:

- Keep section pages visually simple.
- Chapter number may be large and decorative.
- Use strong brand color or decoration if consistent with the PPT template.
- Do not include tables, charts, or dense text.

## Standard content slide

Purpose:

Main explanation page.

```html
<section class="slide content" data-slide-type="content">
  <div class="brand-logo" aria-label="Corporate logo">LOGO</div>

  <header class="slide-header">
    <div class="kicker">SECTION LABEL</div>
    <h1 class="slide-title">Slide Title</h1>
  </header>

  <main class="slide-body content-area">
    <p class="lead-text">Short lead sentence summarizing the slide.</p>

    <ul class="bullet-list">
      <li>Key point one.</li>
      <li>Key point two.</li>
      <li>Key point three.</li>
    </ul>
  </main>

  <footer class="slide-footer">
    <span class="footer-left">Confidential</span>
    <span class="footer-right">4 / N</span>
  </footer>
</section>
```

Rules:

- Use for normal text-heavy explanation.
- Keep bullet count limited.
- Avoid dense paragraphs.
- Keep title position consistent.

## Two-column slide

Purpose:

Compare two ideas or present two parallel content blocks.

```html
<section class="slide two-column" data-slide-type="two-column">
  <div class="brand-logo" aria-label="Corporate logo">LOGO</div>

  <header class="slide-header">
    <div class="kicker">COMPARISON</div>
    <h1 class="slide-title">Slide Title</h1>
  </header>

  <main class="slide-body two-column-grid">
    <article class="panel panel-left">
      <h2>Left Panel Title</h2>
      <ul>
        <li>Left point one.</li>
        <li>Left point two.</li>
      </ul>
    </article>

    <article class="panel panel-right">
      <h2>Right Panel Title</h2>
      <ul>
        <li>Right point one.</li>
        <li>Right point two.</li>
      </ul>
    </article>
  </main>

  <footer class="slide-footer">
    <span class="footer-left">Confidential</span>
    <span class="footer-right">5 / N</span>
  </footer>
</section>
```

Rules:

- Use for comparison or parallel explanation.
- Keep both panels visually balanced.
- Avoid more than two major groups.
- Use consistent card or panel styling.

## Image-text slide

Purpose:

Combine visual material and explanation.

```html
<section class="slide image-text" data-slide-type="image-text">
  <div class="brand-logo" aria-label="Corporate logo">LOGO</div>

  <header class="slide-header">
    <div class="kicker">SCENARIO</div>
    <h1 class="slide-title">Slide Title</h1>
  </header>

  <main class="slide-body image-text-grid">
    <article class="text-panel">
      <h2>Message Title</h2>
      <p>Explanation text goes here.</p>
      <ul>
        <li>Supporting point one.</li>
        <li>Supporting point two.</li>
      </ul>
    </article>

    <figure class="image-panel">
      <div class="image-placeholder">IMAGE PLACEHOLDER</div>
      <figcaption>Image caption or source note.</figcaption>
    </figure>
  </main>

  <footer class="slide-footer">
    <span class="footer-left">Confidential</span>
    <span class="footer-right">6 / N</span>
  </footer>
</section>
```

In a development prototype, a confirmed local image may be referenced as:

```html
<img class="slide-image" src="assets/project-photo-01.png" alt="Project photo description" />
```

For strict single-file delivery, replace the path with an embedded data URL or inline SVG.

Rules:

- Use `object-fit: cover` for photos when cropping is acceptable.
- Use `object-fit: contain` for diagrams and screenshots.
- Add caption for project or evidence images.
- Do not stretch images.

## Data slide

Purpose:

Show metrics, chart, table, or KPI information.

```html
<section class="slide data" data-slide-type="data">
  <div class="brand-logo" aria-label="Corporate logo">LOGO</div>

  <header class="slide-header">
    <div class="kicker">DATA</div>
    <h1 class="slide-title">Slide Title</h1>
  </header>

  <main class="slide-body data-layout">
    <section class="chart-area">
      <div class="chart-placeholder">CHART PLACEHOLDER</div>
    </section>

    <aside class="takeaway-panel">
      <h2>Key Takeaways</h2>
      <ul>
        <li>Takeaway one.</li>
        <li>Takeaway two.</li>
        <li>Takeaway three.</li>
      </ul>
    </aside>
  </main>

  <footer class="slide-footer">
    <span class="footer-left">Confidential</span>
    <span class="footer-right">7 / N</span>
  </footer>
</section>
```

Rules:

- Do not invent data.
- Mark placeholder data clearly.
- Keep labels readable.
- Use corporate colors.
- Keep chart away from footer.

## Interactive demo slide

Purpose:

Host AI-generated frontend interaction.

```html
<section class="slide interactive-demo" data-slide-type="interactive-demo">
  <div class="brand-logo" aria-label="Corporate logo">LOGO</div>

  <header class="slide-header">
    <div class="kicker">INTERACTIVE DEMO</div>
    <h1 class="slide-title">Slide Title</h1>
  </header>

  <main class="slide-body demo-layout">
    <section class="demo-canvas">
      <div class="demo-placeholder">INTERACTIVE CANVAS</div>
    </section>

    <aside class="demo-controls">
      <h2>Controls</h2>
      <button type="button" class="demo-button active">Mode 1</button>
      <button type="button" class="demo-button">Mode 2</button>
      <button type="button" class="demo-button">Mode 3</button>

      <div class="demo-status">
        Current state explanation.
      </div>
    </aside>
  </main>

  <footer class="slide-footer">
    <span class="footer-left">Confidential</span>
    <span class="footer-right">8 / N</span>
  </footer>
</section>
```

Rules:

- Interaction must work offline in MVP.
- Controls must be visible.
- Current interaction state must be obvious.
- Provide fallback text explanation.
- Avoid external APIs by default.
- Keep JavaScript simple and inspectable.

## Closing slide

Purpose:

End the presentation.

```html
<section class="slide closing" data-slide-type="closing">
  <div class="brand-logo closing-logo" aria-label="Corporate logo">LOGO</div>

  <main class="closing-content">
    <h1>Thank You</h1>
    <p class="closing-statement">Closing statement goes here.</p>
    <p class="closing-website">http://www.example.com</p>
    <p class="closing-slogan">Corporate slogan goes here.</p>
  </main>

  <footer class="slide-footer closing-footer">
    <span class="footer-left">Confidential</span>
    <span class="footer-right">N / N</span>
  </footer>
</section>
```

Rules:

- Use official website and slogan when available.
- Keep final message short.
- Logo may be more prominent than normal slides.
- Do not introduce new technical content on the closing page.

## Reveal.js initialization pattern

Use Reveal.js for navigation, scaling, keyboard input, touch, overview, and lifecycle state:

```html
<script>
  function syncPresentationState(event) {
    const currentSlide = event.currentSlide || Reveal.getCurrentSlide();
    document.documentElement.dataset.currentChapter = currentSlide?.dataset.chapter || "";
  }

  Reveal.on("ready", syncPresentationState);
  Reveal.on("slidechanged", syncPresentationState);

  Reveal.initialize({
    width: 1280,
    height: 720,
    margin: 0,
    minScale: 0.2,
    maxScale: 2,
    center: false,
    controls: false, // custom shell supplies visible controls
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
</script>
```

Rules:

- Keep chapter and subtitle target IDs stable.
- Use named routes such as `<a href="#/chapter-1">...</a>` for semantic navigation.
- Use `Reveal.getIndices()` and `Reveal.slide()` only when native named routing is insufficient.
- Do not create a parallel slide index or duplicate Reveal.js keyboard handlers.
- Add plugins only when required and available offline.
- Keep presentation-specific behavior inspectable.
- Install the reusable shell only after Reveal.js is ready; see `assets/revealjs-presentation-shell.md`.
- If the custom shell is omitted, restore `controls: true` in the baseline configuration.

## Minimal CSS structure reminder

This file does not define the full CSS theme. Use `style-token-template.md` for style variables.

A generated HTML prototype should define CSS variables and layout classes such as:

```css
:root {
  --slide-w: 1280px;
  --slide-h: 720px;
  --safe-x: 78px;
  --safe-y: 56px;
  --brand-primary: ;
  --brand-secondary: ;
  --brand-accent: ;
}

.reveal {}
.reveal .slides {}
.reveal .slides > section.slide {}
.reveal .slides > section.present {}
.brand-logo {}
.slide-header {}
.slide-body {}
.slide-footer {}
.cover {}
.agenda {}
.section-page {}
.content {}
.two-column {}
.image-text {}
.data {}
.interactive-demo {}
.closing {}
```

## Output requirements

When this asset is used, Codex should output:

### 结论

Use one of:

- 可使用现有 HTML slide 模板
- 需要新增页面类型模板
- 需要先补充 style tokens
- 需要先补充素材规则

### 使用的 slide 模板

### 需要替换的占位符

### 需要确认的资产

### 需要补充的 CSS classes

### 下一步动作

## Quality checklist

Before generating final HTML from these templates, confirm:

- Slide type is explicit with `data-slide-type`.
- Logo placeholder or final logo is present.
- Footer is present where required.
- Page number is present where required.
- Placeholders are clearly labeled.
- Image placeholders preserve layout space.
- Interactive slide has fallback explanation.
- Reveal.js owns navigation and slide visibility.
- The fixed left preview rail, collapse control, playback controls, and fullscreen playback state are synchronized from Reveal.js state when the user-facing shell is enabled.
- Final output embeds Reveal.js and introduces no required external request.
- Final output contains no machine-specific Reveal.js or asset path.
- Final generated slide follows layout taxonomy and asset placement rules.
- PPTX-derived final output separates master rules from editable HTML objects.
- PPTX-derived final output contains no rendered full-slide screenshot unless explicitly approved.
- Normal mode exposes the expected editable text objects; playback mode and preview clones expose none.
