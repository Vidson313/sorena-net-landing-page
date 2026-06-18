import React from 'react';

// Import placeholder components (to be created in the next step)
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
    // Basic structure mirroring the original, Tailwind classes will be applied directly in components later
    // The original App.tsx had: className="bg-primary text-white font-sans antialiased"
    // This will be handled by Tailwind CDN and body classes in index.html or direct component styling.
    <div>
      <Header />
      <main>
        <Hero />
        {/* Original structure had a div wrapper for SearchWidget here for positioning */}
        <div>
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
