# Default Typography Rules

## Scope

Apply these defaults when generating or modifying enterprise Reveal.js presentations unless the user or the current project provides an explicit replacement rule.

## Required defaults

- Use `#016F67` as the default text color on white, light, and neutral backgrounds.
- Use Microsoft YaHei (`"Microsoft YaHei"`, `"微软雅黑"`) for Chinese text.
- Use Arial for English letters, numbers, and Latin punctuation.
- Use this combined browser font stack so English resolves to Arial and Chinese falls back to Microsoft YaHei:

```css
:root {
  --text-primary: #016F67;
  --font-cn: "Microsoft YaHei", "微软雅黑", sans-serif;
  --font-en: Arial, sans-serif;
  --font-ui: Arial, "Microsoft YaHei", "微软雅黑", sans-serif;
}

.reveal,
.reveal .slides > section {
  color: var(--text-primary);
  font-family: var(--font-ui);
}
```

## Contrast exceptions

- Keep text white on solid green, dark, or image-overlay surfaces when `#016F67` would not meet readable contrast.
- Preserve another emphasis color only when it is explicitly confirmed by the source presentation or the user.
- Do not use a remote font merely to satisfy these defaults; rely on the system font stack and keep the final HTML offline.

## Verification

- Confirm the computed default text color is `rgb(1, 111, 103)`.
- Confirm the computed font stack starts with `Arial` and includes `"Microsoft YaHei"` and `"微软雅黑"`.
- Inspect representative Chinese, English, numeric, and reversed-text elements in the browser before delivery.
