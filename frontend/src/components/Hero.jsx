import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import ParticleNetwork from './ParticleNetwork';

const Hero = ({ settings }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: ["Boost your", "Brand with", "Amit."],
      subtitle: "Escape the fad and discover our creative services that will give authority to your brand.",
      image: "/images/hero-4.webp", 
      accentColor: "text-purple-600",
      borderColor: "border-purple-600"
    },
    {
      id: 2,
      title: ["Creative", "Digital", "Solutions."],
      subtitle: "Transforming ideas into digital reality with cutting-edge web development technologies.",
      image: "/images/hero-5.webp", 
      accentColor: "text-blue-500",
      borderColor: "border-blue-500"
    },
    {
      id: 3,
      title: ["Next Gen", "SEO", "Strategies."],
      subtitle: "Drive organic traffic and dominate search rankings with our data-driven SEO approach.",
      image: "/images/hero-4.webp", 
      accentColor: "text-green-500",
      borderColor: "border-green-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden flex items-center">
       {/* Background Noise/Gradient */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 z-0"></div>
       <ParticleNetwork />
       
      <div className="w-full px-4 lg:px-16 relative z-10 h-full">
        <AnimatePresence mode='wait'>
          <div key={currentSlide} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full min-h-[80vh] py-20 lg:py-0">
            
            {/* Left Content - Text */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative pl-4 lg:pl-8 order-2 lg:order-1"
            >
              {/* Decorative Line (Purple Border effect) */}
              <div className={`absolute top-[-20px] left-0 w-1 h-20 lg:h-32 ${slides[currentSlide].accentColor.replace('text', 'bg')}`}></div>
              <div className={`absolute top-[-20px] left-0 h-1 w-20 lg:w-32 ${slides[currentSlide].accentColor.replace('text', 'bg')}`}></div>

              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-[0.9] mb-6 lg:mb-8 tracking-tighter">
                {slides[currentSlide].title.map((line, index) => (
                  <span key={index} className={`block ${slides[currentSlide].accentColor}`}>
                    {line}
                  </span>
                ))}
              </h1>
              
              <p className="text-base md:text-xl text-gray-400 max-w-lg mb-8 lg:mb-10 leading-relaxed font-light border-l-2 border-gray-800 pl-4 lg:pl-6">
                {slides[currentSlide].subtitle}
              </p>

              <div className="flex items-center gap-4">
                 <a 
                   href="#contact" 
                   className={`group relative px-6 py-2 lg:px-8 lg:py-3 bg-transparent border-2 ${slides[currentSlide].borderColor} text-white font-bold tracking-wider uppercase transition-all duration-300 hover:${slides[currentSlide].accentColor.replace('text', 'bg')} hover:text-white text-sm lg:text-base`}
                 >
                   Get Started
                   <span className={`absolute -bottom-2 -right-2 w-full h-full border-b-2 border-r-2 ${slides[currentSlide].borderColor} opacity-50 group-hover:bottom-0 group-hover:right-0 transition-all duration-300`}></span>
                 </a>
              </div>
              
              {/* Slider Indicators */}
              <div className="flex gap-3 mt-8 lg:mt-12">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1 transition-all duration-300 ${
                      currentSlide === idx 
                        ? `w-12 ${slides[currentSlide].accentColor.replace('text', 'bg')}` 
                        : 'w-6 bg-gray-800'
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
            >
               {/* Changed to object-contain to ensure FULL image is visible without cropping */}
               <div className="relative w-full max-w-[500px] lg:max-w-full h-[400px] md:h-[500px] lg:h-[650px] flex items-center justify-center">
                 <img 
                   src={slides[currentSlide].image} 
                   alt="Hero Visual" 
                   className="w-full h-full object-contain drop-shadow-2xl" 
                 />
                 
                 {/* Floating Elements (Adjusted position) */}
                 <div className={`absolute top-0 right-0 w-12 h-12 lg:w-20 lg:h-20 border-2 ${slides[currentSlide].borderColor} opacity-50 rounded-full animate-pulse`}></div>
                 <div className={`absolute bottom-10 left-0 w-20 h-20 lg:w-32 lg:h-32 border border-white/20 rounded-full blur-xl bg-${slides[currentSlide].accentColor.split('-')[1]}-500/20`}></div>
               </div>
            </motion.div>

          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
