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

## Body Layout 3: Chapter Title, Subtitle Tabs, and Body

User-facing style:

- This is the second ordinary body style after the no-subtitle page.
- It is a title-body page with subtitle navigation tabs.
- It applies when a chapter has multiple subtitle-level pages and the current page needs to highlight the active subtitle.

PPTX reference:

- User-facing PPT page: seventh page.
- Slide XML: `ppt/slides/slide7.xml`
- Referenced layout XML: `ppt/slideLayouts/slideLayout16.xml`
- Layout name read from XML: `10_小节`

### Core Header Rules

The page header inherits the same chapter-title header system from Body Layout 2:

- Header mark asset: `IBC_template_assets/chapter-mark-layout14.svg`.
- Header mark position: `(10.50, 19.55, 79.63, 53.09)`.
- Chapter title text box: `left: 98.17px; top: 17.1px; width: 835px; height: 58px`.
- Chapter title visual tuning: Arial, bold, `36px`, global green `#016F67`, vertically centered against the header mark.

### Subtitle Tab Rules

The PPTX page 7 layout provides at least three subtitle tabs. HTML must support 3 to 9 subtitle tabs.

Minimum count:

- At least 3 subtitle tabs.

Maximum count:

- Up to 9 subtitle tabs.
- All tabs stay in one horizontal row on the top green band.
- Do not wrap to a second row for this layout.
- If a subtitle label is long, use two-line wrapping inside the fixed tab box before reducing font size.

PPTX-derived tab geometry:

| Item | Position `(x, y, w, h)` | Notes |
| --- | --- | --- |
| Subtitle band background | `(0.00, 78.06, 1280.00, 68.07)` | Rect fill `#016F67`, no line. |
| Tab 1 active background | `(12.60, 93.21, 120.94, 52.91)` | Rect fill `scheme:bg1`, effectively white; no line. |
| Tab 2 inactive background | `(153.41, 93.21, 120.93, 52.91)` | Rect fill `#A4C9C8` with alpha `32000`; no line. |
| Tab 3 inactive background | `(294.21, 93.21, 120.93, 52.91)` | Rect fill `#A4C9C8` with alpha `32000`; no line. |

Derived tab placement for 3-9 tabs:

- Start `x`: `12.60px`.
- `y`: `93.21px`.
- Width: `120.94px`.
- Height: `52.91px`.
- Horizontal step: `140.80px`.
- Formula: `x = 12.60 + index * 140.80`, where `index` starts at `0`.
- This places the ninth tab at about `1139.00px`, leaving it within the 1280px slide canvas.

Adaptive placement rule for project generation:

- The PPTX-derived placement above is the baseline for short labels.
- For real project content, calculate a uniform tab width and gap from `subtitles.length` and label lengths.
- All subtitle tabs on the same page must keep identical width and identical horizontal gap.
- Use `left-bound = 12.60px`, `right-bound = 1260px`, `top = 93.21px`, `height = 52.91px`.
- Start with `baseline-width = 120.94px` and `preferred-gap = 19.86px`.
- If labels are longer, expand all tab boxes uniformly up to `160px` when the row still fits.
- If the row cannot fit, reduce all tab boxes uniformly down to no less than `92px`, then reduce font size from `16px` toward `11px`.
- Use the formula `tab-left(index) = left-bound + index * (tab-width + gap)`.
- Never resize only one tab based on its own text; this would break the PPT-like alignment.

### Subtitle Tab Typography

PPTX-derived text placeholder rules:

| Item | Position `(x, y, w, h)` | Text Style |
| --- | --- | --- |
| Active subtitle text | `(12.61, 93.21, 120.93, 52.91)` | Arial, bold, global green `#016F67`, centered vertically. |
| Inactive subtitle text | Same as corresponding inactive background | Arial, bold, global green `#016F67`, centered vertically. |

Notes:

- PPTX run XML does not explicitly set subtitle font size in the placeholder runs; rectangle end paragraph style shows `sz="900"` in the backing shape. Initial HTML reconstruction used `12px`, but visual review showed it was too small. Use `16px` as the reviewed subtitle font size and adjust down only if a long label cannot fit.
- Font size is part of the adaptive algorithm: use `16px` by default, allow two-line wrapping, then step down to `14px`, `12px`, and minimum `11px` if required.
- Keep `font-weight: 900` or stronger to match PPT bold rendering.
- Align text center both horizontally and vertically.
- Preserve the PPT label pattern such as `subtitle 1.1`, `subtitle 1.2`, `subtitle 1.3` for generic templates.

### Layering Rule

- On subtitle layouts, lower the corporate logo below the subtitle band.
- Render the subtitle band above the logo so the green fill covers the small overlapping portion at the bottom of the logo.
- Render subtitle tab links above the subtitle band.
- Recommended z-order: subtitle-layout logo `1`, subtitle band `8`, subtitle tabs `9`.

### Active and Inactive States

Active subtitle tab:

- Background: white.
- Text: Arial bold, `#016F67`.
- Represents the currently displayed subtitle page.

Inactive subtitle tabs:

