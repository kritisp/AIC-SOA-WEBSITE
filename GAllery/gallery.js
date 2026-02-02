// Select elements
const cards = document.querySelectorAll('.gallery-card');
const lightbox = document.getElementById('gallery-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');

// Add click event to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        const imgSrc = card.querySelector('img').src;
        lightboxImg.src = imgSrc; // Put the clicked image into the lightbox
        lightbox.style.display = 'flex'; // Show the lightbox
    });
});

// Close the lightbox when clicking 'X'
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});