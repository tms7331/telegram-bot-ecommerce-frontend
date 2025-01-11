'use client'

import { useCart } from '../../context/CartContext'
import { PlusCircle, MinusCircle } from 'lucide-react'

type Item = {
  id: number
  name: string
  price: number
}

export default function ItemList({ items }: { items: Item[] }) {
  const { addToCart, removeFromCart, isInCart } = useCart()

  return (
    <ul className="space-y-4">
      {items.map((item) => {
        const inCart = isInCart(item.id)
        return (
          <li 
            key={item.id} 
            className={`flex items-center justify-between p-4 rounded-lg shadow transition-colors ${
              inCart ? 'bg-green-50' : 'bg-white'
            }`}
          >
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
            {inCart ? (
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-600 transition-colors"
                aria-label={`Remove ${item.name} from cart`}
              >
                <MinusCircle size={24} />
              </button>
            ) : (
              <button
                onClick={() => addToCart(item)}
                className="text-green-500 hover:text-green-600 transition-colors"
                aria-label={`Add ${item.name} to cart`}
              >
                <PlusCircle size={24} />
              </button>
            )}
          </li>
        )
      })}
    </ul>
  )
}

