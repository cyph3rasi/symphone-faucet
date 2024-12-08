import React from 'react';
import { TOKEN_ADDRESS } from '../constants';

export const TokenSetup = () => {
  return (
    <div className="lg:col-span-3 order-2 lg:order-3">
      <div className="bg-black/30 backdrop-filter backdrop-blur-lg p-6 rounded-3xl border border-green-500/20 h-full">
        <h2 className="text-2xl font-spicy-rice mb-4 text-green-300">Add to MetaMask</h2>
        <div className="space-y-4 text-sm text-gray-300">
          <p>To view your Free PEPE tokens in MetaMask after claiming, follow these steps:</p>
          
          <div className="space-y-3" key={`token-setup-${Date.now()}`}>
            <p>1. Open your MetaMask wallet and ensure you're connected to the Avalanche C-Chain network</p>
            <p>2. Click on the tokens tab</p>
            <p>3. Click on the + icon</p>
            <p>4. In the token import interface, select "Custom Token"</p>
            <p>5. Copy and paste the Free PEPE Token contract address:</p>
            <p className="font-mono text-xs break-all bg-black/40 p-2 rounded-lg select-all">
              {TOKEN_ADDRESS}
            </p>
            <p>6. The token symbol (FREEPEPE) and decimals (18) should auto-populate</p>
            <p>7. Click "Add Custom Token" to proceed</p>
            <p>8. Review the token details and click "Import Tokens" to confirm</p>
            <p>9. You should now see your Free PEPE token balance in your MetaMask wallet</p>
            <p className="text-green-300">Note: You only need to add the custom token once. After importing, MetaMask will automatically track your Free PEPE balance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};