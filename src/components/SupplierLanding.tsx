import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
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
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const SUPPLIER_WAITLIST_API = import.meta.env.VITE_SUPPLIER_WAITLIST_API;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    fetch(SUPPLIER_WAITLIST_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => {
        if (res.ok) {
          setSuccess('Thank you! Your details have been submitted.');
          console.log('Submission successful!');
        } else {
          setError('Submission failed. Please try again later.');
        }
        return res.json();
      })
      .catch(err => {
        setError('Network error. Please try again.');
        console.error('Supplier waitlist error:', err);
      });
  };
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navbar */}
      <Navbar onCustomerClick={onCustomerClick} onSupplierClick={onSupplierClick} />
      
      {/* Background Image with Low Opacity */}
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
          className="flex items-center text-purple-300 hover:text-white transition-colors hover:bg-gray-800/50 px-3 py-2 rounded-lg"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to main page
        </button>
      </div>
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-12 sm:pb-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Rectangular Block for Main Headline - Updated styling */}
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 animate-fade-in">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in leading-tight">
              Run Your CNC Round‑The‑Clock—No Downtime
            </h1>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed animate-fade-in-delay px-2">
            Tap into a 24/7 stream of vetted jobs, quick turnaround with our proprietary AI engine and managed logistics.
          </p>
          
        </div>
      </div>
      
      {/* Waitlist Form */}
      <div id="supplier-waitlist-form" className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 animate-fade-in-scroll">
            <h2 className="text-3xl font-bold text-center mb-4">Join the Supplier Waitlist</h2>
            <p className="text-gray-300 text-center mb-8">
              We're currently onboarding high-quality CNC suppliers. Tell us more about your shop to get early access.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {success && <div className="text-green-400 text-center font-semibold py-2">{success}</div>}
              {error && <div className="text-red-400 text-center font-semibold py-2">{error}</div>}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Shop Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.shopName}
                    onChange={(e) => setFormData({...formData, shopName: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Location *</label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Website / Google Listing</label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Type of Machines & Capabilities</label>
                <textarea
                  value={formData.capabilities}
                  onChange={(e) => setFormData({...formData, capabilities: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all"
                  placeholder="e.g., 3-axis mills, 4-axis, turning centers, materials you work with..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Years of Experience</label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all"
                >
                  <option value="">Select experience level</option>
                  <option value="1-3">1-3 years</option>
                  <option value="4-7">4-7 years</option>
                  <option value="8-15">8-15 years</option>
                  <option value="15+">15+ years</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="pilotProgram"
                  checked={formData.pilotProgram}
                  onChange={(e) => setFormData({...formData, pilotProgram: e.target.checked})}
                  className="w-5 h-5 text-green-400 bg-gray-800 border-gray-600 rounded focus:ring-green-400/50"
                />
                <label htmlFor="pilotProgram" className="text-sm">
                  I want to participate in the pilot program
                </label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-700 border border-green-500/30 hover:border-green-400/50 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
              >
                Join the Supplier Waitlist →
              </button>
              {success && <div className="text-green-400 text-center font-semibold py-2">{success}</div>}
              {error && <div className="text-red-400 text-center font-semibold py-2">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};