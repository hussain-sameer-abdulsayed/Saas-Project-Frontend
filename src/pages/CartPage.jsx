import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);

    const fetchProducts = async () => {
      const productRequests = cart.map((item) =>
        axios.get(`https://localhost:7249/api/products/${item.id}`)
      );
      const productResponses = await Promise.all(productRequests);
      const productsWithQuantity = productResponses.map((response, index) => ({
        ...response.data,
        quantity: cart[index].quantity,
      }));
      setProducts(productsWithQuantity);
    };

    if (cart.length > 0) {
      fetchProducts();
    }
  }, []);

  useEffect(() => {
    const calculateTotal = () => {
      const total = products.reduce((sum, product) => {
        return sum + product.price * product.quantity;
      }, 0);
      setTotalAmount(total);
    };

    if (products.length > 0) {
      calculateTotal();
    }
  }, [products]);

  const formatNumber = (number) => {
    return number.toLocaleString();
  };

  const handleQuantityChange = (id, amount) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + amount > 0 ? item.quantity + amount : 1,
          }
        : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));

    const updatedProducts = products.map((product) =>
      product.id === id
        ? {
            ...product,
            quantity:
              product.quantity + amount > 0 ? product.quantity + amount : 1,
          }
        : product
    );
    setProducts(updatedProducts);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    setProducts(products.filter((product) => product.id !== id));
  };

  if (cartItems.length === 0) {
    return <p className="text-right">السلة فارغة</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">
      <h2 className="text-3xl font-bold text-right">السلة</h2>
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex justify-between">
          {/* Back Button */}
          <div className="text-right mb-6">
            <button
              onClick={() => navigate(-1)} // Navigate back to the last page
              className="bg-zinc-500 hover:bg-zinc-600 text-white py-3 px-6 rounded-lg font-bold"
            >
              العودة
            </button>
          </div>
          {/* Make Order Button */}
          <div className="text-right">
            <Link to="/order">
              <button className="bg-blue-500 hover:bg-blue-800 text-white py-3 px-6 rounded-lg font-bold">
                اشتري
              </button>
            </Link>
          </div>
        </div>

        {/* Total Amount */}
        <div className="text-right text-2xl font-bold mt-6 mb-5">
          {formatNumber(totalAmount)} IQD السعر الكلي
        </div>
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between bg-gray-800 p-6 mb-4 rounded-lg"
          >
            <div className="flex items-center h-40">
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded mr-5"
                />
              </Link>

              <div>
                <Link to={`/products/${product.id}`}>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-gray-400">
                    {formatNumber(product.price)} IQD للقطعة
                  </p>
                </Link>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center justify-center">
              <button
                onClick={() => handleQuantityChange(product.id, -1)}
                className="bg-gray-600 text-white px-4 py-2 rounded-l-lg"
              >
                -
              </button>
              <input
                type="text"
                value={product.quantity}
                readOnly
                className="w-12 text-center bg-gray-700 text-white py-2"
              />
              <button
                onClick={() => handleQuantityChange(product.id, 1)}
                className="bg-gray-600 text-white px-4 py-2 rounded-r-lg"
              >
                +
              </button>
            </div>

            <div className="flex flex-col">
              {/* Price Section */}
              <div className="text-right mb-2">
                <p className="text-xl font-semibold">
                  {formatNumber(product.price * product.quantity)} IQD
                </p>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              >
                امسح من السلة
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
