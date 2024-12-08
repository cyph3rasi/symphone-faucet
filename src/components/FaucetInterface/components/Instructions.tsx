import React from 'react';

export const Instructions = () => (
  <div className="space-y-6">
    {/* General Instructions Section */}
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

    {/* Video Tutorial Section */}
    <div className="bg-opacity-10 bg-white backdrop-filter backdrop-blur-lg p-6 rounded-3xl border border-purple-500/20">
      <h2 className="text-xl font-bold mb-4 font-zen-dots text-purple-300">Video Tutorial</h2>
      <div className="overflow-hidden rounded-xl shadow-xl bg-black/20">
        <div className="relative w-full pt-[56.25%]">
          <iframe
            src="https://www.youtube.com/embed/8TwyfnpmyVI"
            title="Symphony Token Tutorial"
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
      <p className="text-sm text-purple-300/80 mt-4 text-center italic">
        Watch our comprehensive guide on claiming and managing your Symphony tokens
      </p>
    </div>
  </div>
);