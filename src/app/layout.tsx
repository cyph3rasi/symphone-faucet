import type { Metadata } from 'next';
import { Spicy_Rice, Unbounded, Inter } from 'next/font/google';
import './globals.css';

const spicyRice = Spicy_Rice({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-spicy-rice',
  display: 'swap',
});

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
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
    <html lang="en" className={`${unbounded.variable} ${spicyRice.variable} ${inter.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
