import React, { useState } from 'react';
import { FAQItem } from '../types';
import { ChevronDownIcon } from './icons';

const faqData: FAQItem[] = [
  {
    question: 'سیاست بازگشت وجه شما چیست؟',
    answer: 'ما برای تمام محصولات خود ضمانت ۱۴ روزه بازگشت وجه ارائه می‌دهیم. اگر راضی نبودید، با پشتیبانی ما تماس بگیرید تا وجه شما را به طور کامل و بدون هیچ سوالی بازگردانیم.'
  },
  {
    question: 'آیا قالب‌ها و افزونه‌ها با آخرین نسخه وردپرس سازگار هستند؟',
    answer: 'بله، تمام محصولات ما به طور مداوم بروزرسانی می‌شوند تا از سازگاری کامل با آخرین نسخه وردپرس و افزونه‌های محبوب اطمینان حاصل شود.'
  },
  {
    question: 'آیا می‌توانم از محصولات شما در چندین وب‌سایت استفاده کنم؟',
    answer: 'مجوز استاندارد ما برای یک وب‌سایت است. با این حال، ما مجوزهای چندسایته و نامحدود را با قیمت تخفیف‌خورده برای توسعه‌دهندگان و آژانس‌ها ارائه می‌دهیم.'
  },
  {
    question: 'چگونه بروزرسانی‌ها را برای آیتم‌های خریداری شده دریافت کنم؟',
    answer: 'بروزرسانی‌ها مستقیماً به پیشخوان وردپرس شما ارسال می‌شوند. هر زمان که نسخه جدیدی در دسترس باشد، یک اعلان برای نصب با یک کلیک دریافت خواهید کرد.'
  }
];

const FaqAccordionItem: React.FC<{ item: FAQItem, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => (
    <div className="border-b border-white/10">
        <button onClick={onClick} className="w-full flex justify-between items-center text-right py-6">
            <h3 className="text-lg font-semibold text-white">{item.question}</h3>
            <ChevronDownIcon className={`h-6 w-6 text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
            <p className="pb-6 text-gray-text text-right">{item.answer}</p>
        </div>
    </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 bg-transparent animate-fade-in-up" style={{ animationDelay: '800ms' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">سوالات متداول</h2>
          <p className="text-lg text-gray-text mt-2">پاسخ سوالات رایج در مورد محصولات و خدمات ما را بیابید.</p>
        </div>
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2 md:p-4">
          {faqData.map((item, index) => (
            <FaqAccordionItem 
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;