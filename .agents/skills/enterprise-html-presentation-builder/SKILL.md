---
name: enterprise-html-presentation-builder
description: Build reusable Reveal.js-first workflows for enterprise-style browser presentations from PowerPoint templates, corporate visual styles, and user briefs, with offline single-file HTML delivery, a collapsible fixed left-side slide preview rail, and new-tab fullscreen playback. Use when the user wants to develop a Codex skill for HTML presentations, browser-based slides, or AI-generated interactive presentation demos. Do not use when the user only asks for a final PowerPoint file.
---

# Enterprise HTML Presentation Builder

## Purpose

Create and maintain a reusable Reveal.js-first workflow for building enterprise-style browser presentations from PowerPoint templates.

This skill is not a one-off HTML generator. It helps Codex analyze a corporate PPT template, extract reusable style rules, define slide layouts and asset rules, develop presentations with Reveal.js, and package controlled offline single-file HTML output only when requested.

## Use this skill when

- The user has an enterprise PowerPoint template and wants to build a custom Codex skill around it.
- The user wants browser-based presentation delivery instead of native PowerPoint playback.
- The user wants Reveal.js as the presentation runtime.
- The user wants a single-file HTML presentation with enterprise style.
- The user wants to add AI-generated frontend interaction pages to a presentation.
- The user wants to define reusable slide layouts such as cover, agenda, section, content, two-column, image-text, data, interactive-demo, and closing.
- The user wants to gradually build a minimal system before generating final deliverables.

## Do not use this skill when

- The user only needs a normal PowerPoint deck.
- The user expects perfect PPTX-to-HTML conversion.
- The user expects PowerPoint master logic, animations, placeholders, or SmartArt to be imported exactly.
- The user asks for a one-off final artifact without building a reusable workflow.
- The task is unrelated to presentations, HTML slides, or enterprise templates.

## Core assumptions

Enterprise PPT templates usually provide:

- Logo placement.
- Corporate colors.
- Font hierarchy.
- Header and footer rules.
- Cover layout.
- Agenda layout.
- Chapter divider layout.
- Content layout.
- Closing page layout.
- Background shapes or decorative elements.

They usually do not need exact conversion of:

- PowerPoint animation.
- Master slide inheritance.
- Native placeholders.
- SmartArt internals.
- Theme object metadata.

## Runtime and dependency policy

Use Reveal.js as the default presentation runtime. For this workspace, the confirmed distribution is Reveal.js `6.0.1` under:

```text
/Users/tangkai/code/revealJs/node_modules/reveal.js
```

Treat that directory as read-only. Do not install or modify dependencies when the confirmed distribution is available. Resolve the runtime from a project-specific `reveal_root` when provided, then a project-local `node_modules/reveal.js`, then the confirmed workspace path above. If none is available, ask for approval before installing anything.

Use the prebuilt UMD files in `dist/` so Reveal.js does not require Vite or another build system. Keep development files inspectable, but package the final deliverable as one offline HTML file with Reveal.js CSS, JavaScript, selected plugins, custom code, and approved assets embedded.

Do not add React, Vite, a CDN, or another presentation framework by default.

## Workflow

1. Identify the user's current goal:
   - Build or update the skill system.
   - Analyze an enterprise PPT template.
   - Extract style tokens.
   - Define layout taxonomy.
   - Define asset sourcing and placement rules.
   - Generate a controlled single-file HTML prototype.
   - Generate a user-facing presentation from project input.
   - Add an interactive demo page.

2. Determine the available inputs:
   - PPTX template.
   - Exported slide images.
   - Logo files.
   - Brand guide.
   - Color and font rules.
   - Product images.
   - Project photos.
   - Charts, maps, screenshots, or data.
   - User brief.

3. If the user asks for template analysis, do not generate final HTML. First produce:
   - Confirmed information.
   - Assumptions.
   - Information gaps.
   - Style token draft.
   - Layout taxonomy classification.
   - Asset sourcing rules.
   - Asset placement rules.
   - Recommended conversion strategy.
   - Next development tasks.

4. If the user asks for asset analysis, do not generate final HTML. First produce:
   - Confirmed assets.
   - Missing assets.
   - Placeholder strategy.
   - Permission and confidentiality risks.
   - Asset inventory draft.
   - Placement rules.
   - Next actions.

5. If the user asks to generate an HTML prototype, first check whether:
   - Delivery mode is confirmed.
   - Required slide types are known.
   - Style tokens are available or can be drafted.
   - Missing assets can be replaced with labeled placeholders.
   - Single-file HTML constraints are acceptable.
   - A compatible Reveal.js distribution is available.

