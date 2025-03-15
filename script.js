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
    const navLinks = document.querySelectorAll('.main-nav a');

    let lastScrollTop = 0;
    let ticking = false;

    // Show navigation immediately
    mainNav.classList.add('visible');

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

                // Connect section animations
                const connectSectionTop = document.querySelector('.connect-section').offsetTop;
                if (scrollTop > connectSectionTop - window.innerHeight * 0.7) {
                    const connectContent = document.querySelector('.connect-content');
                    const connectForm = document.querySelector('.connect-form');
                    const socialLinks = document.querySelector('.social-links');
                    connectContent.style.opacity = '1';
                    connectContent.style.transform = 'translateY(0)';
                    connectForm.style.opacity = '1';
                    connectForm.style.transform = 'translateY(0)';
                    socialLinks.style.opacity = '1';
                    socialLinks.style.transform = 'translateY(0)';
                }

                lastScrollTop = scrollTop;
                ticking = false;
            });
            ticking = true;
        }
    });

    // Show content and welcome button after a delay
    setTimeout(() => {
        content.classList.add('visible');
        welcomeBtn.classList.add('visible');
    }, 500);

    // Welcome button click handler
    welcomeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        welcomeBtn.classList.remove('visible');
    });

    // Navigation link click handlers
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const href = link.getAttribute('href');
            if (href) {
                window.location.href = href;
            }
        });
    });

    // Add form submission handler
    const form = document.querySelector('.connect-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for connecting with us! We will get back to you soon.');
        form.reset();
    });

    // Go to Top Button Functionality
    const goToTopButton = document.getElementById('goToTop');

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        const parallaxBottom = parallaxContainer.offsetTop + parallaxContainer.offsetHeight;
        if (window.scrollY > parallaxBottom) {
            goToTopButton.classList.add('visible');
        } else {
            goToTopButton.classList.remove('visible');
        }
    });

    // Smooth scroll to top when button is clicked
    goToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}); 