import type { Metadata } from 'next';
import { Orbitron } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

// Import Spicy Rice as a Google Font with proper formatting
import { Spicy_Rice } from 'next/font/google';

const spicyRice = Spicy_Rice({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-spicy-rice',
  display: 'swap',
});

const zenDots = localFont({
  src: '../fonts/ZenDots-Regular.ttf',
  variable: '--font-zen-dots',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FREEPEPE Token Faucet',
  description: 'Claim your FREE PEPE tokens on Avalanche C-Chain',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${zenDots.variable} ${spicyRice.variable}`}>
      <body>{children}</body>
    </html>
  );
}
