import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Video, Search, PenTool, Smartphone, Camera, ArrowRight, Image as ImageIcon } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: "Logo Design",
      description: "Using design principles, we accordingly construct your brand with your target audience in mind.",
      icon: <PenTool size={32} />,
      accent: "top-left"
    },
    {
      id: 2,
      title: "Graphics Designing",
      description: "Increase your sales with our incredible creative designs for digital and print media.",
      icon: <Layout size={32} />,
      accent: ""
    },
    {
      id: 3,
      title: "Wedding Album Design",
      description: "Capturing your special moments in beautifully designed albums that last a lifetime.",
      icon: <ImageIcon size={32} />,
      accent: ""
    },
    {
      id: 4,
      title: "Website Development",
      description: "We create excellent and responsive websites that are search engine optimised using modern technologies.",
      icon: <Code size={32} />,
      accent: ""
    },
    {
      id: 5,
      title: "Digital Marketing",
      description: "We work with the greatest marketing channels available today to promote your company.",
      icon: <Smartphone size={32} />,
      accent: ""
    },
    {
      id: 6,
      title: "SEO",
      description: "Drive organic traffic and dominate search rankings with our data-driven SEO approach.",
      icon: <Search size={32} />,
      accent: "bottom-right"
    }
  ];

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 relative">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "100px" }}
               transition={{ duration: 0.8 }}
               className="h-1 bg-blue-600 mb-6"
             ></motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              What <span className="text-blue-600">We Offer?</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0a0a0a] p-10 relative group overflow-hidden transition-all duration-300 hover:bg-[#111]"
            >
                {/* Corner Accents */}
                {index === 0 && (
                    <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-purple-600"></div>
                )}
                {index === servicesList.length - 1 && (
                    <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-purple-600"></div>
                )}

              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6 text-purple-500 group-hover:text-purple-400 transition-colors duration-300 transform group-hover:scale-110">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">{service.title}</h3>
                
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                <div className="mt-auto">
                    <button className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-500 group-hover:border-purple-500 group-hover:text-purple-500 transition-all duration-300">
                        <ArrowRight size={18} />
                    </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
