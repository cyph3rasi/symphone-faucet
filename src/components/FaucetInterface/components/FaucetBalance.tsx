import React from 'react';
import { useFaucetBalance } from '../hooks/useFaucetBalance';
import { FAUCET_ADDRESS } from '../constants';

export const FaucetBalance: React.FC = () => {
  const { balance, loading, error } = useFaucetBalance();
  
  const formatBalance = (balance: string) => {
    const num = parseFloat(balance);
    return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="pb-4">
        {loading ? (
          <div className="animate-pulse flex items-center space-x-4 font-spicy-rice">
            <div className="h-12 w-48 bg-green-700/50 rounded-lg" />
          </div>
        ) : error ? (
          <p className="text-red-400 font-spicy-rice text-xl">{error}</p>
        ) : (
          <div className="relative inline-block">
            {/* Shadow layer */}
            <div className="absolute -z-10 blur-sm text-green-950/40 translate-x-[4px] translate-y-[4px]">
              <span className="text-5xl md:text-6xl lg:text-7xl font-spicy-rice">
                {formatBalance(balance)}
              </span>
              <span className="text-3xl md:text-4xl lg:text-5xl font-spicy-rice ml-4">FREEPEPE</span>
            </div>
            
            {/* Main text with gradient */}
            <div className="relative animate-title-float">
              <span className="text-5xl md:text-6xl lg:text-7xl font-spicy-rice bg-gradient-to-b from-green-300 via-lime-400 to-green-500 text-transparent bg-clip-text">
                {formatBalance(balance)}
              </span>
              <span className="text-3xl md:text-4xl lg:text-5xl font-spicy-rice ml-4 bg-gradient-to-b from-green-300 via-lime-400 to-green-500 text-transparent bg-clip-text">
                FREEPEPE
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Address in subtle container */}
      <div className="text-xs font-unbounded text-green-400/60 px-4 py-2 rounded-xl bg-black/30 border border-green-500/20 hover:bg-black/40 transition-all duration-300 cursor-pointer" onClick={() => navigator.clipboard.writeText(FAUCET_ADDRESS)}>
        {FAUCET_ADDRESS}
      </div>

      {/* Gradient lines */}
      <div className="w-full max-w-3xl mx-auto mt-4 space-y-1">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50 animate-line-float" />
        <div className="h-[1px] bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-30 animate-line-float-slow" />
      </div>
    </div>
  );
};
