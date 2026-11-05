'use client'

interface Post {
  id: string
  content: string
  author: string
  created_at: string
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="p-5 bg-[#12131c] border border-gray-800 rounded-2xl space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-purple-400 font-serif">{post.author}</span>
        <span className="text-[10px] text-gray-500 font-mono">{post.created_at}</span>
      </div>
      <p className="text-xs text-gray-200 font-sans leading-relaxed">{post.content}</p>
    </div>
  )
}