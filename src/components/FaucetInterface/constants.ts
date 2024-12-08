export const FAUCET_ADDRESS = '0x3395Cc803C7088492f5B94df3Cb488f929A7eAA2';
export const TOKEN_ADDRESS = '0x9fBd8Ccf17D9895e8d8E39427a094F213f897c3c';

export const FAUCET_ABI = [
    "function send() external",
    "function withdrawTokens(address _receiver, uint256 _amount) external",
    "function setTokenAddress(address _tokenAddr) external",
    "function setFaucetDripAmount(uint256 _amount) external"
];

export const TOKEN_ABI = [
    "function balanceOf(address account) view returns (uint256)",
    "function decimals() view returns (uint8)",
    "function symbol() view returns (string)",
    "function name() view returns (string)",
    "function transfer(address to, uint256 amount) returns (bool)",
    "function allowance(address owner, address spender) view returns (uint256)",
    "function approve(address spender, uint256 amount) returns (bool)"
];