'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Flame, Star, ShoppingBag, ArrowRight, Clock } from 'lucide-react';
import { BEST_PRICES_DATA } from '@/data/best-prices';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const BestPrices = () => {
  return (
    <section className="w-full py-8 border-b border-border/40">
      <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-2">
        
        {/* Sarlavha & Countdown Qismi */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-space font-semibold uppercase tracking-wider text-rose-500">
              <Flame className="h-4 w-4 fill-rose-500" />
              <span>Eng Yaxshi Narxlar</span>
            </div>
            <h2 className="font-space text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Cheklangan Muddatli Takliflar
            </h2>
          </div>

          {/* Mini Taymer & Barchasini ko'rish */}
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3.5 py-1.5 text-xs font-space">
              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-muted-foreground">Tugashiga:</span>
              <span className="font-mono font-bold text-foreground">14:22:08</span>
            </div>

            <Link
              href="/browse/deals"
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'sm' }),
                'font-space text-xs gap-1 hover:bg-muted'
              )}
            >
              Barchasi <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Mahsulotlar Gridi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BEST_PRICES_DATA.map((item) => {
            const stockProgress = (item.stockLeft / item.totalStock) * 100;

            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-3.5 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5"
              >
                {/* Rasm maydoni */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted/50">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Chegirma foizi belgisi */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="font-mono text-[11px] font-bold bg-foreground text-background px-2 py-1 rounded-md shadow-sm">
                      -{item.discountPercent}%
                    </span>
                  </div>

                  {/* Maxsus teg (agar bor bo'lsa) */}
                  {item.tag && (
                    <div className="absolute top-2.5 right-2.5">
                      <Badge variant="secondary" className="font-space text-[10px] px-2 py-0.5 backdrop-blur-md bg-background/80">
                        {item.tag}
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Mahsulot ma'lumotlari */}
                <div className="pt-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] text-muted-foreground font-space">
                      <span>{item.category}</span>
                      <div className="flex items-center gap-1 text-foreground">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        <span className="font-semibold">{item.rating}</span>
                        <span className="text-muted-foreground">({item.reviewsCount})</span>
                      </div>
                    </div>

                    <h3 className="font-space text-sm font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  {/* Narxlar */}
                  <div className="space-y-3">
                    <div className="flex items-baseline gap-2">
                      <span className="font-space text-lg font-bold text-foreground">
                        ${item.discountPrice}
                      </span>
                      <span className="font-space text-xs text-muted-foreground line-through">
                        ${item.originalPrice}
                      </span>
                    </div>

                    {/* Stock Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-space text-muted-foreground">
                        <span>Qoldi: <strong className="text-foreground">{item.stockLeft} ta</strong></span>
                        <span>{Math.round(stockProgress)}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-foreground rounded-full transition-all duration-300"
                          style={{ width: `${stockProgress}%` }}
                        />
                      </div>
                    </div>

                    {/* Savatga qo'shish tugmasi */}
                    <button
                      type="button"
                      className="w-full flex items-center justify-center gap-2 h-9 rounded-xl border border-border/80 bg-background font-space text-xs font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background active:scale-[0.98]"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
                      Savatga qo'shish
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};