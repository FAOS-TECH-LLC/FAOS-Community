'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl'
import { createClient } from '@supabase/supabase-js'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MapPin, Globe } from 'lucide-react'
import 'mapbox-gl/dist/mapbox-gl.css'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseAnonKey)

interface Profile {
  id: string
  name: string
  role: string
  city: string
  country: string
  latitude: number
  longitude: number
  avatar: string
}

export default function MembersMapPage() {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMemberLocations() {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .not('latitude', 'is', null)
          .not('longitude', 'is', null)

        if (error) {
          console.error('Error fetching profiles:', error)
        } else if (data) {
          setProfiles(data as Profile[])
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchMemberLocations()
  }, [])

  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12 font-sans">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-800 pb-6">
        <div className="flex items-center gap-4">
          <Link href="/members">
            <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-gray-300 text-xs gap-2 cursor-pointer">
              <ArrowLeft className="h-4 w-4" /> Back to List
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold font-serif tracking-tight text-white mb-1">
              Global Member Map
            </h1>
            <p className="text-sm text-gray-400">
              Real-time member locations powered by Mapbox & Supabase.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-[#12131c] px-4 py-2 rounded-xl border border-gray-800 text-xs text-gray-300 font-mono">
          <Globe className="h-4 w-4 text-purple-400" />
          <span>Active Nodes: <strong className="text-white">{profiles.length}</strong></span>
        </div>
      </div>

      <div className="relative w-full h-[650px] rounded-2xl border border-gray-800 overflow-hidden bg-[#0b0c10]">
        {loading && (
          <div className="absolute inset-0 bg-[#0b0c10]/80 z-20 flex items-center justify-center text-sm text-purple-400 font-mono">
            Loading global locations from Supabase...
          </div>
        )}

        {!mapboxToken ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-gray-400 space-y-2">
            <p className="text-amber-400 font-mono text-xs">⚠️ Missing Mapbox Token</p>
            <p className="text-xs">Please add <code className="text-purple-400">NEXT_PUBLIC_MAPBOX_TOKEN</code> in your .env.local file</p>
          </div>
        ) : (
            <NavigationControl position="top-right" />

            {profiles.map((profile) => (
              <Marker
                key={profile.id}
                longitude={Number(profile.longitude)}
                latitude={Number(profile.latitude)}
                anchor="bottom"
                onClick={(e: any) => {
                  e.originalEvent.stopPropagation()
                  setSelectedProfile(profile)
                }}
              >
                <div className="relative group cursor-pointer transform transition-transform hover:scale-125">
                  <div className="w-8 h-8 rounded-full bg-purple-600/80 border-2 border-purple-400 flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-purple-900/50 font-serif">
                    {profile.avatar || 'FA'}
                  </div>
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-500 rotate-45" />
                </div>
              </Marker>
            ))}

            {selectedProfile && (
              <Popup
                longitude={Number(selectedProfile.longitude)}
                latitude={Number(selectedProfile.latitude)}
                anchor="top"
                onClose={() => setSelectedProfile(null)}
                closeOnClick={false}
              >
                <div className="p-3 bg-[#12131c] text-white rounded-xl border border-gray-800 space-y-1.5 min-w-[200px]">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-purple-600/40 border border-purple-400/50 flex items-center justify-center font-bold text-xs text-purple-300 font-serif">
                      {selectedProfile.avatar}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold font-serif text-white">{selectedProfile.name}</h4>
                      <p className="text-[10px] text-purple-400">{selectedProfile.role}</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-400 flex items-center gap-1 border-t border-gray-800/80 pt-1">
                    <MapPin className="h-3 w-3 text-purple-400" />
                    {selectedProfile.city}, {selectedProfile.country}
                  </p>
                </div>
              </Popup>
            )}
          </Map>
        )}
      </div>
    </div>
  )
}