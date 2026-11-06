# Qudox Design System — versión Claude

> ⚠️ **Este archivo es para Claude.** Si estás configurando ChatGPT, no uses este — usá `QUDOX-DESIGN-SYSTEM-CHATGPT.md`. Este archivo usa URLs externas que ChatGPT no puede descargar.

**Versión:** 0.7 (consolidado en archivo único, actualizado 2026-07-08)
**Reemplaza a:** `00` a `06` + carpeta `logo/` (SVG), para uso en Claude Proyectos y herramientas de IA equivalentes.
**Responsable:** Manu.
**Uso:** cargá este archivo único al Proyecto de IA que estés configurando. No hace falta ningún otro archivo del repositorio para generar piezas de texto o presentaciones on-brand — el logo ya está embebido (sección 4), y la portada/footers se descargan automáticamente desde un repositorio público de assets visuales (sección 6.12.2). Fuentes siguen aparte (ver sección 0.4.1).

---

## Qudox Brand System

> Este documento es el mapa: explica qué hay en este sistema, qué cubre y dónde encontrar cada cosa. No define colores, tono ni reglas en sí mismo — eso vive en los archivos que se listan más abajo. No es solo un design system (lo visual) — cubre la marca completa: quiénes somos, cómo hablamos, y cómo nos vemos.

---

### 1. Qué es esto

Esta es la fuente oficial de la marca Qudox: cómo se ve, cómo suena y cómo se aplica en cada lugar donde aparece (presentaciones, redes sociales, y eventualmente web/app). Sirve para que cualquier persona del equipo — o una IA generando una pieza — sepa exactamente qué usar, sin inventar ni adivinar.

Si algo no está definido aquí ni en ninguno de los archivos del sistema, no se improvisa: se pregunta a Manu.

---

### 2. Alcance

Este sistema es **solo para la marca Qudox.**

- **Hype** y **State of Digital** son marcas propias de la casa, con su propia identidad. Tienen (o tendrán) su propio sistema, separado de este.
- Este sistema no aplica a piezas de clientes — esas siguen la marca de cada cliente, no la de Qudox.

---

### 3. Cómo está organizado

La idea central es simple: **hay una base, y todo lo demás se construye sobre esa base.**

- Primero está lo que define a Qudox sin importar dónde aparezca: los colores, la tipografía, cómo habla, quién es.
- Después está cómo se aplica esa base en cada lugar específico: presentaciones, redes sociales, producto digital.

Ningún lugar específico (una presentación, un post) inventa su propio color o su propio tono — siempre usa lo que ya está definido en la base. Así, sin importar dónde se vea una pieza de Qudox, se siente como la misma marca.

---

### 4. Índice de este documento

Este es un único archivo. Antes vivía como 7 archivos separados (`00` a `06`); desde 2026-07 se consolidó en uno solo para que cargarlo a un Proyecto de IA sea un único paso, sin fragmentar el sistema en modo de búsqueda. Ver sección 0.4.1 para el detalle de qué cambió.

**La base de la marca (no cambia según dónde se use):**

| Sección | Qué encontrás ahí |
| --- | --- |
| 1 — Quiénes somos | Propósito, qué hacemos, a quién le hablamos, mensajes clave |
| 2 — Voz y tono | Cómo habla Qudox: personalidad, qué decimos y qué no |
| 3 — Colores y tipografía | Los colores oficiales y las fuentes de la marca, con cómo se usan |
| 4 — Logo | Versiones del logo (vector real embebido) y reglas de uso |
| 5 — Elementos gráficos | Piezas visuales reutilizables: callouts, patrones, números de sección |

**Cómo se aplica esa base en cada lugar:**

| Sección | Qué encontrás ahí |
| --- | --- |
| 6 — Presentaciones | Reglas específicas para armar decks / PPT, incluye URLs de descarga de portada y footers |
| *(pendiente)* | Redes sociales — reglas para posts, historias, carruseles *(no existe todavía)* |
| *(pendiente)* | Producto digital — reglas para web/app *(sin necesidad activa todavía)* |

#### 0.4.1 Qué cambió al consolidar (última actualización 2026-07-08)

Este archivo reemplaza a los 7 archivos separados más la carpeta `logo/` en formato SVG, para el uso de Claude Proyectos y herramientas de IA similares. Motivo: el conector de GitHub estaba contando cada archivo del repo (fuentes, PNG, SVG por separado) contra el límite de capacidad del Proyecto, aunque el peso real en texto fuera mínimo — esto disparaba el modo de búsqueda (RAG) antes de lo necesario, fragmentando las reglas de marca en vez de tenerlas todas presentes a la vez.

**Qué vive acá adentro:** las 6 secciones de contenido, el vector real del logo (sección 4), y las URLs de descarga de los assets fotográficos de portada/footers (sección 6.12.2) — apuntan a `fuente-editable/surfaces-assets/` de este mismo repositorio (`Qudox-Oficial/Qudox-Design-System`).

**Qué se queda afuera de este archivo, y por qué:**
- **Fuentes (`.ttf`):** no hacen falta para generar una pieza (el texto sale como texto real, no renderizado). Solo las necesita un humano para abrir el `.pptx` final en PowerPoint — quedan en `fuente-editable/fonts/` del repositorio para descarga.
- **Los archivos de imagen en sí** (portada, footers): no se pueden convertir a texto sin perder calidad (son textura fotográfica, no geometría) — se descargan en el momento desde el repositorio, según la sección 6.12.2. No hace falta adjuntarlos manualmente al chat.
- **PNG del logo en alta resolución:** solo para imprenta y uso humano directo, no hacen falta para generar piezas.

Los archivos numerados (`00` a `06`) siguen existiendo en `fuente-editable/` del repositorio como fuente editable de cada sección; este archivo único se arma juntándolos. Cualquier corrección de contenido se hace en el archivo separado correspondiente y después se vuelve a consolidar.

---

### 5. Qué está listo y qué falta

- [x] Quiénes somos — propósito, diferenciadores y audiencia listos. Falta confirmar mensajes clave adicionales.
- [x] Voz y tono — listo, aplica a toda la marca.
- [x] Colores y tipografía — listos.
- [x] Logo — reglas y archivos reales listos.
- [x] Elementos gráficos — listo.
- [x] Presentaciones — completo.
- [ ] Redes sociales — pendiente, hay uso real hoy.
- [ ] Producto digital — sin definir, no hay urgencia (no existe app, web no se toca por ahora).

---

### 6. Quién mantiene esto

**Manu** es quien aprueba cualquier cambio a la base (colores, tono, mensaje). Las superficies (presentaciones, redes, digital) pueden sugerir ajustes prácticos, pero la decisión final siempre pasa por ahí.

Este documento es vivo: se actualiza a medida que el sistema crece, no es un archivo que se entrega una vez y se olvida.

---

## Quiénes Somos — Qudox

> Propósito, audiencia y mensajes clave de la marca. Esto define **a quién le hablamos y qué les decimos** — el "qué". Cómo lo decimos (tono, palabras) vive en sección 2 (Voz y tono).

---

### 1.1 Qué entregamos

**Qudox** — Growth Marketing Company AI First.

Ecosistemas de crecimiento que conectan estrategia, creatividad, data, medios, tecnología e IA.

**Tagline de cierre:** *Together, we power growth.*

---

### 1.1.1 Por qué existimos

Qudox existe para que las empresas crezcan de forma sostenible, no improvisada. Nos convertimos en aliados estratégicos de marcas de distintos rubros, combinando metodología propia, transparencia y tecnología para que cada decisión de crecimiento tenga fundamento, no solo intuición.

---

### 1.1.2 Qué nos hace diferentes

- **Equipo multidisciplinario**, no especialistas aislados trabajando por separado.
- **Entregables claros y medibles**, no promesas vagas ni reportes de vanidad.
- **Metodología que parte de conocer la marca a fondo** — negocio, público objetivo, presupuesto — antes de proponer cualquier solución, en vez de aplicar una fórmula genérica a cualquier cliente.
- **IA integrada en cómo trabajamos**, no como discurso de moda: la usamos para potenciar la estrategia, acelerar la ejecución y sostener decisiones con más data, no para reemplazar el criterio del equipo.

> Esto conecta directo con el tono de marca (sección 2 (Voz y tono)): "consultivos y accionables", "seguros y fundamentados" — no es casualidad, es la misma idea reflejada en cómo hablamos y en cómo trabajamos.

---

### 1.2 A quién le hablamos

Qudox le habla a **empresas ya establecidas** que buscan resultados medibles, tienen presupuesto de marketing asignado, y quieren escalar el negocio con un plan estratégico — no a emprendedores o startups en etapa inicial buscando validar una idea.

Dentro de esas empresas establecidas, hay dos audiencias, y **no pesan igual** — la comunicación debe reflejar esta proporción, no tratarlas como equivalentes.

#### 80% — Responsable de Marketing (audiencia principal)

**Quién es:** Brand Manager, Marketing Manager, Coordinador de Marketing, Trade Marketing. 25-40 años, nivel socioeconómico medio-alto, en todo el país.

**Cómo es:** organizada, orientada a resultados, responsable de varias iniciativas a la vez. Busca soluciones prácticas que faciliten su gestión y generen impacto visible.

**Qué la mueve:** ejecutar campañas exitosas, cumplir KPIs, encontrar proveedores confiables, destacar dentro de su organización.

**Qué le preocupa:** no alcanzar metas, falta de apoyo estratégico, procesos lentos, dificultad para demostrar resultados a sus superiores.

**Qué espera de un partner:** un equipo que simplifique su trabajo, le aporte soluciones, y le dé herramientas/formatos nuevos que pueda usar para destacar.

**Mensaje que mejor le resuena:**
> Convierte cada campaña en una oportunidad de crecimiento con un partner que combina estrategia, creatividad y resultados medibles.

#### 20% — Tomador de decisión (audiencia secundaria, casos específicos)

**Quién es:** CEO, Director General, Gerente General, CMO, Director Comercial, Founder. 40-55 años, nivel socioeconómico medio alto-alto.

**Cómo es:** orientado a resultados, estratégico, enfocado en crecimiento del negocio. Busca aliados que le ayuden a tomar mejores decisiones, no proveedores que solo ejecuten.

**Qué lo mueve:** escalar el negocio, decisiones basadas en datos, encontrar aliados estratégicos (no operativos), mejorar rentabilidad.

**Qué le preocupa:** invertir en marketing sin resultados claros, decisiones basadas en intuición en vez de datos, trabajar con agencias que ejecutan pero no aportan estrategia.

**Qué espera de un partner:** visión estratégica real, confianza basada en experiencia comprobada y casos reales, impacto que vaya más allá de métricas de marketing.

**Mensaje que mejor le resuena:**
> Tu crecimiento no debería depender de la intuición. Convierte datos, estrategia y ejecución en decisiones que generen resultados medibles.

---

### 1.3 Qué significa el 80/20 en la práctica

- La mayoría de las piezas (posts, propuestas estándar, comunicación recurrente) deben hablarle al **Responsable de Marketing**: practicidad, resultados que pueda mostrar a sus jefes, herramientas que le faciliten el día a día.
- Las piezas dirigidas a **Tomadores de decisión** son más puntuales (ej. una propuesta directa a un CEO, contenido de posicionamiento estratégico) y deben hablar en términos de negocio y crecimiento, no de táctica de campaña.
- Si hay duda sobre a quién le habla una pieza y no se especifica, default al Responsable de Marketing — es la audiencia mayoritaria.

---

### 1.4 Mensajes clave generales (ambas audiencias)

> Las mejores decisiones de crecimiento se toman con estrategia, datos y ejecución.

> **Together, we power growth.** — confirmado por Manu (2026-06-25) como mensaje clave obligatorio. **Debe aparecer siempre en la slide de cierre (contraportada) de cualquier presentación de Qudox**, sin excepción — ver sección 6.3.7 (`closing`), dentro de sección 6 (Presentaciones).

---

## Voz y Tono — Qudox

> Así habla Qudox, sin importar dónde: presentaciones, redes sociales, conversaciones de venta. Confirmado por Manu como aplicable a toda la marca, no solo a los decks (donde se documentó originalmente).

---

### Cómo suena Qudox

Qudox habla con **claridad estratégica, seguridad corporativa, sensibilidad creativa y visión tecnológica.** Suena experto sin sonar rígido, cercano sin sonar informal.

---

### Lo que sí decimos / lo que no decimos

| ✅ Sí | ❌ No |
| --- | --- |
| Estratégicos y orientados a negocio | Genéricos o decorativos |
| Claros y estructurados | Confusos o improvisados |
| Creativos con propósito | Creativos solo por estética |
| Tecnológicos y AI First | Técnicos sin bajarlo a valor |
| Consultivos y accionables | Teóricos sin aplicación |
| Seguros y fundamentados | Prometedores sin sustento |

---

### Palabras que sí son "de Qudox"

Crecimiento · Ecosistema · Sistema · Estrategia · Performance · Data · Brandformance · Creatividad · Tecnología · IA · Medios · Optimización · Insights · Conversión · Medición · Escala · Mejora continua.

---

### Frases que evitamos siempre

❌ "Agencia 360"
❌ "Hacemos de todo"
❌ "Contenido bonito"
❌ "Viralizar" usado como garantía
❌ "Resultados garantizados"
❌ "Disruptivo" sin explicar en qué
❌ Lenguaje técnico que no se conecta con un beneficio de negocio

---

### Ejemplos: así no / así sí

❌ Genérico: "Somos una agencia que hace de todo para tu marca."
✅ Qudox: "Conectamos estrategia, data y creatividad en un solo ecosistema de crecimiento."

❌ Vacío: "Creamos contenido disruptivo que va a viralizar."
✅ Qudox: "Diseñamos piezas con un propósito claro de negocio, medibles desde el día uno."

❌ Técnico sin valor: "Implementamos modelos de IA generativa multimodal."
✅ Qudox: "Usamos IA para que las decisiones de marketing se tomen más rápido y con mejor data."

