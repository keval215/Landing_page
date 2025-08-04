import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
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

      {/* --- HERO SECTION: CHANGES BELOW --- */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-24 sm:pt-32 pb-16 relative z-10">
        <div className="text-center">
        
          {/* This is the new rectangular block for the headline */}
          <div className="bg-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 sm:p-12 shadow-2xl shadow-purple-500/10 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent [text-shadow:0_4px_20px_rgba(0,0,0,0.3)] leading-tight">
              Tired of waiting weeks to get your parts manufactured?
            </h1>
          </div>

          {/* Subheading with adjusted margin */}
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mt-8 leading-relaxed animate-fade-in-delay">
            We are building the platform we wished existed. Just like quick commerce, we are going to make quick manufacturing a real thing.
          </p>
          
          {/* The "Join Waitlist" button has been removed from this section */}

        </div>
      </div>
      {/* --- END OF HERO SECTION CHANGES --- */}

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