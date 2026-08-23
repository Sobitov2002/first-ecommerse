import React from 'react';
import Link from 'next/link';

export const BrowseFooter = () => {
  return (
    <footer className="w-full border-t border-border/40 bg-background/50 py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-3">
            <h4 className="font-space text-xs font-semibold uppercase tracking-wider text-foreground">
              Katalog
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition">Yangi tovarlar</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Ommabop</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Chegirmalar</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-space text-xs font-semibold uppercase tracking-wider text-foreground">
              Yordam
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition">Yetkazib berish</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Qaytarish siyosati</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Bog'lanish</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-space text-xs font-semibold uppercase tracking-wider text-foreground">
              Biz haqimizda
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition">Brend tarixi</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Hamkorlik</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-space text-xs font-semibold uppercase tracking-wider text-foreground">
              Yangiliklar
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Eng so'nggi kolleksiyalar va chegirmalardan birinchilardan bo'lib xabardor bo'ling.
            </p>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-border/30 pt-6 gap-4">
          <p className="font-space text-xs text-muted-foreground">
            © 2026 NEXUS Store. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex gap-6 font-space text-xs text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition">Maxfiylik</Link>
            <Link href="#" className="hover:text-foreground transition">Foydalanish shartlari</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};