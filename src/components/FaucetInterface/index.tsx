import React from 'react';
import { useWallet } from './hooks/useWallet';
import { useFaucet } from './hooks/useFaucet';
import { ClaimInterface } from './components/ClaimInterface';
import { Instructions } from './components/Instructions';
import { TokenSetup } from './components/TokenSetup';

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
        <ClaimInterface 
          account={account}
          loading={walletLoading || faucetLoading}
          error={walletError || faucetError}
          success={success}
          onConnect={connectWallet}
          onClaim={claimTokens}
          onClaimAgain={handleClaimAgain}
        />
        <div className="lg:col-span-6">
          <Instructions />
        </div>
        <TokenSetup key={`token-setup-container-${Date.now()}`} />
      </div>
    </div>
  );
};

export default FaucetInterface;