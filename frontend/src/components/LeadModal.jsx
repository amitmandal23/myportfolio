import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import api from '../services/api';

const LeadModal = ({ isOpen, onClose, serviceName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceName || '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Update service field when serviceName prop changes
  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      service: serviceName || ''
    }));
  }, [serviceName]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Prepare data for backend - map to Contact model fields
      const contactData = {
        name: formData.name,
        email: formData.email,
        subject: `Lead Inquiry: ${formData.service}`,
        message: `Phone: ${formData.phone}\n\nService Interest: ${formData.service}\n\nMessage:\n${formData.message}`
      };

      console.log('Submitting inquiry:', contactData);
      
      const response = await api.post('/contact', contactData);
      console.log('Response:', response);
      
      setSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: serviceName || '',
          message: ''
        });
        onClose();
      }, 2000);
    } catch (err) {
      console.error('Full error:', err);
      const errorMessage = err.response?.data?.message || err.message || 'Failed to submit inquiry. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md relative overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-4 text-white">
          <h3 className="text-xl font-bold">Service Inquiry</h3>
          <p className="text-sm text-purple-100 mt-1">Get in touch with us</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4 text-sm">
              ✓ Thank you! We'll contact you soon.
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="john@example.com"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="+91 98765 43210"
            />
          </div>

          {/* Service Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Service Interested In
            </label>
            <input
              type="text"
              name="service"
              value={formData.service}
              className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 font-semibold bg-gray-100 cursor-not-allowed"
              readOnly
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              placeholder="Tell us more about your requirements..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded font-bold text-white transition-all ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-purple-600 hover:bg-purple-700'
            }`}
          >
            {loading ? 'Submitting...' : 'Submit Inquiry'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadModal;
