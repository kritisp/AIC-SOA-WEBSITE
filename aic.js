/**
 * AIC-SOA Foundation - Logic Layer
 * Organized by section-specific data controllers and interaction handlers.
 */

// 
// 1. DATA CONTROLLERS (Content Management)
// 

// Content for: for Viksit Bharat
const viksitContent = {
    objective: {
        title: "Objective",
        icon: "fa-bullseye",
        text: "Empowering Stakeholders of Health-Tech, Agri-Tech & Clean-Tech for Transforming : DISCOVERY to DELIVERY"
    },
    mission: {
        title: "Mission",
        icon: "fa-rocket",
        text: "Igniting Innovation: Building Startup Ecosystem"
    },
    vision: {
        title: "Vision",
        icon: "fa-eye",
        text: "Fostering R&D Ecosystem for Affordable Tech, providing startups essential tools, infrastructure, and growth opportunities"
    }
};

// Content for: We Believe In..
const valuesContent = {
    collaborate: {
        title: "Collaborate",
        icon: "fa-lightbulb",
        text: "Aspire to innovate—transform dreams into reality"
    },
    create: {
        title: "Create",
        icon: "fa-users-cog",
        text: "Fuelling disruptive technology and fostering a culture of continuous improvement"
    },
    connect: {
        title: "Connect",
        icon: "fa-handshake",
        text: "Forge collaborations & partnerships through networking opportunities"
    }
};

