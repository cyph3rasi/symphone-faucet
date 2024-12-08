import React from 'react';
import ReactConfetti from 'react-confetti';
import { useWallet } from './hooks/useWallet';
import { useFaucet } from './hooks/useFaucet';
import { ClaimInterface } from './components/ClaimInterface';
import { Instructions } from './components/Instructions';
import { TokenSetup } from './components/TokenSetup';

const FaucetInterface = () => {
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
    <>
      {showConfetti && <ReactConfetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={200}
        gravity={0.3}
      />}
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
          <Instructions />
          <TokenSetup />
        </div>
      </div>
    </>
  );
};

export default FaucetInterface;