
import React, { useState, useEffect } from 'react';

const SpecialOffer: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-12-31T23:59:59') - +new Date();
    let timeLeft: {[key: string]: number} = {};

    if (difference > 0) {
      timeLeft = {
        'روز': Math.floor(difference / (1000 * 60 * 60 * 24)),
        'ساعت': Math.floor((difference / (1000 * 60 * 60)) % 24),
        'دقیقه': Math.floor((difference / 1000 / 60) % 60),
        'ثانیه': Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => {
      if (typeof value !== 'number') return null;
      return (
          <div key={interval} className="text-center bg-black/20 p-2 sm:p-4 rounded-lg flex-1">
              <div className="text-3xl sm:text-4xl font-bold text-white">{String(value).padStart(2, '0')}</div>
              <div className="text-xs uppercase text-gray-text mt-1">{interval}</div>
          </div>
      );
  });

  return (
    <section className="py-24 sm:py-32 bg-transparent animate-fade-in-up" style={{ animationDelay: '600ms' }}>
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-accent to-neon-purple rounded-2xl p-8 md:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 transition-all duration-300 hover:shadow-glow-purple">
          <div className="text-center lg:text-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">پیشنهاد ویژه با زمان محدود!</h2>
            <p className="text-lg mb-4">برای مدت محدود از ۳۰٪ تخفیف روی تمام قالب‌ها بهره‌مند شوید. این فرصت را از دست ندهید!</p>
            <a
              href="#products"
              className="inline-block px-8 py-3 text-lg font-semibold text-accent bg-white rounded-full hover:bg-gray-200 shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              همین حالا خرید کنید
            </a>
          </div>
          <div className="flex w-full max-w-md lg:max-w-sm items-center gap-2 sm:gap-4">
            {timerComponents.length ? timerComponents : <span>پیشنهاد به پایان رسید!</span>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;