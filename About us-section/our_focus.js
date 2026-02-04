const lightbox = document.getElementById("lightbox");
const fullImg = document.getElementById("img-full");
const closeBtn = document.querySelector(".close-lightbox");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const galleryImages = document.querySelectorAll(".gallery-item img");
let currentIndex = 0;

// Function to update the image in the lightbox
const updateLightboxImage = (index) => {
    fullImg.classList.remove("fade");
    void fullImg.offsetWidth; // Trigger reflow for animation
    fullImg.src = galleryImages[index].src;
    fullImg.classList.add("fade");
    currentIndex = index;
};

// Open Lightbox
galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        updateLightboxImage(index);
    });
});

// Next Image Logic
nextBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevents lightbox from closing
    let nextIndex = (currentIndex + 1) % galleryImages.length;
    updateLightboxImage(nextIndex);
});

// Previous Image Logic
prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    let prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage(prevIndex);
});

// Close logic
closeBtn.addEventListener("click", () => lightbox.style.display = "none");
lightbox.addEventListener("click", (e) => {
    if (e.target !== fullImg && e.target !== nextBtn && e.target !== prevBtn) {
        lightbox.style.display = "none";
    }
});
// // --- AUTO SLIDING LOGIC ---
// const track = document.getElementById('glimpses-track');
// const images = document.querySelectorAll('.gallery-item');
// let scrollIndex = 0;

// function autoSlide() {
//     scrollIndex++;
    
//     // Determine how many images are visible at once (usually 4 on desktop)
//     const visibleCount = window.innerWidth > 768 ? 4 : 2;
    
//     // If we reach the end of the images, reset to the first one
//     if (scrollIndex > images.length - visibleCount) {
//         scrollIndex = 0;
//     }
    
//     // Calculate width of one image + gap
//     const itemWidth = images[0].offsetWidth + 20; 
//     track.style.transform = `translateX(-${scrollIndex * itemWidth}px)`;
// }

// // Start sliding every 3 seconds
// let slideTimer = setInterval(autoSlide, 3000);

// // STOP sliding when user hovers over the gallery
// track.addEventListener('mouseenter', () => clearInterval(slideTimer));

// // START sliding again when mouse leaves
// track.addEventListener('mouseleave', () => {
//     slideTimer = setInterval(autoSlide, 3000);
// });

// --- SMOOTH AUTO-SCROLL FOR GLIMPSES (desktop + mobile) ---
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.glimpses-container');
    const track = document.querySelector('.glimpses-track');
    if (!container || !track) return;

    // Use JS scrolling for consistent auto-scroll on mobile and desktop
    container.style.scrollBehavior = 'auto';

    // Speed in pixels per millisecond
    const speed = 0.08; // adjust for desired pace (higher = faster)
    let rafId = null;
    let last = null;
    let running = true;

    function step(ts) {
        if (!last) last = ts;
        const delta = ts - last;
        last = ts;

        if (running) {
            container.scrollLeft += speed * delta;

            // When we've scrolled half the track (HTML duplicates items for loop), rewind smoothly
            const half = track.scrollWidth / 2;
            if (container.scrollLeft >= half) {
                container.scrollLeft -= half;
            }
        }
        rafId = requestAnimationFrame(step);
    }

    // Start animation
    rafId = requestAnimationFrame(step);

    // Pause/resume on user interaction
    const pause = () => { running = false; };
    const resume = () => { running = true; last = null; };

    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);
    container.addEventListener('touchstart', pause, {passive:true});
    container.addEventListener('touchend', resume);
    container.addEventListener('pointerdown', pause);
    container.addEventListener('pointerup', resume);

    // Keep behavior correct on resize
    window.addEventListener('resize', () => { last = null; });
});