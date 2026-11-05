'use client'

import { useState } from 'react'
import CreatePostForm from '@/components/community/CreatePostForm'
import PostCard from '@/components/community/PostCard'

export default function CommunityFeedPage() {
  const [posts, setPosts] = useState([])

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* 1. Header Banner Component */}
      <div className="p-6 rounded-2xl border border-gray-800 bg-[#12131c] flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold font-mono text-white">Global Community Feed</h1>
          <p className="text-sm text-gray-400">Discover discussions & updates from FAOS members</p>
        </div>
        <span className="px-3 py-1 rounded-full bg-purple-900/40 border border-purple-800/60 text-purple-300 text-xs font-mono">Live Feed</span>
      </div>

      {/* 2. Form สร้างโพสต์ (แยก Component) */}
      <CreatePostForm onPostCreated={(newPost) => setPosts([newPost, ...posts])} />

      {/* 3. รายการโพสต์ (แยก Component) */}
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}