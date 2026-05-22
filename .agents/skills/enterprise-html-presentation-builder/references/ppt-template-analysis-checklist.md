# PPT Template Analysis Checklist

## Purpose

Analyze an enterprise PowerPoint template and extract reusable style, layout, and asset rules for browser-based HTML presentations.

This file is used by the skill before generating any HTML prototype.

The goal is not to convert PowerPoint objects one by one. The goal is to understand the template as a visual reference and convert its reusable design rules into HTML/CSS presentation patterns.

## Basic information

Record the following information first.

- Template name:
- Source file:
- Slide ratio:
- Language:
- Corporate owner:
- Intended use:
- Number of slides:
- Representative slide types:
- Whether the template contains animations:
- Whether the template contains master-slide-only elements:
- Whether the template contains embedded images:
- Whether the template contains official logo assets:

## Confirmed information and assumptions

When analyzing a template, always separate confirmed information from assumptions.

### Confirmed information

Use this section for information directly visible in the PPT template or explicitly provided by the user.

Examples:

- The template contains a cover page.
- The template contains a contents page.
- The template contains chapter divider pages.
- The template uses a corporate logo.
- The template contains a website or slogan in the closing page.

### Assumptions

Use this section for inferred information.

Examples:

- The logo should probably appear in the same position on normal content pages.
- The primary color appears to be green or blue-green.
- The bottom decoration may be rebuildable with CSS/SVG.

### Information gaps

Use this section for missing information.

Examples:

- Official logo source file is missing.
- Exact brand color values are missing.
- Official font rules are missing.
- Image licensing status is unknown.
- Final delivery format is not confirmed.

## Slide types to identify

Classify representative slides into these types.

- Cover page
- Agenda page
- Chapter divider page
- Standard content page
- Two-column content page
- Image-text page
- Data/chart page
- Interactive-demo page
- Closing page

For each identified slide type, record:

- Slide type:
- Representative slide number:
- Main purpose:
- Main visual structure:
- Title position:
- Logo position:
- Footer position:
- Page number position:
- Main content area:
- Decorative elements:
- Whether it should be rebuilt in HTML/CSS:
- Whether it should use an image background:
- Notes:

## Visual elements

Identify visible corporate visual elements.

### Logo

Record:

- Is a logo present:
- Logo text or graphic:
- Logo position:
- Logo size:
- Logo aspect ratio:
- Logo appears on which slide types:
- Is the logo available as an editable asset:
- Temporary placeholder strategy:

Rules:

- Prefer official SVG logo.
- Use PNG only if SVG is unavailable.
- Do not redraw the official logo manually unless explicitly requested.
- Preserve aspect ratio.
- Do not stretch, recolor, or add effects unless brand rules allow it.

### Header

Record:

- Header exists:
- Header height:
- Header text:
- Header line or decoration:
- Header color:
- Header appears on which slide types:

Rules:

- Header should not compete with slide title.
- Header layout should be consistent across normal content slides.
- If header is decorative only, consider rebuilding it with CSS/SVG.

### Footer

Record:

- Footer exists:
- Footer text:
- Website:
- Slogan:
- Confidentiality label:
- Page number:
- Footer line or decoration:
- Footer background:
- Footer appears on which slide types:

Rules:

- Footer should be smaller than body text.
- Footer should be consistent across normal slides.
- Page number should be placed consistently.
- Website and slogan should use exact official text when available.

### Background and decoration

Record:

- Background color:
- Background gradient:
- Background image:
- Decorative shapes:
- Lines:
- Waves:
- Color blocks:
- Corner elements:
- Whether decoration is consistent:
- Whether decoration can be rebuilt with CSS/SVG:
- Whether decoration requires image extraction:

Rules:

- Prefer CSS/SVG for simple lines, waves, color blocks, and geometric shapes.
- Use image backgrounds only when the visual element is too complex to rebuild.
- Avoid large bitmap backgrounds for normal content pages unless visual fidelity is required.

## Typography

Identify text hierarchy.

### Title

Record:

- Title font:
- Title size:
- Title weight:
- Title color:
- Title position:
- Title alignment:
- Title line height:

### Subtitle

Record:

- Subtitle font:
- Subtitle size:
- Subtitle weight:
- Subtitle color:
- Subtitle position:
- Subtitle alignment:

### Body text

Record:

- Body font:
- Body size:
- Body color:
- Bullet style:
- Line spacing:
- Paragraph spacing:

### English text

Record:

- English font:
- English size:
- English color:
- English capitalization style:

### Chinese text

Record:

- Chinese font:
- Chinese size:
- Chinese color:
- Chinese punctuation style:

Rules:

- If exact fonts are unknown, use system fallback fonts.
- For browser presentations, define font families in CSS variables.
- Do not rely on proprietary fonts unless the user confirms availability.
- Use readable font sizes for live presentation.

## Color tokens

Extract or estimate these color tokens.

Use exact values when available. Otherwise mark as approximate and requiring verification.

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