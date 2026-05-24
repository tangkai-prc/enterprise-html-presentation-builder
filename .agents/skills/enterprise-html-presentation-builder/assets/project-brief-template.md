# Project Brief Template

Use this file for user-facing presentation generation requests.

Save a copy as:

```text
inputs/<project-id>/materials/project.md
```

## Minimal Frontmatter

```yaml
---
project_id:
template_base: IBC_presentation_template_library
template_source: inputs/ibc_presentation_title
requires_project_pptx: false
language: zh
title:
subtitle:
organization:
chapters:
  - 第一章
  - 第二章
  - 第三章
output:
  filename:
---
```

## Body Content

After the frontmatter, provide slide content grouped by chapter.

```markdown
## 第一章

### Slide Title

- Key point 1
- Key point 2
- Key point 3

## 第二章

### Slide Title

- Key point 1
- Key point 2
- Key point 3
```

## Generation Rules

- `language` controls Chinese or English template selection.
- `chapters.length` controls the agenda variant.
- IBC-style final project outputs should repeat the selected agenda variant before each chapter section and highlight the chapter that follows.
- `template_source` defaults to `inputs/ibc_presentation_title` for IBC-style projects.
- A project-specific `template/template.pptx` is not required unless `requires_project_pptx: true`.
- Put project-specific layout decisions and review notes in `inputs/<project-id>/customization.md`.
- If `customization.md` is absent, use `inputs/ibc_presentation_title` as the default IBC base-template reference.
- The generated HTML should be written to `outputs/<project-id>/`.
- Do not write user-facing generated HTML to prototype folders.
