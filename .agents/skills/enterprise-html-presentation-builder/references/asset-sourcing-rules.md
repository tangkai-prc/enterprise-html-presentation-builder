

# Asset Sourcing Rules

## Purpose

Define where presentation assets should come from and how Codex should decide whether an asset can be used.

This file is used when the skill analyzes or generates enterprise-style browser presentations that require logos, background images, project photos, icons, charts, screenshots, maps, or decorative visual elements.

The goal is to keep asset usage controlled, traceable, and suitable for enterprise presentation delivery.

## Core principles

### Prefer user-provided and official assets

Use assets from the following sources first:

- User-provided files
- Enterprise PPT template
- Official corporate brand guide
- Internal brand asset library
- Approved sales materials
- Approved product materials
- Approved project photos

Do not use random web images by default.

### Separate placeholder assets from final assets

When a required asset is missing, Codex should create a clear placeholder instead of silently using an unrelated image.

Placeholder examples:

- `LOGO`
- `PROJECT IMAGE PLACEHOLDER`
- `PRODUCT IMAGE PLACEHOLDER`
- `MAP PLACEHOLDER`
- CSS/SVG geometric decoration

All placeholders must be listed as information gaps.

### Track permission status

Every non-generated external asset should have a permission or license status.

Use one of:

- Confirmed
- User-provided
- Internal approved material
- Public-domain
- Open-source license to verify
- Commercial stock license to verify
- Unknown
- Not suitable for client-facing use

Do not claim an asset is safe for client-facing use unless the source and permission are known.

### Avoid network dependencies in MVP

For single-file HTML MVP:

- Do not fetch images from remote URLs at runtime.
- Do not depend on CDN-hosted images.
- Do not depend on remote fonts.
- Do not depend on remote scripts.
- Prefer CSS, SVG, and user-provided local assets.

## Asset categories

### Corporate logo

Preferred sources:

1. User-provided official logo file.
2. Corporate brand manual.
3. Enterprise PPT master or template.
4. Internal brand asset library.
5. Official corporate website, only if explicitly approved.

Preferred format:

- SVG first.
- PNG second.
- JPG should normally be avoided for logos.

Rules:

- Preserve original aspect ratio.
- Do not stretch.
- Do not recolor unless brand rules allow it.
- Do not add shadows, gradients, outlines, or effects unless present in the brand system.
- Do not manually redraw official logos unless explicitly requested.
- Use a text placeholder during MVP if the official logo is unavailable.

Output requirement when missing:

- Mark as required asset.
- Use `LOGO` placeholder.
- Ask for SVG or high-resolution PNG.

---

### Corporate background

Preferred sources:

1. Enterprise PPT template.
2. Exported representative slide images.
3. Corporate brand manual.
4. Internal visual identity assets.
5. CSS/SVG rebuild based on visible template patterns.

Use cases:

- Cover page.
- Section divider page.
- Closing page.
- Special visual pages.

Rules:

- Use background images only when visual fidelity is important.
- For normal content pages, prefer CSS/SVG decoration instead of bitmap backgrounds.
- Avoid large base64 background images in single-file HTML MVP.
- If a background image is required and large, recommend HTML plus asset folder instead of strict single-file HTML.

Output requirement when missing:

- Identify whether CSS/SVG can replace the background.
- If not, ask the user for exported background or source PPT page image.

---

### Decorative graphics

Preferred sources:

1. CSS-generated shapes.
2. Inline SVG.
3. Visible decorative patterns from the PPT template.
4. Brand manual decorative patterns.
5. User-provided graphic assets.

Typical decorative assets:

- Lines.
- Waves.
- Color blocks.
- Corner shapes.
- Circles.
- Arcs.
- Grids.
- Light gradients.
- Footer decorations.

Rules:

- Prefer CSS/SVG over bitmap images.
- Keep decoration consistent across slide types.
- Do not place decorative elements behind dense text unless opacity is low and contrast remains sufficient.
- Do not introduce a new decorative style that conflicts with the PPT template.

Output requirement:

- State whether decoration should be rebuilt with CSS/SVG or extracted as image.

---

### Product images

Preferred sources:

1. User-provided product image.
2. Official product brochure.
3. Approved sales material.
4. Internal product image library.
5. Official product webpage, only if explicitly approved.

Rules:

- Do not use unrelated stock photos as product images.
- Do not use low-resolution product images in final delivery.
- Preserve product proportions.
- Use `object-fit: contain` for product images unless a visual crop is explicitly desired.
- Add caption or product label when needed.

Output requirement when missing:

- Use `PRODUCT IMAGE PLACEHOLDER`.
- Ask user for official product image or approved brochure image.

---

### Project photos

Preferred sources:

1. User-provided project photo.
2. Internal project case material.
3. Approved customer case material.
4. Approved marketing material.

Rules:

- Do not use project photos from the web unless permission is clear.
- Do not imply a project reference if the image is only illustrative.
- Add caption when image is used as evidence.
- Mark project photos as permission-sensitive.
- Use `object-fit: cover` for scenario photos when cropping is acceptable.
- Use `object-fit: contain` when full image preservation is required.

Output requirement when missing:

- Use `PROJECT IMAGE PLACEHOLDER`.
- Ask whether real project photos are available and approved for external use.

---

### Industry scenario images

Preferred sources:

1. User-provided or internally approved images.
2. Licensed stock images.
3. AI-generated images, if allowed by project policy.
4. Public-domain images with source recorded.

Typical scenarios:

- Substation.
- Distribution grid.
- Solar farm.
- Battery energy storage system.
- Microgrid.
- Industrial park.
- Data center.
- City energy infrastructure.
- Overseas project site.

Rules:

