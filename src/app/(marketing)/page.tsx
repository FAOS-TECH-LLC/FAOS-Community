'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Globe, Shield, Zap } from 'lucide-react'

export default function MarketingLandingPage() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white selection:bg-purple-500 selection:text-white font-sans">
      {/* Navigation Bar */}
      <header className="border-b border-gray-800/80 bg-[#0b0c10]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center font-bold font-serif text-white shadow-lg shadow-purple-900/50">
              FA
            </div>
            <span className="font-serif font-bold text-lg tracking-tight">FAOS Community</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/pricing" className="text-xs text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/login">
              <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-gray-200 text-xs cursor-pointer">
                Sign In
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-purple-600 hover:bg-purple-500 text-white text-xs cursor-pointer shadow-lg shadow-purple-900/30">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.1)_0,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/60 text-purple-300 text-xs font-mono">
            <Zap className="h-3.5 w-3.5 text-purple-400" />
            <span>Next-Gen White-Label Community Platform</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-serif tracking-tight leading-tight">
            Build, Scale & Monetize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Private Community</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-sans leading-relaxed">
            The ultimate self-hosted SaaS platform designed to replace expensive alternatives. Own your data, customize your brand, and launch your membership site today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link href="/register">
              <Button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-xl text-sm font-medium gap-2 shadow-xl shadow-purple-900/40 cursor-pointer">
                Launch Your Community <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="w-full sm:w-auto border-gray-700 bg-transparent hover:bg-gray-800 text-gray-300 px-6 py-3 rounded-xl text-sm font-medium cursor-pointer">
                View Pricing Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 border-t border-gray-800/80 bg-[#12131c]/50">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold font-serif">Powerful Modules Built for Scale</h2>
            <p className="text-sm text-gray-400">Everything you need to run a thriving professional community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0b0c10] border border-gray-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-700/50 flex items-center justify-center text-purple-300">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="font-serif font-bold text-base">Global Member Map</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Interactive Mapbox integration allowing members to discover and connect with peers worldwide in real-time.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b0c10] border border-gray-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-700/50 flex items-center justify-center text-purple-300">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="font-serif font-bold text-base">RBAC & Subscriptions</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Robust role-based access control backed by Stripe and Supabase to secure private spaces and premium content.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b0c10] border border-gray-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-700/50 flex items-center justify-center text-purple-300">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="font-serif font-bold text-base">Gamification & Badges</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Encourage active participation with level badges, leaderboards, and rewarding milestone systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/80 py-8 text-center text-xs text-gray-500 font-mono">
        <p>© 2026 FAOS TECH LLC. All rights reserved.</p>
      </footer>
    </div>
  )
}