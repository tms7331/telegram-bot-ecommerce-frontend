import CartSummary from '../components/CartSummary'
import BuyButton from '../components/BuyButton'

export default function Checkout() {
  return (
    <div className="flex flex-col min-h-screen pb-16">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <CartSummary />
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-100">
        <BuyButton />
      </div>
    </div>
  )
}

