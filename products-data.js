/* ==========================================================================
   Product catalog — single source of truth.
   Every page (shop, product detail, cart, checkout) reads from this array.
   ========================================================================== */

const PRODUCTS = [
  {
    id: 'aura-one',
    name: 'AURA One',
    category: 'headphones',
    price: 249,
    compareAt: null,
    rating: 4.9,
    reviews: 2300,
    color: '#F2B84B',
    tagline: 'Adaptive ANC over-ear headphones',
    description: 'Our flagship over-ear headphones. Six-mic adaptive ANC, 40-hour battery, and bio-cellulose drivers tuned by ear over 300 iterations.',
    specs: ['−38 dB peak noise cancelling', '40-hour battery, ANC on', '238 g total weight', 'USB-C fast charge: 10 min → 5 hrs'],
    stock: 34
  },
  {
    id: 'aura-pro',
    name: 'AURA Pro',
    category: 'headphones',
    price: 329,
    compareAt: 359,
    rating: 4.8,
    reviews: 1180,
    color: '#5EEAD4',
    tagline: 'Spatial audio over-ear headphones',
    description: 'Everything in AURA One, plus head-tracked spatial audio and a hard-shell charging case for travel.',
    specs: ['Head-tracked spatial audio', '40-hour battery, ANC on', 'Hard-shell charging case included', '2-year warranty'],
    stock: 21
  },
  {
    id: 'aura-buds',
    name: 'AURA Buds',
    category: 'earbuds',
    price: 179,
    compareAt: null,
    rating: 4.6,
    reviews: 940,
    color: '#F2B84B',
    tagline: 'True wireless ANC earbuds',
    description: 'Pocket-sized ANC in a true wireless form factor. Sweat-resistant, with 8 hours of playback plus 24 more from the case.',
    specs: ['−28 dB noise cancelling', '8h buds + 24h case', 'IPX4 sweat resistance', 'Wireless charging case'],
    stock: 58
  },
  {
    id: 'aura-buds-sport',
    name: 'AURA Buds Sport',
    category: 'earbuds',
    price: 199,
    compareAt: null,
    rating: 4.7,
    reviews: 512,
    color: '#5EEAD4',
    tagline: 'Secure-fit earbuds for training',
    description: 'Ear-hook stability and IPX5 water resistance built for runs, lifts, and everything between.',
    specs: ['IPX5 water resistance', 'Secure ear-hook fit', '9h buds + 27h case', 'Bone-conduction mic array'],
    stock: 40
  },
  {
    id: 'aura-mini',
    name: 'AURA Mini Speaker',
    category: 'speakers',
    price: 129,
    compareAt: 149,
    rating: 4.5,
    reviews: 380,
    color: '#F2B84B',
    tagline: 'Portable Bluetooth speaker',
    description: 'A palm-sized speaker with room-filling sound, 18-hour battery, and a strap for clipping onto a bag.',
    specs: ['18-hour battery', 'IP67 dust & water proof', 'Bluetooth 5.3, 30m range', 'Pair two for stereo'],
    stock: 65
  },
  {
    id: 'aura-max',
    name: 'AURA Max Speaker',
    category: 'speakers',
    price: 249,
    compareAt: null,
    rating: 4.8,
    reviews: 210,
    color: '#5EEAD4',
    tagline: 'Home Bluetooth speaker',
    description: 'Dual 3-inch woofers and a passive radiator for bass that fills a living room without a subwoofer.',
    specs: ['Dual 3" woofers + radiator', '20-hour battery', 'Multi-room pairing', 'USB-C + 3.5mm input'],
    stock: 18
  },
  {
    id: 'aura-case',
    name: 'Hard-Shell Travel Case',
    category: 'accessories',
    price: 39,
    compareAt: null,
    rating: 4.7,
    reviews: 620,
    color: '#9496B8',
    tagline: 'Protective case for AURA One / Pro',
    description: 'Crush-resistant EVA shell with a mesh pocket for cables, sized to fit any AURA over-ear headphone.',
    specs: ['Crush-resistant EVA shell', 'Interior mesh accessory pocket', 'Fits AURA One & Pro'],
    stock: 90
  },
  {
    id: 'aura-cable',
    name: 'Braided USB-C Cable',
    category: 'accessories',
    price: 19,
    compareAt: null,
    rating: 4.4,
    reviews: 305,
    color: '#9496B8',
    tagline: '1.2m braided fast-charge cable',
    description: 'A tangle-resistant braided cable rated for 10,000 bend cycles, with reinforced connector housings.',
    specs: ['1.2 m length', '10,000 bend-cycle rating', '60W fast charge capable'],
    stock: 140
  },
  {
    id: 'aura-stand',
    name: 'Aluminum Headphone Stand',
    category: 'accessories',
    price: 45,
    compareAt: 55,
    rating: 4.6,
    reviews: 150,
    color: '#F2B84B',
    tagline: 'Desk stand for over-ear headphones',
    description: 'A weighted aluminum base keeps your headphones upright and off the desk, with a non-slip cradle.',
    specs: ['Weighted non-slip base', 'Brushed aluminum finish', 'Fits all over-ear headphones'],
    stock: 72
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'headphones', label: 'Headphones' },
  { id: 'earbuds', label: 'Earbuds' },
  { id: 'speakers', label: 'Speakers' },
  { id: 'accessories', label: 'Accessories' }
];

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

function formatPrice(n) {
  return '$' + n.toFixed(2).replace(/\.00$/, '');
}
