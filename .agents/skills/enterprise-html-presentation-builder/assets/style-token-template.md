<!--
规则作用：
本文件用于记录和沉淀企业 PPT 模板中的视觉风格变量，包括 Logo、品牌色、字体、字号、留白、页眉页脚、装饰元素和组件样式。
它不是最终 HTML 产物，而是后续生成 Reveal.js 单文件 HTML 或交互演示页面时的企业视觉规范输入。
Codex 使用本文件时，应先区分“已确认 style tokens”“推测 style tokens”“缺失 style tokens”和“需品牌确认的 tokens”，不得把从 PPT 视觉估算出的草案值直接当作最终品牌规范。
-->

# Enterprise Style Token Template

## Purpose

Document the reusable enterprise visual style tokens extracted from a PowerPoint template, corporate brand material, or user-provided design rules.

This file is used as a template for converting enterprise presentation style into browser presentation CSS variables and layout rules.

The goal is to make style decisions explicit, reusable, and easy to verify before generating a single-file HTML prototype.

## Usage rules

Use this template when:

- An enterprise PPT template is available.
- A browser presentation should follow corporate visual identity.
- The user wants enterprise-style Reveal.js output, including strict single-file delivery.
- The exact visual style needs to be documented before generating HTML.

Do not treat draft tokens as final brand rules unless the user confirms them.

Always distinguish:

- Confirmed style tokens
- Extracted or estimated style tokens
- Missing style tokens
- Tokens requiring brand verification

## Template source

- Template name:
- Source file:
- Source type: PPTX / exported slide image / brand guide / user description / other
- Analysis date:
- Analyst:
- Corporate owner:
- Intended use:

## Brand identity

- Organization name:
- Brand or business unit:
- English name:
- Chinese name:
- Website:
- Slogan:
- Confidentiality label:
- Default footer text:
- Default page number format:

## Logo tokens

### Primary logo

- Asset ID: logo-primary
- Source:
- File path:
- Format: SVG / PNG / JPG / text placeholder
- Permission status:
- Usage status: confirmed / placeholder / needs verification

### Logo placement

- Normal slide position:
- Cover page position:
- Closing page position:
- Width:
- Height:
- Clear space:
- Background requirement:

### Logo restrictions

- Preserve aspect ratio: Yes
- Recolor allowed: Yes / No / Not confirmed
- Effects allowed: Yes / No / Not confirmed
- Minimum size:
- Notes:

## Color tokens

Use official brand colors when available. If values are extracted from the PPT visually, mark them as draft and requiring verification.

```css
:root {
  --brand-primary: ;
  --brand-secondary: ;
  --brand-accent: ;
  --brand-bg: ;
  --brand-surface: ;
  --brand-text: #016F67;
  --brand-muted: ;
  --brand-line: ;
  --brand-success: ;
  --brand-warning: ;
  --brand-danger: ;
}
```

### Color inventory

| Token | Value | Source | Status | Usage |
|---|---|---|---|---|
| --brand-primary |  | PPT / brand guide / user | confirmed / draft / missing | Main corporate color |
| --brand-secondary |  | PPT / brand guide / user | confirmed / draft / missing | Secondary visual color |
| --brand-accent |  | PPT / brand guide / user | confirmed / draft / missing | Highlights and emphasis |
| --brand-bg |  | PPT / brand guide / user | confirmed / draft / missing | Slide background |
| --brand-surface |  | PPT / brand guide / user | confirmed / draft / missing | Cards and panels |
| --brand-text | #016F67 | skill default / user override | confirmed default | Main text on light and neutral backgrounds |
| --brand-muted |  | PPT / brand guide / user | confirmed / draft / missing | Secondary text |
| --brand-line |  | PPT / brand guide / user | confirmed / draft / missing | Borders and dividers |

## Typography tokens

Use the skill defaults below unless the user or project explicitly confirms a replacement. Use system font fallbacks and do not require remote fonts.

