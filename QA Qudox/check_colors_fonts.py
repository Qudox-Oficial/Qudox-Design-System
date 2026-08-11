#!/usr/bin/env python3
"""
Extrae todos los colores (hex) y fuentes usados en un archivo .pptx,
y los compara contra la paleta y tipografías oficiales de Qudox.

Uso:
    python check_colors_fonts.py archivo.pptx
"""
import sys
import re
import zipfile
import xml.etree.ElementTree as ET

# Paleta oficial de Qudox (ver 03-colores-y-tipografia.md del design system)
COLORES_PERMITIDOS = {
    "16B87A": "Verde Qudox (institucional)",
    "38E08C": "Verde brillante",
    "B6E02A": "Verde-amarillo",
    "C5D83A": "Verde-amarillo apagado",
    "0D1512": "Negro-verde (fondo oscuro)",
    "06241B": "Verde muy oscuro",
    "1F4035": "Verde bosque",
    "26322C": "Gris-verde oscuro",
    "2C2C2C": "Gris oscuro neutro (variante de líneas)",
    "1F2937": "Texto principal",
    "3A463F": "Texto secundario",
    "5D6B63": "Texto apagado",
    "FFFFFF": "Blanco",
    "E5E5DD": "Crema",
    "E7F3EC": "Verde clarísimo (tint)",
}

# Reservados: solo permitidos como líneas decorativas en la variante oscura con líneas
COLORES_RESERVADOS = {
    "00FFEF": "Cyan — solo como línea decorativa en variante oscura, nunca como fondo/texto/protagonista",
    "EAFF00": "Amarillo — mismo caso que el cyan",
    "01FFEF": "Cyan (variante de exportación) — mismo caso",
    "EFFF04": "Amarillo (variante de exportación) — mismo caso",
}

FUENTES_PERMITIDAS = {"newsreader semibold", "newsreader", "manrope"}


def extraer_xml_slides(pptx_path):
    """Devuelve el contenido XML de cada slide dentro del pptx."""
    with zipfile.ZipFile(pptx_path) as z:
        nombres = [n for n in z.namelist() if re.match(r"ppt/slides/slide\d+\.xml$", n)]
        nombres.sort(key=lambda n: int(re.search(r"\d+", n).group()))
        return {n: z.read(n).decode("utf-8", errors="ignore") for n in nombres}


def buscar_colores(xml_content):
    return set(re.findall(r'srgbClr val="([A-Fa-f0-9]{6})"', xml_content))


def buscar_fuentes(xml_content):
    return set(re.findall(r'typeface="([^"]+)"', xml_content))


def main():
    if len(sys.argv) < 2:
        print("Uso: python check_colors_fonts.py archivo.pptx")
        sys.exit(1)

    pptx_path = sys.argv[1]
    slides = extraer_xml_slides(pptx_path)

    print(f"Analizando {len(slides)} slide(s) en {pptx_path}\n")

    hubo_violacion = False

    for nombre, xml in slides.items():
        slide_num = re.search(r"slide(\d+)\.xml", nombre).group(1)
        colores = buscar_colores(xml)
        fuentes = buscar_fuentes(xml)

        colores_no_reconocidos = []
        colores_reservados_usados = []
        for c in colores:
            c_upper = c.upper()
            if c_upper in COLORES_PERMITIDOS:
                continue
            elif c_upper in COLORES_RESERVADOS:
                colores_reservados_usados.append(c_upper)
            else:
                colores_no_reconocidos.append(c_upper)

        fuentes_no_permitidas = [
            f for f in fuentes
            if not f.lower().startswith(("manrope", "newsreader"))
            and "bullet" not in f.lower()  # ignorar fuentes de viñetas residuales
        ]

        if colores_no_reconocidos or colores_reservados_usados or fuentes_no_permitidas:
            hubo_violacion = True
            print(f"--- Slide {slide_num} ---")
            if colores_no_reconocidos:
                print(f"  ⚠️  Colores fuera de la paleta oficial: {', '.join('#'+c for c in colores_no_reconocidos)}")
            if colores_reservados_usados:
                for c in colores_reservados_usados:
                    print(f"  ⚠️  Color reservado usado (#{c}): {COLORES_RESERVADOS[c]} — verificar que sea intencional")
            if fuentes_no_permitidas:
                print(f"  ⚠️  Fuentes fuera del sistema: {', '.join(fuentes_no_permitidas)}")
            print()

    if not hubo_violacion:
        print("✅ No se encontraron colores ni fuentes fuera del sistema de marca.")
    else:
        print("Revisar los puntos marcados con ⚠️ arriba. Esto NO incluye criterio visual")
        print("(jerarquía, una idea por slide, color del título, etc.) — eso requiere revisión")
        print("aparte siguiendo references/checklist-criterio.md")


if __name__ == "__main__":
    main()
