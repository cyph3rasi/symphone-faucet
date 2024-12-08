                <p>3. If not already connected, you'll be prompted to switch to the Avalanche C-Chain network</p>
                <p>4. Click 'Claim Tokens' to receive 1000 Symphony tokens</p>
                <p className="text-purple-300 mt-4">Note: You'll need to confirm the transaction in MetaMask and pay a small gas fee in AVAX (typically under $0.20)</p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - MetaMask Setup */}
          <div className="lg:col-span-3 order-2 lg:order-3">
            <div className="bg-opacity-10 bg-white backdrop-filter backdrop-blur-lg p-6 rounded-3xl border border-purple-500/20 h-full">
              <h2 className="text-xl font-bold mb-4 font-zen-dots text-purple-300">View Tokens in MetaMask</h2>
              <div className="space-y-4 text-sm text-gray-300">
                <p>To view your Symphony tokens in MetaMask after claiming, follow these steps:</p>
                
                <div className="space-y-3">
                  <p>1. Open your MetaMask wallet and ensure you're connected to the Avalanche C-Chain network</p>
                  
                  <p>2. Click on the "Assets" tab at the bottom of your wallet interface</p>
                  
                  <p>3. Scroll down and locate the "Import Tokens" button, then click on it</p>
                  
                  <p>4. In the token import interface, select "Custom Token"</p>
                  
                  <p>5. Copy and paste the Symphony Token contract address:</p>
                  <p className="font-mono text-xs break-all bg-black/30 p-2 rounded-lg select-all">
                    {TOKEN_ADDRESS}
                  </p>
                  
                  <p>6. The token symbol (SYMPH) and decimals (18) should auto-populate</p>
                  
                  <p>7. Click "Add Custom Token" to proceed</p>
                  
                  <p>8. Review the token details and click "Import Tokens" to confirm</p>
                  
                  <p>9. You should now see your Symphony token balance in your MetaMask wallet</p>
                  
                  <p className="text-purple-300">Note: You only need to add the custom token once. After importing, MetaMask will automatically track your SYMPH balance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaucetInterface;