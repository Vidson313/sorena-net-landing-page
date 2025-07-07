import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-primary pt-24 pb-32 sm:pb-40 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-secondary opacity-20 transform-gpu skew-y-[-6deg]"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl opacity-30"></div>
      <div className="container mx-auto px-4 relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight leading-tight">
          قالب‌ها و افزونه‌های پریمیوم وردپرس
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-text mb-8">
          وب‌سایت خود را با محصولات وردپرسی ما که به صورت حرفه‌ای طراحی شده، سرشار از امکانات و بهینه‌شده برای عملکرد بالا هستند، قدرتمند سازید.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-accent rounded-full hover:bg-accent-hover shadow-lg shadow-accent/20 transform hover:scale-105 transition-all duration-300 hover:shadow-glow-accent"
          >
            مشاهده محصولات
          </a>
          <a
            href="#consultation"
            className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-secondary rounded-full hover:bg-opacity-80 transition-all duration-300"
          >
            مشاوره رایگان
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;