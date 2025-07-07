import React from 'react';
import { SearchIcon, ChevronDownIcon } from './icons';

const SearchWidget: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 items-center">
        <div className="relative md:col-span-2 lg:col-span-2">
            <label htmlFor="search-product" className="sr-only">جستجوی محصولات</label>
            <input
                id="search-product"
                type="text"
                placeholder="جستجو برای قالب‌ها یا افزونه‌ها..."
                className="w-full pr-12 pl-4 py-4 bg-white/5 text-white border border-white/10 rounded-full focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 placeholder-gray-400"
            />
            <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
        </div>
        <div className="relative">
            <label htmlFor="product-type" className="sr-only">نوع محصول</label>
            <select id="product-type" className="w-full appearance-none pr-4 pl-10 py-4 bg-white/5 text-white border border-white/10 rounded-full focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300">
                <option>همه محصولات</option>
                <option>قالب‌های وردپرس</option>
                <option>افزونه‌های وردپرس</option>
            </select>
            <ChevronDownIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
        <div className="relative">
            <label htmlFor="sort-by" className="sr-only">مرتب‌سازی بر اساس</label>
            <select id="sort-by" className="w-full appearance-none pr-4 pl-10 py-4 bg-white/5 text-white border border-white/10 rounded-full focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300">
                <option>محبوبیت</option>
                <option>جدیدترین</option>
                <option>قیمت: کم به زیاد</option>
                <option>قیمت: زیاد به کم</option>
            </select>
            <ChevronDownIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
        <button className="w-full lg:col-span-1 bg-accent text-white font-bold py-4 rounded-full hover:bg-accent-hover transition-colors duration-300 shadow-lg shadow-accent/20 hover:shadow-glow-accent">
          جستجو
        </button>
      </div>
    </div>
  );
};

export default SearchWidget;