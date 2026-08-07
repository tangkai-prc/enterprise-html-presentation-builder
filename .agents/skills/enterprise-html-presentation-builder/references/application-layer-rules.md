# Application Layer Rules

## Purpose

Separate template/prototype work from user-facing presentation generation.

`outputs/prototypes/` is only for template analysis, coordinate review, and layout QA. It should not be treated as the final destination for a user's presentation.

For IBC-style projects, the default base template source is:

```text
inputs/ibc_presentation_title
```

New projects based on this IBC template library usually do not need their own `template/template.pptx`.

If `inputs/<project-id>/customization.md` does not exist, assume the project uses `inputs/ibc_presentation_title` as its base template reference and apply the already-developed IBC cover, agenda, body, subtitle-body, closing, Reveal.js navigation, and jump rules.

## Directory Roles

Use one `inputs/` folder per real presentation project:

- `inputs/<project-id>/template/`: user-provided PPTX templates and visual references.
- `inputs/<project-id>/materials/`: user-provided briefs, assets, data, notes, and other source materials.
- `inputs/<project-id>/customization.md`: project-specific customization and generation decision record.
- `inputs/<project-id>/analysis.md`: template analysis record only when the project introduces a new PPTX/template, or a legacy template-library record.
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
  materials/
    project.md
    assets/
    data/
  customization.md
```

When a project introduces a new PowerPoint template, add the template and analysis/development folders:

```text
inputs/<project-id>/
  template/
    <source-template>.pptx
  analysis.md
  development/
    analysis-data/
    prototype/
    extracted-media/
    previews/
  baseline/
```

The minimal `materials/project.md` should define:

```yaml
---
project_id: ibc_demo_en_4chapters
template_base: IBC_presentation_template_library
template_source: inputs/ibc_presentation_title
requires_project_pptx: false
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

Use `customization.md` for project-specific generation decisions that should not live in the content brief:

```markdown
# Project Customization

- Template source: `inputs/ibc_presentation_title`
- Uses project PPTX: no
- Presentation runtime: Reveal.js
- Reveal.js root: use the confirmed workspace default
- Agenda variant: English 4-chapter
- Chapter 1 body layout: subtitle body
- Chapter 2 body layout: no-subtitle body
- Special review notes:
```

Reserve `analysis.md` for projects that introduce a new PPTX template or require fresh template/master analysis.

If `customization.md` is absent, do not block generation. Fall back to the IBC defaults:

- `template_base: IBC_presentation_template_library`
- `template_source: inputs/ibc_presentation_title`
- `requires_project_pptx: false`
- Select agenda by `language` and `chapters.length`
- Repeat the selected agenda layout before each chapter section, with the agenda page highlighting the chapter that follows.
- Select body layout from the content structure in `materials/project.md`

## Output Shape

Generated presentation HTML should go to:

```text
outputs/<project-id>/<output-filename>.html
```

Example:

```text
outputs/ibc_demo_en_4chapters/IBC_demo_en_4chapters.html
```

Package user-facing output as a self-contained Reveal.js HTML file. A development prototype may reference the confirmed local Reveal.js distribution, but final output must embed the runtime and contain no machine-specific dependency path.

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
- User-facing IBC-style outputs should keep one selected agenda page per chapter checkpoint. For example, a 3-chapter deck should use three `agenda-en-3-layout3` or `agenda-zh-3-layout2` pages: one before Chapter 1 with Chapter 1 active, one before Chapter 2 with Chapter 2 active, and one before Chapter 3 with Chapter 3 active.
- Each repeated agenda slide should include `data-chapter="<current-chapter-number>"`.
- The agenda number and title for the active chapter should omit the inactive style. All other agenda items should carry the inactive style.
- During mouse hover or keyboard focus on an agenda chapter number/title pair, that hovered/focused chapter becomes the only highlighted pair; all other agenda chapter pairs, including the slide's current chapter, should be inactive until hover/focus leaves.
- Agenda links should target Reveal.js named routes such as `#/chapter-<n>`, and the target slide should use `id="chapter-<n>"`. Prefer native hash routing; if custom behavior is required, navigate with `Reveal.getIndices()` and `Reveal.slide()` instead of native scrolling or a parallel slide controller.

## Prototype vs Presentation

- Prototype files should be named like `IBC_template-prototype.html`.
- User-facing presentation files should be named by project, audience, language, or chapter count.
- Do not overwrite the prototype when generating a user presentation.
- Do not store generated user presentations in `inputs/<project-id>/development/prototype/`.
- Do not leave local Reveal.js file references in generated user presentations.