❌ Prometedor sin sustento: "Garantizamos resultados desde el primer mes."
✅ Qudox: "Medimos cada etapa del proceso para que el crecimiento sea visible, no una promesa."

---

### ¿El tono cambia según dónde se publique?

La personalidad de marca (lo de arriba) **no cambia.** Lo que puede variar es qué tan formal o relajado es el "registro" según el contexto — por ejemplo, una propuesta a cliente probablemente es más formal que un post de LinkedIn. Pero ambos siguen usando las mismas palabras de marca y evitando las mismas frases vacías.

**Pendiente de definir:** el registro exacto para redes sociales (¿qué tan informal puede sonar un post vs. una propuesta?). Esto se resuelve cuando se construya `07-redes-sociales.md`.

---

## Colores y Tipografía — Qudox

> Estos son los colores y las fuentes oficiales de la marca Qudox. Se usan siempre los mismos, sin importar si es una presentación, un post o cualquier otra pieza. Si necesitás un color o una fuente que no está aquí, no se inventa: se pregunta a Manu.

---

### Colores

#### Verde — el color principal de la marca

Este es el color que representa a Qudox. Se usa en todo.

| Color | Código | Qué representa |
| --- | --- | --- |
| Verde Qudox | `#16B87A` | El verde institucional. Es el color que más identifica a la marca. |
| Verde brillante | `#38E08C` | Una variante más viva y enérgica del verde principal. |
| Verde-amarillo | `#B6E02A` | Un acento puntual, parte de la "textura" visual de la marca, no un color protagonista. |
| Verde-amarillo apagado | `#C5D83A` | Variante más suave del anterior. |

#### Fondos oscuros

| Color | Código | Qué representa |
| --- | --- | --- |
| Negro-verde | `#0D1512` | El fondo oscuro principal de la marca (variante con patrón verde). |
| Gris oscuro neutro | `#2C2C2C` | Fondo de la variante oscura con líneas de color (ver sección 6 (Presentaciones)). No tiene el tinte verde de los demás oscuros — es un gris neutro a propósito. |
| Verde muy oscuro | `#06241B` | Variante más profunda, para momentos de mayor presencia de marca (aperturas, cierres). |
| Verde bosque | `#1F4035` | Tono intermedio, de apoyo. |
| Gris-verde oscuro | `#26322C` | Tono neutro oscuro, para separar o dar respiro. |

#### Neutros (texto y fondos claros)

| Color | Código | Qué representa |
| --- | --- | --- |
| Texto principal | `#1F2937` | El color de texto por defecto sobre fondo claro. |
| Texto secundario | `#3A463F` | Para texto de menor jerarquía, sobre fondo claro. |
| Texto apagado | `#5D6B63` | Para texto de muy baja jerarquía (notas, detalles pequeños). |
| Blanco | `#FFFFFF` | Fondo claro principal, y color de texto sobre fondo oscuro. |
| Crema | `#E5E5DD` | Fondo alternativo, de uso puntual. |

#### Colores reservados (todavía no se usan)

| Color | Código | Nota |
| --- | --- | --- |
| Cyan | `#00FFEF` | Acento de producto digital. **En presentaciones, su único uso permitido es como línea decorativa fina** — en el footer de `section-divider` o en la variante oscura con líneas (ver sección 6 (Presentaciones)). No usar como color de fondo, texto, ni protagonista en ninguna superficie. |
| Amarillo | `#EAFF00` | Mismo caso que el cyan — acento de producto digital, con la misma excepción puntual de líneas decorativas en la variante oscura de presentaciones. |

> **Nota de variación:** los archivos fuente de la variante oscura (Google Slides) usan `#01FFEF` y `#EFFF04` — visualmente idénticos a los de arriba, pero no el hex exacto. Se mantienen `#00FFEF` y `#EAFF00` como el valor oficial; si se vuelve a exportar el archivo fuente, ajustar al valor oficial.

---

> **Nota:** este archivo dice qué es cada color y qué representa — no dice exactamente en qué elemento de una pieza se usa (eso varía según el contexto). El detalle de "este color va en este elemento específico" vive en el archivo de cada superficie, por ejemplo sección 6 (Presentaciones).

### Tipografía

Qudox usa solo dos fuentes. Nunca se mezclan con otras (no Arial, no Calibri, no Aptos).

#### Newsreader (Semibold, siempre en cursiva/italic)
Es la fuente de los **títulos** — la que le da el carácter editorial a la marca. Se usa poco, reservada para los momentos de mayor impacto de una pieza. Nunca para texto largo.

#### Manrope (regular, medium, bold, extra bold)
Es la fuente de **todo lo demás**: el cuerpo de cualquier texto, etiquetas, datos, detalles. Cubre la gran mayoría del contenido de cualquier pieza.

**Regla simple:** si dudás qué fuente usar, la respuesta casi siempre es Manrope. Newsreader es la excepción, reservada para momentos de impacto.

**Dónde están los archivos reales:** en la carpeta `fonts/` de este repo (`Newsreader-36pt-SemiBoldItalic.ttf`, `Newsreader-60pt-SemiBoldItalic.ttf`, y los 5 pesos de Manrope). Quien genere una pieza debe usar esos archivos exactos, no una versión descargada de otro lugar — así toda pieza de Qudox se ve igual, sin importar quién o qué la generó.

---

### Espaciado

Para que todo se sienta ordenado y con el mismo "aire" entre elementos, los espacios siempre son múltiplos de este patrón:

```
4 · 8 · 12 · 16 · 24 · 32 · 48 · 64
```

(En presentaciones esto se traduce a pulgadas; si en el futuro se trabaja para web, se traduce a píxeles — el patrón de proporción es el mismo.)

---

### Escala tipográfica general

`[PENDIENTE — no generalizar todavía]`: hoy solo existe una escala de tamaños validada para presentaciones (ver sección 6.2 (Escala tipográfica), dentro de sección 6 (Presentaciones)), pensada para un lienzo de 13.333" de ancho. No conviene copiar esos puntos fijos (ej. "H1 = 64pt") como regla general de marca, porque un lienzo más chico (ej. un post de redes) necesita tamaños proporcionalmente menores — un H1 de 64pt en un arte chico se vería roto.

La forma correcta de generalizar esto es como **proporciones relativas al Body** (ej. "H1 = 4× el Body"), no como puntos fijos — pero para confirmar esa proporción con confianza hace falta comparar al menos dos superficies reales (presentaciones + otra, ej. redes sociales). Con una sola superficie, cualquier proporción sería una suposición. Se completa esta sección cuando exista una segunda superficie real con la que comparar.

---

## Logo — Qudox

> Versiones del logo y reglas de uso, aplican a cualquier pieza de marca Qudox.

---

### Versiones del logo

- **Horizontal con descriptor** ("Growth Marketing Company") — la firma principal de la marca. Es la versión por defecto cuando no hay una razón específica para usar otra.
- **Horizontal sin descriptor** — el wordmark "QUDOX" solo, sin el texto de abajo. Uso secundario, cuando el descriptor no aporta o no entra.
- **Vertical con descriptor** — para espacios verticales donde el horizontal no entra.
- **Versión negativa (blanca)** — para usar sobre fondos oscuros.
- **Versión positiva (oscura)** — para usar sobre fondos claros.
- **Símbolo Q solo** — `[PENDIENTE, ver corrección 2026-07-08 abajo]`. Todavía no existe como vector.

---

### ⚠️ Corrección (2026-07-08): el archivo "símbolo" estaba mal nombrado

Al consolidar este documento se verificó cada SVG real contra su proporción documentada. Resultado:

- El archivo que el repo tenía nombrado `qudox-simbolo-*.svg` **no es el símbolo Q aislado** — su proporción (5.65:1) y su contenido visual corresponden al **logo horizontal sin descriptor** (el wordmark "QUDOX" completo, sin el texto "Growth Marketing Company" debajo). Confirmado visualmente renderizando el archivo.
- **El símbolo Q aislado (para avatares, favicons, espacios muy reducidos) no existe como vector en ningún lado del repo.** Hay que pedirlo a diseño — no se puede generar una aproximación confiable a partir de los demás archivos sin inventar geometría que no está definida.
- Los archivos ya se renombraron en `logo/` a `qudox-logo-horizontal-sin-descriptor-blanco.svg` / `-oscuro.svg`, tanto en el repositorio privado como en el público (`qudox-visual-assets`).

---

### Proporciones exactas (confirmado 2026-06-25, corregido 2026-07-08)

> Útil para calcular el ancho a partir del alto (o viceversa) sin tener que medir el archivo cada vez.

| Versión | Proporción (ancho : alto) |
| --- | --- |
| Horizontal con descriptor | **7.8 : 1** |
| Horizontal sin descriptor | 5.65 : 1 |
| Vertical con descriptor | 3.9 : 1 (centrado) |
| Símbolo Q solo | `[PENDIENTE — no existe el archivo todavía]` |

Verificado contra los archivos reales: el horizontal con descriptor mide 1788.17 × 229.43 (viewBox) → 1788.17/229.43 ≈ 7.80, coincide exacto. El vertical mide 1598.73 × 412.17 → ≈ 3.88, coincide. El que decía "símbolo" mide 1598.73 × 282.78 → ≈ 5.65, coincide con "horizontal sin descriptor" — no con el símbolo Q, confirmando la corrección de arriba.

---

### El vector real, embebido

Blanco y oscuro son la **misma geometría**, solo cambia el color de relleno (`fill`). Para usar la versión oscura, cambiá `fill="#fff"` por `fill="#0D1512"` (o `#1F2937`, según contraste) en el bloque `<style>` de cada uno.

**Logo horizontal con descriptor** (versión por defecto):

