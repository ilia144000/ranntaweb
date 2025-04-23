// ✅ src/pages/Home.jsx
import bgBird from '../assets/bg-bird.jpg';
import coin from '../assets/coin.png';
import joinFuture from '../assets/join-future.png';

const Home = () => {
  return (
    <div
      className="bg-cover bg-center text-center px-4 py-20 md:py-40"
      style={{ backgroundImage: `url(${bgBird})` }}
    >
      <div className="flex flex-col items-center space-y-6">
        <img src={coin} alt="RANNTA Coin" className="w-24 md:w-32 lg:w-40 mb-4" />
        <img src={joinFuture} alt="Join the Future" className="w-72 md:w-96 lg:w-[32rem]" />
        <h1 className="text-3xl md:text-4xl font-bold mt-6">Welcome to RANNTA</h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg">
          A memorial for the tragic Los Angeles fire — A symbol for rebuilding and returning to the glory of the United States.
          When a large part of Los Angeles tragically burned down in an incident, we were reminded of the legend of the phoenix rising from the ashes.
          After this event, the United States will undergo major changes, and an example of this is the positive shift in the new rulers' perspective on cryptocurrency.
          In the world of business, there’s no need for excessive talk! Building the Rannta token is an experience, and we preferred that our launch be the production of a commemorative token.
          Our next goal is to create the Rannta network and develop a useful and valuable stablecoin. Ultimately, we aim to establish both a centralized and decentralized exchange.
          In the following phases, we will build and offer the Rannta wallet.
          We know our young team faces numerous challenges in this chaotic cryptocurrency market.
          <strong> We believe: each for all. all for each.</strong>
        </p>
      </div>
    </div>
  );
};

export default Home;