const Contact = () => {
  return (
    <div className="max-w-xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 border rounded dark:bg-gray-800 dark:text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 border rounded dark:bg-gray-800 dark:text-white"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="p-2 border rounded dark:bg-gray-800 dark:text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;