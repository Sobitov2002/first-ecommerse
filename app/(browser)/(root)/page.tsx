import React from 'react';
import { BrowseHero } from './_components/browse-hero';
import { CategoryGrid } from './_components/category-grid';
import { BestPrices } from './_components/best-prices';
import { CoolestGadgets } from './_components/coolest-gadgets';
import { CuratedCollections } from './_components/curated-collections';

export default function BrowsePage() {
  return (
    <div>
      <BrowseHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <div>
          <h3 className="font-space text-lg font-bold tracking-tight mb-4 text-foreground">
            Kategoriyalar bo‘yicha ko‘rish
          </h3>
          <CategoryGrid />
        </div>
        <BestPrices />
        <CoolestGadgets />
        <CuratedCollections />
      </div>
    </div>
  );
}