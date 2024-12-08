import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import '../styles/stars.css';
import Confetti from './Confetti';

declare global {
  interface Window {
    ethereum?: any;
  }
}

const FAUCET_ABI = [
    "function send() external",
    "function withdrawTokens(address _receiver, uint256 _amount) external",
    "function setTokenAddress(address _tokenAddr) external",
    "function setFaucetDripAmount(uint256 _amount) external"
];

const FaucetInterface = () => {
    const [showConfetti, setShowConfetti] = useState(false);

    // This function should be called after a successful transaction
    const triggerConfetti = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000); // Hide after 5 seconds
    };

    // Your existing code and functions here...
    // When a transaction succeeds, call triggerConfetti()

    return (
        <>
            {showConfetti && <Confetti />}
            <div className="min-h-screen py-12 px-4 relative">
                <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Your existing JSX here */}
                </div>
            </div>
        </>
    );
};

export default FaucetInterface;
