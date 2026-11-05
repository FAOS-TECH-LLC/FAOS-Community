'use client'

import { useEffect } from 'react'

export function useRealtime(channelName: string, onEvent: (payload: any) => void) {
  useEffect(() => {
    console.log(`[Realtime] Subscribed to channel: ${channelName}`)

    // จำลองการเชื่อมต่อ WebSocket / Supabase Realtime Channel
    return () => {
      console.log(`[Realtime] Unsubscribed from channel: ${channelName}`)
    }
  }, [channelName, onEvent])
}