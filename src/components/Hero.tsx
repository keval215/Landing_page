import React, { useEffect, useState } from 'react';
import { Navbar } from './Navbar';

interface HeroProps {
  onCustomerClick: () => void;
  onSupplierClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCustomerClick, onSupplierClick }) => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    const titleTimer = setTimeout(() => setTitleVisible(true), 500);
    const subtitleTimer = setTimeout(() => setSubtitleVisible(true), 1500);
    
    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navbar */}
      <Navbar onCustomerClick={onCustomerClick} onSupplierClick={onSupplierClick} />
      
      {/* Subtle floating elements */}
      <div className="subtle-floating-element"></div>
      <div className="subtle-floating-element"></div>
      <div className="subtle-floating-element"></div>
      
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/cnc1.webp" 
          alt="CNC Manufacturing Background" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-purple-900/15 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>
      
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-28 sm:pt-36 pb-20 relative z-10">
        <div className="text-center">
          {/* Subtle Professional Box */}
          <div className="subtle-hero-box rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 mb-8 sm:mb-12 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight transition-all duration-1000 ${
                titleVisible ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-8'
              }`}>
                Quick <span className="line-through text-gray-500 transition-all duration-500 hover:text-gray-400">Commerce</span> Machining 
              </h1>
              
              <div className="mt-6 sm:mt-8">
                <p className={`text-lg sm:text-xl md:text-2xl text-gray-300 font-light transition-all duration-1000 delay-500 ${
                  subtitleVisible ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-4'
                }`}>
                  In the era of <span className="text-purple-400 font-medium">10-minute deliveries</span>, why are your parts taking <span className="text-red-400 font-medium">weeks</span>?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Who Are You Section */}
      <div id="who-are-you" className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 enhanced-gradient-text animate-fade-in-scroll">
              Who Are You?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-light animate-fade-in-scroll">
              To serve you better, tell us who you are:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Customer Card */}
            <div 
              onClick={onCustomerClick}
              className="subtle-card glass-morphism p-8 md:p-10 rounded-2xl text-left cursor-pointer group animate-slide-left"
            >
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  🔧
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                  I want CNC machined Parts
                </h3>
                <p className="text-purple-300 group-hover:text-white transition-colors flex items-center font-medium">
                  Take me there 
                  <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">→</span>
                </p>
                
                {/* Hover indicator */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
            </div>
            
            {/* Supplier Card */}
            <div 
              onClick={onSupplierClick}
              className="subtle-card glass-morphism p-8 md:p-10 rounded-2xl text-left cursor-pointer group animate-slide-right"
            >
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  🏭
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-green-300 transition-colors">
                  I provide CNC machining services
                </h3>
                <p className="text-green-300 group-hover:text-white transition-colors flex items-center font-medium">
                  Take me there 
                  <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2">→</span>
                </p>
                
                {/* Hover indicator */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
