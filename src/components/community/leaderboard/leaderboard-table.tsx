'use client'

import { Trophy, Award } from 'lucide-react'
import { LevelBadge } from './level-badge'

export function LeaderboardTable() {
  const leaders = [
    { rank: 1, name: 'Patcharin C.', avatar: 'PC', points: 2450, role: 'Platform Architect', level: 'Contributor' },
    { rank: 2, name: 'Nikolas', avatar: 'NK', points: 1920, role: 'Global Partner', level: 'Novice' },
    { rank: 3, name: 'Yamamoto Koji', avatar: 'YK', points: 1540, role: 'Enterprise Contributor', level: 'Novice' },
    { rank: 4, name: 'Alex Morgan', avatar: 'AM', points: 980, role: 'Community Member', level: 'Newcomer' },
  ]

  return (
    <div className="bg-[#12131c] border border-gray-800 rounded-2xl overflow-hidden font-sans">
      <table className="w-full text-left border-collapse text-xs">
        <thead>
          <tr className="border-b border-gray-800 text-gray-400 font-mono bg-[#0b0c10]/40">
            <th className="p-4 font-medium w-16 text-center">Rank</th>
            <th className="p-4 font-medium">Member</th>
            <th className="p-4 font-medium">Role</th>
            <th className="p-4 font-medium">Level</th>
            <th className="p-4 font-medium text-right">Points</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800/80 text-gray-300">
          {leaders.map((item) => (
            <tr key={item.rank} className="hover:bg-gray-800/20 transition-colors">
              <td className="p-4 font-mono font-bold text-center text-white">
                {item.rank === 1 ? <Trophy className="h-4 w-4 text-yellow-400 mx-auto" /> : `#${item.rank}`}
              </td>
              <td className="p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-600/40 border border-purple-400/50 flex items-center justify-center font-bold text-xs text-purple-300 font-serif">
                  {item.avatar}
                </div>
                <span className="font-serif font-bold text-white">{item.name}</span>
              </td>
              <td className="p-4 text-purple-300">{item.role}</td>
              <td className="p-4">
                <LevelBadge level={item.level} />
              </td>
              <td className="p-4 text-right font-mono font-bold text-white">{item.points} XP</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}