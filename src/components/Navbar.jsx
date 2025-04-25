import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
      <div className="space-x-4 font-medium text-blue-700 dark:text-blue-300">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/whitepaper">Whitepaper</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
