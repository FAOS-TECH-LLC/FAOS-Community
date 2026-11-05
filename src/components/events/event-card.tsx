'use client'

import { Calendar, Video, Clock } from 'lucide-react'
import { RsvpButton } from './rsvp-button'

interface EventCardProps {
  id: string
  title: string
  speaker: string
  speakerAvatar: string
  date: string
  time: string
  type: 'Live AMA' | 'Masterclass' | 'Workshop'
  rsvped: boolean
  onToggleRsvp: (id: string) => void
}

export function EventCard({ id, title, speaker, speakerAvatar, date, time, type, rsvped, onToggleRsvp }: EventCardProps) {
  return (
    <div className="p-6 bg-[#12131c] border border-gray-800 rounded-2xl space-y-4 flex flex-col justify-between font-sans hover:border-gray-700 transition-colors">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono bg-purple-950/60 border border-purple-800/60 text-purple-300">
            <Video className="h-3 w-3" /> {type}
          </span>
        </div>

        <h3 className="font-serif font-bold text-base text-white leading-snug">{title}</h3>

        <div className="flex items-center gap-3 pt-2">
          <div className="w-8 h-8 rounded-full bg-purple-600/40 border border-purple-400/50 flex items-center justify-center font-bold text-xs text-purple-300 font-serif shadow-md">
            {speakerAvatar}
          </div>
          <div>
            <span className="text-[10px] text-gray-500 font-mono block">Hosted by</span>
            <span className="text-xs font-medium text-gray-200 font-serif">{speaker}</span>
          </div>
        </div>

        <div className="space-y-1.5 text-xs text-gray-400 font-mono border-t border-gray-800/80 pt-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-purple-400" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-purple-400" />
            <span>{time}</span>
          </div>
        </div>
      </div>

      <RsvpButton rsvped={rsvped} onClick={() => onToggleRsvp(id)} />
    </div>
  )
}