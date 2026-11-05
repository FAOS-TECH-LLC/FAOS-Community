'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send, Image, X } from 'lucide-react'

export function PostEditor({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 font-sans">
      <div className="bg-[#12131c] border border-gray-800 rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-gray-800 pb-3">
          <h3 className="font-serif font-bold text-sm text-white">Create New Post</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white cursor-pointer">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post Title..."
            className="w-full bg-[#0b0c10] text-white px-4 py-2.5 rounded-xl border border-gray-800 text-xs focus:outline-none focus:border-purple-500 font-serif font-bold"
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your article or thoughts here..."
            rows={5}
            className="w-full bg-[#0b0c10] text-white p-4 rounded-xl border border-gray-800 text-xs focus:outline-none focus:border-purple-500 resize-none leading-relaxed"
          />
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-800">
          <button className="flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 font-mono cursor-pointer">
            <Image className="h-4 w-4" /> Add Media
          </button>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={onClose} className="border-gray-700 hover:bg-gray-800 text-gray-300 text-xs cursor-pointer">
              Cancel
            </Button>
            <Button onClick={onClose} className="bg-purple-600 hover:bg-purple-500 text-white text-xs gap-1.5 cursor-pointer">
              <Send className="h-3.5 w-3.5" /> Publish Post
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}