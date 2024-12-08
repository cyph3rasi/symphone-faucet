import React from 'react';
import { useWallet } from './hooks/useWallet';
import { useFaucet } from './hooks/useFaucet';
import { ClaimInterface } from './components/ClaimInterface';
import { Instructions } from './components/Instructions';
import { TokenSetup } from './components/TokenSetup';
import { AboutToken } from './components/AboutToken';
import { HeaderLogo } from './components/HeaderLogo';
import { StarBackground } from './components/StarBackground';
import './styles/stars.css';

const FaucetInterface: React.FC = () => {
  const { account, loading: walletLoading, error: walletError, connectWallet } = useWallet();
  const { 
    loading: faucetLoading, 
    error: faucetError, 
    success, 
    showConfetti, 
    claimTokens, 
    handleClaimAgain 
  } = useFaucet();

  return (
    <div className="min-h-screen py-6 px-4 relative">
      <StarBackground />
      <div className="content-wrapper">
        <HeaderLogo />
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
          {/* Left Column - About Section (3 columns wide) */}
          <div className="order-3 lg:order-1 lg:col-span-3">
            <AboutToken />
          </div>

          {/* Middle Column - Main Interface and Instructions (6 columns wide) */}
          <div className="order-1 lg:order-2 lg:col-span-6 space-y-6">
            <div className="bg-opacity-10 bg-white backdrop-filter backdrop-blur-lg p-8 rounded-3xl border border-purple-500/20">
              <div className="text-center mb-8">
                <p className="text-gray-400 font-orbitron">Claim 1000 SYMPH tokens</p>
              </div>

              <div className="space-y-6">
                {!account ? (
                  <button 
                    onClick={connectWallet}
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
                        onClick={claimTokens}
                        disabled={faucetLoading}
                        className={`w-full py-3 px-4 rounded-xl font-bold transition-all transform hover:scale-[1.01] active:scale-[0.99] font-orbitron ${
                          faucetLoading
                            ? 'bg-gray-600 cursor-not-allowed'
                            : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500'
                        } text-white`}
                      >
                        {faucetLoading ? (
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

                {walletError && (
                  <div className="bg-red-900/50 backdrop-blur border border-red-500/20 text-white p-4 rounded-xl font-orbitron">
                    {walletError}
                  </div>
                )}

                {success && (
                  <div className="space-y-4">
                    <div className="bg-green-900/30 backdrop-blur border border-green-500/30 text-white p-4 rounded-xl font-orbitron animate-pulse">
                      {success}
                    </div>
                    <button
                      onClick={handleClaimAgain}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-4 rounded-xl transition-all transform hover:scale-[1.01] active:scale-[0.99] font-orbitron"
                    >
                      Claim Again
                    </button>
                  </div>
                )}
              </div>
            </div>
            <Instructions />
          </div>

          {/* Right Column - Token Setup (3 columns wide) */}
          <div className="order-2 lg:order-3 lg:col-span-3">
            <TokenSetup key={`token-setup-container-${Date.now()}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaucetInterface;