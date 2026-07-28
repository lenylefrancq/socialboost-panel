'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { Menu, X, Zap, LayoutDashboard, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './theme-toggle';
import { NotificationsMenu } from './notifications-menu';
import { CartIndicator } from './cart-indicator';

const NAV_LINKS = [
  { href: '/shop', label: 'Boutique' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/reviews', label: 'Avis' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data: session, status } = useSession();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-base-700/60 bg-base-950/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-700 shadow-glow-sm">
            <Zap size={16} className="text-white" fill="white" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink-50">
            Social<span className="text-brand-400">Boost</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-lg px-3 py-2 text-sm font-medium text-ink-300 transition-colors hover:bg-base-800 hover:text-ink-50',
                pathname === link.href && 'text-ink-50'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          {status === 'authenticated' ? (
            <>
              <NotificationsMenu />
              <CartIndicator />
              <Link href="/dashboard">
                <Button variant="secondary" size="sm">
                  <LayoutDashboard size={14} />
                  Dashboard
                </Button>
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                aria-label="Se déconnecter"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-base-700 bg-base-800 text-ink-300 transition-colors hover:text-danger hover:border-danger/40"
              >
                <LogOut size={15} />
              </button>
            </>
          ) : (
            <>
              <CartIndicator />
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Connexion
                </Button>
              </Link>
              <Link href="/register">
                <Button variant="primary" size="sm">
                  Commencer
                </Button>
              </Link>
            </>
          )}
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-base-700 text-ink-200 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-base-700/60 bg-base-950 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-200 hover:bg-base-800"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 border-t border-base-700/60 pt-4">
            <ThemeToggle />
            <CartIndicator />
            {status === 'authenticated' ? (
              <Link href="/dashboard" className="flex-1">
                <Button variant="secondary" size="sm" className="w-full">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/login" className="flex-1">
                  <Button variant="ghost" size="sm" className="w-full">
                    Connexion
                  </Button>
                </Link>
                <Link href="/register" className="flex-1">
                  <Button variant="primary" size="sm" className="w-full">
                    Commencer
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
