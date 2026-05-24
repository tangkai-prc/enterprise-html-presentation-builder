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

## Current workspace layout

The repository has two separate layers:

```text
.agents/skills/enterprise-html-presentation-builder/
  Reusable skill source, references, assets, and tests.

inputs/<project-id>/
  Project inputs and development context, including templates, user materials,
  analysis, prototype references, previews, and baselines.

outputs/<project-id>/
  Final generated HTML presentation outputs.
```

Use `inputs/<project-id>/` for real enterprise project materials. Keep `.agents/skills/` limited to reusable, generic skill logic. Use `outputs/<project-id>/` only for final user-facing HTML presentation artifacts.


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

## How to use this skill

Use this repository as both the skill development workspace and the local project application workspace.

中文说明：这个仓库同时承担两件事：一是继续开发通用的 Codex skill，二是在本地承载具体 PPT-HTML 项目的输入和输出。通用能力放在 `.agents/skills/`，具体企业项目材料放在 `inputs/` 和 `outputs/`。

The reusable skill lives under:

```text
.agents/skills/enterprise-html-presentation-builder/
```

Concrete presentation projects should live under `inputs/<project-id>/` and `outputs/<project-id>/`.

具体项目不要直接放进 `.agents/skills/`。`.agents/skills/` 只放可复用规则、模板、测试和说明；项目 PPT、项目 md、客户资料、生成结果应放在对应的 `inputs/<project-id>/` 与 `outputs/<project-id>/`。

The default base template for future IBC-style projects is fixed to:

```text
inputs/ibc_presentation_title
```

中文说明：后续实际项目默认从 `inputs/ibc_presentation_title` 中已经沉淀好的 IBC 模板库和规则衍生，不再重复读取原始 `IBC_template.pptx`。只有当 IBC 官方模板更新、需要新增未开发过的版式，或需要重新提取母版素材时，才回到 PPTX。

### Create a new presentation project

Create a project folder like this:

中文说明：每个新 PPT-HTML 项目建议单独建一个 `<project-id>`。如果项目沿用当前 IBC 母版风格，通常不需要再放 `template/template.pptx`；只需要在项目 md 中声明它基于 `inputs/ibc_presentation_title`。`materials/` 放项目 markdown、图片、数据等输入材料，`customization.md` 记录项目级定制规则、特殊要求和生成决策，最终 HTML 写到 `outputs/<project-id>/`。

```text
inputs/<project-id>/
  materials/
    project.md
    assets/
    data/
  customization.md

outputs/<project-id>/
```

Optional only when a project has a new PowerPoint template:

```text
inputs/<project-id>/
  template/
    template.pptx
```

Recommended `materials/project.md` fields:

中文说明：`materials/project.md` 是项目的入口文件。它应声明基于哪个模板库、是否需要项目自己的 PPTX、语言、标题、组织名称、章节数量、输出文件名，以及正文内容结构。后续生成器会根据这些信息从 IBC 模板库中选择目录页、正文页和子标题页模板。

`customization.md` 是可选文件，用于记录本项目相对 IBC 基础模板的定制点。例如某章使用哪种正文页、哪些页面需要图片、哪些内容需要人工审核、哪些跳转或素材需要特殊处理。不要把它命名为 `custume.md`；建议使用标准英文 `customization.md`。

If `customization.md` is absent, use the existing IBC base template defaults.

中文说明：`customization.md` 不是必需文件。如果新项目没有这个文件，默认采用 `inputs/ibc_presentation_title` 已经开发过的 IBC 模板库作为参考，包括封面、目录、正文、带子标题正文、尾页、左侧预览导航和跳转规则。

```markdown
---
project_id: <project-id>
template_base: IBC_presentation_template_library
template_source: inputs/ibc_presentation_title
requires_project_pptx: false
language: en
title: Presentation Title
organization: Organization Name
chapters:
  - Chapter 1
  - Chapter 2
  - Chapter 3
  - Chapter 4
output:
  filename: <project-id>.html
---

# Presentation Title

## Chapter 1

### Subtitle 1.1

- Key point 1
- Key point 2

### Subtitle 1.2

- Key point 1
- Key point 2
```

### Select template variants

For agenda pages, select by language and chapter count:

中文说明：目录页模板按语言和章节数选择。当前支持中文/英文，以及 2、3、4、5 章。真实项目生成时，先选择匹配项目语言和章节数的一种目录版式，然后在每个章节开始前保留一页目录：第 1 章前目录高亮第 1 章，第 2 章前目录高亮第 2 章，以此类推。

| Language | Chapter Count | Agenda Variant |
|---|---:|---|
| `zh` | 2 | Chinese 2-chapter agenda |
| `zh` | 3 | Chinese 3-chapter agenda |
| `zh` | 4 | Chinese 4-chapter agenda |
| `zh` | 5 | Chinese 5-chapter agenda |
| `en` | 2 | English 2-chapter agenda |
| `en` | 3 | English 3-chapter agenda |
| `en` | 4 | English 4-chapter agenda |
| `en` | 5 | English 5-chapter agenda |

For body pages:

- Use the no-subtitle body layout when a chapter page only needs a title and body content.
- Use the subtitle body layout when a chapter has 3 to 9 subtitle-level pages.
- Subtitle tabs should default to subtitle 1.
- Subtitle links should target semantic slide IDs such as `#chapter-1-subtitle-2`.
- Repeat the selected agenda layout before each chapter checkpoint and set `data-chapter` on that agenda page to the chapter it introduces.

