import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { FAUCET_ADDRESS, FAUCET_ABI } from '../constants';

export const useFaucetBalance = () => {
  const [balance, setBalance] = useState<string>('0');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        if (typeof window.ethereum !== 'undefined') {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const contract = new ethers.Contract(FAUCET_ADDRESS, FAUCET_ABI, provider);
          const balance = await contract.getBalance();
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
    const interval = setInterval(fetchBalance, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return { balance, loading, error };
};
