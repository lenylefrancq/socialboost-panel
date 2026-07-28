'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/theme-provider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Basculer le thème clair/sombre"
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-base-700 bg-base-800 text-ink-300 transition-colors hover:text-brand-300 hover:border-brand-500/40"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
