import React from 'react';
import Link from 'next/link';
import { FaucetBalance } from './FaucetBalance';

export const HeaderLogo: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-4 space-y-6">
      <Link 
        href="https://fallenones.xyz" 
        className="group relative inline-block text-center hover:scale-105 transition-transform duration-500 ease-in-out py-8"
      >
        {/* Animated background glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-green-600/0 via-lime-300/20 to-green-600/0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
        
        {/* Main Title Container */}
        <div className="relative">
          {/* Top grain effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Main Title */}
          <h1 className="text-8xl md:text-9xl font-spicy-rice relative animate-title-float">
            {/* Shadow layer */}
            <span className="absolute -z-10 blur-sm text-green-900/30 top-[4px] left-[4px]">
              Free PEPE
            </span>
            
            {/* Main text with gradient */}
            <span className="relative bg-gradient-to-b from-green-300 via-lime-400 to-green-500 text-transparent bg-clip-text animate-gradient">
              Free PEPE
            </span>
          </h1>

          {/* Animated highlight lines */}
          <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50 group-hover:opacity-100 transition-all duration-500 animate-line-float" />
          <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-30 group-hover:opacity-75 transition-all duration-500 delay-100 animate-line-float-slow" />
          
          {/* Subtitle */}
          <div className="relative mt-6">
            <p className="text-2xl font-unbounded text-green-400/80 tracking-widest uppercase animate-subtitle-float">
              The Peoples Token
            </p>
            <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-30 group-hover:opacity-50 transition-all duration-500" />
          </div>
        </div>

        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-green-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-corner-float" />
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-green-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-corner-float" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-green-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-corner-float" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-green-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-corner-float" />
      </Link>

      {/* Balance display */}
      <div className="w-full max-w-md transform hover:scale-[1.02] transition-transform duration-300">
        <FaucetBalance />
      </div>
    </div>
  );
};
