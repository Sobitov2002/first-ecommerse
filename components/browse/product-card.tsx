'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Star, ArrowUpRight } from 'lucide-react';
import { Product } from '@/data/all-products';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
  onAddToCart: (id: string) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden rounded-3xl border-border/60 bg-card hover:border-foreground/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <CardContent className="p-4 flex-1 flex flex-col justify-between space-y-4">
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-muted/20">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          />

          {product.isNew && (
            <div className="absolute top-2.5 left-2.5">
              <Badge variant="secondary" className="bg-background/90 backdrop-blur-md font-space text-[10px] px-2 py-0.5">
                Yangi Drop
              </Badge>
            </div>
          )}

         <Link
  href={`/shop/${product.id}`}
  className="absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-background/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition shadow-sm hover:scale-110"
>
  <ArrowUpRight className="h-3.5 w-3.5" />
</Link>
        </div>

        <div className="space-y-1.5 flex-1">
          <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
            <span className="uppercase">{product.category}</span>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              <span className="text-foreground font-semibold">{product.rating}</span>
            </div>
          </div>

          <Link href={`/shop/${product.id}`}>
  <h3 className="font-space text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
    {product.name}
  </h3>
</Link>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border/40">
          <div>
            <span className="font-space text-base font-bold text-foreground">${product.price}</span>
            {product.originalPrice && (
              <span className="font-space text-xs text-muted-foreground line-through ml-1.5">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <Button
            size="sm"
            variant="outline"
            onClick={() => onAddToCart(product.id)}
            className="h-8 rounded-full font-space text-xs gap-1 hover:bg-foreground hover:text-background transition px-3"
          >
            <Plus className="h-3 w-3" /> Savat
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};