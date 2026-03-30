import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import axios from 'axios';
import ParticleNetwork from '../components/ParticleNetwork';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // Using the API service with proper error handling
      const response = await axios.post('http://localhost:8000/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      console.log('Contact form submitted successfully:', response.data);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact form submission error:', error);
      setStatus('error');
      setErrorMessage(error.response?.data?.message || 'Failed to send message. Please try again.');
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: "+91 99332 88398",
      link: "tel:+919933288398"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: "createwithamit@gmail.com",
      link: "mailto:createwithamit@gmail.com"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      details: "Port Blair, Andaman & Nicobar Islands",
      link: "https://maps.google.com/?q=Port+Blair"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20 font-sans">
      {/* Hero Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-purple-900/20 to-transparent"></div>
           <ParticleNetwork />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="text-4xl md:text-6xl font-bold mb-6"
           >
             Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Touch</span>
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2, duration: 0.6 }}
             className="text-gray-400 max-w-2xl mx-auto text-lg"
           >
             Have a project in mind or just want to say hi? We'd love to hear from you.
           </motion.p>
        </div>
      </section>

      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold mb-6">Let's Discuss Your Project</h2>
              <p className="text-gray-400 leading-relaxed">
                We are always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              
              <div className="grid gap-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-[#12121a] rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors">
                    <div className="p-3 bg-purple-900/20 rounded-lg text-purple-500">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <a href={item.link} className="text-gray-400 hover:text-white transition-colors">
                        {item.details}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#12121a] p-8 md:p-10 rounded-2xl border border-gray-800 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-900/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400 mb-6">Thank you for contacting us. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Your Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-500 bg-red-900/10 p-4 rounded-lg">
                      <AlertCircle size={20} />
                      <span className="text-sm">{errorMessage}</span>
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
