# IBC Template Body Layouts

Source file:

- `inputs/ibc_presentation_title/template/IBC_template.pptx`

Coordinate system:

- PowerPoint 16:9 canvas converted to HTML coordinate space: `1280px x 720px`.
- PPTX EMU values are converted by `px = emu / 914400 * 96`.

## Body Layout 1: Title and Content

PPTX layout:

- XML file: `ppt/slideLayouts/slideLayout5.xml`
- Layout name: `3_标题和内容`
- Related master: `ppt/slideMasters/slideMaster1.xml`

This is the first body-page form. It should be used for ordinary body pages that only need a page title and a content area.

### Layout-Owned Objects

| Object | Type | Position `(x, y, w, h)` | Style / Asset |
| --- | --- | --- | --- |
| `图片 3` | bottom wave image | `(0.00, 513.88, 1279.38, 206.12)` | `ppt/media/image4.png`, stretch to fill |
| `菱形 8` | diamond | `(27.00, 29.00, 33.00, 33.00)` | `#008A80`, semi-transparent |
| `菱形 9` | diamond | `(10.50, 29.00, 33.00, 33.00)` | `#008A80`, solid with white outline |
| `文本占位符 3` | page title | `(98.17, 25.95, 843.59, 40.44)` | Arial Black, bold, 20.85pt, `#016F67` |
| `灯片编号占位符 2` | page number | `(1240.46, 681.67, 77.77, 38.33)` | Arial Black, bold, 11pt, `#00706B` |

### Master-Inherited Objects

These come from `slideMaster1.xml` and remain visible unless the specific layout overrides them.

| Object | Type | Position `(x, y, w, h)` | Style / Asset |
| --- | --- | --- | --- |
| `图片 6` | logo | `(921.70, -3.65, 358.30, 83.97)` | `ppt/media/image1.png` |
| `文本占位符 2` | body placeholder | `(88.00, 191.67, 1104.00, 456.83)` | master body area, used as inferred HTML content area |

### HTML Implementation Rules

- Use `data-slide-type="content-title-body-layout5"` for generated pages based on this layout.
- Do not include the temporary chapter navigation band on this layout.
- Do not include a right-side visual placeholder on this layout.
- Use the layout title placeholder for the top page title.
- Use the master body placeholder as the primary content area unless a later PPTX layout provides a more specific body placeholder.
- Keep footer page numbers on body pages.
- Use `image4.png` as the bottom wave background for this layout.

## Body Layout 2: Chapter Title and Body

PPTX reference:

- User-facing PPT page: fourth page / first ordinary body-style reference.
- Slide XML: `ppt/slides/slide4.xml`
- Referenced layout XML: `ppt/slideLayouts/slideLayout14.xml`
- Layout name read from XML: `3_小节`

This layout should be remembered as a normal enterprise body-page style for pages that need a chapter name and body content, but do not need to express a separate subtitle in the generated HTML.

### User-Confirmed Design Rule

- Use case: ordinary content page without subtitle emphasis.
- Header mark: the double-diamond image/group at the left of the page title.
- Header mark size: `1.5cm x 2.2cm` as provided by user. In HTML, preserve the visual proportion and allow small adjustment after review.
- Title font: Arial.
- Title size: `21pt`.
- Title weight: bold.
- Title color: global brand green, currently `#016F67`.
- During real project development, the title font size may be adjusted to fit content while preserving this visual hierarchy.

### XML Reference Values

| Object | Type | Position `(x, y, w, h)` | Notes |
| --- | --- | --- | --- |
| `组合 7` | header double-diamond vector group | `(10.50, 19.55, 79.63, 53.09)` | Extracted to `IBC_template_assets/chapter-mark-layout14.svg`; XML converts to about `2.11cm x 1.40cm`. |
| `文本占位符 3` | chapter title | `(98.17, 25.95, 843.59, 40.44)` | XML reads Arial Black, 20.85pt, bold, `#016F67`; user-confirmed implementation rule is Arial, 21pt, bold, global green. |
| `灯片编号占位符 2` | page number | `(1240.46, 681.67, 77.77, 38.33)` | Same bottom-right page number position as Body Layout 1. |
| `图片 3` | bottom wave image | `(0.00, 513.88, 1279.38, 206.12)` | `ppt/media/image4.png`, stretch to fill. |

### HTML Implementation Rules

- Use a dedicated layout id such as `content-chapter-body-layout14`.
- Render the top-left header mark as a fixed-size group/image, not as separate freely-flowing inline decoration.
- The PPTX source is not a bitmap image; it is a vector group with two `diamond` shapes.
- Use the extracted high-definition SVG asset `IBC_template_assets/chapter-mark-layout14.svg`.
- SVG extraction uses `viewBox="0 0 79.63 53.09"` and `preserveAspectRatio="xMidYMid meet"` to avoid diamond distortion.
- SVG style from XML: right diamond `#008A80` with `0.50196` opacity; left diamond `#008A80` with white stroke.
- Use the chapter title as the only top heading; do not render a visible subtitle band for this style.
- Use the global brand green token for the title and header mark.
- Constrain the title text box to `left: 98.17px; top: 17.1px; width: 835px; height: 58px`.
- Use `display: flex; align-items: center` on the title text box so the title text is vertically centered against the header mark centerline.
- Although the PPT rule is Arial 21pt, current HTML review tuning uses `36px` Arial bold with a very light text-shadow because the browser rendering looked visually smaller and less bold than the PPT.
- Keep body content in the main readable content area and avoid image placeholders unless the selected page variant explicitly requires images.
- Keep footer page numbers on body pages.
