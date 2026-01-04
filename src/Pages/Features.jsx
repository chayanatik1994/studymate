import React from "react";

const Features = () => (
  <section className="py-6 md:py-8 px-4 md:px-16 w-full">
    {/* Heading*/}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
      Features
    </h2>

    {/* Features Grid */}
    <div className="grid md:grid-cols-3 gap-4 text-center">
      {[
        {
          title: "Live Chat",
          desc: "Instantly communicate with your study partners to discuss topics and share resources.",
        },
        {
          title: "Progress Tracker",
          desc: "Monitor your learning milestones and track the progress of your study sessions.",
        },
        {
          title: "Custom Matching",
          desc: "Find the perfect study partner based on your subjects, learning style, and availability.",
        },
      ].map((feature, i) => (
        <div
          key={i}
          className="bg-teal-400 text-white p-4 rounded-lg shadow hover:shadow-xl transform hover:-translate-y-1 transition-all"
        >
          <h3 className="text-lg md:text-xl font-semibold mb-1">{feature.title}</h3>
          <p className="opacity-90 text-sm md:text-base">{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
