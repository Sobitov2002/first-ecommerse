'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Cpu, Sparkles, ArrowUpRight, Plus, Check, ShieldCheck } from 'lucide-react';
import { COOLEST_GADGETS_DATA } from '@/data/coolest-gadgets';
import { Badge } from '@/components/ui/badge';

export const CoolestGadgets = () => {
  const [featured, second, third] = COOLEST_GADGETS_DATA;
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAddToCart = (id: string) => {
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <section className="w-full py-16 border-b border-border/40 bg-background relative overflow-hidden">
      {/* Orqa fondagi nozik tech grid effekti */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sarlavha: Editorial / Minimalist uslubda */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-border/40 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-space text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Laboratoriya Tanlovi // 2026
              </span>
            </div>
            <h2 className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Kelajak Avlod Gadjetlari
            </h2>
          </div>
          
          <div className="font-space text-xs text-muted-foreground font-mono">
            [ 03 TA INNOVATSION QURILMA ]
          </div>
        </div>

        {/* Asimmetrik Bento Layout (1 katta chapda, 2 ta ixcham gorizontal o'ngda) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* 1. ASOSIY QAHRAMON MAHSULOT (Chap tomon - 7 ustun) */}
          <div className="lg:col-span-7 rounded-3xl border border-border/70 bg-gradient-to-br from-card to-muted/30 p-6 sm:p-8 flex flex-col justify-between relative group overflow-hidden shadow-sm">
            
            {/* Yuqori meta qism */}
            <div className="flex items-center justify-between z-10">
              <Badge variant="outline" className="font-space text-xs px-3 py-1 bg-background/80 backdrop-blur-md rounded-full border-border">
                <Sparkles className="h-3.5 w-3.5 mr-1.5 text-amber-500" />
                {featured.badge}
              </Badge>
              <span className="font-mono text-xs text-muted-foreground">REF: #001</span>
            </div>

            {/* Markaziy interaktiv rasm maydoni */}
            <div className="my-8 relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-muted/20">
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
              
              {/* Rasm ustidagi narx va spec tegi */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-space uppercase text-muted-foreground block">Maxsus narx</span>
                  <span className="font-space text-3xl font-bold text-foreground tracking-tight">
                    ${featured.price}
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono border border-border">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                  2 Yil Kafolat
                </div>
              </div>
            </div>

            {/* Pastki tavsif va harakat */}
            <div className="space-y-4 z-10">
              <div>
                <h3 className="font-space text-2xl font-bold text-foreground">
                  {featured.name}
                </h3>
                <p className="font-sans text-sm text-muted-foreground mt-1">
                  {featured.tagline}
                </p>
              </div>

              {/* Spec chiplari */}
              <div className="flex flex-wrap gap-2 pt-1">
                {featured.specs.map((spec) => (
                  <span
                    key={spec.label}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border/50 bg-background/50 px-2.5 py-1 text-xs font-sans text-muted-foreground"
                  >
                    <span className="text-[10px] uppercase font-mono opacity-60">{spec.label}:</span>
                    <span className="font-medium text-foreground font-space">{spec.value}</span>
                  </span>
                ))}
              </div>

              {/* Tugma */}
              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => handleAddToCart(featured.id)}
                  className="flex-1 h-11 rounded-xl bg-foreground text-background font-space text-xs font-semibold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.99] transition"
                >
                  {addedId === featured.id ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" /> Savatga qo'shildi
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4" /> Savatga qo'shish
                    </>
                  )}
                </button>
                <Link
                  href={`/browse/product/${featured.slug}`}
                  className="h-11 w-11 rounded-xl border border-border flex items-center justify-center hover:bg-muted transition text-foreground"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>

          {/* 2 & 3. IKKINCHI DARAJALI GORIZONTAL PANELLAR (O'ng tomon - 5 ustun) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {[second, third].map((item, idx) => (
              <div
                key={item.id}
                className="flex-1 rounded-3xl border border-border/70 bg-card p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-center justify-between group hover:border-foreground/30 transition shadow-sm"
              >
                {/* Rasm (Kvadrat shaklda) */}
                <div className="relative w-full sm:w-36 aspect-square shrink-0 overflow-hidden rounded-2xl bg-muted/30">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 20vw"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="font-mono text-[9px] font-bold bg-foreground text-background px-1.5 py-0.5 rounded">
                      #{idx + 2}
                    </span>
                  </div>
                </div>

                {/* Info qismi */}
                <div className="w-full flex-1 flex flex-col justify-between h-full space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs font-space text-muted-foreground mb-1">
                      <span className="text-primary font-semibold text-[11px] uppercase tracking-wider">
                        {item.badge}
                      </span>
                      <span className="font-bold text-foreground text-base">${item.price}</span>
                    </div>

                    <h4 className="font-space text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {item.name}
                    </h4>
                    <p className="font-sans text-xs text-muted-foreground line-clamp-1 mt-0.5">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Kichik texnik parametr */}
                  <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                    <Cpu className="h-3 w-3 text-muted-foreground" />
                    <span className="truncate">{item.specs[0]?.label}: {item.specs[0]?.value}</span>
                  </div>

                 
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(item.id)}
                      className="flex-1 h-8 rounded-lg border border-border/80 bg-background hover:bg-foreground hover:text-background font-space text-xs font-medium transition flex items-center justify-center gap-1.5"
                    >
                      <Plus className="h-3 w-3" /> Savat
                    </button>
                    <Link
                      href={`/browse/product/${item.slug}`}
                      className="h-8 w-8 rounded-lg border border-border/80 flex items-center justify-center hover:bg-muted transition text-muted-foreground hover:text-foreground"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};