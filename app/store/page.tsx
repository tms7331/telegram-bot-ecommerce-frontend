import ItemList from './components/ItemList'
import CheckoutButton from './components/CheckoutButton'

const items = [
  { id: 1, name: "Galactic Odyssey", price: 10 },
  { id: 2, name: "Time Rift", price: 10 },
  { id: 3, name: "Neon Horizons", price: 10 },
  { id: 4, name: "Quantum Echoes", price: 10 },
  { id: 5, name: "Stellar Drift", price: 10 },
  { id: 6, name: "Parallel Realms", price: 10 },
  { id: 7, name: "Alien Genesis", price: 10 },
  { id: 8, name: "Cyber Nexus", price: 10 },
  { id: 9, name: "Void Walker", price: 10 },
  { id: 10, name: "Dimensional Shift", price: 10 },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-16">
      <h1 className="text-2xl font-bold mb-4">Buy Items</h1>
      <ItemList items={items} />
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-100">
        <CheckoutButton />
      </div>
    </div>
  )
}

