'use client'

import { Image, Video, Sparkles } from 'lucide-react'

export function CreatePostCard({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="p-5 bg-[#12131c] border border-gray-800 rounded-2xl space-y-4 hover:border-gray-700 transition-colors cursor-pointer font-sans">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-purple-600/40 border border-purple-400/50 flex items-center justify-center font-bold text-xs text-purple-300 font-serif">
          PC
        </div>
        <div className="flex-1 bg-[#0b0c10] border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-gray-500">
          Share something with the community...
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-gray-800/80 text-xs text-gray-400 font-mono">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
            <Image className="h-4 w-4 text-purple-400" /> Photo
          </button>
          <button className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
            <Video className="h-4 w-4 text-purple-400" /> Video
          </button>
        </div>
        <span className="flex items-center gap-1 text-purple-400">
          <Sparkles className="h-3.5 w-3.5" /> AI Assisted
        </span>
      </div>
    </div>
  )
}