---
project_id: ibc_presentation_title
template_id: IBC_template
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
- One generated body page sample using the PPTX title-and-content layout.
- Closing page.

Only one HTML should be generated at this stage: `IBC_presentation_template_library.html`.

## Template Selection

Later project-specific generators should select the agenda layout from `language` and `chapters.length`.

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
