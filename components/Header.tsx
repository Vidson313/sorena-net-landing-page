
import React, { useState } from 'react';
import { LogoIcon } from './icons';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'خانه', href: '#' },
        { name: 'محصولات', href: '#products' },
        { name: 'درباره ما', href: '#about' },
        { name: 'وبلاگ', href: '#blog' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-primary/80 backdrop-blur-sm border-b border-secondary">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <a href="#" aria-label="صفحه اصلی سورننت">
                        <LogoIcon className="h-7 w-auto" />
                    </a>
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-gray-text hover:text-white transition-colors duration-300 font-medium">
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <div className="hidden lg:flex items-center gap-4">
                        <a href="#support" className="text-gray-text hover:text-white transition-colors duration-300 font-medium">پشتیبانی آنلاین</a>
                        <a href="#login" className="px-5 py-2.5 text-sm font-medium text-white bg-secondary rounded-full hover:bg-opacity-80 transition-all duration-300">
                            ورود / ثبت‌نام
                        </a>
                    </div>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white" aria-label="باز کردن منو">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden bg-secondary">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                         {navLinks.map((link) => (
                            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-text hover:text-white transition-colors duration-300 font-medium">
                                {link.name}
                            </a>
                        ))}
                        <a href="#support" onClick={() => setIsMenuOpen(false)} className="text-gray-text hover:text-white transition-colors duration-300 font-medium">پشتیبانی آنلاین</a>
                        <a href="#login" onClick={() => setIsMenuOpen(false)} className="mt-2 px-5 py-2.5 text-sm font-medium text-white bg-accent rounded-full hover:bg-accent-hover transition-all duration-300">
                            ورود / ثبت‌نام
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;