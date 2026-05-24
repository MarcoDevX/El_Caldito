# 🍲 El Caldito de Abuela

Sitio web del restaurante **El Caldito de Abuela**, ubicado en San Juan de la Maguana, República Dominicana. Hecho con amor y mucho café.

---

## ¿Qué es esto?

La página oficial del restaurante. Tiene el menú completo, galería de fotos, nuestra historia y cómo llegar. Todo conectado a una base de datos MySQL para que actualizar los precios y platos sea fácil sin tener que tocar código.

---

## ¿Cómo está hecho?

- **Frontend** — HTML, CSS y JavaScript puro
- **Backend** — Node.js con Express
- **Base de datos** — MySQL (gestionada con phpMyAdmin / XAMPP)
- **Gestor de paquetes** — pnpm

---

## ¿Cómo correrlo en tu máquina?

Necesitas tener instalado: [Node.js](https://nodejs.org) y [XAMPP](https://www.apachefriends.org)

**1. Clona el repositorio**
```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

**2. Instala las dependencias**
```bash
pnpm install
```

**3. Crea la base de datos**

Abre phpMyAdmin en `http://localhost/phpmyadmin`, importa el archivo `menu.sql` y listo.

**4. Configura la conexión**

En `server.js` cambia esto con tus datos de MySQL:
```js
user:     'root',
password: '',
```

**5. Arranca el servidor**
```bash
node server.js
```

Abre `http://localhost:3000` y ya.

---

## Estructura del proyecto

```
proyecto/
├── index.html       # La página
├── styles.css       # El diseño
├── main.js          # El JavaScript del frontend
├── server.js        # El servidor y la API
├── menu.sql         # La base de datos con todo el menú
└── package.json     # Dependencias
```

---

## API

El servidor expone estos endpoints:

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/menu` | Devuelve todo el menú |
| GET | `/api/menu/:id` | Devuelve una categoría específica |

---

## ¿Quieres agregar un plato?

Solo abre phpMyAdmin, ve a la tabla `platos` y agrega una fila. No hay que tocar nada más.

---

Hecho con ❤️ en República Dominicana 🇩🇴
