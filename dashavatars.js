document.addEventListener('DOMContentLoaded', () => {
    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.dashavatars-hero');
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    });

    const avatarInfo = {
        matsya: 'The first avatar, appearing as a fish during the great deluge. He saved Manu and the seven sages, preserving life and knowledge for the next cycle of creation.',
        kurma: 'The second avatar, appearing as a giant tortoise during the churning of the ocean. He supported Mount Mandara as devas and asuras churned for divine treasures.',
        varaha: 'The third avatar, appearing as a boar to rescue Earth from the demon Hiranyaksha. He lifted Earth from cosmic waters, restoring balance to the universe.',
        narasimha: 'The fourth avatar, appearing as half-man and half-lion. He protected his devotee Prahlada and defeated the demon Hiranyakashipu, demonstrating divine justice.',
        vamana: 'The fifth avatar, appearing as a dwarf Brahmin. He defeated the demon king Bali through wisdom and humility, restoring the three worlds to their proper order.',
        parashurama: 'The sixth avatar, appearing as a warrior sage with an axe. He rid Earth of corrupt Kshatriya kings and taught martial arts to many great warriors.',
        rama: 'The seventh avatar, appearing as the perfect man and ideal king. He demonstrated dharma and righteousness throughout his life, becoming the central figure of the Ramayana.',
        krishna: 'The eighth avatar, appearing as a divine statesman and philosopher. He played a crucial role in the Mahabharata and delivered the Bhagavad Gita to Arjuna.',
        buddha: 'The ninth avatar, appearing as Siddhartha Gautama. He taught the path to enlightenment and the cessation of suffering, spreading wisdom and compassion.',
        kalki: 'The tenth and final avatar, yet to appear. He will come at the end of Kali Yuga to restore dharma and begin a new cycle of creation.'
    };

    // Handle read more buttons
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const card = button.closest('.avatar-card');
            const avatarName = card.querySelector('h2').textContent;
            const avatarId = card.dataset.avatar;
            
            // Create modal for avatar details
            const modal = document.createElement('div');
            modal.className = 'avatar-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h2>${avatarName}</h2>
                    <div class="modal-body">
                        <p>${avatarInfo[avatarId]}</p>
                    </div>
                </div>
            `;

            // Add modal to body
            document.body.appendChild(modal);

            // Close modal when clicking the close button
            const closeBtn = modal.querySelector('.close-modal');
            closeBtn.addEventListener('click', () => {
                modal.remove();
            });

            // Close modal when clicking outside
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    });

    // Add intersection observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all avatar cards
    document.querySelectorAll('.avatar-card').forEach(card => {
        observer.observe(card);
    });
}); 