'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MessageSquare, Plus, Trash2, Globe, Lock } from 'lucide-react'

interface CommunitySpace {
  id: string
  name: string
  slug: string
  description: string
  type: 'Public' | 'Private'
  postsCount: number
}

const INITIAL_SPACES: CommunitySpace[] = [
  { id: '1', name: 'General Discussion', slug: 'general', description: 'Main hub for general community announcements and chats.', type: 'Public', postsCount: 142 },
  { id: '2', name: 'Founders Mastermind', slug: 'founders', description: 'Exclusive space for business owners and high-tier members.', type: 'Private', postsCount: 58 },
  { id: '3', name: 'Tech & Architecture', slug: 'tech', description: 'Discussions about code, Next.js, Supabase, and DevOps.', type: 'Public', postsCount: 96 },
]

export default function AdminSpacesPage() {
  const [spaces, setSpaces] = useState<CommunitySpace[]>(INITIAL_SPACES)
  const [newSpaceName, setNewSpaceName] = useState('')
  const [newSpaceDesc, setNewSpaceDesc] = useState('')

  const handleAddSpace = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newSpaceName.trim()) return

    const newSpace: CommunitySpace = {
      id: Date.now().toString(),
      name: newSpaceName,
      slug: newSpaceName.toLowerCase().replace(/\s+/g, '-'),
      description: newSpaceDesc || 'New community space description.',
      type: 'Public',
      postsCount: 0,
    }

    setSpaces([...spaces, newSpace])
    setNewSpaceName('')
    setNewSpaceDesc('')
  }

  const handleDeleteSpace = (id: string) => {
    setSpaces(spaces.filter(s => s.id !== id))
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-sans">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-2xl font-bold font-serif tracking-tight text-white mb-1">
            Spaces Management
          </h1>
          <p className="text-sm text-gray-400">
            Create and organize channels or topic categories for your community members.
          </p>
        </div>
      </div>

      {/* Add New Space Form */}
      <form onSubmit={handleAddSpace} className="p-6 bg-[#12131c] border border-gray-800 rounded-2xl space-y-4">
        <h3 className="font-serif font-bold text-sm text-white">Create New Space</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            value={newSpaceName}
            onChange={(e) => setNewSpaceName(e.target.value)}
            placeholder="Space Name (e.g. Design & UI)"
            className="w-full bg-[#0b0c10] text-white px-4 py-2.5 rounded-xl border border-gray-800 text-xs focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            value={newSpaceDesc}
            onChange={(e) => setNewSpaceDesc(e.target.value)}
            placeholder="Short description..."
            className="w-full bg-[#0b0c10] text-white px-4 py-2.5 rounded-xl border border-gray-800 text-xs focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="bg-purple-600 hover:bg-purple-500 text-white text-xs gap-2 cursor-pointer shadow-lg shadow-purple-900/30">
            <Plus className="h-4 w-4" /> Add Space
          </Button>
        </div>
      </form>

      {/* Spaces List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {spaces.map((space) => (
          <div key={space.id} className="p-5 bg-[#12131c] border border-gray-800 rounded-2xl space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-purple-900/40 border border-purple-700/50 flex items-center justify-center text-purple-300">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <h4 className="font-serif font-bold text-sm text-white">{space.name}</h4>
                </div>
                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono border ${
                  space.type === 'Public' ? 'bg-emerald-950/60 border-emerald-800/60 text-emerald-400' : 'bg-amber-950/60 border-amber-800/60 text-amber-400'
                }`}>
                  {space.type === 'Public' ? <Globe className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
                  {space.type}
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{space.description}</p>
            </div>

            <div className="flex items-center justify-between border-t border-gray-800/80 pt-4 text-xs">
              <span className="text-gray-500 font-mono">{space.postsCount} posts</span>
              <Button
                variant="outline"
                onClick={() => handleDeleteSpace(space.id)}
                className="h-8 px-3 border-gray-700 hover:bg-rose-950/40 text-rose-400 hover:border-rose-800 cursor-pointer text-xs"
              >
                <Trash2 className="h-3.5 w-3.5 mr-1" /> Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}