import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaConnectdevelop } from "react-icons/fa";
import { SiSololearn } from "react-icons/si";

const HowItWorks = () => {
  const steps = [
    {
      icon: <CiSearch />,
      title: "Search Partners",
      desc: "Find study partners that match your subject and learning style.",
      color: "from-purple-500 to-teal-500",
    },
    {
      icon: <FaConnectdevelop />,
      title: "Connect & Chat",
      desc: "Send requests and communicate with your selected study partners.",
      color: "from-teal-400 to-purple-400",
    },
    {
      icon: <SiSololearn />,
      title: "Learn Together",
      desc: "Collaborate, track progress, and achieve your academic goals together.",
      color: "from-purple-400 to-teal-400",
    },
  ];

  return (
    <section className="py-8 md:py-10 md:px-16 bg-gray-50 w-full">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-gray-800">
        How It Works
      </h2>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center p-4 md:p-5 bg-white rounded-2xl shadow hover:shadow-xl transform hover:-translate-y-1 transition-all cursor-pointer"
          >
            {/* Icon */}
            <div
              className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-3 md:mb-4 rounded-full text-white text-3xl md:text-4xl bg-gradient-to-tr ${step.color} transition-transform duration-300 hover:scale-110`}
            >
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold mb-1 md:mb-2 text-gray-800">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
