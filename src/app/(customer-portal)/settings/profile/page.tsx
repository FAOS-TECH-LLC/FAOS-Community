'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { User, Mail, MapPin, Globe, Save } from 'lucide-react'

export default function UserProfileSettingsPage() {
  const [name, setName] = useState('Patcharin C.')
  const [email, setEmail] = useState('patcharin@faos-tech.asia')
  const [location, setLocation] = useState('Bangkok, Thailand')
  const [bio, setBio] = useState('Building scalable SaaS platforms and cross-border tech solutions.')
  const [saved, setSaved] = useState(false)

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto font-sans pb-12">
      <div className="border-b border-gray-800 pb-6">
        <h1 className="text-2xl font-bold font-serif tracking-tight text-white mb-1">
          Profile Settings
        </h1>
        <p className="text-sm text-gray-400">
          Update your personal details, public bio, and avatar appearance across the community.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <div className="p-6 bg-[#12131c] border border-gray-800 rounded-2xl space-y-6">
          {/* Avatar Section */}
          <div className="flex items-center gap-4 border-b border-gray-800 pb-6">
            <div className="w-16 h-16 rounded-full bg-purple-600/40 border-2 border-purple-400/60 flex items-center justify-center font-bold text-lg text-purple-300 font-serif shadow-lg">
              PC
            </div>
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-sm text-white">Profile Avatar</h3>
              <p className="text-xs text-gray-400">Initials automatically generated from your name.</p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-400 font-medium mb-1.5">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#0b0c10] text-white px-4 py-2.5 rounded-xl border border-gray-800 text-xs focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 font-medium mb-1.5">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0b0c10] text-white pl-10 pr-4 py-2.5 rounded-xl border border-gray-800 text-xs focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs text-gray-400 font-medium mb-1.5">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-[#0b0c10] text-white pl-10 pr-4 py-2.5 rounded-xl border border-gray-800 text-xs focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs text-gray-400 font-medium mb-1.5">Bio / Professional Summary</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                className="w-full bg-[#0b0c10] text-white p-3 rounded-xl border border-gray-800 text-xs focus:outline-none focus:border-purple-500 resize-none"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          {saved ? (
            <span className="text-xs text-emerald-400 font-mono">Changes saved successfully!</span>
          ) : <span />}

          <Button type="submit" className="bg-purple-600 hover:bg-purple-500 text-white text-xs gap-2 cursor-pointer shadow-lg shadow-purple-950">
            <Save className="h-4 w-4" /> Save Profile
          </Button>
        </div>
      </form>
    </div>
  )
}