import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { AnimatePresence } from 'framer-motion';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-rajdhani">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;