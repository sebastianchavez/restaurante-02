// Componente Navbar reutilizable
function renderNavbar(paginaActiva = 'inicio') {
  const links = [
    { id: 'inicio', href: 'index.html', texto: 'Inicio' },
    { id: 'sobre-nosotros', href: 'sobre-nosotros.html', texto: 'Sobre Nosotros' },
    { id: 'servicios', href: 'servicios.html', texto: 'Servicios' },
    { id: 'menu', href: 'menu.html', texto: 'Menú' },
    { id: 'galeria', href: 'galeria.html', texto: 'Galería' },
    { id: 'contacto', href: 'contacto.html', texto: 'Contacto' }
  ];

  const data = window.RESTAURANT_DATA;

  const navbarHTML = `
    <nav id="main-navbar" class="fixed top-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-sm shadow-lg transition-transform duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <a href="index.html" class="flex items-center space-x-2 group">
            <i class="fas fa-utensils text-amber-500 text-2xl group-hover:rotate-12 transition-transform duration-300"></i>
            <span class="text-2xl font-serif font-bold text-white">${data.nombre}</span>
          </a>

          <!-- Desktop Menu -->
          <div class="hidden lg:flex items-center space-x-8">
            ${links.map(link => `
              <a href="${link.href}" 
                 class="text-sm font-medium transition-colors duration-300 ${
                   paginaActiva === link.id 
                     ? 'text-amber-500 border-b-2 border-amber-500 pb-1' 
                     : 'text-stone-300 hover:text-amber-500'
                 }">
                ${link.texto}
              </a>
            `).join('')}
            <a href="contacto.html" class="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Reservar Mesa
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button id="mobile-menu-btn" class="lg:hidden text-white text-2xl focus:outline-none" aria-label="Abrir menú">
            <i class="fas fa-bars"></i>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden lg:hidden pb-6">
          <div class="flex flex-col space-y-4">
            ${links.map(link => `
              <a href="${link.href}" 
                 class="text-base font-medium transition-colors duration-300 py-2 ${
                   paginaActiva === link.id 
                     ? 'text-amber-500' 
                     : 'text-stone-300 hover:text-amber-500'
                 }">
                ${link.texto}
              </a>
            `).join('')}
            <a href="contacto.html" class="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 text-center mt-4">
              Reservar Mesa
            </a>
          </div>
        </div>
      </div>
    </nav>
  `;

  return navbarHTML;
}

// Inicializar navbar
function initNavbar(paginaActiva) {
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    navbarContainer.innerHTML = renderNavbar(paginaActiva);
    
    // Toggle mobile menu
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        const icon = btn.querySelector('i');
        if (menu.classList.contains('hidden')) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        } else {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        }
      });
    }

    // Hide navbar on scroll down, show on scroll up
    let lastScroll = 0;
    const navbar = document.getElementById('main-navbar');
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }
      lastScroll = currentScroll;
    });
  }
}

if (typeof window !== 'undefined') {
  window.renderNavbar = renderNavbar;
  window.initNavbar = initNavbar;
}