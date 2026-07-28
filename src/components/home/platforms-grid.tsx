import Link from 'next/link';
import {
  Instagram,
  Youtube,
  Facebook,
  MessageSquare,
  Twitch,
  Music2,
  Twitter,
} from 'lucide-react';
import { PLATFORMS } from '@/data/catalog';
import type { Platform } from '@/types';

const ICONS: Record<Platform, React.ComponentType<{ size?: number; className?: string }>> = {
  INSTAGRAM: Instagram,
  TIKTOK: Music2,
  YOUTUBE: Youtube,
  DISCORD: MessageSquare,
  TWITCH: Twitch,
  X: Twitter,
  FACEBOOK: Facebook,
};

export function PlatformsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-ink-50 sm:text-4xl">
          Toutes vos plateformes, au même endroit
        </h2>
        <p className="mt-3 text-ink-400">
          Sélectionnez un réseau et choisissez parmi des dizaines de services conçus pour booster
          votre visibilité.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {PLATFORMS.map((platform) => {
          const Icon = ICONS[platform.key];
          return (
            <Link
              key={platform.key}
              href={`/shop/${platform.key.toLowerCase()}`}
              className="group relative overflow-hidden rounded-xl2 border border-base-700/60 bg-surface-raised/40 p-6 transition-all hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-glow-sm"
            >
              <div
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-10 blur-2xl transition-opacity group-hover:opacity-25"
                style={{ backgroundColor: platform.color }}
              />
              <Icon size={26} className="text-ink-100" />
              <p className="mt-4 font-display text-lg font-semibold text-ink-50">
                {platform.label}
              </p>
              <p className="mt-1 text-xs text-ink-500">Voir les services →</p>
            </Link>
          );
        })}
        <Link
          href="/shop"
          className="group flex flex-col items-center justify-center rounded-xl2 border border-dashed border-base-600 bg-transparent p-6 text-center transition-colors hover:border-brand-500/50"
        >
          <p className="font-display text-lg font-semibold text-ink-50">Voir tout</p>
          <p className="mt-1 text-xs text-ink-500">Catalogue complet →</p>
        </Link>
      </div>
    </section>
  );
}
