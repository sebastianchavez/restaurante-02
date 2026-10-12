// Datos mockeados del restaurante
const RESTAURANT_DATA = {
  nombre: "Bella Vista",
  eslogan: "Sabores que cuentan historias",
  descripcion: "Donde la tradición se encuentra con la innovación culinaria",
  
  // Generador de imágenes con placeholders SVG (no depende de internet)
  imagenPlato: function(nombre, color1 = '#78350f', color2 = '#1c1917', emoji = '🍽️') {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'>
      <defs>
        <linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' stop-color='${color1}'/>
          <stop offset='100%' stop-color='${color2}'/>
        </linearGradient>
      </defs>
      <rect fill='url(#g)' width='600' height='400'/>
      <text x='50%' y='40%' text-anchor='middle' font-size='120'>${emoji}</text>
      <text x='50%' y='65%' text-anchor='middle' fill='#fbbf24' font-family='Georgia' font-size='28' font-style='italic'>${nombre}</text>
      <text x='50%' y='78%' text-anchor='middle' fill='#d97706' font-family='sans-serif' font-size='14' letter-spacing='3'>BELLA VISTA</text>
    </svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  },

  contacto: {
    direccion: "Av. Libertador Bernardo O'Higgins 1234",
    ciudad: "Santiago Centro, Región Metropolitana",
    telefono: "+56 2 2555 2345",
    whatsapp: "+56 9 5555 2345",
    email: "reservas@bellavista.cl",
    redes: {
      instagram: "@bellavista.restaurant",
      facebook: "BellaVistaRestaurant",
      twitter: "@bellavista_rest"
    }
  },

  horarios: [
    { dia: "Lunes", horario: "Cerrado" },
    { dia: "Martes a Jueves", horario: "12:00 - 15:30 / 19:30 - 23:30" },
    { dia: "Viernes y Sábado", horario: "12:00 - 01:00" },
    { dia: "Domingo", horario: "12:00 - 16:00" }
  ],

  menu: [
    {
      categoria: "Entrantes",
      items: [
        { nombre: "Carpaccio de Res", descripcion: "Finas láminas de res con rúcula, parmesano y aceite de trufa", precio: "$12.800", emoji: "🥩", color1: "#92400e", color2: "#1c1917", imagen: "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=600&q=80" },
        { nombre: "Burrata con Tomates", descripcion: "Burrata fresca con tomates de estación y albahaca", precio: "$13.500", emoji: "🧀", color1: "#c2410c", color2: "#1c1917", imagen: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600&q=80" },
        { nombre: "Ceviche Mixto", descripcion: "Pescado blanco, camarones y pulpo con limón y cilantro", precio: "$14.200", emoji: "🦐", color1: "#0891b2", color2: "#0c4a6e", imagen: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=600&q=80" },
        { nombre: "Bruschetta Italiana", descripcion: "Pan tostado con tomates frescos, albahaca y aceite de oliva", precio: "$9.800", emoji: "🥖", color1: "#b45309", color2: "#451a03", imagen: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=80" }
      ]
    },
    {
      categoria: "Principales",
      items: [
        { nombre: "Salmón Glaseado", descripcion: "Salmón atlántico con glaseado de miel y mostaza, vegetales asados", precio: "$24.900", emoji: "🐟", color1: "#ea580c", color2: "#7c2d12", imagen: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80" },
        { nombre: "Corte de Res 400g", descripcion: "Bife de chorizo con papas soufflé y chimichurri de la casa", precio: "$28.500", emoji: "🥩", color1: "#7c2d12", color2: "#1c1917", imagen: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80" },
        { nombre: "Pasta Carbonara", descripcion: "Pasta fresca con panceta, parmesano y huevo", precio: "$18.900", emoji: "🍝", color1: "#fbbf24", color2: "#78350f", imagen: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80" },
        { nombre: "Risotto de Hongos", descripcion: "Arroz carnaroli con hongos portobello y parmesano", precio: "$19.500", emoji: "🍚", color1: "#a16207", color2: "#1c1917", imagen: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80" }
      ]
    },
    {
      categoria: "Postres",
      items: [
        { nombre: "Tiramisú Clásico", descripcion: "Bizcocho de café con mascarpone y cacao", precio: "$8.500", emoji: "🍰", color1: "#78350f", color2: "#451a03", imagen: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80" },
        { nombre: "Volcán de Chocolate", descripcion: "Bizcocho tibio con corazón fundido y helado de vainilla", precio: "$9.200", emoji: "🍫", color1: "#451a03", color2: "#1c1917", imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80" },
        { nombre: "Crème Brûlée", descripcion: "Crema de vainilla con caramelo crujiente", precio: "$8.800", emoji: "🍮", color1: "#fbbf24", color2: "#92400e", imagen: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80" },
        { nombre: "Cheesecake de Frutas", descripcion: "Tarta de queso cremoso con frutas rojas", precio: "$8.200", emoji: "🍓", color1: "#dc2626", color2: "#7f1d1d", imagen: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80" }
      ]
    },
    {
      categoria: "Vinos",
      items: [
        { nombre: "Carmenere Reserva", descripcion: "Vino tinto del Valle de Colchique, notas a frutas rojas y especias", precio: "$16.500", emoji: "🍷", color1: "#7c2d12", color2: "#1c1917", imagen: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80" },
        { nombre: "Sauvignon Blanc", descripcion: "Vino blanco del Valle de Casablanca, fresco y aromático", precio: "$14.800", emoji: "🥂", color1: "#fef3c7", color2: "#78350f", imagen: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80" },
        { nombre: "Cabernet Sauvignon", descripcion: "Tinto estructurado del Valle de Maipo, ideal para carnes rojas", precio: "$18.900", emoji: "🍾", color1: "#991b1b", color2: "#1c1917", imagen: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=600&q=80" },
        { nombre: "Copa de Vino", descripcion: "Copa de vino seleccionado por nuestro sommelier", precio: "$6.500", emoji: "🍷", color1: "#9a3412", color2: "#0c0a09", imagen: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&q=80" }
      ]
    }
  ],

  servicios: [
    { icono: "fa-utensils", titulo: "Restaurante", descripcion: "Disfruta de una cocina de autor en nuestro elegante salón principal con ambiente acogedor.", emoji: "🍽️", color1: "#92400e", color2: "#1c1917", imagen: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80" },
    { icono: "fa-glass-cheers", titulo: "Eventos Privados", descripcion: "Salones exclusivos para celebraciones, cenas corporativas y ocasiones especiales.", emoji: "🥂", color1: "#b45309", color2: "#292524", imagen: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80" },
    { icono: "fa-truck", titulo: "Delivery Premium", descripcion: "Llevamos nuestros platos a tu hogar con packaging especializado y máxima frescura.", emoji: "🛵", color1: "#c2410c", color2: "#44403c", imagen: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80" },
    { icono: "fa-calendar-check", titulo: "Reservas Online", descripcion: "Sistema de reservas fácil y rápido para garantizar tu mesa en el horario deseado.", emoji: "📅", color1: "#9a3412", color2: "#0c0a09", imagen: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80" },
    { icono: "fa-birthday-cake", titulo: "Catering", descripcion: "Servicio de catering profesional para eventos corporativos y sociales.", emoji: "🎂", color1: "#ea580c", color2: "#292524", imagen: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80" },
    { icono: "fa-wine-glass-alt", titulo: "Cata de Vinos", descripcion: "Experiencias guiadas de cata con sommelier profesional y maridaje incluido.", emoji: "🍇", color1: "#7c2d12", color2: "#1c1917", imagen: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80" }
  ],

  equipo: [
    { nombre: "Chef Alessandro Rossi", rol: "Chef Ejecutivo", especialidad: "Cocina Italiana Contemporánea", emoji: "👨‍🍳", color1: "#92400e", color2: "#1c1917", imagen: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80" },
    { nombre: "Chef Sofía Martínez", rol: "Chef de Cocina", especialidad: "Pastelería de Autor", emoji: "👩‍🍳", color1: "#b45309", color2: "#292524", imagen: "https://images.unsplash.com/photo-1581299894007-aaa34979e1b3?w=400&q=80" },
    { nombre: "Carlos Mendoza", rol: "Sommelier", especialidad: "Vinos y Maridaje", emoji: "🍷", color1: "#7c2d12", color2: "#1c1917", imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
    { nombre: "Lucía Fernández", rol: "Jefa de Sala", especialidad: "Atención al Cliente", emoji: "👩‍💼", color1: "#c2410c", color2: "#44403c", imagen: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" }
  ],

  galeria: [
    { titulo: "Salón Principal", categoria: "interior", emoji: "🏛️", color1: "#78350f", color2: "#1c1917", imagen: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" },
    { titulo: "Plato Signature", categoria: "platos", emoji: "🍽️", color1: "#92400e", color2: "#1c1917", imagen: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" },
    { titulo: "Barra de Vinos", categoria: "interior", emoji: "🍾", color1: "#7c2d12", color2: "#0c0a09", imagen: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80" },
    { titulo: "Cocina Abierta", categoria: "cocina", emoji: "🔥", color1: "#c2410c", color2: "#451a03", imagen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80" },
    { titulo: "Plato Gourmet", categoria: "platos", emoji: "🐟", color1: "#ea580c", color2: "#7c2d12", imagen: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80" },
    { titulo: "Postre Artesanal", categoria: "platos", emoji: "🍰", color1: "#78350f", color2: "#451a03", imagen: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80" },
    { titulo: "Mesa Preparada", categoria: "interior", emoji: "🕯️", color1: "#b45309", color2: "#292524", imagen: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80" },
    { titulo: "Chef en Acción", categoria: "cocina", emoji: "👨‍🍳", color1: "#9a3412", color2: "#0c0a09", imagen: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80" },
    { titulo: "Copa de Vino", categoria: "interior", emoji: "🍷", color1: "#7c2d12", color2: "#1c1917", imagen: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&q=80" },
    { titulo: "Corte de Res", categoria: "platos", emoji: "🥩", color1: "#7c2d12", color2: "#1c1917", imagen: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80" },
    { titulo: "Pasta Italiana", categoria: "platos", emoji: "🍝", color1: "#fbbf24", color2: "#78350f", imagen: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80" },
    { titulo: "Mariscos", categoria: "platos", emoji: "🦞", color1: "#0891b2", color2: "#0c4a6e", imagen: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80" }
  ],

  testimonios: [
    { nombre: "María González", comentario: "Una experiencia gastronómica excepcional. Cada plato es una obra de arte.", estrellas: 5, emoji: "👩", color1: "#92400e", imagen: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" },
    { nombre: "Roberto Silva", comentario: "El mejor restaurante de la ciudad sin dudas. Servicio impecable y comida deliciosa.", estrellas: 5, emoji: "👨", color1: "#7c2d12", imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
    { nombre: "Ana Pérez", comentario: "Celebramos nuestro aniversario y fue perfecto. Ambiente romántico y cocina exquisita.", estrellas: 5, emoji: "👩‍🦰", color1: "#b45309", imagen: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" },
    { nombre: "Diego Morales", comentario: "La atención al detalle es impresionante. Volveré sin dudas.", estrellas: 5, emoji: "🧔", color1: "#9a3412", imagen: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" }
  ],

  especialidades: [
    { titulo: "Mariscos Frescos", descripcion: "Del mar a tu mesa, con la frescura que solo nosotros garantizamos.", emoji: "🦞", color1: "#0891b2", color2: "#0c4a6e", imagen: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80" },
    { titulo: "Cortes Premium", descripcion: "Cortes seleccionados de res madurados al punto perfecto.", emoji: "🥩", color1: "#7c2d12", color2: "#1c1917", imagen: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80" },
    { titulo: "Cava Seleccionada", descripcion: "Más de 200 etiquetas de las regiones vitivinícolas más prestigiosas.", emoji: "🍾", color1: "#7c2d12", color2: "#0c0a09", imagen: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80" }
  ],

  estadisticas: [
    { numero: "15+", texto: "Años de experiencia" },
    { numero: "50K+", texto: "Clientes satisfechos" },
    { numero: "120+", texto: "Platos en carta" },
    { numero: "4.9", texto: "Calificación promedio" }
  ],

  // Hero con gradiente (no depende de Unsplash)
  hero: {
    color1: "#451a03",
    color2: "#1c1917",
    emoji: "🍽️",
    texto: "Bella Vista"
  }
};

// Hacer los datos accesibles globalmente
if (typeof window !== 'undefined') {
  window.RESTAURANT_DATA = RESTAURANT_DATA;
}