// Content for: Expert Reviews
const expertData = [
    { 
        name: "Dr. Bijay Kumar Sahu", 
        org: "Govt of India", 
        designation: "HEAD-NRDC OUTREACH OFFICE", 
        quote: "Connecting <span>research lab technology</span> to practical use, uniting stakeholders to foster entrepreneurship, innovation for societal benefits, aligns with India's vision and values for impactful collaborative ecosystems.", 
        pic: "./assets/expert-review/bksahu-BnY5GmXA.jpg",
        video: "https://www.youtube.com/embed/s88RZ7Yfmuw"
    },
    { 
        name: "Shri Manmath K Badapanda", 
        org: "RRCAT (DAE), Indore", 
        designation: "SENIOR SCIENTIST", 
        quote: "Startups are <span>innovators and risk-takers</span> and as you grow and expand, you must ensure that there is proper financial management and a proper audit.", 
        pic: "./assets/expert-review/mkbadapanda-CmlpdCua.jpg",
        video: "https://www.youtube.com/embed/eUPTLa5GSx0"
    },
    { 
        name: "Prof. Narayana P Padhy", 
        org: "Malavya National Institute of Technology(MNIT),Jaipur", 
        designation: "DIRECTOR", 
        quote: "The government's only idea is to be a catalyst in Startup promotion. We are hoping that via this, it becomes easier for Startups to operate worldwide.", 
        pic: "./assets/expert-review/nppadhy-DOd2QGIa.jpg",
        video: "https://www.youtube.com/embed/jqWlHUfXaRc"
    },
    { 
        name: "Mr. Chandan Samantaray", 
        org: "Faculty in Department Of Engineering,Virginia State University", 
        designation: "PROFESSOR", 
        quote: "Technology should be accessible to everyone. Our goal is to bridge the digital divide and empower communities.", 
        pic: "./assets/expert-review/chandansamantaray-BV628n7n.jpg",
        video: "https://www.youtube.com/embed/QuHnH88M2mI"
    },
    { 
        name: "Mr. Mrutyunjaya Mohapatra", 
        org: "India Meteorological Department, Government Of India", 
        designation: "DIRECTOR GENERAL OF METEORLOGY", 
        quote: " I appreciate the rapid development and high standards of the AIC-SOA Foundation for its supportive environment for budding entrepreneurs and startups. The AIC-SOA Foundation is marching a ahead for continued success in fostering knowledge, expertise, and industrial growth in India.", 
        pic: "./assets/expert-review/mmohapatra-_IzG5hrZ.jpg" ,
        video: "https://www.youtube.com/embed/_xYLJ07x0_I"
    },
    { 
        name: "H.E.Mr.Fernando Xavier Bucheli Vargas", 
        org: "Ecuador", 
        designation: "AMBASSADOR OF ECUADOR TO INDIA", 
        quote:  "The future is now there is urgent need to act in the present to advance sustainable development goals.Sustainable practices are not an option but a necessity for long-term economic and environmental health.", 
        pic: "./assets/expert-review/fernando-C24TBo3b.jpg" ,
        video: "https://www.youtube.com/embed/_6tP_DKmIHU"
    },
     { 
        name: "H.E.Mr.Omar Lisandro Castaneda Solares", 
        org: "Guatemala", 
        designation: "AMBASSADOR OF Guatemala TO INDIA", 
        quote:  "The AIC-SOA Foundation successfully fosters an environment for rich creativity and provides the crucial support needed to  build successful startups for the disruptive  technology in force.", 
        pic: "./assets/expert-review/omar-D5L5ivtV.jpg" ,
        video: "https://www.youtube.com/embed/awQYOoPdqYE"
    },
    { 
        name: "Prof.Ujjwal Maulik", 
        org: "Kolkata", 
        designation: "Jadavpur University", 
        quote:  "This center is so good, well-planned. Young generations are really trying hard; I believe many startups from here will do very well in the future.", 
        pic: "./assets/expert-review/Ujjwal-BOHyuDBS.jpg" ,
        video: "https://www.youtube.com/embed/n_q1tyhIiqg"

    },
    { 
        name: "Prof.Bijaya Ketan Panigrahi", 
        org: "", 
        designation: "IIT,DELHI", 
        quote:  "The AIC-SOA Foundation is the perfect platform for encouraging young minds from diverse domains to collaborate and innovate. It’s an excellent initiative for building deep-tech startups, aligning perfectly with the vision of 'Viksit Bharat'", 
        pic: "./assets/expert-review/panigrahi-CTgwxTGS.jpg",
        video: "https://www.youtube.com/embed/TKWOgCGhcgI" 
    },
    { 
        name: "Dr.Debi Prasad Tripathy", 
        org: "Northern Ontario School Of Medicine Univeristy, Canada", 
        designation: "Jadavpur University", 
        quote:  "The AIC-SOA’s incubation in medtech, agritech, and deep tech, highlighting an AI device for rapid cervical cancer diagnosis and its broader impact on food security and Odisha.", 
        pic: "./assets/expert-review/debiprasad-DTdjJ6Yi.jpg" ,
        video: "https://www.youtube.com/embed/48s-n2Z3fvw"
    },
];

// 
// 2. COUNTER ANIMATIONS
// 
const initCounters = () => {
    const counters = document.querySelectorAll('.counter');
    const countObserver = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting) {
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                let count = 0;
                const update = () => {
                    const inc = target / 100;
                    if(count < target) {
                        count += inc;
                        counter.innerText = Math.ceil(count);
                        setTimeout(update, 20);
                    } else { 
                        counter.innerText = target; 
                    }
                };
                update();
            });
            countObserver.unobserve(entries[0].target);
        }
    }, { threshold: 0.5 });

    const innovationSection = document.querySelector('.innovation-section');
    if (innovationSection) countObserver.observe(innovationSection);
};

