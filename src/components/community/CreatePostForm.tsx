'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function CreatePostForm() {
  const [content, setContent] = useState('')

  return (
    <div className="p-4 bg-[#12131c] border border-gray-800 rounded-2xl space-y-3">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind? Share with the community..."
        className="w-full bg-[#0b0c10] text-white p-3 rounded-xl border border-gray-800 focus:outline-none focus:border-purple-500 text-xs resize-none h-24"
      />
      <div className="flex justify-end">
        <Button className="bg-purple-600 hover:bg-purple-500 text-white text-xs cursor-pointer">
          Post
        </Button>
      </div>
    </div>
  )
}