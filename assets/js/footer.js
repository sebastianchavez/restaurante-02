// Componente Footer reutilizable
function renderFooter() {
  const data = window.RESTAURANT_DATA;
  const year = new Date().getFullYear();

  const footerHTML = `
    <footer class="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <!-- Sobre el restaurante -->
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <i class="fas fa-utensils text-amber-500 text-xl"></i>
              <span class="text-xl font-serif font-bold text-white">${data.nombre}</span>
            </div>
            <p class="text-sm text-stone-400 mb-4">${data.descripcion}</p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-stone-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-stone-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-stone-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" aria-label="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <!-- Navegación -->
          <div>
            <h3 class="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Navegación</h3>
            <ul class="space-y-2">
              <li><a href="index.html" class="text-sm hover:text-amber-500 transition-colors">Inicio</a></li>
              <li><a href="sobre-nosotros.html" class="text-sm hover:text-amber-500 transition-colors">Sobre Nosotros</a></li>
              <li><a href="servicios.html" class="text-sm hover:text-amber-500 transition-colors">Servicios</a></li>
              <li><a href="menu.html" class="text-sm hover:text-amber-500 transition-colors">Menú</a></li>
              <li><a href="galeria.html" class="text-sm hover:text-amber-500 transition-colors">Galería</a></li>
              <li><a href="contacto.html" class="text-sm hover:text-amber-500 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <!-- Horarios -->
          <div>
            <h3 class="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Horarios</h3>
            <ul class="space-y-2 text-sm">
              ${data.horarios.map(h => `
                <li class="flex justify-between">
                  <span class="text-stone-400">${h.dia}</span>
                  <span class="text-stone-300">${h.horario}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Contacto -->
          <div>
            <h3 class="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Contacto</h3>
            <ul class="space-y-3 text-sm">
              <li class="flex items-start space-x-2">
                <i class="fas fa-map-marker-alt text-amber-500 mt-1"></i>
                <span>${data.contacto.direccion}<br>${data.contacto.ciudad}</span>
              </li>
              <li class="flex items-center space-x-2">
                <i class="fas fa-phone text-amber-500"></i>
                <span>${data.contacto.telefono}</span>
              </li>
              <li class="flex items-center space-x-2">
                <i class="fas fa-envelope text-amber-500"></i>
                <span>${data.contacto.email}</span>
              </li>
            </ul>
          </div>

        </div>

        <!-- Divider -->
        <div class="border-t border-stone-800 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <p class="text-sm text-stone-500">&copy; ${year} ${data.nombre}. Todos los derechos reservados.</p>
            <div class="flex space-x-6 mt-4 md:mt-0">
              <a href="privacidad.html" class="text-sm text-stone-500 hover:text-amber-500 transition-colors">Políticas de Privacidad</a>
              <a href="terminos.html" class="text-sm text-stone-500 hover:text-amber-500 transition-colors">Términos y Condiciones</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;

  return footerHTML;
}

function initFooter() {
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = renderFooter();
  }
}

if (typeof window !== 'undefined') {
  window.renderFooter = renderFooter;
  window.initFooter = initFooter;
}