import { NextResponse } from 'next/server'

export async function GET() {
  // จำลองการดึงข้อความย้อนหลังสำหรับวิเคราะห์และแสดงผล
  const messages = [
    { id: 'm1', senderId: '1', receiverId: '2', content: 'Hi Nikolas, welcome to FAOS!', timestamp: new Date().toISOString() }
  ]
  return NextResponse.json({ success: true, data: messages })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { receiverId, content } = body

    if (!receiverId || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const newMessage = {
      id: `msg_${Date.now()}`,
      receiverId,
      content,
      created_at: new Date().toISOString(),
    }

    return NextResponse.json({ success: true, data: newMessage })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}