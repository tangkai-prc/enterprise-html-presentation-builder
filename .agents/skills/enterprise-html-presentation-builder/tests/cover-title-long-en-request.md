<!--
测试作用：
本文件用于测试 enterprise-html-presentation-builder skill 是否能在“封面长英文标题”的场景下正确处理 PPT 母版标题样式、固定换行、日期自动更新和 HTML 原型审核。
它不是最终交付材料，而是一个测试提示词与验收标准文件。
-->

# Test: Cover Long English Title Request

## Purpose

Test whether `enterprise-html-presentation-builder` can apply a long English cover title to the IBC template prototype without breaking the cover layout.

This test verifies that the skill can:

- Use the cover title style extracted from the PPT layout.
- Preserve the cover title as a centered, bold white heading.
- Keep the long title readable with a controlled two-line break.
- Keep the organization name and auto-updating date separate from the title.
- Open or otherwise present the generated HTML prototype for human review when requested.

## Test prompt

```text
$enterprise-html-presentation-builder

增加测试用例，封面标题为：
NARI's Role in Advancing China's Power Grid& Overseas Achievements

要求：
- 输出 HTML 显示效果。
- 标题使用 IBC_template.pptx 封面母版读取到的标题样式。
- 标题白色、加粗、居中。
- 长标题允许固定换行为两行。
- 日期仍然单独一行，并随当天自动更新。
- 不提交 git。
```

## Expected implementation behavior

The prototype should:

- Write prototype output under `outputs/prototypes/`.
- Avoid writing user-facing final presentation output under `outputs/prototypes/`.
- Avoid installing dependencies.
- Avoid committing changes.
- Use the IBC cover title placeholder geometry as the reference area.
- Use the IBC cover title baseline style: `Arial Black`, `48px`, `font-weight: 900`, `line-height: 1.05`, `letter-spacing: 0`, `color: #fff`, and `text-align: center` unless the PPTX analysis is updated.
- Prefer the reference-style controlled two-line break after `Power Grid`.
- Before reducing the PPT-derived baseline size, measure or render-check the text width against the 1280px slide canvas.
- Render the title as:

```text
NARI's Role in Advancing China's Power Grid
& Overseas Achievements
```

## Pass criteria

The test passes if:

- The title is visible on the cover page.
- The title stays inside the cover title region.
- The title is centered horizontally.
- The title appears bold enough to match the PPT visual style.
- The organization name remains in its fixed footer position.
- The date appears on a separate line under the organization name.
- Agenda pages still have no footer page number.
- The HTML can be opened locally for manual review.
