'use client'

import { useState } from 'react'

export function usePosts() {
  const [posts, setPosts] = useState([
    {
      id: 'p1',
      spaceSlug: 'general',
      title: 'Welcome to FAOS Community! Let us introduce ourselves.',
      content: 'We are building a scalable white-label SaaS community platform...',
      author: 'Patcharin C.',
      avatar: 'PC',
      date: 'Nov 5, 2026',
      likes: 24,
      comments: 8,
    },
  ])

  const createPost = (title: string, content: string, spaceSlug: string) => {
    const newPost = {
      id: `p_${Date.now()}`,
      spaceSlug,
      title,
      content,
      author: 'Patcharin C.',
      avatar: 'PC',
      date: 'Just now',
      likes: 0,
      comments: 0,
    }
    setPosts([newPost, ...posts])
  }

  return { posts, createPost }
}