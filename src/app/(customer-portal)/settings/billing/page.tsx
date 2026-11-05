'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CreditCard, CheckCircle2, ArrowUpRight, Download } from 'lucide-react'

export default function UserBillingSettingsPage() {
  const [invoices] = useState([
    { id: 'inv_01', date: 'Nov 1, 2026', amount: '$49.00', status: 'Paid', plan: 'Pro Community Plan' },
    { id: 'inv_02', date: 'Oct 1, 2026', amount: '$49.00', status: 'Paid', plan: 'Pro Community Plan' },
  ])

  return (
    <div className="space-y-8 max-w-4xl mx-auto font-sans pb-12">
      <div className="border-b border-gray-800 pb-6">
        <h1 className="text-2xl font-bold font-serif tracking-tight text-white mb-1">
          Billing & Subscriptions
        </h1>
        <p className="text-sm text-gray-400">
          Manage your active membership tiers, payment methods, and invoice history via Stripe.
        </p>
      </div>

      {/* Current Subscription Card */}
      <div className="p-6 bg-[#12131c] border border-gray-800 rounded-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-gray-800 pb-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-purple-400">Active Tier</span>
            <h3 className="font-serif font-bold text-lg text-white">Pro Community Plan</h3>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
            <CheckCircle2 className="h-3.5 w-3.5" /> Active ($49/mo)
          </span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-gray-400">Next billing date: <strong className="text-white font-mono">December 1, 2026</strong></p>
          <Button className="bg-purple-600 hover:bg-purple-500 text-white text-xs gap-1.5 cursor-pointer">
            Upgrade Plan <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Payment Method */}
      <div className="p-6 bg-[#12131c] border border-gray-800 rounded-2xl space-y-4">
        <h3 className="font-serif font-bold text-sm text-white">Payment Method</h3>
        <div className="flex items-center justify-between p-4 bg-[#0b0c10] border border-gray-800 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900/40 border border-purple-700/50 flex items-center justify-center text-purple-300">
              <CreditCard className="h-5 w-5" />
            </div>
            <div>
              <span className="font-serif font-bold text-xs text-white block">Visa ending in •••• 4242</span>
              <span className="text-[10px] text-gray-500 font-mono">Expires 08/2028</span>
            </div>
          </div>
          <Button variant="outline" className="border-gray-700 hover:bg-gray-800 text-gray-300 text-xs cursor-pointer">
            Update Card
          </Button>
        </div>
      </div>

      {/* Invoice History */}
      <div className="space-y-4">
        <h3 className="font-serif font-bold text-sm text-white">Invoice History</h3>
        <div className="bg-[#12131c] border border-gray-800 rounded-2xl overflow-hidden">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 font-mono bg-[#0b0c10]/40">
                <th className="p-4 font-medium">Invoice</th>
                <th className="p-4 font-medium">Plan</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Download</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/80 text-gray-300">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-gray-800/20 transition-colors">
                  <td className="p-4 font-mono text-white">{inv.date}</td>
                  <td className="p-4 text-purple-300">{inv.plan}</td>
                  <td className="p-4 font-mono font-bold text-white">{inv.amount}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950/60 border border-emerald-800/60 text-emerald-400">
                      {inv.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Button variant="outline" className="h-8 px-3 border-gray-700 hover:bg-gray-800 text-gray-300 text-xs cursor-pointer gap-1">
                      <Download className="h-3.5 w-3.5" /> PDF
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}