```svg
<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1788.17 229.43">
  <defs>
    <style>
      .cls-1 {
        fill: #fff;
      }
    </style>
  </defs>
  <g>
    <path class="cls-1" d="M97.04.22C39.91.22,0,38.84,0,94.14,0,142.21,30.02,177.68,75.24,186.27v-40.79c-19.6-7.63-31.42-26.13-31.42-51.34,0-33.53,20.8-55.19,52.98-55.19s53.69,21.66,53.69,55.19-18.49,53.56-49.67,55.07h-3.15c-5.14-.03-7.88,6.04-4.48,9.89l61.39,69.47c1.54,1.74,4.41.65,4.41-1.67v-43.15c0-3.31-1.23-6.51-3.44-8.97l-1.91-2.13c25.31-16.26,40.68-44.16,40.68-78.51C194.32,38.84,154.32.22,97.04.22Z"/>
    <path class="cls-1" d="M652.67.32h-53.13c-8.12,0-14.69,6.58-14.69,14.69v171.69h67.82c62.9,0,96.56-34.43,96.56-93.19S715.58.32,652.67.32ZM653.71,145.8h-22.26V51.3c0-5.57,4.51-10.08,10.08-10.08h12.18c29.77,0,47.37,16.57,47.37,52.29s-16.83,52.29-47.37,52.29Z"/>
    <g>
      <path class="cls-1" d="M357.38,110.86V1.95h-45.27v106.39c0,49.68,26.78,75.53,72.77,78.01v-40.74c-19.08-2.38-27.5-14.36-27.5-34.75Z"/>
      <path class="cls-1" d="M427.81,110.86c0,21.54-9.59,33.72-31.26,35.08l30.34,35.7c29.54-9.67,46.19-33.71,46.19-73.29V1.95h-45.27v108.91Z"/>
    </g>
    <polygon class="cls-1" points="1169.59 .15 1111.63 .15 1167.72 88.33 1193.86 45.92 1169.59 .15"/>
    <path class="cls-1" d="M1027.37,91.41c-.02-.71-.02-1.43-.05-2.13C1025.32,36.77,988.66.45,936.74.21v37.25c28.1.34,50.98,23.41,50.98,51.59v9.8c0,28.38-23.22,51.6-51.6,51.6h0c-28.38,0-51.6-23.22-51.6-51.6v-9.8c0-20.44,12.05-38.2,29.39-46.54l-25.13-30.33c-24.05,13.7-39.96,38.32-43.29,69.34,0,.09-.02.17-.03.26-.12,1.16-.23,2.33-.31,3.51-.03.45-.06.9-.09,1.36-.06.95-.12,1.9-.15,2.85-.04,1.12-.06,2.24-.07,3.37,0,.33-.02.65-.02.98,0,.03,0,.07,0,.1,0,.04,0,.07,0,.11,0,.82.04,1.62.05,2.42.02.71.02,1.43.05,2.13,2.01,52.68,38.9,89.08,91.1,89.08s85.55-32.86,90.74-81.31c0-.09.02-.17.03-.26.12-1.16.23-2.33.31-3.51.03-.45.06-.9.09-1.36.06-.95.12-1.9.15-2.85.04-1.12.06-2.24.07-3.37,0-.33.02-.65.02-.98,0-.03,0-.07,0-.1,0-.04,0-.07,0-.11,0-.82-.04-1.62-.05-2.42Z"/>
    <polygon class="cls-1" points="1123.58 187.65 1170.49 187.65 1287.78 0 1236.17 0 1118.89 187.65 1123.58 187.65"/>
    <polygon class="cls-1" points="1239.11 187.65 1297.07 187.65 1240.98 99.47 1214.84 141.88 1239.11 187.65"/>
  </g>
  <rect class="cls-1" x="1361.61" y="1.57" width="2.6" height="185.98"/>
  <g>
    <g>
      <path class="cls-1" d="M1458.4,53.51c-3.25,0-6.3-.58-9.15-1.73-2.85-1.15-5.35-2.84-7.5-5.07-2.15-2.23-3.83-4.97-5.04-8.21-1.21-3.24-1.81-6.96-1.81-11.14,0-5.48,1.02-10.17,3.07-14.07,2.04-3.89,4.85-6.88,8.4-8.96,3.56-2.08,7.56-3.12,12.03-3.12,6.18,0,11.08,1.44,14.69,4.31,3.61,2.87,6.06,6.9,7.34,12.08l-8.58,1.36c-.95-2.97-2.51-5.35-4.67-7.13-2.16-1.78-4.92-2.67-8.26-2.67-3.37-.05-6.17.69-8.4,2.2-2.23,1.51-3.91,3.64-5.04,6.38-1.13,2.74-1.69,5.95-1.69,9.62s.56,6.86,1.67,9.57c1.12,2.71,2.79,4.82,5.04,6.33,2.24,1.51,5.05,2.29,8.42,2.34,2.53.02,4.75-.44,6.66-1.38,1.91-.94,3.46-2.37,4.67-4.29,1.21-1.92,2.02-4.32,2.44-7.2h-8.85v-6.59h17.78c.05.37.08.92.1,1.64.02.72.03,1.15.03,1.29,0,4.74-.94,8.95-2.81,12.64-1.87,3.68-4.55,6.57-8.04,8.66-3.49,2.09-7.66,3.14-12.51,3.14Z"/>
      <path class="cls-1" d="M1488.72,52.46V14.81h7.43v9.17l-.91-1.19c.46-1.25,1.09-2.4,1.87-3.43.78-1.03,1.71-1.89,2.81-2.56.93-.63,1.96-1.12,3.09-1.48,1.13-.36,2.28-.58,3.47-.66,1.19-.08,2.34-.03,3.45.16v7.84c-1.12-.33-2.4-.43-3.85-.31-1.45.12-2.76.52-3.92,1.22-1.16.63-2.11,1.43-2.84,2.41-.73.98-1.27,2.09-1.62,3.33-.35,1.24-.52,2.59-.52,4.03v19.14h-8.44Z"/>
      <path class="cls-1" d="M1532.47,53.51c-3.76,0-7.05-.85-9.87-2.55-2.81-1.7-4.99-4.04-6.54-7.02-1.55-2.99-2.32-6.42-2.32-10.3s.79-7.41,2.37-10.39c1.58-2.97,3.78-5.3,6.59-6.97,2.81-1.67,6.07-2.51,9.76-2.51s7.09.85,9.9,2.54c2.81,1.7,5,4.04,6.55,7.02,1.56,2.99,2.34,6.42,2.34,10.3s-.78,7.35-2.35,10.34c-1.57,2.99-3.76,5.32-6.57,7.01-2.81,1.68-6.1,2.53-9.87,2.53ZM1532.47,45.63c3.35,0,5.83-1.12,7.46-3.35,1.63-2.23,2.44-5.11,2.44-8.65s-.83-6.56-2.48-8.73c-1.65-2.17-4.13-3.26-7.43-3.26-2.25,0-4.11.51-5.56,1.52-1.45,1.01-2.53,2.42-3.22,4.22-.7,1.8-1.05,3.89-1.05,6.26,0,3.65.83,6.56,2.49,8.73,1.66,2.17,4.11,3.26,7.34,3.26Z"/>
      <path class="cls-1" d="M1565.56,52.46l-11.5-37.72,8.23.07,7.36,24.16,7.46-24.16h7.08l7.43,24.16,7.39-24.16h8.23l-11.5,37.65h-6.55l-8.54-25.9-8.51,25.9h-6.55Z"/>
      <path class="cls-1" d="M1609.31,21.4v-6.59h26.25v6.59h-26.25ZM1635.56,52.46c-2.49.46-4.92.67-7.3.61-2.38-.06-4.51-.5-6.4-1.32s-3.31-2.13-4.29-3.92c-.86-1.63-1.31-3.29-1.36-4.98-.05-1.7-.07-3.61-.07-5.75V4.36h8.37v32.25c0,1.51.02,2.84.05,3.97.03,1.14.27,2.07.71,2.79.84,1.39,2.17,2.17,4.01,2.34,1.84.16,3.93.07,6.28-.28v7.04Z"/>
      <path class="cls-1" d="M1643.61,52.46V2.26h7.5v26.42h1.01v23.78h-8.51ZM1669.72,52.46v-18.13c0-1.19-.08-2.5-.24-3.94-.16-1.44-.54-2.83-1.13-4.17-.59-1.34-1.48-2.43-2.65-3.29-1.17-.86-2.76-1.29-4.76-1.29-1.07,0-2.13.17-3.17.52s-1.99.95-2.84,1.8c-.85.85-1.53,2.01-2.04,3.49-.51,1.48-.77,3.36-.77,5.66l-4.99-2.13c0-3.21.62-6.11,1.87-8.72,1.24-2.6,3.07-4.68,5.49-6.22,2.42-1.55,5.39-2.32,8.92-2.32,2.79,0,5.09.47,6.9,1.39,1.81.93,3.25,2.12,4.32,3.56,1.07,1.44,1.86,2.98,2.37,4.6.51,1.63.84,3.17.99,4.62.15,1.45.23,2.63.23,3.54v21.02h-8.51Z"/>
    </g>
    <g>
      <path class="cls-1" d="M1452.39,79.27l-10.88,29.91c-1.39,3.84-.35,4.88,4.95,5.09l-1.19,3.56h-17.01l1.12-3.56c4.81-.21,6.34-1.39,7.67-5.16l11.71-31.58c1.26-3.42.49-4.74-4.25-5.02l1.12-3.49h14.57l2.86,37.16,25.31-37.16h15.83l-1.19,3.49c-4.67.28-6.48,1.32-7.67,5.16l-9.27,31.51c-1.12,3.7-.42,4.88,4.25,5.09l-1.12,3.56h-20.85l1.12-3.56c5.16-.21,6.69-1.53,7.81-5.23l8.72-29.35-26.49,38.98h-4.18l-2.93-39.39Z"/>
      <path class="cls-1" d="M1527.9,110.71c0,.77.35,1.05.98,1.05,1.74,0,4.04-2.16,6.48-5.02l2.37,1.88c-3.97,5.72-10.95,9.97-15.2,9.97-2.16,0-3.63-1.32-3.63-3.35,0-1.32.56-3.07,1.88-5.93l6.83-14.92h-1.32c-9.48,17.5-16.52,24.47-22.52,24.47-4.32,0-7.25-3.49-7.25-9.27,0-13.25,15.2-29.42,28.87-29.42,1.95,0,3.63.35,5.09.91l1.12-2.51h8.23l-11.3,29.91c-.42,1.05-.63,1.81-.63,2.23ZM1507.05,112.52c3.07,0,8.58-5.65,14.22-14.57,2.44-3.77,5.3-8.79,6.41-11.43-1.05-1.81-2.65-2.72-4.74-2.72-7.95,0-18.48,13.6-18.48,24.05,0,3,.84,4.67,2.58,4.67Z"/>
      <path class="cls-1" d="M1552.23,87.07c0-.7-.42-1.05-1.05-1.05-1.26,0-3.9,1.88-6.55,5.02l-2.37-1.88c4.04-5.72,11.16-9.97,15.76-9.97,2.16,0,3.56.98,3.56,3.07,0,1.46-.56,3.35-2.09,6.48l-7.32,14.71h1.26c4.67-8.65,7.74-13.94,11.23-17.99,3.56-4.04,6.83-6.34,10.18-6.34,3.7,0,5.65,2.51,5.65,5.09s-1.81,5.23-4.74,5.23c-1.95,0-2.72-.84-3.63-1.67-.84-.7-1.19-1.19-2.23-1.19-1.32,0-2.93,1.05-5.02,3.49-4.74,5.58-9.48,14.85-11.85,19.59l-4.11,8.16h-8.85l11.57-28.59c.42-1.05.63-1.74.63-2.16Z"/>
      <path class="cls-1" d="M1586.81,77.17c0-1.6-1.26-2.3-4.04-2.58l1.19-3.28,11.36-3.76h2.93l-6.69,17.85c-2.58,6.83-4.74,11.64-7.25,18.06h1.39c3.9-8.92,7.88-15.41,13.67-19.87,3.77-3,7.95-4.46,11.57-4.46,4.32,0,6.9,2.3,6.9,5.72,0,5.37-6.76,10.88-18.62,14.78.56,3.69,1.32,6.41,2.16,8.51,1.33,3.28,2.51,4.53,4.18,4.53,1.46,0,2.79-.84,4.95-3.97l2.51,1.6c-3.42,6-6.07,8.58-9.83,8.58-4.04,0-6.34-2.23-8.3-7.53-.84-2.37-1.81-5.58-2.58-9.69l-3.49.77-1.39,3.28-4.67,12.13h-9.06l12.69-38.49c.35-1.05.42-1.81.42-2.16ZM1602.5,95.02c3.97-2.16,6.28-4.95,6.28-7.25,0-1.81-1.12-2.72-3-2.72-5.16,0-10.95,5.37-15.62,14.5,4.88-1.12,8.92-2.72,12.34-4.53Z"/>
      <path class="cls-1" d="M1618.19,105.34c0-7.67,3.56-14.71,8.65-19.59,4.25-4.25,9.76-6.62,15.06-6.62s9.27,2.65,9.27,6.9c0,3.35-2.37,7.53-7.32,10.39-3.97,2.37-9.9,4.25-17.64,4.6l-.07,1.88c0,5.79,2.51,8.79,6.83,8.79,3.42,0,6.83-2.16,10.04-8.3l3.28.84c-3.7,9.76-10.04,14.64-16.38,14.64-7.04,0-11.71-5.23-11.71-13.53ZM1631.23,97.11c6.69,0,12.41-5.86,12.41-10.95,0-2.02-1.19-3.42-3.49-3.42-3.14,0-6.76,2.37-9.34,5.86-1.67,2.3-2.93,4.95-3.7,7.6,1.32.7,2.72.91,4.11.91Z"/>
      <path class="cls-1" d="M1651.65,115.45c0-1.19.35-2.58,1.12-4.46l10.46-25.87h-7.25l1.19-3.63c6.41-1.95,11.43-5.37,15.34-9.9h3.63l-3.42,8.58h11.99l-1.53,4.95h-12.41l-9.41,23.5c-.42.98-.56,1.81-.56,2.09,0,.77.42,1.12,1.12,1.12,2.02,0,6.55-3.76,10.95-8.78l2.44,2.09c-5.37,6.69-14.08,13.74-19.87,13.74-2.72,0-3.77-1.39-3.77-3.42Z"/>
      <path class="cls-1" d="M1680.73,115.73c0-1.25.28-2.79,1.05-4.6l8.99-21.75c.49-1.05.63-1.81.63-2.3s-.28-.98-.91-.98c-1.6,0-4.04,2.09-6.41,4.95l-2.3-1.95c3.56-5.23,10.53-9.9,15.13-9.9,2.37,0,3.76,1.19,3.76,3.07,0,1.19-.42,2.72-1.19,4.6l-8.99,21.82c-.35.84-.63,1.6-.63,2.23s.35.98.91.98c1.74,0,4.11-2.09,6.48-4.88l2.37,1.88c-3.63,5.23-10.6,9.97-15.13,9.97-2.44,0-3.76-1.26-3.76-3.14ZM1694.18,70.55c0-3,2.44-5.37,5.58-5.37s5.51,2.3,5.51,5.37c0,3.28-2.37,5.65-5.51,5.65s-5.58-2.37-5.58-5.65Z"/>
      <path class="cls-1" d="M1726.33,115.66c0-1.12.35-2.65,1.12-4.46l7.53-18.34c.63-1.53.98-2.79.98-3.9,0-1.53-.63-2.65-2.16-2.65s-3.35,1.12-5.72,3.97c-5.02,5.93-10.11,14.99-12.34,19.38l-4.11,8.16h-8.44l10.6-28.73c.28-.84.49-1.6.49-2.09,0-.7-.35-.98-.91-.98-1.46,0-4.25,2.02-6.83,5.02l-2.23-1.88c4.04-5.72,11.23-9.97,15.76-9.97,2.09,0,3.49.98,3.49,3.07,0,1.46-.63,3.35-2.02,6.55l-6.62,14.64h1.25c2.79-4.95,7.11-12.76,11.92-17.99,3.63-4.04,7.46-6.27,11.09-6.27,3.9,0,5.93,2.37,5.93,5.65,0,1.19-.28,2.44-.91,3.97l-8.16,19.94c-.42,1.05-.63,1.74-.63,2.23,0,.56.35.91.91.91,1.74,0,4.32-2.23,6.62-4.88l2.23,1.88c-3.56,5.16-10.53,9.9-15.06,9.9-2.51,0-3.77-1.19-3.77-3.14Z"/>
      <path class="cls-1" d="M1741.59,124.52c0-3.42,4.53-6.62,13.39-9.62-1.46-1.05-2.16-2.23-2.16-3.49,0-1.74,1.74-3.42,5.51-5.23-4.81-.91-7.53-4.25-7.53-9.34,0-1.39.21-2.65.7-4.18,2.58-7.67,10.67-13.46,18.96-13.46,1.95,0,3.7.35,5.16.98h12.55l-1.6,4.95h-6.28c.35.98.49,2.09.49,3.28,0,1.6-.28,3.28-.91,4.88-2.79,7.32-10.25,12.83-18.2,13.11-1.25.84-1.74,1.46-1.74,2.09,0,.91,1.05,1.74,3.28,2.72l8.72,3.76c4.46,1.88,6.55,4.11,6.55,6.76,0,5.3-9.06,9.55-20.71,9.55-9.9,0-16.18-2.65-16.18-6.76ZM1759.58,127.65c6.48,0,11.02-1.67,11.02-3.9,0-1.19-1.32-2.3-4.46-3.63l-8.3-3.63h-.07c-5.37,1.81-8.65,4.46-8.65,6.83,0,2.65,3.97,4.32,10.46,4.32ZM1771.51,92.86c.98-2.37,1.53-4.67,1.53-6.41,0-2.51-1.05-3.83-3-3.83-3.42,0-7.46,4.04-9.97,9.9-1.12,2.51-1.6,4.6-1.6,6.34,0,2.58,1.05,4.04,3.07,4.04,3.35,0,7.6-4.25,9.97-10.04Z"/>
    </g>
    <g>
      <path class="cls-1" d="M1458.92,186.68c-5.02,0-9.32-1.1-12.9-3.29-3.58-2.2-6.33-5.26-8.25-9.19-1.92-3.93-2.88-8.48-2.88-13.67s.96-9.74,2.88-13.67c1.92-3.93,4.67-6.99,8.25-9.19,3.58-2.2,7.88-3.29,12.9-3.29,5.79,0,10.61,1.45,14.47,4.34,3.86,2.89,6.57,6.79,8.12,11.7l-8.47,2.34c-.98-3.28-2.64-5.84-4.98-7.69-2.35-1.85-5.39-2.77-9.13-2.77-3.37,0-6.18.76-8.42,2.27-2.24,1.51-3.93,3.63-5.05,6.36-1.13,2.73-1.7,5.93-1.73,9.6,0,3.67.56,6.87,1.69,9.6,1.13,2.73,2.82,4.85,5.07,6.36,2.25,1.51,5.07,2.27,8.44,2.27,3.74,0,6.79-.93,9.13-2.79,2.35-1.86,4.01-4.41,4.98-7.67l8.47,2.34c-1.56,4.9-4.26,8.8-8.12,11.7-3.86,2.89-8.68,4.34-14.47,4.34Z"/>
      <path class="cls-1" d="M1505.81,186.68c-3.77,0-7.05-.85-9.87-2.55-2.81-1.7-4.99-4.04-6.54-7.02-1.55-2.99-2.32-6.42-2.32-10.3s.79-7.41,2.37-10.39c1.58-2.97,3.78-5.3,6.59-6.97,2.81-1.67,6.07-2.51,9.76-2.51s7.09.85,9.9,2.54c2.81,1.7,5,4.04,6.55,7.02,1.56,2.99,2.34,6.42,2.34,10.3s-.78,7.35-2.35,10.34c-1.57,2.99-3.76,5.32-6.57,7.01-2.81,1.68-6.1,2.53-9.87,2.53ZM1505.81,178.8c3.35,0,5.83-1.12,7.46-3.35,1.63-2.23,2.44-5.11,2.44-8.65s-.83-6.56-2.48-8.73c-1.65-2.17-4.13-3.26-7.42-3.26-2.25,0-4.11.51-5.56,1.52-1.45,1.01-2.53,2.42-3.22,4.22-.7,1.8-1.05,3.89-1.05,6.26,0,3.65.83,6.56,2.49,8.73,1.66,2.17,4.11,3.26,7.34,3.26Z"/>
      <path class="cls-1" d="M1532.2,185.63v-37.65h7.43v11.68h1.05v25.97h-8.47ZM1554.89,185.63v-22.76c0-2.63-.64-4.67-1.92-6.14-1.28-1.46-3.02-2.2-5.23-2.2s-3.85.73-5.14,2.2c-1.29,1.46-1.93,3.37-1.93,5.72l-3.76-2.51c0-2.44.6-4.64,1.81-6.59,1.21-1.95,2.84-3.49,4.9-4.62,2.06-1.13,4.36-1.69,6.92-1.69,2.81,0,5.16.6,7.06,1.8,1.89,1.2,3.31,2.82,4.25,4.88.94,2.06,1.41,4.37,1.41,6.96v24.96h-8.37ZM1577.48,185.63v-22.87c0-2.58-.64-4.6-1.92-6.05-1.28-1.45-3.01-2.18-5.19-2.18-1.35,0-2.56.31-3.63.92-1.07.62-1.92,1.52-2.54,2.72-.63,1.2-.94,2.62-.94,4.27l-3.73-2.2c-.02-2.6.56-4.9,1.76-6.88,1.2-1.99,2.82-3.54,4.86-4.65,2.04-1.12,4.32-1.67,6.83-1.67,4.16,0,7.35,1.25,9.57,3.75,2.22,2.5,3.33,5.78,3.33,9.85v25h-8.4Z"/>
      <path class="cls-1" d="M1594.88,202.37v-54.38h7.43v26.42h1.05v27.96h-8.47ZM1613.04,186.68c-3.67,0-6.75-.87-9.24-2.61-2.49-1.74-4.36-4.12-5.61-7.13-1.25-3.01-1.88-6.38-1.88-10.13s.63-7.18,1.88-10.18c1.25-3,3.1-5.36,5.53-7.09,2.43-1.73,5.43-2.6,9.01-2.6s6.64.87,9.26,2.6,4.64,4.09,6.08,7.08c1.44,2.99,2.16,6.39,2.16,10.2s-.71,7.15-2.13,10.14c-1.42,3-3.42,5.37-6,7.11s-5.6,2.61-9.06,2.61ZM1611.75,179.15c2.18,0,3.99-.55,5.4-1.64,1.42-1.09,2.47-2.57,3.16-4.44.68-1.87,1.03-3.96,1.03-6.26s-.35-4.35-1.05-6.22c-.7-1.87-1.78-3.36-3.24-4.46-1.46-1.1-3.32-1.66-5.58-1.66s-3.88.52-5.23,1.55c-1.35,1.03-2.34,2.48-2.98,4.32-.64,1.85-.96,4-.96,6.47s.32,4.59.96,6.45c.64,1.86,1.65,3.31,3.03,4.34,1.38,1.03,3.2,1.55,5.46,1.55Z"/>
      <path class="cls-1" d="M1648.42,186.68c-2.72,0-5.02-.52-6.9-1.55-1.88-1.03-3.31-2.41-4.27-4.13-.96-1.72-1.45-3.61-1.45-5.68,0-1.81.3-3.44.91-4.9.6-1.45,1.53-2.71,2.79-3.77,1.25-1.06,2.88-1.92,4.88-2.6,1.51-.49,3.28-.93,5.32-1.32,2.03-.39,4.24-.76,6.62-1.1,2.38-.34,4.87-.7,7.48-1.1l-3,1.71c.02-2.6-.56-4.52-1.74-5.75-1.19-1.23-3.18-1.85-6-1.85-1.7,0-3.33.4-4.92,1.19-1.58.79-2.68,2.15-3.31,4.08l-7.67-2.41c.93-3.18,2.7-5.74,5.32-7.67,2.61-1.93,6.14-2.89,10.58-2.89,3.35,0,6.29.55,8.84,1.64,2.55,1.09,4.43,2.88,5.66,5.37.67,1.32,1.08,2.68,1.22,4.06.14,1.38.21,2.89.21,4.51v23.11h-7.36v-8.16l1.22,1.32c-1.7,2.72-3.68,4.71-5.94,5.98s-5.1,1.9-8.49,1.9ZM1650.09,179.99c1.91,0,3.53-.34,4.88-1.01s2.42-1.5,3.22-2.48c.8-.98,1.34-1.89,1.62-2.75.44-1.07.69-2.29.75-3.68.06-1.38.09-2.5.09-3.36l2.58.77c-2.53.4-4.71.74-6.52,1.05-1.81.3-3.37.59-4.67.85-1.3.27-2.45.56-3.45.89-.98.35-1.8.76-2.48,1.22-.67.47-1.19,1-1.55,1.6-.36.6-.54,1.31-.54,2.13,0,.93.23,1.75.7,2.46.47.71,1.14,1.27,2.04,1.69.89.42,2,.63,3.33.63Z"/>
      <path class="cls-1" d="M1677.98,185.63v-37.65h7.5v11.68h1.01v25.97h-8.51ZM1704.09,185.63v-18.13c0-1.19-.08-2.5-.24-3.94-.16-1.44-.54-2.83-1.13-4.17s-1.48-2.43-2.65-3.29c-1.17-.86-2.76-1.29-4.76-1.29-1.07,0-2.13.17-3.17.52s-1.99.95-2.84,1.8-1.53,2.01-2.04,3.49c-.51,1.48-.77,3.36-.77,5.66l-4.98-2.13c0-3.21.62-6.11,1.87-8.72,1.24-2.6,3.07-4.68,5.49-6.22,2.42-1.55,5.39-2.32,8.92-2.32,2.79,0,5.09.47,6.9,1.39,1.81.93,3.25,2.12,4.32,3.56,1.07,1.44,1.86,2.98,2.37,4.6.51,1.63.84,3.17.99,4.62.15,1.45.23,2.63.23,3.54v21.02h-8.51Z"/>
      <path class="cls-1" d="M1725.22,202.37l7.25-19.91.14,5.86-16.42-40.33h8.75l11.64,29.84h-2.23l11.33-29.84h8.4l-20.99,54.38h-7.88Z"/>
    </g>
  </g>
</svg>
```

