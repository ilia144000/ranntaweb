import React from "react";

function Whitepaper() {
  return (
    <div className="max-w-4xl mx-auto mt-12 px-4 text-gray-200">
      <h1 className="text-4xl font-bold text-teal-400 mb-6">RANNTA Whitepaper</h1>

      <p className="mb-4">
        The Rannata Token is a decentralized token built on the TON blockchain.
        It is designed for fast transactions, low fees, and high scalability, making it suitable for various dApps and financial services.
      </p>

      <ul className="list-disc pl-5 mb-6 text-gray-300">
        <li><strong>Fast Transactions:</strong> Near-instant processing via TON blockchain</li>
        <li><strong>Low Fees:</strong> Minimal cost on transactions</li>
        <li><strong>Secure:</strong> High-security infrastructure of TON</li>
        <li><strong>Scalable:</strong> Supports thousands of transactions per second</li>
      </ul>

      <h2 className="text-2xl font-semibold text-teal-300 mb-4">Token Details</h2>
      <div className="bg-gray-800 p-4 rounded-md shadow mb-6">
        <p><strong>Token Name:</strong> RANNTA COIN</p>
        <p><strong>Symbol:</strong> RANNTA</p>
        <p><strong>Decimals:</strong> 9</p>
        <p><strong>Total Supply:</strong> 130,000,000,000</p>
        <p><strong>Blockchain:</strong> TON</p>
        <p><strong>Smart Contract:</strong> <a href="https://tonviewer.com/EQBCY5Yj9G6VAQibTe6hz53j8vBNO234n0fzHUP3lUBBYbeR" target="_blank" className="text-teal-400">View on Tonviewer</a></p>
      </div>

      <h2 className="text-2xl font-semibold text-teal-300 mb-4">Official Links</h2>
      <ul className="list-disc pl-5 text-teal-400">
        <li><a href="https://rannta.com" target="_blank">rannta.com</a></li>
        <li><a href="https://tonscan.org/" target="_blank">TON Explorer</a></li>
        <li><a href="http://www.youtube.com/@ranntacoin" target="_blank">YouTube</a></li>
        <li><a href="https://x.com/ranntacoin" target="_blank">X (Twitter)</a></li>
        <li><a href="https://t.me/ranntacoin2025" target="_blank">Telegram</a></li>
        <li><a href="https://discord.gg/6qgSnrSC" target="_blank">Discord</a></li>
        <li><a href="mailto:rannatacoin@gmail.com">Email</a></li>
      </ul>
    </div>
  );
}

export default Whitepaper;
