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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <Settings className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
            <span className="text-lg sm:text-xl font-bold text-white">Get It Machined</span>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={onCustomerClick}
              className="text-gray-300 hover:text-white transition-colors duration-300 hover:bg-gray-800/50 px-4 py-2 rounded-lg font-medium"
            >
              Customer
            </button>
            <button 
              onClick={onSupplierClick}
              className="text-gray-300 hover:text-white transition-colors duration-300 hover:bg-gray-800/50 px-4 py-2 rounded-lg font-medium"
            >
              Supplier
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800/50 bg-black/90 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={handleCustomerClick}
                className="block w-full text-left text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Customer
              </button>
              <button 
                onClick={handleSupplierClick}
                className="block w-full text-left text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Supplier
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};