// 
// 3. SAGA SLIDER
// 
let sagaIdx = 0;
const initSagaSlider = () => {
    const sagaImgs = Array.from(document.querySelectorAll('#sagaSlides img'));
    if (sagaImgs.length === 0) return;

    // Ensure images are display:block and begin preloading
    sagaImgs.forEach(img => {
        img.style.display = 'block';
        img.style.visibility = 'hidden';
        img.style.opacity = '0';
        img.style.zIndex = '2';
        // prompt browser to fetch
        const pre = new Image();
        pre.src = img.src;
        if (img.complete) img.style.visibility = 'visible';
        else img.addEventListener('load', () => img.style.visibility = 'visible');
    });

    const showImage = (idx) => {
        sagaImgs.forEach((img, i) => {
            if (i === idx) {
                img.classList.add('active');
                img.style.opacity = '1';
                img.style.visibility = 'visible';
                img.style.zIndex = '3';
            } else {
                img.classList.remove('active');
                img.style.opacity = '0';
                img.style.zIndex = '2';
            }
        });
    };

    sagaIdx = 0;

    // Show first image ASAP
    requestAnimationFrame(() => showImage(sagaIdx));

    // Fallback creation (only if images never paint): creates background layers + preloader
    const container = document.querySelector('.saga-slider-container');
    let mobileBg = null;
    const createMobileBgFallback = (initialIdx = 0) => {
        if (!container || mobileBg) return;
        const pre = document.createElement('div');
        pre.className = 'saga-preloader';
        pre.innerHTML = '<div class="spinner"></div>';
        container.appendChild(pre);

        // hide images so fallback is authoritative
        sagaImgs.forEach(img => { img.style.display = 'none'; });

        const layerA = document.createElement('div');
        const layerB = document.createElement('div');
        layerA.className = 'saga-mobile-bg';
        layerB.className = 'saga-mobile-bg';
        container.appendChild(layerA);
        container.appendChild(layerB);

        const tmp = new Image();
        tmp.onload = () => {
            layerA.style.backgroundImage = `url('${sagaImgs[initialIdx].src}')`;
            layerA.classList.add('active');
            if (pre.parentNode) pre.parentNode.removeChild(pre);
        };
        tmp.onerror = () => { if (pre.parentNode) pre.parentNode.removeChild(pre); };
        tmp.src = sagaImgs[initialIdx].src;

        mobileBg = { active: layerA, inactive: layerB };
    };

    // Check painting; if images don't appear, use the fallback (checks twice)
    const areImagesPainted = () => sagaImgs.some(img => {
        try {
            const cs = window.getComputedStyle(img);
            return img.naturalWidth > 0 && cs.display !== 'none' && cs.visibility !== 'hidden' && parseFloat(cs.opacity) > 0;
        } catch (e) { return false; }
    });

    // Try to repair common deployment path/case issues before falling back
    const tryFixBrokenSagaSrcs = async () => {
        const broken = sagaImgs.filter(img => img.naturalWidth === 0);
        if (broken.length === 0) return;

        await Promise.all(broken.map(img => new Promise(res => {
            try {
                const src = img.src || '';
                // common variant: lowercase the folder name (Saga -> saga)
                const alt = src.replace('/Saga/', '/saga/');
                if (alt === src) return res(false);

                const tmp = new Image();
                tmp.onload = () => {
                    img.src = alt;
                    img.style.visibility = 'visible';
                    res(true);
                };
                tmp.onerror = () => res(false);
                tmp.src = alt;
            } catch (e) { res(false); }
        })));
    };

    setTimeout(async () => { await tryFixBrokenSagaSrcs(); if (!areImagesPainted()) createMobileBgFallback(0); }, 600);
    setTimeout(async () => { await tryFixBrokenSagaSrcs(); if (!areImagesPainted()) createMobileBgFallback(0); }, 1200);

    const changeSaga = (n) => {
        const next = (sagaIdx + n + sagaImgs.length) % sagaImgs.length;

        if (mobileBg) {
            const { active, inactive } = mobileBg;
            inactive.style.backgroundImage = `url('${sagaImgs[next].src}')`;
            requestAnimationFrame(() => {
                inactive.classList.add('active');
                active.classList.remove('active');
                mobileBg.active = inactive;
                mobileBg.inactive = active;
            });
            sagaIdx = next;
            return;
        }

        // Make sure next image is visible before transition
        sagaImgs[next].style.visibility = 'visible';
        requestAnimationFrame(() => { showImage(next); sagaIdx = next; });
    };

    // Auto-advance
    const intervalId = setInterval(() => changeSaga(1), 5000);

    // Expose navigation
    window.changeSaga = (n) => { clearInterval(intervalId); changeSaga(n); };
};

