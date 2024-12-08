import React, { useState, useEffect } from 'react';
import { useFaucetBalance } from '../hooks/useFaucetBalance';
import { FAUCET_ADDRESS } from '../constants';

export const FaucetBalance: React.FC = () => {
  const { balance, loading, error } = useFaucetBalance();
  const [particles, setParticles] = useState<Array<{ id: number, style: React.CSSProperties }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${5 + Math.random() * 5}s`
      }
    }));
    setParticles(newParticles);
  }, []);

  const formatBalance = (balance: string) => {
    const num = parseFloat(balance);
    return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
  };

  return (
    <div className="relative overflow-hidden bg-opacity-10 bg-white backdrop-filter backdrop-blur-lg rounded-xl border border-purple-500/20 p-6 mb-6">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-pink-800/30 to-purple-900/30 animate-pulse" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float"
            style={particle.style}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="flex flex-col items-center space-y-3">
          <h2 className="text-lg font-zen-dots text-purple-300">Faucet Balance</h2>
          
          {loading ? (
            <div className="animate-pulse flex space-x-2 items-center">
              <div className="h-8 w-24 bg-purple-700/50 rounded" />
              <span className="text-purple-300 font-orbitron">SYMPH</span>
            </div>
          ) : error ? (
            <p className="text-red-400 font-orbitron text-sm">{error}</p>
          ) : (
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold font-orbitron bg-gradient-to-r from-purple-400 to-pink-300 text-transparent bg-clip-text">
                {formatBalance(balance)}
              </span>
              <span className="text-purple-300 font-orbitron">SYMPH</span>
            </div>
          )}

          <div className="text-xs text-gray-400 font-mono mt-2 truncate max-w-full">
            Contract: {FAUCET_ADDRESS}
          </div>
        </div>
      </div>

      {/* Decorative circle elements */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-purple-600/10 rounded-full blur-xl" />
      <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-pink-600/10 rounded-full blur-lg" />
    </div>
  );
};