'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQS = [
  {
    q: 'Combien de temps prend une commande ?',
    a: 'La majorité des commandes démarrent en quelques minutes et se terminent en moins de 24h selon le service choisi. Le délai moyen estimé est affiché sur chaque service.',
  },
  {
    q: 'Est-ce que mes comptes risquent une sanction ?',
    a: "Nous utilisons des méthodes conformes aux bonnes pratiques et un rythme de livraison progressif pour limiter les risques. Nous ne demandons jamais votre mot de passe.",
  },
  {
    q: 'Quels moyens de paiement acceptez-vous ?',
    a: 'Carte bancaire et paiements instantanés via Stripe, PayPal, ainsi que les principales cryptomonnaies (BTC, ETH, USDT).',
  },
  {
    q: 'Puis-je être remboursé si ma commande échoue ?',
    a: "Oui. Si une commande ne peut pas être livrée, le montant est automatiquement recrédité sur votre solde SocialBoost.",
  },
  {
    q: "Dois-je donner mon mot de passe pour les followers ou vues ?",
    a: 'Non, jamais. Nous avons uniquement besoin du lien public de votre profil ou de votre publication.',
  },
  {
    q: 'Proposez-vous des tarifs dégressifs pour les gros volumes ?',
    a: 'Oui, contactez notre équipe pour un devis personnalisé au-delà de 100 000 unités par commande.',
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold text-ink-50 sm:text-4xl">
          Questions fréquentes
        </h2>
        <p className="mt-3 text-ink-400">Tout ce que vous devez savoir avant de commencer.</p>
      </div>

      <div className="mt-10 divide-y divide-base-700/60 rounded-xl2 border border-base-700/60 bg-surface-raised/40">
        {FAQS.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open}
              >
                <span className="font-medium text-ink-50">{item.q}</span>
                <ChevronDown
                  size={18}
                  className={cn('shrink-0 text-ink-400 transition-transform', open && 'rotate-180 text-brand-300')}
                />
              </button>
              {open && <p className="px-6 pb-5 text-sm leading-relaxed text-ink-400">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
