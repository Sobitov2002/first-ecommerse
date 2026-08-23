import React from 'react';
import Link from 'next/link';
import { Search, ShoppingBag } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export const BrowseNavbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link href="/" className="font-space text-xl font-bold tracking-tight text-foreground">
            NEXUS<span className="text-muted-foreground font-light">.STORE</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 font-space text-sm font-medium text-muted-foreground">
            <Link href="/browse" className="text-foreground transition-colors hover:text-foreground">
              Katalog
            </Link>
            <Link href="/browse/new" className="transition-colors hover:text-foreground">
              Yangi kelganlar
            </Link>
            <Link href="/browse/collections" className="transition-colors hover:text-foreground">
              To'plamlar
            </Link>
          </nav>
        </div>

        {/* Qidiruv va Savatcha */}
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Mahsulotlarni qidirish..."
              className="h-9 pl-9 rounded-full bg-muted/40 font-sans text-xs border-border/60 focus-visible:ring-1"
            />
          </div>

          {/* Button o'rniga to'g'ridan-to'g'ri buttonVariants bilan Link */}
          <Link
            href="/cart"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'sm' }),
              'rounded-full font-space gap-2 h-9 px-4'
            )}
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Savatcha</span>
            <Badge variant="secondary" className="rounded-full px-1.5 py-0 text-[10px] font-mono">
              0
            </Badge>
          </Link>
        </div>

      </div>
    </header>
  );
};