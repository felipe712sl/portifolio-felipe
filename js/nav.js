/* js/nav.js — Navbar: scroll state, hamburger, active link */
(function () {
  const nav       = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const links     = navLinks ? navLinks.querySelectorAll('.nav__link') : [];

  // Scroll state
  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 40);
  }, { passive: true });

  // Hamburger
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('is-open');
      navLinks.classList.toggle('is-open', open);
      hamburger.setAttribute('aria-expanded', open);
    });

    // Close on link click (mobile)
    links.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('is-open');
        navLinks.classList.remove('is-open');
      });
    });
  }

  // Active section highlight
  const sections = document.querySelectorAll('section[id]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => {
          link.classList.toggle(
            'is-active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
})();
