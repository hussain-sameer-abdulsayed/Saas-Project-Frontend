import React from 'react';
import { Link } from 'react-router-dom';

const textDirection = {
  direction: 'rtl',
};

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-20 pt-5 pb-10 flex justify-between items-center">
      <div className="text-xl">
        {/* Wrap the text inside the Link */}
        <Link to="/">3D Electronics</Link>
      </div>
      <div className="flex flex-row flex-grow mx-10">
        <input
          className="basis-4/5 w-full px-4 py-2 rounded bg-gray-800 text-white"
          style={textDirection}
          type="text"
          placeholder="ضع اسم المنتج الذي تبحث عنه"
        />
        <button className="basis-1/5 border-white text-white mb-5 hover:text-orange-600">
          ابحث
        </button>
      </div>
      <div className="space-x-4">
        <span className="cursor-pointer">
          <Link to={'/'}>🔔</Link>
        </span>
        <span className="cursor-pointer">
          <Link to={'/cart'}>🛒</Link>
        </span>
        <span className="cursor-pointer">
          <Link>🌐</Link>
        </span>
        <span className="cursor-pointer">
          <Link>💲</Link>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
