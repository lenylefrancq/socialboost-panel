import Stripe from 'stripe';

// Ne jamais exposer STRIPE_SECRET_KEY côté client.
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2024-06-20',
  typescript: true,
});
