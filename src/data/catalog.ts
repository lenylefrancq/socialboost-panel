import type { Platform, Service } from '@/types';

export const PLATFORMS: { key: Platform; label: string; color: string }[] = [
  { key: 'INSTAGRAM', label: 'Instagram', color: '#E1306C' },
  { key: 'TIKTOK', label: 'TikTok', color: '#25F4EE' },
  { key: 'YOUTUBE', label: 'YouTube', color: '#FF0000' },
  { key: 'DISCORD', label: 'Discord', color: '#5865F2' },
  { key: 'TWITCH', label: 'Twitch', color: '#9146FF' },
  { key: 'X', label: 'X (Twitter)', color: '#FFFFFF' },
  { key: 'FACEBOOK', label: 'Facebook', color: '#1877F2' },
];

export const CATALOG: Service[] = [
  // Instagram
  { id: 'ig-followers-1', name: 'Followers Instagram — Qualité Haute', categorySlug: 'followers', categoryName: 'Followers', platform: 'INSTAGRAM', pricePer1000: 2.5, minQuantity: 100, maxQuantity: 100000, avgTimeHours: 24 },
  { id: 'ig-followers-2', name: 'Followers Instagram — Premium (comptes actifs)', categorySlug: 'followers', categoryName: 'Followers', platform: 'INSTAGRAM', pricePer1000: 5.9, minQuantity: 50, maxQuantity: 50000, avgTimeHours: 48 },
  { id: 'ig-likes-1', name: 'Likes Instagram — Rapide', categorySlug: 'likes', categoryName: 'Likes', platform: 'INSTAGRAM', pricePer1000: 0.9, minQuantity: 50, maxQuantity: 20000, avgTimeHours: 6 },
  { id: 'ig-likes-2', name: 'Likes Instagram — Comptes réels', categorySlug: 'likes', categoryName: 'Likes', platform: 'INSTAGRAM', pricePer1000: 1.8, minQuantity: 50, maxQuantity: 10000, avgTimeHours: 12 },
  { id: 'ig-views-1', name: 'Vues Instagram (Vidéo / Post)', categorySlug: 'views', categoryName: 'Views', platform: 'INSTAGRAM', pricePer1000: 0.3, minQuantity: 100, maxQuantity: 1000000, avgTimeHours: 3 },
  { id: 'ig-comments-1', name: 'Commentaires Instagram personnalisés', categorySlug: 'comments', categoryName: 'Comments', platform: 'INSTAGRAM', pricePer1000: 8.0, minQuantity: 10, maxQuantity: 2000, avgTimeHours: 24 },
  { id: 'ig-storyviews-1', name: 'Vues Story Instagram', categorySlug: 'story-views', categoryName: 'Story Views', platform: 'INSTAGRAM', pricePer1000: 0.4, minQuantity: 100, maxQuantity: 50000, avgTimeHours: 6 },
  { id: 'ig-reelviews-1', name: 'Vues Reels Instagram', categorySlug: 'reel-views', categoryName: 'Reel Views', platform: 'INSTAGRAM', pricePer1000: 0.35, minQuantity: 100, maxQuantity: 1000000, avgTimeHours: 3 },

  // TikTok
  { id: 'tt-followers-1', name: 'Followers TikTok', categorySlug: 'followers', categoryName: 'Followers', platform: 'TIKTOK', pricePer1000: 3.2, minQuantity: 100, maxQuantity: 100000, avgTimeHours: 24 },
  { id: 'tt-likes-1', name: 'Likes TikTok', categorySlug: 'likes', categoryName: 'Likes', platform: 'TIKTOK', pricePer1000: 1.1, minQuantity: 50, maxQuantity: 50000, avgTimeHours: 6 },
  { id: 'tt-views-1', name: 'Vues TikTok', categorySlug: 'views', categoryName: 'Views', platform: 'TIKTOK', pricePer1000: 0.15, minQuantity: 100, maxQuantity: 5000000, avgTimeHours: 1 },
  { id: 'tt-comments-1', name: 'Commentaires TikTok', categorySlug: 'comments', categoryName: 'Comments', platform: 'TIKTOK', pricePer1000: 9.0, minQuantity: 10, maxQuantity: 1000, avgTimeHours: 24 },
  { id: 'tt-shares-1', name: 'Partages TikTok', categorySlug: 'shares', categoryName: 'Shares', platform: 'TIKTOK', pricePer1000: 1.5, minQuantity: 50, maxQuantity: 20000, avgTimeHours: 12 },

  // YouTube
  { id: 'yt-subs-1', name: 'Abonnés YouTube', categorySlug: 'subscribers', categoryName: 'Subscribers', platform: 'YOUTUBE', pricePer1000: 12.0, minQuantity: 50, maxQuantity: 20000, avgTimeHours: 48 },
  { id: 'yt-views-1', name: 'Vues YouTube', categorySlug: 'views', categoryName: 'Views', platform: 'YOUTUBE', pricePer1000: 1.2, minQuantity: 500, maxQuantity: 1000000, avgTimeHours: 24 },
  { id: 'yt-likes-1', name: 'Likes YouTube', categorySlug: 'likes', categoryName: 'Likes', platform: 'YOUTUBE', pricePer1000: 2.5, minQuantity: 50, maxQuantity: 10000, avgTimeHours: 12 },
  { id: 'yt-watchtime-1', name: 'Heures de visionnage YouTube', categorySlug: 'watch-time', categoryName: 'Watch Time', platform: 'YOUTUBE', pricePer1000: 25.0, minQuantity: 500, maxQuantity: 4000, avgTimeHours: 72 },

  // Discord
  { id: 'dc-members-1', name: 'Membres Discord', categorySlug: 'members', categoryName: 'Members', platform: 'DISCORD', pricePer1000: 4.0, minQuantity: 50, maxQuantity: 50000, avgTimeHours: 24 },
  { id: 'dc-online-1', name: 'Membres en ligne Discord', categorySlug: 'online-members', categoryName: 'Online Members', platform: 'DISCORD', pricePer1000: 6.0, minQuantity: 50, maxQuantity: 10000, avgTimeHours: 24 },

  // Twitch
  { id: 'tw-followers-1', name: 'Followers Twitch', categorySlug: 'followers', categoryName: 'Followers', platform: 'TWITCH', pricePer1000: 5.0, minQuantity: 50, maxQuantity: 20000, avgTimeHours: 24 },
  { id: 'tw-views-1', name: 'Vues Twitch (VOD)', categorySlug: 'views', categoryName: 'Views', platform: 'TWITCH', pricePer1000: 1.0, minQuantity: 100, maxQuantity: 100000, avgTimeHours: 12 },
  { id: 'tw-liveviewers-1', name: 'Viewers Live Twitch (30 min)', categorySlug: 'live-viewers', categoryName: 'Live Viewers', platform: 'TWITCH', pricePer1000: 15.0, minQuantity: 10, maxQuantity: 500, avgTimeHours: 1 },

  // X (Twitter)
  { id: 'x-followers-1', name: 'Followers X (Twitter)', categorySlug: 'followers', categoryName: 'Followers', platform: 'X', pricePer1000: 6.5, minQuantity: 50, maxQuantity: 50000, avgTimeHours: 24 },
  { id: 'x-likes-1', name: 'Likes X (Twitter)', categorySlug: 'likes', categoryName: 'Likes', platform: 'X', pricePer1000: 1.4, minQuantity: 50, maxQuantity: 20000, avgTimeHours: 6 },
  { id: 'x-retweets-1', name: 'Retweets X', categorySlug: 'retweets', categoryName: 'Retweets', platform: 'X', pricePer1000: 2.2, minQuantity: 20, maxQuantity: 10000, avgTimeHours: 12 },

  // Facebook
  { id: 'fb-pagelikes-1', name: 'Likes Page Facebook', categorySlug: 'page-likes', categoryName: 'Page Likes', platform: 'FACEBOOK', pricePer1000: 3.5, minQuantity: 100, maxQuantity: 50000, avgTimeHours: 24 },
  { id: 'fb-followers-1', name: 'Followers Facebook', categorySlug: 'followers', categoryName: 'Followers', platform: 'FACEBOOK', pricePer1000: 3.0, minQuantity: 100, maxQuantity: 50000, avgTimeHours: 24 },
  { id: 'fb-postlikes-1', name: 'Likes Publication Facebook', categorySlug: 'post-likes', categoryName: 'Post Likes', platform: 'FACEBOOK', pricePer1000: 1.6, minQuantity: 50, maxQuantity: 20000, avgTimeHours: 6 },
  { id: 'fb-views-1', name: 'Vues Vidéo Facebook', categorySlug: 'views', categoryName: 'Views', platform: 'FACEBOOK', pricePer1000: 0.4, minQuantity: 100, maxQuantity: 1000000, avgTimeHours: 6 },
];

export function getServicesByPlatform(platform: Platform) {
  return CATALOG.filter((s) => s.platform === platform);
}

export function groupByCategory(services: Service[]) {
  const map = new Map<string, Service[]>();
  for (const service of services) {
    const key = service.categoryName;
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(service);
  }
  return Array.from(map.entries());
}
