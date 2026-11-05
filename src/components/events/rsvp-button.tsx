'use client'

import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

export function RsvpButton({ rsvped, onClick }: { rsvped: boolean; onClick: () => void }) {
  return (
    <Button
      onClick={onClick}
      className={`w-full text-xs font-medium cursor-pointer ${
        rsvped
          ? 'bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 hover:bg-emerald-900/60'
          : 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-900/30'
      }`}
    >
      {rsvped ? (
        <>
          <CheckCircle2 className="h-4 w-4 mr-1.5" /> RSVP Confirmed
        </>
      ) : (
        'RSVP Now'
      )}
    </Button>
  )
}