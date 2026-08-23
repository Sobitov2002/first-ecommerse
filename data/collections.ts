export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  itemCount: number;
  image: string;
  tag: string;
}

export const COLLECTIONS_DATA: CollectionItem[] = [
  {
    id: 'col-1',
    title: 'Monochrome Workspace',
    subtitle: 'Unumdorlik va diqqatni oshiruvchi minimalist ish stoli to‘plami',
    slug: 'monochrome-workspace',
    itemCount: 14,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80',
    tag: 'Capsule 01',
  },
  {
    id: 'col-2',
    title: 'Urban Commute Essentials',
    subtitle: 'Zamonaviy shahar hayoti uchun yengil va funksional aksessuarlar',
    slug: 'urban-commute',
    itemCount: 9,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    tag: 'Capsule 02',
  },
];