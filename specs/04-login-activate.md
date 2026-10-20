# SPEC 04 — Pantallas de login y activación de cuenta (/login y /activate)

> **Estado:** Aprobado
> **Depende de:** SPEC 01
> **Fecha:** 2026-10-20
> **Objetivo:** Implementar las pantallas `/login` y `/activate` según los diseños `login.dc.html` y `activar-cuenta.dc.html`, con formularios navegables y sin autenticación real.

## Alcance

**En:**

- Página `/login` con layout de dos columnas: panel coral de marca a la izquierda y formulario a la derecha.
- Página `/activate` de una sola columna centrada con logo, tarjeta de invitación, código, email, contraseña y consentimiento de fotos.
- Formularios de cliente con inputs controlados, validación nativa y submit que navega a `/` mediante `useRouter`.
- `type="email"` y `required` en los campos de email y contraseña.
- Checkbox de autorización de fotos interactivo, marcado por defecto y obligatorio para activar la cuenta.
- Enlaces cruzados: `/login` → `/activate` ("Activá tu cuenta") y `/activate` → `/login` ("Iniciar sesión").
- Enlace "¿Olvidaste tu contraseña?" como placeholder sin acción.
- Fondo `#FBF4EC` en ambas pantallas y tipografías Fredoka/Nunito ya configuradas en `app/layout.tsx`.
- Responsive: en `/login`, el panel coral se oculta por debajo de `lg` y el formulario ocupa el ancho completo.
- Metadatos de ruta: "Iniciar sesión — OpenDayCare" y "Activar cuenta — OpenDayCare".

**Fuera del alcance (para futuros specs):**

- Selector "INGRESO COMO" (Personal / Familia), omitido por completo.
- Autenticación real, sesiones, cookies, tokens o logout funcional.
- Feed de familia (`/familia-feed`) y cualquier vista por rol.
- Recuperación de contraseña (`/forgot-password`).
- Validación real del código de invitación, del email o de la contraseña.
- Envío de emails o integración con backend.
- Persistencia de datos entre sesiones.
- Tests automatizados.

## Modelo de datos

Este spec no introduce estructuras persistidas ni nuevos módulos de datos. Solo agrega estado local de formulario en los componentes de cliente:

```ts
// app/components/auth/LoginForm.tsx
const [email, setEmail] = useState("caro@opendaycare.com");
const [password, setPassword] = useState("");
```

```ts
// app/components/auth/ActivateForm.tsx
const [code, setCode] = useState("7K4P9");
const [email, setEmail] = useState("lucia.fernandez@gmail.com");
const [password, setPassword] = useState("contraseña");
const [photoConsent, setPhotoConsent] = useState(true);
```

Los valores iniciales replican los del diseño de referencia. No se crea `app/data/auth.ts`; los datos viven en cada página, coherente con SPEC 02 y SPEC 03.

## Plan de implementación

1. Crear `app/login/page.tsx` como componente de servidor con `metadata` y el layout de dos columnas (panel coral + contenedor del formulario). Debe incluir un placeholder temporal del formulario. Verificación manual: `http://localhost:3000/login` renderiza las dos columnas con el fondo `#FBF4EC`.
2. Crear `app/components/auth/LoginForm.tsx` como componente de cliente con email, contraseña, validación nativa, submit a `/` y enlaces a `/activate` y al placeholder de contraseña olvidada. Verificación manual: con email y contraseña válidos, el submit navega a `/`.
3. Crear `app/activate/page.tsx` como componente de servidor con `metadata` y el layout de una columna centrada. Debe incluir un placeholder temporal del formulario. Verificación manual: `http://localhost:3000/activate` renderiza la pantalla con el logo y la tarjeta de invitación.
4. Crear `app/components/auth/ActivateForm.tsx` como componente de cliente con código, email y contraseña precargados, checkbox de consentimiento obligatorio, submit a `/` y enlace a `/login`. Verificación manual: sin el checkbox marcado el navegador bloquea el submit; con todo válido navega a `/`.
5. Ajustar el responsive de `/login`: ocultar el panel coral por debajo de `lg`, formulario a ancho completo y sin overflow horizontal. Verificación manual: en viewport de 390 px se ve solo el formulario y no aparece scroll horizontal.
6. Agregar los metadatos de ruta y revisar que ninguna de las dos páginas renderice el `Sidebar`. Verificación manual: pestaña y layout correctos en ambas rutas; `npm run build` finaliza sin errores.

