# AURA — Headphones Store

AURA ek static, multi-page e-commerce website hai jo audio products (headphones, earbuds, speakers, aur accessories) bechne ke liye bani hai. Pure HTML, CSS aur vanilla JavaScript se banaya gaya hai — koi build step ya framework nahi.

## Live Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero section, featured products, testimonials |
| Shop | `shop.html` | Poore catalog ki listing, filters ke saath |
| Product Detail | `product.html` | Single product ki details, specs, "Add to Cart" |
| Cart | `cart.html` | Cart items, quantity update, subtotal |
| Checkout | `checkout.html` | Order form aur checkout flow |

## Project Structure

```
aura-shop/
├── index.html          # Home page
├── shop.html           # Product listing/catalog
├── product.html         # Product detail page
├── cart.html            # Shopping cart
├── checkout.html        # Checkout flow
├── css/
│   ├── tokens.css        # Design tokens (colors, type, spacing, motion)
│   ├── base.css          # Global resets & base styles
│   ├── components.css    # Shared UI components (buttons, cards, etc.)
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

Saare products `js/products-data.js` mein ek single `PRODUCTS` array mein define hain, jise har page (shop, product, cart, checkout) use karta hai. Categories:

- **Headphones** — AURA One, AURA Pro
- **Earbuds** — AURA Buds, AURA Buds Sport
- **Speakers** — AURA Mini, AURA Max
- **Accessories** — AURA Case, AURA Cable, AURA Stand

Har product mein `id`, `name`, `category`, `price`, `rating`, `reviews`, `specs`, aur `stock` fields hote hain.

## Kaise Chalayein

Ye ek static site hai — koi build/install step nahi chahiye:

1. Zip ko extract karein.
2. `index.html` ko kisi bhi browser mein directly open kar lein, **ya**
3. Better experience ke liye ek local server chalayein:

   ```bash
   # Python
   python3 -m http.server 8000

   # Node (npx)
   npx serve .
   ```

   Fir browser mein `http://localhost:8000` open karein.

## Key Features

- **Shared layout system** — `layout.js` navbar aur footer ko dynamically inject karta hai, taaki markup sirf ek jagah maintain karna pade.
- **Persistent cart** — `cart-store.js` cart ko `localStorage` mein save karta hai (key: `aura_cart_v1`), jo page reload aur navigation ke baad bhi bana rehta hai.
- **Design tokens** — `css/tokens.css` mein saare colors, fonts, spacing aur motion values centralized hain; baaki CSS files inhi variables ko reference karti hain.
- **Reduced-motion support** — `prefers-reduced-motion` media query respect ki gayi hai.
- **Responsive** — mobile-friendly navbar/menu toggle.

## Tech Stack

- HTML5
- CSS3 (custom properties / design tokens)
- Vanilla JavaScript (no framework, no bundler)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono

## Notes

- Ye front-end-only demo hai — koi backend/API nahi hai; cart aur checkout data sirf browser ke `localStorage` mein rehta hai.
- Naya product add karne ke liye bas `js/products-data.js` ke `PRODUCTS` array mein ek naya object add karein — baaki saare pages automatically use kar lenge.
