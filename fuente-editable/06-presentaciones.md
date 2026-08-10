# 06 — Presentaciones — Qudox

> Reglas específicas para armar presentaciones (PPTX) de Qudox. Si vas a generar un deck, leé esto completo y respetalo al pie de la letra. Si algo no está aquí ni en los archivos base, no lo inventes: preguntá.

> **Esta superficie hereda de:**
> - `01-quienes-somos.md` — qué entregamos, a quién le hablamos
> - `02-voz-y-tono.md` — cómo suena el texto de cualquier slide
> - `03-colores-y-tipografia.md` — paleta y fuentes
> - `04-logo.md` — versiones y reglas del logo
> - `05-elementos-graficos.md` — callouts, eyebrows, patrón decorativo, números de sección, color de títulos
>
> Lo que sigue es específico de presentaciones — no se repite lo que ya vive en esos archivos.

---

## 1. Color aplicado a presentaciones

Las presentaciones usan el sistema verde (`03-colores-y-tipografia.md`). Cyan y amarillo no se usan, salvo la única excepción de la variante oscura con líneas (sección 9).

- **Slides claras (mayoría del deck):** fondo blanco, texto principal oscuro, acentos en verde institucional.
- **Slides oscuras (portadas, separadores, cierres):** fondo oscuro, texto principal blanco, acentos en verde brillante.
- **Proporción típica por slide:** 60–70% fondo y estructura, 20–25% texto, 10–15% acento verde.
- **Rojos / colores externos:** solo cuando el cliente o el dato lo exige (ej. benchmark de competidores). Nunca como acento institucional propio.

---

## 2. Escala tipográfica (puntos)

| Rol | Familia | Tamaño |
| --- | --- | --- |
| Título de portada | Newsreader SemiBold Italic | 88–96 pt |
| Título de separador de sección | Newsreader SemiBold Italic | 60–72 pt |
| Número de sección (01, 02…) | Newsreader SemiBold Italic | 54–60 pt |
| Título principal de slide de contenido | Newsreader SemiBold Italic | 37–44 pt |
| Slide de cierre / frase de impacto | Newsreader SemiBold Italic | 40–54 pt |
| Subtítulo grande de body | Manrope Bold | 24–30 pt |
| Subtítulo / item de índice | Manrope Bold | 20–24 pt |
| Body | Manrope Regular | 17–19 pt |
| Eyebrow / overline (MAYÚSCULAS) | Manrope Bold | 12–14 pt, tracking 0.12em |
| Labels de tablas / captions | Manrope Bold | 13–16 pt |
| Caption / nota al pie | Manrope Regular | 11–13 pt |

**Reglas adicionales:**
- Dentro de un título en cursiva, una palabra puede ir en redonda (sin cursiva) para crear énfasis sin cambiar de peso. Usar con criterio, no en cada slide.
- Italic en Manrope está prohibido para texto largo — para énfasis, usar Manrope Bold o cambiar a Newsreader Italic puntualmente.

---

## 3. Anatomía de slides — tipos canónicos

Cualquier deck de Qudox se compone de combinaciones de estos tipos (9 en total, incluyendo las dos variantes agregadas después del repo original de Mariano).

### 3.1 `cover` — Portada
Fondo oscuro con textura/patrón decorativo (`05-elementos-graficos.md`). Logo blanco centrado en el tercio superior. Título grande (88–96pt) blanco, centrado. Subtítulo blanco debajo, 2–3 líneas máx.

### 3.2 `toc` — Índice
Fondo blanco. Eyebrow superior izquierda. Título principal debajo. Lista numerada en grid de 2 columnas (3 máx.): número de sección + línea divisoria + título del ítem + descripción breve. Footer con logo + banda de patrón.

### 3.3 `section-divider` — Separador de sección

**`[ACTIVO — PROVISIONAL, pendiente de versión final de diseño]` (actualizado 2026-08)**

Fondo oscuro (`#0D1512`). Banda lateral vertical con textura verde sobre el borde izquierdo. Número de sección grande (verde brillante `#38E08C`). Título de la sección debajo, blanco. Subtítulo blanco, 1–2 líneas. Logo horizontal (versión blanca) en la esquina superior derecha.

