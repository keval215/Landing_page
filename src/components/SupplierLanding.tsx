import React, { useState } from 'react';
import { ArrowLeft, DollarSign, Clock, Shield, CheckCircle, Wrench, Zap, Package } from 'lucide-react';
import { Navbar } from './Navbar';

interface SupplierLandingProps {
  onBack: () => void;
}

export const SupplierLanding: React.FC<SupplierLandingProps> = ({ onBack }) => {
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

  const scrollToWaitlist = () => {
    const element = document.getElementById('supplier-waitlist-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <Navbar onCustomerClick={onBack} onSupplierClick={() => {}} />
      
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in leading-tight">
            Run Your CNC Round‑The‑Clock—No Downtime
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed animate-fade-in-delay px-2">
            Tap into a 24/7 stream of vetted jobs, quick turnaround with our proprietary AI engine and managed logistics.
          </p>
          <button 
            onClick={scrollToWaitlist}
            className="bg-gray-800 hover:bg-gray-700 border border-green-500/30 hover:border-green-400/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 animate-fade-in-delay-2"
          >
            Join the Supplier Waitlist
          </button>
        </div>
      </div>

      {/* CNC Machine Image */}
      <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 relative z-10">
        <div className="relative max-w-4xl mx-auto">
          <img 
            src="/cnc5.webp" 
            alt="CNC machine shop" 
            className="w-full h-48 sm:h-64 md:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl animate-slide-up"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl sm:rounded-2xl"></div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-scroll">
            Why This Is Built for You
          </h2>
          
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-12 animate-fade-in-scroll">
            <p className="text-lg text-gray-300 mb-6">
              You didn't open a machine shop to spend your day quoting, bidding, or chasing payments. You did it to make things.
            </p>
            <p className="text-lg text-white">
              Our platform brings qualified CNC jobs directly to your shop — with everything you need to execute quickly and get paid reliably.
            </p>
          </div>
          
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-scroll">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-900/60 border border-gray-700/50 backdrop-blur-sm rounded-xl p-6 text-center animate-fade-in-scroll">
              <div className="bg-gray-700 border border-green-500/30 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Get Verified</h3>
            </div>
            <div className="bg-gray-900/60 border border-gray-700/50 backdrop-blur-sm rounded-xl p-6 text-center animate-fade-in-scroll">
              <div className="bg-gray-700 border border-green-500/30 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Receive Job Notifications</h3>
            </div>
            <div className="bg-gray-900/60 border border-gray-700/50 backdrop-blur-sm rounded-xl p-6 text-center animate-fade-in-scroll">
              <div className="bg-gray-700 border border-green-500/30 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Accept & Manufacture</h3>
            </div>
            <div className="bg-gray-900/60 border border-gray-700/50 backdrop-blur-sm rounded-xl p-6 text-center animate-fade-in-scroll">
              <div className="bg-gray-700 border border-green-500/30 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Get Paid on Time</h3>
            </div>
          </div>
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
            </form>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 animate-fade-in-scroll">
            <h3 className="text-2xl font-bold mb-4">Still unsure?</h3>
            <p className="text-gray-300 mb-6">
              Drop us a mail and we'll explain how our supplier network works — and how it can help grow your shop.
            </p>
            <a 
              href="mailto:hello@getitmachined.com"
              className="inline-flex items-center bg-gray-800 hover:bg-gray-700 border border-green-500/30 hover:border-green-400/50 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
            >
              📩 hello@getitmachined.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};