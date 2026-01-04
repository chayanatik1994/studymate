import React from "react";
import Hero from "../Pages/Hero"; 
import Features from "../Pages/Features";
import Categories from "../Pages/Categories";
import HighlightSection from "../Pages/HighlightSection";
import Statistics from "../Pages/Statistics ";
import Testimonials from "../Pages/Testimonials";
import BlogPreview from "../Pages/BlogPreview";
import NewsletterCTA from "../Pages/NewsletterCTA";
import FAQ from "../Pages/FAQ ";
import FinalCTA from "../Pages/FinalCTA";
import HowItWorks from "./HowItWorks";

const Home = () => (
  <div className="w-full overflow-hidden">
    <Hero />
    <HowItWorks/>
    <Features />
    <Categories />
    <HighlightSection />
    <Statistics />
    <Testimonials />
    <BlogPreview />
    <NewsletterCTA />
    <FAQ />
    <FinalCTA />
  </div>
);

export default Home;
