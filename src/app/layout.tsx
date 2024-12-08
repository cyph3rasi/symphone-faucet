import type { Metadata } from 'next'
import { Electrolize, Zen_Dots, Orbitron } from 'next/font/google'
import './globals.css'

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

        {/* Main content */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}