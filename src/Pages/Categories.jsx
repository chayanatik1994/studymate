import React from "react";

const Categories = () => {
  const categories = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "React",
    "Node.js",
    "HTML/CSS",
    "SQL"
  ];

  return (
    <section className="py-4 md:py-6 px-4 md:px-16 bg-gray-50 w-full">
      {/* Heading close to Features */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Categories
      </h2>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-3.5">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="px-5 py-2 bg-purple-700 text-white rounded-full cursor-pointer hover:opacity-90 transition text-sm md:text-base"
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
