import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const BrowseFooter = () => {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Asosiy Yuqori Qism */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brend & Qisqa Manifesto */}
          <div className="md:col-span-5 space-y-3">
            <Link href="/" className="font-space text-lg font-bold tracking-tight text-foreground">
              NEXUS<span className="text-muted-foreground font-light">.STORE</span>
            </Link>
            <p className="font-sans text-xs text-muted-foreground leading-relaxed max-w-sm">
              Geo-minimalizm, yuqori sifat va innovatsion estetika uyg'unligi. Kundalik muhitingiz uchun puxta o'ylangan mahsulotlar.
            </p>
          </div>

          {/* Navigatsiya Linklari */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-space text-[11px] font-semibold uppercase tracking-wider text-foreground block">
              Navigatsiya
            </span>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <Link href="/browse" className="text-muted-foreground hover:text-foreground transition">
                  Katalog
                </Link>
              </li>
              <li>
                <Link href="/browse/deals" className="text-muted-foreground hover:text-foreground transition">
                  Chegirmalar
                </Link>
              </li>
              <li>
                <Link href="/browse/collections" className="text-muted-foreground hover:text-foreground transition">
                  To'plamlar
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Obunasi */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-space text-[11px] font-semibold uppercase tracking-wider text-foreground block">
              Yangiliklar
            </span>
            <div className="flex items-center gap-2">
              <Input
                type="email"
                placeholder="Email manzilingiz"
                className="h-9 text-xs font-sans rounded-full bg-muted/30 border-border/60"
              />
              <Button size="sm" className="rounded-full h-9 px-4 font-space text-xs">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>

        </div>

        {/* Pastki Qism: Mualliflik huquqi & Tarmoqlar */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-border/30 pt-6 gap-4 text-xs font-space text-muted-foreground">
          
          <p>© 2026 NEXUS Store. Barcha huquqlar himoyalangan.</p>

          {/* Ijtimoiy tarmoqlar (SVG) */}
          <div className="flex items-center gap-4 text-muted-foreground">
            {/* X / Twitter */}
            <Link href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>

            {/* Instagram */}
            <Link href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition">
              <svg className="h-4 w-4 fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </Link>

            {/* GitHub */}
            <Link href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </Link>
          </div>

          {/* Maxfiylik & Shartlar */}
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground transition">
              Maxfiylik
            </Link>
            <Link href="/terms" className="hover:text-foreground transition">
              Shartlar
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
};