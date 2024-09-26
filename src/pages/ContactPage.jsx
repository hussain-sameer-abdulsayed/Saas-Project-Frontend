import React, { useState } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
    alert('Message Sent!');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      mobile: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white pt-32">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-32">
        {/* Google Maps Section */}
        <section className="mb-10 w-full md:w-3/6 pt-8">
          <div className="flex items-center justify-between mb-10">
            <Link className="flex flex-col items-center">
              <FaFacebookSquare className="text-2xl" />
              <h6 className="text-xs">3D Electronics</h6>
            </Link>

            <Link className="flex flex-col items-center">
              <MdOutlineMail className="text-2xl" />
              <h6 className="text-xs">3d@3d-iraq.com</h6>
            </Link>

            <div className="flex flex-col items-center">
              <MdPhone className="text-2xl" />
              <h6 className="text-xs">+9647849678401</h6>
            </div>

            <div className="flex flex-col items-center">
              <FaLocationDot className="text-2xl" />
              <h6 className="text-xs">شارع الصناعة</h6>
            </div>
          </div>
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d350.4909690689351!2d44.44875695639767!3d33.30702370665004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15578159577aad4b%3A0x94ec1623c6cde080!2sMakers%20of%20Baghdad!5e0!3m2!1sen!2siq!4v1727195994728!5m2!1sen!2siq"
              width="700"
              height="700"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg border border-gray-300"
              title="Google Maps Location"
            ></iframe>
          </div>
        </section>

        {/* Form Section */}
        <div className="w-full md:w-3/6 bg-gray-800 p-8 rounded-lg text-right">
          <h1>اتصل بنا</h1>
          <h2 className="mb-6">أتصل بنا للاستشارة او لطلب المساعدة</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2">
                الاسم الثلاثي
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-gray-900 text-white"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2">
                الايميل
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-gray-900 text-white"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="mobile" className="block mb-2">
                الموبايل
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-gray-900 text-white"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block mb-2">
                اكتب رسالتك هنا
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 h-80 rounded bg-gray-900 text-white"
                required
              ></textarea>
            </div>

            <button
              onClick={'sendRequest'} // here change this
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-bold"
            >
              إرسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
