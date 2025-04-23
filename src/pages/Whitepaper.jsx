// ✅ src/pages/Whitepaper.jsx
const Whitepaper = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Whitepaper</h2>
      <p className="mb-4">RANNTA is a commemorative token and a symbol of a new era.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Fast transactions</li>
        <li>Low fees</li>
        <li>Secure by design</li>
        <li>Scalable infrastructure</li>
      </ul>
      <h3 className="mt-6 font-semibold">Details:</h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>Token Name: RANNTA COIN</li>
        <li>Symbol: RANNTA</li>
        <li>Blockchain: TON</li>
        <li>Total Supply: 130,000,000,000</li>
        <li>Decimals: 9</li>
        <li>Smart Contract: <a href="https://tonviewer.com" className="text-blue-500 underline">View on Tonviewer</a></li>
      </ul>
    </div>
  );
};

export default Whitepaper;
