import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // User information state
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [region, setRegion] = useState('');
  const [nearestLandmark, setNearestLandmark] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [notes, setNotes] = useState('');
  const [state, setState] = useState(''); // New state for dropdown selection

  // List of 18 states (replace with your enum or API call)
  const states = [
    'بغداد',
    'البصرة',
    'نينوى',
    'اربيل',
    'كركوك',
    'السليمانية',
    'دهوك',
    'الانبار',
    'بابل',
    'النجف',
    'كربلاء',
    'ميسان',
    'ديالى',
    'واسط',
    'صلاح الدين',
    'المثنى',
    'ذي قار',
    'الديوانية',
  ];

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
    calculateTotalAmount(cart);
  }, []);

  // Function to calculate the total amount
  const calculateTotalAmount = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
  };

  // Handle form submission (submit the order to API)
  const handleSubmit = async () => {
    // Check if the cart is empty
    if (cartItems.length === 0) {
      alert(
        'Your cart is empty! Please add items to your cart before placing an order.'
      );
      return; // Prevent submission
    }
    const orderData = {
      userName: name,
      email,
      phoneNumber,
      city: region,
      nearestPoint: nearestLandmark,
      notes,
      state, // Use the state selected by the user
      orderItems: cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      })),
    };

    try {
      const response = await axios.post(
        'https://localhost:7249/api/Orders',
        orderData
      ); // Update the URL if needed
      console.log('Order Submitted:', response.data);
      alert('Order submitted successfully!');

      // Clear the cart from local storage
      localStorage.removeItem('cart'); // or localStorage.clear() to clear everything
      setCartItems([]); // Reset cart in state as well

      // Clear the form inputs by resetting the state variables
      setName('');
      setCompanyName('');
      setRegion('');
      setNearestLandmark('');
      setEmail('');
      setPhoneNumber('');
      setNotes('');
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('There was an error submitting your order. Please try again.');
    }
  };

  // Format number with commas for display
  const formatNumber = (number) => {
    return number.toLocaleString();
  };

  return (
    <div className="container mx-auto bg-gray-800 p-10 flex justify-between">
      {/* Left: Order Form */}
      <div className="w-1/2 bg-gray-800 p-8 rounded-lg text-white">
        <h2 className="text-2xl mb-4 text-right">معلومات الزبون</h2>

        {/* State Dropdown */}
        <div className="mb-4 flex flex-col items-center">
          <label className="block mb-2">
            المحافظة <b style={{ color: 'red' }}>*</b>
          </label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white text-right"
            required
          >
            <option value="" disabled>
              اختر المحافظة
            </option>
            {states.map((stateName) => (
              <option key={stateName} value={stateName}>
                {stateName}
              </option>
            ))}
          </select>
        </div>
        {/* Form fields */}
        <div className="mb-4 flex flex-col items-center">
          <label className="block mb-2">
            الأسم <b style={{ color: 'red' }}>*</b>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white text-right"
            required
          />
        </div>

        <div className="mb-4 flex flex-col items-center">
          <label className="block mb-2">اسم الشركة</label>
          <input
            type="text"
            value={companyName}
            placeholder="اذا كنت صاحب شركة"
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white text-right"
          />
        </div>

        <div className="mb-4 flex flex-col items-center">
          <label className="block mb-2">
            اسم المنطقة <b style={{ color: 'red' }}>*</b>
          </label>
          <input
            type="text"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white text-right"
            required
          />
        </div>

        <div className="mb-4 flex flex-col items-center">
          <label className="block mb-2">أقرب منطقة دالة</label>
          <input
            type="text"
            value={nearestLandmark}
            onChange={(e) => setNearestLandmark(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white text-right"
          />
        </div>

        <div className="mb-4 flex flex-col items-center">
          <label className="block mb-2">الإيميل</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white text-right"
          />
        </div>

        <div className="mb-4 flex flex-col items-center">
          <label className="block mb-2">
            رقم الهاتف <b style={{ color: 'red' }}>*</b>
          </label>
          <input
            type="tel"
            value={phoneNumber}
            placeholder="07xxxxxxxxx"
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white text-right"
            required
          />
        </div>

        <div className="mb-4 flex flex-col items-center">
          <label className="block mb-2">ملاحظات</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white text-right"
            rows="3"
          ></textarea>
        </div>
      </div>

      {/* Right: Order Summary */}
      <div className="w-1/2 bg-gray-900 p-8 rounded-lg text-white">
        <h2 className="text-2xl mb-4 text-center">البضاعة المطلوبة</h2>

        {cartItems.length === 0 ? (
          <p>لا توجد بضاعة في العربة.</p>
        ) : (
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="border-2 px-2 py-3 border-gray-500">المنتج</th>
                <th className="border-2 px-2 py-3 border-gray-500">العدد</th>
                <th className="border-2 px-2 py-3 border-gray-500">السعر</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-700">
                  <td className="border-2 px-2 py-3 border-gray-500">
                    {item.name}
                  </td>
                  <td className="border-2 px-2 py-3 border-gray-500">
                    {item.quantity}
                  </td>
                  <td className="border-2 px-2 py-3 border-gray-500">
                    {formatNumber(item.price * item.quantity)} IQD
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="px-2 py-3 font-bold">
                  المجموع: {formatNumber(totalAmount)} IQD
                </td>
              </tr>
            </tfoot>
          </table>
        )}

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-green-600 p-4 rounded-lg text-xl font-bold text-white"
        >
          اطلب البضاعة
        </button>
      </div>
    </div>
  );
};

export default OrderPage;

/*
import React, { useState, useEffect } from 'react';
import axioss from 'axios';

const OrderPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // User information state
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [region, setRegion] = useState('');
  const [nearestLandmark, setNearestLandmark] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [notes, setNotes] = useState('');

  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    setCartItems(cart);
    calculateTotalAmount(cart);
  }, []);

  // Function to calculate the total amount
  const calculateTotalAmount = (items) => {
    const total = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalAmount(total);
  };

  // Handle form submission (e.g., submit to API or process the order)
  const handleSubmit = () => {
    const orderData = {
      customerInfo: {
        name,
        companyName,
        region,
        nearestLandmark,
        email,
        phoneNumber,
        notes,
      },
      cartItems,
      totalAmount,
    };

    console.log('Order Submitted:', orderData);
    alert('Order submitted successfully!');
  };

  // Format number with commas for display
  const formatNumber = (number) => {
    return number.toLocaleString();
  };

  console.log('cartItems');
  console.log(cartItems);
  console.log('total');
  console.log(totalAmount);

  return (
    <div className="container mx-auto p-10 flex justify-between">
      
      <div className="w-1/2 bg-gray-800 p-8 rounded-lg text-white">
        <h2 className="text-2xl mb-4 text-right">معلومات الزبون</h2>

        
        <div className="mb-4 flex flex-col items-center">
          <label className="block mb-2">
            الأسم <b style={{ color: 'red' }}>*</b>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white text-right"
            required
          />
        </div>

        <div className="mb-4 flex flex-col items-center">
          <label className="block mb-2">اسم الشركة</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white text-right"
          />
        </div>

        <div className="mb-4 flex flex-col items-center">
          <label className="block mb-2">
            اسم المنطقة <b style={{ color: 'red' }}>*</b>
          </label>
          <input
            type="text"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white text-right"
            required
          />
        </div>

        <div className="mb-4 flex flex-col items-center">
          <label className="block mb-2">أقرب منطقة دالة</label>
          <input
            type="text"
            value={nearestLandmark}
            onChange={(e) => setNearestLandmark(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white text-right"
          />
        </div>

        <div className="mb-4 flex flex-col items-center">
          <label className="block mb-2">الإيميل</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white text-right"
          />
        </div>

        <div className="mb-4 flex flex-col items-center">
          <label className="block mb-2">
            رقم الهاتف <b style={{ color: 'red' }}>*</b>
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white text-right"
            required
          />
        </div>

        <div className="mb-4 flex flex-col items-center">
          <label className="block mb-2">ملاحظات</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white text-right"
            rows="3"
          ></textarea>
        </div>
      </div>

     
      <div className="w-1/2 bg-gray-900 p-8 rounded-lg text-white">
        <h2 className="text-2xl mb-4 text-center">البضاعة المطلوبة</h2>

        {cartItems.length === 0 ? (
          <p>لا توجد بضاعة في العربة.</p>
        ) : (
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="border-2 px-2 py-3 border-gray-500">المنتج</th>
                <th className="border-2 px-2 py-3 border-gray-500">العدد</th>
                <th className="border-2 px-2 py-3 border-gray-500">السعر</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-700">
                  <td className="border-2 px-2 py-3 border-gray-500">
                    {item.name}
                  </td>
                  <td className="border-2 px-2 py-3 border-gray-500">
                    {item.quantity}
                  </td>
                  <td className="border-2 px-2 py-3 border-gray-500">
                    {formatNumber(item.price)} IQD
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-gray-700">
                <td className="border-l-2  px-2 py-3 border-gray-500"></td>
                <td></td>
                <td className="border-2 px-2 py-3 border-gray-500">
                  سعر الشحن
                </td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="border-2 border-r-0 px-2 py-3 border-gray-500 text-right font-bold">
                  {formatNumber(totalAmount)} IQD
                </td>
                <td className="border-b-2 px-2 py-3 border-gray-500"></td>
                <td className="border-2 px-2 py-3 border-gray-500">
                  السعر الإجمالي
                </td>
              </tr>
            </tfoot>
          </table>
        )}
        <div className="mt-20 text-center">
          <p>الدفع عند الاستلام</p>
          <div>
            <p className="p-1">سوف نقوم بجلب البضاعة اليك</p>
            <p className="p-1">
              ان كنت ترغب بحجز البضاعة والقدوم لأستلامها في المحل هذا جائز ايضاً
            </p>
            <p className="p-1">
              الرجاء استخدام رقم تلفونك اذا كان عندك اي سؤال على البضاعة
            </p>
            <p className="p-1">
              يمكنك ايضا ان تتبع الطلبية عبر ادخال رقم التلفون في هذه الصفحة
              <a href="/follow-order">
                <br />
                <div className="mt-3 text-white text-xl">اضغط هنا </div>
              </a>
            </p>
            <p className="p-1">
              سوف نرسل لك ايميل يحتوي علي قائمة المشتريات وعلى رقم الوصل حال
              طلبك للبضاعة
            </p>
          </div>
        </div>
        <div className="text-center pt-20">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-800 text-white py-3 px-6 rounded-lg font-bold"
          >
            أطلب البضاعة
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
*/
