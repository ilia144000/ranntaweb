import React from 'react';
import { useTranslation } from 'react-i18next';

const Whitepaper = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">{t('whitepaper.title')}</h2>
      <div className="space-y-4 text-lg leading-relaxed">
        <p>{t('whitepaper.intro')}</p>
        <ul className="list-disc pl-6">
          <li>{t('whitepaper.features.fast')}</li>
          <li>{t('whitepaper.features.fees')}</li>
          <li>{t('whitepaper.features.secure')}</li>
          <li>{t('whitepaper.features.scalable')}</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6">{t('whitepaper.details.title')}</h3>
        <ul className="list-disc pl-6">
          <li>Token Name: <strong>RANNTA COIN</strong></li>
          <li>Symbol: <strong>RANNTA</strong></li>
          <li>Blockchain: <strong>TON</strong></li>
          <li>Total Supply: <strong>130,000,000,000</strong></li>
          <li>Decimals: <strong>9</strong></li>
          <li>Smart Contract: <a className="text-blue-500 underline" href="https://tonviewer.com/EQBCY5Yj9G6VAQibTe6hz53j8vBNO234n0fzHUP3lUBBYbeR" target="_blank" rel="noreferrer">View on Tonviewer</a></li>
        </ul>
        <p className="mt-6 font-bold text-center">{t('whitepaper.slogan')}</p>
      </div>
    </div>
  );
};

export default Whitepaper;
