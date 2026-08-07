

<!--
规则作用：
本文件用于建立企业浏览器演示项目的素材清单模板，记录 Logo、背景、装饰元素、产品图、项目照片、图标、图表、地图、截图和交互演示所需资产的来源、权限、文件路径、放置位置和交付状态。
它不是最终演示内容，而是 Codex 在分析 PPT 模板、生成 Reveal.js 单文件 HTML 或交互演示前必须维护的资产登记表。
Codex 使用本文件时，应优先使用用户提供或企业官方素材，不得默认使用随机网络图片；任何缺失、未授权或仅作为占位的素材，都必须明确标记为信息缺口或交付风险。
-->

# Asset Inventory Template

## Purpose

Track all visual and data assets required for an enterprise-style browser presentation.

This template is used to keep asset sourcing, permission status, placement, and delivery readiness explicit before Codex generates Reveal.js HTML slides or interactive demo pages.

The goal is to prevent uncontrolled use of images, logos, icons, charts, screenshots, and other visual materials.

## Usage rules

Use this template when:

- An enterprise PPT template is being analyzed.
- A single-file Reveal.js HTML prototype is being generated.
- A Reveal.js HTML plus asset-folder project is being generated.
- A browser-based interactive demo is being added.
- The presentation uses corporate logo, images, icons, charts, maps, screenshots, or decorative visuals.

Do not skip the asset inventory for client-facing or externally shared materials.

## Inventory status

- Project name:
- Presentation title:
- Source PPT template:
- Inventory owner:
- Last updated:
- Delivery mode: single-file Reveal.js HTML / Reveal.js HTML + assets folder / PDF / PPTX fallback
- Client-facing use: Yes / No / Not confirmed
- Offline requirement: Yes / No / Not confirmed

## Asset status definitions

Use these status values consistently.

### Source status

- User-provided
- PPT template extracted
- Internal approved material
- Brand guide
- Official website, approved
- Open-source, license to verify
- Commercial stock, license to verify
- AI-generated
- Placeholder
- Missing
- Unknown

### Permission status

- Confirmed
- User-provided
- Internal approved
- License to verify
- Confidentiality to verify
- Unknown
- Not suitable for client-facing use

### Delivery status

- Ready for MVP
- Ready for final delivery
- Placeholder only
- Needs replacement
- Needs permission check
- Needs redaction
- Missing

## Master asset table

| Asset ID | Type | Description | Source status | Permission status | File path / representation | Placement | Required | Delivery status | Notes |
|---|---|---|---|---|---|---|---|---|---|
| logo-primary | logo | Primary corporate logo | Missing | Unknown | text placeholder `LOGO` | Header / cover / closing | Yes | Placeholder only | Replace with SVG or high-resolution PNG before final delivery |
| cover-bg | background | Cover page background or decoration | Placeholder | Unknown | CSS/SVG placeholder | Cover background | No | Ready for MVP | Use PPT-extracted visual if fidelity is required |
| section-bg | background | Chapter divider background | Placeholder | Unknown | CSS/SVG placeholder | Section page background | No | Ready for MVP | Can be rebuilt with CSS/SVG |
| footer-decoration | decoration | Footer line, wave, or corporate decorative element | Placeholder | Unknown | CSS/SVG placeholder | Footer area | No | Ready for MVP | Keep subtle and consistent |
| project-photo-01 | project photo | Project site or case image | Missing | Unknown | `PROJECT IMAGE PLACEHOLDER` | Image-text slide | No | Needs replacement | Use only approved project photos |
| product-image-01 | product image | Product or solution image | Missing | Unknown | `PRODUCT IMAGE PLACEHOLDER` | Product or image-text slide | No | Needs replacement | Use official product material |
| icon-grid | icon | Grid or power system icon | Placeholder | Internal generated | inline SVG placeholder | Cards / diagrams | No | Ready for MVP | Keep icon style consistent |
| chart-data-01 | data/chart | Chart or KPI data | Missing | Unknown | `DATA PLACEHOLDER` | Data slide | No | Needs replacement | Do not invent data |
| map-01 | map | Market or project region map | Missing | Unknown | `MAP PLACEHOLDER` | Map or data slide | No | Needs replacement | Confirm if schematic map is acceptable |
| screenshot-01 | screenshot | Product UI or EMS screenshot | Missing | Unknown | `SCREENSHOT PLACEHOLDER` | Screenshot or interactive-demo slide | No | Needs replacement | Check confidentiality and redact if needed |

