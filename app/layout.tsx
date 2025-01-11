import './globals.css'
import { Inter } from 'next/font/google'
import { CartProvider } from './context/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mobile Shop',
  description: 'A mobile-first shopping experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <CartProvider>
          <main className="container mx-auto px-4 py-8 max-w-2xl">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  )
}

