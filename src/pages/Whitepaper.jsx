// src/pages/Whitepaper.jsx
const Whitepaper = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Whitepaper</h1>

      <p className="text-lg leading-relaxed mb-4 text-center">
        Rannta is a cryptocurrency project rooted in resilience, rebirth, and the values of community.
      </p>

      <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
        <li>Fast and scalable transactions</li>
        <li>Low and predictable fees</li>
        <li>Secure and transparent infrastructure</li>
        <li>Community-first development</li>
      </ul>

      <div className="mt-8 bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-sm text-gray-800 dark:text-gray-100">
        <h2 className="text-xl font-semibold mb-2">Token Details</h2>
        <p><strong>Token Name:</strong> RANNTA COIN</p>
        <p><strong>Symbol:</strong> RANNTA</p>
        <p><strong>Blockchain:</strong> TON</p>
        <p><strong>Total Supply:</strong> 130,000,000,000</p>
        <p><strong>Decimals:</strong> 9</p>
        <p><strong>Smart Contract:</strong> Coming soon</p>
      </div>
    </div>
  );
};

export default Whitepaper;
