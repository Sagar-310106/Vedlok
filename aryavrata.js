document.addEventListener('DOMContentLoaded', () => {
    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.aryavrata-hero');
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    });

    // Location data with coordinates and information
    const locations = {
        hastinapur: {
            name: 'Hastinapur',
            coordinates: { x: 40, y: 26 },
            description: 'The capital of the Kuru Kingdom, where the epic Mahabharata begins. It was ruled by the Kuru dynasty and witnessed the great war between the Pandavas and Kauravas.',
            significance: 'Birthplace of the Kauravas and Pandavas, setting for the Mahabharata epic.',
            image: 'public/map/locations/hastinapur.jpg'
        },
        kurukshetra: {
            name: 'Kurukshetra',
            coordinates: { x: 34, y: 21 },
            description: 'The sacred battlefield where the great Mahabharata war was fought. It is believed to be the place where Lord Krishna delivered the Bhagavad Gita to Arjuna.',
            significance: 'Site of the Mahabharata war and the delivery of the Bhagavad Gita.',
            image: 'public/map/locations/kurukshetra.jpg'
        },
        ayodhya: {
            name: 'Ayodhya',
            coordinates: { x: 52, y: 35 },
            description: 'The ancient capital of the Kosala Kingdom and the birthplace of Lord Rama. It is one of the seven most sacred cities in Hinduism.',
            significance: 'Birthplace of Lord Rama and setting for the Ramayana epic.',
            image: 'public/map/locations/ayodhya.jpg'
        },
        mathura: {
            name: 'Mathura',
            coordinates: { x: 41, y: 35 },
            description: 'The birthplace of Lord Krishna and an important center of Krishna worship. It was the capital of the Surasena Kingdom.',
            significance: 'Birthplace of Lord Krishna and center of Krishna worship.',
            image: 'public/map/locations/mathura.jpg'
        },
        dwarka: {
            name: 'Dwarka',
            coordinates: { x: 8, y: 50 },
            description: 'The ancient kingdom of Lord Krishna, built on the coast of the Arabian Sea. It was a prosperous city and the capital of the Yadava dynasty.',
            significance: 'Kingdom of Lord Krishna and center of Yadava culture.',
            image: 'public/map/locations/dwarka.jpg'
        },
        chitrakoot: {
            name: 'Chitrakoot',
            coordinates: { x: 46, y: 39 },
            description: 'A sacred place where Lord Rama, Sita, and Lakshmana spent their years of exile. It is believed to be blessed by the presence of various sages.',
            significance: 'Site of Lord Rama\'s exile and spiritual significance.',
            image: 'public/map/locations/chitrakoot.jpg'
        },
        panchavati: {
            name: 'Panchavati',
            coordinates: { x: 23, y: 60 },
            description: 'The forest where Lord Rama, Sita, and Lakshmana stayed during their exile. It is where the golden deer incident and Sita\'s abduction occurred.',
            significance: 'Site of important events in the Ramayana.',
            image: 'public/map/locations/panchavati.jpg'
        },
        lanka: {
            name: 'Lanka',
            coordinates: { x: 42, y: 97 },
            description: 'The kingdom of Ravana, where Sita was held captive. It was a prosperous city ruled by the Rakshasa king until Lord Rama\'s victory.',
            significance: 'Kingdom of Ravana and setting for the final battle in Ramayana.',
            image: 'public/map/locations/lanka.jpg'
        },
        kishkindha: {
            name: 'Kishkindha',
            coordinates: { x: 34, y: 67 },
            description: 'The kingdom of the Vanaras (monkeys), ruled by Sugriva and Vali. It was here that Lord Rama met Hanuman and formed an alliance with Sugriva.',
            significance: 'Kingdom of the Vanaras and important site in the Ramayana.',
            image: 'public/map/locations/kishkindha.jpg'
        },
        indraprastha: {
            name: 'Indraprastha',
            coordinates: { x: 36, y: 28 },
            description: 'The magnificent capital city built by the Pandavas after their exile. It was designed by Maya Danava and was known for its grandeur and prosperity.',
            significance: 'Capital of the Pandavas and site of the famous dice game.',
            image: 'public/map/locations/indraprastha.jpg'
        },
        kashi: {
            name: 'Kashi',
            coordinates: { x: 54, y: 39 },
            description: 'One of the oldest continuously inhabited cities in the world and a major center of learning and spirituality. It is dedicated to Lord Shiva.',
            significance: 'One of the seven sacred cities and major center of Hindu learning.',
            image: 'public/map/locations/kashi.jpg'
        },
        haridwar: {
            name: 'Haridwar',
            coordinates: { x: 39, y: 22 },
            description: 'The gateway to the gods, where the holy Ganga enters the plains. It is one of the four sites of the Kumbh Mela and a major pilgrimage center.',
            significance: 'Major pilgrimage site and gateway to the Char Dham.',
            image: 'public/map/locations/haridwar.jpg'
        },
        kanchi: {
            name: 'Kanchi',
            coordinates: { x: 42, y: 84 },
            description: 'An ancient city known for its temples and as a center of learning. It was ruled by the Pallavas and Cholas and is one of the seven sacred cities.',
            significance: 'Center of learning and one of the seven sacred cities.',
            image: 'public/map/locations/kanchi.jpeg'
        },
        ujjain: {
            name: 'Ujjain',
            coordinates: { x: 31, y: 47 },
            description: 'One of the seven sacred cities and the capital of the ancient Avanti Kingdom. It is known for the Mahakaleshwar Temple and the Kumbh Mela.',
            significance: 'One of the seven sacred cities and site of Kumbh Mela.',
            image: 'public/map/locations/ujjain.jpg'
        }
    };

    // Create location markers
    const markersContainer = document.querySelector('.location-markers');
    Object.entries(locations).forEach(([key, location]) => {
        const marker = document.createElement('div');
        marker.className = 'location-marker';
        marker.style.left = `${location.coordinates.x}%`;
        marker.style.top = `${location.coordinates.y}%`;
        marker.dataset.location = key;
        marker.title = location.name; // Add tooltip
        markersContainer.appendChild(marker);
    });

    // Handle location selection
    const locationSelect = document.getElementById('location-select');
    const infoContent = document.querySelector('.info-content');
    const markers = document.querySelectorAll('.location-marker');

    function updateLocationInfo(locationId) {
        const location = locations[locationId];
        const details = document.querySelector('.location-details');
        const image = document.querySelector('.place-image');
        const title = details.querySelector('h3');
        const description = details.querySelector('.description');
        const significance = details.querySelector('.significance');

        // Update image
        image.src = location.image;
        image.alt = `${location.name} - Ancient Historical Site`;

        // Update text content
        title.textContent = location.name;
        description.textContent = location.description;
        significance.textContent = location.significance;

        // Show details with animation
        details.classList.add('active');
    }

    // Handle dropdown change
    locationSelect.addEventListener('change', (e) => {
        const selectedLocation = e.target.value;
        if (selectedLocation) {
            updateLocationInfo(selectedLocation);
            // Update markers
            markers.forEach(marker => {
                marker.classList.remove('active');
                if (marker.dataset.location === selectedLocation) {
                    marker.classList.add('active');
                }
            });
        } else {
            // Reset to welcome message
            const details = document.querySelector('.location-details');
            details.classList.remove('active');
            const image = document.querySelector('.place-image');
            image.src = '';
            image.alt = '';
            markers.forEach(marker => marker.classList.remove('active'));
        }
    });

    // Handle marker clicks
    markers.forEach(marker => {
        marker.addEventListener('click', () => {
            const locationKey = marker.dataset.location;
            locationSelect.value = locationKey;
            updateLocationInfo(locationKey);
        });
    });
});