**Logo horizontal sin descriptor** (antes mal nombrado "símbolo"):

```svg
<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1598.73 282.78">
  <defs>
    <style>
      .cls-1 {
        fill: #fff;
      }
    </style>
  </defs>
  <path class="cls-1" d="M119.61.27C49.19.27,0,47.87,0,116.04c0,59.25,37,102.97,92.74,113.56v-50.28c-24.16-9.4-38.73-32.2-38.73-63.28,0-41.32,25.63-68.03,65.31-68.03s66.18,26.7,66.18,68.03-22.79,66.02-61.23,67.88h-3.89c-6.33-.03-9.72,7.44-5.52,12.19l75.67,85.62c1.9,2.15,5.44.8,5.44-2.06v-53.18c0-4.08-1.51-8.02-4.24-11.06l-2.36-2.62c31.2-20.05,50.15-54.43,50.15-96.76C239.52,47.87,190.21.27,119.61.27Z"/>
  <path class="cls-1" d="M804.46.4h-65.48c-10,0-18.11,8.11-18.11,18.11v211.62h83.6c77.53,0,119.01-42.44,119.01-114.86S882,.4,804.46.4ZM805.74,179.71h-27.44V63.23c0-6.86,5.56-12.42,12.42-12.42h15.02c36.69,0,58.39,20.42,58.39,64.45s-20.74,64.45-58.39,64.45Z"/>
  <g>
    <path class="cls-1" d="M440.5,136.64V2.41h-55.8v131.13c0,61.23,33.01,93.09,89.69,96.15v-50.22c-23.52-2.93-33.89-17.7-33.89-42.83Z"/>
    <path class="cls-1" d="M527.3,136.64c0,26.55-11.82,41.56-38.53,43.23l37.4,44c36.41-11.92,56.94-41.55,56.94-90.34V2.41h-55.8v134.23Z"/>
  </g>
  <polygon class="cls-1" points="1441.6 .19 1370.17 .19 1439.3 108.87 1471.52 56.6 1441.6 .19"/>
  <path class="cls-1" d="M1266.31,112.67c-.02-.88-.02-1.76-.06-2.63-2.47-64.72-47.65-109.49-111.66-109.78v45.91c34.63.42,62.84,28.86,62.84,63.58v12.08c0,34.98-28.62,63.6-63.6,63.6h0c-34.98,0-63.6-28.62-63.6-63.6v-12.08c0-25.2,14.85-47.09,36.23-57.37l-30.98-37.39c-29.65,16.89-49.25,47.23-53.35,85.47-.01.11-.02.21-.04.32-.15,1.43-.28,2.87-.39,4.32-.04.55-.07,1.12-.11,1.67-.07,1.17-.14,2.34-.19,3.52-.05,1.38-.07,2.77-.09,4.16,0,.4-.03.8-.03,1.2,0,.04,0,.08,0,.12,0,.05,0,.09,0,.14,0,1.01.04,1.99.06,2.99.02.88.02,1.76.06,2.63,2.48,64.93,47.95,109.8,112.29,109.8s105.44-40.5,111.85-100.22c.01-.11.02-.21.04-.32.15-1.43.28-2.87.39-4.32.04-.56.07-1.12.11-1.67.07-1.17.14-2.34.19-3.52.05-1.38.07-2.77.09-4.16,0-.4.03-.8.03-1.2,0-.04,0-.08,0-.12,0-.05,0-.09,0-.14,0-1.01-.04-1.99-.06-2.99Z"/>
  <polygon class="cls-1" points="1384.89 231.29 1442.72 231.29 1587.27 0 1523.67 0 1379.11 231.29 1384.89 231.29"/>
  <polygon class="cls-1" points="1527.29 231.29 1598.73 231.29 1529.59 122.61 1497.38 174.88 1527.29 231.29"/>
</svg>
```

**Logo vertical con descriptor:**

