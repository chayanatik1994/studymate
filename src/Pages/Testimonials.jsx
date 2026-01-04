import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [flipIndex, setFlipIndex] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/mockData.json");
        const data = await res.json();

        setTestimonials(
          data.slice(0, 9).map((p) => ({
            name: p.name,
            text: `I had a great learning experience with ${p.name}!`,
            rating: Math.floor(p.rating),
          }))
        );
      } catch (err) {
        console.error("Failed to load testimonials:", err);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (!testimonials.length) return;

    const interval = setInterval(() => {
      setFlipIndex((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials]);

  const currentTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-8 md:py-10 px-4 md:px-16 bg-white w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Testimonials By Our Students
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 perspective-[1000px]">
        {currentTestimonials.map((t, i) => (
          <div
            key={i}
            className="p-4 md:p-5 bg-gray-100 rounded-lg shadow text-center transition-transform duration-[1500ms]"
            style={{
              transform: flipIndex === i ? "rotateX(180deg)" : "rotateX(0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div style={{ backfaceVisibility: "hidden" }}>
              <FaQuoteLeft className="text-purple-700 text-2xl md:text-3xl mb-2 mx-auto" />
              <div className="flex justify-center mb-2 gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <FaStar key={j} className="text-yellow-400 text-sm md:text-base" />
                ))}
              </div>
              <p className="mb-3 text-sm md:text-base">"{t.text}"</p>
              <h4 className="font-semibold text-sm md:text-base">– {t.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
