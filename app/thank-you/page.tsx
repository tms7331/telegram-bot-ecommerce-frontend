import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">Thank you for your purchase!</h1>
      <p className="mb-8">We appreciate your business.</p>
      <div className="space-y-4">
        <Link href="/store" className="block bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
          Back to Store
        </Link>
        <Link href="/reader" className="block bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
          Go to Your Purchases
        </Link>
      </div>
    </div>
  )
}

