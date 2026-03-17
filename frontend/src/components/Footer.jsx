import React from 'react';
import { Facebook, Linkedin, Phone, Mail, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const socialHover = {
    scale: 1.2,
    transition: { type: "spring", stiffness: 300 }
  };

  return (
    <footer className="bg-[#111] text-white pt-20 pb-6 border-t border-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Column 1: Logo & Social */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex flex-col items-start">
              {/* Logo Simulation */}
              <div className="relative">
                <h1 className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500">
                  Create with Amit
                </h1>
                <p className="text-[10px] tracking-[0.2em] text-pink-500 font-bold mt-1 uppercase">
                  Digital Solutions
                </p>
              </div>
            </div>
            <div className="flex space-x-4 pt-4">
              <motion.a 
                href="#" 
                className="text-blue-600 hover:text-blue-500"
                whileHover={socialHover}
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a 
                href="#" 
                className="text-blue-700 hover:text-blue-600"
                whileHover={socialHover}
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2: Get in Touch */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-bold text-white">Get in Touch</h3>
            <div className="space-y-4">
              <a href="tel:+919933288398" className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors">
                <Phone size={18} />
                <span>+91 99332 88398</span>
              </a>
              <a href="mailto:info@createwithamit.com" className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors">
                <Mail size={18} />
                <span>info@createwithamit.com</span>
              </a>
              <motion.a 
                href="https://wa.me/919933288398"
                className="inline-flex items-center space-x-2 bg-[#6200ea] hover:bg-[#7c4dff] text-white px-6 py-3 font-bold uppercase tracking-wider text-sm transition-colors mt-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-bold text-white">Services</h3>
            <ul className="space-y-3">
              {['Logo Design', 'Graphics Design', 'Website Development', 'Digital Marketing'].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Popular Tags */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-bold text-white">Popular Tags</h3>
            <div className="flex flex-col space-y-3">
              {[
                'Logo Design Port Blair',
                'Web Design Company in Port Blair',
                'Facebook Marketing Port Blair',
                'Digital Marketing Company in Port Blair'
              ].map((tag, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="border border-gray-700 text-gray-400 px-4 py-2 text-sm hover:border-purple-500 hover:text-purple-400 transition-colors inline-block text-center"
                >
                  {tag}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mb-4 md:mb-0">
            Logo Design Port Blair | Digital Marketing Port Blair
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <span>Create with Amit | 2025 - 2026</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms and Conditions</a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919933288398"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Chat on WhatsApp"
      >
        <MessageCircle size={32} />
      </motion.a>
    </footer>
  );
};

export default Footer;
