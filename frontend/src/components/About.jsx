import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = ({ settings }) => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image/Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
             <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
                 <img 
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                   alt="Team working" 
                   className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition duration-500"
                 />
                 <div className="absolute inset-0 bg-blue-900/30 mix-blend-overlay"></div>
              </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-2 block">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              ARE YOU A START-UP?
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-6 font-light">
              Are you looking for a Logo Design, Website, or Marketing Strategy? Then, you have landed on the right website.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              We specialize in working with Start-ups by giving them overall complete solutions. From Logo Design, Flyer, Brochure, Website Development to Digital Marketing and much more. We do it all!
              <br /><br />
              We also promote your brand and convey your message based on your target location to the target customers. Let's work together and take your idea forward.
            </p>

            <div className="flex flex-col space-y-3">
               <div className="flex items-center space-x-3">
                 <CheckCircle className="text-blue-500 flex-shrink-0" size={24} />
                 <span className="text-lg font-medium text-gray-300">Complete Brand Solutions</span>
               </div>
               <div className="flex items-center space-x-3">
                 <CheckCircle className="text-blue-500 flex-shrink-0" size={24} />
                 <span className="text-lg font-medium text-gray-300">Targeted Digital Marketing</span>
               </div>
               <div className="flex items-center space-x-3">
                 <CheckCircle className="text-blue-500 flex-shrink-0" size={24} />
                 <span className="text-lg font-medium text-gray-300">Modern & Responsive Design</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
