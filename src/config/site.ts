export const siteConfig = {
  name: 'FAOS COMMUNITY',
  description: 'Self-Hosted Community & FAOS TECH Platform. Modular white-label community platform.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://community.faos-tech.asia',
  navLinks: [
    { name: 'Feed Hub', href: '/feed' },
    { name: 'Events', href: '/events' },
    { name: 'Leaderboard', href: '/leaderboard' },
    { name: 'Members Directory', href: '/members' },
    { name: 'Global Map', href: '/members/map' },
  ],
  pricingPlans: [
    {
      name: 'Pro Community Plan',
      price: '$49',
      interval: 'month',
      description: 'Perfect for creators, startup founders, and growing networks.',
      features: [
        'Full access to all Spaces',
        'Global Mapbox coordinates',
        'Stripe automated billing',
        'Real-time Supabase analytics',
      ],
      priceId: 'price_12345',
    },
  ],
}