import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to our Mobile Shop</h1>
      <div className="space-y-4">
        <Link 
          href="https://t.me" 
          className="block bg-blue-500 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit our Telegram
        </Link>
        <Link 
          href="/store" 
          className="block bg-green-500 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors"
        >
          Go to Store
        </Link>
        <Link 
          href="/reader" 
          className="block bg-purple-500 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
        >
          Your Purchases
        </Link>
      </div>
    </div>
  )
}

