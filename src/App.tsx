import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { CustomerLanding } from './components/CustomerLanding';
import { SupplierLanding } from './components/SupplierLanding';

type Page = 'hero' | 'customer' | 'supplier';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('hero');

  // Add scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll(
      '.animate-fade-in-scroll, .animate-slide-left, .animate-slide-right, .animate-slide-up'
    );
    
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [currentPage]);

  const handleCustomerClick = () => setCurrentPage('customer');
  const handleSupplierClick = () => setCurrentPage('supplier');
  const handleBackToHero = () => {
    setCurrentPage('hero');
    // Scroll to top when navigating back
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="App">
      {currentPage === 'hero' && (
        <Hero 
          onCustomerClick={handleCustomerClick}
          onSupplierClick={handleSupplierClick}
        />
      )}
      {currentPage === 'customer' && (
        <CustomerLanding onBack={handleBackToHero} />
      )}
      {currentPage === 'supplier' && (
        <SupplierLanding onBack={handleBackToHero} />
      )}
    </div>
  );
}

export default App;