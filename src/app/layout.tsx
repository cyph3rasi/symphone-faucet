import type { Metadata } from 'next'
import { Electrolize, Zen_Dots, Orbitron } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const electrolize = Electrolize({ 
  weight: '400',
  subsets: ['latin'],
})

const zenDots = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-zen-dots',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'Symphony Token Faucet',
  description: 'Claim your Symphony Tokens',
  icons: {
    icon: 'https://ahalaffiyxmywkxeffzc.supabase.co/storage/v1/object/public/stuff/media/thunder.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${zenDots.variable} ${orbitron.variable}`}>
      <head>
        <link rel="icon" href="https://ahalaffiyxmywkxeffzc.supabase.co/storage/v1/object/public/stuff/media/thunder.png" />
      </head>
      <body className={`${electrolize.className} relative min-h-screen`}>
        {/* Fixed background with overlay */}
        <div className="fixed inset-0 w-full h-full z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
              backgroundImage: `url('https://ahalaffiyxmywkxeffzc.supabase.co/storage/v1/object/public/stuff/backgrounds/nebula.jpg')`
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link 
                  href="https://fallenones.xyz" 
                  className="text-white hover:text-gray-300 transition-colors duration-200 font-electrolize"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <main className="pt-16 relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}