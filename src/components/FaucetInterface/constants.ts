export const FAUCET_ADDRESS = '0x4569EE4D758f4c453f89AeCf18D842FEe0490f4E';
export const TOKEN_ADDRESS = '0x9fBd8Ccf17D9895e8d8E39427a094F213f897c3c';

export const FAUCET_ABI = [
    "function send() external",
    "function withdrawTokens(address _receiver, uint256 _amount) external",
    "function setTokenAddress(address _tokenAddr) external",
    "function setFaucetDripAmount(uint256 _amount) external"
];