- Background: `rgba(164, 201, 200, 0.32)` derived from PPTX `#A4C9C8` with `alpha=32000`.
- Text: Arial bold, `#016F67`.
- No visible border.

### HTML Link and Navigation Rules

Use semantic links for subtitle tabs:

```html
<nav class="subtitle-tabs" aria-label="Chapter subtitles">
  <a class="subtitle-tab active" href="#chapter-1-subtitle-1">subtitle 1.1</a>
  <a class="subtitle-tab" href="#chapter-1-subtitle-2">subtitle 1.2</a>
  <a class="subtitle-tab" href="#chapter-1-subtitle-3">subtitle 1.3</a>
</nav>
```

Target slide/page IDs:

- `chapter-<chapter-number>-subtitle-<subtitle-number>`
- Example: `chapter-1-subtitle-1`, `chapter-1-subtitle-2`, `chapter-1-subtitle-3`.

Behavior:

- Clicking a subtitle tab jumps to the corresponding subtitle page within the same HTML deck.
- The destination slide uses the same subtitle tab set and marks its own tab as active.
- The active tab is synchronized automatically from slide state: `data-active-subtitle-index`, `data-active-subtitle-label`, body title text, or current slide hash.
- Subtitle tabs should also support immediate active-state switching during HTML review: hover, focus, or click updates the active subtitle highlight.
- Default subtitle state is subtitle 1.
- Subtitle tab links should use semantic targets such as `#chapter-1-subtitle-2`.
- In the template library review file, if a semantic subtitle target does not exist yet, route to the smallest count-preview slide that can display the selected subtitle number. For example, subtitle 1.2 routes to the 3-tab preview and subtitle 1.9 routes to the 9-tab preview.
- Keyboard navigation still moves through slides normally; subtitle links are an additional direct-jump affordance.
- In single-file HTML, implement jumps by updating the deck's current slide index after reading the target hash. Avoid full page reload.

Real project jump rules:

- Agenda chapter number and title links must target `#chapter-<chapter-number>`.
- The first real content slide of each chapter must carry `id="chapter-<chapter-number>"` and `data-chapter="<chapter-number>"`.
- Subtitle tab links must target `#chapter-<chapter-number>-subtitle-<subtitle-number>`.
- Each real subtitle content slide must carry:
  - `id="chapter-<chapter-number>-subtitle-<subtitle-number>"`
  - `data-chapter="<chapter-number>"`
  - `data-active-subtitle-index="<subtitle-number>"`
- Direct jumps must be handled by the deck controller with `show(index)` or equivalent slide-index switching. Do not rely on native page scroll.
- Agenda current-state highlighting is driven by active slide `data-chapter`.
- Subtitle current-state highlighting is driven by active slide `data-active-subtitle-index`; default to subtitle 1 when the value is absent.
- Template-library fallback routes such as `subtitle 1.9 -> #subtitle-count-9` are only for reviewing the reusable template library. A final project HTML should generate real semantic targets instead.

Control hint behavior:

- Place HTML controls in the bottom-left corner.
- Use `F` as the fullscreen button label.
- Show controls on load and interaction, then auto-hide after inactivity.
- Keep the bottom-left control bar limited to previous, next, slide counter, and fullscreen.
- Add a larger semi-transparent vertical preview navigator on the left side of the web page in non-fullscreen mode.
- Reserve horizontal space for the preview navigator in non-fullscreen mode so the slide canvas shifts to the right instead of being covered.
- Provide a small top-left toggle button in non-fullscreen mode to collapse or restore the preview navigator.
- When the preview navigator is collapsed, release the reserved left-side space and center the slide canvas.
- Generate preview items by scaling the actual slide DOM, not by using static screenshots, so the template library can preview every current slide.
- Hovering a preview item jumps to that slide and updates the active preview state.
- Hide the preview navigator in fullscreen mode and let the slide canvas return to centered full-width playback.
- Agenda chapter numbers and chapter titles should be links with `data-chapter-link="<number>"`.
- Agenda links should target chapter anchors such as `#chapter-1`, `#chapter-2`, and switch slides inside the single-file deck without page reload.
- Agenda number and title links with the same `data-chapter-link` should behave as one interaction group: hover, focus, click, and current-chapter state must highlight both pieces together.
- The current chapter state should be synchronized from the active content slide's `data-chapter` value.
- The first content slide of each chapter should carry `id="chapter-<number>"` and `data-chapter="<number>"`.

### Content Region

Page 7 / `slideLayout16.xml` includes multiple content blocks, but for the title-body subtitle style the recommended reusable content region is:

- Main content can use the same body content region as the selected content variant.
- If no image/data variant is selected, use a text-first body region below the subtitle band.
- Do not add extra subtitle text in the body title; the active subtitle tab already expresses the subtitle.

### Acceptance Rules

- The generated template must show at least 3 subtitle tabs.
- The active tab must be white.
- Inactive tabs must use translucent pale green.
- Tab labels must be clickable anchors.
- The layout must support exactly 3 through 9 subtitle tabs without horizontal overflow.
- The page must retain the top chapter title, header mark, logo, bottom wave, and page number system.
