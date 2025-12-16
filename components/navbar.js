class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .navbar {
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          color: #ec4899 !important;
        }
      </style>
      <nav class="navbar bg-gray-800 shadow-lg px-4 py-3">
        <div class="container mx-auto flex justify-between items-center">
          <a href="/" class="flex items-center space-x-2">
            <i data-feather="book" class="text-primary"></i>
            <span class="text-xl font-bold text-white">Crimson Pages</span>
          </a>
          
          <div class="hidden md:flex space-x-6">
            <a href="#" class="nav-link text-gray-300 hover:text-secondary transition">Home</a>
            <a href="#" class="nav-link text-gray-300 hover:text-secondary transition">Browse</a>
            <a href="#" class="nav-link text-gray-300 hover:text-secondary transition">Categories</a>
            <a href="#" class="nav-link text-gray-300 hover:text-secondary transition">About</a>
          </div>
          
          <div class="flex items-center space-x-4">
            <button id="darkModeToggle" class="p-2 rounded-full hover:bg-gray-700 transition">
              <i data-feather="moon" class="text-gray-300"></i>
            </button>
            <a href="#" class="p-2 rounded-full hover:bg-gray-700 transition">
              <i data-feather="search" class="text-gray-300"></i>
            </a>
            <a href="#" class="p-2 rounded-full hover:bg-gray-700 transition">
              <i data-feather="user" class="text-gray-300"></i>
            </a>
          </div>
        </div>
      </nav>
    `;
    
    // Add dark mode toggle functionality
    const darkModeToggle = this.shadowRoot.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
      const html = document.documentElement;
      html.classList.toggle('dark');
      localStorage.setItem('darkMode', !html.classList.contains('dark'));
      feather.replace();
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
