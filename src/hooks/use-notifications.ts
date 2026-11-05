'use client'

import { useState } from 'react'

export function useNotifications() {
  const [notifications, setNotifications] = useState([
    { id: 'n1', title: 'New RSVP', message: 'Nikolas joined your masterclass', read: false, time: '10m ago' },
    { id: 'n2', title: 'New Comment', message: 'Yamamoto Koji commented on your post', read: true, time: '1h ago' },
  ])

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    )
  }

  return { notifications, markAsRead }
}