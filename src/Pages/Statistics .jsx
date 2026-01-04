import React from "react";

const Statistics = () => (
  <section className="py-8 md:py-10 px-4 md:px-16 w-full bg-gray-50 text-center">
    {/* Heading close to HighlightSection */}
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Our Impact
    </h2>

    {/* Stats Grid */}
    <div className="grid md:grid-cols-3 gap-5 md:gap-6">
      {[
        { number: "500+", label: "Active Users" },
        { number: "1200+", label: "Study Sessions" },
        { number: "300+", label: "Courses Available" },
      ].map((stat, i) => (
        <div key={i} className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
          <div className="text-3xl md:text-4xl font-bold text-purple-700 mb-1 md:mb-2">
            {stat.number}
          </div>
          <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Statistics;
