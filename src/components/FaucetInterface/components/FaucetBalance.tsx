import React, { useState, useEffect } from 'react';
import { useFaucetBalance } from '../hooks/useFaucetBalance';
import { FAUCET_ADDRESS } from '../constants';

interface Particle {
  id: number;
  style: React.CSSProperties;
}

export const FaucetBalance: React.FC = () => {
  const { balance, loading, error } = useFaucetBalance();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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
    <div className="relative overflow-hidden bg-opacity-10 bg-white backdrop-filter backdrop-blur-lg rounded-3xl border border-purple-500/20 py-4 px-6">
      {/* Cosmic aurora background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-pink-800/30 to-purple-900/30 animate-pulse" />
      
      {/* Enhanced floating particles */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float"
              style={particle.style}
            />
          ))}
        </div>
      )}

      <div className="relative z-10">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-sm font-zen-dots text-purple-300/80">Symphony Token Balance</div>
          
          {loading ? (
            <div className="animate-pulse flex space-x-2 items-center">
              <div className="h-8 w-32 bg-purple-700/50 rounded-lg" />
              <span className="text-purple-300 font-orbitron">SYMPH</span>
            </div>
          ) : error ? (
            <p className="text-red-400 font-orbitron text-sm">{error}</p>
          ) : (
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-bold font-orbitron bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 text-transparent bg-clip-text">
                {formatBalance(balance)}
              </span>
              <span className="text-purple-300 font-orbitron">SYMPH</span>
            </div>
          )}
          
          {/* Contract address with subtle reveal on hover */}
          <div className="group relative cursor-help">
            <div className="text-xs text-gray-400/60 font-mono transition-opacity duration-300 group-hover:opacity-0">
              Hover to view contract
            </div>
            <div className="absolute inset-0 text-xs text-gray-400/80 font-mono opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap overflow-hidden">
              {FAUCET_ADDRESS}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-600/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-pink-600/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
};