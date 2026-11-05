'use client'

import { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string
  change: string
  isPositive?: boolean
  icon: LucideIcon
}

export function StatsCard({ title, value, change, isPositive = true, icon: Icon }: StatsCardProps) {
  return (
    <div className="p-6 bg-[#12131c] border border-gray-800 rounded-2xl space-y-4 font-sans hover:border-gray-700 transition-colors">
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400 font-mono">{title}</span>
        <div className="w-9 h-9 rounded-xl bg-purple-900/40 border border-purple-700/50 flex items-center justify-center text-purple-300">
          <Icon className="h-4 w-4" />
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-2xl font-bold font-serif text-white tracking-tight">{value}</h3>
        <p className="text-[11px] font-mono flex items-center gap-1">
          <span className={isPositive ? 'text-emerald-400' : 'text-rose-400'}>
            {change}
          </span>
          <span className="text-gray-500">vs last month</span>
        </p>
      </div>
    </div>
  )
}