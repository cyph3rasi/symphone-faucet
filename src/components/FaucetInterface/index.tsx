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
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main claim interface - 5 columns */}
        <div className="lg:col-span-5">
          <ClaimInterface 
            account={account}
            loading={walletLoading || faucetLoading}
            error={walletError || faucetError}
            success={success}
            onConnect={connectWallet}
            onClaim={claimTokens}
            onClaimAgain={handleClaimAgain}
          />
        </div>

        {/* Instructions section - 4 columns */}
        <div className="lg:col-span-4">
          <Instructions />
        </div>

        {/* About Token sidebar - 3 columns */}
        <div className="lg:col-span-3">
          <AboutToken />
        </div>

        {/* Token Setup section - full width */}
        <div className="lg:col-span-12">
          <TokenSetup key={`token-setup-container-${Date.now()}`} />
        </div>
      </div>
    </div>
  );
};

export default FaucetInterface;