import React from 'react';
import { useWallet } from './hooks/useWallet';
import { useFaucet } from './hooks/useFaucet';
import { ClaimInterface } from './components/ClaimInterface';
import { Instructions } from './components/Instructions';
import { TokenSetup } from './components/TokenSetup';
import { AboutToken } from './components/AboutToken';

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
    <div className="min-h-screen py-12 px-4 relative">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - About Section */}
        <div className="lg:col-span-1">
          <AboutToken />
        </div>

        {/* Middle Column - Main Interface, Instructions, Video */}
        <div className="lg:col-span-1 space-y-6">
          <ClaimInterface 
            account={account}
            loading={walletLoading || faucetLoading}
            error={walletError || faucetError}
            success={success}
            onConnect={connectWallet}
            onClaim={claimTokens}
            onClaimAgain={handleClaimAgain}
          />
          <Instructions />
          {/* Video Tutorial placeholder - You'll need to create this component */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-white">Video Tutorial</h2>
            {/* Add video component here */}
          </div>
        </div>

        {/* Right Column - Token Setup */}
        <div className="lg:col-span-1">
          <TokenSetup key={`token-setup-container-${Date.now()}`} />
        </div>
      </div>
    </div>
  );
};

export default FaucetInterface;