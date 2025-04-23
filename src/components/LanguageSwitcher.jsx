const languages = [
  'English', 'Español', 'Français', 'Deutsch', 'Русский', '中文', 'فارسی', 'العربية'
];

const LanguageSwitcher = () => {
  return (
    <select className="bg-gray-100 dark:bg-gray-800 text-sm p-1 rounded">
      {languages.map(lang => (
        <option key={lang} value={lang}>{lang}</option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
