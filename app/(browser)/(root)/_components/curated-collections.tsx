'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Compass } from 'lucide-react';
import { DETAILED_COLLECTIONS } from '@/data/collections';
import { Badge } from '@/components/ui/badge';

export const CuratedCollections = () => {
  return (
    <section className="w-full pt-14 pb-8">
      {/* Sarlavha */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-border/40 gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-space font-semibold uppercase tracking-widest text-muted-foreground">
            <Compass className="h-4 w-4" />
            <span>Kolleksiyalar & Lookbook</span>
          </div>
          <h2 className="font-space text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Tanlangan Lifestyle To‘plamlar
          </h2>
        </div>

        <Link
          href="/browse/collections"
          className="font-space text-xs font-semibold text-muted-foreground hover:text-foreground transition flex items-center gap-1"
        >
          Barcha to‘plamlar <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* 2 ta Katta Editorial Kapsula Banneri */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DETAILED_COLLECTIONS.map((col) => (
          <Link
            key={col.id}
            href={`/browse/collections/${col.slug}`}
            className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card p-6 sm:p-8 flex flex-col justify-between min-h-90 sm:min-h-105 transition-all duration-500 hover:border-foreground/30 hover:shadow-xl"
          >
            {/* Fon Rasmi + Qoramtir Gradient Overlay */}
            <Image
                 src={col.coverImage}
              alt={col.title}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent opacity-90 transition-opacity group-hover:opacity-80" />

            {/* Yuqori Badge va Mahsulotlar Soni */}
            <div className="relative z-10 flex items-center justify-between">
              <Badge variant="outline" className="bg-background/80 backdrop-blur-md font-space text-[11px] px-3 py-1 border-border">
                   {col.edition}
              </Badge>
              <span className="font-mono text-xs text-muted-foreground bg-background/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-border/60">
                {col.itemCount} ta tovar
              </span>
            </div>

            {/* Pastki Matn va Havola */}
            <div className="relative z-10 space-y-3 pt-12">
              <div>
                <h3 className="font-space text-2xl sm:text-3xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                  {col.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-muted-foreground mt-1 max-w-md line-clamp-2">
                     {col.concept}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 font-space text-xs font-semibold text-foreground">
                <span>To‘plamni ko‘rish</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>    
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};