'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white font-sans px-6 py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link href="/">
          <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-gray-300 text-xs gap-2 cursor-pointer">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold font-serif">Terms of Service</h1>
          <p className="text-xs text-gray-400 font-mono">Last updated: November 2026</p>
        </div>

        <div className="space-y-6 text-sm text-gray-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold font-serif text-white">1. Acceptance of Terms</h2>
            <p>By accessing and using FAOS Community, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our SaaS platform.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold font-serif text-white">2. Platform Usage & Accounts</h2>
            <p>You are responsible for maintaining the security of your account, API keys, and database connections. We reserve the right to suspend or terminate accounts that violate community safety standards.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold font-serif text-white">3. Self-Hosted & SaaS Subscriptions</h2>
            <p>Subscriptions are billed on a recurring monthly or annual basis via Stripe. Refunds are handled on a case-by-case basis under our support guidelines.</p>
          </section>
        </div>
      </div>
    </div>
  )
}