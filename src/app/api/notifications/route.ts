import { NextResponse } from 'next/server'

export async function GET() {
  const notifications = [
    { id: 'n1', title: 'New RSVP', message: 'Nikolas joined your event', read: false, createdAt: new Date().toISOString() },
    { id: 'n2', title: 'New Comment', message: 'Yamamoto Koji commented on your post', read: true, createdAt: new Date().toISOString() }
  ]
  return NextResponse.json({ success: true, data: notifications })
}

export async function PATCH(req: Request) {
  try {
    const { notificationId } = await req.json()
    return NextResponse.json({ success: true, message: `Notification ${notificationId} marked as read` })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}