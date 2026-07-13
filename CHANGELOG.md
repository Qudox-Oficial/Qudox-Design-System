# Changelog

## Resumen: v0.5 → v0.6 → v0.7

**v0.5** — el sistema vivía como 7 archivos `.md` separados (`00` a `06`) más carpetas sueltas (`logo/`, `fonts/`, `surfaces-assets/`). Para usarlo con una IA, había que conectar el repositorio completo o adjuntar archivos a mano en cada chat.

**v0.6** — primer intento de consolidación: **un solo archivo** para ambas IAs, con el logo embebido en SVG y las imágenes de portada/footers accesibles por URL desde el repositorio público. Funcionó para Claude, pero se descartó como versión final por dos problemas: (1) en la práctica seguía habiendo fricción de peso/capacidad en algunos escenarios de Claude, y (2) no se adaptaba a ChatGPT, cuyo entorno de generación no puede descargar archivos desde URLs externas — necesitaba las imágenes embebidas, no enlazadas. Un solo archivo no podía servir bien a las dos herramientas a la vez.

**v0.7** — se separa en **dos archivos consolidados, uno por herramienta**, según lo que cada una puede hacer:
- `QUDOX-DESIGN-SYSTEM-CLAUDE.md` — liviano (~82 KB), con el logo en SVG y las imágenes por URL (Claude sí puede descargarlas).
- `QUDOX-DESIGN-SYSTEM-CHATGPT.md` — pesado (~2 MB), con el logo en SVG y las imágenes embebidas directo en base64 (ChatGPT no descarga, pero sí reconstruye desde texto).

Ambos comparten exactamente el mismo contenido de marca (secciones 1 a 5 idénticas); solo difieren en cómo resuelven portada/footers. La fuente editable (`00` a `06` sueltos, `logo/`, `fonts/`, `surfaces-assets/`) se mantiene en `fuente-editable/` para cuando algo cambia — de ahí se vuelven a armar los dos archivos únicos.

---

## 2026-07-08 — Consolidación, corrección de logo, y automatización de portada/footers

### 1. Nuevo: `sistema-consolidado/QUDOX-DESIGN-SYSTEM.md`

Junta las 6 secciones de contenido (`01` a `06`) más el vector real del logo, en un solo archivo (~82 KB). Reemplaza la necesidad de conectar el repositorio completo a un Proyecto de IA — el conector contaba cada archivo (fuentes, PNG, SVG) contra el límite de capacidad, aunque el peso real en texto fuera mínimo, y eso disparaba el modo de búsqueda (RAG) antes de lo necesario.

Los archivos `00` a `06` en `fuente-editable/` siguen siendo la fuente que se edita. El archivo único se re-arma a partir de ellos.

### 2. Corrección: archivos de logo mal nombrados

- `logo/qudox-simbolo-blanco.svg` → renombrado a `logo/qudox-logo-horizontal-sin-descriptor-blanco.svg`
- `logo/qudox-simbolo-oscuro.svg` → renombrado a `logo/qudox-logo-horizontal-sin-descriptor-oscuro.svg`
- Mismos renombres para las versiones `.png`, en este repo y en `qudox-visual-assets`.

Se verificó la proporción real de cada SVG contra la tabla de `04-logo.md`: los archivos "símbolo" median 5.65:1 (coincide con "horizontal sin descriptor"), no ~1:1.18 (símbolo Q aislado). Confirmado también renderizando el archivo — contienen el wordmark "QUDOX" completo, no un ícono.

**Consecuencia:** el símbolo Q aislado (para avatares, favicons, espacios muy reducidos) no existe como vector en este repositorio. Pendiente: encargarlo a diseño.

### 3. El logo ya no se adjunta — vive embebido en el archivo consolidado

Se extrajo el código SVG real de `qudox-logo-horizontal-blanco.svg`, `qudox-logo-horizontal-sin-descriptor-blanco.svg` y `qudox-logo-vertical-blanco.svg` y se insertó directo como bloque de código en la sección 4 del archivo consolidado. Blanco/oscuro comparten la misma geometría (verificado comparando los paths), solo cambia el color de relleno.

Probado extrayendo el SVG del `.md` e insertándolo en un `.pptx` de prueba: queda como objeto de imagen real (`<p:pic>`), seleccionable y movible — cumple la regla de "logo siempre editable, nunca incrustado en el fondo".

### 4. Nuevo repositorio público: `Qudox-Oficial/qudox-visual-assets`

Repositorio separado, público, solo con imágenes (sin texto de marca ni estrategia — no expone nada sensible). Aloja los assets fotográficos que no se pueden convertir a texto sin perder calidad: portada y footers.

**Nueva sección 6.12.2** en `06-presentaciones.md` (y en el consolidado): las URLs de descarga directa (`raw.githubusercontent.com/...`) de los 6 assets confirmados. Probadas con `curl`, responden `HTTP 200`.

Con esto, generar una presentación **ya no requiere adjuntar `fondo-portada.jpg` ni `footer-listo-para-logo.png` al chat manualmente** — se descargan solos.

### 5. Se evaluó y descartó: "receta" geométrica en vez de imagen real, para portada y footers

Se probó vectorizar la textura de portada (resultado no utilizable — la textura orgánica se pierde) y reconstruir el footer con formas nativas de PowerPoint (degradado + triángulos + grano). La versión geométrica se acerca en espíritu pero no iguala el original fotográfico. Queda descartada como reemplazo; sigue siendo válida solo para patrones 100% geométricos (como `patron-lineas-decorativas-oscura.png`, que si es vectorizable).

### 6. Pendientes detectados, todavía sin resolver

- **Símbolo Q aislado:** no existe como vector.
- **Footers duplicados:** `banda-footer-fondo-claro.png` y `banda-footer-claro-nueva.png` conviven sin que quede claro si una reemplaza a la otra.
- **Patrón decorativo de triángulos:** no existe como asset suelto (sin logo ni texto encima).
- **Variante oscura completa:** sigue pausada. Sus 2 assets (`banda-footer-fondo-oscuro.png`, `franja-vertical-lineas-oscura.png`) están en `qudox-visual-assets` pero sin URL oficial en el sistema todavía.
