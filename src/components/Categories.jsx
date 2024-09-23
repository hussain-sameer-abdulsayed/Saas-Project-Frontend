import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategoies = async () => {
      try {
        axios
          .get('https://localhost:7249/api/Categories')
          .then((Response) => setCategories(Response.data));
      } catch (error) {
        console.log('error while fetching categories');
      }
    };
    fetchCategoies();
  }, []);

  return (
    <div className="py-8 bg-gray-900">
      <div className="px-20 flex flex-wrap justify-around">
        {categories.map((category) => (
          <Card key={category.id} item={category} type="category" />
        ))}
      </div>
    </div>
  );
};

export default Categories;
