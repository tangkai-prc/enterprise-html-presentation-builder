# Test: Reveal.js Single-file Request

## Purpose

Test whether `enterprise-html-presentation-builder` uses Reveal.js as the default runtime and packages a portable offline single-file HTML presentation.

## Test prompt

```text
$enterprise-html-presentation-builder

请使用 Reveal.js 开发一份 16:9 企业 HTML PPT，并生成单文件 HTML 原型。

已下载的 Reveal.js 位于：
/Users/tangkai/code/revealJs/node_modules/reveal.js

要求：
- 不重新安装依赖。
- 不修改 Reveal.js 安装目录。
- 使用 Reveal.js 处理翻页、键盘、触控、总览和缩放。
- 包含封面、目录、两个章节页、内容页和结束页。
- 目录通过语义链接跳转到章节。
- 最终 HTML 内嵌 Reveal.js、CSS、JavaScript 和占位素材。
- 断网并移动文件后仍可双击打开。
- 不使用 CDN、远程字体、在线 API 或外部图片。
- 默认使用简体中文。
```

## Required skill behavior

The skill should:

- Load `references/revealjs-development-rules.md`.
- Load `references/single-file-html-rules.md`.
- Use `assets/html-slide-template.md` for the Reveal.js shell and slide patterns.
- Confirm or inspect the local Reveal.js version before packaging.
- Use `.reveal > .slides > section` markup.
- Use stable target IDs and links such as `#/chapter-1`.
- Use Reveal.js lifecycle events for chapter state.
- Avoid a custom `active`-class slide controller.
- Avoid duplicate Arrow, Page Up, Page Down, and Space handlers.
- Use `dist/reveal.js` rather than `dist/reveal.mjs` for direct script inlining.
- Preserve the Reveal.js MIT notice.
- Avoid dependency installation and external network access.

## Expected initialization

The generated presentation should use an equivalent baseline:

```js
Reveal.initialize({
  width: 1280,
  height: 720,
  margin: 0,
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

Project-specific requirements may add settings, but should not replace Reveal.js navigation with a second controller.

## Pass criteria

The test passes if:

- The generated output is one HTML file.
- Reveal.js initializes without console errors.
- The output records the bundled Reveal.js version and MIT license.
- No final `link`, `script`, image, font, or data reference points to `/Users/tangkai/code/revealJs`.
- No required external request is made.
- Arrow keys, touch, overview, progress, fullscreen, and hash navigation work as specified.
- Agenda links navigate to stable slide IDs.
- Interactive controls do not unintentionally advance slides.
- The file still works offline after being moved to another directory.
- No dependency was installed or modified.
