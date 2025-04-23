// ✅ src/pages/Contact.jsx
const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" rows="5" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
