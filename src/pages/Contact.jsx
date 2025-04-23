// src/pages/Contact.jsx
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for contacting us! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
