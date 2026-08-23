'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus, ArrowLeft, ArrowUpRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { ALL_PRODUCTS_DATA } from '@/data/all-products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

// Namuna uchun savatdagi boshlang'ich mahsulotlar (real loyihada Zustand yoki Context ishlatiladi)
interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'cart-1',
      productId: 'prod-1',
      name: ALL_PRODUCTS_DATA[0].name,
      price: ALL_PRODUCTS_DATA[0].price,
      image: ALL_PRODUCTS_DATA[0].image,
      category: ALL_PRODUCTS_DATA[0].category,
      quantity: 1,
    },
    {
      id: 'cart-2',
      productId: 'prod-2',
      name: ALL_PRODUCTS_DATA[1].name,
      price: ALL_PRODUCTS_DATA[1].price,
      image: ALL_PRODUCTS_DATA[1].image,
      category: ALL_PRODUCTS_DATA[1].category,
      quantity: 2,
    },
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 15 : 0;
  const total = subtotal - discount + shipping;

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'NEXUS2026') {
      setDiscount(20);
    } else {
      alert('Noto‘g‘ri promo-kod!');
    }
  };

  return (
    <div className="min-h-screen bg-background py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Sarlavha qismi */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-border/40 pb-6 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2">
              <Badge variant="secondary" className="font-space text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full">
                <ShoppingBag className="h-3 w-3 mr-1 text-primary" />
                Savat
              </Badge>
              <span className="font-mono text-xs text-muted-foreground">
                [ {cartItems.length} TA MAHSULOT ]
              </span>
            </div>
            <h1 className="font-space text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Sizning Savatingiz
            </h1>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs font-space text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Xaridni davom ettirish
          </Link>
        </div>

        {cartItems.length === 0 ? (
          /* Bo'sh savat holati */
          <div className="rounded-3xl border border-dashed border-border/80 p-16 text-center space-y-4 max-w-xl mx-auto">
            <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center mx-auto text-muted-foreground">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <h3 className="font-space text-xl font-bold text-foreground">Savatingiz bo'sh</h3>
            <p className="font-sans text-xs text-muted-foreground">
              Hozircha savatchaga hech qanday mahsulot qo'shmagansiz. Do'kondan o'zingizga yoqqan tovarlarni tanlang.
            </p>
            <div className="pt-2">
              <Link
                href="/shop"
                className="inline-flex h-8 items-center justify-center rounded-full bg-primary px-8 font-space text-xs font-medium text-primary-foreground transition-all hover:bg-primary/80"
              >
                Do'konga o'tish
              </Link>
            </div>
          </div>
        ) : (
          /* To'ldirilgan savat (Grid layout) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Mahsulotlar Ro'yxati (7 ustun) */}
            <div className="lg:col-span-7 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-3xl border border-border/60 bg-card p-4 sm:p-5 gap-4 transition hover:border-foreground/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-2xl overflow-hidden bg-muted/30 shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="96px" />
                    </div>

                    <div className="space-y-1">
                      <span className="font-mono text-[10px] text-muted-foreground uppercase">{item.category}</span>
                      <h3 className="font-space text-sm sm:text-base font-bold text-foreground line-clamp-1">
                        {item.name}
                      </h3>
                      <span className="font-space text-sm font-semibold text-foreground block pt-1">
                        ${item.price}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full sm:w-auto gap-4 pt-2 sm:pt-0 border-t sm:border-t-0 border-border/40">
                    {/* Miqdor tugmalari */}
                    <div className="flex items-center border border-border/80 rounded-full h-10 px-2.5 bg-muted/20">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="p-1 text-muted-foreground hover:text-foreground transition"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="font-space font-semibold text-xs w-6 text-center text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="p-1 text-muted-foreground hover:text-foreground transition"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    {/* O'chirish tugmasi */}
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="h-9 w-9 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-rose-500 hover:border-rose-500/40 transition"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Buyurtma Xulosasi (Checkout Summary - 5 ustun) */}
            <div className="lg:col-span-5 rounded-3xl border border-border/60 bg-card p-6 sm:p-8 space-y-6">
              <h3 className="font-space text-lg font-bold text-foreground">
                Buyurtma Tafsilotlari
              </h3>

              <div className="space-y-3 font-sans text-xs">
                <div className="flex justify-between text-muted-foreground">
                  <span>Oraliq summa</span>
                  <span className="font-space font-semibold text-foreground">${subtotal}</span>
                </div>

                <div className="flex justify-between text-muted-foreground">
                  <span>Yetkazib berish (Standard)</span>
                  <span className="font-space font-semibold text-foreground">${shipping}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-emerald-500">
                    <span>Chegirma (Promo)</span>
                    <span className="font-space font-semibold">-${discount}</span>
                  </div>
                )}
              </div>

              <Separator />

              {/* Promo-kod kiritish */}
              <div className="space-y-2">
                <span className="font-space text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block">
                  Promo-kod
                </span>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Masalan: NEXUS2026"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="h-10 text-xs font-sans rounded-xl bg-muted/30"
                  />
                  <Button
                    variant="outline"
                    onClick={handleApplyPromo}
                    className="h-10 rounded-xl font-space text-xs px-4"
                  >
                    Qo'llash
                  </Button>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between items-baseline">
                <span className="font-space text-sm font-bold text-foreground">Jami to'lov</span>
                <span className="font-space text-2xl font-bold text-foreground">${total}</span>
              </div>

              <Button
                size="lg"
                className="w-full h-12 rounded-full font-space text-xs sm:text-sm font-semibold tracking-wide gap-2"
              >
                Buyurtmani Rasmiylashtirish <ArrowUpRight className="h-4 w-4" />
              </Button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground font-mono pt-1">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                Xavfsiz shifrlangan to'lov tizimi
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}