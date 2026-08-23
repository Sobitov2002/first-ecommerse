'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'Katalog', href: '/catalog' },
  { name: 'Yangi kelganlar', href: '/shop' },
  { name: "To'plamlar", href: '/tops' },
];

export const BrowseNavbar = () => {
  const pathname = usePathname();


  const checkIsActive = (href: string) => {
    if (!pathname) return false;
    
    
    if (href === '/catalog') {
      return pathname === '/catalog' || pathname === '/catalog/';
    }
    
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo & Navigatsiya */}
        <div className="flex items-center gap-8">
          <Link href="/" className="font-space text-xl font-bold tracking-tight text-foreground transition hover:opacity-80">
            NEXUS<span className="text-muted-foreground font-light">.STORE</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2 font-space text-sm font-medium">
            {NAV_LINKS.map((link) => {
              const isActive = checkIsActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200',
                    isActive
                      ? 'bg-foreground text-background font-semibold shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
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

          <Link
            href="/cart"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'sm' }),
              'rounded-full font-space gap-2 h-9 px-4',
              pathname === '/cart' && 'bg-muted border-foreground/40'
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