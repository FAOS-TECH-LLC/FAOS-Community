'use client'

import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || 'pk.mock'

export function MemberMapClient() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    if (map.current) return // initialize once
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [100.5018, 13.7563], // Bangkok coordinates
        zoom: 3,
      })
    }
  }, [])

  return (
    <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-gray-800 relative">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  )
}