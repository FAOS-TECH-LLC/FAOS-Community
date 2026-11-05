'use client'

import { Search, MapPin, UserCheck, Clock } from 'lucide-react'

interface MemberFilterProps {
  search: string
  setSearch: (val: string) => void
  filterType: 'all' | 'near' | 'online' | 'recent'
  setFilterType: (type: 'all' | 'near' | 'online' | 'recent') => void
  selectedLocation: string
  setSelectedLocation: (loc: string) => void
  selectedTag: string
  setSelectedTag: (tag: string) => void
}

export function MemberFilter({
  search,
  setSearch,
  filterType,
  setFilterType,
  selectedLocation,
  setSelectedLocation,
  selectedTag,
  setSelectedTag,
}: MemberFilterProps) {
  return (
    <div className="p-5 bg-[#12131c] border border-gray-800 rounded-2xl space-y-4 font-sans">
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
  )
}