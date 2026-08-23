export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  itemCount: number;
  iconName: 'LayoutGrid' | 'Laptop' | 'Shirt' | 'Lamp' | 'Sparkles' | 'Headphones';
  image: string; // Asosiy toifa rasmi
  productPreviews: string[]; // Toifaga oid namunaviy mahsulot rasmlari
  featured?: boolean;
}

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: 'all',
    name: 'Barcha toifalar',
    slug: 'all',
    description: 'Barcha minimalist lifestyle tovarlari bir joyda',
    itemCount: 128,
    iconName: 'LayoutGrid',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    productPreviews: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80',
    ],
  },
  {
    id: 'electronics',
    name: 'Elektronika & Gadjetlar',
    slug: 'electronics',
    description: 'Zamonaviy ish stoli va shaxsiy texnologiyalar',
    itemCount: 42,
    iconName: 'Laptop',
    featured: true,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    productPreviews: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&q=80',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=200&q=80',
    ],
  },
  {
    id: 'audio',
    name: 'Audio Qurilmalar',
    slug: 'audio',
    description: 'Minimalist naushniklar va akustik tizimlar',
    itemCount: 18,
    iconName: 'Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    productPreviews: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=200&q=80',
    ],
  },
  {
    id: 'apparel',
    name: 'Minimalist Kiyimlar',
    slug: 'apparel',
    description: 'Sifatli matodan tayyorlangan kundalik kiyimlar',
    itemCount: 35,
    iconName: 'Shirt',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&q=80',
    productPreviews: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=200&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=200&q=80',
    ],
  },
  {
    id: 'workspace',
    name: 'Ish Stoli Jihozlari',
    slug: 'workspace',
    description: 'Unumdorlikni oshiruvchi lampalar va aksessuarlar',
    itemCount: 24,
    iconName: 'Lamp',
    featured: true,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    productPreviews: [
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&q=80',
    ],
  },
  {
    id: 'accessories',
    name: 'Aksessuarlar',
    slug: 'accessories',
    description: 'Charm hamyonlar, soatlar va nozik detallar',
    itemCount: 15,
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    productPreviews: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&q=80',
    ],
  },
];