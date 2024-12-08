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
            <ClaimInterface 
              account={account}
              loading={walletLoading || faucetLoading}
              error={walletError || faucetError}
              success={success}
              showConfetti={showConfetti}
              onConnect={connectWallet}
              onClaim={claimTokens}
              onClaimAgain={handleClaimAgain}
            />
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