# 🍽️ Bella Vista - Landing Page Restaurant

Template profesional multipágina para restaurantes, desarrollado con **HTML + Tailwind CSS + JavaScript nativo**. Diseño elegante con paleta dorada/carbón, animaciones fluidas y datos mockeados listos para usar.

![Status](https://img.shields.io/badge/status-ready-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📋 Descripción

**Bella Vista** es un template de landing page multipágina diseñado para restaurantes de cocina gourmet. Incluye 8 páginas completamente funcionales con datos de ejemplo, animaciones, galería con lightbox, formulario de contacto con validación, y mapa embebido. Localizado para **Chile** (precios en CLP, dirección en Santiago).

---

## 🏗️ Estructura del Proyecto

```
restaurante-01/
├── index.html              # 🏠 Inicio (Hero + especialidades + testimonios + CTA)
├── sobre-nosotros.html     # 👥 Historia + equipo + línea de tiempo
├── servicios.html          # 🍽️ Servicios + proceso de trabajo
├── menu.html               # 💰 Carta con 4 categorías y precios
├── galeria.html            # 📸 Galería con filtros y lightbox
├── contacto.html           # 📞 Formulario + mapa + horarios
├── privacidad.html         # 🔒 Políticas de privacidad
├── terminos.html           # 📋 Términos y condiciones
├── README.md               # 📖 Este archivo
└── assets/
    ├── css/
    │   └── styles.css      # Estilos personalizados + animaciones
    └── js/
        ├── data.js         # 🗄️ Datos mockeados del restaurante
        ├── navbar.js       # 🧭 Navbar reutilizable
        ├── footer.js       # 📄 Footer reutilizable
        └── main.js         # ⚙️ Lógica compartida
```

---

## 🚀 Instalación y Uso

### Opción 1: Abrir directamente
Simplemente abrí `index.html` con tu navegador favorito (Chrome, Firefox, Edge, Safari).

### Opción 2: Servidor local (recomendado)

**Con Python 3:**
```bash
cd "ruta/al/proyecto/restaurante-01"
python -m http.server 8000
```
Luego abrí: http://localhost:8000

**Con Node.js (http-server):**
```bash
npx http-server -p 8000
```

**Con VS Code:**
Instalá la extensión **Live Server** y hacé clic derecho en `index.html` → "Open with Live Server".

---

## 🎨 Stack Técnico

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Estructura semántica de las 8 páginas |
| **Tailwind CSS** | Framework CSS utility-first (vía CDN) |
| **JavaScript ES6+** | Lógica, animaciones, renderizado dinámico |
| **Font Awesome 6** | Iconografía |
| **Google Fonts** | Playfair Display (serif) + Inter (sans) |
| **OpenStreetMap** | Mapa embebido en contacto |
| **Unsplash** | Imágenes de alta calidad |

> ⚠️ **No requiere build, npm, ni dependencias**. Todo se carga vía CDN.

---

## ✨ Características

### 🎨 Diseño
- ✅ Paleta de colores dorada/amber + carbón
- ✅ Tipografías premium (serif + sans)
- ✅ Diseño responsive (mobile-first)
- ✅ Componentes reutilizables (navbar, footer)

### 🧭 Navegación
- ✅ Navbar fijo con auto-hide en scroll
- ✅ Indicador de página activa
- ✅ Menú hamburguesa responsive
- ✅ Smooth scroll entre secciones

### 🎬 Animaciones
- ✅ Fade-in al scroll (IntersectionObserver)
- ✅ Hover effects en cards
- ✅ Zoom en imágenes de galería
- ✅ Transiciones suaves en botones
- ✅ Auto-hide del navbar al scroll

### 🖼️ Contenido
- ✅ **Hero**: Imagen de fondo con overlay
- ✅ **Estadísticas**: 4 cards con números destacados
- ✅ **Menú**: 4 categorías × 4 platos = 16 platos con imagen y precio
- ✅ **Servicios**: 6 servicios con cards
- ✅ **Equipo**: 4 integrantes con fotos
- ✅ **Galería**: 12 imágenes con filtros y lightbox
- ✅ **Testimonios**: 4 reseñas con avatares
- ✅ **Línea de tiempo**: 4 hitos históricos
- ✅ **Mapa**: OpenStreetMap embebido

### 📝 Funcionalidad
- ✅ Formulario de contacto con validación JS
- ✅ Notificaciones toast (success/error)
- ✅ Galería con lightbox modal
- ✅ Filtros por categoría en galería
- ✅ Tabs de categorías en menú
- ✅ Fallback SVG automático para imágenes
- ✅ Indicador "Hoy" en horarios de contacto

---

## 🇨🇱 Localización (Chile)

| Elemento | Valor |
|----------|-------|
| **Moneda** | Pesos Chilenos (CLP) |
| **Dirección** | Av. Libertador Bernardo O'Higgins 1234, Santiago |
| **Teléfono** | +56 2 2555 2345 |
| **WhatsApp** | +56 9 5555 2345 |
| **Email** | reservas@bellavista.cl |
| **Vinos** | Carmenere, Sauvignon Blanc, Cabernet (valles chilenos) |
| **Ley aplicable** | República de Chile |

---

## 📊 Datos Mockeados

Toda la información está centralizada en `assets/js/data.js`. Para personalizar:

### Modificar información del restaurante
```javascript
const RESTAURANT_DATA = {
  nombre: "Tu Restaurante",
  eslogan: "Tu eslogan",
  contacto: {
    direccion: "Tu dirección",
    telefono: "+56 ...",
    email: "tu@email.cl"
  }
};
```

### Agregar/quitar platos del menú
```javascript
menu: [
  {
    categoria: "Entrantes",
    items: [
      { 
        nombre: "Nombre del plato", 
        descripcion: "Descripción", 
        precio: "$X.XXX",
        emoji: "🍽️",         // Para fallback
        color1: "#92400e",    // Color gradiente fallback
        color2: "#1c1917",
        imagen: "https://..." // URL de la imagen
      }
    ]
  }
]
```

### Modificar horarios
```javascript
horarios: [
  { dia: "Lunes", horario: "Cerrado" },
  { dia: "Martes a Viernes", horario: "12:00 - 23:00" },
  // ...
]
```

---

## 🎨 Personalización de Estilos

### Colores principales (en `data.js` y clases Tailwind)
- **Amber/Dorado**: `amber-500`, `amber-600`, `amber-700`
- **Carbón**: `stone-900`, `stone-800`, `stone-700`
- **Crema**: `stone-50`, `stone-100`

### Tipografías (en `assets/css/styles.css`)
```css
--font-serif: 'Playfair Display', serif;   /* Títulos */
--font-sans: 'Inter', sans-serif;          /* Cuerpo */
```

### Animaciones disponibles
```css
.animate-fade-in-up    /* Fade con slide up */
.animate-fade-in       /* Fade simple */
.animate-fade-in-down  /* Fade con slide down */
.animate-float         /* Flotación continua */
.animate-pulse-slow    /* Pulso lento */
```

---

## 🖼️ Imágenes

### Opción A: Mantener Unsplash (recomendado para demo)
Las URLs de Unsplash ya están configuradas. Si alguna no carga, automáticamente se mostrará un fallback con emoji + nombre del plato.

### Opción B: Reemplazar con imágenes propias
1. Creá una carpeta `assets/img/`
2. Subí tus imágenes optimizadas
3. En `data.js`, reemplazá las URLs `https://images.unsplash.com/...` por rutas relativas: `assets/img/mi-plato.jpg`

### Fallback automático
Todas las imágenes tienen un fallback SVG inline con:
- Gradiente de color personalizado
- Emoji representativo del plato
- Nombre del plato como texto

---

## 📱 Responsive Design

| Breakpoint | Comportamiento |
|------------|----------------|
| **Mobile** (<768px) | Menú hamburguesa, grids de 1 columna |
| **Tablet** (768-1024px) | Grids de 2 columnas |
| **Desktop** (>1024px) | Grids de 3-4 columnas, navbar completo |

---

## 🔧 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Safari iOS 14+
- ✅ Chrome Android 90+

---

## 📄 Páginas Incluidas

### 1. **index.html** - Inicio
Hero con CTA, estadísticas, especialidades, sobre nosotros, platos destacados, testimonios, CTA final.

### 2. **sobre-nosotros.html**
Historia, galería de 4 imágenes, misión/visión/valores, equipo (4 cards), línea de tiempo.

### 3. **servicios.html**
6 servicios en cards, proceso de 4 pasos, CTA de cotización.

### 4. **menu.html**
4 tabs de categorías (Entrantes, Principales, Postres, Vinos) con 16 platos totales.

### 5. **galeria.html**
12 imágenes con filtros (interior, platos, cocina, exterior, eventos) + lightbox.

### 6. **contacto.html**
Formulario validado, información de contacto, mapa de Santiago, horarios con indicador "Hoy".

### 7. **privacidad.html**
Política de privacidad completa (11 secciones).

### 8. **terminos.html**
Términos y condiciones completos (13 secciones).

---

## 🐛 Solución de Problemas

### Las imágenes no se ven
1. Verificá tu conexión a internet (se cargan desde Unsplash)
2. Si tenés firewall corporativo, las imágenes externas pueden bloquearse
3. **Solución**: Reemplazá las URLs en `data.js` por imágenes locales

### El navbar no se oculta al hacer scroll
Verificá que JavaScript esté habilitado en el navegador.

### El formulario no valida
Abrí la consola del navegador (F12) para ver si hay errores de JavaScript.

### Las páginas legales no muestran el contenido
Verificá que el archivo `styles.css` se cargue correctamente.

---

## 📦 Despliegue en Producción

### Hosting estático (recomendado)
Subí todos los archivos a cualquier servicio de hosting estático:

- **Netlify**: Drag & drop la carpeta
- **Vercel**: `vercel deploy`
- **GitHub Pages**: Commit y push
- **Cloudflare Pages**: Conectá tu repo
- **Hosting tradicional**: FTP a tu servidor

### Consideraciones
- Reemplazá las imágenes de Unsplash por imágenes propias para mejor rendimiento
- Optimizá las imágenes (WebP, lazy loading)
- Considerá agregar un build de Tailwind local para reducir el CSS

---

## 📝 Licencia

Este template es de uso libre. Podés modificarlo, redistribuirlo y usarlo para proyectos comerciales.

---

## 👨‍💻 Créditos

- **Imágenes**: [Unsplash](https://unsplash.com) (gratuito)
- **Iconos**: [Font Awesome](https://fontawesome.com)
- **Tipografías**: [Google Fonts](https://fonts.google.com)
- **Mapa**: [OpenStreetMap](https://www.openstreetmap.org)

---

## 📞 Soporte

Para preguntas o personalizaciones, contactanos o revisá los comentarios en el código. Cada archivo HTML y JS está documentado.

---

**¡Listo para usar! 🚀**
Simplemente abrí `index.html` y empezá a personalizar.