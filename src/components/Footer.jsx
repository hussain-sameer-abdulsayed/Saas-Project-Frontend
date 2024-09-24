import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section: Contact Info */}
        <div className="space-y-4">
          <h2 className="text-3xl text-white">3D Electronics</h2>
          <ul className="space-y-2">
            <li className="hover:bg-sky-700">
              <Link to={'https://www.facebook.com/'}>
                3D Electronics
                <FaFacebookSquare className="inline ml-2 text-2xl" />
              </Link>
            </li>
            <li>
              <Link to={'https://www.instagram.com/'}>
                3d_electronicsiq
                <FaInstagramSquare className="inline ml-2 text-2xl" />
              </Link>
            </li>
            <li>
              <Link to={'https://Wa.me/+9647849678401'}>
                +9647849678401
                <FaSquareWhatsapp className="inline ml-2 text-2xl" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Center Section: Links */}
        <div className="space-y-4 text-center">
          <h3 className="text-xl text-white">روابط</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white">
                الصفحة الرئيسية
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                إتصل بنا
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                من نحن؟
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Company Info */}
        <div className="space-y-4 text-right">
          <h3 className="text-xl text-white">3D Electronics</h3>
          <p>
            شركة مختصة بتجارة الإلكترونيات (الحاسبات واكسسواراتها، جميع ملحقات
            الحاسوب والأجهزة اللوحية والموبايلات وغيرها).
          </p>
          <p>
            شعارنا (جودة، سرعة) نسعى الى تقديم المنتجات ذات المعايير العالمية
            والخدمات السلسة عالية التقييم.
          </p>
          <p>
            عنواننا: شارع الصناعة - مقابل الجامعة التكنولوجية - مجمع النعمان.
          </p>
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="text-sm text-gray-400">3D Electronics © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
