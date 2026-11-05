'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MessageSquare, ThumbsUp, Share2, Plus } from 'lucide-react'

// Mock database สำหรับโพสต์ในแต่ละ Space
const SPACES_DATA: Record<string, { name: string; description: string; posts: { id: string; title: string; author: string; avatar: string; date: string; likes: number; comments: number }[] }> = {
  'general': {
    name: 'General Discussion',
    description: 'Main hub for general community announcements, networking, and chats.',
    posts: [
      { id: 'p1', title: 'Welcome to FAOS Community! Let us introduce ourselves.', author: 'Patcharin C.', avatar: 'PC', date: 'Nov 5, 2026', likes: 24, comments: 8 },
      { id: 'p2', title: 'Sharing tips on optimizing Next.js 16 App Router performance.', author: 'Nikolas', avatar: 'NK', date: 'Nov 4, 2026', likes: 19, comments: 5 },
    ]
  },
  'founders': {
    name: 'Founders Mastermind',
    description: 'Exclusive space for business owners, SaaS builders, and high-tier members.',
    posts: [
      { id: 'p3', title: 'Scaling cross-border operations and global contracts through EOR services.', author: 'Patcharin C.', avatar: 'PC', date: 'Nov 3, 2026', likes: 42, comments: 14 },
    ]
  },
  'tech': {
    name: 'Tech & Architecture',
    description: 'Discussions about code, Next.js, Supabase, TypeScript, and DevOps.',
    posts: [
      { id: 'p4', title: 'Automating deployment pipelines with GitHub Actions and VPS nodes.', author: 'Yamamoto Koji', avatar: 'YK', date: 'Nov 2, 2026', likes: 31, comments: 9 },
    ]
  }
}

export default function SpaceDetailPage() {
  const params = useParams()
  const spaceSlug = (params?.spaceSlug as string) || 'general'
  const space = SPACES_DATA[spaceSlug] || SPACES_DATA['general']

  return (
    <div className="space-y-6 max-w-4xl mx-auto font-sans pb-12">
      <Link href="/feed">
        <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-gray-300 text-xs gap-2 cursor-pointer bg-[#12131c]">
          <ArrowLeft className="h-4 w-4" /> Back to Feed Hub
        </Button>
      </Link>

      {/* Space Header */}
      <div className="p-6 bg-[#12131c] border border-gray-800 rounded-2xl space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-950/80 border border-purple-700/80 text-purple-300">
            #{spaceSlug}
          </span>
          <Button className="bg-purple-600 hover:bg-purple-500 text-white text-xs gap-2 cursor-pointer shadow-lg shadow-purple-950">
            <Plus className="h-4 w-4" /> Create Post
          </Button>
        </div>
        <h1 className="text-2xl font-bold font-serif text-white">{space.name}</h1>
        <p className="text-xs text-gray-400 leading-relaxed">{space.description}</p>
      </div>

      {/* Posts List in Space */}
      <div className="space-y-4">
        <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500">Posts in this Space ({space.posts.length})</h3>

        {space.posts.map((post) => (
          <div key={post.id} className="p-6 bg-[#12131c] border border-gray-800 rounded-2xl space-y-4 hover:border-gray-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-600/40 border border-purple-400/50 flex items-center justify-center font-bold text-xs text-purple-300 font-serif shadow-md">
                {post.avatar}
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-white">{post.author}</h4>
                <p className="text-[10px] text-gray-500 font-mono">{post.date}</p>
              </div>
            </div>

            <Link href={`/spaces/${spaceSlug}/posts/${post.id}`}>
              <h2 className="text-lg font-bold font-serif text-white hover:text-purple-400 transition-colors">
                {post.title}
              </h2>
            </Link>

            <div className="flex items-center gap-6 pt-2 border-t border-gray-800/80 text-xs text-gray-400 font-mono">
              <button className="flex items-center gap-1.5 hover:text-purple-400 transition-colors cursor-pointer">
                <ThumbsUp className="h-4 w-4" /> {post.likes} Likes
              </button>
              <Link href={`/spaces/${spaceSlug}/posts/${post.id}`} className="flex items-center gap-1.5 hover:text-purple-400 transition-colors">
                <MessageSquare className="h-4 w-4" /> {post.comments} Comments
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}