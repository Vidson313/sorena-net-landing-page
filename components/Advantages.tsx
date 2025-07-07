import React from 'react';
import { Advantage } from '../types';
import { WarrantyIcon, UpdatesIcon, SupportIcon } from './icons';

const advantages: Advantage[] = [
  {
    icon: <WarrantyIcon className="h-10 w-10 text-accent" />,
    title: 'گارانتی مادام‌العمر',
    description: 'تمام محصولات ما با گارانتی مادام‌العمر ارائه می‌شوند، که خیال شما را از بابت ارزش بلندمدت خریدتان راحت می‌کند.'
  },
  {
    icon: <UpdatesIcon className="h-10 w-10 text-accent" />,
    title: 'بروزرسانی‌های دائمی',
    description: 'بروزرسانی‌های مداوم را به رایگان و برای همیشه دریافت کنید. ما قالب‌ها و افزونه‌های شما را امن و سازگار نگه می‌داریم.'
  },
  {
    icon: <SupportIcon className="h-10 w-10 text-accent" />,
    title: 'پشتیبانی تخصصی ۲۴/۷',
    description: 'تیم پشتیبانی متخصص ما به صورت شبانه‌روزی آماده پاسخگویی به سوالات و رفع مشکلات شماست.'
  }
];

const AdvantageCard: React.FC<{ advantage: Advantage }> = ({ advantage }) => (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center flex flex-col items-center">
        <div className="bg-primary p-4 rounded-full mb-6 inline-block">
            {advantage.icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
        <p className="text-gray-text leading-relaxed">{advantage.description}</p>
    </div>
);

const Advantages: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-transparent animate-fade-in-up" style={{ animationDelay: '200ms' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">چرا سورننت را انتخاب کنید؟</h2>
            <p className="text-lg text-gray-text mt-2 max-w-2xl mx-auto">ما فراتر از یک فروشگاه هستیم. ما شریک شما در موفقیت وب‌سایتتان هستیم.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv, index) => (
            <AdvantageCard key={index} advantage={adv} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;