import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Function to handle adding to cart
const addToCart = (item) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product already exists in the cart
  const existingProductIndex = cart.findIndex(
    (cartItem) => cartItem.id === item.id
  );

  if (existingProductIndex >= 0) {
    // Update the quantity of the existing product in the cart
    cart[existingProductIndex].quantity += 1; // Assuming default quantity 1
  } else {
    // Add a new product with only id and quantity
    cart.push({
      id: item.id,
      quantity: 1, // Default to 1 when adding for the first time,
      price: item.price,
      name: item.name,
    });
  }

  // Save the updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Product added to cart!');
};
const formatNumber = (number) => {
  return number.toLocaleString();
};

const Card = ({ item, type }) => {
  const isCategory = type === 'category';

  // Use ternary operator to conditionally set the URL
  const url = isCategory ? `/categories/${item.id}` : `/products/${item.id}`;

  return (
    <div key={item.id} className="w-60 text-center m-4">
      <Link to={url}>
        <img
          src={item.mainImage}
          alt={item.name}
          className="w-full h-40 object-cover rounded"
        />
        <p className="mt-4 text-white">{item.name}</p>
      </Link>

      {/* Display additional info for product */}
      {!isCategory && (
        <div>
          <p className="text-gray-300">{formatNumber(item.price)} IQD</p>
          <button
            onClick={() => addToCart(item)} // Pass the item object to the addToCart function
            className="mt-2 p-2 bg-blue-500 text-white rounded"
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;

/*
import React from 'react';
import { useState } from 'react';

const Category = ({ category }) => {
  return (
    <div key={category.id} className="w-40 text-center m-4">
      <img
        src={category.mainImage}
        alt={category.name}
        className="w-full h-40 object-cover rounded"
      />
      <p className="mt-4 text-white">{category.name}</p>
    </div>
  );
};

export default Category;
*/
