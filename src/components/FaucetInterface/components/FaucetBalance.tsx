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
      <div className="text-lg font-unbounded text-green-400/90 mb-1">Faucet Balance:</div>
      <div>
        {loading ? (
          <div className="animate-pulse flex items-center space-x-4 font-unbounded">
            <div className="h-8 w-32 bg-green-700/50 rounded-lg" />
          </div>
        ) : error ? (
          <p className="text-red-400 font-unbounded text-sm">{error}</p>
        ) : (
          <div className="relative inline-block">
            {/* Shadow layer */}
            <div className="absolute -z-10 blur-sm text-green-950/40 translate-x-[2px] translate-y-[2px]">
              <span className="text-3xl font-unbounded">
                {formatBalance(balance)}
              </span>
              <span className="text-xl font-unbounded ml-2">FREEPEPE</span>
            </div>
            
            {/* Main text with gradient */}
            <div className="relative">
              <span className="text-3xl font-unbounded bg-gradient-to-b from-green-300 via-lime-400 to-green-500 text-transparent bg-clip-text">
                {formatBalance(balance)}
              </span>
              <span className="text-xl font-unbounded ml-2 bg-gradient-to-b from-green-300 via-lime-400 to-green-500 text-transparent bg-clip-text">
                FREEPEPE
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
