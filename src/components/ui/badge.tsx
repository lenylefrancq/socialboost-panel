import { cn } from '@/lib/utils';
import type { OrderStatus } from '@/types';

const STATUS_STYLES: Record<OrderStatus, string> = {
  PENDING: 'bg-warning/10 text-warning border-warning/30',
  PROCESSING: 'bg-brand-500/10 text-brand-300 border-brand-500/30',
  IN_PROGRESS: 'bg-brand-500/10 text-brand-300 border-brand-500/30',
  COMPLETED: 'bg-success/10 text-success border-success/30',
  PARTIAL: 'bg-warning/10 text-warning border-warning/30',
  CANCELLED: 'bg-danger/10 text-danger border-danger/30',
  REFUNDED: 'bg-ink-400/10 text-ink-300 border-ink-400/30',
};

const STATUS_LABELS: Record<OrderStatus, string> = {
  PENDING: 'En attente',
  PROCESSING: 'En traitement',
  IN_PROGRESS: 'En cours',
  COMPLETED: 'Terminée',
  PARTIAL: 'Partielle',
  CANCELLED: 'Annulée',
  REFUNDED: 'Remboursée',
};

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium',
        STATUS_STYLES[status]
      )}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}
