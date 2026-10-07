/**
 * GAZU - Modern Layout Framework Scripts
 * Interactive behaviors for navigation, wishlist, and smooth transitions
 */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const primaryNav = document.querySelector('.site-header__nav');

  // 1. Subtle elevation on scroll
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.04)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }

  // 2. Mobile Menu Toggle
  if (mobileToggle && primaryNav) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = primaryNav.style.display === 'flex';
      if (isVisible) {
        primaryNav.style.display = '';
      } else {
        primaryNav.style.display = 'flex';
        primaryNav.style.flexDirection = 'column';
        primaryNav.style.position = 'absolute';
        primaryNav.style.top = '100%';
        primaryNav.style.left = '0';
        primaryNav.style.right = '0';
        primaryNav.style.backgroundColor = '#F2F2F2';
        primaryNav.style.padding = '24px';
        primaryNav.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
        primaryNav.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.06)';
      }
    });
  }

  // 3. Wishlist Heart Button Toggle
  const wishlistButtons = document.querySelectorAll('.product-wishlist-btn');
  wishlistButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const svg = btn.querySelector('svg');
      if (!svg) return;

      const isFavorited = btn.classList.toggle('favorited');
      if (isFavorited) {
        svg.style.fill = '#111111';
        btn.setAttribute('aria-label', 'Remove from Wishlist');
      } else {
        svg.style.fill = 'none';
        btn.setAttribute('aria-label', 'Add to Wishlist');
      }
    });
  });

  // 4. Smooth Anchor Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    });
  });
});
