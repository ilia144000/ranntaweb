import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('contact.alert'));
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">{t('contact.title')}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">{t('contact.name')}</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">{t('contact.email')}</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">{t('contact.message')}</label>
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded dark:bg-gray-800 dark:border-gray-700"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded transition"
        >
          {t('contact.submit')}
        </button>
      </form>
    </div>
  );
};

export default Contact;
