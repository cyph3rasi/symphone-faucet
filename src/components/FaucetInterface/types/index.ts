export interface WalletState {
  account: string | null;
  loading: boolean;
  error: Error | null;
  connectWallet: () => Promise<void>;
}

export interface FaucetState {
  loading: boolean;
  error: Error | null;
  success: boolean;
  showConfetti: boolean;
  claimTokens: () => Promise<void>;
  handleClaimAgain: () => void;
}

export interface ClaimInterfaceProps {
  account: string | null;
  loading: boolean;
  error: Error | null;
  success: boolean;
  onConnect: () => Promise<void>;
  onClaim: () => Promise<void>;
  onClaimAgain: () => void;
}