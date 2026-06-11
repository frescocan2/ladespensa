<div align="center">

# ladespensa

**Tu despensa y tu lista de la compra, por fin la misma cosa.**

Una PWA de un solo archivo, *mobile-first*, pensada para iPhone.

© 2026 Frescocan (Francesco Marigliano) · [@frescocan2](https://github.com/frescocan2)

</div>

---

## Qué es

**ladespensa** es una aplicación web progresiva (PWA) que une en un mismo
sitio lo que normalmente viven separados: **lo que tienes en casa** y **lo
que te falta comprar**. No son dos listas, son dos caras del mismo
inventario.

- 🛒 **Lista de la compra** — siempre llena. Lo que te falta arriba, lo que
  ya tienes (tachado) al final. Nada desaparece solo; los productos solo se
  borran cuando tú quieres.
- 🥫 **Despensa** — el homólogo de la lista. Agrupada en chips de color por
  categoría que despliegas al tocar. Tachar en la lista llena la despensa;
  destachar marca el producto como agotado.
- 🍝 **Recetas** — buscador con cientos de recetas (con prioridad a la cocina
  italiana 🇮🇹), que tiene en cuenta lo que ya tienes en casa.
- 👨‍👩‍👧 **Hogar compartido** — comparte despensa y lista con quien vive
  contigo. Los cambios se sincronizan en tiempo real para todos.
- 🧠 **Aprende tus hábitos** — estima cuándo se te acaba cada cosa según tu
  consumo real.
- 📴 **Funciona sin conexión** — al ser una PWA con *service worker*, una vez
  instalada en la pantalla de inicio funciona offline.

## Filosofía de diseño

Minimalismo con carácter. Tipografía cuidada, motion sutil, una paleta cálida
inspirada en las notas de iOS, y detalles como la barra flotante de cristal
líquido. Menos es más, pero con personalidad.

## Tecnología

- **Un solo archivo HTML** — todo el HTML, CSS y JS en `index.html`. Sin
  *frameworks* pesados, *vanilla* JS.
- **Service worker** (`sw.js`) para funcionamiento offline y caché.
- **Firebase Realtime Database** (opcional) para el hogar compartido.
- Recetas en `recetas.json`.

### Probarla en local

Al usar un *service worker* y `fetch`, ábrela con un servidor local (no como
`file://`):

```bash
# con Python
python3 -m http.server 8080
# luego abre http://localhost:8080
```

Para activar el **hogar compartido**, crea un proyecto en
[Firebase](https://firebase.google.com/), activa **Realtime Database**, pega
tu configuración en `FIREBASE_CONFIG` dentro de `index.html` y publica las
reglas de `database.rules.json`.

## Contribuir

Las mejoras son bienvenidas. Si quieres aportar:

1. Haz un *fork* del repositorio.
2. Crea una rama para tu cambio.
3. Abre un *pull request* describiendo qué mejora aporta.

Toda contribución se entiende publicada bajo la misma licencia del proyecto.

## Licencia

Este proyecto es **abierto, pero no para fines comerciales**.

- ✔ Puedes usar, copiar, estudiar, modificar y redistribuir el código.
- ✔ Las mejoras son bienvenidas.
- ✘ **No** puedes usarlo con fines comerciales sin permiso por escrito.
- ⟳ Si redistribuyes, debes hacerlo bajo **esta misma licencia** (copyleft)
  y **citar al autor**.

Consulta el archivo [LICENSE](./LICENSE) para los términos completos. Para una
licencia comercial, contacta a través de
[@frescocan2](https://github.com/frescocan2).

---

<div align="center">
Hecho con cuidado por <b>Frescocan</b> · 2026
</div>
