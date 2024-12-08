import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import '../styles/stars.css';
import Confetti from './Confetti';

const FAUCET_ABI = [
    "function send() external",
    "function withdrawTokens(address _receiver, uint256 _amount) external",
    "function setTokenAddress(address _tokenAddr) external",
    "function setFaucetDripAmount(uint256 _amount) external"
];

const FaucetInterface = () => {
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  const FAUCET_ADDRESS = '0x4569EE4D758f4c453f89AeCf18D842FEe0490f4E';

  useEffect(() => {
    // Star animation code remains the same
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars-container';
    document.body.prepend(starsContainer);

    const backgroundDiv = document.createElement('div');
    backgroundDiv.className = 'stars-background';
    document.body.prepend(backgroundDiv);

    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = Math.random() * 1.5 + 0.5;
      const duration = Math.random() * 5 + 3;
      
      star.style.cssText = `
        left: ${left}%;
        top: ${top}%;
        width: ${size}px;
        height: ${size}px;
        --duration: ${duration}s;
      `;
      
      starsContainer.appendChild(star);
    }

    return () => {
      document.body.removeChild(starsContainer);
      document.body.removeChild(backgroundDiv);
    };
  }, []);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        throw new Error('Please install MetaMask to use this faucet');
      }

      setError('');
      
      const avalancheChain = {
        chainId: '0xA86A',
        chainName: 'Avalanche C-Chain',
        nativeCurrency: {
          name: 'AVAX',
          symbol: 'AVAX',
          decimals: 18
        },
        rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
        blockExplorerUrls: ['https://snowtrace.io/']
      };

      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0xA86A' }],
        });
      } catch (switchError) {
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [avalancheChain],
            });
          } catch (addError) {
            throw new Error('Failed to add Avalanche network to MetaMask');
          }
        } else {
          throw switchError;
        }
      }

      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      setAccount(accounts[0]);

    } catch (err) {
      if (err.code === 4001) {
        setError('Please connect your wallet to continue.');
      } else {
        setError(err.message);
      }
    }
  };

  const claimTokens = async () => {
    try {
      setLoading(true);
      setError('');
      setSuccess('');
      setShowConfetti(false);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const faucetContract = new ethers.Contract(FAUCET_ADDRESS, FAUCET_ABI, signer);

      const tx = await faucetContract.send();
      await tx.wait();

      setSuccess('Successfully claimed 1000 SYMPH tokens!');
      setShowConfetti(true);
      // Remove confetti after 5 seconds
      setTimeout(() => setShowConfetti(false), 5000);

    } catch (err) {
      // Check for transaction rejection
      if (err.code === 'ACTION_REJECTED' || 
          (err.message && err.message.includes('user rejected transaction'))) {
        setError('Transaction was canceled.');
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleClaimAgain = () => {
    setSuccess('');
    setError('');
    setShowConfetti(false);
  };

  return (
    <>
      {showConfetti && <Confetti />}
      <div className="min-h-screen flex items-center justify-center py-12 px-4 relative">
        <div className="max-w-xl w-full space-y-8">
          {/* Main Faucet Card */}
          <div className="bg-opacity-10 bg-white backdrop-filter backdrop-blur-lg p-8 rounded-3xl border border-purple-500/20">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-3 font-zen-dots bg-gradient-to-r from-purple-400 to-pink-300 text-transparent bg-clip-text">
                Symphony Token Faucet
              </h1>
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
                      disabled={loading}
                      className={`w-full py-3 px-4 rounded-xl font-bold transition-all transform hover:scale-[1.01] active:scale-[0.99] font-orbitron ${
                        loading
                          ? 'bg-gray-600 cursor-not-allowed'
                          : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500'
                      }`}
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
                    onClick={handleClaimAgain}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-4 rounded-xl transition-all transform hover:scale-[1.01] active:scale-[0.99] font-orbitron"
                  >
                    Claim Again
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Instructions Card */}
          <div className="bg-opacity-10 bg-white backdrop-filter backdrop-blur-lg p-6 rounded-3xl border border-purple-500/20">
            <h2 className="text-xl font-bold mb-4 font-zen-dots text-purple-300">Instructions</h2>
            <div className="space-y-3 text-sm text-gray-300">
              <p>1. Connect your MetaMask wallet to get started</p>
              <p>2. Make sure you have a small amount of AVAX in your wallet for gas fees (less than $0.20 per claim)</p>
              <p>3. If not already connected, you'll be prompted to switch to the Avalanche C-Chain network</p>
              <p>4. Click 'Claim Tokens' to receive 1000 Symphony tokens</p>
              <p className="text-purple-300 mt-4">Note: You'll need to confirm the transaction in MetaMask and pay a small gas fee in AVAX (typically under $0.20)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaucetInterface;