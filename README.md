# Qudox Brand System

Este repositorio tiene **dos carpetas, con dos propósitos distintos.**

## `sistema-consolidado/` — para conectar a una IA

Tiene **2 archivos, uno por herramienta.** No son intercambiables — cada uno resuelve portada/footers de una forma distinta, según lo que esa herramienta puede hacer.

| Herramienta | Archivo a subir | Cómo resuelve portada/footers |
| --- | --- | --- |
| **Claude** (Chat o Design) | `QUDOX-DESIGN-SYSTEM.md` | Descarga las imágenes por URL en el momento, desde `fuente-editable/surfaces-assets/` de este repo |
| **ChatGPT** | `QUDOX-DESIGN-SYSTEM-CHATGPT.md` | Las imágenes ya están adentro del archivo, codificadas en base64 — no descarga nada |

**Si subís el archivo equivocado a la herramienta equivocada, no va a funcionar bien** — por ejemplo, ChatGPT no puede descargar desde una URL, así que si le das el archivo de Claude, va a fallar al querer traer la portada o el footer (o va a improvisar algo parecido, que es peor). Fijate siempre en el nombre exacto del archivo antes de subirlo.

Ninguna de las dos IAs "elige" el archivo por su cuenta — quien configura el Proyecto (vos, o cualquiera del equipo) tiene que subir manualmente el que corresponda, la primera vez que arma el Proyecto de esa herramienta.

### Cómo conectarlo según la herramienta (importante, no son iguales)

**Claude:** podés conectar el repositorio completo por GitHub, siempre que después uses **"Configure files"** dentro del Proyecto para angostar la selección a **solo** `sistema-consolidado/QUDOX-DESIGN-SYSTEM-CLAUDE.md`. Sin ese paso, vas a tener todo el repo en memoria (los 7 archivos de `fuente-editable/` + los 2 archivos consolidados) y vas a volver a los problemas de capacidad que ya resolvimos.

**ChatGPT:** no conectar el repositorio completo — **subir directo** `QUDOX-DESIGN-SYSTEM-CHATGPT.md` como archivo suelto al Proyecto. Hasta donde sabemos, ChatGPT no tiene una opción para filtrar archivos dentro de un repo ya conectado (a diferencia de Claude); si se conecta el repo completo, no hay forma de decirle después "usá solo este archivo". Si por algún motivo el repo completo termina conectado igual, es obligatorio agregar en el campo "Instrucciones" del Proyecto una línea como:

> *Este Proyecto usa exclusivamente `QUDOX-DESIGN-SYSTEM-CHATGPT.md` como fuente del sistema de marca. Ignorá cualquier otro archivo visible en el conocimiento del Proyecto.*

## `fuente-editable/` — para editar el sistema

Contiene los archivos separados por tema (`00` a `06`), la carpeta `logo/` con los SVG y PNG reales, `fonts/` con las tipografías, y `surfaces-assets/` con los assets visuales de presentaciones.

Acá es donde se edita el sistema cuando cambia algo (un color, una regla, el logo, una nueva URL de asset). Cuando termina una edición, se vuelve a armar `QUDOX-DESIGN-SYSTEM.md` juntando los cambios, y se reemplaza el archivo de `sistema-consolidado/`.

## Assets de portada y footers

Las imágenes de portada y footers (texturas fotográficas que no se pueden convertir a texto) viven en `fuente-editable/surfaces-assets/presentaciones/`, dentro de este mismo repositorio público. Antes estaban en un repo aparte (`qudox-visual-assets`), que ya no se usa. **Solo las descarga la versión de Claude** (`QUDOX-DESIGN-SYSTEM-CLAUDE.md`), por URL — ver sección 6.12.2. La versión de ChatGPT no depende de este repositorio: ya tiene las imágenes adentro, en base64.

Si se actualiza un asset acá, hay que actualizar **las dos versiones** del sistema consolidado — la de Claude (cambia la URL si cambia el nombre del archivo) y la de ChatGPT (hay que regenerar el bloque base64 con el archivo nuevo).

## Regla simple

| Si querés... | Andá a... |
| --- | --- |
| Conectar el sistema a Claude | `sistema-consolidado/QUDOX-DESIGN-SYSTEM.md` |
| Conectar el sistema a ChatGPT | `sistema-consolidado/QUDOX-DESIGN-SYSTEM-CHATGPT.md` |
| Editar un color, una regla, o el logo | `fuente-editable/` |
| Agregar o cambiar un asset de portada/footer | `fuente-editable/surfaces-assets/`, y actualizar **las dos** versiones consolidadas |
| Ver qué cambió recientemente | `CHANGELOG.md`, en la raíz |
