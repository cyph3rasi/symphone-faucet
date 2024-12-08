import React, { useState, useEffect } from 'react';
import { useFaucetBalance } from '../hooks/useFaucetBalance';
import { FAUCET_ADDRESS } from '../constants';

export const FaucetBalance: React.FC = () => {
  const { balance, loading, error } = useFaucetBalance();
  
  const formatBalance = (balance: string) => {
    const num = parseFloat(balance);
    return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  return (
    <div className="relative overflow-hidden bg-black/40 backdrop-filter backdrop-blur-lg rounded-3xl border border-green-500/30 py-6 px-6">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 via-lime-800/30 to-green-900/30 animate-pulse" />

      <div className="relative z-10">
        <div className="flex flex-col items-center space-y-3">
          <div className="text-xl font-spicy-rice text-green-300/90 text-center">
            Faucet Balance
          </div>
          
          {loading ? (
            <div className="animate-pulse flex space-x-2 items-center">
              <div className="h-8 w-32 bg-green-700/50 rounded-lg" />
              <span className="text-green-300 font-spicy-rice">FREEPEPE</span>
            </div>
          ) : error ? (
            <p className="text-red-400 font-spicy-rice text-sm text-center">{error}</p>
          ) : (
            <div className="flex flex-wrap items-baseline justify-center gap-2">
              <span className="text-3xl sm:text-5xl font-spicy-rice bg-gradient-to-r from-green-400 via-lime-300 to-green-400 text-transparent bg-clip-text text-center tracking-wider">
                {formatBalance(balance)}
              </span>
              <span className="text-green-300 font-spicy-rice text-2xl">FREEPEPE</span>
            </div>
          )}
          
          <div className="text-xs text-green-400/60 font-mono break-all text-center px-2 bg-black/30 py-2 rounded-xl border border-green-500/20">
            {FAUCET_ADDRESS}
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-green-600/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-lime-600/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-green-500/30 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-green-500/30 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-green-500/30 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-green-500/30 rounded-br-lg" />
    </div>
  );
};