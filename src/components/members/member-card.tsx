'use client'

import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface MemberCardProps {
  id: string
  name: string
  role: string
  bio: string
  location: string
  tag: string
  online: boolean
  avatar: string
}

export function MemberCard({ id, name, role, bio, location, tag, online, avatar }: MemberCardProps) {
  return (
    <div className="p-5 bg-[#12131c] border border-gray-800 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-gray-700 transition-colors font-sans">
      <div className="flex items-start sm:items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-purple-600/40 border border-purple-400/50 flex items-center justify-center font-bold text-sm text-purple-300 font-serif shadow-md">
            {avatar}
          </div>
          {online && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#12131c] rounded-full" />
          )}
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h4 className="font-serif font-bold text-sm text-white">{name}</h4>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-950/80 border border-purple-700/80 text-purple-300">
              {role}
            </span>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed max-w-xl">{bio}</p>
          <div className="flex items-center gap-4 text-[11px] text-gray-500 font-mono pt-1">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-purple-400" /> {location}
            </span>
            <span className="text-purple-400 font-mono">#{tag}</span>
          </div>
        </div>
      </div>

      <Link href={`/members/${id}`}>
        <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-gray-300 text-xs h-9 cursor-pointer">
          View profile
        </Button>
      </Link>
    </div>
  )
}