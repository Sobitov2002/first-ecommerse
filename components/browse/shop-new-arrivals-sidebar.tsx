import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ALL_PRODUCTS_DATA } from '@/data/all-products';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export const ShopNewArrivalsSidebar = () => {
  const newArrivals = ALL_PRODUCTS_DATA.filter((p) => p.isNew);

  return (
    <div className="rounded-3xl border border-border/60 bg-card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-amber-500" />
          <h3 className="font-space text-xs font-bold uppercase tracking-wider text-foreground">
            Yangi Kelganlar
          </h3>
        </div>
        <Badge variant="outline" className="font-mono text-[10px] px-2 py-0">
          {newArrivals.length} ta
        </Badge>
      </div>

      <Separator />

      <div className="space-y-3">
        {newArrivals.map((item) => (
          <Link
            key={item.id}
            href={`/browse/product/${item.slug}`}
            className="group flex items-center gap-3 rounded-xl p-2 transition hover:bg-muted/40"
          >
            <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-muted shrink-0">
              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="48px" />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="font-space text-xs font-bold text-foreground truncate group-hover:text-primary transition-colors">
                {item.name}
              </h4>
              <span className="font-space text-[11px] font-semibold text-foreground">
                ${item.price}
              </span>
            </div>

            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        ))}
      </div>
    </div>
  );
};