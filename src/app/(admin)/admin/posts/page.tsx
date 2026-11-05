'use client'

import { useState } from 'react'

interface PostItem {
  id: string
  author: string
  space: string
  content: string
  isPinned: boolean
  isFeatured: boolean
  status: 'Published' | 'Hidden'
  date: string
}

export default function AdminPostModerationPage() {
  const [posts, setPosts] = useState<PostItem[]>([
    {
      id: '1',
      author: 'Patcharin Chanaphukdee',
      space: 'Tech & Architecture',
      content: '🚀 Infrastructure migration completed on DigitalOcean VPS.',
      isPinned: true,
      isFeatured: true,
      status: 'Published',
      date: '2026-11-04',
    },
    {
      id: '2',
      author: 'Member User',
      space: 'General Discussion',
      content: 'Hello community! Excited to connect with everyone.',
      isPinned: false,
      isFeatured: false,
      status: 'Published',
      date: '2026-11-05',
    },
  ])

  const togglePin = (id: string) => {
    setPosts(posts.map(p => p.id === id ? { ...p, isPinned: !p.isPinned } : p))
  }

  const toggleStatus = (id: string) => {
    setPosts(posts.map(p => p.id === id ? { ...p, status: p.status === 'Published' ? 'Hidden' : 'Published' } : p))
  }

  const deletePost = (id: string) => {
    setPosts(posts.filter(p => p.id !== id))
  }

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white p-6 md:p-10 space-y-6">
      <div className="flex justify-between items-center border-b border-gray-800 pb-4">
        <div>
          <h1 className="text-xl font-bold font-mono">FAOS.COMMUNITY / POST MODERATION</h1>
          <p className="text-xs text-gray-400">Manage community feeds, pin announcements, and moderate content</p>
        </div>
        <span className="text-xs font-mono text-purple-400 bg-purple-950/50 px-3 py-1 rounded-full border border-purple-800">
          {posts.length} Total Posts
        </span>
      </div>

      <div className="p-6 rounded-2xl border border-gray-800 bg-[#12131c]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 text-xs font-mono uppercase">
                <th className="py-3 px-4">Author</th>
                <th className="py-3 px-4">Space</th>
                <th className="py-3 px-4">Content Preview</th>
                <th className="py-3 px-4">Badges</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-[#1a1b26]/50">
                  <td className="py-3 px-4 text-gray-200 font-medium">{post.author}</td>
                  <td className="py-3 px-4 text-purple-400 text-xs font-mono">{post.space}</td>
                  <td className="py-3 px-4 text-gray-300 text-xs truncate max-w-xs">{post.content}</td>
                  <td className="py-3 px-4">
                    <div className="flex gap-1.5">
                      {post.isPinned && <span className="bg-yellow-950 text-yellow-300 border border-yellow-800 px-2 py-0.5 rounded text-[10px] font-mono">📌 Pinned</span>}
                      {post.isFeatured && <span className="bg-purple-950 text-purple-300 border border-purple-800 px-2 py-0.5 rounded text-[10px] font-mono">⭐ Featured</span>}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`text-xs font-mono ${post.status === 'Published' ? 'text-green-400' : 'text-red-400'}`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right space-x-2">
                    <button 
                      onClick={() => togglePin(post.id)}
                      className="text-xs text-yellow-400 hover:underline cursor-pointer"
                    >
                      {post.isPinned ? 'Unpin' : 'Pin'}
                    </button>
                    <button 
                      onClick={() => toggleStatus(post.id)}
                      className="text-xs text-blue-400 hover:underline cursor-pointer"
                    >
                      {post.status === 'Published' ? 'Hide' : 'Show'}
                    </button>
                    <button 
                      onClick={() => deletePost(post.id)}
                      className="text-xs text-red-400 hover:underline cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}