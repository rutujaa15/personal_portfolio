/* Minimal JS: responsive menu, year, and reveal on scroll */

document.addEventListener('DOMContentLoaded', () => {
  // Menu buttons (for index and contact pages)
  const makeMenu = (btnId, linksId) => {
    const btn = document.getElementById(btnId);
    const links = document.getElementById(linksId);
    if (!btn || !links) return;
    btn.addEventListener('click', () => links.classList.toggle('open'));
  };
  makeMenu('menu-btn', 'nav-links');
  makeMenu('menu-btn-2', 'nav-links-2');

  // Close mobile nav when clicking a link
  document.querySelectorAll('.nav-link').forEach(a =>
    a.addEventListener('click', () => {
      document.querySelectorAll('.nav-links').forEach(n => n.classList.remove('open'));
    })
  );

  // Insert current year
  const y = new Date().getFullYear();
  const yEl = document.getElementById('year');
  const yEl2 = document.getElementById('year-2');
  if (yEl) yEl.textContent = y;
  if (yEl2) yEl2.textContent = y;

  // Reveal on scroll (simple)
  const reveal = () => {
    document.querySelectorAll('.reveal').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < (window.innerHeight || document.documentElement.clientHeight) - 60) {
        el.classList.add('show');
      }
    });
  };
  reveal();
  window.addEventListener('scroll', reveal, { passive: true });

  // Smooth anchor scrolling (for internal links)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
