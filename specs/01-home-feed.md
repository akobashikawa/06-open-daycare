# SPEC 01 — Implementación del Feed de inicio (Home)

> **Estado:** Approved
> **Depende de:** Ninguno
> **Fecha:** 2026-10-13
> **Objetivo:** Implementar la pantalla principal (home /) del feed de la guardería siguiendo la plantilla de diseño feed.dc.html, con navegación funcional y placeholders.

## Alcance

**En:**
- Layout de página con sidebar de navegación y área principal.
- Integración de fuentes Google Fonts (Fredoka, Nunito) en `layout.tsx`.
- Paleta de colores cálida configurada en `globals.css`.
- Feed principal con componentes hardcodeados (3 posts: logro, actividad, anuncio).
- Navegación del sidebar usando `next/link`.

**Fuera del alcance (para futuros specs):**
- Implementación de las rutas de detalle, cuenta, niños, avisos, crear publicación (se dejarán como placeholders).
- Integración con backend o almacenamiento de datos.
- Funcionalidad real de autenticación/logout.

## Modelo de datos

Este spec utiliza datos hardcodeados para el feed, por lo que no introduce nuevas estructuras de persistencia ni modelos de datos dinámicos. Reutiliza componentes de UI para renderizar el contenido.

## Plan de implementación

1. Configurar `layout.tsx` para usar fuentes Fredoka y Nunito.
2. Configurar `globals.css` con variables de color y estilos base del diseño.
3. Crear componente `Sidebar` con navegación usando `next/link`.
4. Crear componente `PostCard` para renderizar publicaciones.
5. Implementar `app/page.tsx` integrando sidebar, header, composer y lista de posts hardcodeados.
6. Verificación visual y de rutas (placeholders).

## Criterios de aceptación

- [ ] La aplicación carga en `http://localhost:3000` con el fondo y fuentes correctas.
- [ ] El sidebar muestra la navegación y enlaces a placeholders.
- [ ] El feed muestra los 3 posts definidos con sus respectivos diseños y badges.
- [ ] Todos los enlaces del sidebar utilizan `next/link` y apuntan a rutas de la aplicación (placeholders).

## Decisiones

- **Yes:** Usar Tailwind CSS para el diseño, con valores arbitrarios (`bg-[#...]`) para asegurar exactitud con el diseño de referencia.
- **Yes:** Fuentes autocontenidas mediante `next/font/google`.
- **No:** Omitir lógica compleja de `dc-runtime` o `support.js` del diseño de referencia, ya que se reemplaza por lógica nativa de Next.js.

## Riesgos

- Ninguno identificado para esta implementación de UI estática.

## Lo que no está incluido en este spec

- Implementación de las páginas de detalle, creación de posts, cuenta, niños, avisos, o login.
- Lógica de autenticación real.
- Interacción dinámica con posts.
