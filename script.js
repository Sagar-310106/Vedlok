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
        const zoomFactor = 1 + (scrollPosition / windowHeight) * 0.8;
        background.style.transform = `scale(${Math.min(zoomFactor, 1.4)})`;
        
        // Show content and transform elements when scrolled 10% of viewport height
        if (scrollPosition > windowHeight * 0.1) {
            content.classList.add('visible');
            mainNav.classList.add('visible');
            
            // Calculate progress for smooth transitions
            const progress = Math.min((scrollPercentage - 10) / 40, 1);
            
            // Apply smooth scaling to Krishna image
            const scaleValue = 1 - (progress * 0.15);
            krishnaImage.style.transform = `scale(${scaleValue})`;
            
            // Apply smooth transition to foreground
            foreground.style.transform = `translate(-50%, ${50 - progress * 15}%)`;
            
            // Fade in logo with smooth transition
            vedlokLogo.style.opacity = progress;
            vedlokLogo.style.transform = `translateY(${40 - progress * 40}vh) scale(${0.2 + progress * 0.8})`;
        } else {
            content.classList.remove('visible');
            mainNav.classList.remove('visible');
            krishnaImage.style.transform = '';
            foreground.style.transform = 'translate(-50%, 50%)';
            vedlokLogo.style.opacity = '0';
            vedlokLogo.style.transform = 'translateY(50vh) scale(0.2)';
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

    // About section animations
    const aboutSection = document.querySelector('.about-section');
    const aboutContent = document.querySelector('.about-content');
    const aboutTitle = document.querySelector('.about-title');
    const bookImages = document.querySelectorAll('.book-img');
    const aboutText = document.querySelector('.about-text');

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '-20px'
    };

    const resetAboutAnimations = () => {
        // Add a small delay before resetting to ensure smooth transition
        setTimeout(() => {
            aboutText.classList.remove('visible');
        }, 100);
        
        setTimeout(() => {
            bookImages.forEach((img, index) => {
                setTimeout(() => img.classList.remove('visible'), index * 100);
            });
        }, 200);
        
        setTimeout(() => {
            aboutTitle.classList.remove('visible');
            aboutContent.classList.remove('visible');
        }, 400);
    };

    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start animations when section is visible
                setTimeout(() => aboutContent.classList.add('visible'), 100);
                setTimeout(() => aboutTitle.classList.add('visible'), 300);
                
                // Animate books one by one
                bookImages.forEach((img, index) => {
                    setTimeout(() => img.classList.add('visible'), 500 + (index * 200));
                });
                
                setTimeout(() => aboutText.classList.add('visible'), 1200);
            } else {
                // Reset animations when section is out of view
                resetAboutAnimations();
            }
        });
    }, observerOptions);

    aboutObserver.observe(aboutSection);

    // Add hover effect sound (optional)
    bookImages.forEach(book => {
        book.addEventListener('mouseenter', () => {
            book.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        book.addEventListener('mouseleave', () => {
            book.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
}); 