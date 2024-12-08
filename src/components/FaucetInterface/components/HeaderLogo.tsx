import React from 'react';
import Link from 'next/link';

export const HeaderLogo: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-4">
      <Link 
        href="https://fallenones.xyz" 
        className="group relative inline-block text-center hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-purple-600/20 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
        <h1 className="text-5xl font-zen-dots relative bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 text-transparent bg-clip-text pb-1">
          The Fallen Ones
        </h1>
        <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
        
        {/* Animated glow effects */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/0 via-pink-500/10 to-purple-600/0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
        
        {/* Subtle shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer opacity-0 group-hover:opacity-30" />
      </Link>
    </div>
  );
};