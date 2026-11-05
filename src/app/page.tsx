import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, ShieldCheck, Users, Zap, Globe, Sparkles, MessageSquare } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white font-sans flex flex-col justify-between selection:bg-purple-500 selection:text-white">
      {/* Landing Header */}
      <header className="max-w-7xl w-full mx-auto px-6 py-6 flex items-center justify-between border-b border-gray-800/60 sticky top-0 bg-[#0b0c10]/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center font-bold font-serif text-white shadow-lg shadow-purple-900/50">
            FA
          </div>
          <span className="font-serif font-bold text-lg tracking-tight">FAOS COMMUNITY</span>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/admin">
            <span className="text-xs text-gray-400 hover:text-white font-mono transition-colors">Admin Panel</span>
          </Link>
          <Link href="/feed">
            <Button className="bg-purple-600 hover:bg-purple-500 text-white text-xs px-4 py-2 rounded-xl shadow-lg shadow-purple-950 cursor-pointer">
              Enter Community <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-5xl w-full mx-auto px-6 py-20 text-center space-y-8 flex-1 flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-700/80 text-purple-300 text-xs font-mono mx-auto">
          <Sparkles className="h-3.5 w-3.5 text-purple-400" /> Next.js 16 + Supabase + Tailwind SaaS Architecture
        </div>

        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-tight text-white">
          The Ultimate White-Label <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
            Community Engine
          </span>
        </h1>

        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Own your audience, scale engagement, manage subscriptions, and visualize your global network with an all-in-one modular community platform.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/feed" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-500 text-white h-12 px-8 rounded-xl font-medium text-sm shadow-xl shadow-purple-950 cursor-pointer">
              Explore Live Feed
            </Button>
          </Link>
          <Link href="/members/map" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto border-gray-700 hover:bg-gray-800 text-gray-300 h-12 px-8 rounded-xl font-medium text-sm bg-[#12131c] cursor-pointer">
              <Globe className="h-4 w-4 mr-2 text-purple-400" /> View Member Map
            </Button>
          </Link>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 text-left">
          <div className="p-6 bg-[#12131c] border border-gray-800 rounded-2xl space-y-3 hover:border-gray-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-700/50 flex items-center justify-center text-purple-300">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-white">Directory & Geolocation Map</h3>
            <p className="text-xs text-gray-400 leading-relaxed">Search members near you, active users, and global network distribution via Mapbox integration.</p>
          </div>

          <div className="p-6 bg-[#12131c] border border-gray-800 rounded-2xl space-y-3 hover:border-gray-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-700/50 flex items-center justify-center text-purple-300">
              <MessageSquare className="h-5 w-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-white">Spaces & Events Hub</h3>
            <p className="text-xs text-gray-400 leading-relaxed">Segment discussion channels, host live AMAs or masterclasses with integrated RSVP tracking.</p>
          </div>

          <div className="p-6 bg-[#12131c] border border-gray-800 rounded-2xl space-y-3 hover:border-gray-700 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-700/50 flex items-center justify-center text-purple-300">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-serif font-bold text-base text-white">Stripe & Supabase Backend</h3>
            <p className="text-xs text-gray-400 leading-relaxed">Complete subscription management, OAuth integration, and real-time database webhooks.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/60 py-6 text-center text-xs text-gray-500 font-mono">
        © {new Date().getFullYear()} FAOS TECH LLC. All rights reserved.
      </footer>
    </div>
  )
}