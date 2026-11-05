'use client'

import Link from 'next/link'
import { Calendar, Video, ArrowRight, Sparkles } from 'lucide-react'

export function RightSidebar() {
  const upcomingEvents = [
    { id: '1', title: 'Next.js 16 & Server Actions Deep Dive', date: 'Nov 10, 2026', time: '19:00 GMT+7', speaker: 'Patcharin C.' },
    { id: '2', title: 'Building Scalable SaaS Architectures', date: 'Nov 15, 2026', time: '15:00 GMT+7', speaker: 'Nikolas' },
  ]

  return (
    <aside className="w-80 hidden xl:flex flex-col gap-6 sticky top-20 h-[calc(100vh-6rem)] font-sans">
      {/* Upcoming Events Widget */}
      <div className="p-5 bg-[#12131c] border border-gray-800 rounded-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-gray-800/80 pb-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-purple-400" />
            <h3 className="font-serif font-bold text-sm text-white">Upcoming Events</h3>
          </div>
          <Link href="/events" className="text-[10px] text-purple-400 hover:underline font-mono">
            View all
          </Link>
        </div>

        <div className="space-y-3">
          {upcomingEvents.map((ev) => (
            <div key={ev.id} className="p-3 bg-[#0b0c10] border border-gray-800/80 rounded-xl space-y-2">
              <div className="flex items-center gap-1.5 text-[10px] text-purple-300 font-mono">
                <Video className="h-3 w-3" /> Live Masterclass
              </div>
              <h4 className="font-serif font-bold text-xs text-white leading-snug">{ev.title}</h4>
              <div className="flex items-center justify-between text-[10px] text-gray-500 font-mono pt-1">
                <span>{ev.date}</span>
                <span>By {ev.speaker}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pro Tier Banner */}
      <div className="p-5 bg-gradient-to-br from-purple-950/60 to-[#12131c] border border-purple-800/50 rounded-2xl space-y-3 relative overflow-hidden">
        <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
          <Sparkles className="h-4 w-4 text-purple-400" /> FAOS PRO MEMBER
        </div>
        <p className="text-xs text-gray-300 leading-relaxed">
          Unlock exclusive founder spaces, global Mapbox coordinates, and advanced analytics.
        </p>
        <Link href="/settings/billing" className="inline-block w-full">
          <button className="w-full bg-purple-600 hover:bg-purple-500 text-white text-xs py-2.5 rounded-xl font-medium transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-lg shadow-purple-950">
            Manage Subscription <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </Link>
      </div>
    </aside>
  )
}