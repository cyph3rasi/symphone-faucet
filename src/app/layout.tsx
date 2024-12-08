import type { Metadata } from 'next';
import { Orbitron, Zen_Dots, Spicy_Rice, Lilita_One } from 'next/font/google';
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

const lilitaOne = Lilita_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lilita-one',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Free PEPE Token Faucet',
  description: 'Claim your Free PEPE tokens on Avalanche C-Chain',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${zenDots.variable} ${spicyRice.variable} ${lilitaOne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
