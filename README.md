# journay

Un diario personal estático: pensamientos, notas y pequeñas historias escritas en Markdown y compiladas con [Astro](https://astro.build).

## Empezar

```bash
npm install
npm run dev
```

Abre <http://localhost:4321>.

## Comandos

| Comando           | Qué hace                                     |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con recarga en vivo.  |
| `npm run build`   | Genera el sitio estático en `dist/`.         |
| `npm run preview` | Sirve `dist/` para probar el resultado real. |

## Escribir una entrada

Crea un archivo `.md` en `src/content/posts/`. El nombre del archivo será la URL
(`mi-idea.md` → `/posts/mi-idea/`).

```md
---
title: Mi idea
description: Una línea que resume de qué va.
date: 2026-11-11
tags: [diario, escritura]
draft: false
---

El texto empieza aquí. Puedes usar **negrita**, `código`, listas, citas…
```

Campos del *frontmatter*:

- `title` (obligatorio): título de la entrada.
- `description` (opcional): resumen para la portada y el buscador.
- `date` (obligatorio): fecha en formato `AAAA-MM-DD`.
- `updated` (opcional): fecha de última actualización.
- `tags` (opcional): lista de etiquetas.
- `draft` (opcional): si es `true`, la entrada no aparece en la build de
  producción.

Las entradas se ordenan solas por fecha, de más reciente a más antigua.

## Estructura

```
src/
├── content/posts/        ← tus entradas en Markdown
├── components/           ← PostList, ThemeToggle
├── layouts/Base.astro    ← cabecera, pie y <head>
├── lib/posts.ts          ← utilidades (fechas, lectura, tags)
├── pages/
│   ├── index.astro       ← portada
│   ├── archive.astro     ← archivo por año y mes
│   ├── search.astro      ← buscador
│   ├── tags/             ← índice y páginas por etiqueta
│   ├── posts/[slug].astro← cada entrada
│   └── search-index.json.ts ← índice del buscador
├── styles/global.css
└── consts.ts             ← título, descripción y textos del sitio
```

## Qué incluye

- Entradas en Markdown con metadatos.
- Tema claro/oscuro que recuerda tu preferencia.
- Etiquetas con página propia e índice de etiquetas.
- Buscador en el navegador (sin servidor).
- Archivo cronológico por año y mes.
- Diseño responsive y accesible.

## Personalizar

- Cambia el nombre y los textos en `src/consts.ts`.
- Ajusta colores y tipografía en `src/styles/global.css` (variables al inicio).
- Pon tu dominio real en `site` dentro de `astro.config.mjs`.

## Publicar (cuando quieras)

El sitio es completamente estático: el contenido de `dist/` puede subirse a
GitHub Pages, Netlify, Vercel o cualquier hosting de archivos.
