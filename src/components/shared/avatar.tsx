'use client'

export function SharedAvatar({ initials, online }: { initials: string; online?: boolean }) {
  return (
    <div className="relative inline-block font-sans">
      <div className="w-10 h-10 rounded-full bg-purple-600/40 border border-purple-400/50 flex items-center justify-center font-bold text-xs text-purple-300 font-serif">
        {initials}
      </div>
      {online && (
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#0b0c10] rounded-full" />
      )}
    </div>
  )
}