- Treat third-party images as untrusted until license is verified.
- Do not imply the image is a real project unless confirmed.
- Mark AI-generated images as AI-generated when required by the user's delivery policy.
- Prefer neutral placeholders when permission is unclear.

Output requirement when missing:

- State whether the slide can proceed with placeholder.
- Ask for approved image source if final client-facing delivery is expected.

---

### Icons

Preferred sources:

1. Enterprise icon library.
2. Inline SVG created by Codex.
3. Open-source icon sets with compatible license.
4. AI-generated SVG icons.

Rules:

- Prefer SVG.
- Use one icon style per deck.
- Do not mix outline, filled, 3D, and gradient icon systems without a design reason.
- Keep stroke width consistent.
- Keep icon size consistent.
- Use corporate colors.
- Avoid decorative icons that do not support meaning.

Output requirement:

- Record icon source.
- Record license status if using third-party icon set.
- Prefer creating simple inline SVG icons for MVP.

---

### Charts and diagrams

Preferred sources:

1. User-provided data.
2. User-provided chart screenshot.
3. Rebuilt chart using inline SVG, CSS, or embedded JavaScript.
4. Approved business report.
5. Approved technical report.

Rules:

- Do not invent data.
- Mark placeholder data clearly.
- Use corporate colors.
- Keep labels readable.
- Prefer editable HTML/SVG charts over screenshots when data is available.
- Use screenshots only when the chart must match an original report.

Output requirement when data is missing:

- Use `DATA PLACEHOLDER`.
- Ask for source data, chart image, or permission to create illustrative dummy data.

---

### Maps

Preferred sources:

1. User-provided map image.
2. Approved internal market map.
3. Licensed map asset.
4. Simple schematic SVG map created for illustration.

Rules:

- Do not use online map tiles by default.
- Do not fetch maps from external services in single-file HTML MVP.
- For strategic or market pages, schematic maps are acceptable if clearly illustrative.
- Do not imply geographic precision if the map is schematic.

Output requirement when missing:

- Use `MAP PLACEHOLDER`.
- Ask whether the map needs geographic accuracy or only schematic communication.

---

### Screenshots and UI mockups

Preferred sources:

1. User-provided screenshots.
2. Internal product screenshots approved for presentation.
3. Mock UI generated by Codex using HTML/CSS.
4. Static SVG/HTML mockup.

Rules:

- Do not expose sensitive data in screenshots.
- Redact customer names, IP addresses, credentials, personal data, and internal URLs.
- For MVP, prefer mock UI over real screenshots if confidentiality is unclear.
- Mark mock UI clearly when needed.

Output requirement:

- Record whether screenshot is real, anonymized, or mock.
- Record confidentiality status.

## Asset inventory requirements

Every required or optional visual asset should be recorded in an asset inventory.

Use this table format:

| Asset ID | Type | Description | Source | Permission status | File path | Placement | Required |
|---|---|---|---|---|---|---|---|
| logo-primary | logo | Primary corporate logo | User provided / PPT template / brand guide | To verify | assets/logo.svg | Header or cover | Yes |
| cover-bg | background | Cover page background | PPT template / CSS / SVG | To verify | assets/cover-bg.svg | Cover page | Optional |
| footer-decoration | decoration | Footer line or wave | CSS/SVG rebuild | Internal rebuild | inline SVG/CSS | Footer | Optional |
| project-photo-01 | project photo | Project site photo | User provided | To verify | assets/project-photo-01.png | Image-text slide | Optional |

## Source priority

Use this priority order when selecting assets:

1. User-provided official asset.
2. Internal approved corporate material.
3. Enterprise PPT template asset.
4. Corporate brand guide.
5. Approved sales or technical material.
6. Licensed stock or open-source asset with verified permission.
7. AI-generated asset, if allowed.
8. Placeholder.

Do not skip directly to third-party web images when official or user-provided assets are expected.

## Placeholder policy

Use placeholders when:

- Official logo is missing.
- Product image is missing.
- Project photo is missing.
- Permission is unclear.
- Exact background is unavailable.
- Data is unavailable.

Placeholder requirements:

- Placeholder must be visibly labeled.
- Placeholder must not look like final approved material.
- Placeholder must be listed in information gaps.
- Placeholder should preserve layout dimensions.

## Single-file HTML asset policy

For strict single-file HTML delivery:

Prefer:

- CSS shapes.
- Inline SVG.
- Text placeholders.
- Small embedded SVG icons.
- Minimal embedded images only when necessary.

Avoid:

- Large base64 images.
- Many embedded photos.
- Remote image URLs.
- Remote font URLs.
- CDN-hosted icon libraries.
- Unverified third-party images.

If many real images are required, recommend:

- Reveal.js HTML plus an asset folder.
- Or a packaged zip.
- Or an explicitly approved application build when presentation interaction exceeds the Reveal.js runtime.

## Output format when using this reference

When this reference is used, Codex should output:

### 结论

Use one of:

- 素材来源清晰，可以进入模板生成
- 需要补充关键素材
- 只能使用占位素材
- 不建议使用当前素材进入客户交付

### 已确认素材

| Asset ID | Type | Source | Permission status | Placement |
|---|---|---|---|---|

### 缺失素材

| Asset ID | Type | Preferred source | Temporary placeholder | Required before final delivery |
|---|---|---|---|---|

### 素材风险

### 建议素材获取路径

### 下一步动作

## Quality checklist

Before finishing asset sourcing analysis, confirm:

- Official logo status is recorded.
- Background source is recorded.
- Decorative graphics strategy is recorded.
- Product and project image permission is recorded.
- Icons have a consistent source and style.
- Charts do not use invented data unless clearly marked.
- Maps do not rely on external services by default.
- Screenshots are checked for confidentiality.
- Placeholders are clearly marked.
- Missing assets are listed as information gaps.
