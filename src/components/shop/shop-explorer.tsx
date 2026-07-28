'use client';

import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import { CATALOG, PLATFORMS, groupByCategory } from '@/data/catalog';
import type { Platform } from '@/types';
import { ServiceCard } from './service-card';

export function ShopExplorer({ initialPlatform }: { initialPlatform?: Platform }) {
  const [platform, setPlatform] = useState<Platform>(initialPlatform ?? 'INSTAGRAM');
  const [search, setSearch] = useState('');

  const services = useMemo(() => {
    const byPlatform = CATALOG.filter((s) => s.platform === platform);
    if (!search.trim()) return byPlatform;
    return byPlatform.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));
  }, [platform, search]);

  const grouped = useMemo(() => groupByCategory(services), [services]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {PLATFORMS.map((p) => (
          <button
            key={p.key}
            onClick={() => setPlatform(p.key)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
              platform === p.key
                ? 'border-brand-500 bg-brand-500/15 text-brand-200'
                : 'border-base-700 bg-base-900 text-ink-400 hover:text-ink-100'
            )}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="mt-5">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher un service..."
          className="w-full max-w-sm rounded-lg border border-base-600 bg-base-900 px-4 py-2.5 text-sm text-ink-50 placeholder:text-ink-500 focus:border-brand-500 focus:outline-none"
        />
      </div>

      <div className="mt-8 space-y-10">
        {grouped.length === 0 && (
          <p className="text-sm text-ink-500">Aucun service ne correspond à votre recherche.</p>
        )}
        {grouped.map(([category, items]) => (
          <div key={category}>
            <h2 className="font-display text-xl font-semibold text-ink-50">{category}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
