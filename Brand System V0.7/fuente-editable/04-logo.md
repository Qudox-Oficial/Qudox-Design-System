# Logo — Qudox

> Versiones del logo y reglas de uso, aplican a cualquier pieza de marca Qudox.

---

## Versiones del logo

- **Horizontal con descriptor** ("Growth Marketing Company") — la firma principal de la marca. Es la versión por defecto cuando no hay una razón específica para usar otra.
- **Horizontal sin descriptor** — el wordmark "QUDOX" solo, sin el texto de abajo. Uso secundario, cuando el descriptor no aporta o no entra.
- **Versión negativa (blanca)** — para usar sobre fondos oscuros.
- **Versión positiva (oscura)** — para usar sobre fondos claros.
- **Símbolo Q solo** — `[PENDIENTE, ver corrección 2026-07-08 más abajo]`. Todavía no existe como vector en el repositorio.

---

## ⚠️ Corrección (2026-07-08): el archivo "símbolo" estaba mal nombrado

Se verificó cada SVG real del repositorio contra su proporción documentada abajo. Resultado:

- Los archivos que vivían como `qudox-simbolo-blanco.svg` / `qudox-simbolo-oscuro.svg` **no son el símbolo Q aislado** — su proporción (5.65:1) y su contenido visual corresponden al **logo horizontal sin descriptor** (el wordmark "QUDOX" completo, sin "Growth Marketing Company" debajo). Confirmado renderizando el archivo.
- **El símbolo Q aislado no existe como vector en ningún lado del repositorio.** Hay que pedirlo a diseño — no generar una aproximación a partir de los demás archivos.
- Los archivos ya se renombraron en `logo/` a `qudox-logo-horizontal-sin-descriptor-blanco.svg` / `-oscuro.svg`. Ver `logo/README.md` para el detalle.

---

## Proporciones exactas (confirmado 2026-06-25)

> Útil para calcular el ancho a partir del alto (o viceversa) sin tener que medir el archivo cada vez — especialmente cuando se coloca el logo en un footer, portada, o cualquier pieza generada por código.

| Versión | Proporción (ancho : alto) |
| --- | --- |
| Horizontal con descriptor | **7.8 : 1** |
| Horizontal sin descriptor | 5.65 : 1 |
| Vertical con descriptor | 3.9 : 1 (centrado) |
| Símbolo Q solo | `[PENDIENTE — no existe el archivo todavía]` |

Esto coincide con los archivos reales: `qudox-logo-horizontal-*.svg` mide 1789×230px → 1789/230 ≈ 7.78, prácticamente igual a la proporción documentada (7.8:1). El archivo `qudox-logo-horizontal-sin-descriptor-*.svg` (antes mal nombrado "símbolo") mide 1598.73×282.78 → ≈5.65, coincide con "horizontal sin descriptor". Si en algún momento el archivo real y esta tabla no coinciden, confiar en el archivo real y avisar para corregir la tabla — no al revés.

## Reglas de uso

- **Área de respeto:** dejar un espacio libre alrededor del logo equivalente a la altura del símbolo Q, en los cuatro lados. No pegar texto, imágenes ni otros elementos dentro de esa área.
- **Tamaño mínimo:** 240px en desktop, 140px en mobile, 16px para favicon (solo símbolo Q). Por debajo de eso, el logo pierde legibilidad.
- **No deformar** (estirar, comprimir).
- **No rotar.**
- **No recolorear** fuera de las versiones oficiales (blanca, oscura).
- **No aplicar sombras, brillos ni efectos.**

---

## Cómo elegir la versión correcta

| Situación | Versión a usar |
| --- | --- |
| Fondo oscuro | Negativa (blanca) |
| Fondo claro | Positiva (oscura) |
| Espacio muy reducido | Símbolo Q solo |
| Cualquier otro caso | Horizontal con descriptor |

---

## Pendiente

`[PENDIENTE]`: posición típica del logo según superficie (ej. en presentaciones suele ir abajo-izquierda; en redes sociales puede ser distinto). Esto se define en cada archivo de superficie (`06-presentaciones.md`, `07-redes-sociales.md`), no aquí — aquí solo viven las reglas que no cambian sin importar dónde se use el logo.

`[RESUELTO]`: los archivos reales del logo (SVG, 6 versiones) ya están en `logo/`, con nombres corregidos desde 2026-07-08. Ver `logo/README.md` para el detalle de cada uno y la regla de prioridad (horizontal con descriptor es la versión por defecto).

`[PENDIENTE]`: el símbolo Q aislado — pedir a diseño (ver corrección arriba).

`[PENDIENTE]`: pedir también el patrón decorativo de triángulos como asset suelto (sin logo ni texto encima, en PNG transparente o SVG). Hoy solo existen versiones ya compuestas (portada completa, bandas de footer completas) en `surfaces-assets/presentaciones/` — no hay una pieza aislada y reutilizable del patrón en sí.
