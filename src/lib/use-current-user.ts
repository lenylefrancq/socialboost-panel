'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

export interface CurrentUser {
  id: string;
  name: string;
  email: string;
  role: 'USER' | 'ADMIN';
  balance: string | number;
  createdAt: string;
  _count: { orders: number };
}

export function useCurrentUser() {
  const { status } = useSession();
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status !== 'authenticated') {
      setLoading(status === 'loading');
      return;
    }
    fetch('/api/me')
      .then((res) => res.json())
      .then((data) => setUser(data.user ?? null))
      .finally(() => setLoading(false));
  }, [status]);

  return { user, loading, refetch: () => fetch('/api/me').then((r) => r.json()).then((d) => setUser(d.user)) };
}
