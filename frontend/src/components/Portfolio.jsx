import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = ({ projects, galleryImages = [] }) => {
  // Use gallery images from admin content if available, otherwise use projects
  const displayItems = galleryImages.length > 0 
    ? galleryImages.map((img, idx) => ({ id: `gallery-${idx}`, image: img }))
    : (projects.length > 0 
        ? projects 
        : [1, 2, 3, 4, 5, 6, 7, 8].map(i => ({ 
            id: i, 
            title: 'Project ' + i, 
            image: null, 
            category: 'Web' 
          })));
  
  // Create a large pool of items for the infinite effect
  const marqueeItems = [...displayItems, ...displayItems, ...displayItems];

  const Row = ({ direction = "left", speed = 30, offset = 0 }) => (
    <div className="flex overflow-hidden mb-6 relative z-0">
      <motion.div
        className="flex gap-4"
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: speed 
        }}
        style={{ width: "fit-content", marginLeft: `${offset}px` }}
      >
        {marqueeItems.map((project, index) => (
          <div 
            key={`${project.id}-${index}-${offset}`} 
            className="w-[300px] h-[300px] flex-shrink-0 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 relative group"
          >
            {project.image ? (
              <img 
                src={project.image.startsWith('http') ? project.image : `http://localhost:8000${project.image}`} 
                alt={`Portfolio ${index}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-600">
                 {/* Placeholder for demo if no image */}
                 <div className="text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-gray-700/50 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold opacity-50">#{project.id}</span>
                    </div>
                    <span className="text-sm font-medium opacity-50 uppercase tracking-widest">Creative</span>
                 </div>
              </div>
            )}
            
            {/* Hover Overlay - Minimal */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              {project.url && (
                  <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white text-black rounded-full hover:bg-blue-500 hover:text-white transition transform hover:scale-110"
                  title="View Project"
                  >
                  <ExternalLink size={20} />
                  </a>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section id="portfolio" className="py-24 bg-black overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 mb-16 text-center relative z-10">
        <span className="text-blue-500 font-bold tracking-wider uppercase text-sm">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Glimpse of our Recent Creativity
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore our latest work and creative solutions designed for brands like yours.
        </p>
      </div>

      {/* 4 Rows of Infinite Marquee */}
      <div className="relative w-full">
        {/* Gradient Edges for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
        
        <Row direction="left" speed={40} />
        <Row direction="right" speed={45} />
        <Row direction="left" speed={35} />
        <Row direction="right" speed={50} />
      </div>
    </section>
  );
};

export default Portfolio;
