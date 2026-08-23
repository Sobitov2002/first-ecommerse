export interface CollectionDetail {
  id: string;
  title: string;
  theme: string;
  edition: string;
  slug: string;
  releaseYear: string;
  itemCount: number;
  coverImage: string;
  palette: string[];
  concept: string;
  products: {
    id: string;
    name: string;
    price: number;
    image: string;
    tag: string;
  }[];
}

export const DETAILED_COLLECTIONS: CollectionDetail[] = [
  {
    id: 'col-monochrome',
    title: 'Monochrome Workspace Lab',
    theme: 'Unumdorlik va Chuqur Diqqat',
    edition: 'Edition 01 // Pure Focus',
    slug: 'monochrome-workspace',
    releaseYear: '2026',
    itemCount: 8,
    coverImage: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=1200&q=80',
    palette: ['#0A0A0A', '#262626', '#737373', '#E5E5E5'],
    concept: 'Barcha rang shovqinlarini chetlab o‘tuvchi, faqat vazifaga e’tiborni qaratuvchi mutlaq monoxrom ish maydoni konsepti.',
    products: [
      { id: 'p-1', name: 'Matte Desk Mat XL', price: 45, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80', tag: 'Aksessuar' },
      { id: 'p-2', name: 'Orbit Stand V2', price: 85, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80', tag: 'Hardware' },
      { id: 'p-3', name: 'Stealth Audio Monitor', price: 290, image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&q=80', tag: 'Akustika' }
    ]
  },
  {
    id: 'col-urban-nomad',
    title: 'Urban Cyber Nomad',
    theme: 'Mobillik va Dinamik Shakllar',
    edition: 'Edition 02 // Motion Ready',
    slug: 'urban-nomad',
    releaseYear: '2026',
    itemCount: 6,
    coverImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=80',
    palette: ['#171717', '#3B82F6', '#64748B', '#F8FAFC'],
    concept: 'Shaharlararo harakatlanuvchi zamonaviy mutaxassislar uchun yengil vazn, bardoshli himoya va minimalist siluetlar.',
    products: [
      { id: 'p-4', name: 'Modular Sling Pack', price: 110, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80', tag: 'Carry' },
      { id: 'p-5', name: 'MagPower Snap Bank', price: 65, image: 'https://images.unsplash.com/photo-1622445262464-84b1456045b6?w=400&q=80', tag: 'Energy' }
    ]
  }
];