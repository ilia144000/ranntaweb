const Whitepaper = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">RANNTA Whitepaper</h1>
      <p className="text-lg leading-relaxed mb-8">
        RANNTA is a symbolic token honoring the resilience of the United States after the tragic Los Angeles fire. The project starts as a commemorative coin and aims to evolve into a complete financial ecosystem — including a stablecoin, a blockchain network, decentralized and centralized exchanges, and a secure wallet.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Token Details</h2>
      <ul className="list-disc list-inside text-base space-y-1">
        <li><strong>Token Name:</strong> RANNTA COIN</li>
        <li><strong>Symbol:</strong> RANNTA</li>
        <li><strong>Blockchain:</strong> TON</li>
        <li><strong>Total Supply:</strong> 130,000,000,000</li>
        <li><strong>Decimals:</strong> 9</li>
        <li>
          <strong>Smart Contract:</strong>{' '}
          <a href="https://tonviewer.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            View on Tonviewer
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Whitepaper;
