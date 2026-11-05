'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Search, Shield, UserX, CheckCircle, Mail } from 'lucide-react'

interface AdminMember {
  id: string
  name: string
  email: string
  role: 'Admin' | 'Pro Member' | 'Member'
  city: string
  status: 'Active' | 'Suspended'
}

const INITIAL_MEMBERS: AdminMember[] = [
  { id: '1', name: 'Patcharin C.', email: 'patcharin@faos-tech.asia', role: 'Admin', city: 'Bangkok', status: 'Active' },
  { id: '2', name: 'Nikolas', email: 'nikolas@greece.com', role: 'Pro Member', city: 'Athens', status: 'Active' },
  { id: '3', name: 'Yamamoto Koji', email: 'koji@yanmar.co.jp', role: 'Member', city: 'Tokyo', status: 'Active' },
]

export default function AdminMembersPage() {
  const [members, setMembers] = useState<AdminMember[]>(INITIAL_MEMBERS)
  const [search, setSearch] = useState('')

  const filteredMembers = members.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      m.city.toLowerCase().includes(search.toLowerCase())
  )

  const toggleStatus = (id: string) => {
    setMembers(
      members.map((m) =>
        m.id === id ? { ...m, status: m.status === 'Active' ? 'Suspended' : 'Active' } : m
      )
    )
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-sans">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-2xl font-bold font-serif tracking-tight text-white mb-1">
            Member Management
          </h1>
          <p className="text-sm text-gray-400">
            View, manage roles, and control community access for all registered users.
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, email, city..."
            className="w-full bg-[#12131c] text-white pl-10 pr-4 py-2.5 rounded-xl border border-gray-800 text-xs focus:outline-none focus:border-purple-500"
          />
        </div>
      </div>

      {/* Members Table */}
      <div className="bg-[#12131c] border border-gray-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 font-mono bg-[#0b0c10]/40">
                <th className="p-4 font-medium">User Profile</th>
                <th className="p-4 font-medium">Role</th>
                <th className="p-4 font-medium">Location</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/80 text-gray-300">
              {filteredMembers.map((member) => (
                <tr key={member.id} className="hover:bg-gray-800/20 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-purple-600/40 border border-purple-400/50 flex items-center justify-center font-bold text-xs text-purple-300 font-serif">
                        {member.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-serif font-bold text-white">{member.name}</div>
                        <div className="text-[10px] text-gray-500 font-mono flex items-center gap-1">
                          <Mail className="h-3 w-3" /> {member.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono border ${
                        member.role === 'Admin'
                          ? 'bg-purple-950/80 border-purple-700/80 text-purple-300'
                          : member.role === 'Pro Member'
                          ? 'bg-indigo-950/80 border-indigo-700/80 text-indigo-300'
                          : 'bg-gray-800/80 border-gray-700 text-gray-300'
                      }`}
                    >
                      <Shield className="h-3 w-3" /> {member.role}
                    </span>
                  </td>
                  <td className="p-4 font-mono text-gray-400">{member.city}</td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono ${
                        member.status === 'Active'
                          ? 'bg-emerald-950/60 border border-emerald-800/60 text-emerald-400'
                          : 'bg-rose-950/60 border border-rose-800/60 text-rose-400'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${member.status === 'Active' ? 'bg-emerald-400' : 'bg-rose-400'}`} />
                      {member.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Button
                      variant="outline"
                      onClick={() => toggleStatus(member.id)}
                      className={`text-[11px] h-8 px-3 cursor-pointer border-gray-700 ${
                        member.status === 'Active'
                          ? 'hover:bg-rose-950/40 text-rose-400 hover:border-rose-800'
                          : 'hover:bg-emerald-950/40 text-emerald-400 hover:border-emerald-800'
                      }`}
                    >
                      {member.status === 'Active' ? (
                        <>
                          <UserX className="h-3.5 w-3.5 mr-1.5" /> Suspend
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-3.5 w-3.5 mr-1.5" /> Activate
                        </>
                      )}
                    </Button>
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