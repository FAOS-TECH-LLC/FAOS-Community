'use client'

import { useState, useEffect } from 'react'

export function useAuth() {
  const [user, setUser] = useState<{ id: string; email: string; name: string } | null>({
    id: 'usr_01',
    email: 'patcharin@faos-tech.asia',
    name: 'Patcharin C.',
  })
  const [loading, setLoading] = useState(false)

  return { user, loading, isAuthenticated: !!user }
}