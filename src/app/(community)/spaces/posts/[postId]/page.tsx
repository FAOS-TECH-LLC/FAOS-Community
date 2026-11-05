'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MessageSquare, ThumbsUp, Send, Share2 } from 'lucide-react'

export default function PostDetailPage() {
  const params = useParams()
  const spaceSlug = (params?.spaceSlug as string) || 'general'
  const postId = (params?.postId as string) || 'p1'

  const [likes, setLikes] = useState(24)
  const [hasLiked, setHasLiked] = useState(false)
  const [comments, setComments] = useState([
    { id: 'c1', author: 'Nikolas', avatar: 'NK', text: 'Great insights! Looking forward to applying this setup.', date: '2 hours ago' },
    { id: 'c2', author: 'Yamamoto Koji', avatar: 'YK', text: 'Very clear architecture breakdown. Thanks for sharing.', date: '1 hour ago' }
  ])
  const [newComment, setNewComment] = useState('')

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1)
      setHasLiked(false)
    } else {
      setLikes(likes + 1)
      setHasLiked(true)
    }
  }

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const commentObj = {
      id: Date.now().toString(),
      author: 'Patcharin C.',
      avatar: 'PC',
      text: newComment,
      date: 'Just now'
    }

    setComments([...comments, commentObj])
    setNewComment('')
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto font-sans pb-12">
      <Link href={`/spaces/${spaceSlug}`}>
        <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-gray-300 text-xs gap-2 cursor-pointer bg-[#12131c]">
          <ArrowLeft className="h-4 w-4" /> Back to Space
        </Button>
      </Link>

      {/* Full Article Card */}
      <div className="p-8 bg-[#12131c] border border-gray-800 rounded-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-gray-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-purple-600/40 border border-purple-400/50 flex items-center justify-center font-bold text-sm text-purple-300 font-serif shadow-md">
              PC
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm text-white">Patcharin C.</h3>
              <p className="text-[10px] text-gray-500 font-mono">Posted in #{spaceSlug} • Nov 5, 2026</p>
            </div>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-950/80 border border-purple-700/80 text-purple-300">
            Featured Post
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-bold font-serif text-white leading-snug">
            Welcome to FAOS Community! Let us introduce ourselves and our technical stack.
          </h1>
          <div className="text-sm text-gray-300 leading-relaxed space-y-4">
            <p>
              We are building a scalable, white-label SaaS community platform designed to replace expensive alternatives. By integrating Next.js App Router, Supabase, Tailwind CSS, and Mapbox, we empower community owners to fully own their data and customize their brand.
            </p>
            <p>
              This architecture supports modular routing for marketing, admin management, and interactive community modules including global member maps, real-time spaces, and automated subscription tracking via Stripe.
            </p>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex items-center gap-6 pt-4 border-t border-gray-800 text-xs text-gray-400 font-mono">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-colors cursor-pointer ${
              hasLiked ? 'bg-purple-600 border-purple-500 text-white' : 'bg-[#0b0c10] border-gray-800 hover:border-gray-700'
            }`}
          >
            <ThumbsUp className="h-4 w-4" /> {likes} Likes
          </button>
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" /> {comments.length} Comments
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="space-y-6">
        <h3 className="font-serif font-bold text-base text-white">Discussion & Comments</h3>

        {/* Add Comment Form */}
        <form onSubmit={handleAddComment} className="p-4 bg-[#12131c] border border-gray-800 rounded-2xl space-y-3">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
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

        {/* Comment List */}
        <div className="space-y-3">
          {comments.map((c) => (
            <div key={c.id} className="p-5 bg-[#12131c] border border-gray-800 rounded-2xl space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-purple-600/40 border border-purple-400/50 flex items-center justify-center font-bold text-xs text-purple-300 font-serif">
                    {c.avatar}
                  </div>
                  <span className="font-serif font-bold text-xs text-white">{c.author}</span>
                </div>
                <span className="text-[10px] text-gray-500 font-mono">{c.date}</span>
              </div>
              <p className="text-xs text-gray-300 pl-10 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}