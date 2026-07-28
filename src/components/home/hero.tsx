import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const STATS = [
  { label: 'Commandes livrées', value: '2,4 M+' },
  { label: 'Délai moyen', value: '< 15 min' },
  { label: 'Note moyenne', value: '4.9 / 5' },
  { label: 'Disponibilité', value: '99.9 %' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-radial-grid">
      <div className="absolute inset-0 bg-noise" />
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1.5 text-xs font-medium text-brand-300">
            <Zap size={12} />
            Livraison en moins de 15 minutes, en moyenne
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink-50 sm:text-6xl">
            Faites grandir votre audience,
            <br />
            <span className="text-gradient">une plateforme à la fois.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-ink-400 sm:text-lg">
            Followers, likes, vues et bien plus pour Instagram, TikTok, YouTube, Discord, Twitch,
            X et Facebook. Commandez en quelques secondes, suivez tout depuis votre tableau de
            bord.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/register">
              <Button size="lg" className="group">
                Commencer
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
            <Link href="/shop">
              <Button size="lg" variant="secondary">
                Explorer la boutique
              </Button>
            </Link>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-ink-500">
            <ShieldCheck size={14} className="text-success" />
            Paiement sécurisé · Stripe, PayPal & Crypto · Sans engagement
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl2 border border-base-700/60 bg-surface-raised/50 px-4 py-5 text-center backdrop-blur-sm"
            >
              <p className="font-mono text-2xl font-semibold text-ink-50">{s.value}</p>
              <p className="mt-1 text-xs text-ink-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HeroTrendIcon() {
  return <TrendingUp size={16} />;
}
