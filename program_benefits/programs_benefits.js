// Scroll reveal effect


const revealElements = document.querySelectorAll(
  '.info-card, .offer-card, .apply-item'
)

const revealOnScroll = () => {
  const windowHeight = window.innerHeight

  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top

    if (elementTop < windowHeight - 100) {
      el.classList.add('show')
    }
  })
}

window.addEventListener('scroll', revealOnScroll)
revealOnScroll()

// Small dropdown toggle for touch devices / mobile
(function() {
  const navItems = document.querySelectorAll('.nav-item');
  if (!navItems || navItems.length === 0) return;

  const closeAll = () => navItems.forEach(i => i.classList.remove('open'));

  navItems.forEach(item => {
    const link = item.querySelector('.nav-link');
    const menu = item.querySelector('.dropdown-menu');
    if (!link || !menu) return;

    link.addEventListener('click', (e) => {
      // let normal links navigate
      const href = link.getAttribute('href');
      if (href && href.trim() !== '#' && !href.trim().startsWith('#')) return;

      e.preventDefault();
      const opened = item.classList.toggle('open');
      if (opened) navItems.forEach(i => { if (i !== item) i.classList.remove('open'); });
    });

    // close when mouse leaves (desktop)
    item.addEventListener('mouseleave', () => item.classList.remove('open'));
  });

  document.addEventListener('click', (e) => { if (!e.target.closest('.nav-item')) closeAll(); });
  window.addEventListener('scroll', () => closeAll(), { passive: true });
})();
