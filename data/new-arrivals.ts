export interface NewArrivalProduct {
  id: string;
  name: string;
  slug: string;
  category: string;
  releaseDate: string;
  isPreorder?: boolean;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  specs: { [key: string]: string };
  badgeText: string;
  description: string;
}

export const NEW_ARRIVALS_DATA: NewArrivalProduct[] = [
  {
    id: 'na-1',
    name: 'AeroSound Pro Monolith Edition',
    slug: 'aerosound-pro-monolith',
    category: 'Audio',
    releaseDate: '2026-08-15',
    price: 349,
    originalPrice: 399,
    rating: 5.0,
    reviews: 24,
    badgeText: 'Hafta Premyerasi',
    description: 'Titanium qotishmali shovqinni to‘liq yutuvchi eng so‘nggi akustik avlod.',
    specs: { 'Batareya': '45 Soat', 'Drayver': '40mm Beryllium', 'Vazn': '240g' },
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80'
    ]
  },
  {
    id: 'na-2',
    name: 'NovaMag Split Klaviatura',
    slug: 'novamag-split-keyboard',
    category: 'Ish Stoli',
    releaseDate: '2026-08-10',
    price: 279,
    rating: 4.9,
    reviews: 18,
    badgeText: 'Yangi Kelgan',
    description: 'Magnitli ikki qismli ergonomik, optik-mexanik switchli klaviatura.',
    specs: { 'Switch': 'Gateron Oil King', 'Korpus': 'CNC Alyuminiy', 'Ulanish': 'Tri-mode 2.4G' },
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80'
    ]
  },
  {
    id: 'na-3',
    name: 'Minimalist Dyneema® Ryuukzak',
    slug: 'minimalist-dyneema-backpack',
    category: 'Kiyim-kechak',
    releaseDate: '2026-08-05',
    price: 195,
    rating: 4.8,
    reviews: 31,
    badgeText: 'Ultra Yengil',
    description: 'Suv o‘tkazmaydigan, yirtilishga chidamli po‘latdan mustahkam kompozit mato.',
    specs: { 'Hajm': '22 Litr', 'Suvga chidamlilik': 'IPX6', 'Og‘irlik': '410g' },
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    gallery: []
  },
  {
    id: 'na-4',
    name: 'Lumina MagLev Sensor Chirog‘i',
    slug: 'lumina-maglev-sensor-lamp',
    category: 'Uy Jihozlari',
    releaseDate: '2026-08-01',
    isPreorder: true,
    price: 160,
    originalPrice: 190,
    rating: 4.9,
    reviews: 12,
    badgeText: 'Oldindan Buyurtma',
    description: 'Havoda magnit maydoni orqali suzib turuvchi, sirkadian yoritish tizimli lampa.',
    specs: { 'Quvvat': 'Qi 15W', 'Yorug‘lik': '2700-6500K', 'Boshqaruv': 'Ilova & Qo‘l harakati' },
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    gallery: []
  }
];