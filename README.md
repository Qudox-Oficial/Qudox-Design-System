# Qudox · Design System

> Sistema de diseño basado en el **Manual de Identidad Qudox 2026**. Tokens, tipografía, color, componentes y kits de UI listos para usar.

Qudox is a **Spanish-language growth-marketing agency**. Its brand identity is built around a single, confident promise — *"Brand Identity in code"* — wrapped in a **dark editorial aesthetic** that pairs a high-contrast italic display serif against a clean modern sans, accented by a **cyan → yellow** signature gradient.

The system is **not a SaaS product**. There is one surface — the agency's **brand identity manual** and the marketing site that springs from it. Everything in this repo serves that single brand voice.

---

## Sources

| Source | Path | Notes |
|---|---|---|
| Manual de Identidad Qudox · 2026 (HTML) | `Qudox /qudox-design-system.html` (mounted, read-only) | Single source of truth. All tokens, the visual pattern, and component snippets in this system are lifted directly from this file. |

No additional Figma file, codebase, or screenshot sources were attached.

---

## Repo index

```
.
├── README.md                  ← you are here
├── SKILL.md                   ← portable skill manifest (Claude Code compatible)
├── colors_and_type.css        ← all tokens (CSS custom properties) + semantic helpers
├── fonts/
│   └── README.md              ← font licensing notes (both families self-hosted)
├── assets/
│   ├── mark.svg               ← brand mark (the "O" of QUDOX with through-strokes)
│   ├── logo-wordmark-dark.svg ← wordmark on light surfaces
│   ├── logo-wordmark-light.svg← wordmark on dark surfaces
│   ├── pattern-strip.svg      ← the brand's signature footer pattern
│   └── icons/                 ← line-icon set (Lucide-style, 1.6 stroke)
├── preview/                   ← Design System tab cards (one concept per card)
└── ui_kits/
    └── agency-site/           ← marketing site recreation built only from manual primitives
        ├── README.md
        ├── index.html         ← interactive click-thru
        └── *.jsx              ← components
```

Open `preview/` cards by switching to the **Design System** tab in the project panel.
Open `ui_kits/agency-site/index.html` to see the system applied to a full marketing surface.

---

## CONTENT FUNDAMENTALS

Qudox writes like a **confident growth-marketing partner**: short, declarative, slightly editorial. Spanish is the primary language; English is used for **section labels and brand asides** (e.g. "Design System", "Growth Marketing Company"). This bilingual mix is intentional — it signals the agency operates between LATAM and global markets.

### Voice

- **First-person plural** when speaking as the agency ("hacemos crecer", "diseñamos").
- **Second-person informal** ("tú", not "usted") when speaking to the client. The brand is a peer, not a vendor.
- **Imperative + outcome-led** copy on CTAs ("Hablemos", "Empieza ahora", "Ver casos").
- Metaphors are **mechanical / data-driven**, not whimsical. "Escala", "consistencia", "velocidad" — never "magic", "delight", "sparkle".

### Casing

| Element | Casing | Example |
|---|---|---|
| Display headlines | Sentence case, italic | *Marketing que escala* |
| Section labels (left side of section header) | Sentence case | "Paleta de Color", "Tipografía" |
| Section labels (right side, opposite the line) | **UPPERCASE letterspaced** (`0.18em`) | **DESIGN SYSTEM** |
| Eyebrows / tags above headlines | **UPPERCASE letterspaced** (`0.28em`), cyan | **QUDOX · 2026** |
| Body and lead | Sentence case | — |
| Button labels | Sentence case, **bold** | "Primario", "Hablemos" |
| Status / state pills | **UPPERCASE letterspaced**, **bold** | **SUCCESS**, **ATENCIÓN** |

The recurring **`label · ───────── · UPPERCASE`** section header is the most distinctive piece of the brand's verbal grammar. It's lifted straight from print identity manuals; reuse it any time you need to title a region.

### Tone examples

- ✅ *"Estrategias data-driven para hacer crecer marcas con consistencia y velocidad."* — declarative, three-virtue rhythm, agency-as-partner.
- ✅ *"Marketing que escala."* — three-word italic display headline; complete thought; no qualifiers.
- ✅ *"Hablemos."* — single-word CTA. Imperative, plural, peer-to-peer.
- ❌ *"¡Descubre el poder mágico del marketing! ✨"* — exclamation marks, "magic", emoji. Off-brand.
- ❌ *"Por favor, contáctenos para más información."* — overly formal, "usted" register. Off-brand.

