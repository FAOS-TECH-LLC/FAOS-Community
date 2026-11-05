'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/client'

export default function LoginPage() {
  const [loading, setLoading] = useState<string | null>(null)

  // ฟังก์ชันคำสั่ง Render การเชื่อมต่อ OAuth ไปยัง Provider ต่างๆ
  const handleSocialLogin = async (provider: 'google' | 'facebook' | 'linkedin_oidc' | 'azure') => {
    setLoading(provider)
    const supabase = createClient() // เรียกใช้งานตรงนี้เมื่อผู้ใช้กดคลิกปุ่มจริงๆ
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    if (error) {
      alert(`Error logging in: ${error.message}`)
      setLoading(null)
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md p-8 rounded-2xl border border-gray-800 bg-[#12131c]">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="font-mono text-2xl font-bold tracking-tighter mb-2">
            FAOS<span className="text-purple-500">.COMMUNITY</span>
          </div>
          <p className="text-gray-400 text-sm">Sign in to your community account</p>
        </div>

        {/* Social Logins With Icons */}
        <div className="space-y-3 mb-6">
          {/* Google */}
          <button 
            type="button"
            onClick={() => handleSocialLogin('google')}
            disabled={loading !== null}
            className="w-full flex items-center justify-center gap-3 bg-[#1a1b26] hover:bg-[#232433] border border-gray-800 text-white rounded-lg py-2.5 text-sm font-medium transition-colors cursor-pointer disabled:opacity-50"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span>{loading === 'google' ? 'Redirecting...' : 'Continue with Google'}</span>
          </button>

          {/* Facebook */}
          <button 
            type="button"
            onClick={() => handleSocialLogin('facebook')}
            disabled={loading !== null}
            className="w-full flex items-center justify-center gap-3 bg-[#1a1b26] hover:bg-[#232433] border border-gray-800 text-white rounded-lg py-2.5 text-sm font-medium transition-colors cursor-pointer disabled:opacity-50"
          >
            <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>{loading === 'facebook' ? 'Redirecting...' : 'Continue with Facebook'}</span>
          </button>

          {/* LinkedIn */}
          <button 
            type="button"
            onClick={() => handleSocialLogin('linkedin_oidc')}
            disabled={loading !== null}
            className="w-full flex items-center justify-center gap-3 bg-[#1a1b26] hover:bg-[#232433] border border-gray-800 text-white rounded-lg py-2.5 text-sm font-medium transition-colors cursor-pointer disabled:opacity-50"
          >
            <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
            <span>{loading === 'linkedin_oidc' ? 'Redirecting...' : 'Continue with LinkedIn'}</span>
          </button>

          {/* Microsoft */}
          <button 
            type="button"
            onClick={() => handleSocialLogin('azure')}
            disabled={loading !== null}
            className="w-full flex items-center justify-center gap-3 bg-[#1a1b26] hover:bg-[#232433] border border-gray-800 text-white rounded-lg py-2.5 text-sm font-medium transition-colors cursor-pointer disabled:opacity-50"
          >
            <svg className="w-5 h-5" viewBox="0 0 23 23">
              <path fill="#f35325" d="M1 1h10v10H1z"/>
              <path fill="#81bc06" d="M12 1h10v10H12z"/>
              <path fill="#05a6f0" d="M1 12h10v10H1z"/>
              <path fill="#ffba08" d="M12 12h10v10H12z"/>
            </svg>
            <span>{loading === 'azure' ? 'Redirecting...' : 'Continue with Microsoft'}</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-800"></div>
          <span className="px-3 text-xs text-gray-500 uppercase">Or with email</span>
          <div className="flex-1 border-t border-gray-800"></div>
        </div>

        {/* Local Email Form */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              className="w-full bg-[#0b0c10] border border-gray-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-purple-500" 
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-[#0b0c10] border border-gray-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-purple-500" 
            />
          </div>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5">
            Sign In with Email
          </Button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Don't have an account?{' '}
          <Link href="/register" className="text-purple-400 hover:underline">
            Sign up
          </Link>
        </p>

        {/* Platform Attribution */}
        <div className="text-center mt-8 pt-4 border-t border-gray-800/60">
          <p className="text-[11px] text-gray-500 font-mono tracking-wider">
            Platform by FAOS TECH LLC.
          </p>
        </div>
      </div>
    </div>
  )
}