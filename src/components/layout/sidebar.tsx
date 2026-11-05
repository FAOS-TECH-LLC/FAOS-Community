'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Compass, Calendar, Trophy, Users, Globe, Hash, Settings, LogOut } from 'lucide-react'

export function Sidebar() {
  const pathname = usePathname()

  const mainLinks = [
    { name: 'Feed Hub', href: '/feed', icon: Home },
    { name: 'Events', href: '/events', icon: Calendar },
    { name: 'Leaderboard', href: '/leaderboard', icon: Trophy },
    { name: 'Members Directory', href: '/members', icon: Users },
    { name: 'Global Map', href: '/members/map', icon: Globe },
  ]

  const spaces = [
    { name: 'General Discussion', slug: 'general' },
    { name: 'Founders Mastermind', slug: 'founders' },
    { name: 'Tech & Architecture', slug: 'tech' },
  ]

  return (
    <aside className="w-64 hidden lg:flex flex-col justify-between sticky top-20 h-[calc(100vh-6rem)] bg-[#12131c]/60 border border-gray-800 p-4 rounded-2xl font-sans">
      <div className="space-y-6 overflow-y-auto">
        <div className="space-y-1">
          <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-gray-500">
            Navigation
          </div>
          {mainLinks.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || (item.href !== '/feed' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/30'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className="space-y-1 border-t border-gray-800/80 pt-4">
          <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-gray-500 flex items-center justify-between">
            <span>Spaces</span>
            <Compass className="h-3 w-3" />
          </div>
          {spaces.map((space) => {
            const href = `/spaces/${space.slug}`
            const isActive = pathname === href
            return (
              <Link
                key={space.slug}
                href={href}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-purple-950/80 border border-purple-700/80 text-purple-300'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/60'
                }`}
              >
                <Hash className="h-3.5 w-3.5 text-purple-400" />
                <span className="truncate">{space.name}</span>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="border-t border-gray-800/80 pt-4 space-y-1">
        <Link
          href="/settings/profile"
          className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs text-gray-400 hover:text-white hover:bg-gray-800/60 transition-colors"
        >
          <Settings className="h-4 w-4" />
          Account Settings
        </Link>
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs text-gray-400 hover:text-rose-400 hover:bg-rose-950/20 transition-colors"
        >
          <LogOut className="h-4 w-4 text-rose-400" />
          Sign Out
        </Link>
      </div>
    </aside>
  )
}