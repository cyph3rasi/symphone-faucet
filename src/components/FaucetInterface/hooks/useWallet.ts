import { useState } from 'react';

export const AVALANCHE_CHAIN_ID = '0xa86a';

export const useWallet = () => {
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState('');
  const [error, setError] = useState('');

  const connectWallet = async () => {
    try {
      setError('');
      setLoading(true);
      
      if (!window.ethereum) {
        throw new Error('Please install MetaMask to use this faucet');
      }

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      
      if (!accounts || accounts.length === 0) {
        throw new Error('No accounts found. Please unlock your MetaMask wallet.');
      }

      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      
      if (chainId !== AVALANCHE_CHAIN_ID) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: AVALANCHE_CHAIN_ID }],
          });
        } catch (switchError: any) {
          if (switchError.code === 4902) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: AVALANCHE_CHAIN_ID,
                  chainName: 'Avalanche C-Chain',
                  nativeCurrency: {
                    name: 'AVAX',
                    symbol: 'AVAX',
                    decimals: 18
                  },
                  rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
                  blockExplorerUrls: ['https://snowtrace.io/']
                }],
              });
            } catch (addError) {
              throw new Error('Failed to add Avalanche network to MetaMask');
            }
          } else {
            throw new Error('Failed to switch to Avalanche network');
          }
        }
      }

      setAccount(accounts[0]);
    } catch (err: any) {
      setError(err.message || 'Failed to connect wallet');
    } finally {
      setLoading(false);
    }
  };

  return { account, loading, error, connectWallet };
};