import React from 'react';
import Categories from '../components/Categories';
import ProductsCarousel from '../components/ProductsCarousel';
const HomePage = () => {
  return (
    <div>
      <ProductsCarousel />
      <Categories />
    </div>
  );
};

export default HomePage;
