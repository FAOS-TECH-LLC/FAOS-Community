'use client'

import Link from 'next/link'
import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react'

interface PostCardProps {
  id: string
  spaceSlug: string
  title: string
  content: string
  author: string
  avatar: string
  date: string
  likes: number
  comments: number
}

export function PostCard({ id, spaceSlug, title, content, author, avatar, date, likes, comments }: PostCardProps) {
  return (
    <div className="p-6 bg-[#12131c] border border-gray-800 rounded-2xl space-y-4 hover:border-gray-700 transition-colors font-sans">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-600/40 border border-purple-400/50 flex items-center justify-center font-bold text-xs text-purple-300 font-serif">
            {avatar}
          </div>
          <div>
            <h4 className="font-serif font-bold text-sm text-white">{author}</h4>
            <p className="text-[10px] text-gray-500 font-mono">Posted in #{spaceSlug} • {date}</p>
          </div>
        </div>
        <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-purple-950/80 border border-purple-700/80 text-purple-300">
          #{spaceSlug}
        </span>
      </div>

      <div className="space-y-2">
        <Link href={`/spaces/${spaceSlug}/posts/${id}`}>
          <h2 className="text-base font-bold font-serif text-white hover:text-purple-400 transition-colors">
            {title}
          </h2>
        </Link>
        <p className="text-xs text-gray-300 leading-relaxed line-clamp-2">{content}</p>
      </div>

      <div className="flex items-center gap-6 pt-3 border-t border-gray-800/80 text-xs text-gray-400 font-mono">
        <button className="flex items-center gap-1.5 hover:text-purple-400 transition-colors cursor-pointer">
          <ThumbsUp className="h-4 w-4" /> {likes} Likes
        </button>
        <Link href={`/spaces/${spaceSlug}/posts/${id}`} className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
          <MessageSquare className="h-4 w-4" /> {comments} Comments
        </Link>
      </div>
    </div>
  )
}