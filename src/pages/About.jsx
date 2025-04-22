import React from "react";

function About() {
  return (
    <div className="about-page max-w-3xl mx-auto mt-12 text-center">
      <h2 className="text-4xl font-bold text-teal-400 mb-6">About RANNTA</h2>
      <p className="text-gray-300 mb-4">
        RANNTA is a decentralized token built on the TON blockchain, inspired by the spirit of rebuilding after tragedy.
      </p>
      <p className="text-gray-400">
        The project started after the tragic Los Angeles fire — not just as a technical blockchain idea, but as a symbol of recovery, resilience, and transformation.
        <br /><br />
        RANNTA aims to lead innovation in the cryptocurrency space with:
      </p>

      <ul className="text-left list-disc text-gray-300 mt-4 ml-6">
        <li>A commemorative token launch</li>
        <li>Planned Rannta Network & stablecoin</li>
        <li>Centralized & Decentralized exchanges</li>
        <li>Rannta wallet in future phases</li>
      </ul>

      <p className="text-gray-400 mt-6 font-bold italic">
        We’re a young team — but our vision is bold.
      </p>
    </div>
  );
}

export default About;
