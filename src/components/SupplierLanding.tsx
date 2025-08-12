import React, { useState } from 'react';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Navbar } from './Navbar';

interface SupplierLandingProps {
  onBack: () => void;
  onCustomerClick: () => void;
  onSupplierClick: () => void;
}

export const SupplierLanding: React.FC<SupplierLandingProps> = ({ onBack, onCustomerClick, onSupplierClick }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    shopName: '',
    location: '',
    website: '',
    capabilities: '',
    experience: '',
    pilotProgram: false
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const SUPPLIER_WAITLIST_API = import.meta.env.VITE_SUPPLIER_WAITLIST_API;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    
    try {
      const payload = {
        full_name: formData.fullName,
        email: formData.email,
        shop_name: formData.shopName,
        location: formData.location,
        website: formData.website ? formData.website : null,
        parts: null,
        capabilities: formData.capabilities,
        experience: formData.experience,
        pilot: formData.pilotProgram
      };
      
      const response = await fetch(SUPPLIER_WAITLIST_API, {
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
          shopName: '',
          location: '',
          website: '',
          capabilities: '',
          experience: '',
          pilotProgram: false
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
          src="/cnc4.webp" 
          alt="CNC Machine Shop Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-green-900/10 to-black/95"></div>
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
      <div className="container mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-16 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Subtle Professional Box for Main Headline */}
          <div className="subtle-hero-box rounded-2xl sm:rounded-3xl p-8 sm:p-12 mb-8 animate-fade-in relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Run Your CNC Round‑The‑Clock—No Downtime
              </h1>
            </div>
          </div>
          
          <div className="animate-fade-in-delay">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed font-light px-2">
              Tap into a <span className="text-green-400 font-medium">24/7 stream</span> of vetted jobs, 
              quick turnaround with our <span className="text-green-400 font-medium">proprietary AI engine</span> and managed logistics.
            </p>
          </div>
        </div>
      </div>
      
      {/* Enhanced Waitlist Form */}
      <div id="supplier-waitlist-form" className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-morphism rounded-2xl sm:rounded-3xl p-8 sm:p-12 animate-fade-in-scroll">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold enhanced-gradient-text mb-4">Join the Supplier Waitlist</h2>
              <p className="text-gray-300 text-lg md:text-xl font-light">
                We're currently onboarding high-quality CNC suppliers. Tell us more about your shop to get early access.
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
                    className="w-full px-4 py-4 glass-morphism border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all micro-interaction"
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
                    className="w-full px-4 py-4 glass-morphism border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all micro-interaction"
                    disabled={loading}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Shop Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.shopName}
                    onChange={(e) => setFormData({...formData, shopName: e.target.value})}
                    className="w-full px-4 py-4 glass-morphism border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all micro-interaction"
                    disabled={loading}
                    placeholder="Enter your shop name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">Location *</label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full px-4 py-4 glass-morphism border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all micro-interaction"
                    disabled={loading}
                    placeholder="City, State"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Website / Google Listing</label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                  className="w-full px-4 py-4 glass-morphism border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all micro-interaction"
                  disabled={loading}
                  placeholder="https://yourwebsite.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Type of Machines & Capabilities</label>
                <textarea
                  value={formData.capabilities}
                  onChange={(e) => setFormData({...formData, capabilities: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-4 glass-morphism border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all micro-interaction resize-none"
                  disabled={loading}
                  placeholder="e.g., 3-axis mills, 4-axis, turning centers, materials you work with..."
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Years of Experience</label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  className="w-full px-4 py-4 glass-morphism border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all micro-interaction"
                  disabled={loading}
                >
                  <option value="">Select experience level</option>
                  <option value="1-3">1-3 years</option>
                  <option value="4-7">4-7 years</option>
                  <option value="8-15">8-15 years</option>
                  <option value="15+">15+ years</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-4 p-4 glass-morphism rounded-xl">
                <input
                  type="checkbox"
                  id="pilotProgram"
                  checked={formData.pilotProgram}
                  onChange={(e) => setFormData({...formData, pilotProgram: e.target.checked})}
                  className="w-5 h-5 text-green-400 bg-gray-800 border-gray-600 rounded focus:ring-green-400/50 transition-all"
                  disabled={loading}
                />
                <label htmlFor="pilotProgram" className="text-sm text-gray-300 cursor-pointer">
                  I want to participate in the pilot program
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-700 border border-green-500/30 hover:border-green-400/50 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 micro-interaction flex items-center justify-center space-x-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Join the Supplier Waitlist</span>
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
};
