/* ==========================================================================
   Product card component — renders one card, wires its "Add to cart" button.
   Used on: index.html (featured), shop.html (grid), product.html (related).
   ========================================================================== */

function productIconSvg(color) {
  return `
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 66C20 40 38 20 60 20C82 20 100 40 100 66" stroke="#EDEEF7" stroke-width="5" stroke-linecap="round"/>
      <rect x="10" y="58" width="20" height="36" rx="10" fill="#0F1020" stroke="${color}" stroke-width="2.5"/>
      <rect x="90" y="58" width="20" height="36" rx="10" fill="#0F1020" stroke="${color}" stroke-width="2.5"/>
      <circle cx="20" cy="76" r="3.5" fill="${color}"/>
      <circle cx="100" cy="76" r="3.5" fill="${color}"/>
    </svg>
  `;
}

function starIconSvg() {
  return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>`;
}

function renderProductCard(product) {
  const onSale = product.compareAt && product.compareAt > product.price;
  return `
    <article class="card product-card" data-product-id="${product.id}">
      <a href="product.html?id=${product.id}" class="product-card__media">
        ${onSale ? `<span class="badge product-card__sale">Sale</span>` : ''}
        ${productIconSvg(product.color)}
      </a>
      <div class="product-card__body">
        <span class="product-card__cat">${product.category}</span>
        <h3 class="product-card__name"><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <div class="product-card__rating">
          ${starIconSvg()} ${product.rating} <span>(${product.reviews})</span>
        </div>
        <div class="product-card__price">
          <span class="now">${formatPrice(product.price)}</span>
          ${onSale ? `<span class="was">${formatPrice(product.compareAt)}</span>` : ''}
        </div>
      </div>
      <div class="product-card__actions">
        <a href="product.html?id=${product.id}" class="btn btn--ghost btn--sm">View</a>
        <button type="button" class="btn btn--primary btn--sm" data-add-to-cart="${product.id}">Add to cart</button>
      </div>
    </article>
  `;
}

function renderProductGrid(container, products) {
  if (!container) return;
  container.innerHTML = products.map(renderProductCard).join('');
  wireAddToCartButtons(container);
}

function wireAddToCartButtons(scope) {
  scope.querySelectorAll('[data-add-to-cart]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-add-to-cart');
      const qty = Number(btn.getAttribute('data-qty') || 1);
      CartStore.add(id, qty);
      const product = getProductById(id);
      showToast(`${product ? product.name : 'Item'} added to cart`);
    });
  });
}

let toastTimer = null;
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg><span></span>`;
    document.body.appendChild(toast);
  }
  toast.querySelector('span').textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2400);
}
