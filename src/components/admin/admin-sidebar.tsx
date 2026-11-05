'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Users, Hash, CreditCard, Settings, ArrowLeft, Shield } from 'lucide-react'

export function AdminSidebar() {
  const pathname = usePathname()

  const adminNavs = [
    { name: 'Overview Stats', href: '/admin', icon: LayoutDashboard },
    { name: 'Member Management', href: '/admin/members', icon: Users },
    { name: 'Space Channels', href: '/admin/spaces', icon: Hash },
    { name: 'Subscriptions & Billing', href: '/admin/billing', icon: CreditCard },
    { name: 'Platform Settings', href: '/admin/settings', icon: Settings },
  ]

  return (
    <aside className="w-64 hidden lg:flex flex-col justify-between sticky top-20 h-[calc(100vh-6rem)] bg-[#12131c] border border-gray-800 p-4 rounded-2xl font-sans">
      <div className="space-y-6">
        <div className="px-3 py-2 bg-purple-950/60 border border-purple-800/60 rounded-xl flex items-center gap-2">
          <Shield className="h-4 w-4 text-purple-400" />
          <span className="font-serif font-bold text-xs text-purple-200">Admin Control Panel</span>
        </div>

        <div className="space-y-1">
          <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-gray-500">
            Management
          </div>
          {adminNavs.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
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
      </div>

      <div className="border-t border-gray-800/80 pt-4">
        <Link
          href="/feed"
          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-gray-400 hover:text-white hover:bg-gray-800/60 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Community
        </Link>
      </div>
    </aside>
  )
}