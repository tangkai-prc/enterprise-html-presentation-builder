# IBC Presentation Title Project

This folder contains the IBC/NARI project inputs and development context.

## Structure

```text
template/
  IBC_template.pptx

materials/
  IBC_presentation_title.md
  brief.md
  assets/
  data/

analysis.md

development/
  analysis-data/
  prototype/
  scripts/
  extracted-media/
  previews/

baseline/
  IBC_template/
```

## Folder Roles

- `template/IBC_template.pptx`: source PPTX template from the user.
- `materials/IBC_presentation_title.md`: primary project brief and user-facing generation settings.
- `materials/brief.md`: compatibility brief kept for older local scripts.
- `materials/assets/`: user-provided project images, icons, charts, or other visual assets.
- `materials/data/`: user-provided structured data.
- `analysis.md`: main project analysis document.
- `development/analysis-data/`: extracted layout data and supporting analysis files.
- `development/prototype/`: HTML template prototype and prototype assets.
- `development/scripts/`: local project generation scripts.
- `development/extracted-media/`: media extracted from the PPTX.
- `development/previews/`: rendered screenshots and comparison previews.
- `baseline/IBC_template/`: reviewed local baseline for comparison and rollback.

The current development stage produces one template-library HTML in `outputs/ibc_presentation_title/`.

## Current Generator

Generate the IBC presentation template library:

```bash
node inputs/ibc_presentation_title/development/scripts/generate-core-template-library.mjs
```

The generator currently produces one HTML file:

```text
outputs/ibc_presentation_title/IBC_presentation_template_library.html
```

Current library contents:

- Cover page.
- Chinese agenda templates for 2, 3, 4, and 5 chapters.
- English agenda templates for 2, 3, 4, and 5 chapters.
- One no-subtitle body-page sample based on `slideLayout14.xml` / `3_小节`.
- Seven subtitle body-page samples for 3, 4, 5, 6, 7, 8, and 9 subtitle tabs based on `slideLayout16.xml` / `10_小节`.
- Closing page.
- Browser controls with fullscreen, previous/next, slide counter, and a larger semi-transparent left-side slide preview navigator that supports mouse-hover slide switching outside fullscreen mode. The preview navigator can be collapsed with a small top-left toggle.
- Agenda chapter numbers and chapter titles are clickable links. Number and title links for the same chapter highlight as one group, and generated chapter content should use anchors such as `#chapter-1`, `#chapter-2`, and so on.
- Subtitle tabs default to subtitle 1 and support hover/focus/click active-state switching during HTML review. Subtitle 1.2 through 1.9 route automatically to the smallest preview page that can display the selected tab unless a real semantic target already exists.
- For final project HTML, generate real jump targets: chapter slides use `id="chapter-<n>"`, subtitle slides use `id="chapter-<n>-subtitle-<m>"`, and the deck controller switches slides internally without page reload.

Project-specific HTML should be derived from this template library later. At this stage, do not generate separate project HTML files.
