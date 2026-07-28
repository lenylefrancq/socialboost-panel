export type Platform =
  | 'INSTAGRAM'
  | 'TIKTOK'
  | 'YOUTUBE'
  | 'DISCORD'
  | 'TWITCH'
  | 'X'
  | 'FACEBOOK';

export interface Service {
  id: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  platform: Platform;
  pricePer1000: number;
  minQuantity: number;
  maxQuantity: number;
  avgTimeHours: number;
  description?: string;
}

export interface CartItem {
  id: string; // id unique de ligne panier
  service: Service;
  link: string;
  quantity: number;
  total: number;
}

export type OrderStatus =
  | 'PENDING'
  | 'PROCESSING'
  | 'IN_PROGRESS'
  | 'COMPLETED'
  | 'PARTIAL'
  | 'CANCELLED'
  | 'REFUNDED';

export interface Order {
  id: string;
  orderNumber: string;
  serviceName: string;
  link: string;
  quantity: number;
  charge: number;
  status: OrderStatus;
  createdAt: string;
}