6. For HTML presentation generation, use:
   - Reveal.js markup: `.reveal > .slides > section`.
   - Reveal.js for navigation, scaling, keyboard, touch, overview, fragments, and slide lifecycle events.
   - A 1280×720 logical slide size unless the analyzed template requires another 16:9 canvas.
   - Development-time local Reveal.js references only in non-deliverable prototypes.
   - Final single-file HTML with embedded Reveal.js CSS and JavaScript.
   - No external CDN.
   - No dependency installation.
   - SVG/CSS decorative elements.
   - Apply `references/default-typography-rules.md` unless the user or project explicitly confirms a different text color or font rule.
   - Clear placeholders for missing assets.
   - Semantic in-deck links for agenda, chapter, and subtitle navigation.
   - Custom JavaScript only for presentation-specific behavior; do not reimplement Reveal.js navigation.
   - A presentation shell with a fixed left-side thumbnail preview rail that is expanded by default and can be collapsed, plus previous/counter/next controls and a Play action that opens a dedicated playback tab and requests fullscreen, unless the user requests a minimal or embedded mode.
   - Reveal.js API calls for every shell navigation action. When a custom control strip replaces Reveal.js arrows, set `controls: false` to avoid duplicate controls while keeping `progress: true` unless the user asks otherwise.
   - Active preview, counter, disabled-control, and document-title state derived from Reveal.js `ready` and `slidechanged` events.
   - `Reveal.layout()` after preview collapse/expand, fullscreen changes, or another shell action changes the available viewport.

7. For user-facing presentation generation, separate the application layer from prototype work:
   - Read project inputs from `inputs/<project-id>/`.
   - Use `inputs/<project-id>/materials/project.md` as the primary user input.
   - Treat older `inputs/<project-id>/materials/brief.md` files as compatibility inputs only.
   - Use `inputs/<project-id>/template/` for user-provided PPTX templates and visual references.
   - Use `inputs/<project-id>/customization.md` as the project-specific customization and generation decision record.
   - If `customization.md` is absent, use `inputs/ibc_presentation_title` as the default IBC base-template reference.
   - Reserve `analysis.md` for template analysis records or legacy template-library projects.
   - For IBC-style projects, default `template_source` to `inputs/ibc_presentation_title` and do not require a project PPTX unless `requires_project_pptx: true`.
   - Use analyzed template rules and prototype layouts as reusable references.
   - Write generated presentation HTML to `outputs/<project-id>/`.
   - Do not write user-facing presentation HTML to `inputs/<project-id>/development/prototype/`.
   - Do not overwrite template prototype files.

8. For agenda and subtitle navigation in a Reveal.js deck:
   - Give target slides stable IDs and use Reveal.js named routes such as `#/chapter-1`.
   - For IBC-style final project output, repeat the selected agenda layout before each chapter section instead of keeping only one agenda page at the beginning.
   - Each repeated agenda slide should carry `data-chapter="<current-chapter-number>"` so the deck controller can highlight the current chapter when that agenda page is shown.
   - On each repeated agenda slide, the current chapter number and title should be active, while non-current chapters use the inactive agenda style.
   - Agenda hover/focus state takes precedence over the active slide state: when the mouse or focus is on one chapter number/title pair, only that chapter pair is highlighted and all other chapter pairs use the inactive style; when hover/focus leaves, restore the active slide's chapter highlight.
   - Chapter links should target `#/chapter-<chapter-number>`.
   - The first content slide of a chapter should carry `id="chapter-<chapter-number>"` and `data-chapter="<chapter-number>"`.
   - Subtitle links should target `#/chapter-<chapter-number>-subtitle-<subtitle-number>`.
   - Subtitle content slides should carry `id="chapter-<chapter-number>-subtitle-<subtitle-number>"`, `data-chapter="<chapter-number>"`, and `data-active-subtitle-index="<subtitle-number>"`.
   - Prefer native Reveal.js hash routing. If custom click handling is required, locate the slide with `document.getElementById()`, obtain its indices with `Reveal.getIndices()`, and navigate with `Reveal.slide()`.
   - Drive active chapter and subtitle state from Reveal.js `ready` and `slidechanged` events.
   - Agenda number and title links for the same chapter should highlight as one interaction group.
   - Subtitle tabs should default to subtitle 1 and update the active tab from `data-active-subtitle-index`, explicit metadata, or the current hash.
   - Prototype-only fallback routes may jump to template preview slides, but final project output should generate real semantic target slides.

9. For interactive demo slides, keep the first version simple:
   - Offline operation.
   - Static embedded data.
   - Visible controls.
   - Clear current state.
   - Fallback explanation text.
   - No external APIs by default.

10. After every meaningful improvement, recommend updating the relevant bundled resource:
   - `references/` for rules and analysis methods.
   - `assets/` for reusable templates.
   - `tests/` for prompts and acceptance criteria.
   - `scripts/` only after the workflow is stable.

## Reference loading rules

Use bundled resources only when relevant to the user's request.

