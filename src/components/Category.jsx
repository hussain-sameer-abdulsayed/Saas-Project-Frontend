import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';
import Spinner from './Spinner';
import { toast } from 'react-toastify';

const Category = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const res = await axios.get(
          `https://localhost:7249/api/products/category/${id}`
        );
        setProducts(res.data); // FIXED HERE
      } catch (error) {
        console.log('error while trying to get category products', error);
        toast.error('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, []);
  return (
    <div className="py-8 bg-gray-900 pt-32 ">
      {loading ? (
        <Spinner />
      ) : (
        <div className="px-20 flex flex-wrap justify-around">
          {products.map((product) => (
            <Card key={product.id} item={product} type="product" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
