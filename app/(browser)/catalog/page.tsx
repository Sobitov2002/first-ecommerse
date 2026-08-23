'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  LayoutGrid, 
  Laptop, 
  Shirt, 
  Lamp, 
  Sparkles, 
  Headphones, 
  ArrowUpRight, 
  Boxes,
  LucideIcon 
} from 'lucide-react';
import { CATEGORIES_DATA } from '@/data/categories';
import { Badge } from '@/components/ui/badge';

const iconMap: Record<string, LucideIcon> = {
  LayoutGrid,
  Laptop,
  Shirt,
  Lamp,
  Sparkles,
  Headphones,
};

export default function CategoriesPage() {
  const categories = CATEGORIES_DATA.filter((c) => c.id !== 'all');
  const [activeId, setActiveId] = useState<string>(categories[0]?.id || '');

  return (
    <div className="min-h-screen bg-background py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Yuqori Sarlavha & Boshqaruv Metasi */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border/40 pb-6 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2">
              <Badge variant="secondary" className="gap-1.5 font-space text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full">
                <Boxes className="h-3 w-3 text-primary" />
                Interaktiv Arxiv
              </Badge>
              <span className="font-mono text-xs text-muted-foreground">
                [ FOCUS REJIMI ]
              </span>
            </div>

            <h1 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Toifalar Ekotizimi
            </h1>
          </div>

          <p className="font-sans text-xs sm:text-sm text-muted-foreground max-w-sm leading-relaxed">
            Har bir bo‘lim ustiga kursorni olib boring va uning eksklyuziv mahsulotlari hamda atmosferasini kashf eting.
          </p>
        </div>

        {/* 1. DESKTOP: KINETIC EXPANDABLE ACCORDION (Yengil va silliq) */}
        <div className="hidden lg:flex gap-3 h-130 w-full">
          {categories.map((cat, index) => {
            const Icon = iconMap[cat.iconName] || Boxes;
            const isExpanded = activeId === cat.id;

            return (
              <div
                key={cat.id}
                onMouseEnter={() => setActiveId(cat.id)}
                className={`relative rounded-3xl overflow-hidden border border-border/60 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between p-6 cursor-pointer ${
                  isExpanded 
                    ? 'flex-[3.5] bg-card shadow-2xl border-foreground/30' 
                    : 'flex-1 bg-muted/30 hover:bg-muted/50'
                }`}
              >
                {/* Fon Rasmi (Faqat kengayganda to'liq tiniqlashadi) */}
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className={`object-cover object-center transition-all duration-700 ${
                    isExpanded 
                      ? 'scale-100 opacity-30 filter-none' 
                      : 'scale-110 opacity-10 grayscale'
                  }`}
                  sizes="40vw"
                  priority={index === 0}
                />
                
                <div className="absolute inset-0 bg-linear-to-t from-background via-background to-transparent" />

                {/* Yuqori Panel: Indeks va Ikonka */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-2xl transition-colors duration-300 ${
                    isExpanded ? 'bg-foreground text-background' : 'bg-background/80 text-foreground'
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="font-mono text-xs font-bold text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>

                {/* Pastki Kontent */}
                <div className="relative z-10 space-y-4">
                  {/* Qisqartirilgan holatdagi vertikal yozuv */}
                  {!isExpanded && (
                    <div className="py-4">
                      <h3 className="font-space text-base font-bold text-foreground truncate">
                        {cat.name}
                      </h3>
                      <p className="font-mono text-[11px] text-muted-foreground mt-1">
                        {cat.itemCount} tovar
                      </p>
                    </div>
                  )}

           
                  {isExpanded && (
                    <div className="space-y-4 animate-in fade-in duration-500">
                      <div className="space-y-1">
                        <Badge variant="outline" className="font-mono text-[10px] bg-background/50 border-border/80">
                          {cat.itemCount} ta tanlangan mahsulot
                        </Badge>
                        <h2 className="font-space text-2xl xl:text-3xl font-bold text-foreground">
                          {cat.name}
                        </h2>
                        <p className="font-sans text-xs text-muted-foreground leading-relaxed max-w-md">
                          {cat.description}
                        </p>
                      </div>

                      {/* Mini Prevyu Galereyasi */}
                      <div className="flex items-center gap-2 pt-1">
                        {cat.productPreviews.map((img, i) => (
                          <div
                            key={i}
                            className="relative h-12 w-12 rounded-xl overflow-hidden border border-border bg-background/80"
                          >
                            <Image src={img} alt="Mini" fill className="object-cover" sizes="48px" />
                          </div>
                        ))}
                      </div>

                      {/* To'plamga kirish tugmasi */}
                      <div className="pt-2">
                        <Link
                          href={`/browse?category=${cat.slug}`}
                          className="inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-6 text-xs font-space font-semibold text-background transition hover:opacity-90 active:scale-95"
                        >
                          To'plamni ko'rish
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* 2. MOBIL & PLANSHET: INTERAKTIV CARD STACK */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {categories.map((cat, index) => {
            const Icon = iconMap[cat.iconName] || Boxes;

            return (
              <Link
                key={cat.id}
                href={`/browse?category=${cat.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-5 flex flex-col justify-between min-h-65 active:scale-[0.98] transition-transform"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/70 to-transparent" />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-background/80 text-foreground">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                </div>

                <div className="relative z-10 space-y-2">
                  <h3 className="font-space text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>
                  <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span>{cat.itemCount} ta tovar</span>
                    <ArrowUpRight className="h-4 w-4 text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}