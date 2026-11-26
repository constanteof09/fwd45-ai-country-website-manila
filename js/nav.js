/* Progressive enhancement for the mobile navigation menu */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');

  if (!toggle || !menu) return;

  document.documentElement.classList.add('js');
  toggle.hidden = false;

  function setMenuOpen(isOpen) {
    toggle.setAttribute('aria-expanded', String(isOpen));
    menu.classList.toggle('is-open', isOpen);
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      setMenuOpen(false);
      toggle.focus();
    }
  });
})();

/* Prevent default submission on the educational demo contact form */
(function () {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const status = document.getElementById('form-status');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (status) {
      status.textContent = 'Thank you for your message! This is an educational demo form, so no data was sent.';
      status.hidden = false;
    }
    form.reset();
  });
})();
