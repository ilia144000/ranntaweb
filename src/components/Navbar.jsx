import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image.png";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Rannta Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold tracking-wide">RANNTA</span>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to="/" className="hover:text-teal-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-teal-400 transition">
            About
          </Link>
          <Link to="/whitepaper" className="hover:text-teal-400 transition">
            Whitepaper
          </Link>
          <Link to="/contact" className="hover:text-teal-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
