'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'

export function CommentInput({ onSubmit }: { onSubmit: (text: string) => void }) {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return
    onSubmit(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-[#12131c] border border-gray-800 rounded-2xl space-y-3 font-sans">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your thoughts or feedback..."
        rows={3}
        className="w-full bg-[#0b0c10] text-white p-3 rounded-xl border border-gray-800 text-xs focus:outline-none focus:border-purple-500 resize-none"
      />
      <div className="flex justify-end">
        <Button type="submit" className="bg-purple-600 hover:bg-purple-500 text-white text-xs gap-2 cursor-pointer shadow-lg shadow-purple-950">
          <Send className="h-3.5 w-3.5" /> Post Comment
        </Button>
      </div>
    </form>
  )
}