// 
// // 
// 4. EXPERT REVIEWS (Enhanced Template + Video Support)
// 

let expertIdx = 0;
let isExpertAnimating = false;

const showExpert = (n) => {
    if (isExpertAnimating) return;
    isExpertAnimating = true;

    const card = document.getElementById('expertCard');
    if (!card) return;

    card.style.opacity = '0';
    card.style.transform = 'translateY(10px)';

    setTimeout(() => {
        expertIdx = n;
        const data = expertData[n];

        // Update expert content
        document.getElementById('expertName').innerText = data.name;
        document.getElementById('expertOrg').innerText = data.org;
        document.getElementById('expertQuote').innerHTML = data.quote;
        document.getElementById('expertPic').src = data.pic;

        const designationEl = document.querySelector('.expert-profile-side .designation');
        if (designationEl) designationEl.innerText = data.designation;

        // ✅ Update video button dynamically
        const videoBtn = document.querySelector('.expert-video-btn');
        if (videoBtn) {
            if (data.video) {
                videoBtn.style.display = "flex";
                videoBtn.setAttribute('data-video', data.video);
            } else {
                videoBtn.style.display = "none";
                videoBtn.removeAttribute('data-video');
            }
        }

        // Update navigation dots
        document.querySelectorAll('.nav-dot').forEach((dot, i) => {
            dot.className = i === n ? 'nav-dot active' : 'nav-dot';
        });

        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';

        setTimeout(() => isExpertAnimating = false, 500);
    }, 400);
};

const initExpertSlider = () => {
    const expertDotBox = document.getElementById('expertDots');
    if (!expertDotBox) return;

    expertDotBox.innerHTML = '';

    expertData.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = i === 0 ? 'nav-dot active' : 'nav-dot';
        dot.onclick = () => {
            if (!isExpertAnimating && expertIdx !== i) {
                showExpert(i);
            }
        };
        expertDotBox.appendChild(dot);
    });

    // Expose navigation controls
    window.changeExpert = (n) => {
        if (isExpertAnimating) return;
        showExpert((expertIdx + n + expertData.length) % expertData.length);
    };

    // Load first expert properly (important)
    showExpert(0);
};

// 
// 4.1 EXPERT VIDEO MODAL
// 
const initExpertVideoModal = () => {
    const modal = document.getElementById("expertVideoModal");
    const iframe = document.getElementById("expertVideoFrame");
    const closeBtn = document.querySelector(".expert-video-close");
    const overlay = document.querySelector(".expert-video-overlay");
    const videoBtns = document.querySelectorAll(".expert-video-btn");

    if (!modal || !iframe || !closeBtn || !overlay) return;

    videoBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const videoURL = btn.getAttribute("data-video");
            if (!videoURL) return;

            iframe.src = videoURL + "?autoplay=1";
            modal.classList.add("active");
        });
    });

    const closeModal = () => {
        modal.classList.remove("active");
        iframe.src = "";
    };

    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
};


// 
// 5. TESTIMONIAL SLIDER (Infinite Round)
// 
let testiIdx = 0;
let isTestiJumping = false;

