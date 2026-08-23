'use client';

import React, { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Star, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Minus, 
  Plus, 
  ShoppingBag, 
  ArrowLeft, 
  Check, 
  Sparkles 
} from 'lucide-react';
import { ALL_PRODUCTS_DATA } from '@/data/all-products';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = use(params);
  
  // Mahsulotni id yoki slug orqali qidiramiz
  const product = ALL_PRODUCTS_DATA.find(
    (p) => p.id === resolvedParams.id || p.slug === resolvedParams.id
  );

  if (!product) {
    notFound();
  }

  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [selectedColor, setSelectedColor] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Ortga qaytish havolasi */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-xs font-space text-muted-foreground hover:text-foreground transition"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Do‘konga qaytish
        </Link>

        {/* Asosiy Ekran: Chapda Galereya, O'ngda Buyurtma & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          
          {/* 1. CHAP TOMON: RASMLAR GALEREYASI (7 ustun) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-square sm:aspect-4/3 w-full rounded-3xl overflow-hidden border border-border/60 bg-muted/20">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                className="object-cover object-center transition-all duration-500"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />

              {product.isNew && (
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="gap-1 bg-background/90 backdrop-blur-md font-space text-xs px-3 py-1">
                    <Sparkles className="h-3 w-3 text-amber-500" />
                    Yangi Drop
                  </Badge>
                </div>
              )}
            </div>

            {/* Kichik Rasmlar (Thumbnails) */}
            {product.gallery.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative h-20 w-20 rounded-2xl overflow-hidden border transition-all shrink-0 ${
                      selectedImage === img
                        ? 'border-foreground ring-2 ring-foreground/25'
                        : 'border-border/60 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt={`Preview ${idx}`} fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 2. O'NG TOMON: MAHSULOT DETALLARI VA HARAKAT (5 ustun) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </span>

                <div className="flex items-center gap-1 bg-muted/50 px-2.5 py-1 rounded-full text-xs font-mono">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-foreground">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} sharh)</span>
                </div>
              </div>

              <h1 className="font-space text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-3 pt-1">
                <span className="font-space text-3xl font-bold text-foreground">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="font-space text-base text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <Separator />

            {/* Rang Tanlash */}
            {product.colors.length > 0 && (
              <div className="space-y-3">
                <span className="font-space text-xs font-semibold uppercase tracking-wider text-foreground block">
                  Rang: <strong className="font-normal text-muted-foreground">{product.colors[selectedColor]?.name}</strong>
                </span>

                <div className="flex items-center gap-2.5">
                  {product.colors.map((color, idx) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(idx)}
                      className={`h-8 w-8 rounded-full border transition-all flex items-center justify-center ${
                        selectedColor === idx
                          ? 'border-foreground ring-2 ring-foreground/25 scale-110'
                          : 'border-border/60 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    >
                      {selectedColor === idx && (
                        <Check className={`h-3.5 w-3.5 ${color.hex === '#FFFFFF' || color.hex === '#F2F2F7' || color.hex === '#E5E5EA' ? 'text-black' : 'text-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Miqdor & Savatga Qo'shish */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                
                <div className="flex items-center border border-border/80 rounded-full h-12 px-3 bg-muted/20">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="p-1 hover:text-foreground text-muted-foreground transition"
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </button>
                  <span className="font-space font-semibold text-sm w-8 text-center text-foreground">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="p-1 hover:text-foreground text-muted-foreground transition"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>

                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="flex-1 h-12 rounded-full font-space text-xs sm:text-sm font-semibold tracking-wide gap-2 transition active:scale-[0.99]"
                >
                  {isAdded ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" /> Savatga Qo‘shildi!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-4 w-4" /> Savatga Qo‘shish · ${(product.price * quantity)}
                    </>
                  )}
                </Button>

              </div>
            </div>

            {/* Kafolatlar */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border/40 text-center">
              <div className="p-3 rounded-2xl bg-muted/20 border border-border/40 space-y-1">
                <Truck className="h-4 w-4 mx-auto text-muted-foreground" />
                <span className="block font-space text-[10px] text-foreground font-semibold">Tezkor Pochta</span>
                <span className="block font-sans text-[10px] text-muted-foreground">2-4 kun</span>
              </div>
              <div className="p-3 rounded-2xl bg-muted/20 border border-border/40 space-y-1">
                <ShieldCheck className="h-4 w-4 mx-auto text-emerald-500" />
                <span className="block font-space text-[10px] text-foreground font-semibold">2 Yil Kafolat</span>
                <span className="block font-sans text-[10px] text-muted-foreground">Original tovar</span>
              </div>
              <div className="p-3 rounded-2xl bg-muted/20 border border-border/40 space-y-1">
                <RotateCcw className="h-4 w-4 mx-auto text-muted-foreground" />
                <span className="block font-space text-[10px] text-foreground font-semibold">14 Kun Qaytarish</span>
                <span className="block font-sans text-[10px] text-muted-foreground">Muammosiz</span>
              </div>
            </div>

          </div>

        </div>

        {/* 3. Xususiyatlar va Spetsifikatsiya */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-border/40">
          
          <div className="space-y-4">
            <h3 className="font-space text-lg font-bold text-foreground">
              Asosiy Xususiyatlar
            </h3>
            <ul className="space-y-2.5">
              {product.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-xs text-muted-foreground leading-relaxed">
                  <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3" />
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-space text-lg font-bold text-foreground">
              Texnik Parametrlar
            </h3>
            <div className="rounded-2xl border border-border/60 bg-card divide-y divide-border/40">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex items-center justify-between p-3.5 text-xs">
                  <span className="font-mono text-muted-foreground uppercase">{spec.label}</span>
                  <span className="font-space font-semibold text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}