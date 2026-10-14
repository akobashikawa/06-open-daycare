# SPEC 03 — Perfil del niño (/kids/:kid_id)

> **Estado:** Implementado
> **Depende de:** SPEC 02
> **Fecha:** 2026-10-14
> **Objetivo:** Implementar la pantalla de perfil individual de un niño en /kids/:kid_id mostrando foto, datos, alergias, padres vinculados y botón de resumen del día, siguiendo el diseño perfil-nino.dc.html.

## Alcance

**En:**
- Página dinámica `/kids/:kid_id` con layout de dos columnas.
- Columna principal: foto inicial grande, nombre, edad, sala, alerta de alergias y notas, ficha de datos (fecha de nacimiento, sala, ingreso).
- Columna lateral: botón "Resumen del día" (placeholder), lista de padres vinculados con nombre, rol y estado (ACTIVA/PENDIENTE), botón "Vincular otro padre" (placeholder).
- Botón "Volver a Niños" que enlaza a `/kids`.
- Botón "Editar" (placeholder).
- Extensión del modelo de datos en `app/data/kids.ts` para incluir `birthDate`, `entryDate`, `allergiesNotes` y `parents` con estructura `{ name, role, status }`.
- Manejo de 404: si `kid_id` no existe en los datos, mostrar mensaje "Niño no encontrado".

**Fuera del alcance (para futuros specs):**
- Formulario de edición del niño.
- Página de resumen del día.
- Página de vincular padre.
- Integración con backend.
- Autorización (cualquiera puede ver cualquier perfil).

## Modelo de datos

Se extiende el modelo existente en `app/data/kids.ts` (SPEC 02). La nueva estructura del array `kids` será:

```ts
type ParentStatus = "ACTIVA" | "PENDIENTE";

interface Parent {
  name: string;
  role: string; // "Mamá" | "Papá"
  status: ParentStatus;
}

interface Kid {
  id: number;
  name: string;
  age: string;
  birthDate: string; // "12 mar 2022"
  entryDate: string; // "feb 2025";
  allergiesNotes: string | null;
  parents: Parent[];
  status: string | null; // alergia visible en la lista (MANÍ, LACTOSA, VINCULAR)
}
```

Ejemplo con Mateo Fernández:

```ts
{
  id: 1,
  name: "Mateo Fernández",
  age: "3 años",
  birthDate: "12 mar 2022",
  entryDate: "feb 2025",
  allergiesNotes: "Alergia al maní. Evitar frutos secos. Lleva inhalador en la mochila.",
  parents: [
    { name: "Lucía Fernández", role: "Mamá", status: "ACTIVA" },
    { name: "Diego Fernández", role: "Papá", status: "PENDIENTE" },
  ],
  status: "MANÍ",
},
```

## Plan de implementación

1. Refactorizar `app/data/kids.ts` para adaptar la estructura al nuevo modelo (array `kids` con los campos extendidos). Asegurar que los 8 niños existentes sigan funcionando con datos coherentes (los demás tendrán `allergiesNotes: null` y padres con estado mixto).
2. Actualizar `KidCard` (SPEC 02) si es necesario para mapear la nueva estructura de `parents`.
3. Crear página dinámica `app/kids/[kid_id]/page.tsx` que reciba el parámetro, busque el niño y renderice el layout del perfil.
4. Implementar los componentes/fragmentos del perfil: encabezado con foto y nombre, alerta de alergias (solo si hay notas), ficha de datos, columna lateral con padres y botón resumen.
5. Crear página de fallback (not-found) para IDs inválidos.
6. Verificación visual y de navegación: enlace "Volver a Niños", botón "Editar", botón "Resumen del día", botón "Vincular otro padre".

## Criterios de aceptación

- [ ] La ruta `/kids/1` muestra el perfil de Mateo Fernández con todos los datos del diseño.
- [ ] La ruta `/kids/999` muestra "Niño no encontrado" (404 amigable).
- [ ] El sidebar muestra "Niños" resaltado (heredado de SPEC 02).
- [ ] La alerta de alergias solo aparece si `allergiesNotes` no es null.
- [ ] Cada padre muestra nombre, rol y badge de estado (ACTIVA verde / PENDIENTE amarillo).
- [ ] "Volver a Niños" enlaza a `/kids`.
- [ ] "Resumen del día", "Editar" y "Vincular otro padre" son placeholders (enlaces vacíos o a `#`).

## Decisiones tomadas y descartadas

- **Sí:** Extender el modelo de datos existente en lugar de crear uno nuevo. El perfil necesita más campos que la lista; es natural añadirlos al array ya existente.
- **Sí:** Estructura `parents` como objetos `{ name, role, status }` en vez de strings simples. El diseño del perfil muestra rol y estado de forma explícita.
- **Sí:** Ruta `/kids/:kid_id` con param numérico, coherente con SPEC 02.
- **No:** Edición inline del niño. Requiere formulario y estado; se deja para otro spec.
- **No:** Persistencia real. Todo sigue hardcodeado en `kids.ts`.

## Riesgos

- El refactor de `kids.ts` puede romper `KidCard` si no se actualiza la referencia a `parents.length` y `parents[0]` simultáneamente.
- El sidebar activo usa `startsWith("/kids")`, lo cual incluiría `/kids/:kid_id`. Esto es deseable (mantiene "Niños" resaltado) pero debe verificarse que no afecte a rutas futuras como `/kids/nuevo`.

## Lo que no está incluido en este spec

- Formulario de edición del niño.
- Página de resumen del día.
- Página de vincular padre.
- Integración con backend o base de datos.
- Autorización o control de acceso.