```svg
<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1598.73 412.17">
  <defs>
    <style>
      .cls-1 {
        fill: #fff;
      }
    </style>
  </defs>
  <g>
    <path class="cls-1" d="M119.61.27C49.19.27,0,47.87,0,116.04c0,59.25,37,102.97,92.74,113.56v-50.28c-24.16-9.4-38.73-32.2-38.73-63.28,0-41.32,25.63-68.03,65.31-68.03s66.18,26.7,66.18,68.03-22.79,66.02-61.23,67.88h-3.89c-6.33-.03-9.72,7.44-5.52,12.19l75.67,85.62c1.9,2.15,5.44.8,5.44-2.06v-53.18c0-4.08-1.51-8.02-4.24-11.06l-2.36-2.62c31.2-20.05,50.15-54.43,50.15-96.76C239.52,47.87,190.21.27,119.61.27Z"/>
    <path class="cls-1" d="M804.46.4h-65.48c-10,0-18.11,8.11-18.11,18.11v211.62h83.6c77.53,0,119.01-42.44,119.01-114.86S882,.4,804.46.4ZM805.74,179.71h-27.44V63.23c0-6.86,5.56-12.42,12.42-12.42h15.02c36.69,0,58.39,20.42,58.39,64.45s-20.74,64.45-58.39,64.45Z"/>
    <g>
      <path class="cls-1" d="M440.5,136.64V2.41h-55.8v131.13c0,61.23,33.01,93.09,89.69,96.15v-50.22c-23.52-2.93-33.89-17.7-33.89-42.83Z"/>
      <path class="cls-1" d="M527.3,136.64c0,26.55-11.82,41.56-38.53,43.23l37.4,44c36.41-11.92,56.94-41.55,56.94-90.34V2.41h-55.8v134.23Z"/>
    </g>
    <polygon class="cls-1" points="1441.6 .19 1370.17 .19 1439.3 108.87 1471.52 56.6 1441.6 .19"/>
    <path class="cls-1" d="M1266.31,112.67c-.02-.88-.02-1.76-.06-2.63-2.47-64.72-47.65-109.49-111.66-109.78v45.91c34.63.42,62.84,28.86,62.84,63.58v12.08c0,34.98-28.62,63.6-63.6,63.6h0c-34.98,0-63.6-28.62-63.6-63.6v-12.08c0-25.2,14.85-47.09,36.23-57.37l-30.98-37.39c-29.65,16.89-49.25,47.23-53.35,85.47-.01.11-.02.21-.04.32-.15,1.43-.28,2.87-.39,4.32-.04.55-.07,1.12-.11,1.67-.07,1.17-.14,2.34-.19,3.52-.05,1.38-.07,2.77-.09,4.16,0,.4-.03.8-.03,1.2,0,.04,0,.08,0,.12,0,.05,0,.09,0,.14,0,1.01.04,1.99.06,2.99.02.88.02,1.76.06,2.63,2.48,64.93,47.95,109.8,112.29,109.8s105.44-40.5,111.85-100.22c.01-.11.02-.21.04-.32.15-1.43.28-2.87.39-4.32.04-.56.07-1.12.11-1.67.07-1.17.14-2.34.19-3.52.05-1.38.07-2.77.09-4.16,0-.4.03-.8.03-1.2,0-.04,0-.08,0-.12,0-.05,0-.09,0-.14,0-1.01-.04-1.99-.06-2.99Z"/>
    <polygon class="cls-1" points="1384.89 231.29 1442.72 231.29 1587.27 0 1523.67 0 1379.11 231.29 1384.89 231.29"/>
    <polygon class="cls-1" points="1527.29 231.29 1598.73 231.29 1529.59 122.61 1497.38 174.88 1527.29 231.29"/>
  </g>
  <g>
    <path class="cls-1" d="M76.9,386.93c-5.23,0-10.14-.93-14.72-2.78-4.58-1.85-8.6-4.57-12.06-8.16-3.46-3.59-6.16-7.99-8.1-13.21-1.94-5.21-2.92-11.19-2.92-17.92,0-8.82,1.64-16.36,4.93-22.63,3.29-6.26,7.79-11.06,13.51-14.41,5.72-3.34,12.17-5.02,19.35-5.02,9.94,0,17.82,2.31,23.64,6.93,5.81,4.62,9.75,11.09,11.8,19.43l-13.79,2.19c-1.53-4.78-4.04-8.61-7.51-11.47-3.48-2.86-7.91-4.29-13.29-4.29-5.42-.07-9.93,1.1-13.51,3.53s-6.29,5.85-8.1,10.26c-1.81,4.41-2.72,9.57-2.72,15.48s.9,11.04,2.69,15.39c1.79,4.36,4.49,7.75,8.1,10.18,3.61,2.43,8.12,3.68,13.54,3.76,4.07.04,7.64-.7,10.71-2.21,3.06-1.51,5.57-3.81,7.51-6.9,1.94-3.08,3.25-6.94,3.93-11.58h-14.24v-10.6h28.6c.07.6.13,1.48.17,2.64.04,1.16.06,1.85.06,2.07,0,7.63-1.5,14.4-4.51,20.33-3.01,5.92-7.32,10.57-12.93,13.93-5.61,3.36-12.32,5.05-20.13,5.05Z"/>
    <path class="cls-1" d="M125.69,385.25v-60.56h11.94v14.75l-1.46-1.91c.75-2.02,1.75-3.86,3-5.52,1.25-1.66,2.76-3.04,4.51-4.12,1.49-1.01,3.15-1.8,4.96-2.38,1.81-.58,3.67-.93,5.58-1.07,1.91-.13,3.76-.05,5.55.25v12.62c-1.79-.52-3.86-.69-6.2-.5-2.34.19-4.44.84-6.31,1.96-1.87,1.01-3.39,2.3-4.57,3.87-1.18,1.57-2.05,3.36-2.61,5.36-.56,2-.84,4.16-.84,6.48v30.79h-13.57Z"/>
    <path class="cls-1" d="M196.06,386.93c-6.06,0-11.35-1.37-15.87-4.09-4.52-2.73-8.03-6.5-10.51-11.3-2.49-4.8-3.73-10.33-3.73-16.57s1.27-11.92,3.81-16.71c2.54-4.78,6.07-8.52,10.6-11.21,4.52-2.69,9.76-4.04,15.7-4.04s11.4,1.36,15.93,4.09c4.52,2.73,8.04,6.5,10.54,11.3,2.5,4.8,3.76,10.33,3.76,16.57s-1.26,11.82-3.78,16.63c-2.52,4.8-6.05,8.56-10.57,11.27-4.52,2.71-9.81,4.07-15.87,4.07ZM196.06,374.26c5.38,0,9.38-1.79,12-5.38,2.62-3.59,3.93-8.22,3.93-13.91s-1.33-10.55-3.98-14.05c-2.65-3.5-6.64-5.24-11.94-5.24-3.63,0-6.61.81-8.94,2.44-2.34,1.63-4.07,3.89-5.19,6.79-1.12,2.9-1.68,6.25-1.68,10.07,0,5.87,1.34,10.55,4.01,14.05,2.67,3.5,6.61,5.24,11.8,5.24Z"/>
    <path class="cls-1" d="M249.28,385.25l-18.5-60.67,13.23.11,11.83,38.86,12-38.86h11.38l11.94,38.86,11.89-38.86h13.23l-18.5,60.56h-10.54l-13.74-41.66-13.68,41.66h-10.54Z"/>
    <path class="cls-1" d="M319.65,335.29v-10.6h42.22v10.6h-42.22ZM361.88,385.25c-4,.75-7.92,1.07-11.75.98-3.83-.09-7.26-.8-10.29-2.13s-5.33-3.43-6.9-6.31c-1.38-2.62-2.11-5.29-2.19-8.02-.08-2.73-.11-5.81-.11-9.25v-52.65h13.46v51.87c0,2.43.03,4.56.08,6.39.06,1.83.44,3.33,1.15,4.49,1.35,2.24,3.49,3.5,6.45,3.76,2.95.26,6.32.11,10.09-.45v11.33Z"/>
    <path class="cls-1" d="M374.83,385.25v-80.75h12.06v42.5h1.63v38.24h-13.68ZM416.83,385.25v-29.16c0-1.91-.13-4.02-.39-6.34-.26-2.32-.87-4.55-1.82-6.7-.95-2.15-2.37-3.92-4.26-5.3-1.89-1.38-4.44-2.07-7.65-2.07-1.72,0-3.42.28-5.1.84s-3.21,1.52-4.57,2.89c-1.36,1.37-2.46,3.23-3.28,5.61-.82,2.38-1.23,5.41-1.23,9.11l-8.02-3.42c0-5.16,1-9.83,3-14.02,2-4.19,4.94-7.52,8.83-10.01,3.89-2.49,8.67-3.73,14.36-3.73,4.49,0,8.19.75,11.1,2.24,2.92,1.5,5.23,3.4,6.95,5.72,1.72,2.32,2.99,4.79,3.81,7.4.82,2.62,1.35,5.09,1.6,7.43.24,2.34.36,4.23.36,5.69v33.81h-13.68Z"/>
    <path class="cls-1" d="M493.43,323.23l-17.5,48.11c-2.24,6.17-.56,7.85,7.96,8.19l-1.91,5.72h-27.37l1.79-5.72c7.74-.34,10.21-2.24,12.34-8.3l18.84-50.81c2.02-5.5.79-7.63-6.84-8.07l1.79-5.61h23.44l4.6,59.78,40.71-59.78h25.46l-1.91,5.61c-7.51.45-10.43,2.13-12.34,8.3l-14.92,50.69c-1.79,5.94-.67,7.85,6.84,8.19l-1.79,5.72h-33.53l1.79-5.72c8.3-.34,10.77-2.47,12.56-8.41l14.02-47.22-42.62,62.69h-6.73l-4.71-63.37Z"/>
    <path class="cls-1" d="M614.89,373.81c0,1.23.56,1.68,1.57,1.68,2.8,0,6.5-3.48,10.43-8.08l3.81,3.03c-6.39,9.2-17.61,16.04-24.45,16.04-3.48,0-5.83-2.13-5.83-5.38,0-2.13.9-4.93,3.03-9.53l10.99-24h-2.13c-15.25,28.15-26.58,39.37-36.23,39.37-6.95,0-11.66-5.61-11.66-14.92,0-21.31,24.45-47.33,46.43-47.33,3.14,0,5.83.56,8.19,1.46l1.79-4.04h13.23l-18.17,48.11c-.67,1.68-1.01,2.92-1.01,3.59ZM581.35,376.73c4.93,0,13.79-9.08,22.88-23.44,3.93-6.06,8.52-14.13,10.32-18.39-1.68-2.92-4.26-4.37-7.63-4.37-12.79,0-29.72,21.87-29.72,38.69,0,4.82,1.35,7.51,4.15,7.51Z"/>
    <path class="cls-1" d="M654.03,335.79c0-1.12-.67-1.68-1.68-1.68-2.02,0-6.28,3.03-10.54,8.08l-3.81-3.03c6.5-9.2,17.94-16.04,25.35-16.04,3.48,0,5.72,1.57,5.72,4.93,0,2.35-.9,5.38-3.36,10.43l-11.78,23.66h2.02c7.51-13.91,12.45-22.43,18.06-28.94,5.72-6.5,10.99-10.21,16.37-10.21,5.94,0,9.08,4.04,9.08,8.19s-2.92,8.41-7.63,8.41c-3.14,0-4.37-1.35-5.83-2.69-1.35-1.12-1.91-1.91-3.59-1.91-2.13,0-4.71,1.68-8.08,5.61-7.63,8.97-15.25,23.89-19.07,31.51l-6.62,13.12h-14.24l18.62-45.98c.67-1.68,1.01-2.8,1.01-3.48Z"/>
    <path class="cls-1" d="M709.65,319.87c0-2.58-2.02-3.7-6.5-4.15l1.91-5.27,18.28-6.06h4.71l-10.77,28.71c-4.15,10.99-7.63,18.73-11.66,29.05h2.24c6.28-14.36,12.67-24.79,21.98-31.96,6.06-4.82,12.79-7.18,18.62-7.18,6.95,0,11.1,3.7,11.1,9.2,0,8.64-10.88,17.5-29.94,23.78.9,5.94,2.13,10.32,3.48,13.68,2.13,5.27,4.04,7.29,6.73,7.29,2.35,0,4.49-1.35,7.96-6.39l4.04,2.58c-5.5,9.64-9.76,13.79-15.81,13.79-6.5,0-10.21-3.59-13.35-12.11-1.35-3.81-2.92-8.97-4.15-15.59l-5.61,1.23-2.24,5.27-7.51,19.51h-14.58l20.41-61.91c.56-1.68.67-2.92.67-3.48ZM734.89,348.58c6.39-3.48,10.09-7.96,10.09-11.66,0-2.92-1.79-4.37-4.82-4.37-8.3,0-17.61,8.64-25.12,23.33,7.85-1.79,14.36-4.37,19.85-7.29Z"/>
    <path class="cls-1" d="M760.12,365.18c0-12.34,5.72-23.66,13.91-31.51,6.84-6.84,15.7-10.65,24.22-10.65s14.92,4.26,14.92,11.1c0,5.38-3.81,12.11-11.78,16.71-6.39,3.81-15.93,6.84-28.37,7.4l-.11,3.03c0,9.31,4.04,14.13,10.99,14.13,5.5,0,10.99-3.48,16.15-13.35l5.27,1.35c-5.94,15.7-16.15,23.55-26.36,23.55-11.33,0-18.84-8.41-18.84-21.76ZM781.09,351.94c10.77,0,19.96-9.42,19.96-17.61,0-3.25-1.91-5.5-5.61-5.5-5.05,0-10.88,3.81-15.03,9.42-2.69,3.7-4.71,7.96-5.94,12.22,2.13,1.12,4.37,1.46,6.62,1.46Z"/>
    <path class="cls-1" d="M813.95,381.44c0-1.91.56-4.15,1.79-7.18l16.82-41.61h-11.66l1.91-5.83c10.32-3.14,18.39-8.64,24.67-15.92h5.83l-5.5,13.79h19.29l-2.47,7.96h-19.96l-15.14,37.8c-.67,1.57-.9,2.92-.9,3.36,0,1.23.67,1.79,1.79,1.79,3.25,0,10.54-6.06,17.61-14.13l3.92,3.36c-8.64,10.77-22.65,22.09-31.96,22.09-4.37,0-6.06-2.24-6.06-5.5Z"/>
    <path class="cls-1" d="M860.72,381.89c0-2.02.45-4.49,1.68-7.4l14.47-34.99c.79-1.68,1.01-2.92,1.01-3.7s-.45-1.57-1.46-1.57c-2.58,0-6.5,3.36-10.32,7.96l-3.7-3.14c5.72-8.41,16.93-15.92,24.34-15.92,3.81,0,6.06,1.91,6.06,4.93,0,1.91-.67,4.37-1.91,7.4l-14.47,35.1c-.56,1.35-1.01,2.58-1.01,3.59s.56,1.57,1.46,1.57c2.8,0,6.62-3.36,10.43-7.85l3.81,3.03c-5.83,8.41-17.05,16.04-24.34,16.04-3.92,0-6.06-2.02-6.06-5.05ZM882.37,309.21c0-4.82,3.92-8.64,8.97-8.64s8.86,3.7,8.86,8.64c0,5.27-3.81,9.08-8.86,9.08s-8.97-3.81-8.97-9.08Z"/>
    <path class="cls-1" d="M934.07,381.77c0-1.79.56-4.26,1.79-7.18l12.11-29.5c1.01-2.47,1.57-4.49,1.57-6.28,0-2.47-1.01-4.26-3.48-4.26s-5.38,1.79-9.2,6.39c-8.08,9.53-16.26,24.11-19.85,31.18l-6.62,13.12h-13.57l17.05-46.21c.45-1.35.78-2.58.78-3.36,0-1.12-.56-1.57-1.46-1.57-2.35,0-6.84,3.25-10.99,8.08l-3.59-3.03c6.5-9.2,18.06-16.04,25.35-16.04,3.36,0,5.61,1.57,5.61,4.93,0,2.35-1.01,5.38-3.25,10.54l-10.65,23.55h2.02c4.49-7.96,11.44-20.52,19.18-28.94,5.83-6.5,12-10.09,17.83-10.09,6.28,0,9.53,3.81,9.53,9.08,0,1.91-.45,3.92-1.46,6.39l-13.12,32.08c-.67,1.68-1.01,2.8-1.01,3.59,0,.9.56,1.46,1.46,1.46,2.8,0,6.95-3.59,10.65-7.85l3.59,3.03c-5.72,8.3-16.93,15.93-24.22,15.93-4.04,0-6.06-1.91-6.06-5.05Z"/>
    <path class="cls-1" d="M958.63,396.02c0-5.5,7.29-10.65,21.53-15.48-2.36-1.68-3.48-3.59-3.48-5.61,0-2.8,2.8-5.5,8.86-8.41-7.74-1.46-12.11-6.84-12.11-15.03,0-2.24.34-4.26,1.12-6.73,4.15-12.34,17.16-21.64,30.5-21.64,3.14,0,5.94.56,8.3,1.57h20.19l-2.58,7.96h-10.09c.56,1.57.79,3.37.79,5.27,0,2.58-.45,5.27-1.46,7.85-4.49,11.78-16.49,20.64-29.27,21.08-2.02,1.35-2.8,2.35-2.8,3.36,0,1.46,1.68,2.8,5.27,4.37l14.02,6.06c7.18,3.03,10.54,6.62,10.54,10.88,0,8.52-14.58,15.37-33.31,15.37-15.93,0-26.02-4.26-26.02-10.88ZM987.56,401.06c10.43,0,17.72-2.69,17.72-6.28,0-1.91-2.13-3.7-7.18-5.83l-13.35-5.83h-.11c-8.64,2.92-13.91,7.18-13.91,10.99,0,4.26,6.39,6.95,16.82,6.95ZM1006.74,345.1c1.57-3.81,2.47-7.51,2.47-10.32,0-4.04-1.68-6.17-4.82-6.17-5.5,0-12,6.5-16.04,15.93-1.79,4.04-2.58,7.4-2.58,10.21,0,4.15,1.68,6.5,4.93,6.5,5.38,0,12.22-6.84,16.04-16.15Z"/>
    <path class="cls-1" d="M1090.23,386.93c-8.07,0-14.99-1.77-20.75-5.3-5.76-3.53-10.18-8.46-13.26-14.78-3.08-6.32-4.63-13.64-4.63-21.98s1.54-15.66,4.63-21.98c3.08-6.32,7.5-11.24,13.26-14.78,5.76-3.53,12.67-5.3,20.75-5.3,9.31,0,17.07,2.33,23.27,6.98,6.21,4.65,10.56,10.93,13.07,18.81l-13.63,3.76c-1.57-5.27-4.24-9.39-8.02-12.36-3.78-2.97-8.67-4.46-14.69-4.46-5.42,0-9.93,1.21-13.54,3.64-3.61,2.43-6.32,5.84-8.13,10.23-1.81,4.39-2.74,9.54-2.78,15.45,0,5.91.91,11.06,2.72,15.45,1.81,4.39,4.53,7.8,8.16,10.23,3.63,2.43,8.15,3.64,13.57,3.64,6.02,0,10.92-1.5,14.69-4.49,3.78-2.99,6.45-7.1,8.02-12.34l13.63,3.76c-2.5,7.89-6.86,14.16-13.07,18.81-6.21,4.65-13.96,6.98-23.27,6.98Z"/>
    <path class="cls-1" d="M1165.66,386.93c-6.06,0-11.35-1.37-15.87-4.09-4.52-2.73-8.03-6.5-10.51-11.3s-3.73-10.33-3.73-16.57,1.27-11.92,3.81-16.71c2.54-4.78,6.08-8.52,10.6-11.21,4.52-2.69,9.76-4.04,15.7-4.04s11.4,1.36,15.92,4.09c4.52,2.73,8.04,6.5,10.54,11.3,2.5,4.8,3.76,10.33,3.76,16.57s-1.26,11.82-3.79,16.63c-2.52,4.8-6.05,8.56-10.57,11.27-4.52,2.71-9.81,4.07-15.87,4.07ZM1165.66,374.26c5.38,0,9.38-1.79,12-5.38,2.62-3.59,3.92-8.22,3.92-13.91s-1.33-10.55-3.98-14.05c-2.65-3.5-6.64-5.24-11.94-5.24-3.63,0-6.61.81-8.94,2.44-2.34,1.63-4.07,3.89-5.19,6.79-1.12,2.9-1.68,6.25-1.68,10.07,0,5.87,1.34,10.55,4.01,14.05,2.67,3.5,6.61,5.24,11.8,5.24Z"/>
    <path class="cls-1" d="M1208.1,385.25v-60.56h11.94v18.79h1.68v41.78h-13.63ZM1244.61,385.25v-36.62c0-4.22-1.03-7.51-3.08-9.87-2.06-2.36-4.86-3.53-8.41-3.53s-6.2,1.18-8.27,3.53c-2.07,2.36-3.11,5.42-3.11,9.2l-6.06-4.04c0-3.93.97-7.46,2.92-10.6,1.94-3.14,4.57-5.62,7.88-7.43,3.31-1.81,7.02-2.72,11.13-2.72,4.52,0,8.31.96,11.35,2.89,3.05,1.93,5.33,4.54,6.84,7.85,1.51,3.31,2.27,7.04,2.27,11.19v40.15h-13.46ZM1280.95,385.25v-36.79c0-4.15-1.03-7.39-3.08-9.73-2.06-2.34-4.84-3.5-8.36-3.5-2.17,0-4.11.5-5.83,1.49-1.72.99-3.08,2.45-4.09,4.37-1.01,1.93-1.51,4.21-1.51,6.87l-6-3.53c-.04-4.19.91-7.88,2.83-11.07,1.92-3.2,4.53-5.69,7.82-7.49,3.29-1.79,6.95-2.69,10.99-2.69,6.69,0,11.82,2.01,15.39,6.03,3.57,4.02,5.36,9.3,5.36,15.84v40.21h-13.51Z"/>
    <path class="cls-1" d="M1308.93,412.17v-87.48h11.94v42.5h1.68v44.97h-13.63ZM1338.14,386.93c-5.91,0-10.86-1.4-14.86-4.21-4-2.8-7.01-6.63-9.03-11.47-2.02-4.84-3.03-10.27-3.03-16.29s1.01-11.55,3.03-16.37c2.02-4.82,4.98-8.63,8.89-11.41s8.74-4.18,14.5-4.18,10.68,1.39,14.89,4.18,7.47,6.58,9.79,11.38c2.32,4.8,3.48,10.27,3.48,16.4s-1.14,11.5-3.42,16.32-5.5,8.64-9.64,11.44-9.01,4.21-14.58,4.21ZM1336.07,374.82c3.51,0,6.41-.88,8.69-2.64,2.28-1.76,3.97-4.14,5.08-7.15,1.1-3.01,1.65-6.37,1.65-10.07s-.56-7-1.68-10.01c-1.12-3.01-2.86-5.4-5.21-7.18-2.36-1.78-5.35-2.66-8.97-2.66s-6.24.83-8.41,2.5c-2.17,1.66-3.77,3.98-4.79,6.95-1.03,2.97-1.54,6.44-1.54,10.4s.51,7.38,1.54,10.37c1.03,2.99,2.65,5.32,4.88,6.98,2.22,1.66,5.15,2.5,8.78,2.5Z"/>
    <path class="cls-1" d="M1395.06,386.93c-4.37,0-8.08-.83-11.1-2.5-3.03-1.66-5.32-3.88-6.87-6.64-1.55-2.77-2.33-5.81-2.33-9.14,0-2.92.49-5.54,1.46-7.88.97-2.34,2.47-4.35,4.49-6.06,2.02-1.7,4.64-3.09,7.85-4.18,2.43-.79,5.28-1.49,8.55-2.13,3.27-.63,6.82-1.22,10.65-1.77,3.83-.54,7.84-1.13,12.03-1.77l-4.82,2.75c.04-4.19-.9-7.27-2.8-9.25-1.91-1.98-5.12-2.97-9.65-2.97-2.73,0-5.36.64-7.91,1.91-2.54,1.27-4.32,3.46-5.33,6.56l-12.34-3.87c1.5-5.12,4.35-9.23,8.55-12.34,4.21-3.1,9.88-4.65,17.02-4.65,5.38,0,10.12.88,14.21,2.63,4.09,1.76,7.13,4.64,9.11,8.64,1.08,2.13,1.74,4.31,1.96,6.53.22,2.22.34,4.65.34,7.26v37.18h-11.83v-13.12l1.96,2.13c-2.73,4.37-5.92,7.58-9.56,9.62s-8.2,3.06-13.65,3.06ZM1397.75,376.17c3.07,0,5.68-.54,7.85-1.63s3.9-2.41,5.19-3.98c1.29-1.57,2.16-3.05,2.61-4.43.71-1.72,1.11-3.69,1.21-5.92.09-2.22.14-4.03.14-5.41l4.15,1.23c-4.08.64-7.57,1.2-10.49,1.68-2.92.49-5.42.94-7.51,1.37-2.09.43-3.94.91-5.55,1.43-1.57.56-2.9,1.22-3.98,1.96-1.08.75-1.92,1.61-2.5,2.58-.58.97-.87,2.11-.87,3.42,0,1.5.37,2.81,1.12,3.95.75,1.14,1.84,2.05,3.28,2.72,1.44.67,3.22,1.01,5.35,1.01Z"/>
    <path class="cls-1" d="M1442.61,385.25v-60.56h12.06v18.79h1.63v41.78h-13.68ZM1484.61,385.25v-29.16c0-1.91-.13-4.02-.39-6.34-.26-2.32-.87-4.55-1.82-6.7s-2.37-3.92-4.26-5.3c-1.89-1.38-4.44-2.07-7.65-2.07-1.72,0-3.42.28-5.1.84s-3.21,1.52-4.57,2.89-2.46,3.23-3.28,5.61c-.82,2.38-1.23,5.41-1.23,9.11l-8.02-3.42c0-5.16,1-9.83,3-14.02,2-4.19,4.94-7.52,8.83-10.01s8.67-3.73,14.36-3.73c4.49,0,8.19.75,11.1,2.24,2.92,1.5,5.23,3.4,6.95,5.72,1.72,2.32,2.99,4.79,3.81,7.4.82,2.62,1.36,5.09,1.6,7.43.24,2.34.36,4.23.36,5.69v33.81h-13.68Z"/>
    <path class="cls-1" d="M1518.59,412.17l11.66-32.02.22,9.42-26.41-64.88h14.07l18.73,48h-3.59l18.22-48h13.51l-33.76,87.48h-12.67Z"/>
  </g>
</svg>
```

