document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const toggle = document.getElementById('darkModeToggle');
  const savedMode = localStorage.getItem('site-dark-mode');

  const applyMode = (dark) => {
    body.classList.toggle('dark-mode', dark);
    if (toggle) {
      toggle.textContent = dark ? '☀️ Terang' : '🌓 Mode';
    }
    localStorage.setItem('site-dark-mode', dark ? 'true' : 'false');
  };

  applyMode(savedMode === 'true');

  if (toggle) {
    toggle.addEventListener('click', function () {
      applyMode(!body.classList.contains('dark-mode'));
    });
  }

  const contactForm = document.getElementById('contactForm');
  const registrationForm = document.getElementById('registrationForm');
  const contactSuccessModal = document.getElementById('contactSuccessModal');
  const registrationSuccessModal = document.getElementById('registrationSuccessModal');

  const showModal = (modalElement, fallbackMessage) => {
    if (modalElement && typeof bootstrap !== 'undefined') {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    } else {
      alert(fallbackMessage);
    }
  };

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      contactForm.reset();
      showModal(contactSuccessModal, 'Pesan Anda berhasil dikirim. Terima kasih telah menghubungi kami.');
    });
  }

  if (registrationForm) {
    registrationForm.addEventListener('submit', function (event) {
      event.preventDefault();
      registrationForm.reset();
      showModal(registrationSuccessModal, 'Pendaftaran Anda berhasil terkirim. Tim kami akan segera menghubungi Anda.');
    });
  }
});
