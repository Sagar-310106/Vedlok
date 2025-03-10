document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    const krishnaImage = document.querySelector('.krishna-image');
    const background = document.querySelector('.background');
    const foreground = document.querySelector('.foreground');
    const vedlokLogo = document.querySelector('.vedlok-logo');
    const mainNav = document.querySelector('.main-nav');
    
    // Function to handle scroll effects
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const scrollPercentage = (scrollPosition / windowHeight) * 100;
        
        // Calculate zoom factor based on scroll position
        const zoomFactor = 1 + (scrollPosition / windowHeight) * 0.4;
        background.style.transform = `scale(${Math.min(zoomFactor, 1.4)})`;
        
        // Show content and transform elements when scrolled 20% of viewport height
        if (scrollPosition > windowHeight * 0.2) {
            content.classList.add('visible');
            krishnaImage.classList.add('scaled');
            foreground.classList.add('scrolled');
            vedlokLogo.classList.add('visible');
            mainNav.classList.add('visible');
            
            // Set opacity directly for smoother appearance
            vedlokLogo.style.opacity = Math.min((scrollPercentage - 15) / 20, 1);
        } else {
            content.classList.remove('visible');
            krishnaImage.classList.remove('scaled');
            foreground.classList.remove('scrolled');
            vedlokLogo.classList.remove('visible');
            mainNav.classList.remove('visible');
            vedlokLogo.style.opacity = 0;
        }
    };
    
    // Add scroll event listener with smooth performance
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Initial check for scroll position
    handleScroll();
}); 