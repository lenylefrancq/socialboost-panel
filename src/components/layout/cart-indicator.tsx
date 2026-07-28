'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/context/cart-store';

export function CartIndicator() {
  const items = useCartStore((s) => s.items);

  return (
    <Link
      href="/cart"
      aria-label="Panier"
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-base-700 bg-base-800 text-ink-300 transition-colors hover:text-brand-300 hover:border-brand-500/40"
    >
      <ShoppingCart size={16} />
      {items.length > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 text-[10px] font-semibold text-white">
          {items.length}
        </span>
      )}
    </Link>
  );
}