**Símbolo Q solo:** `[PENDIENTE]` — no hay vector real todavía (ver corrección arriba). No usar ningún archivo existente como reemplazo improvisado.

---

### Reglas de uso

- **Área de respeto:** dejar un espacio libre alrededor del logo equivalente a la altura del símbolo Q, en los cuatro lados. No pegar texto, imágenes ni otros elementos dentro de esa área.
- **Tamaño mínimo:** 240px en desktop, 140px en mobile, 16px para favicon (solo símbolo Q). Por debajo de eso, el logo pierde legibilidad.
- **No deformar** (estirar, comprimir).
- **No rotar.**
- **No recolorear** fuera de las versiones oficiales (blanca, oscura).
- **No aplicar sombras, brillos ni efectos.**

---

### Cómo elegir la versión correcta

| Situación | Versión a usar |
| --- | --- |
| Fondo oscuro | Negativa (blanca) |
| Fondo claro | Positiva (oscura) |
| Espacio muy reducido | `[PENDIENTE]` — usar horizontal sin descriptor como alternativa temporal hasta que exista el símbolo Q real |
| Cualquier otro caso | Horizontal con descriptor |

---

### Pendiente

`[PENDIENTE]`: posición típica del logo según superficie (ej. en presentaciones suele ir abajo-izquierda; en redes sociales puede ser distinto). Esto se define en cada sección de superficie (sección 6 — Presentaciones, y la futura sección de redes sociales), no aquí.

`[PENDIENTE]`: el símbolo Q aislado (ver corrección arriba) — pedir a diseño.

`[PENDIENTE]`: pedir también el patrón decorativo de triángulos como asset suelto (sin logo ni texto encima, en PNG transparente o SVG). Hoy solo existen versiones ya compuestas (portada completa, bandas de footer completas) en `surfaces-assets/presentaciones/` — no hay una pieza aislada y reutilizable del patrón en sí.

`[PENDIENTE]`: revisar el archivo PNG en alta resolución y las versiones para imprenta si se necesitan para un uso puntual — no viven en este documento (ver sección 0.4.1), quedan en el repositorio.

---

## Elementos Gráficos — Qudox

> Piezas visuales que se repiten en distintas piezas de marca, sin importar la superficie. Si una superficie (presentaciones, redes) necesita una versión distinta de alguno de estos, se ajusta ahí — pero el concepto base vive aquí.

---

### 5.1 Callout (caja de resalte)

**Qué es:** una caja para destacar una conclusión, un dato importante o una frase clave dentro de un bloque de texto.

**Cómo se ve:** fondo claro, con un borde grueso de color verde institucional del lado izquierdo. Adentro, una frase corta en negrita (color verde) seguida de una descripción breve en texto normal.

**Para qué sirve:** llamar la atención sobre lo más importante de un bloque de contenido, sin necesidad de agrandar el texto.

