import React from 'react';
import axios from 'axios';
import Carousel from './Carousel';
import { useState, useEffect } from 'react';

const ProductsCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        axios
          .get('https://localhost:7249/api/products')
          .then((Response) => setProducts(Response.data));
      } catch (error) {
        console.log(
          'an error ocuured while trying to get products in carousel',
          error
        );
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="bg-gray-900">
      {products.length > 0 ? (
        <Carousel products={products} />
      ) : (
        <p className="text-white text-center">Loading products...</p>
      )}
    </div>
  );
};

export default ProductsCarousel;
