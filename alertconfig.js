/**
 * Alert Bar Configuration
 * Add/edit alert items here. Each item will be displayed in the ticker.
 * 
 * Properties:
 * - text: The alert message (required)
 * - tag: 'new' | 'update' | null (optional - shows animated tag)
 * - isHeading: true for prominent bold headings (optional)
 * - popupImage: custom popup image path, defaults to './popup.jpeg' (optional)
 */

const ALERT_CONFIG = {
    // Default popup image for all alerts (can be overridden per item)
    defaultPopupImage: './popup.jpeg',
    
    // Alert items - add your alerts here (no need to duplicate - auto-loops)
    items: [
        {
            text: 'AI in Education: Revolutionizing Learning Experience',
            tag: 'new',
            isHeading: true,
            popupImage: './popup.jpeg'
        },
        {
            text: 'Our Eminent Speakers for AI in Education',
            tag: 'new',
            isHeading: true,
            popupImage: './popup2.jpeg'
        },
        {
            text: 'Join our growing Startup ecosystem',
            tag: null,
            isHeading: true
        },
        {
            text: 'Our Eminent Speakers for AI in Education',
            tag: 'new',
            isHeading: true,
            popupImage: './popup2.jpeg'
        },
    ]
};

// Build alert HTML from config
function buildAlertHTML() {
    let tickerHTML = '';
    
    ALERT_CONFIG.items.forEach((item, index) => {
        const headingClass = item.isHeading ? 'alert-heading' : '';
        const tagHTML = item.tag ? `<span class="ticker-tag tag-${item.tag}">${item.tag.toUpperCase()}</span>` : '';
        const popupImage = item.popupImage || ALERT_CONFIG.defaultPopupImage;
        
        tickerHTML += `<span class="alert-item ${headingClass}" data-popup="${popupImage}" data-index="${index}">`;
        tickerHTML += tagHTML;
        tickerHTML += `<span class="alert-text">${item.text}</span>`;
        tickerHTML += `</span>`;
        tickerHTML += ' <span class="alert-separator">|</span> ';
    });
    
    // Duplicate for seamless loop
    return tickerHTML + tickerHTML;
}

// Initialize alert bar from config - always updates from config
function initAlertFromConfig() {
    const ticker = document.querySelector('.alert-ticker');
    if (!ticker) return;
    
    // Always build from config
    ticker.innerHTML = buildAlertHTML();
    
    // Add click handlers
    initAlertItemClicks();
}

// Run immediately when ticker exists (for instant display)
(function() {
    const ticker = document.querySelector('.alert-ticker');
    if (ticker) {
        ticker.innerHTML = buildAlertHTML();
    }
})();

// Handle clicks on individual alert items
function initAlertItemClicks() {
    const alertItems = document.querySelectorAll('.alert-item');
    
    alertItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent alert bar click
            const popupImage = item.dataset.popup || ALERT_CONFIG.defaultPopupImage;
            openAlertPopup(popupImage);
        });
    });
}

// Open popup with specified image
function openAlertPopup(imageSrc) {
    let modal = document.querySelector('.alert-image-modal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'alert-image-modal';
        modal.innerHTML = `
            <div class="alert-image-overlay"></div>
            <div class="alert-image-box">
                <button class="alert-image-close" aria-label="Close alert image">&times;</button>
                <img src="${imageSrc}" alt="Important announcement" />
            </div>
        `;
        document.body.appendChild(modal);
        
        // Close handlers
        modal.querySelector('.alert-image-overlay').addEventListener('click', closeAlertPopup);
        modal.querySelector('.alert-image-close').addEventListener('click', closeAlertPopup);
    } else {
        // Update image source
        modal.querySelector('img').src = imageSrc;
    }
    
    modal.classList.add('active');
}

function closeAlertPopup() {
    const modal = document.querySelector('.alert-image-modal');
    if (modal) modal.classList.remove('active');
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAlertPopup();
});

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ALERT_CONFIG, initAlertFromConfig };
}
