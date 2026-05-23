# Project Brief Template

Use this file for user-facing presentation generation requests.

Save a copy as:

```text
input/projects/<project-id>/brief.md
```

## Minimal Frontmatter

```yaml
---
project_id:
template_id: IBC_template
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
- The generated HTML should be written to `outputs/presentations/<project-id>/`.
- Do not write user-facing generated HTML to `outputs/prototypes/`.
