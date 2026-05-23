# Application Layer Rules

## Purpose

Separate template/prototype work from user-facing presentation generation.

`outputs/prototypes/` is only for template analysis, coordinate review, and layout QA. It should not be treated as the final destination for a user's presentation.

## Directory Roles

Use one `inputs/` folder per real presentation project:

- `inputs/<project-id>/template/`: user-provided PPTX templates and visual references.
- `inputs/<project-id>/materials/`: user-provided briefs, assets, data, notes, and other source materials.
- `inputs/<project-id>/analysis.md`: project analysis record.
- `inputs/<project-id>/development/analysis-data/`: extracted structured analysis data.
- `inputs/<project-id>/development/prototype/`: reusable template prototypes and visual QA demos.
- `inputs/<project-id>/development/extracted-media/`: media extracted from source PPTX files.
- `inputs/<project-id>/development/previews/`: rendered screenshots and comparison images.
- `inputs/<project-id>/baseline/`: reviewed local snapshots for comparison and rollback.
- `outputs/<project-id>/`: generated user-facing HTML presentations.

## Project Input Shape

Use one folder per presentation project:

```text
inputs/<project-id>/
  template/
    <source-template>.pptx
  materials/
    brief.md
    assets/
    data/
  analysis.md
  development/
    analysis-data/
    prototype/
    extracted-media/
    previews/
  baseline/
```

The minimal `brief.md` should define:

```yaml
---
project_id: ibc_demo_en_4chapters
template_id: IBC_template
language: en
title: IBC HTML Demo
chapters:
  - Chapter 1
  - Chapter 2
  - Chapter 3
  - Chapter 4
output:
  filename: IBC_demo_en_4chapters.html
---
```

## Output Shape

Generated presentation HTML should go to:

```text
outputs/<project-id>/<output-filename>.html
```

Example:

```text
outputs/ibc_demo_en_4chapters/IBC_demo_en_4chapters.html
```

## Template Selection

For agenda pages, select by language and chapter count:

```text
agenda-zh-2-layout2
agenda-zh-3-layout2
agenda-zh-4-layout2
agenda-zh-5-layout2
agenda-en-2-layout3
agenda-en-3-layout3
agenda-en-4-layout3
agenda-en-5-layout3
```

Rules:

- `language: zh` uses the Chinese agenda family.
- `language: en` uses the English agenda family.
- `chapters.length` must currently be 2, 3, 4, or 5.
- If the requested chapter count is outside the supported range, stop and ask whether to adapt a new layout.

## Prototype vs Presentation

- Prototype files should be named like `IBC_template-prototype.html`.
- User-facing presentation files should be named by project, audience, language, or chapter count.
- Do not overwrite the prototype when generating a user presentation.
- Do not store generated user presentations in `inputs/<project-id>/development/prototype/`.
