'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { CATEGORIES_DATA } from '@/data/categories';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';

export const CategoryGrid = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  const handleSelect = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug === 'all') params.delete('category');
    else params.set('category', slug);
    router.push(`/browse?${params.toString()}`);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
      {CATEGORIES_DATA.map((cat) => {
        const isActive = activeCategory === cat.slug;
        return (
          <div
            key={cat.id}
            onClick={() => handleSelect(cat.slug)}
            className={`group relative cursor-pointer overflow-hidden rounded-xl border p-3 transition-all hover:shadow-md ${
              isActive
                ? 'border-foreground bg-muted ring-1 ring-foreground'
                : 'border-border/60 bg-card hover:border-foreground/30'
            }`}
          >
            {/* Kategoriya rasmi */}
            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-muted mb-2.5">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
              />
              <div className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="rounded-full bg-background/80 p-1 backdrop-blur-sm shadow-sm">
                  <ArrowUpRight className="h-3 w-3 text-foreground" />
                </div>
              </div>
            </div>

            {/* Sarlavha va soni */}
            <div className="space-y-1">
              <h4 className="font-space text-xs font-semibold leading-tight text-foreground line-clamp-1">
                {cat.name}
              </h4>
              <p className="font-sans text-[11px] text-muted-foreground">
                {cat.itemCount} ta tovar
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};