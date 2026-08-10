

# Asset Placement Rules

## Purpose

Define where logos, backgrounds, images, icons, charts, maps, screenshots, and decorative elements should be placed in enterprise-style browser presentations.

This file is used when the skill maps enterprise PowerPoint visual patterns into HTML/CSS slide layouts.

The goal is to make visual placement consistent, reusable, and suitable for browser-based presentation delivery.

## Core placement principles

### Use a stable slide coordinate system

Default logical slide canvas:

- Width: 1280 px
- Height: 720 px
- Aspect ratio: 16:9

Recommended safe area:

- Left margin: 72–88 px
- Right margin: 72–88 px
- Top margin: 52–72 px
- Bottom margin: 48–64 px

Rules:

- Use consistent safe margins across normal slides.
- Do not place important content near slide edges.
- Keep title, logo, footer, and page number in predictable positions.
- Use layout classes rather than one-off absolute positioning when possible.

### Separate fixed brand elements from slide content

Fixed brand elements include:

- Logo
- Header decoration
- Footer
- Page number
- Website
- Slogan
- Confidentiality label

Slide content includes:

- Title
- Body text
- Images
- Charts
- Diagrams
- Interactive controls

Rules:

- Fixed brand elements should not overlap slide content.
- Slide content should stay within the main content area.
- Footer and page number should remain readable but visually secondary.

### Preserve asset meaning

Rules:

- Do not crop technical diagrams unless explicitly allowed.
- Do not crop logos.
- Do not stretch images.
- Use photos as visual material, not as factual evidence unless source is confirmed.
- Add captions when images support evidence or project references.

## Global layout regions

Use these conceptual regions for browser slide layouts:

```text
┌────────────────────────────────────────────┐
│ Header / Title Area                 Logo   │
│                                            │
│                                            │
│              Main Content Area             │
│                                            │
│                                            │
│ Footer / Website / Slogan       Page No.   │
└────────────────────────────────────────────┘
```

Recommended CSS variables:

```css
:root {
  --slide-w: 1280px;
  --slide-h: 720px;
  --safe-x: 78px;
  --safe-y: 56px;
  --header-h: 88px;
  --footer-h: 44px;
  --logo-w: 132px;
}
```

## Logo placement

### Default placement

Normal slides:

- Position: top-right
- Width: 110–150 px
- Height: auto
- Keep aspect ratio
- Keep clear space around logo

Recommended CSS concept:

```css
.brand-logo {
  position: absolute;
  top: 30px;
  right: 44px;
  width: var(--logo-w);
  height: auto;
}
```

### Cover page placement

Acceptable positions:

- Top-left
- Top-right
- Near title block
- Centered only if corporate style uses centered identity

Rules:

- Cover logo may be larger than normal-slide logo.
- Cover logo should not compete with main title.
- If the PPT template has an established cover logo position, follow the template.

### Closing page placement

Acceptable positions:

- Top-right
- Center-top
- Near website and slogan
- Near organization identity block

Rules:

- Closing page logo can be more prominent.
- Do not oversize the logo.
- Pair logo with website, slogan, or closing statement when appropriate.

### Logo restrictions

Do not:

- Stretch logo.
- Crop logo.
- Rotate logo.
- Recolor logo without brand approval.
- Add effects not present in the brand system.
- Use low-resolution logo in final delivery.

## Header placement

### Normal content slides

Recommended placement:

- Kicker or section label: top-left
- Slide title: below kicker or at top-left
- Logo: top-right

Rules:

- Header area should not exceed 20% of slide height.
- Title should be visually dominant but not collide with logo.
- If title is long, wrap within safe width.
- Do not place title under fixed logo.

### Section slides

Recommended placement:

- Chapter number: large, decorative, or left aligned
- Chapter title: center-left or center
- Subtitle: below title if needed

Rules:

- Section page may use stronger brand color.
- Header rules may differ from normal content slides.
- Keep text minimal.

## Footer placement

### Default footer

Recommended placement:

