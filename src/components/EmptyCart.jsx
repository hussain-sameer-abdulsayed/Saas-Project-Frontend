import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center flex flex-col justify-center items-center h-96">
      <p className="text-4xl pb-4"> لا توجد مواد</p>

      <button
        className="border-2 rounded-md b-border w-32 h-12  hover:bg-blue-900"
        onClick={() => navigate('/')}
      >
        عد للتسوق
      </button>
    </div>
  );
};

export default EmptyCart;
