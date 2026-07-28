import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-xl2 border border-brand-500/30 bg-gradient-to-br from-brand-900/50 via-base-900 to-base-900 px-8 py-16 text-center">
        <div className="absolute inset-0 bg-radial-grid" />
        <div className="relative">
          <h2 className="font-display text-3xl font-bold text-ink-50 sm:text-4xl">
            Prêt à faire décoller votre audience ?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-ink-400">
            Rejoignez des milliers de créateurs et entreprises qui font confiance à SocialBoost.
          </p>
          <div className="mt-8">
            <Link href="/register">
              <Button size="lg" className="group">
                Commencer maintenant
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
