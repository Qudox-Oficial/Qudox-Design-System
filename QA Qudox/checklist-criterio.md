# Checklist de criterio — QA de presentaciones Qudox

> Resumen de respaldo. Si el design system completo de Qudox está disponible en la conversación, usar ese como fuente principal — esto es solo un resumen condensado para cuando no esté disponible.

## Colores

- Verde institucional `#16B87A` es el color de marca. Verde brillante `#38E08C` para acentos de energía.
- Cyan (`#00FFEF`) y amarillo (`#EAFF00`) están reservados — su único uso permitido es como líneas decorativas finas en la variante oscura con líneas. Nunca como fondo, texto, o color protagonista, y nunca en la variante clara/tradicional.
- El título de un slide nunca usa el verde institucional como color del texto completo — usa el color de texto normal (oscuro sobre claro, blanco sobre oscuro). El verde se reserva para acentos puntuales (eyebrow, número de sección, una palabra clave, un dato).

## Tipografía

- Solo dos fuentes: **Newsreader SemiBold** (siempre en cursiva/italic, solo para títulos y momentos de impacto) y **Manrope** (todo lo demás, en cualquiera de sus pesos).
- Nunca fuentes externas al sistema (Calibri, Arial, Aptos, etc. como elección real — no contar residuos técnicos de exportación como `buFont` sin contenido visible).

## Estructura y layout

- Una idea fuerte por slide — si hay dos títulos o dos mensajes principales, debería ser dos slides.
- El logo siempre es un elemento independiente y editable (no incrustado en una imagen de fondo) salvo que el deck use explícitamente el asset compuesto de referencia visual.
- Ningún texto (título, párrafo, dato, fecha, nombre de cliente) va "quemado" dentro de una imagen — siempre como texto editable real.
- El footer/patrón usado debe corresponder al tipo de slide (ver el design system real para la lista de tipos) y no debe verse estirado, distorsionado, ni con una costura de repetición visible. **El footer va únicamente del lado izquierdo, con su ancho y proporción original — nunca estirado para cubrir todo el ancho de la slide ni extendido hacia el lado derecho.**

## Voz y tono

- El texto debe sonar estratégico, claro, consultivo y fundamentado — nunca genérico, vacío, o con frases tipo "agencia 360", "hacemos de todo", "resultados garantizados".
- Evitar lenguaje técnico que no se conecte con un beneficio de negocio.

## Mensaje obligatorio

- La slide de cierre debe incluir literalmente **"Together, we power growth."** — sin excepción, en cualquier presentación de Qudox. Si falta, marcarlo como corrección de prioridad alta (no es solo una sugerencia de estilo).

## Variante visual

- La variante clara (fondo blanco/patrón verde) es la default. La variante oscura con líneas (cyan/amarillo/blanco) solo se usa si el usuario pidió explícitamente algo oscuro, premium, sobrio o ejecutivo.
- No mezclar ambas variantes en un mismo deck sin que el usuario lo haya pedido o sin una razón de diseño explícita (ej. portada de marca completa + contenido en variante clara, que sí es un patrón válido ya documentado).