## Criterios de aceptación

- [ ] `/login` muestra el panel coral con logo, titular y leyenda, y el formulario a la derecha, con fondo `#FBF4EC`.
- [ ] `/login` no muestra el bloque "INGRESO COMO" ni los botones Personal/Familia.
- [ ] El email de `/login` aparece precargado con `caro@opendaycare.com` y la contraseña vacía con placeholder.
- [ ] Enviar el formulario de login con email y contraseña válidos navega a `/`.
- [ ] Un email vacío o inválido impide el submit y no navega.
- [ ] "Activá tu cuenta" en `/login` navega a `/activate`.
- [ ] "¿Olvidaste tu contraseña?" se muestra como placeholder y no navega.
- [ ] `/activate` muestra el logo, el titular "Bienvenida a OpenDayCare", la tarjeta con "Mateo · Sala Soles", el código `7K4P9`, el email `lucia.fernandez@gmail.com` y la contraseña precargada.
- [ ] El checkbox de autorización de fotos arranca marcado, se puede desmarcar y bloquea el submit cuando está desmarcado.
- [ ] Enviar "Activar mi cuenta" con el checkbox marcado navega a `/`.
- [ ] "Iniciar sesión" en `/activate` navega a `/login`.
- [ ] Ninguna de las dos rutas renderiza el `Sidebar`.
- [ ] Por debajo de `lg`, `/login` muestra solo el formulario a ancho completo, sin scroll horizontal.
- [ ] `npm run build` termina sin errores y sin advertencias de tipos.

## Decisiones tomadas y descartadas

- **Sí:** server page + client form (`page.tsx` + `*Form.tsx`). Permite exportar `metadata` por ruta y aislar el estado del formulario.
- **Sí:** `router.push("/")` en ambos submits. No existe auth ni feed de familia; `/` es el único destino real.
- **Sí:** omitir el selector Personal/Familia por completo, tal como se pidió. Evita estado y lógica de rol que no se usa.
- **Sí:** validación nativa (`type="email"`, `required`) en lugar de mensajes de error propios. El diseño no contempla estados de error y el alcance es UI.
- **Sí:** checkbox de fotos obligatorio, marcado por defecto. Refleja el consentimiento explícito del diseño y evita activar la cuenta sin aceptarlo.
- **Sí:** datos precargados hardcodeados dentro de las páginas. Coherente con SPEC 02 y SPEC 03; no se justifica un módulo de datos para dos formularios.
- **Sí:** fondo `#FBF4EC` en ambas pantallas, aunque el resto de la app use `#F6ECDF`. Es el color exacto de la referencia de auth.
- **Sí:** ocultar el panel coral por debajo de `lg`. Es la opción más simple y evita duplicar el contenido de marca en mobile.
- **Sí:** mantener la contraseña de `/activate` precargada como "contraseña", igual que el diseño, para verificar el flujo sin escribir.
- **Sí:** estilos Tailwind inline con valores arbitrarios, sin componentes `AuthInput`/`AuthButton`. Dos pantallas no justifican una abstracción; el repo ya usa este patrón.
- **No:** `/forgot-password`. Queda como placeholder hasta que exista un spec de recuperación.
- **No:** redirección automática de usuarios "logueados". No hay sesión que consultar.
- **No:** cambios en `app/layout.tsx` más allá de lo ya existente. Las fuentes y la paleta base ya están configuradas.

## Riesgos

| Riesgo | Mitigación |
| --- | --- |
| Ambas rutas quedan accesibles sin autenticación | Es esperado: el spec no incluye auth real. Se documenta en "Lo que no está incluido". |
| Duplicación de estilos entre login y activación | Aceptada por ahora; si aparece una tercera pantalla de auth, se extraen componentes compartidos. |
| El panel coral oculto en mobile elimina el contexto de marca | El formulario conserva el logo y el nombre en el header de la app; el diseño móvil sigue siendo claro. |
| El checkbox custom con `input` oculto puede quedar inaccesible | Usar `input type="checkbox"` real con `sr-only` y `peer`, manteniendo foco visible por teclado. |

## Lo que no está incluido en este spec

- Selector Personal/Familia.
- Autenticación real, sesiones o control de acceso.
- Feed de familia y vistas por rol.
- Recuperación de contraseña.
- Validación de código de invitación o credenciales.
- Persistencia, backend o envío de emails.
- Tests automatizados.
