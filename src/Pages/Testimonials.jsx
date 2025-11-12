import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { topStudyPartners } from "../components/data/mockData";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [flipIndex, setFlipIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
        setTestimonials(
        topStudyPartners.slice(0, 9).map((p) => ({
          name: p.name,
            text: `I had a great learning experience with ${p.name}!`,
          rating: Math.floor(p.rating),
        }))
      );
    }, 500);
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
    <section className="py-16 px-4 md:px-16 bg-white w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Testimonials By Our Students
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-[1000px]">
        {currentTestimonials.map((t, i) => (
          <div
            key={i}
              className="p-6 bg-gray-100 rounded shadow text-center transition-transform duration-[1500ms]"
            style={{
              transform: flipIndex === i ? "rotateX(180deg)" : "rotateX(0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div style={{ backfaceVisibility: "hidden" }}>
              <FaQuoteLeft className="text-purple-700 text-3xl mb-2 mx-auto" />
               <div className="flex justify-center mb-2 gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <FaStar key={j} className="text-yellow-400" />
                ))}
              </div>
                <p className="mb-4">"{t.text}"</p>
              <h4 className="font-bold">– {t.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
