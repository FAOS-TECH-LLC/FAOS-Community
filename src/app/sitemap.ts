import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://community.faos-tech.asia'

  // Dynamic routes สำหรับ Spaces และ Public pages
  const routes = [
    '',
    '/feed',
    '/events',
    '/leaderboard',
    '/members',
    '/spaces/general',
    '/spaces/founders',
    '/spaces/tech',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  return routes
}