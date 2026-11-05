'use client'

interface CommentItemProps {
  author: string
  avatar: string
  text: string
  date: string
}

export function CommentItem({ author, avatar, text, date }: CommentItemProps) {
  return (
    <div className="p-5 bg-[#12131c] border border-gray-800 rounded-2xl space-y-2 font-sans">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-purple-600/40 border border-purple-400/50 flex items-center justify-center font-bold text-xs text-purple-300 font-serif">
            {avatar}
          </div>
          <span className="font-serif font-bold text-xs text-white">{author}</span>
        </div>
        <span className="text-[10px] text-gray-500 font-mono">{date}</span>
      </div>
      <p className="text-xs text-gray-300 pl-10 leading-relaxed">{text}</p>
    </div>
  )
}