'use client'

import { Bookmark, X, ArrowRight } from 'lucide-react'

export function BookmarksModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  const bookmarks = [
    { id: 'b1', title: 'Next.js 16 & Server Actions Deep Dive', type: 'Post', date: 'Saved Nov 4' },
    { id: 'b2', title: 'Scaling cross-border operations through EOR', type: 'Event', date: 'Saved Nov 3' },
  ]

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 font-sans">
      <div className="bg-[#12131c] border border-gray-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-gray-800 pb-3">
          <div className="flex items-center gap-2">
            <Bookmark className="h-4 w-4 text-purple-400" />
            <h3 className="font-serif font-bold text-sm text-white">Saved Bookmarks</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white cursor-pointer">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-3 max-h-80 overflow-y-auto">
          {bookmarks.map((b) => (
            <div key={b.id} className="p-4 bg-[#0b0c10] border border-gray-800 rounded-xl flex items-center justify-between hover:border-gray-700 transition-colors">
              <div className="space-y-1">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-950/80 border border-purple-700/80 text-purple-300">
                  {b.type}
                </span>
                <h4 className="font-serif font-bold text-xs text-white">{b.title}</h4>
                <span className="text-[10px] text-gray-500 font-mono">{b.date}</span>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}