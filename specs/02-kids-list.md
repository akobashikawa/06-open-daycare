# SPEC 02 — Lista de niños (/kids)

> **Estado:** Implemented
> **Depende de:** SPEC 01
> **Fecha:** 2026-10-14
> **Objetivo:** Implementar la pantalla /kids que muestra la cuadrícula de tarjetas de niños con búsqueda, filtro y-sidebar activo, siguiendo el diseño ninos.dc.html.

## Alcance

**En:**
- Página `/kids` con grid de tarjetas de niños (layout de 2 columnas).
- Tarjeta `.kid` con foto inicial, nombre, edad, padres vinculados y estado activo (ej. MANÍ).
- Input de búsqueda "Buscar niño…" encima del grid (modo decorativa, no filtra).
- Sidebar resalta "Niños" cuando la ruta es `/kids`.
- Hardcodeado de datos: array de niños con nombre, edad, padres, alergias.
- Botón "Agregar niño" en el sidebar enlaza a `/add-kid` (placeholder).

**Fuera del alcance (para futuros specs):**
- Página perfil individual `/kids/:kid_id` (detail screen).
- Formularios de crear/editar niño.
- Integración con backend o base de datos.
- Funcionalidad real de búsqueda o autenticación.
- Páginas de aviso, cuenta, resumen del día o vincular padre.

## Modelo de datos

Hardcodeado en `app/data/kids.ts` (o directamente en `page.tsx`):

```ts
const kids = [
  {
    id: 1,
    name: "Mateo Fernández",
    age: "3 años",
    parents: ["Lucía Fernández", "Diego Fernández"],
    allergy: null,
    status: "MANÍ",
  },
  {
    id: 2,
    name: "Sofía Méndez",
    age: "2 años",
    parents: [""],
    allergy: null,
    status: null,
  },
  {
    id: 3,
    name: "Benjamín Ruiz",
    age: "3 años",
    parents: ["Lucía Fernández"],
    allergy: null,
    status: null,
  },
  {
    id: 4,
    name: "Valentina Soto",
    age: "2 años",
    parents: [],
    allergy: null,
    status: "VINCULAR",
  },
  {
    id: 5,
    name: "Tomás Díaz",
    age: "3 años",
    parents: ["Diego Fernández"],
    allergy: null,
    status: "LACTOSA",
  },
  {
    id: 6,
    name: "Emma Castro",
    age: "2 años",
    parents: [""],
    allergy: null,
    status: null,
  },
  {
    id: 7,
    name: "Lucas Romero",
    age: "3 años",
    parents: ["Diego Fernández"],
    allergy: null,
    status: null,
  },
  {
    id: 8,
    name: "Olivia Vega",
    age: "2 años",
    parents: [""],
    allergy: null,
    status: null,
  },
];
```

## Plan de implementación

1. Crear `app/data/kids.ts` con la constante `kids` anterior.
2. Actualizar `Sidebar.tsx` para resaltar el enlace activo según la ruta actual (`/kids` → badge "Niños" estilo badge amarillento como en el diseño).
3. Crear componente `KidCard` que recibe un objeto `kid` y renderiza la estructura del diseño: foto inicial, nombre, edad, padres, estado activo (badge) si existe.
4. Implementar `app/page.tsx` (ruta `/kids`) integrando sidebar, header, input de búsqueda y grid de `KidCard` usando `kids` del módulo de datos.
5. Verificación visual y navegación (sidebar activo, enlaces `next/link`).

## Criterios de aceptación

- [x] La aplicación carga en `http://localhost:3000/kids` mostrando grid de 8 tarjetas.
- [x] Sidebar muestra "Niños" resaltado (background `#FBE3D8`, color `#D9583C`).
- [x] Cada tarjeta tiene foto inicial circular, nombre, edad y estado activo si corresponde.
- [x] Input "Buscar niño…" aparece arriba pero no filtra (modo decorativo).
- [x] Tarjetas tienen el estilo del diseño: `border rounded-18`, `shadow-soft`, `kid:hover` efecto translateY.
- [x] El enlace "Agregar niño" lleva a `/crear-publicacion` (placeholder).

## Decisiones tomadas y descartadas

- **Usar hardcode.** Datos en TS puro, sin base de datos ni API — coherente con SPEC 01.
- **Sidebar activo por ruta.** Añadido badge/estilo cuando `/kids` es la ruta activa.
- **Búsqueda decorativa.** Input presente por diseño pero sin lógica de filtrado para mantener alcance contenido.
- **ID numérico ordinal.** `/kids/1`, `/kids/2`, etc. — más simple que slugs.
- **No perfil individual.** Se deja para otro spec; esta screen muestra solo la lista.

## Riesgos

- Hardcodeo limitado a 8 niños: si cambia el número, habría que actualizar tanto el array como el grid.
- Sidebar activo dependiente de la ruta exacta `/kids`; futuras rutas hijas (`/kids/:id`) podrían no activarlo sin refactor.

## Lo que no está incluido en este spec

- Página perfil individual (`/kids/:kid_id`).
- Formularios de crear/editar niño.
- Integración real o backend.
- Lógica de búsqueda filtrada.
- Páginas de aviso, cuenta, resumen del día o vincular padre.