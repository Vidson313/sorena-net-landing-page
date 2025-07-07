
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchWidget from './components/SearchWidget';
import FeaturedProducts from './components/FeaturedProducts';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import TrustBar from './components/TrustBar';
import SpecialOffer from './components/SpecialOffer';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-primary text-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 -mt-16 sm:-mt-20 relative z-10">
            <SearchWidget />
        </div>
        <FeaturedProducts />
        <Advantages />
        <TrustBar />
        <Testimonials />
        <SpecialOffer />
        <FAQ />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default App;