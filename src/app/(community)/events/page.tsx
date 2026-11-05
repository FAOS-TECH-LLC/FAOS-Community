'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, Video, CheckCircle2, Clock } from 'lucide-react'

interface CommunityEvent {
  id: string
  title: string
  speaker: string
  speakerAvatar: string // เพิ่มฟิลด์สำหรับรูปภาพผู้จัด
  date: string
  time: string
  type: 'Live AMA' | 'Masterclass' | 'Workshop'
  rsvped: boolean
}

const INITIAL_EVENTS: CommunityEvent[] = [
  { 
    id: '1', 
    title: 'Next.js 16 & Server Actions Deep Dive', 
    speaker: 'Patcharin C.', 
    speakerAvatar: 'PC',
    date: 'Nov 10, 2026', 
    time: '19:00 GMT+7', 
    type: 'Masterclass', 
    rsvped: true 
  },
  { 
    id: '2', 
    title: 'Building Scalable SaaS Architectures with Supabase', 
    speaker: 'Nikolas', 
    speakerAvatar: 'NK',
    date: 'Nov 15, 2026', 
    time: '15:00 GMT+7', 
    type: 'Live AMA', 
    rsvped: false 
  },
  { 
    id: '3', 
    title: 'Global Expansion & Cross-Border Compliance', 
    speaker: 'FAOS Team', 
    speakerAvatar: 'FT',
    date: 'Nov 22, 2026', 
    time: '18:00 GMT+7', 
    type: 'Workshop', 
    rsvped: false 
  },
]

export default function EventsPage() {
  const [events, setEvents] = useState<CommunityEvent[]>(INITIAL_EVENTS)

  const toggleRsvp = (id: string) => {
    setEvents(
      events.map((ev) =>
        ev.id === id ? { ...ev, rsvped: !ev.rsvped } : ev
      )
    )
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto font-sans pb-12">
      <div className="border-b border-gray-800 pb-6">
        <h1 className="text-2xl font-bold font-serif tracking-tight text-white mb-1">
          Community Events & Live Sessions
        </h1>
        <p className="text-sm text-gray-400">
          Join exclusive workshops, masterclasses, and live AMAs with industry experts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="p-6 bg-[#12131c] border border-gray-800 rounded-2xl space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono bg-purple-950/60 border border-purple-800/60 text-purple-300">
                  <Video className="h-3 w-3" /> {event.type}
                </span>
              </div>

              <h3 className="font-serif font-bold base text-white leading-snug">{event.title}</h3>

              {/* ส่วนแสดงข้อมูลและรูปภาพของผู้จัด */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-8 h-8 rounded-full bg-purple-600/40 border border-purple-400/50 flex items-center justify-center font-bold text-xs text-purple-300 font-serif shadow-md">
                  {event.speakerAvatar}
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 font-mono block">Hosted by</span>
                  <span className="text-xs font-medium text-gray-200 font-serif">{event.speaker}</span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-gray-400 font-mono border-t border-gray-800/80 pt-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-purple-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-purple-400" />
                  <span>{event.time}</span>
                </div>
              </div>
            </div>

            <Button
              onClick={() => toggleRsvp(event.id)}
              className={`w-full text-xs font-medium cursor-pointer ${
                event.rsvped
                  ? 'bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 hover:bg-emerald-900/60'
                  : 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-900/30'
              }`}
            >
              {event.rsvped ? (
                <>
                  <CheckCircle2 className="h-4 w-4 mr-1.5" /> RSVP Confirmed
                </>
              ) : (
                'RSVP Now'
              )}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}