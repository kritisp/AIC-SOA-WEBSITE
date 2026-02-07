/**
 * Alert Bar Configuration
 * Add/edit alert items here. Each item will be displayed in the ticker.
 * 
 * Properties:
 * - text: The alert message (required)
 * - tag: 'new' | 'update' | null (optional)
 * - isHeading: true for prominent headings (optional)
 * - popupImage: custom popup image path (optional)
 */

const ALERT_CONFIG = {
    defaultPopupImage: './popup.jpeg',

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
        }
    ]
};

/* -----------------------------
   BUILD ALERT HTML
-------------------------------- */
function buildAlertHTML() {
    let html = '';

    ALERT_CONFIG.items.forEach((item, index) => {
        const headingClass = item.isHeading ? 'alert-heading' : '';
        const tagHTML = item.tag
            ? `<span class="ticker-tag tag-${item.tag}">${item.tag.toUpperCase()}</span>`
            : '';

        const popupImage = item.popupImage || ALERT_CONFIG.defaultPopupImage;

        html += `
            <span class="alert-item ${headingClass}" 
                  data-popup="${popupImage}" 
                  data-index="${index}">
                ${tagHTML}
                <span class="alert-text">${item.text}</span>
            </span>
            <span class="alert-separator">|</span>
        `;
    });

    // Duplicate for infinite scroll
    return html + html;
}

/* -----------------------------
   INIT ALERT BAR (SAFE)
-------------------------------- */
function initAlertBar() {
    const ticker = document.querySelector('.alert-ticker');
    if (!ticker) return;

    const hasInlineContent =
        ticker.innerHTML.includes('alert-item') ||
        ticker.innerHTML.includes('alert-text') ||
        ticker.children.length > 0 ||
        ticker.textContent.trim().length > 0;

    // Build only if empty
    if (!hasInlineContent) {
        ticker.innerHTML = buildAlertHTML();
    }

    initAlertItemClicks();
}

/* -----------------------------
   CLICK HANDLERS
-------------------------------- */
function initAlertItemClicks() {
    document.querySelectorAll('.alert-item').forEach(item => {
        item.addEventListener('click', e => {
            e.stopPropagation();
            const img = item.dataset.popup || ALERT_CONFIG.defaultPopupImage;
            openAlertPopup(img);
        });
    });
}

/* -----------------------------
   POPUP LOGIC
-------------------------------- */
function openAlertPopup(imageSrc) {
    let modal = document.querySelector('.alert-image-modal');

    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'alert-image-modal';
        modal.innerHTML = `
            <div class="alert-image-overlay"></div>
            <div class="alert-image-box">
                <button class="alert-image-close" aria-label="Close">&times;</button>
                <img src="${imageSrc}" alt="Announcement" />
            </div>
        `;
        document.body.appendChild(modal);

        modal.querySelector('.alert-image-overlay').addEventListener('click', closeAlertPopup);
        modal.querySelector('.alert-image-close').addEventListener('click', closeAlertPopup);
    } else {
        modal.querySelector('img').src = imageSrc;
    }

    modal.classList.add('active');
}

function closeAlertPopup() {
    const modal = document.querySelector('.alert-image-modal');
    if (modal) modal.classList.remove('active');
}

/* -----------------------------
   ESC KEY CLOSE
-------------------------------- */
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAlertPopup();
});

/* -----------------------------
   DOM READY (INSTANT LOAD FIX)
-------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    initAlertBar();
});

/* -----------------------------
   EXPORT (OPTIONAL)
-------------------------------- */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ALERT_CONFIG, initAlertBar };
}
