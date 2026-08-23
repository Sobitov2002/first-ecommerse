import React from 'react';
import Link from 'next/link';
import { FileText, CheckCircle2, RefreshCw, AlertCircle, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const TERMS_SECTIONS = [
  {
    icon: CheckCircle2,
    title: '1. Buyurtma va To‘lovlar',
    content:
      'Buyurtma berish orqali foydalanuvchi taqdim etilgan mahsulot narxi, yetkazib berish xarajatlari va to‘lov shartlariga to‘liq rozilik bildiradi. Barcha narxlar platformada ko‘rsatilgan valyutada hisoblanadi.',
  },
  {
    icon: RefreshCw,
    title: '2. Qaytarish va Kafolat',
    content:
      'Tovarni qabul qilib olgan kundan boshlab 14 kun ichida, mahsulotning asl qadoqlari, tovar ko‘rinishi va to‘lov cheki saqlangan holatda qaytarish yoki almashtirish huquqiga egasiz.',
  },
  {
    icon: AlertCircle,
    title: '3. Mualliflik Huquqlari',
    content:
      'NEXUS STORE saytidagi barcha grafik elementlar, logotiplar, dizayn namunalari va matnlar intellektual mulk hisoblanadi. Ulardan ruxsatsiz nusxa ko‘chirish va tijoriy foydalanish taqiqlanadi.',
  },
];

export default function TermsPage() {
  return (
    <div className=" bg-background py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Sarlavha qismi */}
        <div className="space-y-4 border-b border-border/40 pb-8">

          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="font-space text-xs px-3 py-1 rounded-full">
              <FileText className="h-3.5 w-3.5 mr-1 text-primary" />
              Kelishuv Shartlari
            </Badge>
            <span className="font-mono text-xs text-muted-foreground">
              Kuchga kirish sanasi: 2026-yil
            </span>
          </div>

          <h1 className="font-space text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Foydalanish Shartlari
          </h1>
          <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
            NEXUS STORE platformasidan foydalanish orqali siz ushbu shartlar va qoidalarga avtomatik tarzda rozilik bildirasiz.
          </p>
        </div>

        {/* Shartlar Moddalari */}
        <div className="space-y-8">
          {TERMS_SECTIONS.map((section) => {
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

        {/* Xulosa Blok */}
        <div className="rounded-2xl border border-dashed border-border p-6 text-center text-xs font-mono text-muted-foreground">
          Shartlar oldindan ogohlantirishsiz xizmat talablariga mos holda yangilanishi mumkin.
        </div>

      </div>
    </div>
  );
}
