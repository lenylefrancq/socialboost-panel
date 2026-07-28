import { Star } from 'lucide-react';
import Link from 'next/link';

export const TESTIMONIALS = [
  {
    name: 'Camille R.',
    role: 'Créatrice de contenu Instagram',
    rating: 5,
    text: "Livraison ultra rapide et le support a répondu en quelques minutes. Mon compte a vraiment décollé après la commande de Reels Views.",
  },
  {
    name: 'Marco T.',
    role: 'Gérant e-commerce',
    rating: 5,
    text: "J'utilise SocialBoost pour lancer chaque nouvelle campagne TikTok. Le tableau de bord est clair et les prix sont honnêtes.",
  },
  {
    name: 'Sarah B.',
    role: 'Streameuse Twitch',
    rating: 4,
    text: "Bon rapport qualité-prix sur les viewers live. Une commande a pris un peu plus de temps que prévu mais le support a été réactif.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-ink-50 sm:text-4xl">
          Ils font confiance à SocialBoost
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="rounded-xl2 border border-base-700/60 bg-surface-raised/40 p-6"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < t.rating ? 'fill-warning text-warning' : 'text-base-600'}
                />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-300">“{t.text}”</p>
            <div className="mt-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500/15 font-display text-sm font-semibold text-brand-300">
                {t.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-medium text-ink-50">{t.name}</p>
                <p className="text-xs text-ink-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/reviews" className="text-sm font-medium text-brand-300 hover:text-brand-200">
          Voir tous les avis →
        </Link>
      </div>
    </section>
  );
}
