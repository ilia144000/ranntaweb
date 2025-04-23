import { Link } from 'react-router-dom';
import logo from '../assets/coin.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Rannta Logo" className="h-10 w-10" />
          <span className="text-xl font-bold">RANNTA</span>
        </div>
        <div className="space-x-6">
          <Link to="/" className="hover:text-teal-400 transition">Home</Link>
          <Link to="/whitepaper" className="hover:text-teal-400 transition">Whitepaper</Link>
          <Link to="/contact" className="hover:text-teal-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