### Emoji

**Never.** No emoji appear in the manual. Status, semantics, and emphasis are carried by **color, type weight, and the cyan dot/stripe vocabulary** instead.

### Numbers and units

Spanish convention: thousands with `.`, decimals with `,` (e.g. `12.480 sesiones`, `3,4× ROAS`). When mixing with English microcopy, fall back to `,` thousands.

---

## VISUAL FOUNDATIONS

### Surfaces and mode

Qudox defaults to **dark mode**. The cream `#F1F0EA` paper is reserved for **printed identity manual pages** and **logo lockups on light**; not for product UI. When you light-mode something, treat it as a manual page, not a website.

### Color

A deliberately **tight palette** — five colors total, two of them accents.

| Token | Hex | Role |
|---|---|---|
| `--qx-cyan` | `#00FFEF` | Primary accent — CTA fill, link, eyebrow, focus ring, success. |
| `--qx-yellow` | `#EAFF00` | Secondary accent — the gradient partner, attention/warn. |
| `--qx-dark` | `#2C2C2C` | Page surface. |
| `--qx-dark-soft` | `#5A5A5A` | Gradient stop, secondary surface. |
| `--qx-light` | `#F1F0EA` | Cream — manual paper, light lockups only. |

**The cyan/yellow pair is always presented as a left-to-right horizontal gradient** (`#00FFEF → #EAFF00`, 0% → 100%, 90deg). It is the brand's most recognizable visual signature. Use it on:
- The **2px top stripe** of cards.
- **Gradient-fill buttons** (sparingly — never more than one per view).
- **Pattern strokes** in the SVG footer pattern.
- Strict **gradient-text** runs on display type.

Never tilt the gradient, never reverse it, never substitute the stops.

### Typography

- **Display:** EmpowerSerif Italic 400 (proprietary, **self-hosted** — `fonts/EmpowerSerif.ttf`). The face is intrinsically italic and declared as such; always used italic. Drives hero headlines, card titles, and inline emphasis (e.g., the *Marketing* in *"Growth Marketing Company"*).
- **Body:** Manrope 400 / 500 / 700 (**self-hosted** variable font — `fonts/Manrope-VariableFont_wght.ttf`). Bold (700) carries subheads and button labels; Medium (500) is for labels and eyebrows; Regular (400) for body and lead.
- **Hierarchy is built from weight + casing + tracking, not from extra colors.** Eyebrows and labels are `text-transform: uppercase` with wide tracking (`0.14em`–`0.28em`); body is sentence case.
- Line height: `0.95` for display, `1.15` for headings, `1.5` for body. Tight tracking (`-0.02em`) on bold body headlines.

### Layout & spacing

