import Link from 'next/link';
import { purchases } from '../data/purchases';

export default function ReaderPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Your Purchases</h1>
      <ul className="space-y-4">
        {purchases.map((purchase) => (
          <li key={purchase.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-2">{purchase.title}</h2>
            <Link
              href={`/read/${purchase.id}`}
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Read
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

