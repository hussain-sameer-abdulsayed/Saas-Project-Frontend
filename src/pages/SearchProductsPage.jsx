import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import Card from '../components/Card';

const SearchProductsPage = () => {
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    const searchProducts = async () => {
      try {
        const res = await axios.get(
          `https://localhost:7249/api/Products/search?query=${query}`
        );
        setSearchResults(res.data);
      } catch (error) {
        console.log('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };
    searchProducts();
  }, []);

  return (
    <div className="py-8 bg-gray-900 pt-32 ">
      {loading ? (
        <Spinner />
      ) : (
        <div className="px-20 flex flex-wrap justify-around">
          {searchResults.map((product) => (
            <Card key={product.id} item={product} type="product" />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchProductsPage;
