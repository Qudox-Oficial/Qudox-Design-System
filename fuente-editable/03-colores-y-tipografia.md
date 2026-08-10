# Colores y Tipografía — Qudox

> Estos son los colores y las fuentes oficiales de la marca Qudox. Se usan siempre los mismos, sin importar si es una presentación, un post o cualquier otra pieza. Si necesitás un color o una fuente que no está aquí, no se inventa: se pregunta a Manu.

---

## Colores

### Verde — el color principal de la marca

Este es el color que representa a Qudox. Se usa en todo.

| Color | Código | Qué representa |
| --- | --- | --- |
| Verde Qudox | `#16B87A` | El verde institucional. Es el color que más identifica a la marca. |
| Verde brillante | `#38E08C` | Una variante más viva y enérgica del verde principal. |
| Verde-amarillo | `#B6E02A` | Un acento puntual, parte de la "textura" visual de la marca, no un color protagonista. |
| Verde-amarillo apagado | `#C5D83A` | Variante más suave del anterior. |

### Fondos oscuros

| Color | Código | Qué representa |
| --- | --- | --- |
| Negro-verde | `#0D1512` | El fondo oscuro principal de la marca (variante con patrón verde). |
| Gris oscuro neutro | `#2C2C2C` | Fondo de la variante oscura con líneas de color (ver `06-presentaciones.md`). No tiene el tinte verde de los demás oscuros — es un gris neutro a propósito. |
| Verde muy oscuro | `#06241B` | Variante más profunda, para momentos de mayor presencia de marca (aperturas, cierres). |
| Verde bosque | `#1F4035` | Tono intermedio, de apoyo. |
| Gris-verde oscuro | `#26322C` | Tono neutro oscuro, para separar o dar respiro. |

### Neutros (texto y fondos claros)

| Color | Código | Qué representa |
| --- | --- | --- |
| Texto principal | `#1F2937` | El color de texto por defecto sobre fondo claro. |
| Texto secundario | `#3A463F` | Para texto de menor jerarquía, sobre fondo claro. |
| Texto apagado | `#5D6B63` | Para texto de muy baja jerarquía (notas, detalles pequeños). |
| Blanco | `#FFFFFF` | Fondo claro principal, y color de texto sobre fondo oscuro. |
| Crema | `#E5E5DD` | Fondo alternativo, de uso puntual. |

### Colores reservados (todavía no se usan)

| Color | Código | Nota |
| --- | --- | --- |
| Cyan | `#00FFEF` | Acento de producto digital. **En presentaciones, su único uso permitido es como línea decorativa fina** — en el footer de `section-divider` o en la variante oscura con líneas (ver `06-presentaciones.md`). No usar como color de fondo, texto, ni protagonista en ninguna superficie. |
| Amarillo | `#EAFF00` | Mismo caso que el cyan — acento de producto digital, con la misma excepción puntual de líneas decorativas en la variante oscura de presentaciones. |

> **Nota de variación:** los archivos fuente de la variante oscura (Google Slides) usan `#01FFEF` y `#EFFF04` — visualmente idénticos a los de arriba, pero no el hex exacto. Se mantienen `#00FFEF` y `#EAFF00` como el valor oficial; si se vuelve a exportar el archivo fuente, ajustar al valor oficial.

---

> **Nota:** este archivo dice qué es cada color y qué representa — no dice exactamente en qué elemento de una pieza se usa (eso varía según el contexto). El detalle de "este color va en este elemento específico" vive en el archivo de cada superficie, por ejemplo `06-presentaciones.md`.

## Tipografía

Qudox usa solo dos fuentes. Nunca se mezclan con otras (no Arial, no Calibri, no Aptos).

### Newsreader (Semibold, siempre en cursiva/italic)
Es la fuente de los **títulos** — la que le da el carácter editorial a la marca. Se usa poco, reservada para los momentos de mayor impacto de una pieza. Nunca para texto largo.

### Manrope (regular, medium, bold, extra bold)
Es la fuente de **todo lo demás**: el cuerpo de cualquier texto, etiquetas, datos, detalles. Cubre la gran mayoría del contenido de cualquier pieza.

**Regla simple:** si dudás qué fuente usar, la respuesta casi siempre es Manrope. Newsreader es la excepción, reservada para momentos de impacto.

**Dónde están los archivos reales:** en la carpeta `fonts/` de este repo (`Newsreader-36pt-SemiBoldItalic.ttf`, `Newsreader-60pt-SemiBoldItalic.ttf`, y los 5 pesos de Manrope). Quien genere una pieza debe usar esos archivos exactos, no una versión descargada de otro lugar — así toda pieza de Qudox se ve igual, sin importar quién o qué la generó.

---

## Espaciado

Para que todo se sienta ordenado y con el mismo "aire" entre elementos, los espacios siempre son múltiplos de este patrón:

```
4 · 8 · 12 · 16 · 24 · 32 · 48 · 64
```

(En presentaciones esto se traduce a pulgadas; si en el futuro se trabaja para web, se traduce a píxeles — el patrón de proporción es el mismo.)

---

## Escala tipográfica general

`[PENDIENTE — no generalizar todavía]`: hoy solo existe una escala de tamaños validada para presentaciones (ver `06-presentaciones.md`, sección de escala tipográfica), pensada para un lienzo de 13.333" de ancho. No conviene copiar esos puntos fijos (ej. "H1 = 64pt") como regla general de marca, porque un lienzo más chico (ej. un post de redes) necesita tamaños proporcionalmente menores — un H1 de 64pt en un arte chico se vería roto.

La forma correcta de generalizar esto es como **proporciones relativas al Body** (ej. "H1 = 4× el Body"), no como puntos fijos — pero para confirmar esa proporción con confianza hace falta comparar al menos dos superficies reales (presentaciones + otra, ej. redes sociales). Con una sola superficie, cualquier proporción sería una suposición. Se completa esta sección cuando exista una segunda superficie real con la que comparar.
