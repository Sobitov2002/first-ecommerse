export interface CoolGadget {
  id: string;
  name: string;
  tagline: string;
  slug: string;
  price: number;
  badge: 'Innovatsiya' | 'Trend' | 'Futuristik' | 'Ekologik';
  specs: { label: string; value: string }[];
  image: string;
  inStock: boolean;
  accentColor?: string;
}

export const COOLEST_GADGETS_DATA: CoolGadget[] = [
  {
    id: 'cg-1',
    name: 'AeroTouch Haptik Klaviatura',
    tagline: 'Mexanik tebranish va shaffof titan korpus',
    slug: 'aerotouch-haptic-keyboard',
    price: 219,
    badge: 'Futuristik',
    specs: [
      { label: 'Ulanish', value: 'Bluetooth 5.3' },
      { label: 'Batareya', value: '90 kun' },
      { label: 'Material', value: 'Titanium' },
    ],
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    inStock: true,
  },
  {
    id: 'cg-2',
    name: 'Prism MagSafe Quvvat Stansiyasi',
    tagline: '3-in-1 shaffof OLED status ekranli dok-stansiya',
    slug: 'prism-magsafe-station',
    price: 145,
    badge: 'Innovatsiya',
    specs: [
      { label: 'Quvvat', value: '65W GaN' },
      { label: 'Qurilmalar', value: '3 ta bir vaqtda' },
      { label: 'Displey', value: 'OLED' },
    ],
    image: 'https://images.unsplash.com/photo-1622445262464-84b1456045b6?w=800&q=80',
    inStock: true,
  },
  {
    id: 'cg-3',
    name: 'Orbit Gravitatsiya Stol Chirog‘i',
    tagline: 'Magnit maydonida havoda suzuvchi LED yorug‘lik',
    slug: 'orbit-levitating-lamp',
    price: 180,
    badge: 'Trend',
    specs: [
      { label: 'Texnologiya', value: 'MagLev' },
      { label: 'Yorug‘lik', value: '3000K-6000K' },
      { label: 'Boshqaruv', value: 'Sensorli' },
    ],
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    inStock: true,
  },
];