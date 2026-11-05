'use client'

import { useState } from 'react'

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState([
    { id: 'b1', title: 'Next.js 16 & Server Actions Deep Dive', type: 'Post', date: 'Saved Nov 4' },
  ])

  const addBookmark = (item: { id: string; title: string; type: string }) => {
    setBookmarks([...bookmarks, { ...item, date: 'Just now' }])
  }

  const removeBookmark = (id: string) => {
    setBookmarks(bookmarks.filter((b) => b.id !== id))
  }

  return { bookmarks, addBookmark, removeBookmark }
}