import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to our Mobile Shop</h1>
      <div className="space-y-4">
        <Link
          href="https://t.me/ecommerceaibot"
          className="block bg-blue-500 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Use our Telegram bot to access the store
        </Link>
      </div>
    </div>
  )
}

