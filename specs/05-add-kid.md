# SPEC 05 — Pantalla de alta de niño (/kids/new)

> **Estado:** Aprobado
> **Depende de:** SPEC 02, SPEC 03
> **Fecha:** 2026-10-20
> **Objetivo:** Implementar la pantalla `/kids/new` con el formulario de alta de niño del diseño `agregar-nino.dc.html`, con validación HTML nativa y sin persistencia.

## Alcance

**En:**

- Ruta estática `/kids/new` con una tarjeta standalone centrada de 520 px sobre fondo `#F6ECDF`, sin `Sidebar`.
- Header de la tarjeta con "Cancelar" a la izquierda, título "Agregar niño" al centro y "Guardar" a la derecha.
- "Cancelar" enlaza a `/kids`.
- "Guardar" es un `submit` del formulario.
- Campo "Nombre completo" obligatorio, con placeholder "Ej. Martina López".
- Campo "Fecha de nacimiento" obligatorio con `input type="date"`.
- Selector "Sala" con una única opción, `Soles`, seleccionada por defecto.
- Campo "Alergias (etiquetas)" opcional, de texto libre separado por comas, con placeholder "Ej. Maní, Lactosa".
- Campo "Notas médicas" opcional con `textarea` y placeholder "Indicaciones, medicación, contactos…".
- Validación HTML nativa (`required`) en nombre y fecha de nacimiento.
- Submit válido con `router.push("/kids")`, siguiendo el patrón de formularios de SPEC 04.
- Actualización del enlace "Agregar niño" de `app/kids/page.tsx` de `/add-kid` a `/kids/new`.
- Metadatos de ruta: "Agregar niño — OpenDayCare".
- Responsive: por debajo de `sm`, fecha de nacimiento y sala se apilan en una columna.
- Foco visible en inputs, textarea y select.
- Etiquetas asociadas a sus controles con `htmlFor`/`id`.

**Fuera del alcance (para futuros specs):**

- Persistencia del niño creado en `localStorage`, memoria, archivo o base de datos.
- Route Handler `POST /api/kids` o cualquier backend.
- Cambios en `app/data/kids.ts` o en las interfaces `Kid`/`Parent`.
- Nuevo campo `room` en el modelo de datos.
- Chips interactivos para las alergias.
- Validación de que la fecha de nacimiento sea anterior a hoy.
- Edición o borrado de niños.
- Subida de foto o avatar.
- Vinculación de padres.
- Autenticación o control de acceso.
- Tests automatizados.

## Modelo de datos

Este spec no introduce estructuras persistidas ni modifica `app/data/kids.ts`. Solo agrega estado local de formulario en el componente de cliente:

```ts
// app/components/kids/AddKidForm.tsx
const [name, setName] = useState("");
const [birthDate, setBirthDate] = useState("");
const [allergies, setAllergies] = useState("");
const [notes, setNotes] = useState("");
```

La sala no necesita estado: es un `<select>` con una sola opción y `defaultValue="Soles"`.

Los valores del formulario no se envían a ningún lado. Al hacer submit se descartan y solo se navega a `/kids`, coherente con el alcance de UI de los specs 01–04.

## Plan de implementación

1. Crear `app/kids/new/page.tsx` como componente de servidor con `metadata`, el fondo `#F6ECDF` y la tarjeta centrada de 520 px. Incluir un placeholder temporal del formulario. Verificación manual: `http://localhost:3000/kids/new` renderiza la tarjeta sin `Sidebar`.
2. Crear `app/components/kids/AddKidForm.tsx` como componente de cliente con el header (Cancelar, título, Guardar), los cinco campos y la validación nativa. Importarlo en la página y retirar el placeholder. Verificación manual: con nombre y fecha completos, Guardar navega a `/kids`; con cualquiera vacío, el navegador bloquea el submit.
3. Cambiar el `href` del botón "Agregar niño" de `app/kids/page.tsx` de `/add-kid` a `/kids/new`. Verificación manual: el botón de la lista abre el formulario.
4. Ajustar el responsive: apilar fecha y sala por debajo de `sm`, mantener el padding de la tarjeta en mobile y evitar scroll horizontal a 390 px. Verificación manual: la pantalla se usa completa en viewport de 390 px.
5. Revisar foco visible, etiquetas asociadas y que `/kids/new` no caiga en la ruta dinámica `[kid_id]`. Verificación manual: tabular recorre los campos con foco visible y la página muestra el formulario, no "Niño no encontrado".

