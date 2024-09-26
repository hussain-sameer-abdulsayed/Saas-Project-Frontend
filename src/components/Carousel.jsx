import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-white z-10"
    onClick={onClick}
  >
    <FaArrowRight className="text-3xl bg-blue-500 p-2 rounded-full hover:bg-blue-700" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-white z-10"
    onClick={onClick}
  >
    <FaArrowLeft className="text-3xl bg-blue-500 p-2 rounded-full hover:bg-blue-700" />
  </div>
);

const Carousel = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enables auto sliding
    autoplaySpeed: 3000, // 3000ms (3 seconds) interval between slides
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-32 bg-gray-900">
      {/* Centered, narrower width */}
      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-4">
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
