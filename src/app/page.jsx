'use client';

import { useLoginWithAbstract } from "@abstract-foundation/agw-react";
import { useAccount, useBalance } from "wagmi";
import { useState, useEffect } from "react";

export default function Home() {
  const { login } = useLoginWithAbstract();
  const { address } = useAccount();
  const { data: balance } = useBalance({
    address: address,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <main style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '20px' }}>Abstract Wallet Demo</h1>
      
      {!address ? (
        <button 
          onClick={login}
          style={{
            padding: '10px 20px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Connect with AGW
        </button>
      ) : (
        <div>
          <p style={{ marginBottom: '10px' }}>
            <strong>Connected Address:</strong> {address}
          </p>
          <p>
            <strong>ETH Balance:</strong> {balance ? `${balance.formatted} ${balance.symbol}` : 'Loading...'}
          </p>
        </div>
      )}
    </main>
  );
}