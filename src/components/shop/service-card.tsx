'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { Clock, Link2, ShoppingCart } from 'lucide-react';
import type { Service } from '@/types';
import { calcServicePrice, formatCurrency, isValidUrl } from '@/lib/utils';
import { useCartStore } from '@/context/cart-store';
import { Button } from '@/components/ui/button';

export function ServiceCard({ service }: { service: Service }) {
  const [link, setLink] = useState('');
  const [quantity, setQuantity] = useState(service.minQuantity);
  const addItem = useCartStore((s) => s.addItem);

  const price = calcServicePrice(service.pricePer1000, quantity);
  const quantityValid = quantity >= service.minQuantity && quantity <= service.maxQuantity;
  const linkValid = isValidUrl(link);
  const canOrder = quantityValid && linkValid;

  function handleOrder() {
    if (!linkValid) {
      toast.error('Merci de coller un lien valide (https://...).');
      return;
    }
    if (!quantityValid) {
      toast.error(`La quantité doit être comprise entre ${service.minQuantity} et ${service.maxQuantity}.`);
      return;
    }
    addItem(service, link, quantity);
    toast.success('Ajouté au panier !');
    setLink('');
    setQuantity(service.minQuantity);
  }

  return (
    <div className="flex flex-col rounded-xl2 border border-base-700/60 bg-surface-raised/40 p-5 transition-colors hover:border-brand-500/30">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-medium text-ink-50">{service.name}</h3>
        <span className="shrink-0 rounded-md border border-base-600 bg-base-900 px-2 py-1 font-mono text-xs text-ink-300">
          {formatCurrency(service.pricePer1000)} / 1000
        </span>
      </div>

      <div className="mt-2 flex items-center gap-3 text-xs text-ink-500">
        <span>
          Min {service.minQuantity.toLocaleString('fr-FR')} · Max{' '}
          {service.maxQuantity.toLocaleString('fr-FR')}
        </span>
        <span className="flex items-center gap-1">
          <Clock size={12} />~{service.avgTimeHours}h
        </span>
      </div>

      <div className="mt-4 space-y-3">
        <div className="relative">
          <Link2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-500" />
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Lien du profil ou de la publication"
            className="w-full rounded-lg border border-base-600 bg-base-900 py-2 pl-9 pr-3 text-sm text-ink-50 placeholder:text-ink-500 focus:border-brand-500 focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-3">
          <input
            type="number"
            value={quantity}
            min={service.minQuantity}
            max={service.maxQuantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-28 rounded-lg border border-base-600 bg-base-900 px-3 py-2 text-sm text-ink-50 focus:border-brand-500 focus:outline-none"
          />
          <input
            type="range"
            min={service.minQuantity}
            max={service.maxQuantity}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="flex-1 accent-brand-500"
          />
        </div>

        {!quantityValid && (
          <p className="text-xs text-danger">
            Quantité entre {service.minQuantity} et {service.maxQuantity}.
          </p>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-base-700/60 pt-4">
        <div>
          <p className="text-[11px] text-ink-500">Prix total</p>
          <p className="font-mono text-lg font-semibold text-ink-50">{formatCurrency(price)}</p>
        </div>
        <Button size="sm" disabled={!canOrder} onClick={handleOrder}>
          <ShoppingCart size={14} />
          Commander
        </Button>
      </div>
    </div>
  );
}
