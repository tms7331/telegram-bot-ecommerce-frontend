'use client'

import { useCart } from '../context/CartContext'
import { MinusCircle } from 'lucide-react'

export default function CartSummary() {
  const { items, removeFromCart } = useCart()

  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <div>
      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-600 transition-colors"
                aria-label={`Remove ${item.name} from cart`}
              >
                <MinusCircle size={24} />
              </button>
            </li>
          ))}
          <li className="font-semibold text-lg">Total: ${total.toFixed(2)}</li>
        </ul>
      )}
    </div>
  )
}

