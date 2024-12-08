export interface WalletState {
  account: string;
  loading: boolean;
  error: string;
  connectWallet: () => Promise<void>;
}

export interface FaucetState {
  loading: boolean;
  error: string;
  success: string;
  showConfetti: boolean;
  claimTokens: () => Promise<void>;
  handleClaimAgain: () => void;
}

export interface ClaimInterfaceProps {
  account: string;
  loading: boolean;
  error: string;
  success: string;
  showConfetti: boolean;
  onConnect: () => Promise<void>;
  onClaim: () => Promise<void>;
  onClaimAgain: () => void;
}