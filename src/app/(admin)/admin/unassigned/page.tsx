import Link from 'next/link'

export default function AccessDeniedPage() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-extrabold mb-4 text-red-500">Access Denied</h1>
      <p className="text-gray-400 text-base mb-8 max-w-md">
        You do not have administrative privileges to access this area. Please contact the community owner if you believe this is an error.
      </p>
      <Link href="/" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-sm font-medium">
        Return to Home
      </Link>
    </div>
  )
}