---

### 5.2 Eyebrow (etiqueta superior)

**Qué es:** una palabra o frase corta en mayúsculas, que va arriba de un título para darle contexto (ej. el nombre de una sección).

**Cómo se ve:** mayúsculas, letras bien separadas entre sí, en un tamaño pequeño. Color verde institucional o un gris apagado, según el fondo.

**Para qué sirve:** ubicar al lector — decirle "esto que vas a leer pertenece a tal sección o tema" antes de mostrar el título grande.

---

### 5.3 Patrón decorativo (triángulos y texturas verdes)

**Qué es:** el elemento gráfico más reconocible de Qudox — una combinación de triángulos y texturas orgánicas en tonos verdes.

**Dónde aparece:** como una banda decorativa en el borde de una pieza, o como atmósfera de fondo en momentos de mayor presencia de marca (por ejemplo, una portada o un cierre).

**Reglas:**
- Se usa con intención, no en cualquier lado — un toque de marca, no un fondo que compite con el contenido.
- Nunca se usa detrás de texto largo (dificulta la lectura).
- Nunca se recolorea fuera de la familia de verdes de la marca.
- Nunca se trata como si fuera el logo (no es un sello ni una firma, es una textura decorativa).

---

### 5.4 Número de sección

**Qué es:** un número grande y estilizado (ej. `01`, `02`) que marca el inicio de una sección dentro de una pieza más larga.

**Cómo se ve:** tipografía de título de la marca, color verde brillante, tamaño grande.

**Para qué sirve:** dar ritmo y estructura a piezas con varias partes (ej. un documento largo, una serie de posts), para que el lector sepa en qué parte está.

---

### 5.5 Dato destacado (stat)

**Qué es:** un número o cifra mostrado en grande, como protagonista de una pieza o sección, acompañado de una descripción breve.

**Cómo se ve:** el número en un tamaño muy grande y en negrita, color verde (institucional o brillante, según el fondo). Debajo, una frase corta que explica qué significa ese número.

**Para qué sirve:** comunicar un resultado o dato importante de forma directa, sin rodeos.

---

### 5.6 Color de los títulos

**Regla general:** el título principal de cualquier pieza usa el color de texto normal — oscuro sobre fondo claro, blanco sobre fondo oscuro. El verde institucional no se usa para el título completo.

El verde sí se usa para **acentuar**: una palabra clave dentro de un título o texto, un dato o número destacado, un eyebrow, una línea divisoria, o el número de una sección. La regla no es "nunca usar verde cerca del título" — es "el título completo no es verde, pero sí puede tener detalles puntuales en verde para resaltar lo más importante".

**Pendiente de confirmar para redes sociales:** ¿se mantiene esta misma regla cuando se construya `07-redes-sociales.md`?

`[PENDIENTE — verificar con Mariano]`: confirmar que esta regla (título sin verde, verde solo para acentos) es intencional y no una coincidencia de los decks que ya existen.

---

### 5.7 Reglas visuales generales (qué sí / qué no)

#### ✅ Hacer

- Usar el verde institucional como color protagonista — nunca cyan ni amarillo como color principal (esos están reservados para producto digital). Única excepción: líneas decorativas finas (el footer de `section-divider`, o la variante oscura con líneas), nunca como fondo, texto o color protagonista.
- Usar la tipografía de títulos siempre en cursiva (itálica), nunca derecha.
- Sostener la mayoría del texto en la tipografía de cuerpo (Manrope), no en la de títulos.

#### ❌ Evitar

- Usar cyan o amarillo como color protagonista en cualquier pieza que no sea de producto digital.
- Usar la tipografía de títulos sin cursiva.
- Usar tipografías externas a las dos oficiales de la marca.
- Saturar una pieza con el patrón decorativo — debe sentirse como un toque, no como el fondo completo.
- Mezclar la paleta institucional (verde) con la paleta reservada de producto digital (cyan/amarillo) en una misma pieza.
- Convertir el patrón decorativo en un logo o sello de marca pública.

---

### 5.8 Dónde se usa cada cosa

Estos elementos no se usan igual en todos lados. Cada superficie (sección 6 (Presentaciones), `07-redes-sociales.md`) define cuáles de estos componentes aplica y cómo se adapta a su contexto — por ejemplo, un callout en una presentación puede verse distinto a un callout en un post de Instagram, aunque el concepto (caja con borde verde para resaltar algo) sea el mismo.

---

## 6 — Presentaciones — Qudox

> Reglas específicas para armar presentaciones (PPTX) de Qudox. Si vas a generar un deck, leé esto completo y respetalo al pie de la letra. Si algo no está aquí ni en los archivos base, no lo inventes: preguntá.

> **Esta superficie hereda de:**
> - sección 1 (Quiénes somos) — qué entregamos, a quién le hablamos
> - sección 2 (Voz y tono) — cómo suena el texto de cualquier slide
> - sección 3 (Colores y tipografía) — paleta y fuentes
> - sección 4 (Logo) — versiones y reglas del logo
> - sección 5 (Elementos gráficos) — callouts, eyebrows, patrón decorativo, números de sección, color de títulos
>
> Lo que sigue es específico de presentaciones — no se repite lo que ya vive en esos archivos.

---

### 6.1 Color aplicado a presentaciones

Las presentaciones usan el sistema verde (sección 3 (Colores y tipografía)). Cyan y amarillo no se usan, salvo la única excepción de la variante oscura con líneas (sección 6.9).

- **Slides claras (mayoría del deck):** fondo blanco, texto principal oscuro, acentos en verde institucional.
- **Slides oscuras (portadas, separadores, cierres):** fondo oscuro, texto principal blanco, acentos en verde brillante.
- **Proporción típica por slide:** 60–70% fondo y estructura, 20–25% texto, 10–15% acento verde.
- **Rojos / colores externos:** solo cuando el cliente o el dato lo exige (ej. benchmark de competidores). Nunca como acento institucional propio.

---

### 6.2 Escala tipográfica (puntos)

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

### 6.3 Anatomía de slides — tipos canónicos

Cualquier deck de Qudox se compone de combinaciones de estos tipos (9 en total, incluyendo las dos variantes agregadas después del repo original de Mariano).

#### 6.3.1 `cover` — Portada
Fondo oscuro con textura/patrón decorativo (sección 5 (Elementos gráficos)). Logo blanco centrado en el tercio superior. Título grande (88–96pt) blanco, centrado. Subtítulo blanco debajo, 2–3 líneas máx.

#### 6.3.2 `toc` — Índice
Fondo blanco. Eyebrow superior izquierda. Título principal debajo. Lista numerada en grid de 2 columnas (3 máx.): número de sección + línea divisoria + título del ítem + descripción breve. Footer con logo + banda de patrón.

#### 6.3.3 `section-divider` — Separador de sección

**`[ACTIVO — PROVISIONAL, pendiente de versión final de diseño]` (actualizado 2026-08)**

Fondo oscuro (`#0D1512`). Banda lateral vertical con textura verde sobre el borde izquierdo. Número de sección grande (verde brillante `#38E08C`). Título de la sección debajo, blanco. Subtítulo blanco, 1–2 líneas. Logo horizontal (versión blanca) en la esquina superior derecha.

**Composición y medidas** (en slide de 13.333" × 7.5", extraídas de la pieza de referencia aprobada por Manu):
- **Banda lateral:** asset `banda-lateral-verde-divider.jpg`, en `x=0`, ancho **0.95"**, alto completo **7.5"**. El ancho de 0.95" es provisional — el diseñador puede ajustarlo en la versión final.
- **Número de sección** (ej. "01"): Newsreader SemiBold Italic, ~60pt, verde brillante `#38E08C`. Posición aprox. `x=1.53"`, `y=2.15"`.
- **Título** (ej. "El problema"): Newsreader SemiBold Italic, ~72pt, blanco. Posición aprox. `x=1.53"`, `y=3.15"`.
- **Subtítulo:** Manrope, ~20pt, blanco. Posición aprox. `x=1.58"`, `y=4.75"`.
- **Logo horizontal blanco** en la esquina superior derecha, como objeto editable e independiente (no aplanado). Alto ~0.20", posición aprox. `x=11.20"`, `y=0.55"`.

**Estado provisional:** esta versión es oficial y se usa mientras el diseñador entrega la versión final (prevista para las próximas semanas). Las medidas exactas (ancho de banda, tamaños) pueden ajustarse. El asset `banda-lateral-verde-divider.jpg` es un recorte/compresión provisional del patrón; la versión final idealmente será un asset diseñado a la proporción correcta (~8:1).

> **`[REEMPLAZADO como divider — 2026-08]`** La versión anterior de este separador usaba el patrón de líneas finas `patron-lineas-decorativas-oscura.png` en el tercio inferior. **Ya no se usa como separador de sección** — reemplazada por la versión de banda lateral de arriba. El asset `patron-lineas-decorativas-oscura.png` NO se elimina: se mantiene en la variante oscura con líneas (sección 6.9, pausada), donde conserva su rol original. Solo cambió su uso como divider.

#### 6.3.3b `section-divider-centrado` — Separador centrado (confirmado 2026-06-25)

Segundo estilo de separador, más minimalista que el 3.3 — sin número de sección, sin footer, todo centrado:

- **Fondo:** verde oscuro tradicional `#0D1512` (el mismo de 3.3, no el gris de la sección 6.9).
- **Eyebrow:** centrado horizontalmente, Manrope Bold, ~13pt, color verde brillante (`#38E08C`), mayúsculas con tracking amplio (~3pt).
- **Título:** centrado horizontalmente, **Manrope ExtraBold (no Newsreader, no cursiva)** — distinto al 3.3, que sí usa Newsreader italic. ~54pt, blanco.
- **Sin logo ni footer** — deliberadamente minimalista, para transiciones simples (una palabra o frase corta).

**Cuándo usar cada uno:** 3.3 (con número + footer) para separadores con más contexto narrativo; 3.3b (centrado, minimalista) para transiciones rápidas de una palabra.

**Relación con `data-callout` (3.6):** comparten el patrón "eyebrow + elemento grande centrado sobre fondo oscuro", pero no son el mismo componente — `data-callout` muestra un **número/dato en verde brillante** con caption, mientras que `section-divider-centrado` muestra una **palabra o frase en blanco**, sin caption.

#### 6.3.4 `content-2col` — Contenido principal (texto + imagen)
Fondo blanco. Header con eyebrow + título + línea divisoria verde. Columna izquierda (~55%): sub-eyebrow, headline, body, callout opcional. Columna derecha (~40%): imagen con esquinas redondeadas. Footer con logo + banda de patrón.

#### 6.3.5 `content-grid` — Grid de comparación
Header igual a `content-2col`. Grid de 3–4 columnas, cada una con título de columna, sub-labels en mayúsculas, body breve.

#### 6.3.6 `data-callout` — Stat / dato destacado
Eyebrow pequeño. Número o dato grande en acento verde. Caption debajo. Acompañado de gráfico si aplica.

#### 6.3.7 `closing` — Cierre / frase de impacto
Fondo oscuro con patrón decorativo. Frase central única, grande, blanca, centrada (esta frase es específica de cada proyecto/deck — ej. "Movilidad con respaldo experto"). Eyebrow opcional debajo (nombre de fase + secciones cubiertas). Logo al pie.

**Obligatorio — confirmado por Manu (2026-06-25):** la frase *"Together, we power growth."* debe aparecer siempre en este slide, sin excepción, sea cual sea la frase central del proyecto. Se coloca como una línea adicional, más pequeña, cerca del logo (no reemplaza la frase central específica del deck — convive con ella).

#### 6.3.8 `title-paragraph-simple` — Título y párrafo simple
> Confirmado por Manu (2026-06-24), extraído del XML real de la plantilla del diseñador.

Fondo blanco. Versión simplificada de `content-2col`, sin columnas ni imagen — solo texto.

