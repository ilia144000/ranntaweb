import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/coin.png';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md flex flex-wrap justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Rannta Logo" className="h-10 w-auto" />
        <span className="text-xl font-bold tracking-wide">RANNTA</span>
      </div>

      <div className="flex flex-wrap items-center space-x-4">
        <Link to="/" className="hover:text-teal-400 transition">
          {t('nav.home')}
        </Link>
        <Link to="/about" className="hover:text-teal-400 transition">
          {t('nav.about')}
        </Link>
        <Link to="/whitepaper" className="hover:text-teal-400 transition">
          {t('nav.whitepaper')}
        </Link>
        <Link to="/contact" className="hover:text-teal-400 transition">
          {t('nav.contact')}
        </Link>

        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
