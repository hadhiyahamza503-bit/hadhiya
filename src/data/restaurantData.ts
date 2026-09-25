import { MenuItem, GalleryItem, Review } from '../types/restaurant';

export const RESTAURANT_INFO = {
  name: 'Yamama Shawaya',
  tagline: 'An Grilled Chicken with Special Flavored Rice',
  motto: 'Charcoal Grilled • Slow Fired • Full of Flavor',
  heroSubtitle:
    'Experience the rich taste of charcoal-fired chicken served with specially flavored Arabic rice.',
  address: {
    line1: 'Oradampalam-Valiyavitilpadi',
    road: 'Calicut Road',
    locality: 'Angadipuram / Tirurkad',
    city: 'Perinthalmanna',
    district: 'Malappuram',
    state: 'Kerala',
    pincode: '679321',
    fullFormatted:
      'Oradampalam-Valiyavitilpadi, Calicut Road, Angadipuram / Tirurkad, Perinthalmanna, Malappuram, Kerala 679321',
    shortLocation: 'Calicut Road • Angadipuram • Perinthalmanna',
  },
  phones: [
    { display: '9747362101', raw: '+919747362101' },
    { display: '9747362102', raw: '+919747362102' },
  ],
  whatsappNumber: '919747362101',
  hours: {
    display: 'Open Daily • 12:30 PM – 12:00 AM',
    openTime: '12:30 PM',
    closeTime: '12:00 AM (Midnight)',
    openHour: 12,
    openMinute: 30,
    closeHour: 24,
  },
  services: ['Dine-in', 'Takeaway', 'Home Delivery'],
  priceRange: '₹1–200 per person',
  priceReportedBy: 'Reported by 40 people',
  priceTiers: [
    { range: '₹1–200', label: 'Single Meals & Combos', note: 'Quarter Plate Shawaya + Rice (₹180)', popular: true },
    { range: '₹200–400', label: 'Pairs & Half Platters', note: 'Half Plate Shawaya + Rice (₹340)' },
    { range: '₹400–600', label: 'Specialty Arabic Feasts', note: 'Al Faham & Mandi Rice combinations' },
    { range: '₹600–800', label: 'Full Family Platters', note: 'Full Plate Shawaya + Rice (₹660)' },
  ],
  googleRating: '4.1/5',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Yamama+Shawaya+Calicut+Road+Angadipuram+Perinthalmanna+Malappuram+Kerala+679321',
};

// Signature Combos and Items
export const COMBO_ITEMS: MenuItem[] = [
  {
    id: 'combo-quarter',
    name: 'Quarter Plate Shawaya + Rice Combo',
    description:
      'Quarter cut slow-fired charcoal shawaya chicken served with hot flavored Arabic rice, garlic toum, and pickle.',
    category: 'combos',
    price: '₹180',
    rawPrice: 180,
    image: '/src/assets/images/yamama_combo_plate_1790141367889.jpg',
    isPopular: true,
  },
  {
    id: 'combo-half',
    name: 'Half Plate Shawaya + Rice Combo',
    description:
      'Half slow-fired charcoal shawaya chicken with generous portion of aromatic Arabic flavored rice and accompaniments.',
    category: 'combos',
    price: '₹340',
    rawPrice: 340,
    image: '/src/assets/images/hero_shawaya_rice_1790141349164.jpg',
    isPopular: true,
  },
  {
    id: 'combo-full',
    name: 'Full Plate Shawaya + Rice Combo',
    description:
      'Whole succulent charcoal-grilled chicken with family-size flavored Arabic rice, garlic paste, kubbus and sides.',
    category: 'combos',
    price: '₹660',
    rawPrice: 660,
    image: '/src/assets/images/yamama_combo_plate_1790141367889.jpg',
    isSignature: true,
  },
];

export const SIGNATURE_ITEMS: MenuItem[] = [
  {
    id: 'charcoal-chicken',
    name: 'Slow-Fired Charcoal Chicken',
    description: 'Chicken grilled slowly over charcoal for a smoky, juicy finish.',
    category: 'grill',
    price: "Ask for today's price",
    image: '/src/assets/images/hero_shawaya_rice_1790141349164.jpg',
    isSignature: true,
  },
  {
    id: 'masala-shawaya',
    name: 'Masala Shawaya',
    description: 'Flavorful shawaya infused with aromatic spices and served with rice.',
    category: 'grill',
    price: "Ask for today's price",
    image: '/src/assets/images/masala_shawaya_spiced_1790141411620.jpg',
    isPopular: true,
  },
  {
    id: 'al-faham',
    name: 'Al Faham',
    description: 'Charcoal-grilled chicken with rich smoky flavor.',
    category: 'grill',
    price: "Ask for today's price",
    image: '/src/assets/images/al_faham_charcoal_1790141383961.jpg',
    isPopular: true,
  },
  {
    id: 'bishawari-rice',
    name: 'Bishawari Rice',
    description: 'Fragrant flavored rice served with grilled specialties.',
    category: 'rice',
    price: "Ask for today's price",
    image: '/src/assets/images/mandi_fragrant_rice_1790141398731.jpg',
  },
  {
    id: 'mandi-rice',
    name: 'Mandi Rice',
    description: 'Arabic-style aromatic rice perfect with grilled chicken.',
    category: 'rice',
    price: "Ask for today's price",
    image: '/src/assets/images/mandi_fragrant_rice_1790141398731.jpg',
    isSignature: true,
  },
];

