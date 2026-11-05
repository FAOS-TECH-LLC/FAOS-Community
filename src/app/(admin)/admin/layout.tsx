'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Users, MessageSquare, CreditCard, Settings, LogOut } from 'lucide-react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Members', href: '/admin/members', icon: Users },
    { name: 'Spaces', href: '/admin/spaces', icon: MessageSquare },
    { name: 'Subscriptions', href: '/admin/subscriptions', icon: CreditCard },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-800 bg-[#12131c]/60 p-6 flex flex-col justify-between hidden md:flex sticky top-0 h-screen">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center font-bold font-serif text-white shadow-lg shadow-purple-900/50">
              FA
            </div>
            <div>
              <span className="font-serif font-bold text-sm tracking-tight block">FAOS Admin</span>
              <span className="text-[10px] text-purple-400 font-mono">Community Control</span>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
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
          </nav>
        </div>

        <div className="border-t border-gray-800 pt-4">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs text-gray-400 hover:text-white hover:bg-gray-800/60 transition-colors"
          >
            <LogOut className="h-4 w-4 text-red-400" />
            Exit to Public Site
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}