# Test: Master Rules + Editable HTML Objects

## Purpose

Test whether the skill applies a PowerPoint template as reusable master rules while rebuilding slide content as editable HTML objects instead of full-slide images.

## Test prompt

```text
$enterprise-html-presentation-builder

请把一份 4 页中文内容 PPTX 转为 Reveal.js 单文件 HTML。

template/ 中有 4 套母版：绿色和科技蓝各有中英文版。
请使用中文科技蓝母版。

要求：
- 用模板套用方式。
- 除配色、Logo、企业名称外，页序、内容、图片和布局不动。
- 不要把幻灯片转成整页图片。
- 文本必须可以在普通模式直接编辑。
- 播放模式必须锁定编辑。
- 图片、地图、横幅、期刊封面和图标应保持为独立对象。
- 最终交付一个可离线打开的 HTML 文件。
```

## Required skill behavior

The skill should:

- Load `references/master-rules-editable-objects.md`.
- Inventory template variants and select the Chinese technology-blue template.
- Record the selected template and map all four output slides to a template layout family.
- Extract shared background, logo, company identity, title region, page number, colors, and typography into a master-rule layer.
- Rebuild source text, shapes, connectors, and independent images as positioned HTML/CSS/SVG objects.
- Keep normal-mode text editable and disable editing in playback mode and preview clones.
- Use rendered slide images only for comparison and QA.
- Record unsupported isolated objects and the chosen fallback.

## Pass criteria

- The output has exactly four slides in the source order.
- No delivered slide contains a rendered full-slide screenshot.
- `fullSlideScreenshotCount` is `0`.
- Source text is represented by editable HTML text objects.
- Images remain independent objects and all load successfully.
- The selected Chinese technology-blue master roles appear consistently.
- Edit mode contains the expected editable text objects.
- Playback mode contains zero editable text objects.
- Preview clones are not editable and contain no duplicate IDs.
- The final file works offline and has no external runtime or asset dependency.

## Fail criteria

- A source slide render is embedded as the slide background or main content image.
- Invisible editable text is layered over a flattened slide screenshot.
- The skill mixes the green, English, or wrong-enterprise template assets.
- Slide-owned content is changed without explicit permission.
- Unsupported content causes the entire slide to be flattened without approval.
