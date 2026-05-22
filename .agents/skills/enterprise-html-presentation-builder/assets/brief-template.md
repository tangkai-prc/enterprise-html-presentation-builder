

# Presentation Brief Template

## Purpose

Collect the minimum information needed to generate or analyze an enterprise-style browser presentation.

This template should be used before generating any HTML prototype, reveal.js project, or interactive demo.

The goal is to make the user's requirements explicit, prevent uncontrolled assumptions, and keep the presentation workflow reusable.

## Project information

- Project name:
- Presentation title:
- Subtitle:
- Organization:
- Date:
- Version:
- Owner:
- Reviewer:

## Presentation purpose

Choose one or more:

- Technical exchange
- Customer presentation
- Internal review
- Market development
- Solution introduction
- Product introduction
- Training material
- Tender support
- Executive briefing
- Interactive demo
- Other:

Describe the main purpose:

- Purpose:

## Target audience

Choose one or more:

- Customer executives
- Customer technical team
- Utility / grid company
- EPC partner
- Channel partner
- Internal sales team
- Internal technical team
- Management team
- Government / regulator
- Investor / developer
- Other:

Audience notes:

- Technical depth expected:
- Business depth expected:
- Language preference:
- Region / country:

## Delivery format

Choose the target output:

- Single-file HTML
- HTML plus asset folder
- reveal.js project
- React/Vite project
- PDF export
- Screenshot-based PPTX fallback
- Native PPTX is required
- Not confirmed

Default for MVP:

- Single-file HTML
- Offline browser playback
- No external CDN
- No dependency installation

## Presentation scale

- Expected slide count:
- Expected presentation duration:
- Number of chapters:
- Need agenda page: Yes / No / Not confirmed
- Need closing page: Yes / No / Not confirmed
- Need speaker notes: Yes / No / Not confirmed

## Source materials

List available source materials.

| Material | Available | File path / source | Notes |
|---|---|---|---|
| Enterprise PPT template | Yes / No |  |  |
| Exported slide images | Yes / No |  |  |
| Corporate logo | Yes / No |  | SVG preferred |
| Brand color guide | Yes / No |  |  |
| Font guide | Yes / No |  |  |
| Product images | Yes / No |  |  |
| Project photos | Yes / No |  | Permission required |
| Charts or data | Yes / No |  |  |
| Maps | Yes / No |  |  |
| Screenshots | Yes / No |  | Check confidentiality |
| Existing written content | Yes / No |  |  |

## Corporate style requirements

### Brand identity

- Corporate name:
- Logo usage:
- Website:
- Slogan:
- Confidentiality label:

### Color requirements

Use official values when available.

```css
:root {
  --brand-primary: ;
  --brand-secondary: ;
  --brand-accent: ;
  --brand-bg: ;
  --brand-surface: ;
  --brand-text: ;
  --brand-muted: ;
  --brand-line: ;
}
```

Color notes:

- Exact official colors available: Yes / No / Not confirmed
- Colors extracted from PPT only: Yes / No / Not confirmed
- Colors requiring verification:

### Typography requirements

- Chinese font:
- English font:
- Title style:
- Body style:
- Footer style:
- Proprietary fonts required: Yes / No / Not confirmed

Font fallback policy:

- Use system fonts by default.
- Do not require proprietary fonts unless confirmed.

## Layout requirements

Required slide types:

| Slide type | Required | Notes |
|---|---|---|
| cover | Yes / No |  |
| agenda | Yes / No |  |
| section | Yes / No |  |
| content | Yes / No |  |
| two-column | Yes / No |  |
| image-text | Yes / No |  |
| data | Yes / No |  |
| interactive-demo | Yes / No |  |
| closing | Yes / No |  |

Layout notes:

- Logo position:
- Header style:
- Footer style:
- Page number style:
- Preferred content layout:
- Preferred image layout:

## Content outline

Use this structure when the presentation content is not yet finalized.

### Cover

- Title:
- Subtitle:
- Organization:
- Date:

### Agenda

1.
2.
3.
4.

### Chapters

| Chapter | Title | Purpose | Notes |
|---|---|---|---|
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |
| 4 |  |  |  |

### Key messages

- Key message 1:
- Key message 2:
- Key message 3:

### Closing

- Closing statement:
- Website:
- Contact information:
- Slogan:

## Interactive demo requirement

Use this section only when the user wants AI-generated frontend interaction.

- Interactive demo required: Yes / No / Not confirmed
- Demo topic:
- Demo purpose:
- User actions:
- Inputs or controls:
- Visual elements:
- Data needed:
- Offline requirement:
- Fallback static explanation:

Common demo types:

- Source-grid-load-storage energy flow
- Microgrid topology
- Battery dispatch simulation
- Market map
- EMS dashboard mockup
- Scenario selector
- Payback calculator
- Product architecture explorer

## Asset requirements

Use the asset sourcing and placement rules when filling this section.

| Asset ID | Type | Required | Preferred source | Permission status | Placement | Placeholder allowed |
|---|---|---|---|---|---|---|
| logo-primary | logo | Yes | Official logo / PPT template | To verify | Header / cover | Yes for MVP |
| cover-bg | background | No | PPT template / CSS / SVG | To verify | Cover | Yes |
| footer-decoration | decoration | No | CSS / SVG rebuild | Internal rebuild | Footer | Yes |
| project-photo-01 | project photo | No | User-provided | To verify | Image-text slide | Yes |
| chart-data-01 | data/chart | No | User-provided data | To verify | Data slide | Yes |

## Constraints

### Technical constraints

- Must work offline: Yes / No / Not confirmed
- Must be single-file HTML: Yes / No / Not confirmed
- Can use external CDN: Yes / No / Not confirmed
- Can install dependencies: Yes / No / Not confirmed
- Can use reveal.js: Yes / No / Not confirmed
- Can use React/Vite: Yes / No / Not confirmed

### Delivery constraints

- Client-facing use: Yes / No / Not confirmed
- Internal-only use: Yes / No / Not confirmed
- Confidentiality requirement:
- Brand approval required: Yes / No / Not confirmed
- Legal review required: Yes / No / Not confirmed

### Environment constraints

- Target browser:
- Target OS:
- Presentation device:
- Internet availability:
- Screen ratio:
- Need PDF backup: Yes / No / Not confirmed

## Information gaps

List missing information before generating final deliverables.

| Gap | Impact | Required before MVP | Required before final delivery |
|---|---|---|---|
| Official logo file | Brand accuracy | No | Yes |
| Exact brand colors | Style accuracy | No | Yes |
| Font rules | Style accuracy | No | Maybe |
| Image permissions | Delivery risk | No | Yes |
| Final slide count | Scope control | Yes | Yes |
| Interactive data | Demo accuracy | No | Yes if demo included |

## Recommended next action

Choose one:

- Analyze PPT template first
- Extract style tokens first
- Define layout taxonomy first
- Define asset rules first
- Generate single-file HTML prototype
- Add interactive demo page
- Switch to reveal.js project mode
- Request missing materials before proceeding

## Output expectation

When this brief is used, Codex should output:

### 结论

### 已确认需求

### 信息缺口

### 推荐交付模式

### 页面结构建议

### 素材需求

### 下一步动作

## Quality checklist

Before using the brief to generate an output, confirm:

- Delivery format is clear.
- Audience is clear.
- Corporate style input is identified.
- Required slide types are selected.
- Asset availability is recorded.
- Missing assets are listed.
- Interactive demo requirement is explicit.
- Offline and dependency constraints are clear.
- No final HTML is generated before the user requests it.