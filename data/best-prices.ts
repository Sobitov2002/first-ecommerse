export interface BestPriceProduct {
  id: string;
  name: string;
  slug: string;
  category: string;
  originalPrice: number;
  discountPrice: number;
  discountPercent: number;
  rating: number;
  reviewsCount: number;
  stockLeft: number;
  totalStock: number;
  image: string;
  tag?: string;
}

export const BEST_PRICES_DATA: BestPriceProduct[] = [
  {
    id: 'bp-1',
    name: 'Spatial Studio ANC Naushniklar',
    slug: 'spatial-studio-anc',
    category: 'Audio',
    originalPrice: 299,
    discountPrice: 189,
    discountPercent: 37,
    rating: 4.9,
    reviewsCount: 142,
    stockLeft: 7,
    totalStock: 10,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    tag: 'Flesh Chegirma',
  },
  {
    id: 'bp-2',
    name: 'Anodlangan Alyuminiy Chiroq',
    slug: 'anodized-aluminum-lamp',
    category: 'Ish Stoli',
    originalPrice: 140,
    discountPrice: 89,
    discountPercent: 36,
    rating: 4.8,
    reviewsCount: 89,
    stockLeft: 12,
    totalStock: 40,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    tag: 'Hafta Tanlovi',
  },
  {
    id: 'bp-3',
    name: 'Monoxrom Teri Sneaker v2',
    slug: 'monochrome-leather-sneaker',
    category: 'Kiyim-kechak',
    originalPrice: 210,
    discountPrice: 135,
    discountPercent: 35,
    rating: 4.7,
    reviewsCount: 64,
    stockLeft: 4,
    totalStock: 25,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    tag: 'Tugamoqda',
  },
  {
    id: 'bp-4',
    name: 'Titanium Minimalist Smartwatch',
    slug: 'titanium-smartwatch',
    category: 'Gadjetlar',
    originalPrice: 380,
    discountPrice: 249,
    discountPercent: 34,
    rating: 4.9,
    reviewsCount: 210,
    stockLeft: 15,
    totalStock: 50,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
  },
];