- **Título:** Newsreader SemiBold Italic, ~27.5pt, color de texto principal (`#1F2937`, no verde). Posición: x≈0.57", y≈0.69" (en slide de 13.333").
- **Párrafo:** Manrope Regular, ~16.3pt, color de texto principal. Posición: x≈0.65", y≈1.63".
- **Footer:** igual que `content-2col` — usar `footer-listo-para-logo.png` + logo encima (ver sección 6.12.1).

**Cuándo usar este tipo en vez de `content-2col`:** cuando el contenido es solo texto explicativo, sin necesidad de imagen ni columna lateral — por ejemplo, una transición o una nota breve dentro de una sección.

---

### 6.4 Estructura típica de un deck

1. `cover` — Portada con título y subtítulo del proyecto.
2. `toc` — Índice.
3. `section-divider` — Número + nombre de la primera sección.
4. `content-2col` × N — Slides de esa sección.
5. (Repetir 3–4 para cada sección.)
6. `closing` — Frase de cierre conectada a crecimiento (ver sección 2 (Voz y tono)).

**Regla de oro:** cada sección comienza con un `section-divider` numerado.

---

### 6.5 Principios de slide (no negociables)

1. Una idea fuerte por slide.
2. Títulos claros y contundentes, nunca frases vacías.
3. Máximo 4–6 líneas de body por columna.
4. Máximo 3–5 datos por slide.
5. Patrón decorativo con intención: footer en slides claras de contenido, atmósfera en portada/cierre, nada más.
6. Contraste alto: si dudás si se lee, no se lee.
7. Ritmo dark → light → dark a lo largo del deck.
8. El cierre siempre conecta con el propósito de Qudox (sección 1 (Quiénes somos)).

---

### 6.6 Especificaciones técnicas para generar el archivo PPTX

- **Dimensiones:** slide widescreen 16:9, 13.333" × 7.5".
- **Fuentes a referenciar:** `Newsreader SemiBold` (italic = true) y `Manrope`. Los archivos están en `/fonts`.
- **Márgenes:** 0.5" mínimo en cada lado.
- **Banda de footer con patrón:** últimos 0.7–1.0" verticales del slide.
- **Espaciado:** header→contenido 0.5", entre columnas 0.35", entre bloques 0.3".

---

### 6.7 Checklist antes de entregar un deck

- [ ] ¿La portada usa título grande + patrón decorativo + logo?
- [ ] ¿Hay un índice limpio con números de sección?
- [ ] ¿Cada sección empieza con un separador numerado?
- [ ] ¿Los slides claros de contenido tienen banda de patrón en el footer?
- [ ] ¿Cada título usa Newsreader Italic y cada body usa Manrope?
- [ ] ¿El título respeta la regla de color (sección 5.6 (Color de los títulos), dentro de sección 5 (Elementos gráficos))?
- [ ] ¿El cierre conecta con el propósito de Qudox?
- [ ] ¿La slide de cierre incluye "Together, we power growth."? (obligatorio, sin excepción)
- [ ] ¿Hay ritmo entre slides claras y oscuras?
- [ ] ¿Cero uso de cyan/amarillo, salvo que sea la variante oscura con líneas (sección 6.9) y solo en las líneas decorativas? ¿Cero fuentes fuera del sistema?
- [ ] ¿Todo el texto (títulos, párrafos, datos) es texto editable, nunca incrustado en una imagen?
- [ ] ¿El logo está en cada slide?
- [ ] ¿El texto respeta sección 2 (Voz y tono)?

---

### 6.9 Variante oscura con líneas (estilo alternativo)

> `[PAUSADO — se retoma en un próximo update]`. Esta sección queda documentada con lo ya confirmado (fondo, colores permitidos, divisor, regla del título), pero el catálogo completo de tipos de slide para esta variante (título solo, franja lateral, etc.) se construye más adelante, no ahora.
>
> **Para reactivar esto:** (1) conseguir el archivo real (.pptx o imágenes) de cada slide nueva — no alcanza con una descripción, hay que verificar specs reales (posición, color, rotación) contra el archivo, igual que se hizo con el footer y el separador de sección de la variante clara; (2) construir y mostrar una prueba antes de documentar nada como regla; (3) recién con eso confirmado, completar esta sección y actualizar el zip oficial con aprobación explícita de Manu.
>
> Ya hay dos assets explorados guardados en `surfaces-assets/presentaciones/` listos para retomar: `banda-footer-fondo-oscuro.png` (footer oscuro original de Mariano) y `franja-vertical-lineas-oscura.png` (franja lateral de líneas, usada en el test de "título solo" que se pausó). No están documentados como regla todavía — son punto de partida, no algo confirmado.

> Estilo alternativo confirmado por el diseñador, distinto a la variante con patrón de triángulos verdes. **Se usa solo cuando el pedido es explícitamente una presentación oscura, premium, sobria o ejecutiva** — nunca por defecto. Si no se especifica, se usa la variante tradicional (fondo claro / patrón verde) de las secciones 1 a 8.

#### 6.9.1 Fondo

Gris oscuro neutro `#2C2C2C` (no el negro-verde `#0D1512` de la variante tradicional — es un gris sin tinte de marca, a propósito).

#### 6.9.2 El elemento decorativo: líneas finas, no patrón sólido

En vez del patrón de triángulos y texturas, esta variante usa **líneas finas geométricas** (arcos, chevrons, diagonales) dispersas en los bordes superior e inferior del slide, tipo "sunburst". El asset suelto está en `patron-lineas-decorativas-oscura.png` (fondo transparente, solo las líneas).

> **Este asset no es exclusivo de esta variante** — el mismo archivo (usando solo su tercio inferior) es también el footer real y confirmado de `section-divider` (sección 6.3.3), que vive dentro de la variante tradicional/clara. Coincide con la descripción original de Mariano de "líneas finas... solo en slides oscuras", que aplica en general a cualquier slide de fondo oscuro, no solo a esta variante.

**Colores permitidos en estas líneas — excepción real a la regla general de cyan/amarillo:**
- Cyan `#00FFEF`
- Amarillo `#EAFF00`
- Blanco / gris claro, como tercer tono de apoyo

Esta es la única situación documentada en todo el sistema donde cyan y amarillo se usan en una presentación. No se extiende a ningún otro elemento (no fondos, no texto, no callouts).

#### 6.9.3 Título y subtítulo

Mismo criterio que la variante tradicional: el título va en blanco (texto normal), nunca en color de acento. Cuando hay un eyebrow tipo "Subtítulo" arriba del título, va en blanco y negrita (Manrope Bold), no en verde.

#### 6.9.4 Divisor bajo el título

Una línea divisoria horizontal partida en dos colores: la primera mitad en amarillo, la segunda mitad en cyan. Es el único lugar donde estos dos colores aparecen juntos de forma intencional como firma visual de esta variante.

#### 6.9.5 Logo

Igual que la variante tradicional — versión blanca del logo, abajo a la izquierda.

---

### 6.10 Layout de banda lateral (variante clara)

Además del footer horizontal (sección 6.4), existe un layout alternativo donde el patrón verde ocupa una **banda vertical en el lado izquierdo** del slide (full height), en vez de una banda horizontal en el footer. El título y el contenido se acomodan en el espacio restante a la derecha.

Assets de referencia: `banda-lateral-patron-verde-1.png`, `banda-lateral-patron-verde-2.png`.

**Cuándo usar este layout vs. el de footer horizontal:** no está definido todavía — por ahora, usar el de footer horizontal (secciones 1-8) como default, y el lateral como alternativa válida si el contenido se beneficia de más espacio vertical para el título (ej. títulos largos de 2 líneas).

---

### 6.11 Tabla resumen de layouts y componentes

| Elemento | Tipo de asset | Uso | Regla |
| --- | --- | --- | --- |
| `fondo-portada.jpg` | Imagen de referencia compuesta | Ejemplo completo de portada (patrón verde tradicional) | Usar como referencia visual, no editar directo |
| `banda-footer-fondo-claro.png` | Componente compuesto (logo + patrón, ya integrado) | **Confirmado como correcto por Manu (2026-06-24).** Footer de slides de contenido: usar la imagen completa, estirada al ancho total del slide (13.333") a su proporción natural (~0.946" de alto). | No recortar, no separar el logo, no repetir. Una sola pieza. |
| `footer-listo-para-logo.png` | Fondo pre-combinado, listo para usar | **Asset oficial para footer con logo editable.** Ya incluye el recorte correcto, el parche de textura y el oscurecido — solo hace falta agregar el logo encima. | No reconstruir las capas manualmente si este archivo ya existe. |
| `banda-footer-claro-nueva.png`, `parche-textura-logo.png` | Piezas fuente (sin combinar) | Solo para reconstruir `footer-listo-para-logo.png` si cambia el asset original del diseñador. | No usar directamente en un deck — son los ingredientes, no el resultado final. |
| `banda-lateral-patron-verde-1/2.png` | Componente de patrón suelto | Banda lateral vertical (layout alternativo, sección 6.10) | Sin logo ni texto — el logo se agrega encima por separado |
| `patron-lineas-decorativas-oscura.png` | Componente de patrón suelto, transparente | Líneas decorativas de la variante oscura (sección 6.9) | Solo sobre fondo `#2C2C2C`. Colores cyan/amarillo permitidos únicamente en este asset |
| Logo (`logo/*.svg`) | Asset independiente | Se coloca encima de cualquier fondo o banda | Nunca incrustado dentro de una imagen de fondo nueva — usar el SVG real |
| Placeholders ("Título", "Subtítulo", "Párrafo") | Guía de composición | Indican posición y jerarquía en una plantilla de referencia | Nunca se copian literal a un deck final — se reemplazan por contenido real y editable, nunca incrustado como imagen |

`[PENDIENTE — verificar con Manu, hallazgo 2026-07-08]`: existen dos bandas de footer para fondo claro conviviendo en el repo (`banda-footer-fondo-claro.png`, la versión todo-en-uno confirmada arriba, y `banda-footer-claro-nueva.png`, listada como pieza fuente para reconstruir `footer-listo-para-logo.png`). La tabla de arriba ya asigna un uso distinto a cada una, pero no queda documentado por qué conviven dos assets con nombre tan parecido ni si `banda-footer-claro-nueva.png` reemplaza a `banda-footer-fondo-claro.png` a futuro. Confirmar si alguna debería retirarse del repo para evitar que alguien use la incorrecta por error.

`[PENDIENTE — verificar con Manu, hallazgo 2026-07-08]`: de los 10 archivos en `surfaces-assets/presentaciones/`, revisar que ninguno haya quedado fuera de esta tabla a medida que el sistema crece. Al 2026-07-08, los 10 están cubiertos (8 con regla activa, 2 exploratorios en sección 6.9).

---

### 6.12 Texto siempre editable

Ningún título, subtítulo, párrafo, número, fecha o nombre de cliente va incrustado dentro de una imagen. Todo el contenido textual de un deck final debe ser texto editable en el archivo `.pptx` — los placeholders de las plantillas de referencia indican dónde y con qué jerarquía va ese texto, pero el texto real siempre se agrega como texto, nunca "quemado" en un PNG o JPG de fondo.

### 6.12.1 Sobre el logo y el footer — confirmado por Manu (2026-06-24)

**Para presentaciones donde el logo debe quedar editable por separado**, usar `footer-listo-para-logo.png` como fondo — es un único archivo que ya combina las 3 capas de fondo necesarias (banda principal recortada correctamente + parche de textura + oscurecido para contraste). Solo se necesitan **2 elementos**, no 4:

1. **`footer-listo-para-logo.png`** como fondo del footer.
2. **El logo** (versión blanca), encima.

**Medidas de referencia** (en un slide de 13.333" de ancho):
- Footer: ancho 12.77" (95.8% del slide, no llega al borde derecho — así es el diseño original), alto ~0.92".
- Logo: alto ~0.32", posicionado a 0.5" del borde izquierdo, centrado verticalmente dentro del footer.

`[CONFIRMADO]`: validado visualmente por Manu contra el render real de la plantilla del diseñador (slide8) — coincide. El asset pre-combinado produce el mismo resultado exacto que armar las capas por separado, pero sin riesgo de que una IA las combine mal (orden incorrecto, medidas distintas, etc.).

**Cómo se construyó `footer-listo-para-logo.png`** (por si hay que rehacerlo con un asset nuevo del diseñador): banda principal recortada 4.14% desde la izquierda + parche de textura (fragmento rotado -90° de la banda lateral) pegado en la zona del logo + rectángulo negro al 22% de opacidad encima de esa zona, todo aplanado en un solo PNG.

`[PENDIENTE]`: documentar el mismo asset pre-combinado para la variante de fondo oscuro y para el layout de banda lateral (sección 6.10), si también necesitan logo editable.

### 6.12.2 Cómo obtener los assets de portada y footers (2026-07-08)

Estos archivos son arte de marca real (texturas fotográficas y patrones compuestos) y **no se generan**: se descargan de su URL oficial al momento de armar la presentación. Viven en este mismo repositorio (`Qudox-Oficial/Qudox-Design-System`), en `fuente-editable/surfaces-assets/presentaciones/`.

- **Portada y cierre** (`fondo-portada.jpg`):
  `https://raw.githubusercontent.com/Qudox-Oficial/Qudox-Design-System/main/fuente-editable/surfaces-assets/presentaciones/fondo-portada.jpg`

- **Footer con logo editable** (`footer-listo-para-logo.png`, ver sección 6.12.1):
  `https://raw.githubusercontent.com/Qudox-Oficial/Qudox-Design-System/main/fuente-editable/surfaces-assets/presentaciones/footer-listo-para-logo.png`

- **Footer todo-en-uno, sin logo editable** (`banda-footer-fondo-claro.png`):
  `https://raw.githubusercontent.com/Qudox-Oficial/Qudox-Design-System/main/fuente-editable/surfaces-assets/presentaciones/banda-footer-fondo-claro.png`

- **Banda lateral del `section-divider`** (`banda-lateral-verde-divider.jpg`, ver sección 6.3.3):
  `https://raw.githubusercontent.com/Qudox-Oficial/Qudox-Design-System/main/fuente-editable/surfaces-assets/presentaciones/banda-lateral-verde-divider.jpg`

- **Banda lateral, layout alternativo** (sección 6.10):
  `https://raw.githubusercontent.com/Qudox-Oficial/Qudox-Design-System/main/fuente-editable/surfaces-assets/presentaciones/banda-lateral-patron-verde-1.png`
  `https://raw.githubusercontent.com/Qudox-Oficial/Qudox-Design-System/main/fuente-editable/surfaces-assets/presentaciones/banda-lateral-patron-verde-2.png`

- **Patrón de líneas** (`patron-lineas-decorativas-oscura.png`) — `[REEMPLAZADO como divider]`, se mantiene solo para la variante oscura (sección 6.9, pausada):
  `https://raw.githubusercontent.com/Qudox-Oficial/Qudox-Design-System/main/fuente-editable/surfaces-assets/presentaciones/patron-lineas-decorativas-oscura.png`

Descargá el archivo correspondiente e insertalo según las medidas ya documentadas (sección 6.12.1 para footers, sección 6.3.1 para portada). **Si la descarga falla, avisá explícitamente — no improvises un reemplazo ni generes el deck sin portada/footer en silencio.**

Los assets pausados de la variante oscura (`banda-footer-fondo-oscuro.png`, `franja-vertical-lineas-oscura.png`) y las piezas fuente (`banda-footer-claro-nueva.png`, `parche-textura-logo.png`) también están en ese repositorio, pero no tienen URL oficial de uso todavía — no son parte de esta lista a propósito.

---

### 6.13 Fuente y mantenimiento

**Fuente y mantenimiento:** decks de referencia *MOTOCITY — Fase 2 (Believe It)* y *Katana — Benchmark Línea Gráfica*, más la plantilla de referencia con variante oscura y layouts de banda lateral (2026-06-24).

`[PENDIENTE — verificar con Mariano]`: confirmar si estos dos decks siguen siendo los ejemplos más representativos, o si hay decks más recientes que deberían reemplazarlos como referencia.

---
