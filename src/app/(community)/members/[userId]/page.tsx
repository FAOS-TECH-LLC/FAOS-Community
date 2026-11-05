'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MapPin, Mail, Globe, Shield, Award, MessageSquare } from 'lucide-react'

// Mock database สำหรับดึงข้อมูลสมาชิกตาม ID
const MEMBERS_DATA: Record<string, { name: string; role: string; bio: string; location: string; tag: string; online: boolean; avatar: string; email: string; website: string }> = {
  '1': { name: 'Patcharin C.', role: 'Platform Architect', bio: 'Building scalable SaaS platforms, cross-border tech solutions, and enterprise procurement systems.', location: 'Bangkok, Thailand', tag: 'Next.js', online: true, avatar: 'PC', email: 'patcharin@faos-tech.asia', website: 'https://patcharin-dev.online' },
  '2': { name: 'Nikolas', role: 'Global Partner', bio: 'Agricultural tech and international supply chain specialist focusing on premium olive oils and natural honey.', location: 'Athens, Greece', tag: 'Agriculture', online: true, avatar: 'NK', email: 'nikolas@greece.com', website: 'https://faos.asia' },
  '3': { name: 'Yamamoto Koji', role: 'Enterprise Contributor', bio: 'Industrial automation, robotics integration, and procurement data analytics.', location: 'Tokyo, Japan', tag: 'DevOps', online: false, avatar: 'YK', email: 'koji@yanmar.co.jp', website: 'https://yanmar.com' },
  '4': { name: 'Alex Morgan', role: 'Community Member', bio: 'Full-stack developer exploring modern web frameworks and UI/UX component architectures.', location: 'London, United Kingdom', tag: 'TypeScript', online: true, avatar: 'AM', email: 'alex@morgan.dev', website: 'https://github.com' }
}

export default function MemberProfilePage() {
  const params = useParams()
  const userId = (params?.userId as string) || '1'
  const member = MEMBERS_DATA[userId] || MEMBERS_DATA['1']

  return (
    <div className="space-y-6 max-w-4xl mx-auto font-sans pb-12">
      <Link href="/members">
        <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-gray-300 text-xs gap-2 cursor-pointer bg-[#12131c]">
          <ArrowLeft className="h-4 w-4" /> Back to Directory
        </Button>
      </Link>

      {/* Profile Header Card */}
      <div className="p-8 bg-[#12131c] border border-gray-800 rounded-2xl space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-purple-600/40 border-2 border-purple-400/60 flex items-center justify-center font-bold text-xl text-purple-300 font-serif shadow-xl">
                {member.avatar}
              </div>
              {member.online && (
                <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-[#12131c] rounded-full" />
              )}
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold font-serif text-white">{member.name}</h1>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono bg-purple-950/80 border border-purple-700/80 text-purple-300">
                  <Shield className="h-3 w-3" /> {member.role}
                </span>
              </div>
              <p className="text-xs text-gray-400 font-mono flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-purple-400" /> {member.location}
              </p>
            </div>
          </div>

          <Button className="bg-purple-600 hover:bg-purple-500 text-white text-xs gap-2 cursor-pointer shadow-lg shadow-purple-950">
            <MessageSquare className="h-4 w-4" /> Send Message
          </Button>
        </div>

        <div className="border-t border-gray-800/80 pt-6 space-y-4">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-2">About</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{member.bio}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-[#0b0c10] border border-gray-800 rounded-xl space-y-1">
              <span className="text-[10px] font-mono text-gray-500 block">Email Address</span>
              <span className="text-xs text-purple-300 font-mono flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5" /> {member.email}
              </span>
            </div>

            <div className="p-4 bg-[#0b0c10] border border-gray-800 rounded-xl space-y-1">
              <span className="text-[10px] font-mono text-gray-500 block">Website / Portfolio</span>
              <a href={member.website} target="_blank" rel="noreferrer" className="text-xs text-purple-300 font-mono flex items-center gap-1.5 hover:underline">
                <Globe className="h-3.5 w-3.5" /> {member.website}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}