'use client'

import Link from 'next/link'
import { User, Settings, CreditCard, Shield, LogOut } from 'lucide-react'

export function ProfileDropdown() {
  return (
    <div className="absolute right-0 mt-2 w-56 bg-[#12131c] border border-gray-800 rounded-2xl shadow-2xl p-2 space-y-1 z-50 font-sans">
      <div className="p-3 border-b border-gray-800/80">
        <span className="font-serif font-bold text-xs text-white block">Patcharin C.</span>
        <span className="text-[10px] text-purple-400 font-mono">patcharin@faos-tech.asia</span>
      </div>

      <div className="space-y-0.5 pt-1">
        <Link href="/settings/profile" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-gray-300 hover:text-white hover:bg-gray-800/60 transition-colors">
          <User className="h-3.5 w-3.5 text-purple-400" /> Edit Profile
        </Link>
        <Link href="/settings/billing" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-gray-300 hover:text-white hover:bg-gray-800/60 transition-colors">
          <CreditCard className="h-3.5 w-3.5 text-purple-400" /> Billing & Subscriptions
        </Link>
        <Link href="/admin" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-gray-300 hover:text-white hover:bg-gray-800/60 transition-colors">
          <Shield className="h-3.5 w-3.5 text-purple-400" /> Admin Dashboard
        </Link>
      </div>

      <div className="border-t border-gray-800/80 pt-1">
        <Link href="/" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-rose-400 hover:bg-rose-950/20 transition-colors">
          <LogOut className="h-3.5 w-3.5" /> Sign Out
        </Link>
      </div>
    </div>
  )
}