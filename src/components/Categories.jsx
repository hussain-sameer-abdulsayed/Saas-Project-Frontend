import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import Spinner from './Spinner';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoies = async () => {
      try {
        axios
          .get('https://localhost:7249/api/Categories')
          .then((Response) => setCategories(Response.data));
      } catch (error) {
        console.log('error while fetching categories');
      } finally {
        setLoading(false);
      }
    };
    fetchCategoies();
  }, []);

  return (
    <div className="bg-gray-900 py-32">
      {loading ? (
        <Spinner />
      ) : (
        <div className="px-20 flex flex-wrap justify-around">
          {categories.map((category) => (
            <Card key={category.id} item={category} type="category" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
