import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { FaRegCircleQuestion } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';
import { GrLanguage } from 'react-icons/gr';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [t, i18n] = useTranslation();

  return (
    <>
      <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50 px-20 pt-5 pb-10 flex justify-between items-center">
        <div className="text-xl">
          <Link to="/">3D Electronics</Link>
        </div>
        <div className="flex flex-row justify-center flex-grow mx-10">
          <div className="relative w-3/5">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search For Products"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            Search
          </button>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className="cursor-pointer text-2xl">
            <Link to={'/about'}>
              <FaRegCircleQuestion />
            </Link>
          </span>
          <span className="cursor-pointer text-2xl">
            <Link to={'/contact'}>
              <MdOutlineMail />
            </Link>
          </span>
          <span className="cursor-pointer text-2xl">
            <Link to={'/cart'}>
              <FaShoppingCart />
            </Link>
          </span>
          <span className="cursor-pointer text-2xl">
            <Link to={'/cart'}>
              <GrLanguage />
            </Link>
          </span>
          <span className="cursor-pointer text-2xl">
            <Link>💲</Link>
          </span>
        </div>
      </nav>

      {/* Categories Link Section */}
      <div className="bg-gray-800 text-white text-center mt-20 pt-4 pb-4">
        <div className="flex justify-center gap-4">
          <Link
            to="/categories"
            className="text-lg font-medium hover:underline hover:text-blue-500"
          >
            الاصناف
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
