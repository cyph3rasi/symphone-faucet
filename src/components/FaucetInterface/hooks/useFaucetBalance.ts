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
        if (typeof window.ethereum !== 'undefined') {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const tokenContract = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, provider);
          const balance = await tokenContract.balanceOf(FAUCET_ADDRESS);
          setBalance(ethers.utils.formatUnits(balance, 18));
          setError(null);
        }
      } catch (err) {
        setError('Error fetching faucet balance');
        console.error('Error fetching balance:', err);
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