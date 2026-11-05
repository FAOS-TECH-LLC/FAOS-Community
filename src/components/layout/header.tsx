'use client'

import Link from 'next/link'
import { Search, Bell, MessageSquare, Bookmark, Shield } from 'lucide-react'

export function Header() {
  return (
    <header className="h-16 border-b border-gray-800/80 bg-[#0b0c10]/90 backdrop-blur-md sticky top-0 z-50 px-6 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/feed" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center font-bold font-serif text-white shadow-lg shadow-purple-900/50">
            FA
          </div>
          <span className="font-serif font-bold text-base tracking-tight text-white">FAOS COMMUNITY</span>
        </Link>

        <div className="hidden md:flex items-center relative w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search posts, members, spaces..."
            className="w-full bg-[#12131c] text-white pl-10 pr-4 py-2 rounded-xl border border-gray-800 text-xs focus:outline-none focus:border-purple-500 font-sans"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="w-9 h-9 rounded-xl bg-[#12131c] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
          <MessageSquare className="h-4 w-4" />
        </button>

        <button className="w-9 h-9 rounded-xl bg-[#12131c] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
          <Bookmark className="h-4 w-4" />
        </button>

        <button className="w-9 h-9 rounded-xl bg-[#12131c] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer relative">
          <Bell className="h-4 w-4" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-purple-500" />
        </button>

        <Link href="/admin">
          <button className="px-3 py-1.5 rounded-xl bg-purple-950/60 border border-purple-800/60 text-purple-300 text-xs font-mono hover:bg-purple-900/60 transition-colors cursor-pointer flex items-center gap-1.5">
            <Shield className="h-3.5 w-3.5" /> Admin
          </button>
        </Link>

        <Link href="/settings/profile">
          <div className="w-9 h-9 rounded-full bg-purple-600/40 border border-purple-400/50 flex items-center justify-center font-bold text-xs text-purple-300 font-serif cursor-pointer hover:border-purple-400">
            PC
          </div>
        </Link>
      </div>
    </header>
  )
}