import React, { useState } from 'react';
import { ArrowLeft, Upload, Zap, CheckCircle, Truck, Shield, Lock, Clock, Star } from 'lucide-react';
import { Navbar } from './Navbar';

interface CustomerLandingProps {
  onBack: () => void;
}

export const CustomerLanding: React.FC<CustomerLandingProps> = ({ onBack }) => {
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

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  // Remove duplicate return and JSX block
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navbar */}
      <Navbar onCustomerClick={() => {}} onSupplierClick={onBack} />
      {/* Background Image with Low Opacity */}
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
            Tired of waiting weeks to get your parts manufactured?
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed animate-fade-in-delay px-2">
            We are building the platform we wished existed. Just like quick commerce, we are going to make quick manufacturing a real thing.
          </p>
          <button 
            onClick={scrollToWaitlist}
            className="bg-gray-800 hover:bg-gray-700 border border-purple-500/30 hover:border-purple-400/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 animate-fade-in-delay-2"
          >
            Join the Waitlist
          </button>
        </div>
      </div>
      {/* CNC Machine Image */}
      <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 relative z-10">
        <div className="relative max-w-4xl mx-auto">
          <img 
            src="/cnc3.webp" 
            alt="CNC machining process" 
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
              From scouting vendors to negotiating with them to get the parts delivered to your location, we know how tedious it is.
              You're designing the future, but every time you need a custom part made — everything slows down.
              Not anymore.
            </p>
            <p className="text-lg text-white">
              We are building a fully managed; on demand CNC machining platform — one that bridges the gap between idea and execution.
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
              <div className="bg-gray-700 border border-purple-500/30 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Upload your CAD file</h3>
            </div>
            <div className="bg-gray-900/60 border border-gray-700/50 backdrop-blur-sm rounded-xl p-6 text-center animate-fade-in-scroll">
              <div className="bg-gray-700 border border-purple-500/30 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Get a Quick Quote</h3>
            </div>
            <div className="bg-gray-900/60 border border-gray-700/50 backdrop-blur-sm rounded-xl p-6 text-center animate-fade-in-scroll">
              <div className="bg-gray-700 border border-purple-500/30 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Place an order</h3>
            </div>
            <div className="bg-gray-900/60 border border-gray-700/50 backdrop-blur-sm rounded-xl p-6 text-center animate-fade-in-scroll">
              <div className="bg-gray-700 border border-purple-500/30 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Track & Get Delivery</h3>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-purple-200 font-semibold">🛡️ All files and identities stay private. You only deal with us.</p>
          </div>
        </div>
      </div>
      {/* Why Trust Us */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in-scroll">
            Why Trust Us
          </h2>
          <div className="space-y-4 mb-12">
            <div className="flex items-center space-x-4 bg-gray-900/60 border border-gray-700/30 backdrop-blur-sm rounded-xl p-4 animate-slide-left">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span>We're not a marketplace — we're your managed partner</span>
            </div>
            <div className="flex items-center space-x-4 bg-gray-900/60 border border-gray-700/30 backdrop-blur-sm rounded-xl p-4 animate-slide-right">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span>Suppliers are vetted through SOPs</span>
            </div>
            <div className="flex items-center space-x-4 bg-gray-900/60 border border-gray-700/30 backdrop-blur-sm rounded-xl p-4 animate-slide-left">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span>Encrypted file handling</span>
            </div>
            <div className="flex items-center space-x-4 bg-gray-900/60 border border-gray-700/30 backdrop-blur-sm rounded-xl p-4 animate-slide-right">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span>On Time Delivery is guaranteed</span>
            </div>
          </div>
        </div>
      </div>
      {/* Waitlist Form */}
      <div id="waitlist-form" className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 animate-fade-in-scroll">
            <h2 className="text-3xl font-bold text-center mb-4">Join the Waitlist</h2>
            <p className="text-gray-300 text-center mb-8">
              We're currently onboarding early users. Join now for early access and quoting priority.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all"
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all"
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company / Organization</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all"
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">What kind of parts do you usually get made?</label>
                <textarea
                  value={formData.partsDescription}
                  onChange={(e) => setFormData({...formData, partsDescription: e.target.value})}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400/50 transition-all"
                  disabled={loading}
                />
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="betaAccess"
                  checked={formData.betaAccess}
                  onChange={(e) => setFormData({...formData, betaAccess: e.target.checked})}
                  className="w-5 h-5 text-purple-400 bg-gray-800 border-gray-600 rounded focus:ring-purple-400/50"
                  disabled={loading}
                />
                <label htmlFor="betaAccess" className="text-sm">
                  I'm open to pilot invites or beta access
                </label>
              </div>
              {success && <div className="text-green-400 text-center font-semibold py-2">{success}</div>}
              {error && <div className="text-red-400 text-center font-semibold py-2">{error}</div>}
              <button
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-700 border border-purple-500/30 hover:border-purple-400/50 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Join the Waitlist →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}