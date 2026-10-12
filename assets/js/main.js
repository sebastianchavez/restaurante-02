// Lógica principal compartida entre páginas

// Genera SVG con emoji + nombre del plato como fallback
function generarFallbackSVG(nombre, color1 = '#78350f', color2 = '#1c1917', emoji = '🍽️') {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400' preserveAspectRatio='xMidYMid slice'>
    <defs>
      <linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stop-color='${color1}'/>
        <stop offset='100%' stop-color='${color2}'/>
      </linearGradient>
    </defs>
    <rect fill='url(#g)' width='600' height='400'/>
    <text x='50%' y='40%' text-anchor='middle' font-size='120' dominant-baseline='middle'>${emoji}</text>
    <text x='50%' y='65%' text-anchor='middle' fill='#fbbf24' font-family='Georgia, serif' font-size='32' font-style='italic' dominant-baseline='middle'>${nombre}</text>
    <text x='50%' y='80%' text-anchor='middle' fill='#d97706' font-family='sans-serif' font-size='14' letter-spacing='4' dominant-baseline='middle'>BELLA VISTA</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// Maneja el error de carga de imagen y pone un fallback
function handleImageError(img) {
  if (img.dataset.fallbackApplied === 'true') return;
  img.dataset.fallbackApplied = 'true';
  
  const alt = img.alt || 'Bella Vista';
  
  // Intentar detectar categoría desde el nombre del archivo o alt
  let emoji = '🍽️';
  let color1 = '#78350f';
  let color2 = '#1c1917';
  
  const a = alt.toLowerCase();
  if (a.includes('salmon') || a.includes('pez') || a.includes('marisc')) { emoji = '🐟'; color1 = '#ea580c'; }
  else if (a.includes('carne') || a.includes('res') || a.includes('corte')) { emoji = '🥩'; color1 = '#7c2d12'; }
  else if (a.includes('pasta') || a.includes('carbonara')) { emoji = '🍝'; color1 = '#fbbf24'; color2 = '#78350f'; }
  else if (a.includes('risotto') || a.includes('arroz')) { emoji = '🍚'; color1 = '#a16207'; }
  else if (a.includes('tiramisu') || a.includes('chocolate') || a.includes('volcan')) { emoji = '🍫'; color1 = '#451a03'; }
  else if (a.includes('creme') || a.includes('cheesecake') || a.includes('postre')) { emoji = '🍰'; color1 = '#fbbf24'; color2 = '#92400e'; }
  else if (a.includes('vino') || a.includes('malbec') || a.includes('copa') || a.includes('cabernet')) { emoji = '🍷'; color1 = '#7c2d12'; }
  else if (a.includes('champ') || a.includes('blanco')) { emoji = '🥂'; color1 = '#fef3c7'; color2 = '#78350f'; }
  else if (a.includes('chef')) { emoji = '👨‍🍳'; }
  else if (a.includes('sommelier')) { emoji = '🍷'; color1 = '#7c2d12'; }
  else if (a.includes('sala') || a.includes('camarer')) { emoji = '👩‍💼'; color1 = '#c2410c'; }
  else if (a.includes('cocina')) { emoji = '🔥'; color1 = '#c2410c'; }
  else if (a.includes('carpaccio')) { emoji = '🥩'; color1 = '#92400e'; }
  else if (a.includes('burrata')) { emoji = '🧀'; color1 = '#c2410c'; }
  else if (a.includes('ceviche')) { emoji = '🦐'; color1 = '#0891b2'; color2 = '#0c4a6e'; }
  else if (a.includes('bruschet')) { emoji = '🥖'; color1 = '#b45309'; }
  else if (a.includes('mesa') || a.includes('salon') || a.includes('interior')) { emoji = '🏛️'; color1 = '#78350f'; }
  else if (a.includes('bar')) { emoji = '🍾'; color1 = '#7c2d12'; }
  else if (a.includes('catering') || a.includes('evento')) { emoji = '🥂'; color1 = '#b45309'; }
  else if (a.includes('delivery') || a.includes('truck')) { emoji = '🛵'; color1 = '#c2410c'; }
  else if (a.includes('reserva') || a.includes('calendario')) { emoji = '📅'; color1 = '#9a3412'; }
  else if (a.includes('cata')) { emoji = '🍇'; color1 = '#7c2d12'; }
  else if (a.includes('testimonio') || a.includes('maria') || a.includes('roberto') || a.includes('ana') || a.includes('diego')) { emoji = '👤'; }
  
  img.onerror = null; // Evita loop infinito
  img.src = generarFallbackSVG(alt, color1, color2, emoji);
}

// Asigna fallback a TODAS las imágenes
function initImageFallbacks() {
  document.querySelectorAll('img').forEach(img => {
    if (img.dataset.fallbackApplied !== 'true') {
      img.onerror = function() { handleImageError(this); };
    }
  });
}

// Animaciones al hacer scroll
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.05,
    rootMargin: '0px 0px -20px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Solo observar elementos nuevos (no los ya animados)
  document.querySelectorAll('.animable:not(.animated)').forEach(el => {
    el.classList.add('animated');
    if (el.style.opacity !== '1') {
      el.style.opacity = '0';
    }
    observer.observe(el);
  });

  // Fallback de seguridad: si después de 2s algo sigue invisible, mostrarlo
  setTimeout(() => {
    document.querySelectorAll('.animable:not(.animate-fade-in-up)').forEach(el => {
      el.style.opacity = '1';
      el.classList.add('animate-fade-in-up');
    });
  }, 2000);

  // Asignar fallback a imágenes
  initImageFallbacks();
}

