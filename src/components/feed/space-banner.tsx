'use client'

import { Compass, Users } from 'lucide-react'

export function SpaceBanner({ name, description, memberCount }: { name: string; description: string; memberCount: number }) {
  return (
    <div className="p-6 bg-gradient-to-r from-purple-950/40 via-[#12131c] to-[#12131c] border border-purple-800/40 rounded-2xl space-y-3 font-sans relative overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-purple-950 border border-purple-700 text-purple-300">
          <Compass className="h-3.5 w-3.5" /> Active Space
        </span>
        <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
          <Users className="h-3.5 w-3.5 text-purple-400" /> {memberCount} Members
        </span>
      </div>
      <h1 className="text-2xl font-bold font-serif text-white">{name}</h1>
      <p className="text-xs text-gray-300 leading-relaxed max-w-2xl">{description}</p>
    </div>
  )
}