# Test: Reveal.js Presentation Shell Request

## Purpose

Test whether `enterprise-html-presentation-builder` adds reusable preview navigation and fullscreen playback controls without creating a second slide controller.

## Test prompt

```text
$enterprise-html-presentation-builder

请给现有 Reveal.js 企业 HTML PPT 增加演示外壳：
- 当前标签左侧固定显示缩略图预览栏，默认展开，并可通过箭头按钮收起和恢复。
- 缩略图显示页码、标题和当前页状态。
- 点击缩略图跳转；鼠标悬停不能自动翻页。
- 底部只提供上一页、页码/总页数、下一页和播放按钮，不增加概览或预览按钮。
- 点击“播放”另开标签，从当前页进入播放模式并申请全屏。
- 浏览器若拦截自动全屏，播放页显示一次性的“进入全屏”按钮。
- 全屏时隐藏预览菜单和编辑态控件，让幻灯片占满窗口。
- 按 Escape 退出全屏后，即使仍在播放标签页，也要恢复左侧缩略图栏和折叠按钮。
- 保持 Reveal.js 的键盘、触控、哈希路由、概览和进度条。
- 输出仍是断网可用的单文件 HTML。
```

## Required skill behavior

The skill should:

- Load `references/revealjs-development-rules.md`.
- Load `references/revealjs-presentation-shell-rules.md`.
- Load `references/single-file-html-rules.md` for final delivery.
- Use `assets/revealjs-presentation-shell.md` as the implementation pattern.
- Keep Reveal.js as the only owner of slide state.
- Build thumbnails from slide DOM at runtime and sanitize cloned interactions and IDs.
- Navigate thumbnails through `Reveal.getIndices()` and `Reveal.slide()`.
- Call `Reveal.prev()` and `Reveal.next()` from custom controls.
- Update active preview and counter from Reveal.js lifecycle events.
- Open Play in a new tab with a playback-mode query parameter and preserve the current semantic route.
- Use the Fullscreen API, show a fallback prompt when automatic fullscreen is rejected, and respond to `fullscreenchange`.
- Keep playback-mode responsible only for editing-state restrictions; derive preview-rail visibility from the actual fullscreen state.
- Call `Reveal.layout()` after preview collapse/expand and fullscreen layout changes.
- Avoid duplicate Arrow, Page Up, Page Down, and Space handlers.
- Avoid hover-driven slide navigation.

## Pass criteria

The test passes if:

- Preview count equals the Reveal.js slide count.
- Every preview has a caption, keyboard focus, and click navigation.
- Hovering a preview does not change the current slide.
- The active preview and counter remain correct after keyboard, button, hash, agenda, and overview navigation.
- The fixed left preview rail starts expanded, can collapse and restore, and keeps the active preview synchronized.
- Previous, next, counter, and Play controls work without double navigation; no overview or redundant Preview button is present.
- Play opens a second tab at the current slide, and the original editing tab remains in place.
- Automatic fullscreen succeeds when allowed; otherwise the playback tab exposes a working one-click fallback.
- Fullscreen entry hides the preview rail; Escape exit restores the rail, toggle, reserved width, and layout in the playback tab.
- The final file contains no external dependency, preview screenshot request, or machine-specific path.
- No console error occurs during offline browser playback.
