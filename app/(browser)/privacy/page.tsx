import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, Bell, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const PRIVACY_SECTIONS = [
  {
    icon: Eye,
    title: "1. To'planadigan Ma'lumotlar",
    content:
      "Biz faqat xarid jarayonini amalga oshirish va xizmat sifatini oshirish uchun zarur bo'lgan ma'lumotlarni yig'amiz: ism, yetkazib berish manzili, elektron pochta va to'lov holati ma'lumotlari. To'lov karta rekvizitlari bizning serverlarda saqlanmaydi.",
  },
  {
    icon: Lock,
    title: "2. Ma'lumotlar Xavfsizligi",
    content:
      "Barcha shaxsiy ma'lumotlar zamonaviy SSL/TLS shifrlash protokollari orqali himoyalanadi. Sizning ma'lumotlaringiz uchinchi shaxslarga tijoriy yoki reklama maqsadlarida sotilmaydi va berilmaydi.",
  },
  {
    icon: Bell,
    title: "3. Cookie va Monitoring Fayllari",
    content:
      "Saytning xarid savatchasi holatini saqlash, foydalanuvchi tilini aniqlash va xizmat ko'rsatish sifatini yaxshilash maqsadida texnik cookie-fayllardan foydalanamiz.",
  },
];

export default function PrivacyPage() {
  return (
    <div className=" bg-background py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Ortga qaytish & Sarlavha */}
        <div className="space-y-4 border-b border-border/40 pb-8">
         

          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="font-space text-xs px-3 py-1 rounded-full">
              <ShieldCheck className="h-3.5 w-3.5 mr-1 text-emerald-500" />
              Yuridik Hujjat
            </Badge>
            <span className="font-mono text-xs text-muted-foreground">
              So'nggi yangilanish: 2026-yil
            </span>
          </div>

          <h1 className="font-space text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Maxfiylik Siyosati
          </h1>
          <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
            NEXUS STORE foydalanuvchilarining shaxsiy ma'lumotlari xavfsizligini ta'minlash va shaffoflikni eng yuqori darajada ushlab turishni kafolatlaydi.
          </p>
        </div>

        {/* Asosiy Moddalar */}
        <div className="space-y-8">
          {PRIVACY_SECTIONS.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 space-y-3 transition hover:border-foreground/20"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-foreground">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h2 className="font-space text-lg font-bold text-foreground">
                    {section.title}
                  </h2>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed pl-11">
                  {section.content}
                </p>
              </div>
            );
          })}
        </div>

        {/* Aloqa / Yordam paneli */}
        <div className="rounded-2xl border border-border/60 bg-muted/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-space text-sm font-semibold text-foreground">Savollaringiz bormi?</h3>
            <p className="font-sans text-xs text-muted-foreground">
              Maxfiylik siyosati bo'yicha qo'shimcha ma'lumot olish uchun biz bilan bog'laning.
            </p>
          </div>
          <Link
            href="mailto:support@nexus.store"
            className="h-9 px-5 rounded-full bg-foreground text-background font-space text-xs font-medium flex items-center justify-center shrink-0 hover:opacity-90 transition"
          >
            support@nexus.store
          </Link>
        </div>

      </div>
    </div>
  );
}