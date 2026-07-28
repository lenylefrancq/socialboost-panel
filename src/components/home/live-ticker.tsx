const EVENTS = [
  { name: 'Julien D.', action: 'a commandé 5 000 Followers Instagram', flag: '🇫🇷' },
  { name: 'Amara K.', action: 'a commandé 20 000 Vues TikTok', flag: '🇧🇪' },
  { name: 'Léa M.', action: 'a ajouté 50 € de solde via Stripe', flag: '🇨🇭' },
  { name: 'Nabil R.', action: 'a commandé 1 000 Abonnés YouTube', flag: '🇫🇷' },
  { name: 'Chloé P.', action: 'a commandé 2 500 Likes X (Twitter)', flag: '🇨🇦' },
  { name: 'Théo B.', action: 'a commandé 10 000 Membres Discord', flag: '🇫🇷' },
  { name: 'Inès L.', action: 'a payé en Crypto — commande validée', flag: '🇲🇦' },
  { name: 'Hugo V.', action: 'a commandé 3 000 Followers Twitch', flag: '🇫🇷' },
];

export function LiveTicker() {
  const loop = [...EVENTS, ...EVENTS];

  return (
    <div className="relative overflow-hidden border-y border-base-700/60 bg-base-900/60 py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-base-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-base-950 to-transparent" />
      <div className="flex w-max animate-ticker gap-8">
        {loop.map((e, i) => (
          <div key={i} className="flex shrink-0 items-center gap-2 text-sm text-ink-400">
            <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_2px_rgba(32,201,151,0.6)]" />
            <span>{e.flag}</span>
            <span className="font-medium text-ink-100">{e.name}</span>
            <span>{e.action}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
