'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white font-sans px-6 py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/">
          <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-gray-300 text-xs gap-2 cursor-pointer">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold font-serif">Privacy Policy</h1>
          <p className="text-xs text-gray-400 font-mono">Last updated: November 2026</p>
        </div>

        <div className="space-y-6 text-sm text-gray-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold font-serif text-white">1. Information We Collect</h2>
            <p>We collect information you provide directly when registering an account, such as your email address, profile details, and geographic location coordinates for the global map feature.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold font-serif text-white">2. How We Use Your Data</h2>
            <p>Your data is used strictly to provide, maintain, and secure the community platform services, authenticate sessions via Supabase, and process payments through Stripe.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold font-serif text-white">3. Data Security</h2>
            <p>We implement enterprise-grade security protocols, encryption, and secure cloud storage practices to protect your data against unauthorized access.</p>
          </section>
        </div>
      </div>
    </div>
  )
}