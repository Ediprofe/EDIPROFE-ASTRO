# 📚 Sitio Educativo Astro

Sistema de gestión de contenido educativo con renderizado LaTeX robusto y auto-embeds de YouTube.

## 🚀 Inicio rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📁 Estructura del proyecto

```
sitio-educativo/
├── src/
│   ├── content/           # Contenido del docente (Markdown)
│   │   ├── matematicas/
│   │   ├── fisica/
│   │   └── quimica/
│   ├── components/        # Componentes Astro
│   ├── layouts/           # Layouts de página
│   ├── pages/             # Páginas del sitio
│   ├── plugins/           # Plugins de Markdown
│   ├── styles/            # Estilos CSS
│   └── utils/             # Utilidades
├── public/                # Archivos estáticos
├── scripts/               # Scripts auxiliares
└── package.json
```

## 📝 Cómo agregar contenido

### Estructura de carpetas

El contenido sigue una jerarquía de 4 niveles:

```
src/content/
└── [MATERIA]/
    └── [UNIDAD]/
        └── [BLOQUE]/
            └── [LECCIÓN].md
```

**Ejemplo:**
```
src/content/matematicas/algebra/bloque-01-fundamentos/01-introduccion.md
```

### Crear una nueva lección

Puedes usar el script interactivo:

```bash
npm run new:lesson
```

O crear el archivo manualmente siguiendo la estructura.

### Formato del archivo Markdown

```markdown
---
title: Título de la Lección
description: Descripción opcional
---

# Título de la Lección

## Sección 1

Texto con fórmula inline: $E = mc^2$

Fórmula en bloque:

$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

## Video explicativo

https://www.youtube.com/watch?v=VIDEO_ID

## Tabla con fórmulas

| Función | Derivada |
|---------|----------|
| $x^n$ | $nx^{n-1}$ |
| $e^x$ | $e^x$ |
```

## ✨ Características

- **LaTeX automático**: Usa `$...$` para fórmulas inline y `$$...$$` para bloques
- **Videos YouTube**: Solo pega la URL y se convierte en embed automáticamente
- **Navegación automática**: Se genera a partir de la estructura de carpetas
- **Responsive**: Funciona en móviles, tablets y desktop
- **Modo oscuro**: Detecta preferencia del sistema
- **100% estático**: Rendimiento óptimo

## 🧪 Validación

Después de construir, valida que todo el LaTeX se renderizó:

```bash
npm run build
```

El script de validación se ejecuta automáticamente.

## 📐 Macros LaTeX disponibles

| Macro | Resultado |
|-------|-----------|
| `\R` | $\mathbb{R}$ (números reales) |
| `\N` | $\mathbb{N}$ (números naturales) |
| `\Z` | $\mathbb{Z}$ (números enteros) |
| `\Q` | $\mathbb{Q}$ (números racionales) |
| `\C` | $\mathbb{C}$ (números complejos) |
| `\sen` | sen (seno en español) |

## 🛠️ Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Construir para producción |
| `npm run preview` | Vista previa de producción |
| `npm run new:lesson` | Crear nueva lección |
| `npm run validate` | Validar LaTeX renderizado |

## 📄 Licencia

MIT
