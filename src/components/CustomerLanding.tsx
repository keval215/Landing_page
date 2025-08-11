import React, { useState } from 'react';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Navbar } from './Navbar';

interface CustomerLandingProps {
  onBack: () => void;
  onCustomerClick: () => void;
  onSupplierClick: () => void;
}

export const CustomerLanding: React.FC<CustomerLandingProps> = ({ onBack, onCustomerClick, onSupplierClick }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    role: '',
    partsDescription: '',
    betaAccess: false
  });
  const USER_WAITLIST_API = import.meta.env.VITE_USER_WAITLIST_API;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      const payload = {
        full_name: formData.fullName,
        email: formData.email,
        company: formData.company,
        parts: formData.partsDescription,
        pilot: formData.betaAccess
      };
      const response = await fetch(USER_WAITLIST_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        setSuccess('Thank you! Your details have been submitted.');
        setFormData({
          fullName: '',
          email: '',
          company: '',
          role: '',
          partsDescription: '',
          betaAccess: false
        });
      } else {
        setError('Submission failed. Please try again later.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
    setLoading(false);
  };

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
          src="/cnc2.webp" 
          alt="CNC Manufacturing Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-900/10 to-black/95"></div>
      </div>
      
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 relative z-10">
        <button 
          onClick={onBack}
          className="flex items-center text-purple-300 hover:text-white transition-all duration-300 hover:bg-gray-800/50 px-4 py-3 rounded-xl micro-interaction group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transform transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Back to main page</span>
        </button>
      </div>

      {/* Enhanced Hero Section */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-16 sm:pt-24 pb-16 relative z-10">
        <div className="text-center">
          {/* Subtle Professional Box for the Headline */}
          <div className="subtle-hero-box rounded-2xl sm:rounded-3xl p-8 sm:p-12 animate-fade-in relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Tired of waiting weeks to get your parts manufactured?
              </h1>
            </div>
          </div>

          {/* Enhanced Subheading */}
          <div className="mt-8 sm:mt-12">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay font-light">
              We are building the platform we wished existed. Just like <span className="text-purple-400 font-medium">quick commerce</span>, 
              we are going to make <span className="text-purple-400 font-medium">quick manufacturing</span> a real thing.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Waitlist Form */}
      <div id="waitlist-form" className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="glass-morphism rounded-2xl sm:rounded-3xl p-8 sm:p-12 animate-fade-in-scroll">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold enhanced-gradient-text mb-4">Join the Waitlist</h2>
              <p className="text-gray-300 text-lg md:text-xl font-light">
                We're currently onboarding early users. Join now for early access and quoting priority.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {success && (
                <div className="glass-morphism border-green-500/30 text-green-400 text-center font-semibold py-4 px-6 rounded-xl animate-fade-in">
                  {success}
                </div>
              )}
              {error && (
                <div className="glass-morphism border-red-500/30 text-red-400 text-center font-semibold py-4 px-6 rounded-xl animate-fade-in">
                  {error}
                </div>
              )}
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full px-4 py-4 glass-morphism border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all micro-interaction"
                    disabled={loading}
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-4 glass-morphism border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all micro-interaction"
                    disabled={loading}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Company / Organization</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-4 glass-morphism border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all micro-interaction"
                  disabled={loading}
                  placeholder="Enter your company name"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">What kind of parts do you usually get made?</label>
                <textarea
                  value={formData.partsDescription}
                  onChange={(e) => setFormData({...formData, partsDescription: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-4 glass-morphism border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all micro-interaction resize-none"
                  disabled={loading}
                  placeholder="Describe the parts you need..."
                />
              </div>
              
              <div className="flex items-center space-x-4 p-4 glass-morphism rounded-xl">
                <input
                  type="checkbox"
                  id="betaAccess"
                  checked={formData.betaAccess}
                  onChange={(e) => setFormData({...formData, betaAccess: e.target.checked})}
                  className="w-5 h-5 text-purple-400 bg-gray-800 border-gray-600 rounded focus:ring-purple-400/50 transition-all"
                  disabled={loading}
                />
                <label htmlFor="betaAccess" className="text-sm text-gray-300 cursor-pointer">
                  I'm open to pilot invites or beta access
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full cta-button text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 micro-interaction"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Join the Waitlist</span>
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
