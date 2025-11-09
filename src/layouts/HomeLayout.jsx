import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 w-full px-4 md:px-8 lg:px-16 py-6">
        <Outlet />
      </main>

      <footer>
       <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
