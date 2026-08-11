# QA de presentaciones Qudox

Instrucciones únicas — el mismo archivo se usa igual en Claude y en ChatGPT, sin versiones separadas por herramienta.

## Cuándo se activa

Siempre que se pida revisar, auditar, validar o hacer QA a una presentación de Qudox; se pregunte si un `.pptx` "cumple los lineamientos de marca", "sigue el design system" o "está on-brand"; o se pida ayuda para corregir un deck antes de entregarlo.

**En Claude**, si esta instrucción está en el contexto del Proyecto, se puede activar sola cuando el pedido calza con lo de arriba. **En ChatGPT**, no se activa sola — hay que pedirlo de forma explícita (ver "Cómo pedirlo" al final).

## Por qué esta revisión no confía en la misma conversación que generó el deck

Si la conversación que generó la presentación también la revisa, tiende a confirmar que está bien (sesgo de confirmación). Tratá el deck como si lo hubiera generado otra persona — no asumas que algo está bien solo porque "así se pensó al generarlo".

## Qué se necesita antes de empezar

1. **El archivo `.pptx`** a revisar.
2. **El design system de Qudox** — si no está ya conectado en la conversación/Proyecto, pedirlo antes de seguir. Sin él no se puede confirmar la paleta real, las reglas de cada tipo de slide, ni la voz de marca actualizada. Si solo se tiene este archivo sin el design system completo, usar `checklist-criterio.md` como respaldo — es un resumen, no el documento completo; preferir siempre el sistema real si está disponible.

## Paso 1 — Chequeo automático (colores y fuentes)

Ejecutar `check_colors_fonts.py` sobre el archivo, usando ejecución de código (Code Interpreter en ChatGPT, entorno de análisis en Claude):

```bash
python check_colors_fonts.py archivo.pptx
```

**Qué SÍ detecta:** colores y fuentes usados en texto y formas vectoriales que no estén en la paleta oficial, y colores reservados (cyan/amarillo) usados fuera de la variante oscura con líneas.

**Qué NO detecta:** colores incluidos dentro de imágenes o fondos rasterizados (PNG/JPG) — esos requieren el Paso 2, no aparecen en el XML como color de texto.

## Paso 2 — Revisión visual (criterio)

Convertir el deck a imágenes e inspeccionar slide por slide contra `checklist-criterio.md` (o directamente contra el design system real si está disponible en la conversación):

- ¿El título usa color de texto normal, nunca el verde institucional como color del título completo?
- ¿Hay una sola idea fuerte por slide, o se mezclan varias?
- ¿El texto suena a la voz de marca, o se siente genérico?
- ¿El logo está presente, legible, y es un elemento editable — no quemado dentro de una imagen de fondo?
- ¿Hay texto incrustado en una imagen que debería ser texto editable?
- ¿Se usa el footer/patrón correcto para el tipo de slide, sin distorsión, sin estirarse, y ubicado únicamente del lado izquierdo con su proporción original — nunca extendido hacia la derecha?
- ¿La variante (clara/oscura) es la correcta, y no una mezcla sin razón?
- ¿Dimensiones de slide, tamaño de logo y pesos tipográficos coinciden exacto con el sistema — no aproximados?

## Paso 3 — Reporte y corrección

Nunca responder solo "está bien" o "está mal". Formato de reporte siempre:

```
Slide N — [qué está mal, específico] — [qué regla no se cumple] — [cómo corregirlo]
```

Si una slide cumple todo, decirlo explícitamente ("Slide N: cumple todas las reglas revisadas") — el silencio no se interpreta como aprobado.

**Si el pedido incluye corregir (no solo reportar)** — por ejemplo "hacé QA y corregí lo que encuentres" — aplicar cada corrección directamente sobre el archivo antes de entregarlo, no dejarlas solo listadas para que otra persona las haga a mano. Entregar el `.pptx` corregido junto con el reporte de qué se cambió en cada slide, para que quede registro de qué se tocó.

**Si el pedido es solo de auditoría** (sin pedir corrección explícita) — dejar el reporte con la lista de correcciones priorizadas, sin modificar el archivo.

## Cómo pedirlo

**Solo auditoría (sin corregir):**
> *"Hacé QA de esta presentación contra el design system de Qudox."*

**Auditoría + corrección directa (recomendado para el uso diario):**
> *"Hacé QA de esta presentación contra el design system de Qudox y corregí directamente cualquier problema que encuentres — colores, fuentes, dimensiones, logo, tipografía. Entregame el archivo ya corregido junto con el reporte de qué se cambió."*

En Claude puede dispararse solo si el pedido calza con la lista de arriba; en ChatGPT siempre hay que pedirlo así de explícito.