export const ALL_MENU_ITEMS: MenuItem[] = [...COMBO_ITEMS, ...SIGNATURE_ITEMS];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Slow-Fired Charcoal Shawaya with Arabic Rice',
    category: 'Shawaya chicken',
    image: '/src/assets/images/hero_shawaya_rice_1790141349164.jpg',
    description: 'Golden charcoal-grilled chicken on aromatic spiced Arabic rice platter with garlic toum.',
  },
  {
    id: 'gal-2',
    title: 'Yamama Signature Combo Platter',
    category: 'Chicken and rice combinations',
    image: '/src/assets/images/yamama_combo_plate_1790141367889.jpg',
    description: 'Tender chicken quarters paired with cumin-saffron rice and traditional dips.',
  },
  {
    id: 'gal-3',
    title: 'Charcoal Searing Al Faham on Open Coals',
    category: 'Charcoal/fire grilling',
    image: '/src/assets/images/al_faham_charcoal_1790141383961.jpg',
    description: 'Fresh chicken sizzling over hot embers for deep smoky wood-charred flavor.',
  },
  {
    id: 'gal-4',
    title: 'Authentic Arabian Mandi Rice Specialty',
    category: 'Mandi rice',
    image: '/src/assets/images/mandi_fragrant_rice_1790141398731.jpg',
    description: 'Long-grain spiced rice garnished with caramelized shallots, raisins and roasted nuts.',
  },
  {
    id: 'gal-5',
    title: 'Spiced Masala Shawaya off the Rotisserie',
    category: 'Al Faham & Shawaya',
    image: '/src/assets/images/masala_shawaya_spiced_1790141411620.jpg',
    description: 'Aromatic spicy marinade charred over wood coals, glistening and succulent.',
  },
  {
    id: 'gal-6',
    title: 'Warm Family Arabic Dining Experience',
    category: 'Restaurant dining',
    image: '/src/assets/images/hero_shawaya_rice_1790141349164.jpg',
    description: 'Generous communal platters crafted for sharing among family and friends.',
  },
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Shafeeq Rahman',
    location: 'Angadipuram / Local Guide',
    rating: 5,
    date: '1 week ago',
    text: 'Best shawaya around Angadipuram! The charcoal chicken is genuinely slow-fired with crispy smoky skin and juicy meat inside. Their special flavored Arabic rice paired with the fresh garlic toum is the real highlight. ₹180 for the quarter combo is unbeatable value.',
    dishRecommended: 'Quarter Plate Shawaya + Rice Combo',
    tag: 'Shawaya & Rice',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Dr. Anjali Nair',
    location: 'Perinthalmanna',
    rating: 4,
    date: '2 weeks ago',
    text: 'Stopped here with family on our drive along Calicut Road. We ordered the Half Shawaya Combo and fragrant Arabic rice. The rice is aromatic with mild whole spices and fried onions that even the kids loved. Courteous staff and quick serving.',
    dishRecommended: 'Half Plate Shawaya + Flavored Rice',
    tag: 'Family Dine-in',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Mohammed Jasim K.',
    location: 'Malappuram',
    rating: 5,
    date: '3 weeks ago',
    text: 'My regular spot for takeaway orders. The food is packed securely, chicken stays hot and steaming all the way home. The smoky aroma from their wood charcoal setup is unmistakable. True budget-friendly dining under ₹200 per person.',
    dishRecommended: 'Al Faham & Special Arabic Rice',
    tag: 'Takeaway & Delivery',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Rahul K. Menon',
    location: 'Perinthalmanna',
    rating: 4,
    date: 'A month ago',
    text: 'Tried their Masala Shawaya with the seasoned rice platter. The marinade is deep and flavorful without being overwhelmingly spicy. The toum (garlic dip) tastes homemade and fresh. Convenient spot right on Calicut Road.',
    dishRecommended: 'Masala Shawaya & Garlic Toum',
    tag: 'Shawaya & Rice',
    verified: true,
  },
  {
    id: 'rev-5',
    author: 'Fathima Zahra',
    location: 'Angadipuram',
    rating: 5,
    date: 'A month ago',
    text: 'Ordered the Full Plate family feast for dinner. The portion was enormous and easily satisfied our whole group. The chicken was cooked to perfection over charcoal — smoky, succulent and tender. Clean ambiance and family-friendly environment.',
    dishRecommended: 'Full Plate Shawaya Feast (₹660)',
    tag: 'Family Dine-in',
    verified: true,
  },
  {
    id: 'rev-6',
    author: 'Vipin Das',
    location: 'Traveler / Calicut Road',
    rating: 4,
    date: '2 months ago',
    text: 'Authentic Arabic grill taste right between Angadipuram and Tirurkad. Chicken was thoroughly cooked on real embers without drying out, and the rice was fluffy with aromatic spices. Prompt service even during busy late evening hours.',
    dishRecommended: 'Slow-Fired Charcoal Chicken',
    tag: 'Al Faham',
    verified: true,
  },
];
