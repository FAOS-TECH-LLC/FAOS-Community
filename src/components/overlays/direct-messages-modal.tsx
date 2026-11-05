'use client'

import { useState } from 'react'
import { MessageSquare, Send, X, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function DirectMessagesModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [message, setMessage] = useState('')
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 font-sans">
      <div className="bg-[#12131c] border border-gray-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col h-[500px]">
        {/* Header */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-[#0b0c10]/60">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-purple-400" />
            <h3 className="font-serif font-bold text-sm text-white">Direct Messages</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white cursor-pointer">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Chat Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
          <div className="flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-full bg-purple-600/40 border border-purple-400/50 flex items-center justify-center font-bold text-xs text-purple-300 font-serif">
              NK
            </div>
            <div className="p-3 bg-[#0b0c10] border border-gray-800 rounded-2xl rounded-tl-none max-w-xs space-y-1">
              <span className="font-serif font-bold text-xs text-white">Nikolas</span>
              <p className="text-xs text-gray-300">Hi Patcharin, let is review the supply chain metrics tomorrow.</p>
            </div>
          </div>
        </div>

        {/* Input Footer */}
        <div className="p-4 border-t border-gray-800 bg-[#0b0c10]/60 flex items-center gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-[#12131c] text-white px-3.5 py-2 rounded-xl border border-gray-800 text-xs focus:outline-none focus:border-purple-500"
          />
          <Button className="bg-purple-600 hover:bg-purple-500 text-white h-9 px-4 text-xs cursor-pointer">
            <Send className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
    </div>
  )
}