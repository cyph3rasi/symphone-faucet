import { useState } from 'react';
import { ethers } from 'ethers';
import { FAUCET_ABI, FAUCET_ADDRESS } from '../constants';

export const useFaucet = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);

  const claimTokens = async () => {
    try {
      setError('');
      setSuccess('');
      setShowConfetti(false);
      setLoading(true);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const faucet = new ethers.Contract(FAUCET_ADDRESS, FAUCET_ABI, signer);

      const tx = await faucet.send();
      await tx.wait();

      setSuccess('Successfully claimed 1000 SYMPH tokens!');
      setShowConfetti(true);

      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);

    } catch (err: any) {
      if (err.code === 'ACTION_REJECTED') {
        setError('Transaction canceled by user.');
      } else if (err.message && err.message.includes('Try again later')) {
        setError('Please wait before claiming tokens again. Each address can only claim once every 24 hours.');
      } else if (err.code === 'UNPREDICTABLE_GAS_LIMIT' && err.error?.data?.message) {
        if (err.error.data.message.includes('Try again later')) {
          setError('Please wait before claiming tokens again. Each address can only claim once every 24 hours.');
        } else {
          setError('Transaction failed. Please try again.');
        }
      } else {
        setError('Failed to claim tokens. Please ensure you have enough AVAX for gas fees and try again.');
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

  return { loading, error, success, showConfetti, claimTokens, handleClaimAgain };
};