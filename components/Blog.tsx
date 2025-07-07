
import React from 'react';
import { BlogArticle } from '../types';

const articles: BlogArticle[] = [
  { 
    id: 1, 
    title: '۱۰ افزونه ضروری برای هر سایت وردپرسی در سال ۲۰۲۴', 
    excerpt: 'با افزونه‌های ضروری که عملکرد، امنیت و کارایی وب‌سایت شما را بهبود می‌بخشند، آشنا شوید...',
    imageUrl: 'https://picsum.photos/seed/blog1/600/400',
    category: 'افزونه‌ها',
    date: '۲۵ تیر ۱۴۰۳'
  },
  { 
    id: 2, 
    title: 'انتخاب قالب بی‌نقص: راهنمای ترندهای طراحی وب', 
    excerpt: 'با بررسی جدیدترین ترندهای طراحی وب و نحوه انتخاب قالبی که آن‌ها را منعکس کند، پیشرو باشید...',
    imageUrl: 'https://picsum.photos/seed/blog2/600/400',
    category: 'قالب‌ها',
    date: '۲۰ تیر ۱۴۰۳'
  },
  { 
    id: 3, 
    title: 'چگونه سایت وردپرس خود را برای Core Web Vitals بهینه کنیم', 
    excerpt: 'یک راهنمای گام‌به‌گام برای بهبود عملکرد سایت و دستیابی به امتیازات عالی Core Web Vitals...',
    imageUrl: 'https://picsum.photos/seed/blog3/600/400',
    category: 'عملکرد',
    date: '۱۵ تیر ۱۴۰۳'
  },
];

const BlogCard: React.FC<{ article: BlogArticle }> = ({ article }) => (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden group flex flex-col transition-all duration-300 hover:shadow-glow-accent hover:-translate-y-2">
        <img src={article.imageUrl} alt={article.title} className="w-full h-56 object-cover" />
        <div className="p-6 flex flex-col flex-grow text-right">
            <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
                <span>{article.category}</span>
                <span>{article.date}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 flex-grow">{article.title}</h3>
            <p className="text-gray-text mb-4 text-sm">{article.excerpt}</p>
            <a href="#" className="mt-auto font-semibold text-accent hover:text-accent-hover transition-colors duration-300 inline-flex items-center gap-2 group/link">
                <span>ادامه مطلب</span>
                <span className="transition-transform group-hover/link:-translate-x-1 motion-reduce:transform-none">&larr;</span>
            </a>
        </div>
    </div>
);

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 sm:py-32 bg-transparent animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">از وبلاگ ما</h2>
          <p className="text-lg text-gray-text mt-2 max-w-2xl mx-auto">آخرین اخبار، نکات و دیدگاه‌های تیم متخصص ما را دریافت کنید.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;