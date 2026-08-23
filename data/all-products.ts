export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  colors: { name: string; hex: string }[];
  inStock: boolean;
  isNew?: boolean;
}

export const ALL_PRODUCTS_DATA: Product[] = [
  {
    id: 'prod-1',
    name: 'Spatial Studio ANC Naushniklar',
    slug: 'spatial-studio-anc',
    category: 'Audio',
    price: 189,
    originalPrice: 299,
    rating: 4.9,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
    ],
    description: 'Yuqori aniqlikdagi spatial audio va gibrid faol shovqin bekor qilish (ANC) texnologiyasi bilan jihozlangan premium naushnik.',
    features: [
      '45 soatgacha uzluksiz batareya quvvati',
      'Ultra yumshoq xotira ko‘pikli quloq yostiqchalari',
      'Beryllium qoplamali 40mm dinamik drayverlar',
      'Bluetooth 5.3 va simli Hi-Res audio rejimi',
    ],
    specs: [
      { label: 'Ulanish', value: 'Bluetooth 5.3 / Type-C' },
      { label: 'Chastota', value: '20Hz - 40kHz' },
      { label: 'Og‘irlik', value: '240g' },
      { label: 'Kafolat', value: '2 Yil Rasmiy' },
    ],
    colors: [
      { name: 'Matte Space Black', hex: '#1C1C1E' },
      { name: 'Silver Titanium', hex: '#E5E5EA' },
      { name: 'Slate Gray', hex: '#636366' },
    ],
    inStock: true,
    isNew: false,
  },
  {
    id: 'prod-2',
    name: 'NovaMag Split Klaviatura',
    slug: 'novamag-split-keyboard',
    category: 'Ish Stoli',
    price: 279,
    rating: 4.9,
    reviews: 18,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
      'https://images.unsplash.com/photo-1622445262464-84b1456045b6?w=800&q=80',
    ],
    description: 'Magnitli ikki qismli ergonomik dizayn, optik-mexanik switchlar va alyuminiy CNC korpus uyg‘unligi.',
    features: [
      'Qo‘llar uchun to‘liq tabiiy burchak ergonomikasi',
      'Hot-swappable optik switch tizimi',
      'RGB dasturlanuvchi qatlamlar (QMK/VIA)',
      'OLED mini status displeylari har ikkala modulda',
    ],
    specs: [
      { label: 'Switch', value: 'Gateron Optical Red' },
      { label: 'Korpus', value: 'Anodlangan Alyuminiy' },
      { label: 'Ulanish', value: 'Tri-Mode (2.4G, BT, Wire)' },
      { label: 'Batareya', value: 'Har bir modul 2000mAh' },
    ],
    colors: [
      { name: 'Anodized Dark Gray', hex: '#2C2C2E' },
      { name: 'Arctic White', hex: '#F2F2F7' },
    ],
    inStock: true,
    isNew: true,
  },
  {
    id: 'prod-3',
    name: 'Monoxrom Teri Sneaker v2',
    slug: 'monochrome-leather-sneaker',
    category: 'Kiyim-kechak',
    price: 135,
    originalPrice: 210,
    rating: 4.7,
    reviews: 64,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80',
    ],
    description: 'Yuqori sifatli tabiiy charmdan ishlangan, minimalistik siluetga ega kundalik krossovka.',
    features: [
      '100% premium italyancha teri',
      'Antibakterial va nafas oluvchi ichki qatlam',
      'Yengil va amortizatsiyali poliuretan taglik',
    ],
    specs: [
      { label: 'Material', value: 'Tabiiy Teri' },
      { label: 'Taglik', value: 'Eko-Poliuretan' },
      { label: 'Uslub', value: 'Casual / Minimalist' },
    ],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Obsidian Black', hex: '#000000' },
    ],
    inStock: true,
    isNew: false,
  },
  {
    id: 'prod-4',
    name: 'Orbit Gravitatsiya Stol Chirog‘i',
    slug: 'orbit-levitating-lamp',
    category: 'Ish Stoli',
    price: 180,
    rating: 4.8,
    reviews: 39,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    ],
    description: 'Magnit maydonida havoda suzib turuvchi, sirkadian yoritish tizimiga ega futuristik chiroq.',
    features: [
      'MagLev hajmda suzish texnologiyasi',
      '3000K dan 6000K gacha iliq/sovuq rejimlar',
      'Sensorli boshqaruv paneli',
    ],
    specs: [
      { label: 'Quvvat', value: '12W LED' },
      { label: 'Texnologiya', value: 'MagLev Induction' },
    ],
    colors: [
      { name: 'Matte Brushed Steel', hex: '#8E8E93' },
    ],
    inStock: true,
    isNew: true,
  },
  {
    id: 'prod-5',
    name: 'Prism MagSafe Quvvat Stansiyasi',
    slug: 'prism-magsafe-station',
    category: 'Gadjetlar',
    price: 145,
    rating: 4.9,
    reviews: 88,
    image: 'https://images.unsplash.com/photo-1622445262464-84b1456045b6?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1622445262464-84b1456045b6?w=800&q=80',
    ],
    description: '3 taldagi qurilmani bir vaqtning o‘zida quvvatlovchi shaffof temperlangan shishali dok-stansiya.',
    features: [
      '65W GaN tezkor quvvatlash bloki',
      'OLED real vaqt rejimidagi quvvat ko‘rsatkichi',
      'Haddan tashqari qizishdan himoya tizimi',
    ],
    specs: [
      { label: 'Chiqish quvvati', value: '65W Max' },
      { label: 'Standart', value: 'Qi / MagSafe 2.0' },
    ],
    colors: [
      { name: 'Transparent Glass', hex: '#E5EEF0' },
      { name: 'Space Gray', hex: '#3A3A3C' },
    ],
    inStock: true,
    isNew: false,
  },
  {
    id: 'prod-6',
    name: 'Minimalist Dyneema® Ryuukzak',
    slug: 'minimalist-dyneema-backpack',
    category: 'Aksessuarlar',
    price: 195,
    rating: 4.8,
    reviews: 31,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    ],
    description: 'Po‘latdan 15 barobar baquvvat bo‘lgan Dyneema® kompozit matosidan tayyorlangan ultra yengil ryuukzak.',
    features: [
      'IPX6 darajasidagi suv o‘tkazmaslik',
      '16 dyuymli noutbuk uchun maxsus ajratilgan bo‘lim',
      'Atigi 410 gramm og‘irlik',
    ],
    specs: [
      { label: 'Hajm', value: '22 Litr' },
      { label: 'Material', value: 'Dyneema Composite' },
    ],
    colors: [
      { name: 'Stealth Black', hex: '#111111' },
      { name: 'Alpine Gray', hex: '#888888' },
    ],
    inStock: true,
    isNew: true,
  },
  {
    id: 'prod-7',
    name: 'Titanium Minimalist Smartwatch',
    slug: 'titanium-smartwatch',
    category: 'Gadjetlar',
    price: 249,
    originalPrice: 380,
    rating: 4.9,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    ],
    description: 'Aerokosmik darajadagi titan qotishmasidan yasalgan, 14 kunlik batareya quvvatiga ega aqlli soat.',
    features: [
      'Doimiy yyonuvchi AMOLED displey (Sapphire shisha)',
      'SpO2, yurak urishi va stress monitoringi',
      '5 ATM suv ostida suzish himoyasi',
    ],
    specs: [
      { label: 'Displey', value: '1.4 inch AMOLED' },
      { label: 'Batareya', value: '14 Kun' },
    ],
    colors: [
      { name: 'Natural Titanium', hex: '#D1D1D6' },
      { name: 'Matte Black', hex: '#1C1C1E' },
    ],
    inStock: true,
    isNew: false,
  },
  {
    id: 'prod-8',
    name: 'AeroSound Pro Monolith Edition',
    slug: 'aerosound-pro-monolith',
    category: 'Audio',
    price: 349,
    originalPrice: 399,
    rating: 5.0,
    reviews: 24,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
    ],
    description: 'Titanium qotishmali shovqinni to‘liq yutuvchi flagman akustik garnitura.',
    features: [
      'Dual ANC chip arxitekturasi',
      'Styuardessa darajasidagi akustik izolyatsiya',
    ],
    specs: [
      { label: 'Drayver', value: '40mm Beryllium' },
      { label: 'Vazn', value: '240g' },
    ],
    colors: [
      { name: 'Monolith Black', hex: '#0F0F11' },
    ],
    inStock: true,
    isNew: true,
  },
  {
    id: 'prod-9',
    name: 'Anodlangan Alyuminiy Chiroq',
    slug: 'anodized-aluminum-lamp',
    category: 'Ish Stoli',
    price: 89,
    originalPrice: 140,
    rating: 4.8,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    ],
    description: 'Ish stoli uchun mo‘ljallangan ko‘zni charchatmaydigan LED yoritish moslamasi.',
    features: ['Burchakni sozlash mexanizmi', 'USB-C orqali quvvat olish'],
    specs: [{ label: 'Material', value: 'Alyuminiy' }],
    colors: [{ name: 'Silver', hex: '#E5E5EA' }],
    inStock: true,
    isNew: false,
  },
  {
    id: 'prod-10',
    name: 'AeroTouch Haptik Klaviatura',
    slug: 'aerotouch-haptic-keyboard',
    category: 'Ish Stoli',
    price: 219,
    rating: 4.8,
    reviews: 52,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    ],
    description: 'Mexanik tebranish va shaffof titan korpusga ega zamonaviy simsiz klaviatura.',
    features: ['Haptik qayta aloqa motorlari', '90 kungacha batareya'],
    specs: [{ label: 'Ulanish', value: 'Bluetooth 5.3' }],
    colors: [{ name: 'Titanium', hex: '#8E8E93' }],
    inStock: true,
    isNew: false,
  },
];