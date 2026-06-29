# Qudox · Fonts

All brand fonts are **self-hosted** here — no CDN dependency. Wired via `@font-face` in `../colors_and_type.css`.

## Display — `EmpowerSerif`
`EmpowerSerif.ttf` — proprietary high-contrast serif used for italic titulares, displays, and brand emphasis. The face is intrinsically italic, so it is declared `font-style: italic` in its `@font-face` to avoid a synthetic double-slant when `.qx-display` applies italic. Token: `--qx-font-display`.

## Body — `Manrope`
`Manrope-VariableFont_wght.ttf` — variable weight (200–800). Weights in use: **400 Regular**, **500 Medium**, **700 Bold**. Token: `--qx-font-body`.

## Mono — system stack
No bespoke mono. Uses the system stack `ui-monospace, "SF Mono", Menlo`. Token: `--qx-font-mono`.
