import React from "react";
import { FaUsers, FaLightbulb, FaCheckCircle, FaChartLine, FaBook } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">About StudyMate</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
          StudyMate is a modern platform connecting students with compatible study partners and learning resources. 
        </p>

        {/* Core Features */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <FaUsers className="text-4xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Connect</h3>
            <p className="text-gray-600">
              Find compatible study partners who match your learning style and goals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <FaLightbulb className="text-4xl text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Learn</h3>
            <p className="text-gray-600">
              Access resources, share knowledge, and gain insights to boost your learning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <FaCheckCircle className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Achieve</h3>
            <p className="text-gray-600">
              Track progress, complete goals, and celebrate your academic achievements.
            </p>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
            <FaBook className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Resources</h3>
            <p className="text-gray-600">
              Explore curated study materials and guides for faster learning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center">
            <FaChartLine className="text-4xl text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
            <p className="text-gray-600">
              Monitor your growth, set milestones, and achieve academic goals efficiently.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
          <div>
            <h3 className="text-3xl font-bold text-teal-500">500+</h3>
            <p className="text-gray-700">Active Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-500">1200+</h3>
            <p className="text-gray-700">Study Sessions</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-yellow-500">300+</h3>
            <p className="text-gray-700">Resources Shared</p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center">
          <a
            href="/auth/register"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition"
          >
            Join StudyMate Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
