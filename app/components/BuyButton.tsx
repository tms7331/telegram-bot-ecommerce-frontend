import Link from 'next/link'

export default function BuyButton() {
  return (
    <Link href="/thank-you" className="block w-full bg-green-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
      Buy
    </Link>
  )
}

