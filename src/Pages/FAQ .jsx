import React from "react";

const FAQ = () => (
  <section className="py-2 px-4 md:px-16 w-full bg-gray-50">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
    <div className="max-w-3xl mx-auto space-y-4">
      {[
        { q: "How do I find a study partner?", a: "Sign up and use our matching system to find partners by subject and learning style." },
        { q: "Is StudyMate free?", a: "Yes, basic features are free to use. Premium options are available." },
        { q: "Can I join multiple study groups?", a: "Absolutely! You can collaborate with multiple partners and groups." },
      ].map((item, i) => (
        <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="font-semibold mb-2">{item.q}</h4>
          <p className="text-gray-600">{item.a}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FAQ;
