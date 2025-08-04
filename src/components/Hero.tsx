import React from 'react';
import { Navbar } from './Navbar';

interface HeroProps {
  onCustomerClick: () => void;
  onSupplierClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCustomerClick, onSupplierClick }) => {

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navbar */}
      <Navbar onCustomerClick={onCustomerClick} onSupplierClick={onSupplierClick} />
      
      {/* Background Image with Low Opacity */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/cnc1.webp" 
          alt="CNC Manufacturing Background" 
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/20 to-black/90"></div>
      </div>
      
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-24 sm:pt-32 pb-16 relative z-10">
        <div className="text-center">
          {/* Rectangular Block for Main Headline - Fixed text cutoff */}
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 pb-8 sm:pb-10 md:pb-12 mb-6 sm:mb-8 animate-fade-in">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-normal pb-2">
                Quick <span className="line-through text-gray-400">Commerce</span> Machining 
            </h1>
             <p className="text-lg sm:text-xl text-gray-300 italic">
              In the era of 10-minute deliveries, why are your parts taking weeks?
            </p>
          </div>
         
        </div>
      </div>

      {/* Who Are You */}
      <div id="who-are-you" className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in-scroll">
            Who Are You?
          </h2>
          <p className="text-xl text-gray-300 mb-12 animate-fade-in-scroll">
            To serve you better, tell us who you are:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <button 
              onClick={onCustomerClick}
              className="bg-gray-800 hover:bg-gray-700 border border-purple-500/30 hover:border-purple-400/50 text-white p-8 rounded-2xl text-left transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 animate-slide-left group"
            >
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-2">I want CNC machined Parts</h3>
              <p className="text-purple-300 group-hover:text-white transition-colors">Take me there →</p>
            </button>
            
            <button 
              onClick={onSupplierClick}
              className="bg-gray-800 hover:bg-gray-700 border border-green-500/30 hover:border-green-400/50 text-white p-8 rounded-2xl text-left transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 animate-slide-right group"
            >
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-xl font-semibold mb-2">I provide CNC machining services</h3>
              <p className="text-green-300 group-hover:text-white transition-colors">Take me there →</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};