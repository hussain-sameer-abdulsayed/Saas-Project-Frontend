import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount) => {
    setQuantity((prev) => (prev + amount > 0 ? prev + amount : 1));
  };
  const formatNumber = (number) => {
    return number.toLocaleString();
  };
  // Function to handle adding to cart
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      // Update the quantity of the existing product in the cart
      cart[existingProductIndex].quantity += quantity;
    } else {
      // Add a new product with only id and quantity
      cart.push({
        id: product.id,
        quantity,
        price: product.price,
        name: product.name,
      });
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7249/api/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        setError('Error fetching product details');
        console.error('Error:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-10">
      <div className="flex flex-col md:flex-row bg-gray-800 p-8 rounded-lg shadow-lg w-full md:max-w-5xl">
        {/* Product Image */}
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <img
            src={product.mainImage}
            alt={product.name}
            className="rounded-lg object-cover max-w-xs w-full"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          <div className="mb-6">
            <p className="text-sm text-gray-400">{product.description}</p>
          </div>

          <div className="text-xl font-semibold mb-6">
            {formatNumber(product.price * quantity)} IQD
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center mb-6">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="bg-gray-600 text-white px-4 py-2 rounded-l-lg"
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 text-center bg-gray-700 text-white py-2"
            />
            <button
              onClick={() => handleQuantityChange(1)}
              className="bg-gray-600 text-white px-4 py-2 rounded-r-lg"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={addToCart}
            className="w-full bg-blue-500 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

/*
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7249/api/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        setError('Error fetching product details');
        console.error('Error:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <img
            src={product.mainImage}
            alt={product.name}
            className="w-full md:w-1/2 h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
          />
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-xl text-gray-400 mb-4">{product.price}</p>
              <p className="mb-4">{product.description}</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded mt-4 md:mt-0">
              Buy Now
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Product;
*/
