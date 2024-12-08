import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { TOKEN_ADDRESS, TOKEN_ABI, FAUCET_ADDRESS } from '../constants';

export const useFaucetBalance = () => {
  const [balance, setBalance] = useState<string>('0');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        // Use a default RPC provider for Avalanche C-Chain
        const provider = new ethers.providers.JsonRpcProvider('https://api.avax.network/ext/bc/C/rpc');
        const tokenContract = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, provider);
        const balance = await tokenContract.balanceOf(FAUCET_ADDRESS);
        setBalance(ethers.utils.formatUnits(balance, 18));
        setError(null);
      } catch (err) {
        console.error('Error fetching balance:', err);
        setError('Error fetching faucet balance');
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
    const interval = setInterval(fetchBalance, 30000);

    return () => clearInterval(interval);
  }, []);

  return { balance, loading, error };
};