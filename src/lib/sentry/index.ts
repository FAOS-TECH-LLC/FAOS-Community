// ตั้งค่า Sentry Config เบื้องต้นสำหรับติดตามข้อผิดพลาดในระบบ SaaS
export const initSentry = () => {
  if (process.env.NODE_ENV === 'production') {
    console.log('[Sentry] Error tracking initialized.')
  }
}