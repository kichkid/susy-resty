document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const inner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const indicators = document.querySelector('.carousel-indicators');
    let currentIndex = 0;
    
    // Create indicators
    items.forEach((_, index) => {
        const indicator = document.createElement('span');
        indicator.addEventListener('click', () => goToSlide(index));
        indicators.appendChild(indicator);
    });
    
    // Update indicators
    function updateIndicators() {
        const dots = document.querySelectorAll('.carousel-indicators span');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Go to specific slide
    function goToSlide(index) {
        currentIndex = index;
        const itemWidth = items[0].offsetWidth + 20; // Include gap
        inner.scrollTo({
            left: itemWidth * index,
            behavior: 'smooth'
        });
        updateIndicators();
    }
    
    // Next slide
    function nextSlide() {
        if (currentIndex < items.length - 1) {
            goToSlide(currentIndex + 1);
        } else {
            goToSlide(0);
        }
    }
    
    // Previous slide
    function prevSlide() {
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1);
        } else {
            goToSlide(items.length - 1);
        }
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextSlide(); // Swipe left
        } else if (touchEndX > touchStartX + 50) {
            prevSlide(); // Swipe right
        }
    }
    
    // Initialize
    updateIndicators();
    
    // Auto-advance (optional)
    // setInterval(nextSlide, 5000);
});



document.querySelector('.transition-all').addEventListener('mouseover', function() {
    this.classList.add('transform', 'scale-110');
  });
  
  document.querySelector('.transition-all').addEventListener('mouseout', function() {
    this.classList.remove('transform', 'scale-110');
  });