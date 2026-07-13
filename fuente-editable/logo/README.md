# Archivos de logo — Qudox

Archivos reales en SVG, ya disponibles. 6 versiones:

| Archivo | Uso |
| --- | --- |
| `qudox-logo-horizontal-oscuro.svg` | Versión principal (con descriptor), para fondos claros. **Prioritaria.** |
| `qudox-logo-horizontal-blanco.svg` | Versión principal (con descriptor), para fondos oscuros. **Prioritaria.** |
| `qudox-logo-vertical-oscuro.svg` | Versión vertical, para fondos claros. Uso secundario (espacios verticales). |
| `qudox-logo-vertical-blanco.svg` | Versión vertical, para fondos oscuros. Uso secundario. |
| `qudox-logo-horizontal-sin-descriptor-oscuro.svg` | Wordmark "QUDOX" sin el descriptor, para fondos claros. Uso secundario. |
| `qudox-logo-horizontal-sin-descriptor-blanco.svg` | Wordmark "QUDOX" sin el descriptor, para fondos oscuros. Uso secundario. |

> **Corrección 2026-07-08:** estos dos últimos archivos vivían antes como `qudox-simbolo-oscuro.svg` / `qudox-simbolo-blanco.svg`, nombrados como si fueran el símbolo Q aislado. Se verificó la proporción real (5.65:1) y el contenido visual contra `04-logo.md`: son el logo horizontal sin descriptor, no el símbolo Q. Se renombraron para reflejar lo que son de verdad.
>
> **El símbolo Q aislado no existe todavía como vector en este repositorio.** Hay que encargarlo a diseño — no usar ninguno de los archivos existentes como reemplazo aproximado.

**Regla de prioridad:** los horizontales con descriptor son la versión por defecto. Las verticales y el horizontal sin descriptor se usan cuando el logo principal no entra en el espacio disponible. El símbolo Q (pendiente) será para espacios muy reducidos (avatares, favicons) una vez que exista.

**Formatos disponibles:** cada versión está en `.svg` (vectorial, preferido) y `.png` (verificado con transparencia real — útil para herramientas que no soportan SVG directo). Si necesitás convertir el SVG vos mismo, usá un conversor que preserve canal alfa (ej. `sharp`) — algunos conversores aplanan el SVG sobre fondo blanco opaco.