const initTestimonials = () => {
    const testiTrack = document.getElementById('testiTrack');
    if (!testiTrack) return;

    // Setup Infinite Loop Clones
    const cards = Array.from(testiTrack.children);
    if (cards.length === 0) return;
    cards.forEach(card => testiTrack.appendChild(card.cloneNode(true)));

    const moveTesti = (n) => {
        if (isTestiJumping) return;
        
        const originalCount = cards.length;
        const cardWidth = testiTrack.children[0].offsetWidth + 20;

        testiIdx += n;
        testiTrack.style.transition = "transform 0.6s cubic-bezier(0.45, 0.05, 0.55, 0.95)";
        testiTrack.style.transform = `translateX(-${testiIdx * cardWidth}px)`;

        // Reset logic for seamless loop
        if (testiIdx >= originalCount) {
            isTestiJumping = true;
            setTimeout(() => {
                testiTrack.style.transition = "none";
                testiIdx = 0;
                testiTrack.style.transform = `translateX(0px)`;
                setTimeout(() => isTestiJumping = false, 50);
            }, 600);
        } else if (testiIdx < 0) {
            isTestiJumping = true;
            testiTrack.style.transition = "none";
            testiIdx = originalCount - 1;
            testiTrack.style.transform = `translateX(-${testiIdx * cardWidth}px)`;
            setTimeout(() => {
                isTestiJumping = false;
                moveTesti(-1); 
            }, 50);
        }
    };

    window.moveTesti = moveTesti;
    let testiInterval = setInterval(() => moveTesti(1), 6000);

    const testiWrapper = document.querySelector('.testi-wrapper');
    if (testiWrapper) {
        testiWrapper.onmouseenter = () => clearInterval(testiInterval);
        testiWrapper.onmouseleave = () => testiInterval = setInterval(() => moveTesti(1), 6000);
    }
};

// 
// 6. NAVBAR SCROLL BEHAVIOR
// 
const initNavbarScroll = () => {
    const navbar = document.querySelector('.navbar');
    const headerTop = document.querySelector('.header-top');
    const alertBar = document.querySelector('.alert-bar');
    if (!navbar || !headerTop) return;

     const updateNavbarState = () => {
        if (window.scrollY <= 5) {
            navbar.classList.remove('navbar--scrolled'); // top: gradient background
            headerTop.classList.remove('header-top--scrolled');
            if (alertBar) alertBar.classList.remove('alert-bar--hidden'); // show alert at top
        } else {
            navbar.classList.add('navbar--scrolled'); // scrolled: white translucent
            headerTop.classList.add('header-top--scrolled');
            if (alertBar) alertBar.classList.add('alert-bar--hidden'); // hide alert when scrolling
        }
    };

    window.addEventListener('scroll', updateNavbarState, { passive: true });
    updateNavbarState(); // run once on load
};

// Desktop dropdown click/hover behavior + multi-column detection
const initDropdownBehavior = () => {
    const navItems = document.querySelectorAll('.nav-item');
    if (!navItems || navItems.length === 0) return;

    const closeAll = () => navItems.forEach(i => i.classList.remove('open'));

    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.dropdown-menu');
        if (!link || !dropdown) return;

        // accessibility
        link.setAttribute('aria-haspopup', 'true');
        link.setAttribute('aria-expanded', 'false');

        // toggle on click for desktop (prevents default for non-navigable '#')
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) return; // mobile handled separately
            e.preventDefault();
            const opened = item.classList.toggle('open');
            link.setAttribute('aria-expanded', opened ? 'true' : 'false');
            if (opened) navItems.forEach(i => { if (i !== item) i.classList.remove('open'); });
        });
    });

    document.addEventListener('click', (e) => { if (!e.target.closest('.nav-item')) closeAll(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAll(); });

    // Add multi-column class to dropdowns with many links
    document.querySelectorAll('.dropdown-menu').forEach(drop => {
        const count = drop.querySelectorAll('a').length;
        if (count >= 6) drop.classList.add('dropdown--cols');
    });
};

// 
// 6.5 ALERT TICKER (Continuous Loop)
// 
const initAlertTicker = () => {
    const ticker = document.querySelector('.alert-ticker');
    if (!ticker) return;

    const original = ticker.innerHTML.trim();
    if (ticker.dataset.loopInitialized === 'true') return;

    ticker.innerHTML = `${original} • ${original}`;
    ticker.dataset.loopInitialized = 'true';
};

