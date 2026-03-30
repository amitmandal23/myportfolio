import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import api from '../services/api';

const Contact = ({ settings }) => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      console.log('Submitting contact form:', form);
      const response = await api.post('/contact', form, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      console.log('Contact form response:', response.data);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      console.error('Contact form error:', error);
      console.error('Error response:', error.response?.data);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
             <div className="space-y-6">
                <div className="flex items-start space-x-4">
                   <div className="bg-gray-800 p-3 rounded-xl text-blue-500">
                      <Mail size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold text-white">Email</h4>
                      <p className="text-gray-400">{settings.contact_email || 'hello@example.com'}</p>
                   </div>
                </div>

                <div className="flex items-start space-x-4">
                   <div className="bg-gray-800 p-3 rounded-xl text-green-500">
                      <Phone size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold text-white">Phone</h4>
                      <p className="text-gray-400">{settings.contact_phone || '+1 234 567 890'}</p>
                   </div>
                </div>

                <div className="flex items-start space-x-4">
                   <div className="bg-gray-800 p-3 rounded-xl text-purple-500">
                      <MapPin size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold text-white">Location</h4>
                      <p className="text-gray-400">{settings.contact_address || 'New York, USA'}</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-gray-900 p-8 md:p-10 rounded-3xl shadow-lg border border-gray-800"
             >
                <h3 className="text-2xl font-bold mb-6 text-white">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                         <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                         <input 
                           type="text" 
                           value={form.name}
                           onChange={e => setForm({...form, name: e.target.value})}
                           className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition bg-gray-800 text-white placeholder-gray-500"
                           required
                         />
                      </div>
                      <div>
                         <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                         <input 
                           type="email" 
                           value={form.email}
                           onChange={e => setForm({...form, email: e.target.value})}
                           className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition bg-gray-800 text-white placeholder-gray-500"
                           required
                         />
                      </div>
                   </div>
                   
                   <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                      <input 
                        type="text" 
                        value={form.subject}
                        onChange={e => setForm({...form, subject: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition bg-gray-800 text-white placeholder-gray-500"
                        required
                      />
                   </div>

                   <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                      <textarea 
                        rows="4"
                        value={form.message}
                        onChange={e => setForm({...form, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition bg-gray-800 text-white placeholder-gray-500 resize-none"
                        required
                      ></textarea>
                   </div>

                   <button 
                     type="submit" 
                     disabled={loading}
                     className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                   >
                     {loading ? (
                        <>
                          <Loader2 className="animate-spin" /> Sending...
                        </>
                     ) : (
                        <>
                          <Send size={20} /> Send Message
                        </>
                     )}
                   </button>

                   {status === 'success' && (
                     <p className="text-green-400 text-center font-medium mt-4">Message sent successfully!</p>
                   )}
                   {status === 'error' && (
                     <p className="text-red-400 text-center font-medium mt-4">Failed to send message. Please try again.</p>
                   )}
                </form>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