```css
:root {
  --font-cn: "Microsoft YaHei", "微软雅黑", sans-serif;
  --font-en: Arial, sans-serif;
  --font-ui: Arial, "Microsoft YaHei", "微软雅黑", sans-serif;
  --font-mono: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
}
```

### Font inventory

| Token | Value | Source | Status | Usage |
|---|---|---|---|---|
| --font-cn |  | PPT / brand guide / fallback | confirmed / draft / missing | Chinese text |
| --font-en |  | PPT / brand guide / fallback | confirmed / draft / missing | English text |
| --font-ui | Arial, "Microsoft YaHei", "微软雅黑", sans-serif | skill default / user override | confirmed default | Mixed Chinese and English browser text |
| --font-mono |  | system fallback | confirmed / draft / missing | Code or technical labels |

### Font size tokens

```css
:root {
  --font-cover-title: ;
  --font-cover-subtitle: ;
  --font-slide-title: ;
  --font-section-title: ;
  --font-body: ;
  --font-small: ;
  --font-footer: ;
  --font-caption: ;
}
```

Recommended draft values for a 1280 x 720 logical canvas:

| Token | Recommended range | Usage |
|---|---:|---|
| --font-cover-title | 48–64px | Cover title |
| --font-cover-subtitle | 22–28px | Cover subtitle |
| --font-slide-title | 34–44px | Normal slide title |
| --font-section-title | 44–60px | Section title |
| --font-body | 20–26px | Main body text |
| --font-small | 14–18px | Supporting labels |
| --font-footer | 11–14px | Footer and page number |
| --font-caption | 13–16px | Image caption |

## Spacing and layout tokens

```css
:root {
  --slide-w: 1280px;
  --slide-h: 720px;
  --safe-x: ;
  --safe-y: ;
  --header-h: ;
  --footer-h: ;
  --gap-sm: ;
  --gap-md: ;
  --gap-lg: ;
  --card-radius: ;
  --card-padding: ;
}
```

Recommended draft values:

| Token | Recommended range | Usage |
|---|---:|---|
| --safe-x | 72–88px | Left/right safe margin |
| --safe-y | 48–72px | Top/bottom safe margin |
| --header-h | 72–100px | Header/title area |
| --footer-h | 36–56px | Footer area |
| --gap-sm | 8–12px | Small internal gap |
| --gap-md | 20–28px | Normal layout gap |
| --gap-lg | 32–48px | Large section gap |
| --card-radius | 8–18px | Card corner radius |
| --card-padding | 20–32px | Card internal padding |

## Header tokens

- Header exists: Yes / No / Not confirmed
- Header position:
- Header height:
- Header background:
- Header line:
- Header text:
- Header appears on:

Recommended CSS variables:

```css
:root {
  --header-top: ;
  --header-left: ;
  --header-right: ;
  --header-title-y: ;
}
```

## Footer tokens

- Footer exists: Yes / No / Not confirmed
- Footer position:
- Footer height:
- Footer left text:
- Footer center text:
- Footer right text:
- Page number position:
- Footer decoration:
- Footer appears on:

Recommended CSS variables:

```css
:root {
  --footer-bottom: ;
  --footer-left: ;
  --footer-right: ;
  --footer-line-color: ;
}
```

## Decoration tokens

Document decorative visual elements from the PPT template.

| Element | Type | Source | Rebuild strategy | Placement | Status |
|---|---|---|---|---|---|
| cover-decoration | background / line / shape / image | PPT / CSS / SVG | CSS / SVG / image | cover | confirmed / draft / missing |
| section-decoration | background / line / shape / image | PPT / CSS / SVG | CSS / SVG / image | section | confirmed / draft / missing |
| footer-decoration | background / line / shape / image | PPT / CSS / SVG | CSS / SVG / image | footer | confirmed / draft / missing |

Rules:

- Prefer CSS/SVG for simple decorative elements.
- Use image extraction only when the decoration is complex.
- Keep decoration consistent across slide types.
- Do not allow decoration to reduce text readability.

## Component tokens

### Card

```css
:root {
  --card-bg: ;
  --card-border: ;
  --card-radius: ;
  --card-shadow: ;
  --card-padding: ;
}
```

