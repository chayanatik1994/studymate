import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaConnectdevelop } from "react-icons/fa";
import { SiSololearn } from "react-icons/si";

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-gray-100 w-full">
         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center p-6 bg-white rounded shadow">
          <CiSearch className="mb-4 w-16 h-16 text-purple-700" />
             <h3 className="text-xl font-bold mb-2">Search Partners</h3>
          <p>Find study partners that match your subject and learning style.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded shadow">
          <FaConnectdevelop className="mb-4 w-16 h-16 text-purple-700" />
             <h3 className="text-xl font-bold mb-2">Connect & Chat</h3>
          <p>Send requests and communicate with your selected study partners.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-white rounded shadow">
             <SiSololearn className="mb-4 w-16 h-16 text-purple-700" />
          <h3 className="text-xl font-bold mb-2">Learn Together</h3>
             <p>Collaborate, track progress, and achieve your academic goals together.</p>
        </div>
        </div>
    </section>
  );
};

export default HowItWorks;
