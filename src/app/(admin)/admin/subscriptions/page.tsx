'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CreditCard, DollarSign, ArrowUpRight, RefreshCw, CheckCircle2 } from 'lucide-react'

interface SubscriptionTx {
  id: string
  customerName: string
  plan: string
  amount: string
  status: 'Active' | 'Trialing' | 'Canceled'
  date: string
}

const INITIAL_SUBSCRIPTIONS: SubscriptionTx[] = [
  { id: 'sub_1', customerName: 'Patcharin C.', plan: 'Enterprise SaaS ($199/mo)', amount: '$199.00', status: 'Active', date: 'Nov 1, 2026' },
  { id: 'sub_2', customerName: 'Nikolas', plan: 'Pro Community ($49/mo)', amount: '$49.00', status: 'Active', date: 'Nov 3, 2026' },
  { id: 'sub_3', customerName: 'Yamamoto Koji', plan: 'Starter ($19/mo)', amount: '$19.00', status: 'Trialing', date: 'Nov 4, 2026' },
]

export default function AdminSubscriptionsPage() {
  const [subscriptions] = useState<SubscriptionTx[]>(INITIAL_SUBSCRIPTIONS)

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-sans">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-800 pb-6">
        <div>
          <h1 className="text-2xl font-bold font-serif tracking-tight text-white mb-1">
            Subscriptions & Payments
          </h1>
          <p className="text-sm text-gray-400">
            Monitor recurring revenue, customer billing statuses, and Stripe payouts.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-[#12131c] px-4 py-2.5 rounded-xl border border-gray-800 text-xs text-gray-300 font-mono">
          <DollarSign className="h-4 w-4 text-emerald-400" />
          <span>MRR (Monthly Recurring): <strong className="text-white">$4,850.00</strong></span>
        </div>
      </div>

      {/* Subscriptions Table */}
      <div className="bg-[#12131c] border border-gray-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 font-mono bg-[#0b0c10]/40">
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Subscription Plan</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Billing Status</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium text-right">Stripe Portal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/80 text-gray-300">
              {subscriptions.map((sub) => (
                <tr key={sub.id} className="hover:bg-gray-800/20 transition-colors">
                  <td className="p-4 font-serif font-bold text-white">{sub.customerName}</td>
                  <td className="p-4 text-purple-300">{sub.plan}</td>
                  <td className="p-4 font-mono font-bold text-white">{sub.amount}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono ${
                      sub.status === 'Active'
                        ? 'bg-emerald-950/60 border border-emerald-800/60 text-emerald-400'
                        : 'bg-amber-950/60 border border-amber-800/60 text-amber-400'
                    }`}>
                      <CheckCircle2 className="h-3 w-3" /> {sub.status}
                    </span>
                  </td>
                  <td className="p-4 font-mono text-gray-400">{sub.date}</td>
                  <td className="p-4 text-right">
                    <Button variant="outline" className="h-8 px-3 border-gray-700 hover:bg-gray-800 text-gray-300 text-xs cursor-pointer gap-1">
                      Manage <ArrowUpRight className="h-3.5 w-3.5" />
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