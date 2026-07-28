import Link from 'next/link';
import { Zap } from 'lucide-react';
import { PLATFORMS } from '@/data/catalog';

const FOOTER_LINKS = {
  Produit: [
    { href: '/shop', label: 'Boutique' },
    { href: '/dashboard', label: 'Tableau de bord' },
    { href: '/reviews', label: 'Avis clients' },
  ],
  Support: [
    { href: '/#faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ],
  Légal: [
    { href: '/terms', label: "Conditions d'utilisation" },
    { href: '/privacy', label: 'Politique de confidentialité' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-base-700/60 bg-base-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-700">
                <Zap size={16} className="text-white" fill="white" />
              </span>
              <span className="font-display text-lg font-bold text-ink-50">
                Social<span className="text-brand-400">Boost</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-ink-400">
              La plateforme premium pour développer votre présence sur les réseaux sociaux —
              rapide, fiable et sécurisée.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {PLATFORMS.map((p) => (
                <span
                  key={p.key}
                  className="rounded-md border border-base-700 bg-base-800 px-2 py-1 text-[11px] text-ink-400"
                >
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-sm font-semibold text-ink-50">{title}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-400 transition-colors hover:text-brand-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-base-700/60 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} SocialBoost. Tous droits réservés.
          </p>
          <p className="text-xs text-ink-500">Paiements sécurisés · Stripe · PayPal · Crypto</p>
        </div>
      </div>
    </footer>
  );
}
