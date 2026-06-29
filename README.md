# qudox-brand-system

Sistema de marca de Qudox: cómo se ve, cómo suena, y cómo se aplica en cada lugar donde aparece (presentaciones, redes sociales, producto digital). Pensado para que personas y agentes de IA generen piezas on-brand sin inventar.

**Empezá por:** [`00-qudox-brand-system.md`](./00-qudox-brand-system.md) — el mapa, explica qué hay en cada archivo.

## Estructura

```
00-qudox-brand-system.md      -> el mapa general
01-quienes-somos.md            -> propósito, audiencia, mensajes clave
02-voz-y-tono.md                -> cómo habla Qudox
03-colores-y-tipografia.md     -> colores y fuentes oficiales
04-logo.md                      -> versiones y reglas del logo
05-elementos-graficos.md        -> componentes reutilizables (callouts, patrón, etc.)
06-presentaciones.md            -> reglas específicas para armar decks (8 tipos de slide + variante oscura pausada)

fonts/              -> archivos reales de Newsreader y Manrope
logo/               -> archivos reales del logo, SVG + PNG con transparencia (6 versiones)
surfaces-assets/    -> assets visuales reales (portada, footers, patrones, bandas laterales)
```

## Estado

- ✅ Quiénes somos, voz y tono, colores y tipografía, elementos gráficos, logo (archivos reales): completos.
- ✅ Presentaciones — variante clara/verde: 8 tipos de slide validados (portada, índice, separador de sección, título+párrafo, content-2col, content-grid, datos/stat, cierre), todos con logo editable.
- ⏸️ Presentaciones — variante oscura con líneas (sección 9 de `06-presentaciones.md`): **pausada a propósito**, se retoma en un próximo update.
- 🟡 Redes sociales: pendiente de construir (no existe `07-redes-sociales.md` todavía).
- ⚪ Producto digital: sin definir, sin necesidad activa todavía (no hay app, web no se toca por ahora).

## Herramientas relacionadas

- **`qudox-pptx-qa.skill`** — Skill instalable que revisa un `.pptx` ya generado contra este design system (colores, fuentes, criterio) y devuelve qué corregir. Se entrega por separado, no vive en este repo.
- **Documento Word de proceso** — cómo instalar el sistema, cómo pedir una presentación, y cómo hacer QA manual. Documento aparte, no vive en este repo (es proceso de equipo, no contenido de marca).

## Dueño

Manu, responsable de marca. Cualquier cambio a estos archivos pasa por su aprobación — incluyendo cambios al zip oficial, que solo se actualizan con confirmación explícita, no automáticamente después de una prueba.

## Origen

Construido sobre el trabajo original de Mariano (presentaciones) y el esqueleto de arquitectura propuesto por Eduardo, reorganizado en archivos numerados para que sea más simple de navegar. Varios assets y técnicas (footer con logo editable, patrón de líneas, layouts adicionales) se incorporaron después a partir de una plantilla nueva del diseñador, validados contra el archivo real antes de documentarse.
