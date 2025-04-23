import React from 'react';

const Whitepaper = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-6 text-gray-800 dark:text-gray-200">
      <h2 className="text-4xl font-bold mb-6 text-center text-teal-500">Rannata Token on TON</h2>
      <p className="mb-4">
        The Rannata Token is a decentralized token built on the TON blockchain. It is designed for fast transactions, low fees, and high scalability, making it a suitable token for various decentralized applications (dApps) and financial services.
      </p>
      <h3 className="text-2xl font-semibold mt-8 mb-2">Features</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Fast Transactions:</strong> Near-instant transaction speed using TON’s high-performance blockchain.</li>
        <li><strong>Low Fees:</strong> Extremely low transaction costs make it ideal for frequent use.</li>
        <li><strong>Secure:</strong> Built on a highly secure infrastructure for maximum safety.</li>
        <li><strong>Scalable:</strong> Dynamic sharding allows for thousands of transactions per second.</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-2">Token Details</h3>
      <ul className="space-y-1">
        <li><strong>Decimals:</strong> 9</li>
        <li><strong>Blockchain:</strong> TON</li>
        <li><strong>Token Name:</strong> RANNTA COIN</li>
        <li><strong>Symbol:</strong> RANNTA</li>
        <li><strong>Total Supply:</strong> 130,000,000,000</li>
        <li><strong>Smart Contract:</strong> EQBCY5Yj9G6VAQibTe6hz53j8vBNO234n0fzHUP3lUBBYbeR</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-8 mb-2">Community Links</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><a href="https://rannta.com" target="_blank" rel="noreferrer" className="text-teal-400 underline">Official Website</a></li>
        <li><a href="https://tonscan.org/" target="_blank" rel="noreferrer" className="text-teal-400 underline">TON Blockchain Explorer</a></li>
        <li><a href="https://tonviewer.com/EQBCY5Yj9G6VAQibTe6hz53j8vBNO234n0fzHUP3lUBBYbeR" target="_blank" rel="noreferrer" className="text-teal-400 underline">Tonviewer</a></li>
        <li><a href="https://youtube.com/@ranntacoin" target="_blank" rel="noreferrer" className="text-teal-400 underline">YouTube</a></li>
        <li><a href="https://x.com/ranntacoin" target="_blank" rel="noreferrer" className="text-teal-400 underline">X (Twitter)</a></li>
        <li><a href="https://t.me/ranntacoin2025" target="_blank" rel="noreferrer" className="text-teal-400 underline">Telegram</a></li>
        <li><a href="https://discord.gg/6qgSnrSC" target="_blank" rel="noreferrer" className="text-teal-400 underline">Discord</a></li>
        <li>Email: <span className="text-teal-400">rannatacoin@gmail.com</span></li>
      </ul>
    </div>
  );
};

export default Whitepaper;
