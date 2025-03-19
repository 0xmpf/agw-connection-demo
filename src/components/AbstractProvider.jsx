'use client';

import { AbstractWalletProvider } from "@abstract-foundation/agw-react";
import { abstract } from "viem/chains"; 

export default function AbstractProvider({ children }) {
  const config = {
    testnet: false, 
  };

  return (
    <AbstractWalletProvider chain={abstract} config={config}>
      {children}
    </AbstractWalletProvider>
  );
}