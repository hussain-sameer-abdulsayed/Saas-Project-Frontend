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
