class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .footer-link:hover {
          color: #ec4899 !important;
        }
      </style>
      <footer class="bg-gray-800 text-gray-300 py-8 mt-12">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 class="text-xl font-bold text-white mb-4">Crimson Pages</h3>
              <p class="mb-4">Your dark literary companion in the world of books.</p>
              <div class="flex space-x-4">
                <a href="#" class="footer-link hover:text-secondary transition"><i data-feather="twitter"></i></a>
                <a href="#" class="footer-link hover:text-secondary transition"><i data-feather="instagram"></i></a>
                <a href="#" class="footer-link hover:text-secondary transition"><i data-feather="facebook"></i></a>
              </div>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold text-white mb-4">Explore</h4>
              <ul class="space-y-2">
                <li><a href="#" class="footer-link hover:text-secondary transition">Featured</a></li>
                <li><a href="#" class="footer-link hover:text-secondary transition">New Releases</a></li>
                <li><a href="#" class="footer-link hover:text-secondary transition">Bestsellers</a></li>
                <li><a href="#" class="footer-link hover:text-secondary transition">Genres</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold text-white mb-4">Company</h4>
              <ul class="space-y-2">
                <li><a href="#" class="footer-link hover:text-secondary transition">About Us</a></li>
                <li><a href="#" class="footer-link hover:text-secondary transition">Careers</a></li>
                <li><a href="#" class="footer-link hover:text-secondary transition">Blog</a></li>
                <li><a href="#" class="footer-link hover:text-secondary transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul class="space-y-2">
                <li><a href="#" class="footer-link hover:text-secondary transition">Terms</a></li>
                <li><a href="#" class="footer-link hover:text-secondary transition">Privacy</a></li>
                <li><a href="#" class="footer-link hover:text-secondary transition">Cookies</a></li>
                <li><a href="#" class="footer-link hover:text-secondary transition">Copyright</a></li>
              </ul>
            </div>
          </div>
          
          <div class="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2023 Crimson Pages Noir. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
