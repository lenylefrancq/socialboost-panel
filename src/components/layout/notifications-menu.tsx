'use client';

import { useEffect, useRef, useState } from 'react';
import { Bell } from 'lucide-react';
import { cn, formatDate } from '@/lib/utils';

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
}

const DEMO_NOTIFICATIONS: NotificationItem[] = [
  {
    id: '1',
    title: 'Commande terminée',
    message: 'Votre commande #A82F9 (Followers Instagram) est terminée à 100%.',
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
  },
  {
    id: '2',
    title: 'Fonds ajoutés',
    message: 'Votre paiement de 25,00 € a été crédité sur votre solde.',
    read: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
  },
  {
    id: '3',
    title: 'Commande en cours',
    message: 'Votre commande #C11A0 (Vues TikTok) a démarré.',
    read: true,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
  },
];

export function NotificationsMenu() {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(DEMO_NOTIFICATIONS);
  const ref = useRef<HTMLDivElement>(null);
  const unread = items.filter((i) => !i.read).length;

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Notifications"
        className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-base-700 bg-base-800 text-ink-300 transition-colors hover:text-brand-300 hover:border-brand-500/40"
      >
        <Bell size={16} />
        {unread > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 text-[10px] font-semibold text-white">
            {unread}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-80 rounded-xl2 border border-base-700 bg-surface-raised shadow-glow-md">
          <div className="flex items-center justify-between border-b border-base-700 px-4 py-3">
            <span className="text-sm font-semibold text-ink-50">Notifications</span>
            <button
              onClick={() => setItems((prev) => prev.map((i) => ({ ...i, read: true })))}
              className="text-xs text-brand-300 hover:text-brand-200"
            >
              Tout marquer comme lu
            </button>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {items.map((n) => (
              <div
                key={n.id}
                className={cn(
                  'border-b border-base-700/60 px-4 py-3 last:border-0',
                  !n.read && 'bg-brand-500/5'
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium text-ink-50">{n.title}</p>
                  {!n.read && <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />}
                </div>
                <p className="mt-1 text-xs text-ink-400">{n.message}</p>
                <p className="mt-1.5 text-[11px] text-ink-500">{formatDate(n.createdAt)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
