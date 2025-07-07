import React from 'react';

export interface Product {
  id: number;
  name: string;
  category: 'قالب' | 'افزونه';
  price: number;
  imageUrl: string;
  isNew?: boolean;
  rating: number;
  reviews: number;
}

export interface Advantage {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
  avatarUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogArticle {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
    category: string;
    date: string;
}


export const ALL_PRODUCTS: Product[] = [
  { id: 1, name: 'قالب کوانتوم‌پرس', category: 'قالب', price: 59, imageUrl: 'https://picsum.photos/seed/quantum/600/400', isNew: true, rating: 5, reviews: 112 },
  { id: 2, name: 'افزونه فیوژن‌فرم', category: 'افزونه', price: 29, imageUrl: 'https://picsum.photos/seed/fusion/600/400', rating: 4.5, reviews: 88 },
  { id: 3, name: 'تقویت‌کننده سئو استلار', category: 'افزونه', price: 49, imageUrl: 'https://picsum.photos/seed/stellar/600/400', rating: 5, reviews: 230 },
  { id: 4, name: 'قالب فروشگاهی نبیولا', category: 'قالب', price: 79, imageUrl: 'https://picsum.photos/seed/nebula/600/400', rating: 4.5, reviews: 95 },
  { id: 5, name: 'صفحه‌ساز اوریون', category: 'افزونه', price: 69, imageUrl: 'https://picsum.photos/seed/orion/600/400', isNew: true, rating: 5, reviews: 150 },
  { id: 6, name: 'قالب مجله گلکسی', category: 'قالب', price: 49, imageUrl: 'https://picsum.photos/seed/galaxy/600/400', rating: 4, reviews: 74 },
  { id: 7, name: 'مجموعه امنیتی پولسار', category: 'افزونه', price: 89, imageUrl: 'https://picsum.photos/seed/pulsar/600/400', rating: 5, reviews: 310 },
  { id: 8, name: 'قالب نمونه‌کار کاسموس', category: 'قالب', price: 39, imageUrl: 'https://picsum.photos/seed/cosmos/600/400', rating: 4.5, reviews: 66 },
  { id: 9, name: 'سیستم رزرواسیون اپکس', category: 'افزونه', price: 55, imageUrl: 'https://picsum.photos/seed/apex/600/400', rating: 4.5, reviews: 102 },
  { id: 10, name: 'قالب شرکتی نوا', category: 'قالب', price: 69, imageUrl: 'https://picsum.photos/seed/nova/600/400', rating: 5, reviews: 121 },
  { id: 11, name: 'افزونه اسلایدر ورتکس', category: 'افزونه', price: 25, imageUrl: 'https://picsum.photos/seed/vertex/600/400', rating: 4, reviews: 59 },
  { id: 12, name: 'قالب وبلاگ اکلیپس', category: 'قالب', price: 45, imageUrl: 'https://picsum.photos/seed/eclipse/600/400', isNew: true, rating: 4.5, reviews: 81 },
];