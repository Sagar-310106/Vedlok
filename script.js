document.addEventListener('DOMContentLoaded', () => {
    const parallaxContainer = document.querySelector('.parallax-container');
    const background = document.querySelector('.background');
    const foreground = document.querySelector('.foreground');
    const krishnaImage = document.querySelector('.krishna-image');
    const logoBackground = document.querySelector('.logo-background');
    const vedlokLogo = document.querySelector('.vedlok-logo');
    const content = document.querySelector('.content');
    const welcomeBtn = document.querySelector('.welcome-btn');
    const mainNav = document.querySelector('.main-nav');
    const aboutContent = document.querySelector('.about-content');
    const aboutTitle = document.querySelector('.about-title');
    const bookImages = document.querySelector('.book-images');
    const aboutText = document.querySelector('.about-text');
    const visionContent = document.querySelector('.vision-content');
    const visionTitle = document.querySelector('.vision-title');
    const visionText = document.querySelector('.vision-text');
    const visionLogos = document.querySelector('.vision-logos');

    let lastScrollTop = 0;
    let ticking = false;
    let elementsVisible = false;

    // Smooth scroll animation function
    const lerp = (start, end, factor) => start * (1 - factor) + end * factor;

    // Scroll handler
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const windowHeight = window.innerHeight;

                // Background zoom effect
                background.style.transform = `scale(${1 + scrollTop * 0.001})`;

                // Logo scroll animation with smooth interpolation
                const targetScale = Math.min(0.8 + (scrollTop * 0.0008), 2.5);
                const moveUp = Math.min(scrollTop * 0.2, 150);
                
                // Apply smooth transforms
                logoBackground.style.transform = `translate(-50%, calc(-50% - ${moveUp}px))`;
                vedlokLogo.style.transform = `scale(${targetScale})`;

                // Show/hide welcome button and navbar based on scroll
                if (scrollTop > 100 && !elementsVisible) {
                    elementsVisible = true;
                    content.classList.add('visible');
                    setTimeout(() => {
                        welcomeBtn.classList.add('visible');
                    }, 200);
                    setTimeout(() => {
                        mainNav.classList.add('visible');
                    }, 400);
                } else if (scrollTop <= 0) {
                    elementsVisible = false;
                    content.classList.remove('visible');
                    welcomeBtn.classList.remove('visible');
                    mainNav.classList.remove('visible');
                }

                // Foreground and Krishna image scaling
                if (scrollTop > 0) {
                    foreground.classList.add('scrolled');
                    krishnaImage.classList.add('scaled');
                } else {
                    foreground.classList.remove('scrolled');
                    krishnaImage.classList.remove('scaled');
                }

                // About section animations
                const aboutSection = document.querySelector('.about-section');
                const aboutRect = aboutSection.getBoundingClientRect();
                const triggerPoint = windowHeight * 0.7;
                const scrollProgress = Math.max(0, Math.min(1, (windowHeight - aboutRect.top) / (windowHeight * 0.5)));

                // Apply scroll-based animations to about section
                if (aboutRect.top <= triggerPoint) {
                    aboutContent.style.opacity = scrollProgress;
                    aboutContent.style.transform = `translateY(${(1 - scrollProgress) * 50}px)`;
                    
                    aboutTitle.style.opacity = scrollProgress;
                    aboutTitle.style.transform = `translateY(${(1 - scrollProgress) * 30}px)`;
                    
                    const bookDelay = Math.max(0, scrollProgress - 0.2);
                    bookImages.style.opacity = bookDelay;
                    bookImages.style.transform = `translateX(${(1 - bookDelay) * -100}px)`;
                    
                    const textDelay = Math.max(0, scrollProgress - 0.3);
                    aboutText.style.opacity = textDelay;
                    aboutText.style.transform = `translateX(${(1 - textDelay) * 100}px)`;
                }

                // Vision section animations
                const visionSection = document.querySelector('.vision-section');
                const visionRect = visionSection.getBoundingClientRect();
                const visionProgress = Math.max(0, Math.min(1, (windowHeight - visionRect.top) / (windowHeight * 0.5)));

                if (visionRect.top <= triggerPoint) {
                    visionContent.style.opacity = visionProgress;
                    visionContent.style.transform = `translateY(${(1 - visionProgress) * 50}px)`;
                    
                    visionTitle.style.opacity = visionProgress;
                    visionTitle.style.transform = `translateY(${(1 - visionProgress) * 30}px)`;
                    
                    const textDelay = Math.max(0, visionProgress - 0.2);
                    visionText.style.opacity = textDelay;
                    visionText.style.transform = `translateX(${(1 - textDelay) * -100}px)`;
                    
                    const logosDelay = Math.max(0, visionProgress - 0.3);
                    visionLogos.style.opacity = logosDelay;
                    visionLogos.style.transform = `translateX(${(1 - logosDelay) * 100}px)`;
                }

                lastScrollTop = scrollTop;
                ticking = false;
            });
            ticking = true;
        }
    });

    // Welcome button click handler
    welcomeBtn.addEventListener('click', () => {
        const aboutSection = document.querySelector('.about-section');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
}); 