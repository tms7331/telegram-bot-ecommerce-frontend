import Link from 'next/link'

export default function BackToShopButton() {
  return (
    <Link href="/" className="block w-full bg-gray-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
      Back to Shop
    </Link>
  )
}

