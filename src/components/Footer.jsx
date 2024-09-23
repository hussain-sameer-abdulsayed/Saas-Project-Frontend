const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section: Contact Info */}
        <div className="space-y-4">
          <h2 className="text-3xl text-white">3D Electronics</h2>
          <ul className="space-y-2">
            <li>
              3D Electronics <span className="ml-2">📘</span>
            </li>
            <li>
              3d@3d-iraq.com <span className="ml-2">📧</span>
            </li>
            <li>
              +9647700612084 <span className="ml-2">📞</span>
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
