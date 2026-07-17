/* ==========================================================================
   Shared layout component — navbar + footer markup lives here ONCE and is
   injected into every page's #site-header / #site-footer containers.
   Also wires the mobile menu toggle and the live cart-count badge.
   ========================================================================== */

function renderHeader(activePage) {
  const el = document.getElementById('site-header');
  if (!el) return;

  const links = [
    { href: 'shop.html', label: 'Shop', key: 'shop' },
    { href: 'index.html#about', label: 'Product', key: 'about' },
    { href: 'index.html#testimonials', label: 'Reviews', key: 'reviews' },
  ];

  const linksHtml = links
    .map((l) => `<a href="${l.href}"${l.key === activePage ? ' aria-current="page"' : ''}>${l.label}</a>`)
    .join('');

  el.innerHTML = `
    <header class="navbar">
      <div class="container navbar__inner">
        <a href="index.html" class="navbar__logo">AURA<span>•</span></a>
        <nav class="navbar__links" id="navLinks">
          ${linksHtml}
        </nav>
        <div class="navbar__cta">
          <a href="cart.html" class="cart-link" aria-label="Cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6"/></svg>
            <span class="cart-link__badge" id="cartBadge">0</span>
          </a>
          <a href="shop.html" class="btn btn--primary btn--sm">Shop AURA</a>
          <button class="navbar__toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="navLinks">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `;

  const toggle = el.querySelector('.navbar__toggle');
  const navLinks = el.querySelector('.navbar__links');
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  const nav = el.querySelector('.navbar');
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 12);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  updateCartBadge();
  window.addEventListener('cart:updated', updateCartBadge);
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  const count = CartStore.count();
  badge.textContent = String(count);
  badge.style.display = count > 0 ? 'flex' : 'none';
}

function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;

  el.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer__top">
          <div class="footer__brand">
            <a href="index.html" class="navbar__logo">AURA<span>•</span></a>
            <p>Headphones tuned to your room, your commute, your flight — and nothing else.</p>
          </div>
          <div class="footer__col">
            <h4>Shop</h4>
            <ul>
              <li><a href="shop.html?cat=headphones">Headphones</a></li>
              <li><a href="shop.html?cat=earbuds">Earbuds</a></li>
              <li><a href="shop.html?cat=speakers">Speakers</a></li>
              <li><a href="shop.html?cat=accessories">Accessories</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Company</h4>
            <ul>
              <li><a href="index.html#about">Our story</a></li>
              <li><a href="index.html#testimonials">Reviews</a></li>
              <li><a href="index.html">Careers</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>Support</h4>
            <ul>
              <li><a href="index.html">Warranty</a></li>
              <li><a href="index.html">Shipping</a></li>
              <li><a href="cart.html">Track order</a></li>
            </ul>
          </div>
          <div class="footer__col footer__newsletter">
            <h4>Stay tuned</h4>
            <p class="text-muted" style="font-size: var(--fs-small);">Product drops and sound tips, once a month.</p>
            <form data-newsletter-form>
              <label class="visually-hidden" for="newsletterEmail">Email address</label>
              <input type="email" id="newsletterEmail" placeholder="you@email.com" required>
              <button type="submit" class="btn btn--primary btn--sm">Join</button>
            </form>
            <p class="form-msg"></p>
          </div>
        </div>
        <div class="footer__bottom">
          <p>© 2026 AURA Audio Co. All rights reserved.</p>
          <div class="footer__social">
            <a href="index.html" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
            <a href="index.html" aria-label="X"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4l16 16M20 4L4 20"/></svg></a>
            <a href="index.html" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="3"/><path d="M10 9l5 3-5 3z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  `;

  const form = el.querySelector('[data-newsletter-form]');
  if (form) {
    const input = form.querySelector('input[type="email"]');
    const msg = form.parentElement.querySelector('.form-msg');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const value = input.value.trim();
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!isValid) {
        msg.textContent = 'Please enter a valid email address.';
        msg.style.color = '#F2B84B';
        return;
      }
      msg.textContent = `You're on the list — check ${value} for a confirmation.`;
      msg.style.color = '#5EEAD4';
      form.reset();
    });
  }
}
