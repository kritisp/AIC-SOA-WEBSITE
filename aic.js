/**
 * AIC-SOA Foundation - Logic Layer
 * Organized by section-specific data controllers and interaction handlers.
 */

// ==========================================
// 1. DATA CONTROLLERS (Content Management)
// ==========================================

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
        pic: "https://via.placeholder.com/150/e28169/ffffff?text=BS" 
    },
    { 
        name: "Shri Manmath K Badapanda", 
        org: "RRCAT (DAE), Indore", 
        designation: "SENIOR SCIENTIST", 
        quote: "Startups are <span>innovators and risk-takers</span> and as you grow and expand, you must ensure that there is proper financial management and a proper audit.", 
        pic: "https://via.placeholder.com/150/e28169/ffffff?text=MB" 
    },
    { 
        name: "Prof. Manojranjan Nayak", 
        org: "Siksha 'O' Anusandhan", 
        designation: "FOUNDER PRESIDENT", 
        quote: "Our mission is to cultivate an environment where <span>research excellence</span> translates into real-world technological sovereignty, making Siksha 'O' Anusandhan a beacon of innovation.", 
        pic: "https://via.placeholder.com/150/e28169/ffffff?text=MN" 
    },
    { 
        name: "Mr. Deepak Bhardwaj", 
        org: "AIM Member", 
        designation: "STRATEGIC ADVISOR", 
        quote: "The Atal Incubation Mission thrives on <span>collaboration</span>. AIC-SOA has consistently demonstrated how academic infrastructure can supercharge the startup lifecycle.", 
        pic: "https://via.placeholder.com/150/e28169/ffffff?text=DB" 
    }
];

// ==========================================
// 2. COUNTER ANIMATIONS
// ==========================================
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

// ==========================================
// 3. SAGA SLIDER
// ==========================================
let sagaIdx = 0;
const initSagaSlider = () => {
    const sagaImgs = document.querySelectorAll('#sagaSlides img');
    if (sagaImgs.length === 0) return;
    
    const changeSaga = (n) => {
        sagaImgs[sagaIdx].classList.remove('active');
        sagaIdx = (sagaIdx + n + sagaImgs.length) % sagaImgs.length;
        sagaImgs[sagaIdx].classList.add('active');
    };
    
    setInterval(() => changeSaga(1), 5000);
    
    // Exposed for navigation buttons
    window.changeSaga = changeSaga;
};

// ==========================================
// 4. EXPERT REVIEWS (Enhanced Template)
// ==========================================
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
        
        // Update Text & Template
        document.getElementById('expertName').innerText = data.name;
        document.getElementById('expertOrg').innerText = data.org;
        document.getElementById('expertQuote').innerHTML = data.quote; // Use innerHTML for spans
        document.getElementById('expertPic').src = data.pic;
        
        const designationEl = document.querySelector('.expert-profile-side .designation');
        if (designationEl) designationEl.innerText = data.designation;
        
        // Update Nav
        document.querySelectorAll('.nav-dot').forEach((d, i) => {
            d.className = i === n ? 'nav-dot active' : 'nav-dot';
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
        const d = document.createElement('div');
        d.className = i === 0 ? 'nav-dot active' : 'nav-dot';
        d.onclick = () => { if(!isExpertAnimating && expertIdx !== i) showExpert(i); };
        expertDotBox.appendChild(d);
    });

    window.changeExpert = (n) => {
        if (isExpertAnimating) return;
        showExpert((expertIdx + n + expertData.length) % expertData.length);
    };
};

// ==========================================
// 5. ALERT TICKER (Continuous Loop)
// ==========================================
const initAlertTicker = () => {
    const ticker = document.querySelector('.alert-ticker');
    if (!ticker) return;

    // Duplicate content so CSS marquee scroll feels continuous
    const original = ticker.innerHTML.trim();
    // Avoid duplicating multiple times if function runs twice
    if (ticker.dataset.loopInitialized === 'true') return;
    ticker.innerHTML = `${original} a0a0 • a0a0 ${original}`;
    ticker.dataset.loopInitialized = 'true';
};

// ==========================================
// 5. TESTIMONIAL SLIDER (Infinite Round)
// ==========================================
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

// ==========================================
// 6. NAVBAR SCROLL BEHAVIOR
// ==========================================
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

// ==========================================
// 7. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initAlertTicker();
    initCounters();
    initSagaSlider();
    initExpertSlider();
    initTestimonials();
    initNavbarScroll();
    
    // Handle Window Resize for Sliders
    window.addEventListener('resize', () => {
        testiIdx = 0;
        const track = document.getElementById('testiTrack');
        if (track) track.style.transform = `translateX(0px)`;
    });
});
