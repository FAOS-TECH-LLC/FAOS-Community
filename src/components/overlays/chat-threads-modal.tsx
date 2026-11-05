'use client'

import { Hash, Users, X } from 'lucide-react'

export function ChatThreadsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  const threads = [
    { id: 't1', name: 'general-lounge', members: 142, active: true },
    { id: 't2', name: 'founders-mastermind', members: 38, active: false },
    { id: 't3', name: 'tech-architecture', members: 64, active: false },
  ]

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 font-sans">
      <div className="bg-[#12131c] border border-gray-800 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-gray-800 pb-3">
          <h3 className="font-serif font-bold text-sm text-white">Live Lounge Threads</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white cursor-pointer">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-2">
          {threads.map((t) => (
            <div key={t.id} className="p-3 bg-[#0b0c10] border border-gray-800 rounded-xl flex items-center justify-between hover:border-purple-500/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-2.5">
                <Hash className="h-4 w-4 text-purple-400" />
                <span className="font-serif font-bold text-xs text-white">{t.name}</span>
              </div>
              <span className="text-[10px] font-mono text-gray-500 flex items-center gap-1">
                <Users className="h-3 w-3" /> {t.members}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}