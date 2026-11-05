'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Compass, Calendar, Trophy, Users, Globe, Settings, LogOut, Bell, Search } from 'lucide-react'

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const sidebarLinks = [
    { name: 'Feed Hub', href: '/feed', icon: Home },
    { name: 'Spaces', href: '/spaces/general', icon: Compass },
    { name: 'Events', href: '/events', icon: Calendar },
    { name: 'Leaderboard', href: '/leaderboard', icon: Trophy },
    { name: 'Members Directory', href: '/members', icon: Users },
    { name: 'Global Map', href: '/members/map', icon: Globe },
  ]

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white flex flex-col font-sans selection:bg-purple-500 selection:text-white">
      {/* Top Navigation Bar */}
      <header className="h-16 border-b border-gray-800/80 bg-[#0b0c10]/90 backdrop-blur-md sticky top-0 z-50 px-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/feed" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center font-bold font-serif text-white shadow-lg shadow-purple-900/50">
              FA
            </div>
            <span className="font-serif font-bold text-base tracking-tight">FAOS Community</span>
          </Link>

          <div className="hidden md:flex items-center relative w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search posts, members, spaces..."
              className="w-full bg-[#12131c] text-white pl-10 pr-4 py-2 rounded-xl border border-gray-800 text-xs focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="w-9 h-9 rounded-xl bg-[#12131c] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer relative">
            <Bell className="h-4 w-4" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-purple-500" />
          </button>

          <Link href="/admin">
            <button className="px-3 py-1.5 rounded-xl bg-purple-950/60 border border-purple-800/60 text-purple-300 text-xs font-mono hover:bg-purple-900/60 transition-colors cursor-pointer">
              Admin Panel
            </button>
          </Link>

          <div className="w-9 h-9 rounded-full bg-purple-600/40 border border-purple-400/50 flex items-center justify-center font-bold text-xs text-purple-300 font-serif">
            PC
          </div>
        </div>
      </header>

      {/* Main Body Layout */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 gap-6">
        {/* Sidebar Left */}
        <aside className="w-64 hidden lg:flex flex-col justify-between sticky top-24 h-[calc(100vh-7rem)] bg-[#12131c]/60 border border-gray-800 p-4 rounded-2xl">
          <div className="space-y-6">
            <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-gray-500">
              Navigation
            </div>
            <nav className="space-y-1">
              {sidebarLinks.map((item) => {
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
            </nav>
          </div>

          <div className="border-t border-gray-800/80 pt-4">
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs text-gray-400 hover:text-white hover:bg-gray-800/60 transition-colors"
            >
              <LogOut className="h-4 w-4 text-rose-400" />
              Sign Out
            </Link>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  )
}