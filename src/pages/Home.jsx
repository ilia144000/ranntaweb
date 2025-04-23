// src/pages/Home.jsx
import bgBird from '../assets/bg-bird.jpg';
import coin from '../assets/coin.png';
import joinFuture from '../assets/join-future.png';

const Home = () => {
  return (
    <div
      className="bg-cover bg-center text-center px-4 py-20 md:py-36"
      style={{ backgroundImage: `url(${bgBird})` }}
    >
      <div className="flex flex-col items-center justify-center space-y-6">
        <img src={coin} alt="RANNTA Coin" className="w-24 md:w-32 lg:w-40 mb-2" />
        <img src={joinFuture} alt="Join the Future" className="w-72 md:w-96 lg:w-[32rem]" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">Welcome to RANNTA</h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed text-gray-900 dark:text-gray-200">
          A memorial for the tragic Los Angeles fire — A symbol for rebuilding and returning to the glory of the United States.
          <br />
          When a large part of Los Angeles tragically burned down, we were reminded of the legend of the phoenix rising from the ashes.
          <br />
          The United States will undergo major changes, with a shift in perspective on cryptocurrency by the new rulers.
          <br />
          Building the Rannta token began with a commemorative symbol, leading to a network, stablecoin, and decentralized exchange.
          <br />
          The Rannta wallet will follow, serving users in both centralized and decentralized finance.
          <br />
          <strong>We believe: each for all. all for each.</strong>
        </p>
      </div>
    </div>
  );
};

export default Home;
