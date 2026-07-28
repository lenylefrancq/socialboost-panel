'use client';

import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/context/theme-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#111830',
              color: '#F5F7FB',
              border: '1px solid #1E2740',
              fontSize: '14px',
            },
          }}
        />
      </ThemeProvider>
    </SessionProvider>
  );
}
