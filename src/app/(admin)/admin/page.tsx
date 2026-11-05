'use client'

import { Users, MessageSquare, DollarSign, Activity } from 'lucide-react'

export default function AdminDashboardPage() {
  const stats = [
    { title: 'Total Members', value: '1,284', change: '+12% this month', icon: Users },
    { title: 'Active Posts', value: '342', change: '+24 today', icon: MessageSquare },
    { title: 'Monthly Revenue', value: '$4,850', change: '+18% vs last month', icon: DollarSign },
    { title: 'Engagement Rate', value: '88.4%', change: '+4.2%', icon: Activity },
  ]

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold font-serif tracking-tight text-white mb-1">
          Dashboard Overview
        </h1>
        <p className="text-sm text-gray-400">
          Monitor your community growth, engagement metrics, and financial status.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <div key={i} className="p-5 bg-[#12131c] border border-gray-800 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium">{stat.title}</span>
                <div className="w-8 h-8 rounded-xl bg-purple-900/40 border border-purple-700/50 flex items-center justify-center text-purple-300">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold font-serif text-white">{stat.value}</h3>
                <p className="text-[10px] text-purple-400 font-mono">{stat.change}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Activity Section */}
      <div className="p-6 bg-[#12131c] border border-gray-800 rounded-2xl space-y-4">
        <h3 className="font-serif font-bold text-base text-white">Recent System Activities</h3>
        <div className="space-y-3 text-xs text-gray-300">
          <div className="flex items-center justify-between py-2 border-b border-gray-800/80">
            <span>New member registered: <strong className="text-purple-400">Alex Morgan</strong> (Bangkok)</span>
            <span className="text-gray-500 font-mono">2 mins ago</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-800/80">
            <span>New subscription tier purchased: <strong className="text-purple-400">Pro Plan ($49/mo)</strong></span>
            <span className="text-gray-500 font-mono">15 mins ago</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span>New space created: <strong className="text-purple-400">#founders-mastermind</strong></span>
            <span className="text-gray-500 font-mono">1 hour ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}