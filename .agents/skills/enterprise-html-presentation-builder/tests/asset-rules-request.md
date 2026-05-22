<!--
测试作用：
本文件用于测试 enterprise-html-presentation-builder skill 是否能在“素材来源与放置规则分析”的场景下正确触发，并按预期输出 Logo、背景、装饰元素、图片、图标、图表、地图、截图和交互演示素材的来源、权限、占位策略与放置规则。
它不是最终交付材料，也不是素材清单本体，而是一个测试提示词与验收标准文件。
Codex 使用本测试时，必须验证 skill 是否遵守“不使用随机网络图片”“不默认生成最终 HTML”“先确认素材来源和权限再进入交付生成”的边界。
-->

# Test: Asset Rules Request

## Purpose

Test whether `enterprise-html-presentation-builder` can analyze asset sourcing and placement requirements for an enterprise-style browser presentation.

This test verifies that the skill can:

- Identify asset categories.
- Prefer user-provided and official enterprise assets.
- Avoid random web images.
- Record permission and confidentiality status.
- Define placement rules for logos, backgrounds, images, icons, charts, maps, screenshots, and interactive demo assets.
- Identify placeholders and information gaps.
- Avoid generating final HTML by default.

## Test prompt

```text
$enterprise-html-presentation-builder

请只分析企业浏览器演示中的素材来源与放置规则。

请不要生成最终 HTML。
请不要安装 reveal.js、React、Vite 或任何依赖。
请不要使用随机网络图片。
请不要修改全局 skills。

请输出：

1. Logo 从哪里获取，放在哪些页面的什么位置
2. 背景图或装饰元素从哪里获取，哪些可以用 CSS/SVG 重建
3. 产品图、项目照片、行业场景图如何选择和放置
4. 图标、图表、地图、截图如何选择和放置
5. 哪些素材可以作为 MVP 占位，哪些素材最终交付前必须替换
6. asset inventory 草案
7. 权限、授权和保密风险
8. 下一步动作

要求：
- 优先使用用户提供或企业官方素材。
- 不要默认使用第三方网页图片。
- 不要把未确认授权的图片用于客户交付。
- 对缺失素材使用明确占位符。
- 默认使用简体中文输出。
```

## Required skill behavior

The skill should:

- Trigger `enterprise-html-presentation-builder`.
- Use `references/asset-sourcing-rules.md` to define asset source priority.
- Use `references/asset-placement-rules.md` to define placement rules.
- Use `assets/asset-inventory-template.md` as the expected inventory structure.
- Avoid generating final HTML unless explicitly requested.
- Avoid installing dependencies.
- Avoid fetching or recommending random web images by default.
- Avoid modifying global skills.

## Expected output structure

The response should use this structure:

### 结论

Use one of:

- 素材来源清晰，可以进入模板生成
- 需要补充关键素材
- 只能使用占位素材
- 不建议使用当前素材进入客户交付

### 已确认素材

Expected table:

| Asset ID | Type | Source | Permission status | Placement |
|---|---|---|---|---|

### 缺失素材

Expected table:

| Asset ID | Type | Preferred source | Temporary placeholder | Required before final delivery |
|---|---|---|---|---|

### Logo 规则

Should include:

- Preferred source.
- Preferred format.
- MVP placeholder strategy.
- Normal slide placement.
- Cover page placement.
- Closing page placement.
- Restrictions on stretching, recoloring, cropping, or adding effects.

### 背景与装饰规则

Should include:

- Which decorative elements can be rebuilt using CSS/SVG.
- Which background assets require extraction or user-provided files.
- Whether background images are suitable for strict single-file HTML.
- Whether HTML plus asset folder is more appropriate.

### 图片规则

Should include:

- Product images.
- Project photos.
- Industry scenario images.
- Placeholder rules.
- Permission checks.
- `object-fit: cover` versus `object-fit: contain` guidance.

### 图标 / 图表 / 地图 / 截图规则

Should include:

- Icons should preferably be inline SVG or approved icon library assets.
- Charts should not use invented data.
- Maps should not fetch external online tiles in MVP.
- Screenshots should be checked for confidentiality and redacted if needed.

### Asset inventory draft

Expected table:

| Asset ID | Type | Description | Source status | Permission status | File path / representation | Placement | Required | Delivery status | Notes |
|---|---|---|---|---|---|---|---|---|---|
| logo-primary | logo | Primary corporate logo | Missing / PPT template / user-provided | Unknown / To verify | `LOGO` placeholder or file path | Header / cover / closing | Yes | Placeholder only / Ready |  |
| cover-bg | background | Cover background or decoration | Placeholder / PPT template | To verify | CSS/SVG or image | Cover | No | Ready for MVP / Needs replacement |  |
| footer-decoration | decoration | Footer line or wave | CSS/SVG rebuild | Internal rebuild | inline CSS/SVG | Footer | No | Ready for MVP |  |
| project-photo-01 | project photo | Project site photo | Missing | Unknown | `PROJECT IMAGE PLACEHOLDER` | Image-text slide | No | Needs replacement |  |
| chart-data-01 | data/chart | Data or chart | Missing | Unknown | `DATA PLACEHOLDER` | Data slide | No | Needs replacement | Do not invent data |

### 权限、授权和保密风险

Should include:

- Logo permission status.
- Project photo permission status.
- Product image permission status.
- Screenshot confidentiality status.
- Map source status.
- Client-facing delivery risks.

### 下一步动作

Should recommend one or more:

- Request official logo SVG/PNG.
- Request official brand color values.
- Export representative PPT slides as images for visual reference.
- Create or update asset inventory.
- Use placeholders for MVP.
- Defer final delivery until permissions are confirmed.

## Pass criteria

The test passes if the response:

- Does not generate final HTML.
- Does not install dependencies.
- Does not modify global skills.
- Does not recommend random web images by default.
- Identifies asset categories.
- Produces a clear asset inventory draft.
- Separates confirmed assets from missing assets.
- States permission and confidentiality risks.
- Defines placement rules for key asset types.
- Provides next actions.

## Fail criteria

The test fails if the response:

- Generates a full HTML file without being asked.
- Uses or recommends random internet images without permission review.
- Treats unverified images as client-ready.
- Omits permission status.
- Omits placeholders for missing assets.
- Omits logo placement rules.
- Omits image placement rules.
- Omits screenshot confidentiality checks.
- Omits next actions.

## Notes

This test should be run after `template-analysis-request.md` or after the user explicitly asks to focus on asset rules.

This test should run before any final client-facing presentation output is generated.
