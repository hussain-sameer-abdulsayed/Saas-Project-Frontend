import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 w-full py-10 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section: Contact Info */}
        <div className="space-y-4 text-center">
          <h2 className="text-xl text-white ml-5">تواصل معنا</h2>
          <ul className="space-y-2">
            <li>
              <Link
                to={'https://www.facebook.com/'}
                className="hover:text-white"
              >
                3D Electronics
                <FaFacebookSquare className="inline ml-2 text-2xl" />
              </Link>
            </li>
            <li>
              <Link
                to={'https://www.instagram.com/'}
                className="hover:text-white"
              >
                3d_electronicsiq
                <FaInstagramSquare className="inline ml-2 text-2xl" />
              </Link>
            </li>
            <li>
              <Link
                to={'https://Wa.me/+9647849678401'}
                className="hover:text-white"
              >
                +9647849678401
                <MdPhone className="inline ml-2 text-2xl" />
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
        <div className="space-y-4 text-center">
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
