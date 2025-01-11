import Link from 'next/link'

export default function CheckoutButton() {
  return (
    <Link href="/checkout" className="block w-full bg-blue-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
      Checkout
    </Link>
  )
}

