export interface MetaMaskEthereum {
  isMetaMask?: boolean;
  request: (request: { method: string; params?: Array<any> }) => Promise<any>;
  selectedAddress: string | null;
}

declare global {
  interface Window {
    ethereum?: MetaMaskEthereum;
  }
}
