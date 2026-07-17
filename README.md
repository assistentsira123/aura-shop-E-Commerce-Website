# AURA — Headphones Store

AURA is a static, multi-page e-commerce website for selling audio products (headphones, earbuds, speakers, and accessories). Built entirely with HTML, CSS, and vanilla JavaScript — no build step, no framework.

## Live Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero section, featured products, testimonials |
| Shop | `shop.html` | Full catalog listing with filters |
| Product Detail | `product.html` | Single product details, specs, "Add to Cart" |
| Cart | `cart.html` | Cart items, quantity updates, subtotal |
| Checkout | `checkout.html` | Order form and checkout flow |

## Project Structure

```
aura-shop/
├── index.html            # Home page
├── shop.html             # Product listing/catalog
├── product.html          # Product detail page
├── cart.html              # Shopping cart
├── checkout.html          # Checkout flow
├── css/
│   ├── tokens.css         # Design tokens (colors, type, spacing, motion)
│   ├── base.css           # Global resets & base styles
│   ├── components.css     # Shared UI components (buttons, cards, etc.)
│   ├── navbar.css
│   ├── footer.css
│   ├── hero.css
│   ├── shop.css
│   ├── product.css
│   ├── cart.css
│   ├── checkout.css
│   └── testimonials.css
└── js/
    ├── products-data.js   # Product catalog — single source of truth
    ├── cart-store.js      # Cart logic, localStorage persistence
    ├── layout.js          # Shared navbar/footer injection + mobile menu
    ├── product-card.js    # Reusable product card renderer
    ├── scrollReveal.js    # Scroll-based reveal animations
    └── testimonials.js    # Testimonials carousel/slider
```

## Product Catalog

All products are defined in a single `PRODUCTS` array in `js/products-data.js`, which every page (shop, product, cart, checkout) reads from. Categories:

- **Headphones** — AURA One, AURA Pro
- **Earbuds** — AURA Buds, AURA Buds Sport
- **Speakers** — AURA Mini, AURA Max
- **Accessories** — AURA Case, AURA Cable, AURA Stand

Each product has `id`, `name`, `category`, `price`, `rating`, `reviews`, `specs`, and `stock` fields.

## Getting Started

This is a static site — no build or install step required:

1. Extract the zip file.
2. Open `index.html` directly in any browser, **or**
3. Run a local server for a better experience:

   ```bash
   # Python
   python3 -m http.server 8000

   # Node (npx)
   npx serve .
   ```

   Then open `http://localhost:8000` in your browser.

## Key Features

- **Shared layout system** — `layout.js` dynamically injects the navbar and footer, so the markup only needs to be maintained in one place.
- **Persistent cart** — `cart-store.js` saves the cart to `localStorage` (key: `aura_cart_v1`), so it survives page reloads and navigation.
- **Design tokens** — `css/tokens.css` centralizes all colors, fonts, spacing, and motion values; every other CSS file references these variables.
- **Reduced-motion support** — respects the `prefers-reduced-motion` media query.
- **Responsive** — mobile-friendly navbar/menu toggle.

## Tech Stack

- HTML5
- CSS3 (custom properties / design tokens)
- Vanilla JavaScript (no framework, no bundler)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono

## Notes

- This is a front-end-only demo — there is no backend/API; cart and checkout data lives entirely in the browser's `localStorage`.
- To add a new product, just add a new object to the `PRODUCTS` array in `js/products-data.js` — every page will pick it up automatically.
