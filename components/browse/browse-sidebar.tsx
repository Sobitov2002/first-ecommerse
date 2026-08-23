import React from 'react';
import { SlidersHorizontal, Layers, DollarSign } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const CATEGORIES = [
  'Barcha toifalar',
  'Elektronika',
  'Minimalist kiyimlar',
  'Ish stoli aksessuarlari',
  'Uy dekoratsiyasi'
];

export const BrowseSidebar = () => {
  return (
    <aside className="w-full lg:w-60 shrink-0">
      <div className="sticky top-24 space-y-6">
        
        {/* Kategoriyalar */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-muted-foreground font-space text-xs font-semibold uppercase tracking-wider">
            <Layers className="h-3.5 w-3.5" />
            <span>Kategoriyalar</span>
          </div>
          <ul className="space-y-1 text-sm font-sans">
            {CATEGORIES.map((category, index) => (
              <li key={category}>
                <button
                  className={`w-full text-left py-1.5 px-2.5 rounded-md text-xs transition-colors ${
                    index === 0
                      ? 'bg-muted text-foreground font-semibold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/40'
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Narx oralig'i */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-muted-foreground font-space text-xs font-semibold uppercase tracking-wider">
            <DollarSign className="h-3.5 w-3.5" />
            <span>Narx oralig'i</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="number"
              placeholder="Dan ($)"
              className="h-8 text-xs font-sans rounded-md bg-muted/20"
            />
            <Input
              type="number"
              placeholder="Gacha ($)"
              className="h-8 text-xs font-sans rounded-md bg-muted/20"
            />
          </div>
        </div>

      </div>
    </aside>
  );
};