// Validación de formulario de contacto
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const nombre = formData.get('nombre');
    const email = formData.get('email');
    const mensaje = formData.get('mensaje');

    if (!nombre || !email || !mensaje) {
      showNotification('Por favor completa todos los campos obligatorios', 'error');
      return;
    }

    if (!validateEmail(email)) {
      showNotification('Por favor ingresa un email válido', 'error');
      return;
    }

    showNotification('¡Mensaje enviado correctamente! Te responderemos pronto.', 'success');
    form.reset();
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `fixed top-24 right-4 z-50 px-6 py-4 rounded-lg shadow-2xl transform transition-all duration-300 ${
    type === 'success' ? 'bg-green-600' : 'bg-red-600'
  } text-white font-medium`;
  notification.textContent = message;
  notification.style.opacity = '0';
  notification.style.transform = 'translateX(100%)';
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateX(0)';
  }, 10);

  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}

// Galería - Lightbox
function initGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');

  if (!lightbox || !galleryItems.length) return;

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const imagen = item.dataset.imagen;
      const title = item.dataset.title;
      const emoji = item.dataset.emoji || '🍽️';
      const color1 = item.dataset.color1 || '#78350f';
      const color2 = item.dataset.color2 || '#1c1917';
      
      // Si no hay imagen o falla, usar SVG
      if (!imagen || imagen === 'undefined') {
        lightboxImg.src = generarFallbackSVG(title, color1, color2, emoji);
      } else {
        lightboxImg.src = imagen;
      }
      lightboxImg.alt = title;
      lightboxImg.onerror = function() { 
        this.src = generarFallbackSVG(title, color1, color2, emoji);
      };
      lightboxCaption.textContent = title;
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

// Inicializar todo al cargar DOM
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initContactForm();
  initGallery();
  initImageFallbacks();
});

if (typeof window !== 'undefined') {
  window.initScrollAnimations = initScrollAnimations;
  window.initContactForm = initContactForm;
  window.initGallery = initGallery;
  window.initImageFallbacks = initImageFallbacks;
  window.showNotification = showNotification;
  window.validateEmail = validateEmail;
  window.handleImageError = handleImageError;
  window.generarFallbackSVG = generarFallbackSVG;
}