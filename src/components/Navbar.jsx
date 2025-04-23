// ✅ src/components/Navbar.jsx
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 border-b dark:border-gray-700">
      <div className="flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/whitepaper">Whitepaper</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;