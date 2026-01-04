import React from "react";
import { NavLink } from "react-router";

const FinalCTA = () => (
  <section className="py-16 px-4 md:px-16 bg-teal-500 text-white text-center rounded-lg mx-4 md:mx-16 my-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
    <p className="text-lg md:text-xl mb-6 opacity-90">
      Join thousands of students collaborating and growing together.
    </p>

    <NavLink
      to="/auth/register" 
      className="inline-block px-6 py-3 font-semibold rounded-lg shadow-lg bg-purple-500 text-white transition-colors duration-200"
    >
      Join Now
    </NavLink>
  </section>
);

export default FinalCTA;
