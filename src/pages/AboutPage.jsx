import React from 'react';
import { Link } from 'react-router-dom';
import video from '../assets/videos/video.mp4';

const partners = [
  {
    id: '1',
    name: 'HUAWEI',
    image: 'https://via.placeholder.com/150',
    alt: 'Brand 1',
  },
  {
    id: '2',
    name: 'DEEPCOOL',
    image: 'https://via.placeholder.com/150',
    alt: 'Brand 2',
  },
  {
    id: '3',
    name: 'INTEL',
    image: 'https://via.placeholder.com/150',
    alt: 'Brand 3',
  },
  {
    id: '4',
    name: 'PALIT',
    image: 'https://via.placeholder.com/150',
    alt: 'Brand 4',
  },
  {
    id: '5',
    name: 'MSI',
    image: 'https://via.placeholder.com/150',
    alt: 'Brand 5',
  },
  {
    id: '6',
    name: 'ASUS',
    image: 'https://via.placeholder.com/150',
    alt: 'Brand 6',
  },
  {
    id: '7',
    name: 'COOLERMASTER',
    image: 'https://via.placeholder.com/150',
    alt: 'Brand 1',
  },
  {
    id: '8',
    name: 'HYPER X',
    image: 'https://via.placeholder.com/150',
    alt: 'Brand 7',
  },
  {
    id: '',
    name: 'RAZER',
    image: 'https://via.placeholder.com/150',
    alt: 'Brand 8',
  },
  {
    id: '9',
    name: 'LOGITECH',
    image: 'https://via.placeholder.com/150',
    alt: 'Brand 9',
  },
];

const AboutPage = () => {
  return (
    <div className="container bg-gray-800 mx-auto pt-32 px-5 text-white">
      {/* Summary Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-center">من نحن؟</h2>
        <h1 className="text-3xl font-bold mb-4 text-center">3D Electronics</h1>
        <p className="text-lg text-center max-w-5xl mx-auto">
          بدأ مشوارنا التجاري عام 1998 في بغداد - منطقة حي الجامعة - مجمع الرشيد
          التجاري كمحل تجاري بسيط بإسم ( الابعاد الثلاثة ) وتم استيحاء الاسم
          آنذاك بسبب تكنولوجيا انتقال التصاميم المرئية والألعاب الالكترونية من
          البعدين (2D) الى الابعاد الثلاثة (3D) وكان الامر حديث العام في حينها.
          ومنذ ذلك الحين يهدف المكتب لتقديم كل انواع التكنولوجيا الألكترونية من
          حاسبات ولابتوبات والتقنيات الحديثة بأنواعها الى زبائننا الكرام. عام
          2004 انتقلت الشركة ( المكتب في حينها ) الى شارع الصناعة مع الاستمرار
          بتطوير الخدمات التي نقدمها وازداد روادنا وبالتالي ازداد حجم الشركة (
          ادارياً وسوقياً ) عبر الاعوام، وبفضل الله تمكنا من الحصول على ثقة
          زبائننا وحصول الشركة على مكانتها بين باقي الشركات العاملة في نفس
          القطاع وتميزنا برغم كل التحديات الي يواجهها العراق وصعوبة توفير أجود
          المنتجات باسرع وقت وأفضل سعر .هذا الموقع ومكتب (3D) في شارع الصناعة هو
          تابع لشركة الاتجاه الثالث للألكترونيات والوكالات التجارية ومسجلة
          رسمياً وقانونياً في العراق بنفس الاسم ولديها أفرع في جمهورية الصين (
          مدينة شنزن - Shenzhen ) و الامارات العربية المتحدة ( مدينة دبي ).
        </p>
      </section>
      {/* Video Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-center">About Us Video</h2>
        <div className="flex justify-center">
          <video
            src={video}
            autoPlay
            muted
            loop
            controls
            className="w-full max-w-4xl rounded-lg shadow-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className="mb-10">
        <p className="text-lg text-center max-w-5xl mx-auto">
          تعد شركتنا مورداً رئيسياً لمكونات الكمبيوتر وملحقاته واكسسواراته لجميع
          أنحاء العراق. وكما نوفر للعديد من نقاط البيع الرئيسية الموزعة في انحاء
          العراق والمستخدمين النهائيين والطلاب وشركات القطاعين العام والخاص
          ومنصات التعليم منتجات وخدمات عالية الجودة وبأنسب الاسعار. تأسست شركة
          البعد الثالث للألكترونيات في بغداد عام 1998 بناءً على هدف واصرار في
          حينها ليصل اليوم الى خبرة ومكانة في عالم الإلكترونيات والكمبيوتر،
          لنقدم منتجات وخدمات الكمبيوتر للأفراد والشركات ذات جودة عالية وسعر أقل
          ونقدم الدعم اللازم لما بعد البيع مع الضمانات. شركتنا مستورد وموزع
          رئيسي وبائع مفرد في العراق. عدد موظفي الشركة هو ( 38 ) موظفاً موزعين
          بين الادارة والتسويق والمبيعات والفنيين لديهم قاعدة قوية من المعرفة
          والخبرة في قطاع تكنولوجيا المعلومات، ويقدمون كل مالديهم لارضاء الزبون
        </p>
      </section>
      {/* Brands Logos Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Partners</h2>
        <div className="grid justify-items-center grid-cols-4 gap-6">
          {/* Replace src with actual logo URLs */}

          {partners.map((partner) => (
            <Link key={partner.id} to={'/'}>
              <img
                src={partner.image}
                alt={partner.alt}
                className="max-w-full h-auto rounded-full"
              />
              <h1 className="text-white text-center">{partner.name}</h1>
            </Link>
          ))}
          {/* Add more logos as needed */}
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Location</h2>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d350.4909690689351!2d44.44875695639767!3d33.30702370665004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15578159577aad4b%3A0x94ec1623c6cde080!2sMakers%20of%20Baghdad!5e0!3m2!1sen!2siq!4v1727195994728!5m2!1sen!2siq"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border border-gray-300"
            title="Google Maps Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
