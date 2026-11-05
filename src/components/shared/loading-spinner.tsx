'use client'

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8 font-sans">
      <div className="w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}