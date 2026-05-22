

# Layout Taxonomy

## Purpose

Define the reusable slide layout types for enterprise-style browser presentations.

This file is used by the skill to decide which HTML/CSS layout should be used for each slide.

The goal is not to copy PowerPoint objects one by one. The goal is to map enterprise PPT visual patterns into stable browser presentation layouts.

## General layout assumptions

Default slide format:

- 16:9 aspect ratio
- Logical canvas: 1280 x 720 px
- Responsive scaling in browser
- Consistent header, content area, and footer
- Corporate logo placement should be consistent
- Footer and page number should be consistent
- Decorative elements should not interfere with readability

## Layout types

### cover

Purpose:

Opening page for the presentation.

Typical use:

- Project introduction
- Company introduction
- Technical exchange title page
- Customer meeting opening page

Required elements:

- Corporate logo
- Main title
- Subtitle
- Organization name
- Date
- Optional background decoration

Recommended structure:

- Logo: top-left or top-right
- Main title: center-left, center, or lower-left
- Subtitle/date: below title
- Decorative element: right side, bottom-right, or background layer
- Footer: optional

Do not use for:

- Dense body text
- Data tables
- Detailed diagrams

---

### agenda

Purpose:

Show the presentation structure.

Typical use:

- Contents page
- Table of contents
- Meeting agenda
- Section overview

Required elements:

- Page title
- Section list
- Section numbers

Recommended structure:

- Title: top-left or center-top
- Agenda items: vertical list, 2x2 grid, or numbered cards
- Section numbers: visually emphasized
- Logo: consistent with normal slides
- Footer/page number: consistent

Do not use for:

- Long explanations
- Complex charts
- Detailed project data

---

### section

Purpose:

Chapter divider page.

Typical use:

- Start of Chapter 1
- Major topic transition
- Business section divider
- Technical section divider

Required elements:

- Chapter number
- Chapter title
- Optional subtitle
- Strong brand visual element

Recommended structure:

- Chapter number: large and visually dominant
- Chapter title: center-left or center
- Background: brand color, light gradient, or decorative shape
- Logo: consistent, but may be simplified
- Footer: optional depending on corporate style

Do not use for:

- Detailed text
- Tables
- Multi-column content

---

### content

Purpose:

Standard content page.

Typical use:

- Main explanation slide
- Concept description
- Business analysis
- Technical explanation
- Summary of key points

Required elements:

- Slide title
- Main content area
- Footer
- Page number
- Optional logo

Recommended structure:

- Title: top-left
- Body: below title
- Content area: single column, bullets, cards, or short paragraphs
- Footer: bottom area
- Logo: top-right or fixed corporate location

Do not use for:

- Full-page images
- Complex dashboards
- Interactive demos

---

### two-column

Purpose:

Show comparison or combine two related content blocks.

Typical use:

- Before vs after
- Problem vs solution
- Current state vs target state
- Business value vs technical capability
- Text plus key points

Required elements:

- Slide title
- Left panel
- Right panel
- Footer/page number

Recommended structure:

- Title: top-left
- Left column: 45–50% width
- Right column: 45–50% width
- Column gap: consistent
- Use cards or panels for separation

Do not use for:

- More than two major groups
- Very dense text
- Complex multi-series charts

---

### image-text

Purpose:

Combine visual material and explanatory text.

Typical use:

- Project photo with explanation
- Product image with feature list
- Scenario image with key messages
- Architecture image with commentary

Required elements:

- Slide title
- Image area
- Text area
- Optional caption
- Footer/page number

Recommended structure:

- Text left, image right by default
- Image right, text left for product/scenario explanation
- Image full-width with text overlay only when contrast is controlled
- Caption below image when image is evidence or project material

Image rules:

- Preserve aspect ratio
- Use `object-fit: cover` for visual photos
- Use `object-fit: contain` for diagrams, logos, screenshots, or technical drawings
- Do not stretch images
- Do not place text over busy images unless a contrast layer is added

Do not use for:

- Data-heavy charts
- Multi-image galleries
- Complex interaction

---

### data

Purpose:

Show quantitative information.

Typical use:

- KPI page
- Market size page
- Load curve page
- Energy flow statistics
- Financial or technical comparison
- Table or chart page

Required elements:

- Slide title
- Chart, table, or metric cards
- Key takeaway text
- Footer/page number

Recommended structure:

- Chart/table area: 55–75% of main content area
- Key takeaway: right side or bottom
- Metric cards: 2–4 cards per row
- Legend: close to chart, not overlapping
- Units: clearly shown

Rules:

- Use corporate colors
- Avoid too many chart series
- Keep labels readable from presentation distance
- Do not overload one slide with too many numbers

Do not use for:

- General narrative pages
- Full-page project photos
- Chapter dividers

---

### interactive-demo

Purpose:

Host AI-generated frontend interaction inside the presentation.

Typical use:

- Microgrid topology interaction
- Source-grid-load-storage energy flow
- Battery dispatch simulation
- Market map interaction
- EMS interface mockup
- Scenario selector
- Cost or payback calculator

Required elements:

- Slide title
- Interactive canvas
- Control panel
- Explanation or status panel
- Footer/page number

Recommended structure:

- Title: top-left
- Interactive canvas: left or center
- Control panel: right side
- Status/explanation: below controls or bottom of canvas
- Keep controls visible and obvious

Rules:

- Must work offline in MVP
- Avoid external APIs by default
- Use embedded JavaScript
- Use SVG/CSS/Canvas where possible
- Provide fallback text explanation
- Keep interaction simple enough for live presentation

Do not use for:

- Static content that does not need interaction
- High-risk live demos depending on unstable network services

---

### closing

Purpose:

End the presentation.

Typical use:

- Thank you page
- Contact page
- Corporate slogan page
- Website and organization identity page

Required elements:

- Corporate logo
- Website or contact information
- Slogan or closing statement
- Optional thank-you message

Recommended structure:

- Logo: prominent but not oversized
- Website: bottom or center-lower area
- Slogan: near website or main identity area
- Background: brand color, clean white, or corporate decorative background

Do not use for:

- New technical content
- Long explanations
- Detailed tables

## Layout selection rules

Use `cover` when the slide introduces the whole presentation.

Use `agenda` when the slide lists sections or meeting structure.

Use `section` when the slide starts a new chapter.

Use `content` for standard explanation pages.

Use `two-column` when the slide compares two sides or needs two parallel content blocks.

Use `image-text` when a photo, screenshot, product image, or scenario visual is central.

Use `data` when the slide is mainly about numbers, charts, tables, or metrics.

Use `interactive-demo` when user interaction is part of the presentation.

Use `closing` for the final page.

## Output requirements for analysis

When analyzing a PPT template, classify each representative slide into one of the layout types above.

For each layout type, record:

- Slide type
- Main visual pattern
- Logo position
- Header/title position
- Footer/page number position
- Content region
- Image region, if any
- Decorative elements
- Whether it should be rebuilt in HTML/CSS or used as image background

## Quality checklist

- Layout type is clear.
- Layout is reusable.
- Layout does not depend on one specific slide only.
- Logo placement is consistent.
- Footer placement is consistent.
- Content safe area is defined.
- Image region is defined when needed.
- Layout can be implemented with HTML/CSS.