(Previous content remains the same...)              <div className="space-y-4 text-sm text-gray-300">
                <p>To view your Symphony tokens in MetaMask after claiming, follow these steps:</p>
                
                <div className="space-y-3">
                  <p>1. Open your MetaMask wallet extension and ensure you're on the Avalanche C-Chain network</p>
                  
                  <p>2. At the bottom of your wallet interface, locate and click on the "Assets" or "Tokens" tab to view your current token list</p>
                  
                  <p>3. Scroll to the bottom of your token list and click "Import tokens" to add a new token to your wallet</p>
                  
                  <p>4. In the token import interface, switch to the "Custom token" tab at the top</p>
                  
                  <p>5. Copy this Symphony Token contract address:</p>
                  <div className="bg-black/30 p-3 rounded-lg mt-2 mb-4">
                    <p className="font-mono text-xs break-all select-all text-purple-300">
                      {TOKEN_ADDRESS}
                    </p>
                  </div>
                  
                  <p>6. Paste the address into the "Token Contract Address" field. The token symbol (SYMPH) and decimals (18) should automatically populate</p>
                  
                  <p>7. Click the "Add Custom Token" button to proceed to the confirmation screen</p>
                  
                  <p>8. Review the token information to ensure everything is correct, then click "Import Tokens" to complete the process</p>
                  
                  <p>9. The Symphony token (SYMPH) will now appear in your token list, showing your current balance</p>
                  
                  <div className="mt-6 p-4 bg-purple-900/20 rounded-xl border border-purple-500/20">
                    <p className="text-purple-300 font-orbitron text-sm">Important Notes:</p>
                    <ul className="list-disc list-inside mt-2 space-y-2 text-gray-300">
                      <li>You only need to add the token once per network</li>
                      <li>Your balance will automatically update after each claim</li>
                      <li>The token will remain visible in your wallet even after closing and reopening MetaMask</li>
                    </ul>
                  </div>
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