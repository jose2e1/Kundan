// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved theme preference
    if (localStorage.getItem('darkMode') === 'false') {
        document.documentElement.classList.remove('dark');
    }
});

// Book rating stars generation
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i data-feather="star" class="text-yellow-400 w-4 h-4"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i data-feather="star" class="text-yellow-400 w-4 h-4"><div class="w-2 overflow-hidden inline-block"><i data-feather="star" class="text-gray-400 w-4 h-4"></i></div></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i data-feather="star" class="text-gray-400 w-4 h-4"></i>';
    }
    
    return stars;
}