中文说明：如果某页只是普通正文，使用“无子标题正文页”；如果一个章节下有多个小节，需要顶部子标题导航，则使用“带子标题正文页”。带子标题正文页目前按 3 到 9 个子标题设计，默认高亮第 1 个子标题。

后续项目的风格和样式都应从 `inputs/ibc_presentation_title` 的模板库继承。项目级生成只负责替换内容、章节、子标题、图片和数据，不应重新定义品牌色、logo 位置、封面/目录/尾页结构或浏览器导航系统。

### Required jump IDs

Generated HTML should use semantic in-deck anchors:

中文说明：为了支持目录和子标题在 HTML 中跳转，生成的 slide 必须带稳定的语义 ID。章节首页使用 `chapter-<n>`，子标题页使用 `chapter-<n>-subtitle-<m>`。这些 ID 不只是页面锚点，也用于 JavaScript deck 控制器判断当前章节和当前子标题高亮。

```html
<section class="slide" id="chapter-1" data-chapter="1">
```

```html
<section
  class="slide"
  id="chapter-1-subtitle-2"
  data-chapter="1"
  data-active-subtitle-index="2">
```

Agenda links should target `#chapter-<n>`.

Repeated agenda pages should carry `data-chapter="<n>"` so the deck controller highlights the chapter that follows. The active chapter number and title should be normal active green; all other chapter items should use the inactive grey style.

When the mouse hovers over, or keyboard focus lands on, an agenda chapter number/title pair, that pair should temporarily become the only highlighted pair. After hover/focus leaves, the highlight should return to the current slide's chapter.

Subtitle links should target `#chapter-<n>-subtitle-<m>`.

The browser deck controller should switch slides internally. Do not rely on native document scrolling or page reloads.

中文说明：点击目录或子标题时，应由 HTML 内部的 deck 控制器切换当前 slide。不要依赖浏览器默认滚动，也不要刷新页面。这样全屏演示、左侧预览导航和高亮状态才能保持一致。

### Generate HTML

For the current IBC template library, run from the repository root:

中文说明：当前 IBC 模板库已经有生成脚本。运行下面命令会把开发原型中的资源内嵌到一个单文件 HTML 中，输出到 `outputs/ibc_presentation_title/`。

```bash
node inputs/ibc_presentation_title/development/scripts/generate-core-template-library.mjs
```

The current output is:

```text
outputs/ibc_presentation_title/IBC_presentation_template_library.html
```

For future project-specific generators, write final user-facing HTML to:

中文说明：以后做具体项目时，应输出到对应项目的 `outputs/<project-id>/`。不要把最终成品 HTML 写回 `inputs/<project-id>/development/prototype/`，因为 prototype 是模板开发区，不是项目交付区。

```text
outputs/<project-id>/<project-id>.html
```

Do not write final project HTML into `inputs/<project-id>/development/prototype/`.

### Review HTML

Open the generated HTML in a browser and check:

中文说明：生成 HTML 后，需要人工打开浏览器审核。重点检查封面日期、目录模板、章节跳转、子标题跳转、全屏模式、左侧预览导航、页脚页码等。这个步骤非常重要，因为 PPT 母版到 HTML 不是完全自动等价转换。

- Cover date updates at runtime.
- Agenda page matches the selected language and chapter count.
- Agenda chapter numbers and titles highlight together and jump to chapter slides.
- Subtitle tabs highlight and jump to subtitle slides.
- Left preview navigation works outside fullscreen.
- Preview navigation hides in fullscreen.
- Footer/page numbers are omitted from agenda pages and retained on body pages where required.

### Git and privacy guidance

Project files under `inputs/<project-id>/` and `outputs/<project-id>/` may contain private enterprise templates, customer content, or derived visual assets.

中文说明：`inputs/` 和 `outputs/` 很容易包含企业 PPT 母版、客户资料、生成稿和派生素材，默认都按私有文件处理。除非仓库是 private 且用户明确同意，否则不要把这些内容推到远端。

Default rule:

- Commit reusable skill logic under `.agents/skills/`.
- Commit generic documentation and tests when they contain no private content.
- Keep concrete enterprise project inputs and outputs local unless the repository is private and the user explicitly approves pushing them.

Remote-safe files usually include:

- `.agents/skills/enterprise-html-presentation-builder/SKILL.md`
- `.agents/skills/enterprise-html-presentation-builder/references/`
- `.agents/skills/enterprise-html-presentation-builder/assets/`
- `.agents/skills/enterprise-html-presentation-builder/tests/`
- Generic repository README updates

Private-by-default files usually include:

- `inputs/<project-id>/template/*.pptx`
- `inputs/<project-id>/materials/`
- `inputs/<project-id>/development/`
- `outputs/<project-id>/`

中文说明：通常可以推远端的是通用 skill 规则和不含客户信息的文档；具体项目材料、PPTX、生成 HTML、分析截图、派生图片等默认只保留本地。

### Local Codex installation

This skill does not need to be installed globally while working inside this repository. Codex can use the project-level skill from:

中文说明：在这个仓库里使用 Codex 时，不需要把 skill 安装到全局目录。Codex 会读取项目级 `.agents/skills/enterprise-html-presentation-builder/SKILL.md`。只有当你希望在其他仓库也直接使用这套能力时，才考虑安装到本地全局 Codex skills。

```text
.agents/skills/enterprise-html-presentation-builder/SKILL.md
```

Install it into a global Codex skills directory only when the workflow is stable and you need to use it from other repositories.
