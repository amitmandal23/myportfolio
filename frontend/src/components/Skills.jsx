import React from 'react';
import { motion } from 'framer-motion';
import { Code, PenTool } from 'lucide-react';
import CircuitBackground from './CircuitBackground';

const Skills = () => {
  const skillCategories = [
    {
      id: "graphics",
      title: "Graphics Design",
      icon: <PenTool className="w-8 h-8 text-purple-400" />,
      description: "Crafting visual stories with precision and creativity.",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      id: "dev",
      title: "Development",
      icon: <Code className="w-8 h-8 text-blue-400" />,
      description: "Building scalable, high-performance web solutions.",
      tools: ["React", "HTML", "CSS", "Bootstrap", "Tailwind", "WordPress", "JavaScript", "MySQL", "MongoDB", "jQuery", "Laravel"]
    }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
       {/* Background Noise */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
       <CircuitBackground />
       
       <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side: Header */}
          <div className="w-full lg:w-1/3 sticky top-24">
             <motion.span 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-blue-400 font-bold tracking-wider uppercase text-sm"
             >
               My Expertise
             </motion.span>
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-4xl md:text-5xl font-black mt-2 mb-6 tracking-tight"
             >
               Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Tools</span>
             </motion.h2>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-gray-400 leading-relaxed mb-8 text-lg"
             >
               I constantly update my skills to stay ahead in the tech world. Here are some of the key technologies and tools I work with.
             </motion.p>
             <motion.a 
               href="#portfolio" 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="inline-block bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-transform hover:scale-105"
             >
               See My Work
             </motion.a>
          </div>

          {/* Right Side: Skills Grid */}
          <div className="w-full lg:w-2/3">
             <div className="grid grid-cols-1 gap-8">
               {skillCategories.map((category, index) => (
                 <motion.div 
                   key={category.id}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.2 }}
                   className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition duration-300"
                 >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{category.title}</h3>
                        <p className="text-gray-500 text-sm">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {category.tools.map((tool, i) => (
                        <motion.span 
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + (i * 0.05) }}
                          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white border border-gray-700 hover:border-gray-600 transition-colors cursor-default text-sm font-medium"
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
