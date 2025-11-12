import React from 'react';
import Logo from '../assets/connecting.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-purple-900 text-white pt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 px-6">

        {/* Logo & Description */}
        <div className="flex flex-col md:flex-1 gap-4">
          <div className="flex items-center gap-2">
               <img src={Logo} alt="StudyMate Logo" className="w-12 h-12 rounded-full" />
             <span className="text-xl font-bold">StudyMate</span>
          </div>
            <p className="text-sm text-gray-300">
            StudyMate is a MERN Stack platform connecting students for effective learning collaboration. 
          </p>
          < div className="flex gap-4 mt-3">
             <a href="https://facebook.com" className="hover:text-blue-600">Facebook</a>
              <a href="https://x.com" className="hover:text-blue-400">X</a>
            <a href="https://instagram.com" className="hover:text-pink-500">Instagram</a>
              <a href="https://linkedin.com" className="hover:text-blue-700">LinkedIn</a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-10 md:flex-1 justify-between">
           <nav className="flex flex-col gap-2">
            <h6 className="text-white font-semibold mb-2">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
             <a className="link link-hover">Advertisement</a>
          </nav>

          <nav className="flex flex-col gap-2">
            <h6 className="text-white font-semibold mb-2">Company</h6>
              <a className="link link-hover">About Us</a>
            <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press Kit</a>
          </nav>

          <nav className="flex flex-col gap-2">
            <h6 className="text-white font-semibold mb-2">Legal</h6>
            <a className="link link-hover">Terms of Use</a>
              <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Cookie Policy</a>
          </nav>

          <nav className="flex flex-col gap-2">
            <h6 className="text-white font-semibold mb-2">Apps</h6>
            <a className="link link-hover">Mac</a>
            <a className="link link-hover">Windows</a>
              <a className="link link-hover">iPhone</a>
            <a className="link link-hover">Android</a>
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-12 pb-6 text-sm">
        &copy; {new Date().getFullYear()} StudyMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