## Criterios de aceptación

- [ ] `/kids/new` muestra una tarjeta centrada de 520 px sobre fondo `#F6ECDF`.
- [ ] `/kids/new` no renderiza el `Sidebar`.
- [ ] El header muestra "Cancelar", "Agregar niño" y "Guardar" con la disposición y colores de `agregar-nino.dc.html`.
- [ ] "Cancelar" navega a `/kids`.
- [ ] El campo nombre tiene placeholder "Ej. Martina López" y es obligatorio.
- [ ] El campo fecha de nacimiento usa `input type="date"` y es obligatorio.
- [ ] El selector de sala muestra `Soles` como única opción y está seleccionado por defecto.
- [ ] El campo de alergias es opcional, acepta texto con comas y muestra el placeholder "Ej. Maní, Lactosa".
- [ ] El campo de notas médicas es un `textarea` opcional con el placeholder del diseño.
- [ ] Enviar el formulario con nombre o fecha vacíos no navega.
- [ ] Enviar el formulario con nombre y fecha válidos navega a `/kids`.
- [ ] El botón "Agregar niño" de `/kids` navega a `/kids/new`.
- [ ] A 390 px de ancho no aparece scroll horizontal y fecha y sala se ven en una columna.
- [ ] Los campos muestran foco visible al navegar con teclado.
- [ ] La pestaña muestra "Agregar niño — OpenDayCare".
- [ ] `npm run build` termina sin errores.

## Decisiones tomadas y descartadas

- **Sí:** ruta `/kids/new`. Es un endpoint en inglés, anidado bajo `/kids`, y el segmento estático tiene prioridad sobre `/kids/[kid_id]`.
- **Sí:** tarjeta standalone sin `Sidebar`. Es lo que muestra `agregar-nino.dc.html`; el alta es una tarea puntual, no una vista del shell.
- **Sí:** solo UI, sin persistencia. Coherente con los specs 01–04, que son prototipo con datos hardcodeados.
- **Sí:** validación nativa HTML. SPEC 04 ya usa este patrón y el diseño no contempla estados de error.
- **Sí:** `useRouter` y `router.push("/kids")` en el submit. Mismo patrón que `LoginForm` y `ActivateForm`.
- **Sí:** selector de sala con una sola opción `Soles`. No se agrega `room` al modelo ni se inventan salas.
- **Sí:** alergias como texto libre separado por comas. Es lo más simple y fiel al input del diseño; las chips quedan para otro spec.
- **Sí:** `input type="date"`. Evita formatos inválidos sin escribir validación propia.
- **Sí:** reutilizar la paleta y las fuentes ya configuradas en `app/layout.tsx`. No se toca el layout global.
- **No:** `POST /api/kids`. No hay backend ni persistencia en el proyecto; agregarlo excede este spec.
- **No:** chips interactivos de alergias. Requieren estado extra y no cambian el resultado de este spec.
- **No:** validar que la fecha sea pasada. El diseño no lo pide; se puede sumar en un spec de validación.

## Riesgos

| Riesgo | Mitigación |
| --- | --- |
| `/kids/new` podría resolverse contra `[kid_id]` y mostrar "Niño no encontrado" | Next prioriza segmentos estáticos; se verifica en el paso 5. Si fallara, se renombra la ruta a `/kids/create`. |
| Un select con una sola opción puede parecer roto | Es intencional: replica el control del diseño sin ofrecer salas inexistentes. Se mantiene la opción visible y seleccionada. |
| El render de `input type="date"` varía entre navegadores | La aceptación exige el control nativo y su funcionamiento, no un pixel perfect entre navegadores. |
| Al recargar se pierde cualquier dato ingresado | Es esperado: el spec no incluye persistencia. Se documenta en "Lo que no está incluido". |
| El formulario controlado suma estado innecesario para un alta que no persiste | Se mantiene por consistencia con los formularios de SPEC 04 y para futuras extensiones. |

## Lo que no está incluido en este spec

- Persistencia en `localStorage`, memoria, archivo o base de datos.
- API `POST /api/kids`.
- Cambios en `app/data/kids.ts` o en el modelo `Kid`.
- Campo `room` para la sala.
- Chips interactivos de alergias.
- Validación de fecha futura.
- Edición o borrado de niños.
- Subida de foto.
- Vinculación de padres.
- Autenticación o control de acceso.
- Tests automatizados.