## Asset categories

### Logo assets

Use this section to track corporate logo files.

| Asset ID | Format | Source | File path | Permission status | Placement | Notes |
|---|---|---|---|---|---|---|
| logo-primary | SVG / PNG / placeholder |  |  |  | top-right / cover / closing |  |
| logo-white | SVG / PNG / placeholder |  |  |  | dark background slides |  |
| logo-horizontal | SVG / PNG / placeholder |  |  |  | cover or closing |  |

Rules:

- Prefer SVG.
- Preserve aspect ratio.
- Do not stretch, crop, or recolor unless approved.
- Use placeholder only for MVP.

### Background and decoration assets

| Asset ID | Type | Source | File path / representation | Placement | Delivery status | Notes |
|---|---|---|---|---|---|---|
| cover-bg | background |  | CSS / SVG / image | cover |  |  |
| section-bg | background |  | CSS / SVG / image | section |  |  |
| footer-decoration | decoration |  | CSS / SVG / image | footer |  |  |
| corner-decoration | decoration |  | CSS / SVG / image | margins / corners |  |  |

Rules:

- Prefer CSS/SVG for MVP.
- Use image backgrounds only when visual fidelity is required.
- Avoid large base64 images in strict single-file HTML.

### Product and project images

| Asset ID | Type | Source | File path | Permission status | Placement | Required | Delivery status | Notes |
|---|---|---|---|---|---|---|---|---|
| product-image-01 | product image |  |  |  | image-text / product slide | No |  |  |
| project-photo-01 | project photo |  |  |  | image-text / case slide | No |  |  |
| scenario-image-01 | scenario image |  |  |  | cover / image-text / full visual | No |  |  |

Rules:

- Do not use random web images.
- Do not imply a real project reference unless confirmed.
- Add captions for evidence or case images.
- Mark all unapproved images as not suitable for final client-facing use.

### Icons

| Asset ID | Icon meaning | Source | Format | Permission status | Placement | Style notes |
|---|---|---|---|---|---|---|
| icon-grid | Grid | inline generated / icon library | SVG |  | cards / diagrams | outline / filled / line |
| icon-storage | Storage | inline generated / icon library | SVG |  | cards / diagrams | outline / filled / line |
| icon-solar | Solar | inline generated / icon library | SVG |  | cards / diagrams | outline / filled / line |
| icon-load | Load | inline generated / icon library | SVG |  | cards / diagrams | outline / filled / line |
| icon-ems | EMS | inline generated / icon library | SVG |  | cards / diagrams | outline / filled / line |

Rules:

- Use one icon style per deck.
- Prefer inline SVG.
- Record license if using third-party icon sets.
- Keep icon size and stroke width consistent.

### Charts, data, and tables

| Asset ID | Data type | Source | File path / representation | Permission status | Placement | Delivery status | Notes |
|---|---|---|---|---|---|---|---|
| chart-data-01 | KPI / chart / table |  |  |  | data slide |  |  |
| load-curve-01 | time-series |  |  |  | data slide / demo |  |  |
| cost-table-01 | table |  |  |  | data slide |  |  |

Rules:

- Do not invent data unless explicitly marked as illustrative dummy data.
- Keep source and date of data when available.
- Use corporate colors for visual charts.
- Keep labels readable.

### Maps

| Asset ID | Map type | Source | File path / representation | Permission status | Placement | Delivery status | Notes |
|---|---|---|---|---|---|---|---|
| map-01 | schematic / geographic |  |  |  | map slide / market slide |  |  |

