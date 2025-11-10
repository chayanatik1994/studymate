import React from "react";
import { FaQuoteLeft } from "react-icons/fa"; 
import { FaStar } from "react-icons/fa"; 

const Testimonials = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-white w-full">
         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Testimonials*/}
        <div className="p-6 bg-gray-100 rounded shadow text-center">
          <FaQuoteLeft className="text-purple-700 text-3xl mb-2 mx-auto" />
          <div className="flex justify-center mb-2 gap-1">
            <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
          </div>
             <p className="mb-4">"This app helped me find a perfect study partner and improve my grades!"</p>
          <h4 className="font-bold">– Aisha R.</h4>
        </div>
        <div className="p-6 bg-gray-100 rounded shadow text-center">
            <FaQuoteLeft className="text-purple-700 text-3xl mb-2 mx-auto" />
          <div className="flex justify-center mb-2 gap-1">
             <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
          </div>
          <p className="mb-4">"Collaborating with peers has never been easier."</p>
          <h4 className="font-bold">– Daniel K.</h4>
        </div>

        <div className="p-6 bg-gray-100 rounded shadow text-center">
          <FaQuoteLeft className="text-purple-700 text-3xl mb-2 mx-auto" />
           <div className="flex justify-center mb-2 gap-1">
            <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
          </div>
          <p className="mb-4">"Highly recommend for anyone looking for study partners online."</p>
           <h4 className="font-bold">– Mei Ling</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
