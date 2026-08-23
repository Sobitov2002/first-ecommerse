
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const BrowseHero = () => {
  return (
    <section className="relative w-full border-b border-border/40 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center min-h-[460px]">
        
        {/* Chap qism: Matn va Tugmalar */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-10 lg:py-14 space-y-6 z-10">
          <div className="inline-flex items-center">
            <Badge variant="secondary" className="gap-1.5 py-1 px-3 rounded-full font-space text-xs tracking-wider uppercase font-semibold">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Yangi To'plam 2026
            </Badge>
          </div>

          <h1 className="font-space text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.08]">
            Kelajak Estetikasi.<br />
            Sizning <span className="font-light text-muted-foreground">Fazingizda.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
            Nexus Store geo-minimalizm va aqlli dizayn uyg'unligini taqdim etadi. Kundalik hayotingizni yuqori sifatli, kreativ yechimlar bilan boyiting.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button size="lg"  className="rounded-full font-space text-xs sm:text-sm font-semibold tracking-wide px-8 h-11 gap-2">
              <Link className="flex items-center gap-2" href="/browse">
                 Xarid Qilish
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline"  className="rounded-full font-space text-xs sm:text-sm font-semibold tracking-wide px-8 h-11 border-border/80">
              <Link href="/browse/collections">
                To'plamlarni Ko'rish
              </Link>
            </Button>
          </div>
        </div>

        {/* O'ng qism: Rasm + Gradient Mask */}
        <div className="lg:col-span-6 xl:col-span-5 relative w-full h-[360px] lg:h-[460px]">
          <Image
            src="/images/hero-banner.png"
            alt="Nexus Store to'plami"
            fill
            className="object-cover object-left"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {/* Chap qirradagi to'rtburchak chiziqni oq fonga yumshatuvchi mask */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent hidden lg:block" />
        </div>

      </div>
    </section>
  );
};