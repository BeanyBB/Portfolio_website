import React from 'react';
import BlackHoleButton from './BlackHoleButton';

const Contact = () => {
  return (
    <section className="py-16 px-8 bg-[#001B3F]">
      <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
      <form className="max-w-3xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 bg-[#002B5B] rounded-lg shadow-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 bg-[#002B5B] rounded-lg shadow-md"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-4 bg-[#002B5B] rounded-lg shadow-md"
        ></textarea>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-green-400 to-blue-600 text-white rounded-lg shadow-md hover:opacity-90 transition"
        >
          Send Message
        </button>
        <BlackHoleButton/>
      </form>
    </section>
  );
};

export default Contact;