import React from 'react';
import Link from 'next/link';
import { FaucetBalance } from './FaucetBalance';

export const HeaderLogo: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-4 space-y-6">
      <Link 
        href="https://fallenones.xyz" 
        className="group relative inline-block text-center hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        {/* Dark glass container with glow */}
        <div className="relative px-8 py-4 bg-black/40 backdrop-blur-lg rounded-2xl border border-green-500/30 overflow-hidden">
          {/* Animated glow effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-lime-500/30 to-green-600/20 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
          
          {/* Main title */}
          <h1 className="text-6xl font-spicy-rice relative bg-gradient-to-r from-green-400 via-lime-300 to-green-400 text-transparent bg-clip-text pb-2 transform hover:scale-105 transition-transform duration-300">
            Free PEPE
          </h1>
          
          {/* Subtitle */}
          <div className="text-lg font-spicy-rice text-green-400/80 mt-1">
            The Peoples Token
          </div>

          {/* Decorative lines */}
          <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
          <div className="absolute -top-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-lime-500 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-500/30 rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-green-500/30 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-green-500/30 rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-500/30 rounded-br-lg" />

          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer opacity-0 group-hover:opacity-30" />
        </div>
      </Link>

      {/* Balance display */}
      <div className="w-full max-w-md transform hover:scale-[1.02] transition-transform duration-300">
        <FaucetBalance />
      </div>
    </div>
  );
};
