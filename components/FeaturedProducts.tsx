
import React from 'react';
import { Product } from '../types';
import { StarIcon } from './icons';

const products: Product[] = [
  { id: 1, name: 'قالب کوانتوم‌پرس', category: 'قالب', price: 59000, imageUrl: 'https://picsum.photos/seed/quantum/600/400', isNew: true, rating: 5, reviews: 112 },
  { id: 2, name: 'افزونه فیوژن‌فرم', category: 'افزونه', price: 29000, imageUrl: 'https://picsum.photos/seed/fusion/600/400', rating: 4.5, reviews: 88 },
  { id: 3, name: 'تقویت‌کننده سئو استلار', category: 'افزونه', price: 49000, imageUrl: 'https://picsum.photos/seed/stellar/600/400', rating: 5, reviews: 230 },
  { id: 4, name: 'قالب فروشگاهی نبیولا', category: 'قالب', price: 79000, imageUrl: 'https://picsum.photos/seed/nebula/600/400', rating: 4.5, reviews: 95 },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden group flex flex-col transition-all duration-300 hover:shadow-glow-accent hover:-translate-y-2">
        <div className="relative">
            <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
            {product.isNew && <span className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">جدید</span>}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 right-4">
                <span className="text-white bg-black/30 backdrop-blur-sm text-xs px-2 py-1 rounded-full">{product.category}</span>
            </div>
        </div>
        <div className="p-6 flex flex-col flex-grow text-right">
            <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
            <div className="flex items-center mb-4 justify-end">
                <StarIcon className="w-5 h-5 text-yellow-400" />
                <span className="font-bold text-white mr-1.5">{product.rating.toFixed(1)}</span>
                <span className="text-sm text-gray-400 mr-2">({product.reviews} نظر)</span>
            </div>
            <div className="flex justify-between items-center mt-auto">
                <p className="text-2xl font-bold text-accent">{product.price.toLocaleString('fa-IR')} تومان</p>
                <button className="px-5 py-2.5 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-hover transition-all duration-300 group-hover:shadow-glow-accent">
                    مشاهده جزئیات
                </button>
            </div>
        </div>
    </div>
);


const FeaturedProducts: React.FC = () => {
  return (
    <section id="products" className="py-24 sm:py-32 animate-fade-in-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">محصولات ویژه</h2>
          <p className="text-lg text-gray-text mt-2 max-w-2xl mx-auto">مجموعه‌ای دست‌چین از محبوب‌ترین و قدرتمندترین محصولات ما.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;