import React from "react";

const NewsletterCTA = () => (
  <section className="py-16 px-4 md:px-16 w-full bg-teal-400 text-white text-center rounded-lg mx-4 md:mx-16 my-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Subscribe to Our Newsletter
    </h2>
    <p className="text-lg md:text-xl mb-6 opacity-90">
      Get updates, tips, and guides directly to your inbox.
    </p>

    {/* Input + Button */}
    <div className="flex justify-center items-center">
      <input
        type="email"
        placeholder="Enter your email address"
        className="p-3 md:p-4 w-64 md:w-96 rounded-l-lg text-purple-900 placeholder-purple-700 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
      />
      <button className="px-6 py-3 md:py-4 font-semibold rounded-r-lg bg-purple-700 hover:bg-purple-800 transition">
        Subscribe
      </button>
    </div>
  </section>
);

export default NewsletterCTA;
