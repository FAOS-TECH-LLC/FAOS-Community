'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/client'

export default function RegisterPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    const supabase = createClient()

    // สมัครสมาชิกผ่าน Supabase Auth พร้อมระบุ Redirect URL ไปยังหน้า Callback
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
        // เมื่อรันบน DigitalOcean หรือ Subdomain จริง window.location.origin จะจับโดเมนนั้นให้อัตโนมัติ
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      setMessage(`Error: ${error.message}`)
      setLoading(false)
    } else {
      setMessage('Registration successful! Please check your email to confirm your account.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md p-8 rounded-2xl border border-gray-800 bg-[#12131c]">
        {/* Logo / Header */}
        <div className="text-center mb-8">
          <div className="font-mono text-2xl font-bold tracking-tighter mb-2">
            FAOS<span className="text-purple-500">.COMMUNITY</span>
          </div>
          <p className="text-gray-400 text-sm">Create your community account</p>
        </div>

        {message && (
          <div className={`mb-4 p-3 rounded-lg text-xs ${message.startsWith('Error') ? 'bg-red-900/50 text-red-200 border border-red-800' : 'bg-green-900/50 text-green-200 border border-green-800'}`}>
            {message}
          </div>
        )}

        {/* Form Fields */}
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Full Name</label>
            <input 
              type="text" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Patcharin Chanaphukdee" 
              required
              className="w-full bg-[#0b0c10] border border-gray-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-purple-500" 
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com" 
              required
              className="w-full bg-[#0b0c10] border border-gray-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-purple-500" 
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              required
              className="w-full bg-[#0b0c10] border border-gray-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-purple-500" 
            />
          </div>
          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 cursor-pointer disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-purple-400 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}