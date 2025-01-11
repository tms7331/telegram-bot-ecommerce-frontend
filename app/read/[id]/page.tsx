"use client"
import { purchases } from '../../data/purchases';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function ReadPage() {
  const params = useParams();
  const id = typeof params.id === 'string' ? parseInt(params.id) : null;
  const purchase = purchases.find(p => p.id === id);

  if (!purchase) {
    return <div>Purchase not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen pb-16">
      <div className="flex-grow">
        <h1 className="text-2xl font-bold mb-4">{purchase.title}</h1>
        <div className="bg-white p-4 rounded-lg shadow mb-4">
          <p>{purchase.content}</p>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-100">
        <Link
          href="/reader"
          className="block w-full bg-blue-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
          Back to Reader
        </Link>
      </div>
    </div>
  );
}

