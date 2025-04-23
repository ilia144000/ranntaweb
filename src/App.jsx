// ✅ src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Whitepaper from './pages/Whitepaper';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <Router>
        <Navbar />
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;