- **Container max-width** `1280px`, side padding scales `32–48px`.
- **Spacing scale** is 4-pt based: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96`.
- Sections are separated by the `label · line · UPPERCASE` header, never by raw spacing alone.

### Backgrounds

- Default page: solid `--qx-dark`. Flat — no grid, no texture overlay.
- Hero: same surface, with extra vertical padding and the gradient pattern strip optionally docked at the bottom.
- **No photography. No textures. No noise. No blurred-blob gradients.** The brand's only "imagery" is its own arc/chevron/circle pattern.
- The signature pattern (`assets/pattern-strip.svg`) — concentric arcs left, the wordmark "O" centered, chevrons right — is the **only decorative element** allowed. It always uses the cyan→yellow gradient as stroke and sits at section bottoms or footers.

### Borders, radii, elevation

- **Borders** are the workhorse separator: `1px solid rgba(255,255,255,0.12)` on dark surfaces. Cards rely on this border + the gradient top stripe for definition.
- **Radii**: `4px` for buttons / inputs / tags, `8px` for cards / panels, `16px` for hero blocks, `pill` (`999px`) for status chips when used.
- **Shadows** are minimal. The dark-on-darker contrast already does the work. When elevation is needed: `0 8px 24px rgba(0,0,0,0.45)`.
- **No inner shadows.** No "soft UI" effects. The system is flat-with-borders.

### Animation

- **Subtle and brisk.** Default hover transition is `150–200ms ease`.
- Buttons lift **`-1px`** on hover (`transform: translateY(-1px)`). They do not scale.
- Color transitions are `200ms ease` for `background` and `color`.
- **No bounces, no springs, no parallax, no scroll-jacking.** Animation supports the content; never performs.

### Hover & press states

| Component | Hover | Press |
|---|---|---|
| Primary button (cyan) | Background flips to **yellow**; subject-line text stays dark. `translateY(-1px)`. | (Manual doesn't define; use `translateY(0)` and 90% brightness.) |
| Ghost button | Border + text turn **cyan**. | Reduce opacity to 0.9. |
| Gradient button | Slight `translateY(-1px)`; gradient unchanged. | Reduce opacity to 0.95. |
| Input | Border turns **cyan** on `:focus`. | — |
| Link / nav | Color shifts from `--qx-fg-2` to `--qx-cyan`. | — |
| Card | No hover styling defined; the system reads as static editorial. | — |

### Transparency & blur

- **Lines** use `rgba(255,255,255,0.12)` and `0.24` only. No other alpha values are sanctioned.
- **No backdrop-blur.** No glass-morphism. The brand is hard-edged and printed-feeling.
- **Protection around logos** uses negative space the size of the logo's x-height — never a translucent capsule.

### Imagery vibe (when added later)

If photography is introduced (future scope), it should be **cool, slightly desaturated, with high black-point**. Never warm, never grain-heavy, never saturated. Treat photos like the brand treats type — high contrast, low ornament.

---

## ICONOGRAPHY

The manual ships **no icon set**. Iconography is therefore a **deliberate addition** — flagged here as a substitution.

### Substitution

A small **Lucide-inspired stroke set** has been authored at `assets/icons/`. Style:
- **24×24** viewBox.
- **1.6px stroke**, `currentColor`.
- **Rounded line caps + joins.**
- **Outline only**, no fills.
- All icons inherit color, so use them as `color: var(--qx-cyan)` for accent or `color: currentColor` inline.

This stroke weight matches the **1.4–1.6px stroke** used in the brand's signature pattern (`pattern-strip.svg`) — so they read as part of the same visual family. **Flagged: when an official Qudox icon system arrives, swap this folder out.**

### CDN fallback

If you need a glyph not in `assets/icons/`, link **Lucide** (`https://unpkg.com/lucide@latest`) — same stroke weight, same line-cap convention, will sit cleanly next to the included icons.

### Emoji and unicode glyphs

- **Emoji are not used** anywhere in the brand. Don't introduce them.
- **Unicode bullets / dividers** (`·`, `—`, `→`) **are** used heavily — the middle-dot in particular separates section labels (e.g. *"Manual de Identidad · 2026"*). Treat them as part of the type system.

### Logos & marks

| File | Use |
|---|---|
| `assets/mark.svg` | Brand mark — the "O" of QUDOX with through-strokes. Square, monochrome gradient. Use at 32px+ for any clear-space lockup. |
| `assets/logo-wordmark-dark.svg` | Full wordmark for **light** surfaces. |
| `assets/logo-wordmark-light.svg` | Full wordmark for **dark** surfaces. |
| `assets/pattern-strip.svg` | The brand's only decorative artwork. Footer / section-end use only. |

---

## How to use

1. Pull `colors_and_type.css` into any HTML file: `<link rel="stylesheet" href="colors_and_type.css">`.
2. Build with the `--qx-*` custom properties; never hard-code hex.
3. For headings, prefer the `.qx-display`, `.qx-h1`–`.qx-h4`, `.qx-eyebrow`, `.qx-label` semantic classes.
4. For larger surfaces, lift the components from `ui_kits/agency-site/`.
5. Always title sections with the `label · line · UPPERCASE` header pattern.

---

## Open issues / asks for the brand owner

- **EmpowerSerif** and **Manrope** are now licensed/self-hosted in `fonts/` — no CDN dependency remains.
- **No icon system was provided.** A Lucide-style stroke set has been authored as a stand-in. Replace if a bespoke set exists.
- **No imagery / photography direction.** Documented as a future scope; the system currently uses only type, color, and the brand pattern.
