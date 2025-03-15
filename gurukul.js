document.addEventListener('DOMContentLoaded', () => {
    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.gurukul-hero');
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    });

    // Add hover effect to cards
    const cards = document.querySelectorAll('.gurukul-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}); 