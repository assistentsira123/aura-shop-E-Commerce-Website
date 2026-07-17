/* ==========================================================================
   Cart store — persists to localStorage so the cart survives page loads
   and navigation between shop / product / cart / checkout pages.
   ========================================================================== */

const CART_KEY = 'aura_cart_v1';

const CartStore = {
  read() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  },

  write(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('cart:updated', { detail: items }));
  },

  add(productId, qty = 1) {
    const items = this.read();
    const existing = items.find((i) => i.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({ id: productId, qty });
    }
    this.write(items);
  },

  setQty(productId, qty) {
    let items = this.read();
    if (qty <= 0) {
      items = items.filter((i) => i.id !== productId);
    } else {
      const existing = items.find((i) => i.id === productId);
      if (existing) existing.qty = qty;
    }
    this.write(items);
  },

  remove(productId) {
    const items = this.read().filter((i) => i.id !== productId);
    this.write(items);
  },

  clear() {
    this.write([]);
  },

  count() {
    return this.read().reduce((sum, i) => sum + i.qty, 0);
  },

  /** Returns [{product, qty, lineTotal}] with dead product ids filtered out */
  lines() {
    return this.read()
      .map((i) => {
        const product = getProductById(i.id);
        if (!product) return null;
        return { product, qty: i.qty, lineTotal: product.price * i.qty };
      })
      .filter(Boolean);
  },

  subtotal() {
    return this.lines().reduce((sum, l) => sum + l.lineTotal, 0);
  }
};
