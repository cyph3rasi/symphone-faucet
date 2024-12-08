import React from 'react';
import { useWallet } from './hooks/useWallet';
import { useFaucet } from './hooks/useFaucet';
import { Instructions } from './components/Instructions';
import { TokenSetup } from './components/TokenSetup';
import { AboutToken } from './components/AboutToken';
import { HeaderLogo } from './components/HeaderLogo';
import { PepeBackground } from './components/PepeBackground';
import '../../styles/pepe.css';

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
      <PepeBackground />
      <div className="content-wrapper">
        <HeaderLogo />
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
          {/* Left Column - About Section */}
          <div className="order-3 lg:order-1 lg:col-span-3">
            <AboutToken />
          </div>

          {/* Middle Column - Main Interface and Instructions */}
          <div className="order-1 lg:order-2 lg:col-span-6 space-y-6">
            <div className="bg-black/30 backdrop-filter backdrop-blur-lg p-8 rounded-3xl border border-green-500/20 relative overflow-hidden group hover:border-green-400/30 transition-all duration-500">
              {/* Animated background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-lime-800/20 to-green-900/20 animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/0 via-lime-300/10 to-green-500/0 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              
              <div className="relative text-center mb-8">
                <div className="inline-block">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-unbounded font-semibold bg-gradient-to-r from-green-400 via-lime-300 to-green-400 text-transparent bg-clip-text tracking-tight mb-2 transform hover:scale-[1.02] transition-transform duration-300">
                    Free PEPE Faucet
                  </h2>
                  {/* Glow lines */}
                  <div className="h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse" />
                  <div className="h-[1px] mt-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse" />
                </div>
                <p className="text-gray-200 font-unbounded text-lg tracking-wide mt-4 opacity-90">
                  Claim your 3,333 Free PEPE
                </p>
              </div>

              <div className="space-y-6">
                {!account ? (
                  <button 
                    onClick={connectWallet}
                    className="w-full bg-gradient-to-r from-green-600 to-lime-500 hover:from-green-500 hover:to-lime-400 text-white font-unbounded text-lg tracking-wide py-4 px-6 rounded-xl transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-green-900/20"
                  >
                    Connect Wallet
                  </button>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-black/40 backdrop-blur rounded-xl p-4 border border-green-500/20">
                      <p className="text-sm text-gray-300 mb-1 font-unbounded tracking-wide">Connected Wallet</p>
                      <p className="font-unbounded text-sm truncate text-green-300">{account}</p>
                    </div>

                    {!success && (
                      <button
                        onClick={claimTokens}
                        disabled={faucetLoading}
                        className={`w-full py-4 px-6 rounded-xl font-unbounded text-lg tracking-wide transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-green-900/20 ${
                          faucetLoading
                            ? 'bg-gray-600 cursor-not-allowed'
                            : 'bg-gradient-to-r from-green-600 to-lime-500 hover:from-green-500 hover:to-lime-400'
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
                          'Claim Free PEPE'
                        )}
                      </button>
                    )}
                  </div>
                )}

                {walletError && (
                  <div className="bg-red-900/50 backdrop-blur border border-red-500/20 text-white p-4 rounded-xl font-unbounded text-sm">
                    {walletError}
                  </div>
                )}

                {success && (
                  <div className="space-y-4">
                    <div className="bg-green-900/30 backdrop-blur border border-green-500/30 text-white p-4 rounded-xl font-unbounded text-sm animate-pulse">
                      {success}
                    </div>
                    <button
                      onClick={handleClaimAgain}
                      className="w-full bg-gradient-to-r from-green-600 to-lime-500 hover:from-green-500 hover:to-lime-400 text-white font-unbounded text-lg tracking-wide py-4 px-6 rounded-xl transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-green-900/20"
                    >
                      Claim Again
                    </button>
                  </div>
                )}
              </div>
            </div>
            <Instructions />
          </div>

          {/* Right Column - Token Setup */}
          <div className="order-2 lg:order-3 lg:col-span-3">
            <TokenSetup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaucetInterface;