# Master Rules and Editable HTML Object Rules

## Purpose

Use this reference whenever a PowerPoint template or content deck is applied to a user-facing HTML presentation.

The default construction contract is:

```text
final slide = master-rule layer + editable HTML object layer
```

Do not replace that contract with a rendered full-slide image unless the user explicitly requests a flattened image-based result.

## Layer ownership

| Layer | Owns | HTML treatment |
|---|---|---|
| Master rules | Canvas, shared background, colors, font tokens, logo, enterprise name, header, footer, title region, page number, safe margins, repeated decoration | Shared CSS variables, reusable template markup, original template assets, `data-template-role` |
| Editable slide objects | Slide title, body text, metrics, cards, tables, charts, shapes, connectors, diagrams, photos, maps, banners, covers, icons | Positioned HTML/CSS/SVG elements, independent `<img>` objects, `data-source-*` metadata |
| Presentation shell | Preview rail, collapse control, previous/counter/next, Play, fullscreen fallback | Outside slide content; Reveal.js remains navigation owner |

The template deck supplies reusable rules and approved shared assets. The content deck supplies slide-owned text, images, geometry, and ordering.

## Template selection

Before generation:

1. Inventory every provided template.
2. Match the content language.
3. Match the requested color theme.
4. Match the enterprise identity and logo.
5. Select one template variant and record its path.
6. Map each output slide to the nearest template layout family.

Do not mix assets from different language, color, or enterprise variants unless the user explicitly requests a hybrid.

## Reconstruction order

1. Inspect the selected template master/layouts and extract shared rules.
2. Inspect the content deck and count slides, text objects, independent images, shapes, and unsupported objects.
3. Create a template-frame map before building.
4. Build one reusable master-rule layer.
5. Rebuild each content slide as editable objects.
6. Add the Reveal.js shell without duplicating slide state.
7. Package approved assets and runtime into the single HTML file.
8. Render the result for visual comparison only.
9. Record deviations at isolated-object granularity.

## Editable-object contract

### Text

- Represent each source text box as its own HTML object unless a documented merge improves semantics without changing layout.
- Preserve paragraphs, line breaks, font hierarchy, emphasis, alignment, and object geometry.
- Set slide-owned text to `contenteditable="true"` in normal mode.
- Add `data-editable-text="true"` and a stable source identifier.
- Set editable text to `contenteditable="false"` in playback mode.
- Remove `contenteditable`, duplicate IDs, links, and focusability from preview clones.
- Treat editability as in-session editing unless a save/export workflow is explicitly implemented.

### Shapes and connectors

- Rebuild rectangles, rounded rectangles, ellipses, lines, arrows, and simple freeforms with CSS or inline SVG.
- Keep fills, outlines, opacity, rotation, clipping, and stacking order separate from text content.
- Use a group container when child geometry depends on a common coordinate system.

### Images

- Keep photos, maps, banners, screenshots, covers, and icons as independent `<img>` or `<figure>` objects.
- Preserve crop, aspect ratio, rotation, clipping, and stacking order.
- Embed approved images as data URLs for strict single-file delivery.
- Use meaningful alt text when the source role is known.

### Tables and charts

- Prefer HTML tables and inline SVG charts when the structure or source data is available.
- Use an isolated chart image when only a trusted chart raster exists.
- Never flatten the rest of the slide merely because one table, chart, SmartArt, or freeform is difficult.

## Required metadata

Use stable metadata where available:

```html
<section data-source-slide="3" data-template-layout="content-standard">
  <div data-template-role="master-logo"></div>
  <div data-source-aid="sh/abc123" data-object-type="text">
    <div contenteditable="true" data-editable-text="true">...</div>
  </div>
</section>
```

Recommended attributes:

- `data-source-slide`
- `data-source-aid` or another stable source-object ID
- `data-object-type`
- `data-template-layout`
- `data-template-role`
- `data-editable-text`

## Raster policy

### Allowed

- Source photographs and screenshots that are already independent slide assets.
- Original template-owned background artwork that contains shared decoration only.
- An isolated unsupported object, cropped to that object and recorded in the deviation log.
- Rendered slides stored under analysis or temporary directories for visual QA.

### Not allowed by default

- A rendered full slide embedded as `<img>`.
- A rendered full slide used as a CSS background behind invisible or duplicate text.
- A screenshot containing rasterized title, body text, charts, and slide-specific content used as a shortcut conversion.
- Silent fallback from editable objects to a flattened slide.

An explicit user request for image-based reproduction may override this policy. State that text and shapes will not remain editable before using that override.

## Preservation rule

When the request says “only colors, logo, and enterprise name change; everything else remains unchanged”:

- Change master-owned tokens and assets only.
- Preserve slide count and order.
- Preserve slide-owned wording, metrics, images, and diagrams.
- Preserve source object geometry and stacking order within reasonable browser-font tolerances.
- Change an enterprise name inside slide-owned content only when the user explicitly includes that content in the requested identity change.
- Log every unavoidable deviation.

## Acceptance criteria

Before handoff, verify:

- Output slide count equals the intended source slide count.
- `fullSlideScreenshotCount` is `0` unless the user explicitly approved flattened output.
- Every source text object is represented by an editable HTML text object or a documented semantic merge.
- Every independent image loads successfully and is not a slide render.
- Required master roles appear on every applicable slide.
- Edit mode has the expected number of `contenteditable="true"` objects.
- Playback mode has zero `contenteditable="true"` objects.
- Preview clones contain no editable or focusable slide content and no duplicate IDs.
- No material text overflow or missing image remains.
- The final HTML works offline with no unresolved runtime or asset path.
- Visual comparison uses source renders only as QA evidence, never as delivered slide content.

## Failure handling

If an object cannot be reconstructed faithfully:

1. Identify the exact source object.
2. Explain which property is unsupported.
3. Try HTML/CSS/SVG reconstruction.
4. Use an isolated-object raster only if necessary.
5. Record the deviation.
6. Never flatten the entire slide without explicit user approval.
