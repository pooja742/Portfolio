import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-10 pb-16 px-[7vw] md:px-[10vw] lg:px-[15vw] font-sans min-h-[90vh] flex items-center justify-center"
    >
      {/* Form Card Centered */}
      <div className="w-full max-w-xl bg-pink-50 border border-pink-200 rounded-2xl p-6 shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-[#c2185b] text-center">
          CONTACT
        </h2>
        <div className="w-24 h-1 bg-[#c2185b] mx-auto mt-2 mb-6" />
        <p className="text-center text-gray-600 mb-6">
          Always happy to connect — drop a message anytime! 🌸
        </p>

        <form className="flex flex-col space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-white text-[#c2185b] border border-[#c2185b] font-semibold focus:outline-none focus:ring-2 focus:ring-[#ec4899]"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-white text-[#c2185b] border border-[#c2185b] font-semibold focus:outline-none focus:ring-2 focus:ring-[#ec4899]"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3 rounded-md bg-white text-[#c2185b] border border-[#c2185b] font-semibold focus:outline-none focus:ring-2 focus:ring-[#ec4899]"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            className="w-full p-3 rounded-md bg-white text-[#c2185b] border border-[#c2185b] font-semibold focus:outline-none focus:ring-2 focus:ring-[#ec4899]"
            required
          />
          <button
            type="button"
            className="mt-2 inline-block text-white py-2 px-6 rounded-full text-base font-semibold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #ec4899, #fbcfe8)',
              boxShadow: '0 0 4px #ec4899, 0 0 8px #f9a8d4, 0 0 20px #f9a8d4',
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
