import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen gap-1">
      <Header />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomeLayout;
