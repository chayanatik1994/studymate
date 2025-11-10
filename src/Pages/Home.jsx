import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import StudyPartnerCard from "../components/StudyPartnerCard";
import { topStudyPartners } from "../components/data/mockData";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      <Swiper modules={[Navigation, Pagination, Autoplay]} spaceBetween={0} slidesPerView={1} navigation pagination={{ clickable: true }} autoplay={{ delay: 4000, disableOnInteraction: false }} loop>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-[70vh] w-full bg-gradient-to-br from-purple-700 to-purple-900 text-white text-center px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 max-w-4xl">Connect with <span className="text-teal-400">Study Partners</span></h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl opacity-90">Find people who match your learning style and achieve your academic goals together.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-2 font-semibold rounded-lg shadow-lg bg-teal-400 text-purple-900 hover:bg-teal-500 transition">Get Started</button>
              <button className="px-6 py-2 font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-purple-900 transition">Browse Courses</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-[70vh] w-full bg-gradient-to-br from-teal-500 to-teal-700 text-white text-center px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 max-w-4xl">Advance Your <span className="text-purple-200">Skills</span></h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl opacity-90">Learn from the best mentors and collaborate with like-minded peers.</p>
            <button className="px-6 py-2 font-semibold rounded-lg shadow-lg bg-purple-700 text-white hover:bg-purple-800 transition">Browse Courses</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-[70vh] w-full bg-gradient-to-br from-purple-900 to-purple-800 text-white text-center px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 max-w-4xl">Achieve Your <span className="text-teal-400">Goals</span></h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl opacity-90">Track your progress, set milestones, and grow together with your study partners.</p>
            <button className="px-6 py-2 font-semibold rounded-lg shadow-lg bg-teal-400 text-purple-900 hover:bg-teal-500 transition">Join Now</button>
          </div>
        </SwiperSlide>
      </Swiper>

      <section className="py-16 px-4 md:px-16 bg-gray-50 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Top Study Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {topStudyPartners.map((partner) => <StudyPartnerCard key={partner.id} partner={partner} />)}
        </div>
      </section>
    </div>
  );
};

export default Home;