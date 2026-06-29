# Qudox · Agency-site UI Kit

A pixel-faithful recreation of the Qudox marketing surface, built only from primitives that appear in the **Manual de Identidad Qudox 2026**. No invented components.

## What's here

| File | Role |
|---|---|
| `index.html` | Interactive click-through. Includes nav, hero, services, case studies, contact, footer, and a working contact form. |
| `primitives.jsx` | `<SectionHeader>`, `<Button>`, `<Field>`, `<Tag>`, `<PatternStrip>` |
| `TopNav.jsx` | Sticky nav with wordmark + links + primary CTA + mobile drawer |
| `Hero.jsx` | Eyebrow + italic display headline + lead + primary/ghost CTAs |
| `Services.jsx` | Three-up card grid with gradient top-stripe cards |
| `CaseStudies.jsx` | Editorial row of case-study previews with stat callouts |
| `ContactSection.jsx` | Two-column layout: editorial copy + contact form |
| `Footer.jsx` | Wordmark + nav + manual-style footer rule + pattern strip |

## Primitives in use

All token references go through `colors_and_type.css` (custom properties). No hex codes are duplicated in component code.

- `--qx-cyan`, `--qx-yellow`, `--qx-dark`, `--qx-light`, plus `--qx-grad-primary` for accents.
- `var(--qx-font-display)` (italic) for hero + card titles; `var(--qx-font-body)` everywhere else.
- The `label · line · UPPERCASE` section header is the same `<SectionHeader>` used across every section.

## How to read this

Open `index.html`. The interactive demo lets you:
- Toggle the mobile menu (resize window or trigger directly).
- Hover buttons (cyan → yellow on primary; cyan border + text on ghost).
- Tab through the contact form (cyan focus ring on inputs).
- Submit the contact form (success state appears inline; reset returns to the form).

## What's deliberately not invented

The brand manual does not include: navigation, footers, services grids, or case-study layouts in finished form. They've been **assembled from the manual's existing components** — the same buttons, cards, inputs, type, and section header — without inventing new visual mechanics. Anything that looked off-brand in our judgment was left out (no large photography, no hero illustrations, no soft-UI shadows).
