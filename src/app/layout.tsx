import type { Metadata } from 'next';
import { Unbounded, Spicy_Rice } from 'next/font/google';
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

export const metadata: Metadata = {
  title: 'Free PEPE Token Faucet',
  description: 'Claim your Free PEPE tokens on Avalanche C-Chain',
  icons: {
    icon: [
      {
        url: 'https://ahalaffiyxmywkxeffzc.supabase.co/storage/v1/object/public/stuff/media/fav.png?t=2024-12-08T20%3A25%3A58.694Z',
        sizes: 'any',
      },
    ],
    shortcut: [
      {
        url: 'https://ahalaffiyxmywkxeffzc.supabase.co/storage/v1/object/public/stuff/media/fav.png?t=2024-12-08T20%3A25%3A58.694Z',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: 'https://ahalaffiyxmywkxeffzc.supabase.co/storage/v1/object/public/stuff/media/fav.png?t=2024-12-08T20%3A25%3A58.694Z',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${unbounded.variable} ${spicyRice.variable}`}>
      <head>
        <link 
          rel="icon" 
          type="image/png" 
          href="https://ahalaffiyxmywkxeffzc.supabase.co/storage/v1/object/public/stuff/media/fav.png?t=2024-12-08T20%3A25%3A58.694Z"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
