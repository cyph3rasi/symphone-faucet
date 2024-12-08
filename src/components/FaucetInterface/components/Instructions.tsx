import React from 'react';

export const Instructions = () => (
  <div className="space-y-6">
    {/* General Instructions Section */}
    <div className="bg-black/30 backdrop-filter backdrop-blur-lg p-6 rounded-3xl border border-green-500/20">
      <h2 className="text-2xl font-unbounded font-medium mb-4 text-green-300 tracking-tight">Instructions</h2>
      <div className="space-y-3 text-gray-300 font-unbounded text-sm">
        <p>1. Connect your MetaMask wallet to get started</p>
        <p>2. Make sure you have a small amount of AVAX in your wallet for gas fees (less than $0.20 per claim)</p>
        <p>3. If not already connected, you'll be prompted to switch to the Avalanche C-Chain network</p>
        <p>4. Click 'Claim Tokens' to receive 3,333 Free PEPE tokens</p>
        <p className="text-green-300 mt-4">Note: You'll need to confirm the transaction in MetaMask and pay a small gas fee in AVAX (typically under $0.20)</p>
      </div>
    </div>
  </div>
);