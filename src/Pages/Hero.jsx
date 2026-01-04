import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  const slides = [
    {
      title: "Connect with Study Partners",
      highlight: "Study Partners",
      description: "Find people who match your learning style and achieve your academic goals together.",
      primaryButton: "Get Started",
      secondaryButton: "Browse Courses",
      gradient: "from-purple-700 to-purple-900",
      primaryColor: "bg-teal-400 text-purple-900",
      secondaryColor: "border-white text-white",
    },
    {
      title: "Advance Your Skills",
      highlight: "Skills",
      description: "Learn from the best mentors and collaborate with like-minded peers.",
      primaryButton: "Browse Courses",
      gradient: "from-teal-500 to-teal-700",
      primaryColor: "bg-purple-700 text-white",
    },
    {
      title: "Achieve Your Goals",
      highlight: "Goals",
      description: "Track your progress, set milestones, and grow together with your study partners.",
      primaryButton: "Join Now",
      gradient: "from-purple-900 to-purple-800",
      primaryColor: "bg-teal-400 text-purple-900",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`flex flex-col items-center justify-center h-[60vh] md:h-[70vh] w-full bg-gradient-to-br ${slide.gradient} text-white text-center px-4 relative`}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 max-w-4xl animate-fadeIn">
                {slide.title.replace(slide.highlight, "")}{" "}
                <span className="text-teal-400">{slide.highlight}</span>
              </h1>
              <p className="text-lg md:text-xl mb-6 max-w-2xl opacity-90 animate-fadeIn delay-200">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn delay-400">
                <button
                  className={`px-6 py-2 font-semibold rounded-lg shadow-lg ${slide.primaryColor} hover:opacity-90 transition`}
                >
                  {slide.primaryButton}
                </button>
                {slide.secondaryButton && (
                  <button
                    className={`px-6 py-2 font-semibold rounded-lg border-2 ${slide.secondaryColor} hover:bg-white hover:text-purple-900 transition`}
                  >
                    {slide.secondaryButton}
                  </button>
                )}
              </div>
              <div className="absolute bottom-4 animate-bounce cursor-pointer">
                <FaChevronDown size={28} className="text-white opacity-80 hover:text-teal-400 transition" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
