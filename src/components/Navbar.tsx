import React, { useState } from 'react';
import { Settings, Menu, X } from 'lucide-react';

interface NavbarProps {
  onCustomerClick: () => void;
  onSupplierClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCustomerClick, onSupplierClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCustomerClick = () => {
    onCustomerClick();
    setIsMenuOpen(false);
  };

  const handleSupplierClick = () => {
    onSupplierClick();
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-gray-800/30">
      <div className="px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo - Enhanced with animation */}
          <div className="flex items-center space-x-3 flex-shrink-0 group">
            <div className="relative">
              <Settings className="w-7 h-7 sm:w-9 sm:h-9 text-purple-400 transform transition-transform duration-300 group-hover:rotate-90" />
              <div className="absolute inset-0 w-7 h-7 sm:w-9 sm:h-9 bg-purple-400/20 rounded-full animate-pulse"></div>
            </div>
            <span className="text-lg sm:text-xl font-bold text-white enhanced-gradient-text">KwikCNC</span>
          </div>
          
          {/* Container for all right-side elements */}
          <div className="flex items-center">
            {/* Desktop Navigation Links - Enhanced */}
            <div className="hidden md:flex items-center space-x-2">
              <button 
                onClick={onCustomerClick}
                className="text-gray-300 hover:text-white transition-all duration-300 hover:bg-gray-800/50 px-4 py-2 rounded-xl font-medium text-sm micro-interaction relative group"
              >
                <span>Customer</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></div>
              </button>
              <button 
                onClick={onSupplierClick}
                className="text-gray-300 hover:text-white transition-all duration-300 hover:bg-gray-800/50 px-4 py-2 rounded-xl font-medium text-sm micro-interaction relative group"
              >
                <span>Supplier</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></div>
              </button>
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-gray-800/50 micro-interaction"
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5">
                  <Menu className={`w-5 h-5 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                  <X className={`w-5 h-5 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Enhanced */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-48 opacity-100' 
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <div className="border-t border-gray-800/30 glass-morphism">
            <div className="px-2 pt-3 pb-4 space-y-2">
              <button 
                onClick={handleCustomerClick}
                className="block w-full text-left text-gray-300 hover:text-white hover:bg-gray-800/50 px-4 py-3 rounded-xl font-medium transition-all duration-300 text-sm micro-interaction"
              >
                Customer
              </button>
              <button 
                onClick={handleSupplierClick}
                className="block w-full text-left text-gray-300 hover:text-white hover:bg-gray-800/50 px-4 py-3 rounded-xl font-medium transition-all duration-300 text-sm micro-interaction"
              >
                Supplier
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
