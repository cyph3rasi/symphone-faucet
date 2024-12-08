import React from 'react';
import { useWallet, useFaucet } from './hooks';
import { 
  StarBackground,
  AboutToken,
  ClaimInterface,
  Instructions,
  TokenSetup 
} from './components';

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
    <>
      {showConfetti && <Confetti />}
      <StarBackground />
      <div className="min-h-screen py-12 px-4 relative">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          <AboutToken />
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