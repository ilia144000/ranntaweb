import React from 'react';
import { useTranslation } from 'react-i18next';
import bgBird from '../assets/bg-bird.jpg';
import coin from '../assets/coin.png';
import joinFuture from '../assets/join-future.png';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div
      className="bg-cover bg-center text-center px-4 py-20 md:py-40"
      style={{ backgroundImage: `url(${bgBird})` }}
    >
      <div className="flex flex-col items-center justify-center space-y-6 bg-black bg-opacity-50 p-6 rounded-xl">
        <img src={coin} alt="RANNTA Coin" className="w-32 md:w-40 lg:w-48 mb-4" />
        <img src={joinFuture} alt="Join the Future" className="w-72 md:w-96 lg:w-[32rem]" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6">{t('home.welcome')}</h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed">
          {t('home.intro1')}<br />
          {t('home.intro2')}<br />
          {t('home.intro3')}<br />
          {t('home.intro4')}<br />
          {t('home.intro5')}<br />
          {t('home.intro6')}<br />
          {t('home.intro7')}<br />
          <strong>{t('home.slogan')}</strong>
        </p>
      </div>
    </div>
  );
};

export default Home;
