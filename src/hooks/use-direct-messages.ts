'use client'

import { useState } from 'react'

export function useDirectMessages(recipientId: string) {
  const [messages, setMessages] = useState([
    { id: 'm1', senderId: recipientId, content: 'Hi Patcharin, let us review the procurement data.', timestamp: '10:00 AM' },
  ])

  const sendMessage = (content: string) => {
    const newMsg = {
      id: `msg_${Date.now()}`,
      senderId: 'usr_01',
      content,
      timestamp: 'Just now',
    }
    setMessages([...messages, newMsg])
  }

  return { messages, sendMessage }
}