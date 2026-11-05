'use client'

import { Bell, CheckCircle2, MessageSquare, Calendar } from 'lucide-react'

export function NotificationsDropdown() {
  const notifications = [
    { id: '1', title: 'New RSVP', desc: 'Nikolas joined your masterclass session', time: '10m ago', read: false, icon: Calendar },
    { id: '2', title: 'New Comment', desc: 'Yamamoto Koji commented on your post', time: '1h ago', read: true, icon: MessageSquare },
  ]

  return (
    <div className="absolute right-0 mt-2 w-80 bg-[#12131c] border border-gray-800 rounded-2xl shadow-2xl p-4 space-y-3 z-50 font-sans">
      <div className="flex items-center justify-between border-b border-gray-800 pb-2">
        <h4 className="font-serif font-bold text-xs text-white">Notifications</h4>
        <button className="text-[10px] text-purple-400 hover:underline font-mono">Mark all as read</button>
      </div>

      <div className="space-y-2 max-h-72 overflow-y-auto">
        {notifications.map((n) => {
          const Icon = n.icon
          return (
            <div key={n.id} className={`p-3 rounded-xl border transition-colors flex items-start gap-3 ${n.read ? 'bg-[#0b0c10]/40 border-gray-800/60' : 'bg-purple-950/20 border-purple-800/40'}`}>
              <div className="w-7 h-7 rounded-lg bg-purple-600/30 border border-purple-400/40 flex items-center justify-center text-purple-300 shrink-0 mt-0.5">
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-xs text-white">{n.title}</span>
                  <span className="text-[9px] text-gray-500 font-mono">{n.time}</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">{n.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}