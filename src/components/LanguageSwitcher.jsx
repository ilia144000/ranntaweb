import { useState } from 'react';

const LanguageSwitcher = () => {
  const [lang, setLang] = useState('en');

  const handleChange = (e) => {
    const selected = e.target.value;
    setLang(selected);
    // در آینده: اینجا می‌تونه i18next.changeLanguage(selected) باشه
  };

  return (
    <select
      value={lang}
      onChange={handleChange}
      className="bg-transparent border border-gray-400 rounded px-2 py-1 text-sm dark:text-white"
    >
      <option value="en">English</option>
      <option value="fa">فارسی</option>
    </select>
  );
};

export default LanguageSwitcher;