- Bottom safe area
- Left: confidentiality label, website, organization, or slogan
- Right: page number
- Optional center: section name or slogan

Recommended CSS concept:

```css
.slide-footer {
  position: absolute;
  left: var(--safe-x);
  right: var(--safe-x);
  bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

Rules:

- Footer should be smaller than body text.
- Footer must not compete with main content.
- Footer should not overlap images, charts, or controls.
- Page number should be consistent.
- Website and slogan should use exact official text when available.

## Background placement

### Full-slide background

Use for:

- Cover page
- Section divider page
- Closing page
- Special visual page

Rules:

- Ensure text contrast.
- Add overlay if background is visually busy.
- Avoid full-slide background images on text-heavy slides unless necessary.
- Do not use a rendered full-slide screenshot to flatten a content slide. A full-slide asset is acceptable only when it is an original template-owned or source-owned background without rasterized slide text and slide-specific objects.
- Do not use external image URLs in single-file HTML MVP.

### Content-page background

Use for:

- Light corporate background
- Subtle patterns
- Low-opacity decorative elements

Rules:

- Prefer CSS or SVG.
- Keep content readable.
- Do not place strong patterns behind dense text.
- Use consistent decorative style across the deck.

## Decorative element placement

Typical decorative elements:

- Lines
- Waves
- Color blocks
- Corner shapes
- Circles
- Arcs
- Grids
- Footer decorations

Recommended placement:

- Corners
- Margins
- Footer background
- Right-side background layer
- Bottom-right area
- Section page background

Rules:

- Decorative elements should support corporate style, not distract from content.
- Do not place decoration directly behind dense body text unless opacity is low.
- Use the same decorative language across slide types.
- Prefer CSS/SVG for MVP.
- When rebuilding PowerPoint decorative images from PPTX XML, respect the source picture geometry and crop data:
  - If the picture has no `srcRect`, stretch it to the exact XML box with `background-size: 100% 100%` or an `<img>` sized to the box.
  - Use `cover` only when the PPTX explicitly crops the image or when visual cropping is acceptable.
  - Corporate wave, gradient, and ribbon backgrounds often depend on this exact non-proportional PowerPoint scaling.

## Image placement

### Image-text layout

Default layout:

- Text area: left
- Image area: right

Recommended proportions:

- Text area: 40–48% width
- Image area: 45–55% width
- Gap: 24–40 px

Rules:

- Preserve image aspect ratio.
- Use `object-fit: cover` for visual photos.
- Use `object-fit: contain` for diagrams, screenshots, technical drawings, and logos.
- Add caption when image is evidence or project material.
- Keep image within safe area.

### Full-width image layout

Use for:

- Scenario page
- Visual transition page
- Project photo page

Rules:

- Add text overlay only if contrast is controlled.
- Use gradient overlay when placing text over image.
- Do not place small text over image.
- Prefer short titles and captions.

### Image grid layout

Use for:

- Case gallery
- Scenario comparison
- Product portfolio
- Project references

Rules:

- Use consistent image aspect ratios.
- Use 2–4 images per slide by default.
- Avoid dense galleries.
- Add short labels if needed.
- Do not mix unrelated image styles.

## Product image placement

Recommended placement:

- Right side of image-text slide.
- Centered in a card or product block.
- Near feature list.

Rules:

- Use `object-fit: contain` by default.
- Avoid cropping product images.
- Preserve proportions.
- Add product name or label if useful.
- Do not use decorative crop masks unless brand style allows it.

## Project photo placement

Recommended placement:

- Right side of image-text slide.
- Full-width visual page.
- Case card with caption.

Rules:

- Use `object-fit: cover` only when cropping is acceptable.
- Use `object-fit: contain` when full project scene must be preserved.
- Add caption for real project references.
- Mark placeholder when project permission is not confirmed.

## Icon placement

Recommended placement:

- Next to short feature text.
- Top of card.
- Left of bullet group.
- Inside process flow or capability matrix.

Rules:

- Use consistent icon size.
- Use one icon style per deck.
- Use corporate colors.
- Do not use more than 4–6 icons per slide unless using a compact matrix.
- Keep icon meaning clear.

Recommended sizes:

- Small inline icon: 18–24 px
- Card icon: 32–48 px
- Feature icon: 48–64 px

## Chart placement

Recommended placement:

- Main chart: 55–75% of slide content area.
- Key takeaway: right side or bottom.
- Legend: near chart but not overlapping.
- Units: close to axis or chart title.

Rules:

- Use corporate colors.
- Keep labels readable.
- Avoid too many series.
- Keep chart background clean.
- Do not place chart too close to footer.
- Do not invent data.

## Table placement

Recommended placement:

- Main content area below title.
- Leave enough margin around table.
- Use readable row height.
- Use corporate color for header row.

Rules:

- Avoid very large tables.
- Split large tables into multiple slides.
- Keep font size readable.
- Highlight only key cells.
- Do not use dense spreadsheet-style tables in presentation mode unless necessary.

## Map placement

Recommended placement:

- Center or right side of slide.
- Key takeaways or legend on left or bottom.
- Control panel on right only for interactive map.

Rules:

- State whether map is schematic or geographically accurate.
- Do not fetch online map tiles in MVP.
- Keep labels readable.
- Avoid excessive geographic detail.
- Use corporate colors for regions or markers.

## Screenshot and UI mockup placement

Recommended placement:

- Center large screenshot.
- Right-side screenshot with left-side explanation.
- UI mockup inside device frame only if style supports it.

Rules:

- Redact sensitive information.
- Keep screenshot readable.
- Use `object-fit: contain`.
- Add annotation callouts sparingly.
- Mark mock UI if it is not a real product screenshot.

## Interactive demo placement

Default structure:

- Title at top.
- Interactive canvas on left or center.
- Control panel on right.
- Status or explanation area below controls.
- Footer at bottom.

Recommended proportions:

- Interactive canvas: 55–65% width.
- Control panel: 30–40% width.
- Gap: 24–36 px.

Rules:

- Controls must be visible.
- Current interaction state must be obvious.
- Interaction should work offline.
- Avoid external APIs in MVP.
- Provide fallback text explanation.
- Keep interaction simple enough for live presentation.

## Slide-type placement summary

| Slide type | Logo | Main visual | Footer | Notes |
|---|---|---|---|---|
| cover | top-left or top-right | title block + background | optional | can break normal grid |
| agenda | normal logo position | section list or cards | required | keep 3–6 agenda items |
| section | simplified or normal | chapter number + title | optional | strong brand visual allowed |
| content | normal logo position | text/cards | required | most reusable layout |
| two-column | normal logo position | two panels | required | compare or parallel explanation |
| image-text | normal logo position | image + text | required | preserve image ratio |
| data | normal logo position | chart/table/KPI | required | keep labels readable |
| interactive-demo | normal logo position | canvas + controls | required | offline interaction required |
| closing | prominent logo | website/slogan/thanks | optional | brand identity page |

## Placement output format

When this reference is used, Codex should output:

### 结论

Use one of:

- 素材放置规则清晰，可以进入模板生成
- 需要补充企业母版截图确认放置规则
- 需要人工确认 Logo / footer / background placement
- 当前素材不适合进入最终交付

### 全局布局规则

### Logo 放置规则

### Header / Footer 放置规则

### 图片放置规则

### 图标 / 图表 / 地图放置规则

### 交互页放置规则

### 信息缺口

### 下一步动作

## Quality checklist

Before finishing asset placement analysis, confirm:

- Logo placement is defined.
- Header placement is defined.
- Footer placement is defined.
- Page number placement is defined.
- Main content safe area is defined.
- Image area is defined for image-text layouts.
- Chart area is defined for data layouts.
- Interactive area is defined for demo layouts.
- Decorative elements do not reduce readability.
- Images are not stretched.
- Placement rules are reusable across slides.
