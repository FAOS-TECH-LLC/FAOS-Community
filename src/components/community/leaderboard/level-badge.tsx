'use client'

export function LevelBadge({ level }: { level: string }) {
  const styles: Record<string, string> = {
    Contributor: 'bg-purple-950/80 border-purple-700/80 text-purple-300',
    Novice: 'bg-indigo-950/80 border-indigo-700/80 text-indigo-300',
    Newcomer: 'bg-gray-800/80 border-gray-700 text-gray-300',
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${styles[level] || styles['Newcomer']}`}>
      {level}
    </span>
  )
}