Rules:

- Do not fetch online map tiles in MVP.
- State whether map is schematic or geographically accurate.
- Use schematic SVG if exact geography is not required.

### Screenshots and UI mockups

| Asset ID | Type | Source | File path / representation | Confidentiality status | Placement | Delivery status | Notes |
|---|---|---|---|---|---|---|---|
| screenshot-01 | real screenshot / mock UI |  |  |  | screenshot slide / demo slide |  |  |
| ems-mockup-01 | mock UI | generated | HTML/CSS/SVG | non-confidential | interactive-demo |  |  |

Rules:

- Redact sensitive information.
- Do not expose credentials, IP addresses, customer names, internal URLs, or personal data.
- Prefer mock UI when confidentiality is unclear.

## Placeholder register

List all placeholders that remain in the current version.

| Placeholder | Related asset ID | Reason | Required before MVP | Required before final delivery |
|---|---|---|---|---|
| LOGO | logo-primary | Official logo not provided | No | Yes |
| PROJECT IMAGE PLACEHOLDER | project-photo-01 | Approved project image not provided | No | Yes if project slide is used |
| PRODUCT IMAGE PLACEHOLDER | product-image-01 | Product image not provided | No | Yes if product slide is used |
| DATA PLACEHOLDER | chart-data-01 | Source data not provided | No | Yes if data slide is used |
| MAP PLACEHOLDER | map-01 | Map asset not provided | No | Yes if map slide is used |
| SCREENSHOT PLACEHOLDER | screenshot-01 | Screenshot not provided | No | Yes if screenshot slide is used |

## Single-file HTML embedding decision

Use this decision table before embedding assets into a single-file HTML output.

| Asset type | Embed in strict single-file HTML | Preferred method | Notes |
|---|---|---|---|
| Logo SVG | Yes | inline SVG or base64 | Best option if small |
| Logo PNG | Maybe | base64 only if small | Prefer SVG |
| Background image | Usually no | CSS/SVG or external asset folder | Avoid large base64 |
| Decorative SVG | Yes | inline SVG/CSS | Recommended |
| Product photo | Usually no | asset folder or compressed base64 only if necessary | Check file size |
| Project photo | Usually no | asset folder or compressed base64 only if necessary | Check permission |
| Icons | Yes | inline SVG | Recommended |
| Chart data | Yes | embedded JSON or SVG | Do not invent data |
| Screenshot | Usually no | asset folder or compressed base64 only if necessary | Check confidentiality |

## Risk register

| Risk | Asset ID | Severity | Reason | Mitigation |
|---|---|---|---|---|
| Logo is only a placeholder | logo-primary | Medium | Brand accuracy not final | Request official SVG/PNG |
| Image permission unknown | project-photo-01 | High | Client-facing delivery risk | Use placeholder or approved image |
| Data not provided | chart-data-01 | Medium | Risk of invented figures | Request source data or mark as illustrative |
| Screenshot may contain sensitive information | screenshot-01 | High | Confidentiality risk | Redact or use mock UI |
| Large images break single-file delivery | cover-bg / photos | Medium | File size risk | Use asset folder or SVG rebuild |

## Output requirements

When this template is used, Codex should output:

### 结论

Use one of:

- 资产清单已满足 MVP
- 资产清单仅适合占位原型
- 关键资产缺失，不能进入最终交付
- 需要先补充授权或脱敏信息

### 已确认资产

### 占位资产

### 缺失资产

### 权限或保密风险

### 单文件 HTML 嵌入建议

### 下一步动作

## Quality checklist

Before generating final presentation output, confirm:

- Logo status is documented.
- Background and decoration strategy is documented.
- Product and project images have source status.
- Permission status is recorded.
- Screenshots are checked for confidentiality.
- Chart data is not invented.
- Maps are not fetched from external services in MVP.
- Placeholders are clearly listed.
- Single-file embedding decision is documented.
- Final delivery risks are listed.
