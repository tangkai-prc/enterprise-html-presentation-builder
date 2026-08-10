

<!--
测试作用：
本文件用于测试 enterprise-html-presentation-builder skill 是否能在“分析企业 PPT 模板”的场景下正确触发，并按预期输出 style tokens、layout taxonomy、asset sourcing rules、asset placement rules 和信息缺口。
它不是最终交付材料，也不是 HTML 原型，而是一个测试提示词与验收标准文件。
Codex 使用本测试时，必须验证 skill 是否遵守“不默认生成最终 HTML”“不承诺完美 PPTX-to-HTML 转换”“先分析规则再生成产物”的边界。
-->

# Test: Template Analysis Request

## Purpose

Test whether `enterprise-html-presentation-builder` can analyze an enterprise PowerPoint template as a visual and structural reference before generating any HTML prototype.

This test verifies that the skill can:

- Identify the current task as template analysis.
- Avoid generating final HTML by default.
- Extract reusable style and layout rules.
- Separate confirmed information from assumptions.
- Identify missing assets and information gaps.
- Recommend the next development step.

## Test prompt

```text
$enterprise-html-presentation-builder

我有一个企业 PPT 模板，想从它构建一个浏览器演示生成系统。

请不要生成最终 HTML。
请不要安装 reveal.js、React、Vite 或任何依赖。
请不要修改全局 skills。
请先基于当前企业 PPT 模板进行模板分析，并输出：

1. 已确认信息
2. 推测内容
3. 信息缺口
4. 页面类型识别
5. style tokens 草案
6. layout taxonomy 草案
7. asset sourcing rules 草案
8. asset placement rules 草案
9. 推荐转换策略
10. 下一步开发任务

要求：
- 把 PPTX 作为视觉和结构参考，不要当作逐对象转换源。
- 不要承诺完美 PPTX-to-HTML 转换。
- 不要生成最终 HTML 文件。
- 不要使用随机网络图片。
- 默认使用简体中文输出。
```

## Required skill behavior

The skill should:

- Trigger `enterprise-html-presentation-builder`.
- Load or follow `references/ppt-template-analysis-checklist.md`.
- Use `references/layout-taxonomy.md` to classify slide types.
- Use `references/asset-sourcing-rules.md` to identify asset source requirements.
- Use `references/asset-placement-rules.md` to describe placement rules.
- Use `assets/style-token-template.md` as the expected structure for style tokens.
- Avoid generating final HTML unless explicitly requested.
- Avoid installing dependencies.
- Avoid modifying global skills.

## Expected output structure

The response should use this structure:

### 结论

Use one of:

- 适合提取为 HTML/CSS 企业演示模板
- 适合混合方式处理
- 仅适合作为视觉参考
- 不建议转为 HTML 演示模板

### 已确认信息

Should include facts directly visible in the PPT template or explicitly provided by the user.

Examples:

- Template contains cover page.
- Template contains contents page.
- Template contains chapter divider pages.
- Template contains closing page.
- Template contains corporate identity elements.

### 推测内容

Should include inferred but unverified information.

Examples:

- Primary color appears to be extracted from template visuals.
- Footer style may be reusable as CSS/SVG.
- Logo placement may be consistent across normal content slides.

### 信息缺口

Should list missing information.

Examples:

- Official logo file is missing.
- Exact brand color values are missing.
- Official font rules are missing.
- Image permission status is unknown.
- Final delivery format is not confirmed.

### 页面类型识别

Expected table:

| Slide type | Evidence | Recommended HTML layout |
|---|---|---|
| cover |  | cover |
| agenda |  | agenda |
| section |  | section |
| content |  | content |
| closing |  | closing |

### Style tokens draft

Should include draft tokens such as:

- Brand identity
- Logo token
- Color tokens
- Typography tokens
- Header/footer tokens
- Decoration tokens

The output must mark unverified values as draft or requiring verification.

### Asset inventory draft

Expected table:

| Asset ID | Type | Source | Permission status | Placement | Required |
|---|---|---|---|---|---|
| logo-primary | logo | PPT template / user required | To verify | Header / cover / closing | Yes |
| cover-bg | background | PPT / CSS / SVG | To verify | Cover | Optional |
| footer-decoration | decoration | CSS/SVG rebuild | Internal rebuild | Footer | Optional |

### Layout rules draft

Should include:

- Slide ratio.
- Safe margins.
- Header region.
- Footer region.
- Logo placement.
- Content region.
- Image placement rules.
- Closing page rules.

### Recommended conversion strategy

Use one of:

- Extract style only.
- Rebuild with master rules plus editable HTML objects.
- Use a hybrid object approach with isolated raster fallbacks only.
- Not suitable for HTML template.

For this skill MVP, the recommended strategy should normally be:

- Extract style first.
- Rebuild reusable master rules and editable HTML object layouts.
- Use placeholders for missing assets.
- Generate single-file HTML prototype only in a later step.

### 下一步动作

Should recommend one or more:

- Complete style token extraction.
- Create or update asset inventory.
- Confirm official logo and brand colors.
- Generate a 5-page HTML prototype only after analysis is approved.
- Add interactive-demo rules later.

## Pass criteria

The test passes if the response:

- Does not generate final HTML.
- Does not install dependencies.
- Does not modify global skills.
- Separates confirmed information, assumptions, and information gaps.
- Produces a style token draft.
- Produces layout taxonomy classification.
- Produces asset sourcing and placement rules.
- States that PPTX is a visual/style reference, not an exact conversion source.
- Recommends a next step.

## Fail criteria

The test fails if the response:

- Generates a full HTML file without being asked.
- Claims perfect PPTX-to-HTML conversion.
- Attempts to install reveal.js or other dependencies.
- Uses random web images.
- Treats unverified brand colors as final.
- Omits information gaps.
- Does not classify slide types.
- Does not mention asset permissions or placeholders.

## Notes

This test should be run after the project-level skill is visible in `/skills`.

It should be run before any prototype generation test.