Usage:

- Two-column layout
- Data layout
- Feature cards
- Content grouping

### Button or control

```css
:root {
  --control-bg: ;
  --control-active-bg: ;
  --control-text: ;
  --control-active-text: ;
  --control-border: ;
  --control-radius: ;
}
```

Usage:

- Interactive demo controls
- Scenario selector
- Mode selector

### Chart

```css
:root {
  --chart-series-1: ;
  --chart-series-2: ;
  --chart-series-3: ;
  --chart-grid: ;
  --chart-label: ;
}
```

Usage:

- Data page
- KPI page
- Load curve
- Storage dispatch chart

## Slide-type token mapping

Map style tokens to slide types.

| Slide type | Background | Logo | Title style | Footer | Decoration | Notes |
|---|---|---|---|---|---|---|
| cover |  |  |  |  |  |  |
| agenda |  |  |  |  |  |  |
| section |  |  |  |  |  |  |
| content |  |  |  |  |  |  |
| two-column |  |  |  |  |  |  |
| image-text |  |  |  |  |  |  |
| data |  |  |  |  |  |  |
| interactive-demo |  |  |  |  |  |  |
| closing |  |  |  |  |  |  |

## CSS output block

When style tokens are ready, Codex may produce a final CSS token block in this format:

```css
:root {
  /* Brand colors */
  --brand-primary: ;
  --brand-secondary: ;
  --brand-accent: ;
  --brand-bg: ;
  --brand-surface: ;
  --brand-text: #016F67;
  --brand-muted: ;
  --brand-line: ;

  /* Typography */
  --font-cn: "Microsoft YaHei", "微软雅黑", sans-serif;
  --font-en: Arial, sans-serif;
  --font-ui: Arial, "Microsoft YaHei", "微软雅黑", sans-serif;
  --font-cover-title: ;
  --font-slide-title: ;
  --font-body: ;
  --font-footer: ;

  /* Layout */
  --slide-w: 1280px;
  --slide-h: 720px;
  --safe-x: ;
  --safe-y: ;
  --header-h: ;
  --footer-h: ;
  --logo-w: ;

  /* Components */
  --card-bg: ;
  --card-border: ;
  --card-radius: ;
  --card-padding: ;
}
```

## Verification status

Use this table to track style confidence.

| Area | Status | Notes |
|---|---|---|
| Logo | confirmed / draft / missing |  |
| Colors | confirmed / draft / missing |  |
| Fonts | confirmed / draft / missing |  |
| Header | confirmed / draft / missing |  |
| Footer | confirmed / draft / missing |  |
| Layout spacing | confirmed / draft / missing |  |
| Decoration | confirmed / draft / missing |  |
| Slide-type mapping | confirmed / draft / missing |  |

## Information gaps

List missing or uncertain style information.

| Gap | Impact | Required before MVP | Required before final delivery |
|---|---|---|---|
| Official logo file | Brand accuracy | No | Yes |
| Exact brand colors | Style accuracy | No | Yes |
| Official font rules | Style accuracy | No | Maybe |
| Header dimensions | Layout accuracy | No | Yes |
| Footer content | Brand consistency | Yes | Yes |
| Decoration source | Visual fidelity | No | Maybe |

## Output requirements

When this template is used, Codex should output:

### 结论

Use one of:

- 风格 tokens 已足够生成 MVP
- 风格 tokens 仅适合作为草案
- 需要补充企业品牌信息
- 当前信息不足，不能生成企业风格模板

### 已确认 style tokens

### 推测 style tokens

### 缺失 style tokens

### CSS token 草案

### Slide-type token mapping

### 信息缺口

### 下一步动作

## Quality checklist

Before using style tokens to generate HTML, confirm:

- Brand colors are documented.
- Draft colors are marked as draft.
- Fonts are documented or fallback is defined.
- Logo token is documented.
- Header and footer tokens are documented.
- Layout spacing is documented.
- Decoration strategy is documented.
- Slide-type mapping is documented.
- Missing style information is listed.
- No token is presented as final unless verified.
