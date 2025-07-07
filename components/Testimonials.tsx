import React from 'react';
import { Testimonial } from '../types';
import { StarIcon } from './icons';

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "قالب‌های سورننت نه تنها زیبا هستند، بلکه شخصی‌سازی آن‌ها فوق‌العاده آسان است. پشتیبانی‌شان هم درجه یک است!",
    author: 'سارا جانسون',
    company: 'آژانس ذهن‌های خلاق',
    avatarUrl: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: 2,
    quote: "افزونه‌های عملکردی سورننت سرعت سایت ما را به شدت افزایش داده‌اند. یک ابزار ضروری برای هر کسب‌وکار جدی.",
    author: 'مایکل چن',
    company: 'شرکت راه‌حل‌های فناوری',
    avatarUrl: 'https://picsum.photos/seed/michael/100/100'
  },
  {
    id: 3,
    quote: "چندین محصول خریده‌ام و همیشه تحت تأثیر کیفیت و توجه به جزئیات قرار گرفته‌ام. بروزرسانی‌های مادام‌العمر فوق‌العاده است.",
    author: 'جسیکا ویلیامز',
    company: 'توسعه‌دهنده فریلنسر',
    avatarUrl: 'https://picsum.photos/seed/jessica/100/100'
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl flex flex-col h-full text-right">
        <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
            ))}
        </div>
        <p className="text-gray-text mb-6 flex-grow">"{testimonial.quote}"</p>
        <div className="flex items-center mt-auto">
            <img src={testimonial.avatarUrl} alt={testimonial.author} className="h-12 w-12 rounded-full ml-4" />
            <div>
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.company}</p>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-transparent animate-fade-in-up" style={{ animationDelay: '400ms' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">محبوب توسعه‌دهندگان و آژانس‌ها</h2>
            <p className="text-lg text-gray-text mt-2 max-w-2xl mx-auto">فقط به حرف ما اکتفا نکنید. ببینید مشتریان ما چه می‌گویند.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;