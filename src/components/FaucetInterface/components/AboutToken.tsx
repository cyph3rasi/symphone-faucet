import React from 'react';
import { SYMPHONY_TOKEN_ADDRESS } from '../constants';

export const AboutToken: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-xl h-full">
      <h2 className="text-2xl font-bold mb-4 text-white">About SYMPH Token</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white/90">Token Details</h3>
          <div className="space-y-2 text-white/80">
            <p className="flex justify-between">
              <span>Name:</span>
              <span className="font-medium">Symphony Token</span>
            </p>
            <p className="flex justify-between">
              <span>Symbol:</span>
              <span className="font-medium">SYMPH</span>
            </p>
            <p className="flex justify-between">
              <span>Network:</span>
              <span className="font-medium">Avalanche C-Chain</span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-white/90">Contract Address</h3>
          <p className="text-sm text-white/80 break-all font-mono">
            {SYMPHONY_TOKEN_ADDRESS}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-white/90">Token Utilities</h3>
          <ul className="list-disc pl-5 space-y-2 text-white/80">
            <li>Governance voting in Symphony DAO</li>
            <li>Access to premium features</li>
            <li>Staking rewards</li>
            <li>Community incentives</li>
          </ul>
        </div>

        <div className="pt-4 border-t border-white/10">
          <p className="text-sm text-white/70">
            Note: SYMPH tokens from this faucet are for testing purposes only on the Avalanche C-Chain testnet.
          </p>
        </div>
      </div>
    </div>
  );
};