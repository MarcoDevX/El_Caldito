# Sistema de Menú del Restaurante "La Abuela's Kitchen"

Sistema interactivo y responsivo para mostrar el menú de un restaurante caribeño/dominicano.

## 📁 Archivos Incluidos

### 1. **menu.php** - Archivo Principal
- Contiene toda la estructura PHP del menú
- Define datos del restaurante, horarios, servicios y platos
- Genera el HTML dinámicamente
- Gestiona tres secciones principales:
  - **Menú**: Visualización de todos los platos organizados por categorías
  - **Horarios**: Horario de atención del restaurante
  - **Servicios**: Servicios y características disponibles

### 2. **style.css** - Estilos Visuales
- Diseño moderno y atractivo
- Totalmente responsivo (móvil, tablet, desktop)
- Paleta de colores temática:
  - Rojo principal (#C41E3A)
  - Amarillo secundario (#FFC72C)
  - Grises neutros
- Características:
  - Animaciones suaves
  - Efectos hover
  - Gradientes
  - Sombras elegantes

### 3. **script.js** - Funcionalidades Interactivas
- Búsqueda en tiempo real
- Filtrado de platos por categoría
- Navegación entre secciones
- Atajos de teclado (Ctrl+K para buscar)
- Copiar al portapapeles
- Validaciones y efectos visuales

## 🎯 Características Principales

### Búsqueda
- 🔍 Búsqueda en tiempo real
- ⌨️ Atajo Ctrl+K (o Cmd+K) para enfoque rápido
- Resultados instantáneos
- Mensaje cuando no hay coincidencias

### Filtros
- Filtrar por categoría de plato
- Botón "Todos" para ver el menú completo
- Categorías principales:
  - Pa' Picar (Entradas)
  - Mofongos
  - Chanclas
  - Quesadillas
  - Tacos
  - Carnes
  - Mariscos

### Navegación
- 📋 Menú interactivo
- 🕒 Horarios de atención
- 🏠 Servicios y características

### Servicios del Restaurante
Información sobre:
- Accesibilidad
- Opciones de servicio
- Ambiente
- Estacionamiento
- Pagos aceptados
- Y más...

## 📱 Responsividad

El sitio está optimizado para:
- **Desktop**: Vista completa con múltiples columnas
- **Tablet**: Adaptación de grid y espaciado
- **Móvil**: Vista de una columna, optimizado para touch

### Puntos de Quiebre (Breakpoints)
- Máximo: 1200px
- Tablet: 768px
- Móvil: 480px

## 🚀 Cómo Usar

### Instalación
1. Coloca los tres archivos en tu servidor web con soporte PHP:
   - `menu.php`
   - `style.css`
   - `script.js`

2. Accede al archivo `menu.php` desde tu navegador

### Estructura de Archivos
```
tu-proyecto/
├── menu.php
├── style.css
└── script.js
```

### Requisitos
- Servidor web con PHP 5.4+
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- No requiere bases de datos
- No requiere dependencias externas

## 🎨 Personalización

### Cambiar Colores
En `style.css`, modifica las variables CSS:

```css
:root {
    --primary-color: #C41E3A;      /* Color principal */
    --secondary-color: #FFC72C;    /* Color secundario */
    --dark-color: #2C3E50;         /* Color oscuro */
    --light-color: #ECF0F1;        /* Color claro */
}
```

### Agregar Platos
En `menu.php`, añade items al array `$menu`:

```php
[
    'id' => 'nueva_leccion',
    'title' => 'Nueva Lección',
    'description' => 'Descripción',
    'items' => [
        'Nuevo plato 1',
        'Nuevo plato 2'
    ]
]
```

### Cambiar Horarios
Modifica el array `$restaurant['schedule']` en `menu.php`

## 📊 Estructura de Datos PHP

### Restaurant Object
```php
$restaurant = [
    'name' => 'La Abuela\'s Kitchen',
    'schedule' => [ /* días y horarios */ ]
]
```

### Estructura del Menú
```php
$menu = [
    [
        'id' => 'leccion_id',
        'title' => 'Título de la Sección',
        'description' => 'Descripción breve',
        'items' => [ /* array de platos */ ]
    ]
]
```

### Servicios
```php
$services = [
    'Categoría' => [ /* array de servicios */ ]
]
```

## ⌨️ Atajos de Teclado

| Atajo | Función |
|-------|---------|
| `Ctrl+K` / `Cmd+K` | Enfoque en búsqueda |
| `Esc` | Limpiar búsqueda y cerrar |
| Click en plato | Copiar al portapapeles |

## 🌐 Características CSS Avanzadas

- **CSS Grid**: Para layouts responsivos
- **Flexbox**: Para alineación y distribución
- **Variables CSS**: Para fácil personalización
- **Media Queries**: Para responsividad
- **Transiciones y Animaciones**: Para UX mejorada
- **Gradientes**: Para fondos atractivos

## 🔧 Funciones JavaScript Disponibles

### Públicas
```javascript
getCategoryByItem(itemName)      // Obtiene categoría de un plato
getMenuStats()                   // Obtiene estadísticas del menú
showSuggestions(searchTerm)      // Muestra sugerencias
```

### Internas
```javascript
applyFilter(filter)              // Aplica filtro seleccionado
searchMenu(searchTerm)           // Busca en el menú
resetFilters()                   // Reinicia filtros
showNoResults()                  // Muestra mensaje sin resultados
removeNoResults()                // Remueve mensaje sin resultados
```

## 📈 Estadísticas del Menú

- **Secciones**: 13
- **Platos totales**: 200+
- **Categorías principales**: 12
- **Tipos de servicio**: 5
- **Servicios adicionales**: 30+

## 🎁 Extras

### Validaciones
- ✅ Búsqueda case-insensitive
- ✅ Limpieza automática de espacios
- ✅ Manejo de caracteres especiales

### Accesibilidad
- ✅ Contraste de colores adecuado
- ✅ Fuentes legibles
- ✅ Espaciado generoso
- ✅ Elementos clickeables grandes
- ✅ Navegación por teclado

### Performance
- ✅ CSS sin dependencias externas
- ✅ JavaScript vanilla (sin librerías)
- ✅ Carga rápida
- ✅ Optimizado para móviles

## 🐛 Troubleshooting

### El CSS no carga
- Verifica que `style.css` esté en la misma carpeta que `menu.php`
- Revisa la ruta en el `<link>` del HTML generado

### JavaScript no funciona
- Verifica que `script.js` esté en la misma carpeta
- Abre la consola del navegador (F12) para ver errores

### PHP no se ejecuta
- Asegúrate de usar un servidor web con soporte PHP
- No ejecutes el archivo directamente (usa http://localhost/menu.php)

## 📄 Licencia

Este código está disponible para uso personal y comercial.

## 👨‍💻 Autor

Creado con ❤️ para "La Abuela's Kitchen"

---

**Versión**: 1.0  
**Última actualización**: 2024  
**Compatibilidad**: PHP 5.4+, Navegadores modernos