//
// 6.6 ALERT HOVER CONTROL
// Only controls the alert ticker, not the logo marquees
const initHoverPauseControls = () => {
    const ticker = document.querySelector('.alert-ticker');
    if (!ticker) return;

    ticker.addEventListener('mouseenter', () => {
        ticker.style.animationPlayState = 'paused';
    });
    ticker.addEventListener('mouseleave', () => {
        ticker.style.animationPlayState = 'running';
    });
};


// 
// 7. MOBILE MENU (RESPONSIVE)
// 
const initMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    // Avoid double-initialization if markup already present
    if (document.querySelector('.mobile-menu')) return;

    // Create toggle button (if not already present)
    let btn = document.querySelector('.menu-toggle');
    if (!btn) {
        btn = document.createElement('button');
        btn.className = 'menu-toggle';
        btn.setAttribute('aria-label', 'Toggle menu');
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = '<span class="bar"></span><span class="bar"></span><span class="bar"></span>';
        navbar.appendChild(btn);
    }

    // Create overlay and panel
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    document.body.appendChild(overlay);

    const panel = document.createElement('aside');
    panel.className = 'mobile-menu';
    panel.setAttribute('aria-hidden', 'true');
    panel.innerHTML = '<nav class="mobile-nav" aria-label="Mobile Navigation"></nav>';
    document.body.appendChild(panel);

    const mobileNav = panel.querySelector('.mobile-nav');
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        const items = Array.from(navLinks.querySelectorAll('.nav-item'));
        items.forEach(item => {
            const trigger = item.querySelector('.nav-link');
            const dropdown = item.querySelector('.dropdown-menu');
            const label = trigger ? trigger.textContent.trim() : '';

            if (dropdown) {
                // Accordion header
                const header = document.createElement('button');
                header.className = 'mobile-accordion-header';
                header.type = 'button';
                header.setAttribute('aria-expanded', 'false');
                header.innerHTML = `<span class="mobile-accordion-label">${label}</span><span class="chev">▸</span>`;
                mobileNav.appendChild(header);

                // Panel containing sublinks
                const panelDiv = document.createElement('div');
                panelDiv.className = 'mobile-accordion-panel';
                dropdown.querySelectorAll('a').forEach(sa => {
                    const subLink = sa.cloneNode(true);
                    subLink.classList.add('mobile-sublink');
                    panelDiv.appendChild(subLink);
                });
                mobileNav.appendChild(panelDiv);

                header.addEventListener('click', () => {
                    const expanded = header.classList.toggle('expanded');
                    header.setAttribute('aria-expanded', expanded ? 'true' : 'false');
                    if (expanded) panelDiv.classList.add('open'); else panelDiv.classList.remove('open');
                });

            } else if (trigger) {
                // plain link
                const a = trigger.cloneNode(true);
                a.classList.remove('nav-link');
                mobileNav.appendChild(a);
            }
        });
    }

    const openMenu = () => {
        btn.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        panel.classList.add('open');
        overlay.classList.add('open');
        panel.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };
    const closeMenu = () => {
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        panel.classList.remove('open');
        overlay.classList.remove('open');
        panel.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    btn.addEventListener('click', (e) => {
        const opened = panel.classList.contains('open');
        if (opened) closeMenu(); else openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    // Close menu when any mobile link is clicked
    panel.addEventListener('click', (e) => {
        const a = e.target.closest('a');
        if (a) closeMenu();
    });

    // Close on Escape or on window resize to desktop
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && panel.classList.contains('open')) closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 768 && panel.classList.contains('open')) closeMenu(); });
};

// 
// 8. INITIALIZATION
// 
document.addEventListener('DOMContentLoaded', () => {
    initAlertTicker();
    initCounters();
    initSagaSlider();
    initExpertSlider();
    initExpertVideoModal();
    initTestimonials();
    initNavbarScroll();
    initMobileMenu();
    initHoverPauseControls();

    // Handle Window Resize for Sliders
    window.addEventListener('resize', () => {
        testiIdx = 0;
        const track = document.getElementById('testiTrack');
        if (track) track.style.transform = `translateX(0px)`;
    });
});
