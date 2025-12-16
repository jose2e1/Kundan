class BookCard extends HTMLElement {
  static get observedAttributes() {
    return ['title', 'author', 'thumbnail', 'rating'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  render() {
    const title = this.getAttribute('title') || 'Unknown Title';
    const author = this.getAttribute('author') || 'Unknown Author';
    const thumbnail = this.getAttribute('thumbnail') || 'https://via.placeholder.com/300x450?text=No+Image';
    const rating = this.getAttribute('rating') || '0';

    this.shadowRoot.innerHTML = `
      <style>
        .book-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .book-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(239, 68, 68, 0.3);
        }
        .thumbnail-container {
          position: relative;
          overflow: hidden;
          border-radius: 0.5rem;
        }
        .thumbnail-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 30%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .book-card:hover .thumbnail-container::after {
          opacity: 1;
        }
        .view-button {
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }
        .book-card:hover .view-button {
          opacity: 1;
          transform: translateY(0);
        }
      </style>
      
      <div class="book-card bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <div class="thumbnail-container aspect-[2/3] relative">
          <img src="${thumbnail}" alt="${title}" class="w-full h-full object-cover">
          <div class="absolute bottom-0 left-0 right-0 p-4 z-10">
            <button class="view-button w-full bg-primary hover:bg-red-600 text-white py-2 px-4 rounded transition">
              View Details
            </button>
          </div>
        </div>
        
        <div class="p-4">
          <h3 class="text-lg font-bold text-white truncate">${title}</h3>
          <p class="text-gray-400 text-sm mb-2">by ${author}</p>
          <div class="flex items-center">
            <div class="flex mr-2" id="rating-stars">
              ${generateStars(parseFloat(rating))}
            </div>
            <span class="text-sm text-gray-400">${rating}</span>
          </div>
        </div>
      </div>
    `;
    
    // Replace feather icons after rendering
    setTimeout(() => {
      if (this.shadowRoot.querySelector('[data-feather]')) {
        feather.replace();
      }
    }, 100);
  }
}

customElements.define('book-card', BookCard);
