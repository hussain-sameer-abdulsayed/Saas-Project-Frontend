import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Navbar />

      {/* Main content will expand to fill the available space */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <ToastContainer />
      <Footer />
    </div>
  );
};

export default MainLayout;

/*
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <div className="bg-gray-800 min-h-screen">
      <Navbar />
      <Outlet />
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default MainLayout;
*/