**Composición y medidas** (en slide de 13.333" × 7.5", extraídas de la pieza de referencia aprobada por Manu):
- **Banda lateral:** asset `banda-lateral-verde-divider.jpg`, en `x=0`, ancho **0.95"**, alto completo **7.5"**. El ancho de 0.95" es provisional — el diseñador puede ajustarlo en la versión final.
- **Número de sección** (ej. "01"): Newsreader SemiBold Italic, ~60pt, verde brillante `#38E08C`. Posición aprox. `x=1.53"`, `y=2.15"`.
- **Título** (ej. "El problema"): Newsreader SemiBold Italic, ~72pt, blanco. Posición aprox. `x=1.53"`, `y=3.15"`.
- **Subtítulo:** Manrope, ~20pt, blanco. Posición aprox. `x=1.58"`, `y=4.75"`.
- **Logo horizontal blanco** en la esquina superior derecha, como objeto editable e independiente (no aplanado). Alto ~0.20", posición aprox. `x=11.20"`, `y=0.55"`.

**Estado provisional:** esta versión es oficial y se usa mientras el diseñador entrega la versión final (prevista para las próximas semanas). Las medidas exactas (ancho de banda, tamaños) pueden ajustarse. El asset `banda-lateral-verde-divider.jpg` es un recorte/compresión provisional del patrón; la versión final idealmente será un asset diseñado a la proporción correcta (~8:1).

> **`[REEMPLAZADO como divider — 2026-08]`** La versión anterior de este separador usaba el patrón de líneas finas `patron-lineas-decorativas-oscura.png` en el tercio inferior. **Ya no se usa como separador de sección** — reemplazada por la versión de banda lateral de arriba. El asset `patron-lineas-decorativas-oscura.png` NO se elimina: se mantiene en la variante oscura con líneas (sección 9, pausada), donde conserva su rol original. Solo cambió su uso como divider.

### 3.3b `section-divider-centrado` — Separador centrado (confirmado 2026-06-25)

Segundo estilo de separador, más minimalista que el 3.3 — sin número de sección, sin footer, todo centrado:

- **Fondo:** verde oscuro tradicional `#0D1512` (el mismo de 3.3, no el gris de la sección 9).
- **Eyebrow:** centrado horizontalmente, Manrope Bold, ~13pt, color verde brillante (`#38E08C`), mayúsculas con tracking amplio (~3pt).
- **Título:** centrado horizontalmente, **Manrope ExtraBold (no Newsreader, no cursiva)** — distinto al 3.3, que sí usa Newsreader italic. ~54pt, blanco.
- **Sin logo ni footer** — deliberadamente minimalista, para transiciones simples (una palabra o frase corta).

**Cuándo usar cada uno:** 3.3 (con número + footer) para separadores con más contexto narrativo; 3.3b (centrado, minimalista) para transiciones rápidas de una palabra.

**Relación con `data-callout` (3.6):** comparten el patrón "eyebrow + elemento grande centrado sobre fondo oscuro", pero no son el mismo componente — `data-callout` muestra un **número/dato en verde brillante** con caption, mientras que `section-divider-centrado` muestra una **palabra o frase en blanco**, sin caption.

### 3.4 `content-2col` — Contenido principal (texto + imagen)
Fondo blanco. Header con eyebrow + título + línea divisoria verde. Columna izquierda (~55%): sub-eyebrow, headline, body, callout opcional. Columna derecha (~40%): imagen con esquinas redondeadas. Footer con logo + banda de patrón.

### 3.5 `content-grid` — Grid de comparación
Header igual a `content-2col`. Grid de 3–4 columnas, cada una con título de columna, sub-labels en mayúsculas, body breve.

### 3.6 `data-callout` — Stat / dato destacado
Eyebrow pequeño. Número o dato grande en acento verde. Caption debajo. Acompañado de gráfico si aplica.

### 3.7 `closing` — Cierre / frase de impacto
Fondo oscuro con patrón decorativo. Frase central única, grande, blanca, centrada (esta frase es específica de cada proyecto/deck — ej. "Movilidad con respaldo experto"). Eyebrow opcional debajo (nombre de fase + secciones cubiertas). Logo al pie.