- Use `references/ppt-template-analysis-checklist.md` when analyzing an enterprise PPT template or extracting style and layout rules.
- Use `references/layout-taxonomy.md` when classifying slide types or choosing HTML slide layouts.
- Use `references/single-file-html-rules.md` when the target output is a single-file HTML browser presentation.
- Use `references/revealjs-development-rules.md` whenever generating, modifying, packaging, or debugging a Reveal.js presentation.
- Use `references/default-typography-rules.md` whenever generating or modifying presentation text styles, font stacks, or default text colors.
- Use `references/revealjs-presentation-shell-rules.md` whenever adding or modifying the fixed left preview rail, collapse control, playback controls, counters, new-tab playback, fullscreen behavior, or presentation-shell responsiveness.
- Use `references/application-layer-rules.md` when the task involves user project inputs, generated presentation outputs, or deciding where generated HTML should be written.
- Use `references/asset-sourcing-rules.md` when deciding where logos, images, icons, backgrounds, charts, maps, or screenshots should come from.
- Use `references/asset-placement-rules.md` when deciding where assets should be placed on cover, agenda, section, content, data, image-text, interactive, or closing slides.
- Use `assets/brief-template.md` when the user has not provided enough project, audience, delivery, or source-material information.
- Use `assets/project-brief-template.md` when creating a minimal user input file for a generated presentation.
- Use `assets/style-token-template.md` when documenting enterprise colors, fonts, logo rules, spacing, headers, footers, decoration, or component style variables.
- Use `assets/html-slide-template.md` when generating or modifying reusable HTML slide structures.
- Use `assets/revealjs-presentation-shell.md` when a generated deck needs the reusable preview-navigation and fullscreen control shell.
- Use `assets/asset-inventory-template.md` when documenting required assets, placeholders, permissions, confidentiality risks, or single-file embedding decisions.
- Use `tests/template-analysis-request.md` when testing the template-analysis behavior.
- Use `tests/asset-rules-request.md` when testing the asset-sourcing and placement behavior.
- Use `tests/cover-title-long-en-request.md` when testing long English cover-title typography, wrapping, and local HTML review behavior.
- Use `tests/revealjs-single-file-request.md` when testing the Reveal.js runtime, semantic navigation, offline packaging, and single-file delivery behavior.
- Use `tests/revealjs-presentation-shell-request.md` when testing the fixed left preview rail, collapse control, custom controls, Reveal.js state synchronization, new-tab playback, and fullscreen behavior.

Do not assume that references and assets are already loaded. Open and inspect the relevant bundled resource when the task depends on its detailed rules.

## Output format

### 结论

Use one of:

- 构建 skill 最小系统
- 分析企业 PPT 模板
- 定义 HTML 演示模板
- 生成单文件 HTML 原型
- 增加交互演示页
- 只分析素材规则
- 不建议使用该路线

### 当前目标

State the immediate task.

### 输入材料

List available files, briefs, assets, and missing inputs.

### 已确认信息

List only information directly provided by the user or visible in supplied files.

### 推测内容

List inferred but unverified information. Mark it as requiring verification.

### 信息缺口

List missing inputs that affect quality, delivery, permissions, or brand accuracy.

### 风格抽取规则

Include style token findings or state that style tokens still need to be extracted.

### 页面类型定义

Classify required slide types using the layout taxonomy.

### 素材来源规则

State preferred asset sources, placeholders, and permission risks.

### 素材放置规则

State logo, header, footer, image, chart, screenshot, map, and interactive placement rules.

### 推荐转换策略

Use one of:

- Extract style only.
- Use slide images as background.
- Rebuild layouts in HTML/CSS.
- Hybrid approach.
- Not suitable for HTML template.

### 下一步动作

Give the next concrete step. Do not provide a long roadmap unless the user requests it.

### 验收标准

State how the user can verify the current step.

## Safety rules

- Do not modify files outside the current repository unless explicitly requested.
- Do not write to `~/.agents/skills` unless explicitly requested.
- Do not modify `~/.codex/config.toml` unless explicitly requested.
- Do not modify installed system, curated, or third-party skills.
- Do not install npm, Python, Homebrew, or system dependencies unless explicitly approved.
- Do not run destructive commands such as `rm -rf`, `git clean -fdx`, or `brew uninstall`.
- Do not access external network resources unless explicitly approved.
- Do not use random web images by default.
- Do not treat unverified images as client-ready.
- Do not invent data for charts unless it is explicitly labeled as illustrative dummy data.
- Do not expose credentials, IP addresses, customer names, internal URLs, personal data, or confidential screenshot details.

## Quality bar

- Keep the skill reusable and project-oriented.
- Keep `SKILL.md` concise enough to act as the execution entry point.
- Put detailed rules in `references/`.
- Put reusable output templates in `assets/`.
- Put deterministic automation in `scripts/` only after the workflow is stable.
- Put test prompts and acceptance criteria in `tests/`.
- Distinguish confirmed information, assumptions, and information gaps.
- Do not claim perfect PPTX import or exact PPTX-to-HTML conversion.
- Do not generate final HTML unless the user explicitly asks for it.
- Use Reveal.js as the default runtime for HTML presentations and do not replace its navigation with a parallel custom slide controller.
- For user-facing Reveal.js decks, include an accessible collapsible fixed left preview rail and a new-tab fullscreen Play action by default unless the brief explicitly requests minimal or embedded playback.
- Keep the local Reveal.js distribution read-only and keep final output independent of its absolute filesystem path.
- Prefer minimal, inspectable files first.
- Prefer placeholders over unauthorized or uncertain assets.
- Use Simplified Chinese by default unless the user requests another language.
