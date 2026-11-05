'use client'

import { useState } from 'react'
import { Trophy, Award, Star, Flame } from 'lucide-react'

interface LeaderboardUser {
  rank: number
  name: string
  role: string
  points: number
  badge: string
  city: string
}

const LEADERBOARD_DATA: LeaderboardUser[] = [
  { rank: 1, name: 'Patcharin C.', role: 'Platform Architect', points: 2840, badge: '💎 Diamond Legend', city: 'Bangkok' },
  { rank: 2, name: 'Nikolas', role: 'Global Partner', points: 2150, badge: '🔥 Gold Elite', city: 'Athens' },
  { rank: 3, name: 'Yamamoto Koji', role: 'Enterprise Contributor', points: 1920, badge: '⭐ Silver Pro', city: 'Tokyo' },
  { rank: 4, name: 'Alex Morgan', role: 'Community Member', points: 1450, badge: '🚀 Rising Star', city: 'London' },
]

export default function LeaderboardPage() {
  const [tab, setTab] = useState<'7d' | '30d' | 'all'>('30d')

  return (
    <div className="space-y-6 max-w-7xl mx-auto font-sans pb-12">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-2xl font-bold font-serif tracking-tight text-white mb-1">
            Community Leaderboard
          </h1>
          <p className="text-sm text-gray-400">
            Recognizing top contributors, active members, and community leaders.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-1 bg-[#12131c] p-1 rounded-xl border border-gray-800 text-xs font-mono">
          <button
            onClick={() => setTab('7d')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${tab === '7d' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Last 7 Days
          </button>
          <button
            onClick={() => setTab('30d')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${tab === '30d' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            Last 30 Days
          </button>
          <button
            onClick={() => setTab('all')}
            className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${tab === 'all' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
          >
            All-Time
          </button>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-[#12131c] border border-gray-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 font-mono bg-[#0b0c10]/40">
                <th className="p-4 font-medium w-16 text-center">Rank</th>
                <th className="p-4 font-medium">Member</th>
                <th className="p-4 font-medium">Level / Badge</th>
                <th className="p-4 font-medium">Location</th>
                <th className="p-4 font-medium text-right">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/80 text-gray-300">
              {LEADERBOARD_DATA.map((user) => (
                <tr key={user.rank} className="hover:bg-gray-800/20 transition-colors">
                  <td className="p-4 text-center font-serif font-bold">
                    {user.rank === 1 ? (
                      <span className="inline-flex w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400/50 items-center justify-center text-amber-300">🥇</span>
                    ) : user.rank === 2 ? (
                      <span className="inline-flex w-7 h-7 rounded-full bg-slate-400/20 border border-slate-400/50 items-center justify-center text-slate-300">🥈</span>
                    ) : user.rank === 3 ? (
                      <span className="inline-flex w-7 h-7 rounded-full bg-amber-700/20 border border-amber-600/50 items-center justify-center text-amber-500">🥉</span>
                    ) : (
                      <span className="text-gray-500 font-mono">#{user.rank}</span>
                    )}
                  </td>
                  <td className="p-4">
                    <div className="font-serif font-bold text-white text-sm">{user.name}</div>
                    <div className="text-[10px] text-purple-400 font-mono">{user.role}</div>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono bg-purple-950/80 border border-purple-700/80 text-purple-300">
                      <Award className="h-3 w-3" /> {user.badge}
                    </span>
                  </td>
                  <td className="p-4 font-mono text-gray-400">{user.city}</td>
                  <td className="p-4 text-right font-mono font-bold text-white text-sm">
                    {user.points.toLocaleString()} XP
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