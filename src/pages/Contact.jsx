import React from "react";

function Contact() {
  return (
    <div className="contact-page max-w-xl mx-auto mt-12 text-center">
      <h2 className="text-4xl font-bold text-teal-400 mb-6">Contact Us</h2>
      <p className="text-gray-300 mb-6">
        For questions, suggestions, or collaborations, feel free to reach out.
      </p>

      <div className="bg-gray-800 p-6 rounded-lg shadow-md text-left text-gray-300">
        <p><strong>Email:</strong> <a href="mailto:rannatacoin@gmail.com" className="text-teal-400">rannatacoin@gmail.com</a></p>
        <p className="mt-2"><strong>Telegram:</strong> <a href="https://t.me/ranntacoin2025" target="_blank" className="text-teal-400">t.me/ranntacoin2025</a></p>
        <p className="mt-2"><strong>X (Twitter):</strong> <a href="https://x.com/ranntacoin" target="_blank" className="text-teal-400">@ranntacoin</a></p>
        <p className="mt-2"><strong>YouTube:</strong> <a href="http://www.youtube.com/@ranntacoin" target="_blank" className="text-teal-400">youtube.com/@ranntacoin</a></p>
        <p className="mt-2"><strong>Discord:</strong> <a href="https://discord.gg/6qgSnrSC" target="_blank" className="text-teal-400">discord.gg/6qgSnrSC</a></p>
      </div>
    </div>
  );
}

export default Contact;
