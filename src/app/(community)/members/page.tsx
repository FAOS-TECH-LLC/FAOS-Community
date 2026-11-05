'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, MapPin, Globe, UserCheck, Clock, Shield, Map as MapIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Member {
  id: string
  name: string
  role: string
  bio: string
  location: string
  tag: string
  online: boolean
  avatar: string
}

const INITIAL_MEMBERS: Member[] = [
  { id: '1', name: 'Patcharin C.', role: 'Platform Architect', bio: 'Building scalable SaaS platforms and cross-border tech solutions.', location: 'Bangkok, Thailand', tag: 'Next.js', online: true, avatar: 'PC' },
  { id: '2', name: 'Nikolas', role: 'Global Partner', bio: 'Agricultural tech and international supply chain specialist.', location: 'Athens, Greece', tag: 'Agriculture', online: true, avatar: 'NK' },
  { id: '3', name: 'Yamamoto Koji', role: 'Enterprise Contributor', bio: 'Industrial automation and procurement data systems.', location: 'Tokyo, Japan', tag: 'DevOps', online: false, avatar: 'YK' },
  { id: '4', name: 'Alex Morgan', role: 'Community Member', bio: 'Full-stack developer exploring modern web frameworks.', location: 'London, United Kingdom', tag: 'TypeScript', online: true, avatar: 'AM' },
]

export default function MembersDirectoryPage() {
  const [search, setSearch] = useState('')
  const [filterType, setFilterType] = useState<'all' | 'near' | 'online' | 'recent'>('all')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedTag, setSelectedTag] = useState('')

  const filteredMembers = INITIAL_MEMBERS.filter((m) => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.bio.toLowerCase().includes(search.toLowerCase())
    const matchesOnline = filterType === 'online' ? m.online : true
    const matchesLocation = selectedLocation ? m.location.toLowerCase().includes(selectedLocation.toLowerCase()) : true
    const matchesTag = selectedTag ? m.tag === selectedTag : true
    return matchesSearch && matchesOnline && matchesLocation && matchesTag
  })

  return (
    <div className="space-y-6 max-w-7xl mx-auto font-sans pb-12">
      {/* Header & Map Toggle */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-2xl font-bold font-serif tracking-tight text-white mb-1">
            Members Directory
          </h1>
          <p className="text-sm text-gray-400">
            Connect with global professionals, developers, and partners in the community.
          </p>
        </div>

        <Link href="/members/map">
          <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-gray-300 text-xs gap-2 cursor-pointer bg-[#12131c]">
            <MapIcon className="h-4 w-4 text-purple-400" /> Show Global Map
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 space-y-6">
          <div className="p-5 bg-[#12131c] border border-gray-800 rounded-2xl space-y-4">
            <h3 className="font-serif font-bold text-sm text-white">Find members</h3>

            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full bg-[#0b0c10] text-white pl-10 pr-4 py-2 rounded-xl border border-gray-800 text-xs focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilterType('near')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono border cursor-pointer transition-colors ${
                  filterType === 'near' ? 'bg-purple-600 border-purple-500 text-white' : 'bg-[#0b0c10] border-gray-800 text-gray-300 hover:border-gray-700'
                }`}
              >
                <MapPin className="h-3.5 w-3.5" /> Near me
              </button>
              <button
                onClick={() => setFilterType('online')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono border cursor-pointer transition-colors ${
                  filterType === 'online' ? 'bg-purple-600 border-purple-500 text-white' : 'bg-[#0b0c10] border-gray-800 text-gray-300 hover:border-gray-700'
                }`}
              >
                <UserCheck className="h-3.5 w-3.5" /> Online
              </button>
              <button
                onClick={() => setFilterType('recent')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono border cursor-pointer transition-colors ${
                  filterType === 'recent' ? 'bg-purple-600 border-purple-500 text-white' : 'bg-[#0b0c10] border-gray-800 text-gray-300 hover:border-gray-700'
                }`}
              >
                <Clock className="h-3.5 w-3.5" /> Recently joined
              </button>
            </div>

            <div className="border-t border-gray-800/80 pt-4 space-y-2">
              <label className="block text-xs font-medium text-gray-400">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-[#0b0c10] text-white px-3 py-2 rounded-xl border border-gray-800 text-xs focus:outline-none focus:border-purple-500"
              >
                <option value="">All locations</option>
                <option value="Bangkok">Bangkok</option>
                <option value="Athens">Athens</option>
                <option value="Tokyo">Tokyo</option>
                <option value="London">London</option>
              </select>
            </div>

            <div className="border-t border-gray-800/80 pt-4 space-y-2">
              <label className="block text-xs font-medium text-gray-400">Tag / Expertise</label>
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="w-full bg-[#0b0c10] text-white px-3 py-2 rounded-xl border border-gray-800 text-xs focus:outline-none focus:border-purple-500"
              >
                <option value="">Select an option</option>
                <option value="Next.js">Next.js</option>
                <option value="Agriculture">Agriculture</option>
                <option value="DevOps">DevOps</option>
                <option value="TypeScript">TypeScript</option>
              </select>
            </div>
          </div>
        </div>

        {/* Members List */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between bg-[#12131c] px-5 py-3 rounded-xl border border-gray-800 text-xs text-gray-400 font-mono">
            <span>All members</span>
            <span className="text-white font-bold">{filteredMembers.length} found</span>
          </div>

          <div className="space-y-3">
            {filteredMembers.map((member) => (
              <div key={member.id} className="p-5 bg-[#12131c] border border-gray-800 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-gray-700 transition-colors">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-purple-600/40 border border-purple-400/50 flex items-center justify-center font-bold text-sm text-purple-300 font-serif shadow-md">
                      {member.avatar}
                    </div>
                    {member.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#12131c] rounded-full" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-serif font-bold text-sm text-white">{member.name}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-950/80 border border-purple-700/80 text-purple-300">
                        {member.role}
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed max-w-xl">{member.bio}</p>
                    <div className="flex items-center gap-4 text-[11px] text-gray-500 font-mono pt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-purple-400" /> {member.location}
                      </span>
                      <span className="text-purple-400 font-mono">#{member.tag}</span>
                    </div>
                  </div>
                </div>

                <Link href={`/members/${member.id}`}>
                  <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-gray-300 text-xs h-9 cursor-pointer">
                    View profile
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}