import { UserPlus, MousePointerClick, Rocket } from 'lucide-react';

const STEPS = [
  {
    icon: UserPlus,
    title: 'Créez votre compte',
    text: 'Inscrivez-vous gratuitement en moins d’une minute, aucune carte bancaire requise.',
  },
  {
    icon: MousePointerClick,
    title: 'Choisissez vos services',
    text: 'Collez votre lien, ajustez la quantité et ajoutez au panier. Le prix se calcule en direct.',
  },
  {
    icon: Rocket,
    title: 'Recevez vos résultats',
    text: 'Payez en toute sécurité et suivez la livraison en temps réel depuis votre tableau de bord.',
  },
];

export function HowItWorks() {
  return (
    <section className="border-y border-base-700/60 bg-base-900/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink-50 sm:text-4xl">
            Trois étapes, aucun effort
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-300">
                  <step.icon size={20} />
                </span>
                <span className="font-mono text-sm text-ink-500">0{i + 1}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink-50">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
