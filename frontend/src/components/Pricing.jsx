import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, PenTool, Globe, Gauge } from 'lucide-react';
import LeadModal from './LeadModal';

const Pricing = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const plans = [
    {
      id: 1,
      title: "Logo Design",
      icon: <PenTool size={48} className="text-purple-600" />,
      subtitle: "Limited Time offer",
      price: "₹1999",
      features: [
        "Total 8 Concepts based on your requirement",
        "First Draft of 4 Concepts in 24-48 Hrs",
        "Unlimited times of revision",
        "100% Satisfaction Guaranteed",
        "Multiple formats such as AI, EPS, PSD, PNG, JPG, PDF, TIFF with fonts."
      ],
      accentClass: "border-l-[6px] border-purple-600"
    },
    {
      id: 2,
      title: "Website Development",
      icon: <Globe size={48} className="text-purple-600" />,
      subtitle: "Starting at",
      price: "₹17999",
      features: [
        "Fully Responsive Web Design",
        "WordPress Platform & Backend",
        "Using Paid theme from ThemeForest",
        "All creative designs are included",
        "Domain & Hosting cost not included"
      ],
      accentClass: ""
    },
    {
      id: 3,
      title: "Digital Marketing",
      icon: <Gauge size={48} className="text-purple-600" />,
      subtitle: "Starting at",
      price: "₹7999",
      features: [
        "Facebook Marketing & Promotion",
        "Google Adwords Management",
        "Creative Post Designs included",
        "Addon: Instagram, Youtube, LinkedIn",
        "Google Fees & FB Post Boosting cost extra"
      ],
      accentClass: "border-r-[6px] border-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-8 text-purple-600 tracking-tight"
          >
            Solution & Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 leading-relaxed text-sm md:text-base"
          >
            Choose the ideal plan for what you need. We work with affordable prices for all types of pocket. Wondering why you should hire NGX as your Branding Partner? This is because our range of activities is in the parlance rapid development. It fosters towards providing better and overall complete solutions to the clients. Working for clients under strict deadlines and making the most of the allotted projects is all we care about. NEXTGEN EXPERTS gives you a journey that would write the ultimate success story for your website.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-[#0f1115] p-0 relative flex flex-col h-full ${plan.accentClass}`}
            >
              {/* Card Header */}
              <div className="flex flex-col items-center text-center pt-10 pb-6 px-6">
                <div className="mb-6">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <span className="text-gray-400 text-sm mb-2 block">{plan.subtitle}</span>
                
                <div className="w-full max-w-[200px] border border-gray-700 rounded-full py-3 px-6 mb-2">
                  <span className="text-4xl font-black text-purple-600 block">{plan.price}</span>
                </div>
              </div>

              {/* Features List */}
              <div className="px-8 pb-8 flex-grow">
                <div className="flex flex-col">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex justify-between items-start py-4 border-b border-gray-800 last:border-0">
                      <span className="text-gray-400 text-sm text-left pr-4 leading-relaxed">{feature}</span>
                      <Check size={16} className="text-gray-500 mt-1 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Enquire Button */}
              <div className="px-8 pb-10 text-center mt-auto">
                 <button 
                   onClick={() => {
                     setSelectedService(plan.title);
                     setModalOpen(true);
                   }}
                   className="bg-[#6200ea] hover:bg-[#5000c0] text-white font-bold py-3 px-10 transition-colors uppercase text-sm tracking-wide"
                 >
                   Enquire Now
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lead Inquiry Modal */}
      <LeadModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        serviceName={selectedService}
      />
    </section>
  );
};

export default Pricing;
