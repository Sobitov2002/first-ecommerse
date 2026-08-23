'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Compass, ArrowUpRight, Palette, Layers, Sparkles } from 'lucide-react';
import { DETAILED_COLLECTIONS } from '@/data/collections';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-background py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border/40 pb-6 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2">
              <Badge variant="secondary" className="font-space text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full">
                <Compass className="h-3 w-3 mr-1" />
                Curated Capsules // Lookbook
              </Badge>
              <span className="font-mono text-xs text-muted-foreground">
                [ MAXSUS TO‘PLAMLAR ]
              </span>
            </div>

            <h1 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              To‘plamlar & Lifestyle
            </h1>
          </div>

          <p className="font-sans text-xs sm:text-sm text-muted-foreground max-w-sm">
            Bir-biriga ideal darajada mos tushuvchi mahsulotlar ekotizimi va rang garmoniyalari.
          </p>
        </div>

        {/* LOOKBOOK BENTO EXPEDITION */}
        <div className="space-y-16">
          {DETAILED_COLLECTIONS.map((col, idx) => (
            <div 
              key={col.id}
              className="rounded-3xl border border-border/70 bg-card overflow-hidden shadow-sm hover:border-foreground/30 transition-all duration-300"
            >
              {/* Asosiy Katta To'plam Qopqog'i */}
              <div className="relative aspect-[21/9] min-h-[340px] w-full overflow-hidden">
                <Image
                  src={col.coverImage}
                  alt={col.title}
                  fill
                  className="object-cover object-center brightness-90 transition-transform duration-700 hover:scale-105"
                  sizes="100vw"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

                {/* Cover ustidagi meta */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="space-y-2 max-w-xl">
                    <Badge variant="outline" className="bg-background/80 backdrop-blur-md font-space text-[10px] uppercase px-3 py-0.5 border-border">
                      {col.edition}
                    </Badge>
                    <h2 className="font-space text-3xl sm:text-4xl font-bold text-foreground">
                      {col.title}
                    </h2>
                    <p className="font-sans text-xs sm:text-sm text-muted-foreground line-clamp-2">
                      {col.concept}
                    </p>
                  </div>

                  {/* Rang palitrasi indikatori */}
                  <div className="flex items-center gap-2 bg-background/80 backdrop-blur-md px-3 py-2 rounded-2xl border border-border/60">
                    <Palette className="h-3.5 w-3.5 text-muted-foreground" />
                    <div className="flex gap-1.5">
                      {col.palette.map((color) => (
                        <span 
                          key={color} 
                          className="h-4 w-4 rounded-full border border-border/40 shadow-inner"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* To'plam ichidagi mahsulotlar qatori */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-space text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    To‘plam tarkibi ({col.products.length} ta element)
                  </span>

                  <Link
                    href={`/browse?collection=${col.slug}`}
                    className="font-space text-xs font-semibold text-foreground flex items-center gap-1 hover:underline"
                  >
                    To‘liq to‘plamni xarid qilish <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {col.products.map((item) => (
                    <div 
                      key={item.id}
                      className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-muted/20 p-3 hover:bg-muted/40 transition"
                    >
                      <div className="relative h-16 w-16 rounded-xl overflow-hidden bg-muted shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" sizes="64px" />
                      </div>

                      <div className="flex-1 min-w-0 space-y-0.5">
                        <span className="font-mono text-[10px] text-muted-foreground uppercase">{item.tag}</span>
                        <h4 className="font-space text-xs font-bold text-foreground truncate group-hover:text-primary transition-colors">
                          {item.name}
                        </h4>
                        <span className="font-space text-xs font-semibold text-foreground">${item.price}</span>
                      </div>

                      <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full shrink-0">
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}