**Obligatorio — confirmado por Manu (2026-06-25):** la frase *"Together, we power growth."* debe aparecer siempre en este slide, sin excepción, sea cual sea la frase central del proyecto. Se coloca como una línea adicional, más pequeña, cerca del logo (no reemplaza la frase central específica del deck — convive con ella).

### 3.8 `title-paragraph-simple` — Título y párrafo simple
> Confirmado por Manu (2026-06-24), extraído del XML real de la plantilla del diseñador.

Fondo blanco. Versión simplificada de `content-2col`, sin columnas ni imagen — solo texto.

- **Título:** Newsreader SemiBold Italic, ~27.5pt, color de texto principal (`#1F2937`, no verde). Posición: x≈0.57", y≈0.69" (en slide de 13.333").
- **Párrafo:** Manrope Regular, ~16.3pt, color de texto principal. Posición: x≈0.65", y≈1.63".
- **Footer:** igual que `content-2col` — usar `footer-listo-para-logo.png` + logo encima (ver sección 12.1).

**Cuándo usar este tipo en vez de `content-2col`:** cuando el contenido es solo texto explicativo, sin necesidad de imagen ni columna lateral — por ejemplo, una transición o una nota breve dentro de una sección.

---

## 4. Estructura típica de un deck

1. `cover` — Portada con título y subtítulo del proyecto.
2. `toc` — Índice.
3. `section-divider` — Número + nombre de la primera sección.
4. `content-2col` × N — Slides de esa sección.
5. (Repetir 3–4 para cada sección.)
6. `closing` — Frase de cierre conectada a crecimiento (ver `02-voz-y-tono.md`).

**Regla de oro:** cada sección comienza con un `section-divider` numerado.

---

## 5. Principios de slide (no negociables)

1. Una idea fuerte por slide.
2. Títulos claros y contundentes, nunca frases vacías.
3. Máximo 4–6 líneas de body por columna.
4. Máximo 3–5 datos por slide.
5. Patrón decorativo con intención: footer en slides claras de contenido, atmósfera en portada/cierre, nada más.
6. Contraste alto: si dudás si se lee, no se lee.
7. Ritmo dark → light → dark a lo largo del deck.
8. El cierre siempre conecta con el propósito de Qudox (`01-quienes-somos.md`).

---

## 6. Especificaciones técnicas para generar el archivo PPTX

- **Dimensiones:** slide widescreen 16:9, 13.333" × 7.5".
- **Fuentes a referenciar:** `Newsreader SemiBold` (italic = true) y `Manrope`. Los archivos están en `/fonts`.
- **Márgenes:** 0.5" mínimo en cada lado.
- **Banda de footer con patrón:** últimos 0.7–1.0" verticales del slide.
- **Espaciado:** header→contenido 0.5", entre columnas 0.35", entre bloques 0.3".

---

## 7. Checklist antes de entregar un deck

- [ ] ¿La portada usa título grande + patrón decorativo + logo?
- [ ] ¿Hay un índice limpio con números de sección?
- [ ] ¿Cada sección empieza con un separador numerado?
- [ ] ¿Los slides claros de contenido tienen banda de patrón en el footer?
- [ ] ¿Cada título usa Newsreader Italic y cada body usa Manrope?
- [ ] ¿El título respeta la regla de color (`05-elementos-graficos.md`, sección 6)?
- [ ] ¿El cierre conecta con el propósito de Qudox?
- [ ] ¿La slide de cierre incluye "Together, we power growth."? (obligatorio, sin excepción)
- [ ] ¿Hay ritmo entre slides claras y oscuras?
- [ ] ¿Cero uso de cyan/amarillo, salvo que sea la variante oscura con líneas (sección 9) y solo en las líneas decorativas? ¿Cero fuentes fuera del sistema?
- [ ] ¿Todo el texto (títulos, párrafos, datos) es texto editable, nunca incrustado en una imagen?
- [ ] ¿El logo está en cada slide?
- [ ] ¿El texto respeta `02-voz-y-tono.md`?

---

## 9. Variante oscura con líneas (estilo alternativo)

> `[PAUSADO — se retoma en un próximo update]`. Esta sección queda documentada con lo ya confirmado (fondo, colores permitidos, divisor, regla del título), pero el catálogo completo de tipos de slide para esta variante (título solo, franja lateral, etc.) se construye más adelante, no ahora.
>
> **Para reactivar esto:** (1) conseguir el archivo real (.pptx o imágenes) de cada slide nueva — no alcanza con una descripción, hay que verificar specs reales (posición, color, rotación) contra el archivo, igual que se hizo con el footer y el separador de sección de la variante clara; (2) construir y mostrar una prueba antes de documentar nada como regla; (3) recién con eso confirmado, completar esta sección y actualizar el zip oficial con aprobación explícita de Manu.
>
> Ya hay dos assets explorados guardados en `surfaces-assets/presentaciones/` listos para retomar: `banda-footer-fondo-oscuro.png` (footer oscuro original de Mariano) y `franja-vertical-lineas-oscura.png` (franja lateral de líneas, usada en el test de "título solo" que se pausó). No están documentados como regla todavía — son punto de partida, no algo confirmado.

> Estilo alternativo confirmado por el diseñador, distinto a la variante con patrón de triángulos verdes. **Se usa solo cuando el pedido es explícitamente una presentación oscura, premium, sobria o ejecutiva** — nunca por defecto. Si no se especifica, se usa la variante tradicional (fondo claro / patrón verde) de las secciones 1 a 8.

### 9.1 Fondo

Gris oscuro neutro `#2C2C2C` (no el negro-verde `#0D1512` de la variante tradicional — es un gris sin tinte de marca, a propósito).

### 9.2 El elemento decorativo: líneas finas, no patrón sólido

En vez del patrón de triángulos y texturas, esta variante usa **líneas finas geométricas** (arcos, chevrons, diagonales) dispersas en los bordes superior e inferior del slide, tipo "sunburst". El asset suelto está en `patron-lineas-decorativas-oscura.png` (fondo transparente, solo las líneas).

> **Este asset no es exclusivo de esta variante** — el mismo archivo (usando solo su tercio inferior) es también el footer real y confirmado de `section-divider` (sección 3.3), que vive dentro de la variante tradicional/clara. Coincide con la descripción original de Mariano de "líneas finas... solo en slides oscuras", que aplica en general a cualquier slide de fondo oscuro, no solo a esta variante.

**Colores permitidos en estas líneas — excepción real a la regla general de cyan/amarillo:**
- Cyan `#00FFEF`
- Amarillo `#EAFF00`
- Blanco / gris claro, como tercer tono de apoyo

Esta es la única situación documentada en todo el sistema donde cyan y amarillo se usan en una presentación. No se extiende a ningún otro elemento (no fondos, no texto, no callouts).

### 9.3 Título y subtítulo

Mismo criterio que la variante tradicional: el título va en blanco (texto normal), nunca en color de acento. Cuando hay un eyebrow tipo "Subtítulo" arriba del título, va en blanco y negrita (Manrope Bold), no en verde.

### 9.4 Divisor bajo el título

Una línea divisoria horizontal partida en dos colores: la primera mitad en amarillo, la segunda mitad en cyan. Es el único lugar donde estos dos colores aparecen juntos de forma intencional como firma visual de esta variante.

### 9.5 Logo

Igual que la variante tradicional — versión blanca del logo, abajo a la izquierda.

---

## 10. Layout de banda lateral (variante clara)

Además del footer horizontal (sección 4), existe un layout alternativo donde el patrón verde ocupa una **banda vertical en el lado izquierdo** del slide (full height), en vez de una banda horizontal en el footer. El título y el contenido se acomodan en el espacio restante a la derecha.

Assets de referencia: `banda-lateral-patron-verde-1.png`, `banda-lateral-patron-verde-2.png`.

**Cuándo usar este layout vs. el de footer horizontal:** no está definido todavía — por ahora, usar el de footer horizontal (secciones 1-8) como default, y el lateral como alternativa válida si el contenido se beneficia de más espacio vertical para el título (ej. títulos largos de 2 líneas).

---

## 11. Tabla resumen de layouts y componentes

| Elemento | Tipo de asset | Uso | Regla |
| --- | --- | --- | --- |
| `fondo-portada.jpg` | Imagen de referencia compuesta | Ejemplo completo de portada (patrón verde tradicional) | Usar como referencia visual, no editar directo |
| `banda-footer-fondo-claro.png` | Componente compuesto (logo + patrón, ya integrado) | **Confirmado como correcto por Manu (2026-06-24).** Footer de slides de contenido: usar la imagen completa, estirada al ancho total del slide (13.333") a su proporción natural (~0.946" de alto). | No recortar, no separar el logo, no repetir. Una sola pieza. |
| `footer-listo-para-logo.png` | Fondo pre-combinado, listo para usar | **Asset oficial para footer con logo editable.** Ya incluye el recorte correcto, el parche de textura y el oscurecido — solo hace falta agregar el logo encima. | No reconstruir las capas manualmente si este archivo ya existe. |
| `banda-footer-claro-nueva.png`, `parche-textura-logo.png` | Piezas fuente (sin combinar) | Solo para reconstruir `footer-listo-para-logo.png` si cambia el asset original del diseñador. | No usar directamente en un deck — son los ingredientes, no el resultado final. |
| `banda-lateral-patron-verde-1/2.png` | Componente de patrón suelto | Banda lateral vertical (layout alternativo, sección 10) | Sin logo ni texto — el logo se agrega encima por separado |
| `patron-lineas-decorativas-oscura.png` | Componente de patrón suelto, transparente | Líneas decorativas de la variante oscura (sección 9) | Solo sobre fondo `#2C2C2C`. Colores cyan/amarillo permitidos únicamente en este asset |
| Logo (`logo/*.svg`) | Asset independiente | Se coloca encima de cualquier fondo o banda | Nunca incrustado dentro de una imagen de fondo nueva — usar el SVG real |
| Placeholders ("Título", "Subtítulo", "Párrafo") | Guía de composición | Indican posición y jerarquía en una plantilla de referencia | Nunca se copian literal a un deck final — se reemplazan por contenido real y editable, nunca incrustado como imagen |

`[PENDIENTE — verificar con Manu, hallazgo 2026-07-08]`: existen dos bandas de footer para fondo claro conviviendo en el repo (`banda-footer-fondo-claro.png`, la versión todo-en-uno confirmada arriba, y `banda-footer-claro-nueva.png`, listada como pieza fuente para reconstruir `footer-listo-para-logo.png`). La tabla de arriba ya asigna un uso distinto a cada una, pero no queda documentado por qué conviven dos assets con nombre tan parecido ni si `banda-footer-claro-nueva.png` reemplaza a `banda-footer-fondo-claro.png` a futuro. Confirmar si alguna debería retirarse del repo para evitar que alguien use la incorrecta por error.

`[PENDIENTE — verificar con Manu, hallazgo 2026-07-08]`: de los 10 archivos en `surfaces-assets/presentaciones/`, revisar que ninguno haya quedado fuera de esta tabla a medida que el sistema crece. Al 2026-07-08, los 10 están cubiertos (8 con regla activa, 2 exploratorios en sección 9).

---

## 12. Texto siempre editable

Ningún título, subtítulo, párrafo, número, fecha o nombre de cliente va incrustado dentro de una imagen. Todo el contenido textual de un deck final debe ser texto editable en el archivo `.pptx` — los placeholders de las plantillas de referencia indican dónde y con qué jerarquía va ese texto, pero el texto real siempre se agrega como texto, nunca "quemado" en un PNG o JPG de fondo.

## 12.1 Sobre el logo y el footer — confirmado por Manu (2026-06-24)

**Para presentaciones donde el logo debe quedar editable por separado**, usar `footer-listo-para-logo.png` como fondo — es un único archivo que ya combina las 3 capas de fondo necesarias (banda principal recortada correctamente + parche de textura + oscurecido para contraste). Solo se necesitan **2 elementos**, no 4:

1. **`footer-listo-para-logo.png`** como fondo del footer.
2. **El logo** (versión blanca), encima.

**Medidas de referencia** (en un slide de 13.333" de ancho):
- Footer: ancho 12.77" (95.8% del slide, no llega al borde derecho — así es el diseño original), alto ~0.92".
- Logo: alto ~0.32", posicionado a 0.5" del borde izquierdo, centrado verticalmente dentro del footer.

`[CONFIRMADO]`: validado visualmente por Manu contra el render real de la plantilla del diseñador (slide8) — coincide. El asset pre-combinado produce el mismo resultado exacto que armar las capas por separado, pero sin riesgo de que una IA las combine mal (orden incorrecto, medidas distintas, etc.).

**Cómo se construyó `footer-listo-para-logo.png`** (por si hay que rehacerlo con un asset nuevo del diseñador): banda principal recortada 4.14% desde la izquierda + parche de textura (fragmento rotado -90° de la banda lateral) pegado en la zona del logo + rectángulo negro al 22% de opacidad encima de esa zona, todo aplanado en un solo PNG.

`[PENDIENTE]`: documentar el mismo asset pre-combinado para la variante de fondo oscuro y para el layout de banda lateral (sección 10), si también necesitan logo editable.

## 12.2 Cómo obtener los assets de portada y footers (2026-07-08)

Estos archivos son arte de marca real (texturas fotográficas y patrones compuestos) y **no se generan**: se descargan de su URL oficial al momento de armar la presentación. Viven en un repositorio público separado, solo de assets visuales (sin texto de marca ni estrategia): `Qudox-Oficial/qudox-visual-assets`.

- **Portada y cierre** (`fondo-portada.jpg`):
  `https://raw.githubusercontent.com/Qudox-Oficial/qudox-visual-assets/main/surfaces-assets/presentaciones/fondo-portada.jpg`

- **Footer con logo editable** (`footer-listo-para-logo.png`, ver sección 12.1):
  `https://raw.githubusercontent.com/Qudox-Oficial/qudox-visual-assets/main/surfaces-assets/presentaciones/footer-listo-para-logo.png`

- **Footer todo-en-uno, sin logo editable** (`banda-footer-fondo-claro.png`):
  `https://raw.githubusercontent.com/Qudox-Oficial/qudox-visual-assets/main/surfaces-assets/presentaciones/banda-footer-fondo-claro.png`

- **Banda lateral del `section-divider`** (`banda-lateral-verde-divider.jpg`, ver sección 3.3):
  `https://raw.githubusercontent.com/Qudox-Oficial/qudox-visual-assets/main/surfaces-assets/presentaciones/banda-lateral-verde-divider.jpg`

- **Banda lateral, layout alternativo** (sección 10):
  `https://raw.githubusercontent.com/Qudox-Oficial/qudox-visual-assets/main/surfaces-assets/presentaciones/banda-lateral-patron-verde-1.png`
  `https://raw.githubusercontent.com/Qudox-Oficial/qudox-visual-assets/main/surfaces-assets/presentaciones/banda-lateral-patron-verde-2.png`

- **Patrón de líneas** (`patron-lineas-decorativas-oscura.png`) — `[REEMPLAZADO como divider]`. Ya no se usa como footer de `section-divider` (ver sección 3.3). Se mantiene disponible solo para la variante oscura con líneas (sección 9, pausada):
  `https://raw.githubusercontent.com/Qudox-Oficial/qudox-visual-assets/main/surfaces-assets/presentaciones/patron-lineas-decorativas-oscura.png`

Descargá el archivo correspondiente e insertalo según las medidas ya documentadas (sección 12.1 para footers, sección 3.1 para portada). **Si la descarga falla, avisá explícitamente — no improvises un reemplazo ni generes el deck sin portada/footer en silencio.**

Los assets pausados de la variante oscura (`banda-footer-fondo-oscuro.png`, `franja-vertical-lineas-oscura.png`) y las piezas fuente (`banda-footer-claro-nueva.png`, `parche-textura-logo.png`) también están en ese repositorio, pero no tienen URL oficial de uso todavía — no son parte de esta lista a propósito.

---

## 13. Fuente y mantenimiento

**Fuente y mantenimiento:** decks de referencia *MOTOCITY — Fase 2 (Believe It)* y *Katana — Benchmark Línea Gráfica*, más la plantilla de referencia con variante oscura y layouts de banda lateral (2026-06-24).

`[PENDIENTE — verificar con Mariano]`: confirmar si estos dos decks siguen siendo los ejemplos más representativos, o si hay decks más recientes que deberían reemplazarlos como referencia.
