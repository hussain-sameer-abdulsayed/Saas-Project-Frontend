import React from 'react';

const MainSlider = () => {
  return (
    <div className="relative w-full h-96 bg-gray-800">
      <img
        src="https://via.placeholder.com/1920x400"
        alt="Main Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-4 left-8 text-white">
        <h2 className="text-4xl font-bold">Aqua Ultra Air</h2>
      </div>
    </div>
  );
};

export default MainSlider;
