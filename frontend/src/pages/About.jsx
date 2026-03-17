import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Star, Quote } from 'lucide-react';
import ParticleNetwork from '../components/ParticleNetwork';
import Footer from '../components/Footer';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      
      {/* Hero Section */}
      <div className="relative h-[60vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background Noise/Gradient */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 z-0"></div>
        <ParticleNetwork />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-4 text-sm text-gray-400 uppercase tracking-widest">
            Home / About Us
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black tracking-tighter mb-6 text-purple-500">
            About Create with Amit
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Create with Amit is driven by creativity. We create innovative things to help you achieve better results and consolidate yourself in the market.
          </motion.p>
        </motion.div>
      </div>

      {/* Introducing Section */}
      <section className="py-20 bg-[#050505]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-start justify-between">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-4xl"
            >
              <h2 className="text-5xl md:text-7xl font-black mb-2 leading-tight">Introducing Amit</h2>
              <div className="w-16 h-2 bg-purple-600 mb-6"></div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Creative Agency in Port Blair</h3>
              <p className="text-gray-300 leading-relaxed text-xl mb-6 font-light">
                <span className="font-semibold text-white">Create with Amit</span> is a creative agency in Port Blair. We're a one-stop online solution for <span className="text-purple-500 font-semibold">Logo Design</span> to <span className="text-blue-500 font-semibold">Digital Marketing</span>, for people who look forward to making a pervasive impact in the realm of the internet. We offer a complete solution to your overall online needs, all under same roof.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-5/12 flex justify-center md:justify-end"
            >
              <div className="relative group">
                {/* Image Container */}
                <div className="relative w-72 h-72 md:w-96 md:h-96 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
                  <div className="absolute inset-0 bg-purple-600 rotate-6 rounded-3xl opacity-20 group-hover:rotate-12 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gray-800 -rotate-6 rounded-3xl opacity-40 group-hover:-rotate-12 transition-transform duration-700"></div>
                  <img 
                    src="/images/hero-5.webp" 
                    alt="Amit" 
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl border-2 border-gray-800"
                    onError={(e) => {
                      e.target.src = 'https://ui-avatars.com/api/?name=Amit&background=6200ea&color=fff&size=300';
                    }}
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-7/12"
            >
              <div className="mb-6">
                 <h4 className="text-purple-500 font-bold tracking-widest text-sm uppercase mb-2">Lead Creative Director</h4>
                 <h2 className="text-5xl md:text-7xl font-black text-white mb-6">Amit</h2>
                 <div className="w-20 h-2 bg-purple-600"></div>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-4 -left-6 text-purple-900/30 w-16 h-16 transform -scale-x-100" />
                <p className="text-gray-300 leading-relaxed mb-8 text-lg relative z-10 font-light">
                  As an energetic, ambitious person I have developed a mature and responsible approach to any task that I undertake. I have a proven track record in designing and web development, proficient in prioritizing and completing tasks in a timely manner. A team player who is attentive to detail and able to work in a fast-paced environment. I believe in managing efficiently by building strong relations with clients and employees alike.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8 mb-8 border-t border-gray-800 pt-8">
                 <div>
                    <span className="block text-gray-500 text-sm uppercase tracking-wider mb-1">Experience</span>
                    <span className="text-2xl font-bold text-white">12+ Years</span>
                 </div>
                 <div>
                    <span className="block text-gray-500 text-sm uppercase tracking-wider mb-1">Specialties</span>
                    <span className="text-xl font-bold text-white">Web Design, Branding, Strategy</span>
                 </div>
              </div>

               <motion.a 
                href="https://wa.me/919933288398"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full text-sm font-bold tracking-wide hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
              >
                <MessageCircle size={18} />
                <span>CHAT ON WHATSAPP</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us / Stats Section */}
      <section className="py-24 relative bg-[#0a0a0a] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1532298229144-0ec0c57e308e?q=80&w=2000&auto=format&fit=crop" 
            alt="Bicycle Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <ParticleNetwork />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Create with Amit?</h2>
            <h3 className="text-xl md:text-2xl text-gray-300 font-medium mb-6">Leading Creative Agency in Port Blair</h3>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
              Get to know a little of our history and the road we traveled that took us to the level we are today.
            </p>
          </div>

          {/* Mixed Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-black p-10 relative group border-l-[10px] border-t-[10px] border-purple-600 h-full"
            >
              <div className="mb-6 text-purple-600">
                <Star className="w-10 h-10 fill-current" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">No more boring Designs</h4>
              <p className="text-gray-400 text-base leading-relaxed">
                Nevertheless offering designs that are refreshing and out of the ordinary league.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ delay: 0.1 }}
              className="bg-black p-10 relative group border-l-[10px] border-t-[10px] border-purple-600 h-full"
            >
              <div className="mb-6 text-purple-600">
                <Star className="w-10 h-10 fill-current" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Respect client's decision</h4>
              <p className="text-gray-400 text-base leading-relaxed">
                Nothing is more important than a client's decision. In other words, we respect the same.
              </p>
            </motion.div>

            {/* Stat Item - Integrated into Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center justify-center h-full min-h-[300px]"
            >
              <h3 className="text-7xl font-bold text-white mb-2 tracking-tight">75%</h3>
              <p className="text-purple-600 text-xl font-medium tracking-wide">Repeat Clients</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ delay: 0.3 }}
              className="bg-black p-10 relative group border-l-[10px] border-t-[10px] border-purple-600 h-full"
            >
              <div className="mb-6 text-purple-600">
                <Star className="w-10 h-10 fill-current" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Ready to assist!</h4>
              <p className="text-gray-400 text-base leading-relaxed">
                Above all, Irrespective of whether you are a client or not, we will always help you.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ delay: 0.4 }}
              className="bg-black p-10 relative group border-l-[10px] border-t-[10px] border-purple-600 h-full"
            >
              <div className="mb-6 text-purple-600">
                <Star className="w-10 h-10 fill-current" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Innovate</h4>
              <p className="text-gray-400 text-base leading-relaxed">
                For instance, Artwork is incomplete if it is not innovative. We look forward to get the best for you.
              </p>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ delay: 0.5 }}
              className="bg-black p-10 relative group border-l-[10px] border-t-[10px] border-purple-600 h-full"
            >
              <div className="mb-6 text-purple-600">
                <Star className="w-10 h-10 fill-current" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Follow up!</h4>
              <p className="text-gray-400 text-base leading-relaxed">
                It is always good to know about your experience with us. We would like to focus on the shortcomings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Text Block */}
      <section className="py-16 bg-black border-t border-gray-900">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <p className="text-gray-500 text-xs leading-relaxed max-w-4xl mx-auto">
            There are no hard and fast rules to success, according to CREATE WITH AMIT. Rather, it's all about making the required improvements over time in order to keep the top spot. We have evolved as a unit that specializes in every single online necessity encountered by organizations and professionals, serving as a common home for Logo Design Port Blair, Website Design Port Blair, and Digital Marketing in Port Blair. Why do you want to work with us as your Creative Agency Partner? Our spectrum of operations is described as "fast development," which means that we are constantly striving to provide better and more complete solutions to our clients. We only think about working for customers and/or secure excellence and making the most of the assignments we've been given.
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
