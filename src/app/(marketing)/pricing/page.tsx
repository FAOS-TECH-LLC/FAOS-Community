import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-gray-400 text-lg">Choose the right plan for you and start building your professional community today.</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Free Plan */}
        <div className="border border-gray-800 rounded-2xl p-8 bg-[#15161d] flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Starter</h3>
            <p className="text-gray-400 text-sm mb-6">For beginners starting a small community group.</p>
            <div className="text-3xl font-extrabold mb-6">$0 <span className="text-sm font-normal text-gray-400">/mo</span></div>
            <ul className="space-y-3 text-sm text-gray-300 mb-8">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-400" /> Up to 100 Members</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-400" /> Basic Feed & Spaces</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-400" /> Community Support</li>
            </ul>
          </div>
          <Link href="/register">
            <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">Get Started</Button>
          </Link>
        </div>

        {/* Pro Plan (Highlighted) */}
        <div className="border-2 border-purple-600 rounded-2xl p-8 bg-[#15161d] flex flex-col justify-between relative shadow-2xl shadow-purple-900/20">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
            MOST POPULAR
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Pro Creator</h3>
            <p className="text-gray-400 text-sm mb-6">For creators and brands ready to monetize.</p>
            <div className="text-3xl font-extrabold mb-6">$49 <span className="text-sm font-normal text-gray-400">/mo</span></div>
            <ul className="space-y-3 text-sm text-gray-300 mb-8">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-400" /> Unlimited Members</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-400" /> Stripe Subscription Integration</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-400" /> Custom Subdomain</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-400" /> Admin Dashboard & Analytics</li>
            </ul>
          </div>
          <Link href="/api/checkout?plan=pro">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Subscribe Pro</Button>
          </Link>
        </div>

        {/* Enterprise Plan */}
        <div className="border border-gray-800 rounded-2xl p-8 bg-[#15161d] flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <p className="text-gray-400 text-sm mb-6">For organizations and large-scale enterprises.</p>
            <div className="text-3xl font-extrabold mb-6">$199 <span className="text-sm font-normal text-gray-400">/mo</span></div>
            <ul className="space-y-3 text-sm text-gray-300 mb-8">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-400" /> Dedicated Server Support</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-400" /> Advanced Custom Features</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-purple-400" /> Priority 24/7 Assistance</li>
            </ul>
          </div>
          <Link href="/api/checkout?plan=enterprise">
            <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}