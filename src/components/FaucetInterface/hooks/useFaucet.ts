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

      // Reset confetti after animation
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);

    } catch (err: any) {
      // Check for user rejection
      if (err.code === 'ACTION_REJECTED') {
        setError('Transaction canceled by user.');
      } else {
        setError(err.message || 'Failed to claim tokens');
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