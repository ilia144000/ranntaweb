// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="flex gap-6 text-sm md:text-base font-medium">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/whitepaper">Whitepaper</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="flex gap-4 items-center">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
