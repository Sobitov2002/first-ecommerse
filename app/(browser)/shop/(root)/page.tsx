'use client';

import React, { useState } from 'react';
import { SlidersHorizontal, Grid3X3, ArrowUpDown } from 'lucide-react';
import { ALL_PRODUCTS_DATA } from '@/data/all-products';
import { CATEGORIES_DATA } from '@/data/categories';
import { ProductCard } from '@/components/browse/product-card';
import { ShopNewArrivalsSidebar } from '@/components/browse/shop-new-arrivals-sidebar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function ShopPage() {
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  const filtered = ALL_PRODUCTS_DATA.filter((p) =>
    selectedCat === 'all' ? true : p.category.toLowerCase() === selectedCat.toLowerCase()
  ).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  const handleAddToCart = (id: string) => {
    // Savat logikasi
  };

  return (
    <div className="min-h-screen bg-background py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border/40 pb-6 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2">
              <Badge variant="secondary" className="font-space text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full">
                <Grid3X3 className="h-3 w-3 mr-1 text-primary" />
                Asosiy Do'kon
              </Badge>
              <span className="font-mono text-xs text-muted-foreground">
                [ BARCHA MAXSULOTLAR ]
              </span>
            </div>
            <h1 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Mahsulotlar Katalogi
            </h1>
          </div>

          {/* Saralash (Sort) Tugmalari */}
          <div className="flex items-center gap-2">
            <Button
              variant={sortBy === 'default' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setSortBy('default')}
              className="rounded-full font-space text-xs h-8"
            >
              Standart
            </Button>
            <Button
              variant={sortBy === 'price-asc' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setSortBy('price-asc')}
              className="rounded-full font-space text-xs h-8"
            >
              Narx: Arzonroq
            </Button>
            <Button
              variant={sortBy === 'price-desc' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setSortBy('price-desc')}
              className="rounded-full font-space text-xs h-8"
            >
              Narx: Qimmatroq
            </Button>
          </div>
        </div>

        {/* Asosiy Layout: Chap Sidebar + O'ng Katta Mahsulotlar Gridi */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CHAP SIDEBAR (4 ustun) */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* 1. Kategoriya Filtrlari */}
            <div className="rounded-3xl border border-border/60 bg-card p-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-space font-semibold uppercase tracking-wider text-muted-foreground">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span>Toifalar Bo'yicha</span>
              </div>
              
              <div className="space-y-1">
                {CATEGORIES_DATA.map((cat) => {
                  const isActive = selectedCat === cat.slug;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCat(cat.slug)}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition ${
                        isActive
                          ? 'bg-foreground text-background font-semibold'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      <span className="font-space">{cat.name}</span>
                      <span className="font-mono text-[10px] opacity-70">({cat.itemCount})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Yangi Kelgan Mahsulotlar Mini-Paneli */}
            <ShopNewArrivalsSidebar />

          </aside>

          {/* O'NG TOMON: Mahsulotlar Ro'yxati (8 ustun) */}
          <main className="lg:col-span-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground">
                Jami: <strong className="text-foreground">{filtered.length}</strong> ta tovar topildi
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </main>

        </div>

      </div>
    </div>
  );
}