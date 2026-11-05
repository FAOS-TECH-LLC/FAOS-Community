'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Settings, Save, Globe, Palette } from 'lucide-react'

export default function AdminSettingsPage() {
  const [communityName, setCommunityName] = useState('FAOS Community')
  const [customDomain, setCustomDomain] = useState('community.faos-tech.asia')
  const [primaryColor, setPrimaryColor] = useState('#9333ea')
  const [saved, setSaved] = useState(false)

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto font-sans">
      <div className="border-b border-gray-800 pb-6">
        <h1 className="text-2xl font-bold font-serif tracking-tight text-white mb-1">
          Platform & Brand Settings
        </h1>
        <p className="text-sm text-gray-400">
          Customize your white-label community branding, domain name, and primary accent colors.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* General Settings */}
        <div className="p-6 bg-[#12131c] border border-gray-800 rounded-2xl space-y-4">
          <div className="flex items-center gap-2 border-b border-gray-800 pb-3">
            <Settings className="h-4 w-4 text-purple-400" />
            <h3 className="font-serif font-bold text-sm text-white">General Branding</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs text-gray-400 font-medium mb-1.5">Community Name</label>
              <input
                type="text"
                value={communityName}
                onChange={(e) => setCommunityName(e.target.value)}
                className="w-full bg-[#0b0c10] text-white px-4 py-2.5 rounded-xl border border-gray-800 text-xs focus:outline-none focus:border-purple-500 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs text-gray-400 font-medium mb-1.5">Custom Domain</label>
              <div className="relative">
                <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  type="text"
                  value={customDomain}
                  onChange={(e) => setCustomDomain(e.target.value)}
                  className="w-full bg-[#0b0c10] text-white pl-10 pr-4 py-2.5 rounded-xl border border-gray-800 text-xs focus:outline-none focus:border-purple-500 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-400 font-medium mb-1.5">Primary Accent Color</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-10 h-10 rounded-xl bg-transparent border border-gray-800 cursor-pointer"
                />
                <input
                  type="text"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-32 bg-[#0b0c10] text-white px-4 py-2 rounded-xl border border-gray-800 text-xs font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Save Button & Feedback */}
        <div className="flex items-center justify-between pt-2">
          {saved ? (
            <span className="text-xs text-emerald-400 font-mono">Settings saved successfully!</span>
          ) : <span />}

          <Button type="submit" className="bg-purple-600 hover:bg-purple-500 text-white text-xs gap-2 cursor-pointer shadow-lg shadow-purple-900/30">
            <Save className="h-4 w-4" /> Save Changes
          </Button>
        </div>
      </form>
    </div>
  )
}