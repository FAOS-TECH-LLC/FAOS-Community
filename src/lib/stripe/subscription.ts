import { stripe } from './client'

export async function getSubscriptionStatus(customerEmail: string) {
  try {
    const subscriptions = await stripe.subscriptions.list({
      status: 'active',
      limit: 1,
    })
    return subscriptions.data.length > 0
  } catch (error) {
    console.error('Error fetching subscription:', error)
    return false
  }
}