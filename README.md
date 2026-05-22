# CodexSkills

This repository is an isolated sandbox for developing local Codex skills.

## Current skill

`enterprise-html-presentation-builder`

Purpose:

Build a reusable Codex workflow for creating enterprise-style browser presentations from PowerPoint templates.

## Development policy

- Use project-level skills only.
- Do not modify global installed skills.
- Do not install dependencies by default.
- Start with skill instructions, references, assets, and tests.
- Add automation scripts only after the workflow is stable.


## Skill folder tree

The current `enterprise-html-presentation-builder` skill is organized as follows:

```text
.agents/
  skills/
    enterprise-html-presentation-builder/
      SKILL.md
      references/
        ppt-template-analysis-checklist.md
        layout-taxonomy.md
        single-file-html-rules.md
        asset-sourcing-rules.md
        asset-placement-rules.md
      assets/
        brief-template.md
        style-token-template.md
        html-slide-template.md
        asset-inventory-template.md
      tests/
        template-analysis-request.md
        asset-rules-request.md
```

## File roles

| Path | Role |
|---|---|
| `.agents/skills/enterprise-html-presentation-builder/SKILL.md` | Skill entry file. Defines the skill name, trigger description, workflow, reference-loading rules, output format, safety rules, and quality bar. |
| `.agents/skills/enterprise-html-presentation-builder/references/ppt-template-analysis-checklist.md` | Checklist for analyzing enterprise PowerPoint templates before generating browser presentation outputs. |
| `.agents/skills/enterprise-html-presentation-builder/references/layout-taxonomy.md` | Defines reusable slide layout types such as cover, agenda, section, content, two-column, image-text, data, interactive-demo, and closing. |
| `.agents/skills/enterprise-html-presentation-builder/references/single-file-html-rules.md` | Defines constraints and conventions for strict single-file HTML presentation delivery. |
| `.agents/skills/enterprise-html-presentation-builder/references/asset-sourcing-rules.md` | Defines where logos, images, icons, charts, maps, screenshots, and decorative assets should come from. |
| `.agents/skills/enterprise-html-presentation-builder/references/asset-placement-rules.md` | Defines where visual assets should be placed across slide types. |
| `.agents/skills/enterprise-html-presentation-builder/assets/brief-template.md` | Reusable requirement-collection template for presentation projects. |
| `.agents/skills/enterprise-html-presentation-builder/assets/style-token-template.md` | Reusable template for documenting enterprise style variables such as colors, fonts, spacing, logo rules, header/footer rules, and component tokens. |
| `.agents/skills/enterprise-html-presentation-builder/assets/html-slide-template.md` | Reusable HTML slide structure snippets for browser presentation generation. |
| `.agents/skills/enterprise-html-presentation-builder/assets/asset-inventory-template.md` | Reusable asset inventory template for tracking sources, permissions, placeholders, paths, placement, and delivery status. |
| `.agents/skills/enterprise-html-presentation-builder/tests/template-analysis-request.md` | Local development test prompt for validating template-analysis behavior. |
| `.agents/skills/enterprise-html-presentation-builder/tests/asset-rules-request.md` | Local development test prompt for validating asset-sourcing and asset-placement behavior. |
