'use client'

export function UserBadge({ role }: { role: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-purple-950/80 border border-purple-700/80 text-purple-300 font-sans">
      {role}
    </span>
  )
}