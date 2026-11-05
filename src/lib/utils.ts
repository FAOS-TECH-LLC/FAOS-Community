import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function calculatePoints(actionType: 'post' | 'comment' | 'event') {
  switch (actionType) {
    case 'post':
      return 50
    case 'comment':
      return 15
    case 'event':
      return 30
    default:
      return 10
  }
}