import type { Metadata } from 'next';
import { Orbitron, Zen_Dots, Spicy_Rice } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const spicyRice = Spicy_Rice({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-spicy-rice',
  display: 'swap',
});

const zenDots = Zen_Dots({
  weight: '400',
  subsets: ['latin'],
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
