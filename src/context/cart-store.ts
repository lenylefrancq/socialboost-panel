'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, Service } from '@/types';
import { calcServicePrice } from '@/lib/utils';

interface CartState {
  items: CartItem[];
  addItem: (service: Service, link: string, quantity: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clear: () => void;
  total: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (service, link, quantity) => {
        const total = calcServicePrice(service.pricePer1000, quantity);
        const item: CartItem = {
          id: `${service.id}-${Date.now()}`,
          service,
          link,
          quantity,
          total,
        };
        set({ items: [...get().items, item] });
      },
      removeItem: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
      updateQuantity: (id, quantity) =>
        set({
          items: get().items.map((i) =>
            i.id === id
              ? { ...i, quantity, total: calcServicePrice(i.service.pricePer1000, quantity) }
              : i
          ),
        }),
      clear: () => set({ items: [] }),
      total: () => get().items.reduce((sum, i) => sum + i.total, 0),
    }),
    { name: 'socialboost-cart' }
  )
);
