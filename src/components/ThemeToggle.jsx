import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 text-xl hover:scale-110 transition"
      aria-label="Toggle Dark Mode"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
