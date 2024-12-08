import React from 'react';
import { ClaimInterfaceProps } from '../types';
import { Confetti } from './Confetti';
import { FaucetBalance } from './FaucetBalance';

export const ClaimInterface: React.FC<ClaimInterfaceProps> = ({
  account,
  loading,
  error,
  success,
  showConfetti,
  onConnect,
  onClaim,
  onClaimAgain
}) => (
  <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
    <Confetti active={showConfetti} />
    <div className="bg-opacity-10 bg-white backdrop-filter backdrop-blur-lg p-8 rounded-3xl border border-purple-500/20">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-3 font-zen-dots bg-gradient-to-r from-purple-400 to-pink-300 text-transparent bg-clip-text">
          Symphony Token Faucet
        </h1>
        <p className="text-gray-400 font-orbitron">Claim 1000 SYMPH tokens</p>
      </div>

      <FaucetBalance />

      <div className="space-y-6">
        {!account ? (
          <button 
            onClick={onConnect}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-4 rounded-xl transition-all transform hover:scale-[1.01] active:scale-[0.99] font-orbitron"
          >
            Connect Wallet
          </button>
        ) : (
          <div className="space-y-4">
            <div className="bg-gray-700/50 backdrop-blur rounded-xl p-4 border border-purple-500/20">
              <p className="text-sm text-gray-300 mb-1 font-orbitron">Connected Wallet</p>
              <p className="font-mono text-sm truncate text-purple-300">{account}</p>
            </div>

            {!success && (
              <button
                onClick={onClaim}
                disabled={loading}
                className={`w-full py-3 px-4 rounded-xl font-bold transition-all transform hover:scale-[1.01] active:scale-[0.99] font-orbitron ${
                  loading
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500'
                } text-white`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Claiming...
                  </span>
                ) : (
                  'Claim Tokens'
                )}
              </button>
            )}
          </div>
        )}

        {error && (
          <div className="bg-red-900/50 backdrop-blur border border-red-500/20 text-white p-4 rounded-xl font-orbitron">
            {error}
          </div>
        )}

        {success && (
          <div className="space-y-4">
            <div className="bg-green-900/30 backdrop-blur border border-green-500/30 text-white p-4 rounded-xl font-orbitron animate-pulse">
              {success}
            </div>
            <button
              onClick={onClaimAgain}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-4 rounded-xl transition-all transform hover:scale-[1.01] active:scale-[0.99] font-orbitron"
            >
              Claim Again
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);