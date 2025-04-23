import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Whitepaper from './pages/Whitepaper';
import ContactForm from './pages/Contact';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import LanguageSwitcher from './components/LanguageSwitcher';

import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Router>
        <header className="flex justify-between items-center px-4 py-3 border-b dark:border-gray-700">
          <Navbar />
          <div className="flex items-center">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
