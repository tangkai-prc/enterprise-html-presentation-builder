---
project_id: ibc_presentation_title
template_id: IBC_template
template_base: IBC_presentation_template_library
template_source: inputs/ibc_presentation_title
template_role: base_template_library
requires_project_pptx: false
language: en
title: IBC Presentation Title
subtitle:
organization: State Grid Electric Power Research Institute / NARI Group Corporation
chapters:
  - Chapter 1
  - Chapter 2
  - Chapter 3
  - Chapter 4
output:
  filename: IBC_presentation_template_library.html
---

# IBC Presentation Title

## Project Goal

Build a reusable browser-based HTML presentation from the IBC PowerPoint template.

Current scope is the reusable IBC presentation template library:

- Cover page.
- Chinese agenda templates for 2, 3, 4, and 5 chapters.
- English agenda templates for 2, 3, 4, and 5 chapters.
- One no-subtitle body page sample.
- Seven subtitle body page samples covering 3 through 9 subtitle tabs.
- Closing page.

Only one HTML should be generated at this stage: `IBC_presentation_template_library.html`.

The template library includes browser playback controls: previous/next, fullscreen with `F`, slide counter, and a semi-transparent left-side preview navigator for manual review. Outside fullscreen mode, hovering a preview item switches to that slide, and a small top-left toggle can collapse or restore the preview navigator; fullscreen mode hides it.

Agenda chapter numbers and chapter titles are clickable links. Number and title links for the same chapter highlight as one group, and chapter content slides should use anchors such as `#chapter-1`, `#chapter-2`, and so on.

Final project output should preserve agenda checkpoint pages before each chapter. A project generator should copy the selected agenda layout once per chapter: the agenda page before Chapter 1 highlights Chapter 1, the agenda page before Chapter 2 highlights Chapter 2, and so on.

Subtitle tabs default to subtitle 1 and support hover, focus, and click active-state switching during HTML review. Subtitle 1.2 through 1.9 route automatically to the smallest preview page that can display the selected tab unless a real semantic target already exists.

## Actual Jump Rules

Final project HTML should use semantic slide targets, not only the template-library preview fallback:

- Agenda links target `#chapter-<chapter-number>`.
- Final project output repeats the selected agenda layout before each chapter section.
- Each repeated agenda page uses `data-chapter="<current-chapter-number>"`.
- The active agenda number/title omit the inactive style; all non-active agenda items use the inactive style.
- Mouse hover and keyboard focus on an agenda chapter pair temporarily override the active chapter highlight. Only the hovered/focused chapter pair should be green; all other pairs should be inactive grey until hover/focus leaves.
- The first slide of each chapter uses `id="chapter-<chapter-number>"` and `data-chapter="<chapter-number>"`.
- Subtitle links target `#chapter-<chapter-number>-subtitle-<subtitle-number>`.
- Each subtitle content slide uses `id="chapter-<chapter-number>-subtitle-<subtitle-number>"`, `data-chapter="<chapter-number>"`, and `data-active-subtitle-index="<subtitle-number>"`.
- Clicking an agenda item or subtitle tab switches the current slide inside the single-file HTML deck. It must not reload the page or rely on native document scrolling.
- Agenda highlight follows the active slide's `data-chapter`.
- Subtitle highlight follows the active slide's `data-active-subtitle-index`; if absent, subtitle 1 is active.
- The review fallback that routes `subtitle 1.2` through `subtitle 1.9` to count-preview pages is only for `IBC_presentation_template_library.html`.

## Template Selection

Later project-specific generators should select the agenda layout from `language` and `chapters.length`, then repeat that selected layout once per chapter checkpoint.

| Language | Chapter Count | Selected Layout |
| --- | ---: | --- |
| `zh` | 2 | `agenda-zh-2-layout2` |
| `zh` | 3 | `agenda-zh-3-layout2` |
| `zh` | 4 | `agenda-zh-4-layout2` |
| `zh` | 5 | `agenda-zh-5-layout2` |
| `en` | 2 | `agenda-en-2-layout3` |
| `en` | 3 | `agenda-en-3-layout3` |
| `en` | 4 | `agenda-en-4-layout3` |
| `en` | 5 | `agenda-en-5-layout3` |

The current template library keeps all of these variants instead of selecting only one.

The example project frontmatter would select:

```text
agenda-en-4-layout3
```

## Locked Pages

### Cover

- Title: `IBC Presentation Title`
- Organization: `State Grid Electric Power Research Institute / NARI Group Corporation`
- Date: generated automatically at runtime.
- Template background and logo: reused from the IBC template prototype.

### Agenda

- Language: English.
- Chapter count: 4.
- Non-active chapters use grey text.
- Agenda page has no footer page number.

### Closing

- Slogan: `Leading the Innovation for a better Grid`
- Website: `http://www.narigroup.com`
- Background and energy graphics: reused from the IBC template prototype.

## Body Page Rules

- Generate only one body page sample for the current development step.
- Use `ppt/slideLayouts/slideLayout5.xml` / `3_标题和内容` as the first body layout.
- Use the first chapter name as the top page title in project output.
- Use the first `###` heading as the body title.
- Use bullet list items as the body copy.
- Use the master body placeholder as the single content area.
- Do not include a chapter navigation band or a right-side visual placeholder on this layout.
- Body pages include footer page numbers.

## Chapter Content

## Chapter 1

### Slide Title

- Key point 1
- Key point 2
- Key point 3

## Chapter 2

### Slide Title

- Key point 1
- Key point 2
- Key point 3

## Chapter 3

### Slide Title

- Key point 1
- Key point 2
- Key point 3

## Chapter 4

### Slide Title

- Key point 1
- Key point 2
- Key point 3

## Generation Command

Run from the repository root:

```bash
node inputs/ibc_presentation_title/development/scripts/generate-core-template-library.mjs
```

Output:

```text
outputs/ibc_presentation_title/IBC_presentation_template_library.html
```

## Next Development Steps

- Continue reading additional IBC PPTX body layouts.
- Add image/data binding only after selecting a body layout that supports images or data.
- Keep the core template library separate from generated project output.
