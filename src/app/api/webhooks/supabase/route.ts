import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const payload = await req.json()
    const { type, table, record } = payload

    console.log(`[Supabase Webhook] ${type} event on table '${table}'`)

    // สามารถส่ง Trigger ไปยังระบบการแจ้งเตือนหรือระบบ Analytics เพิ่มเติมได้ที่นี่
    return NextResponse.json({ success: true, table, record })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}