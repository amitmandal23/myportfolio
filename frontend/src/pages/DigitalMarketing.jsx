import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, MessageCircle, Star, Smartphone, Globe, BarChart, Target, Search, Share2, TrendingUp, Users, PieChart, ChevronDown, ExternalLink, Instagram, Facebook, Youtube, Linkedin, Monitor } from 'lucide-react';
import ParticleNetwork from '../components/ParticleNetwork';
import Footer from '../components/Footer';

const DigitalMarketing = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Logic for scrolling rows (Infinite Marquee)
  const marketingProjects = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    title: `Campaign ${i + 1}`,
    category: i % 2 === 0 ? 'Social Media' : 'PPC'
  }));
  
  const marqueeItems = [...marketingProjects, ...marketingProjects, ...marketingProjects, ...marketingProjects];

  const Row = ({ direction = "left", speed = 30, offset = 0, size = "large" }) => {
    // Determine dimensions based on size prop
    const getDimensions = () => {
      switch (size) {
        case "large": return { width: 300, height: 300 };
        case "medium": return { width: 220, height: 220 };
        case "small": return { width: 160, height: 160 };
        case "smallest": return { width: 120, height: 120 };
        default: return { width: 300, height: 300 };
      }
    };

    const { width, height } = getDimensions();

    return (
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
            className={`flex-shrink-0 bg-[#120a1f] rounded-xl overflow-hidden border border-purple-900/30 relative group hover:border-purple-500 transition-colors`}
            style={{ width: `${width}px`, height: `${height}px` }}
          >
             <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                <div className="text-center p-2 md:p-4 w-full">
                   <div className="mx-auto mb-2 flex items-center justify-center border border-purple-500/30 rounded-full bg-purple-900/20"
                        style={{ width: `${width * 0.3}px`, height: `${width * 0.3}px` }}>
                       <span className="font-bold text-purple-500" style={{ fontSize: `${width * 0.12}px` }}>DM{project.id + 1}</span>
                   </div>
                   {size !== "smallest" && (
                     <>
                       <h4 className="text-white font-bold mb-1 truncate px-2" style={{ fontSize: `${Math.max(10, width * 0.06)}px` }}>{project.title}</h4>
                       {size !== "small" && (
                         <span className="text-gray-500 uppercase tracking-widest block truncate" style={{ fontSize: `${Math.max(8, width * 0.04)}px` }}>{project.category}</span>
                       )}
                     </>
                   )}
                </div>
             </div>
             
             {/* Hover Overlay */}
             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-2 md:p-3 bg-white text-black rounded-full hover:bg-purple-500 hover:text-white transition transform hover:scale-110 cursor-pointer">
                  <ExternalLink size={Math.max(14, width * 0.08)} />
                </div>
             </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20 font-sans">
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-black overflow-hidden">
         <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-purple-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
            <ParticleNetwork />
         </div>

         <div className="w-full px-4 md:px-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
               <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-1/2 relative"
               >
                  <div className="relative aspect-[3/4] md:w-[400px] mx-auto overflow-hidden rounded-2xl shadow-2xl border border-purple-900/50">
                     <img 
                       src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                       alt="Online Marketing" 
                       className="w-full h-full object-cover opacity-80"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                     <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-purple-500/50"
                     >
                        <div className="flex items-center gap-3">
                           <div className="p-2 bg-blue-600 rounded-full">
                              <TrendingUp size={20} className="text-white" />
                           </div>
                           <div>
                              <p className="text-xs text-gray-400 uppercase tracking-wider">Results</p>
                              <p className="font-bold text-white">Proven Growth</p>
                           </div>
                        </div>
                     </motion.div>
                  </div>
               </motion.div>

               <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-1/2 text-center md:text-right"
               >
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100px" }}
                    className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mb-6 ml-auto"
                  ></motion.div>
                  
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                     Online <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Marketing</span>
                  </h1>
                  
                  <p className="text-gray-400 text-lg mb-8 max-w-lg ml-auto leading-relaxed">
                     Connect with Create with Amit. We give wings to your stories and make you fly high with our Digital Marketing & Analytical Marketing Strategy.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-end">
                     <a href="#services" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                        View Packages <ArrowRight size={20} />
                     </a>
                     <a href="https://wa.me/919933288398" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border border-gray-700 rounded-full font-bold text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                        <MessageCircle size={20} /> Consult Now
                     </a>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Intro Section - Full-stack Online Brand Promotion */}
      <section className="py-20 relative bg-[#0a0a0a]">
         <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
               <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={fadeInUp}
                 className="w-full md:w-1/2"
               >
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                     Full-stack Online <br />
                     <span className="text-gray-500">Brand Promotion</span> <br />
                     in Port Blair
                  </h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                     It is often said that content is king. We completely agree, but we also believe that distribution is queen. We help you create compelling content and distribute it to the right audience at the right time. At Create with Amit, we manage your brand's online presence and ensure it reaches the maximum number of potential customers.
                  </p>
                  
                  <div className="mt-8">
                     <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <span className="p-2 bg-purple-900/30 rounded-lg text-purple-500"><Star size={24} /></span>
                        Why Choose Us for Digital Marketing?
                     </h3>
                     <p className="text-gray-400 mb-6">
                        We don't just run ads; we build brands. Our data-driven approach ensures that every penny you spend yields the best possible ROI. We analyze, optimize, and scale your campaigns to drive consistent growth for your business.
                     </p>
                  </div>
               </motion.div>
               
               <motion.div 
                 className="w-full md:w-1/2"
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
               >
                  <div className="relative">
                     <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-30 blur-xl"></div>
                     <img 
                       src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                       alt="Digital Strategy" 
                       className="relative rounded-2xl shadow-2xl border border-gray-800 grayscale hover:grayscale-0 transition-all duration-500"
                     />
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* How Brand Promotion Works */}
      <section className="py-20 bg-black relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  How <span className="text-purple-500">Brand Promotion</span> Works!
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
               {[
                 { step: "01", title: "Creative Concept", desc: "We brainstorm and develop unique concepts that resonate with your target audience.", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80" },
                 { step: "02", title: "Content Strategy", desc: "We plan a content calendar that ensures consistent and engaging communication.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80" },
                 { step: "03", title: "Audience Targeting", desc: "We identify and target specific demographics to maximize campaign effectiveness.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80" },
                 { step: "04", title: "Performance Analysis", desc: "We continuously monitor and analyze campaign performance to optimize results.", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80" }
               ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative group overflow-hidden rounded-2xl h-64 border border-gray-800"
                  >
                     <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-20 transition-opacity" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 flex flex-col justify-end">
                        <div className="text-5xl font-bold text-purple-900/50 mb-2">Step #{item.step}</div>
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Service Categories (Logos) */}
      <section id="services" className="py-12 bg-[#0a0f1f] border-y border-gray-800">
         <div className="max-w-7xl mx-auto px-4 text-center">
             <h3 className="text-xl font-bold mb-8 text-gray-300">
               Our Digital Marketing Port Blair services are categorized into these distinct offerings:
             </h3>
             <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                <div className="flex items-center gap-2 text-2xl font-bold text-white"><Globe className="text-blue-500" /> Meta</div>
                <div className="flex items-center gap-2 text-2xl font-bold text-white"><Facebook className="text-blue-600" /> Facebook</div>
                <div className="flex items-center gap-2 text-2xl font-bold text-white"><Instagram className="text-pink-500" /> Instagram</div>
                <div className="flex items-center gap-2 text-2xl font-bold text-white"><Search className="text-green-500" /> Google</div>
                <div className="flex items-center gap-2 text-2xl font-bold text-white"><Youtube className="text-red-600" /> YouTube</div>
             </div>
         </div>
      </section>

      {/* Social Media Marketing Section */}
      <section className="py-20 bg-black">
         <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
               <motion.div 
                 className="w-full md:w-1/2"
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
               >
                  <div className="bg-[#18181b] p-6 rounded-2xl border border-gray-800 relative">
                      <div className="flex items-center gap-4 mb-4 border-b border-gray-700 pb-4">
                         <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">f</div>
                         <div>
                            <div className="font-bold">Marketing on Facebook</div>
                            <div className="text-xs text-gray-400">Sponsored • Paid Partnership</div>
                         </div>
                      </div>
                      <div className="bg-gray-800 h-48 rounded-lg mb-4 overflow-hidden relative group">
                        <img 
                          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                          alt="Facebook Ad Creative" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                      </div>
                      <div className="space-y-2">
                         <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                         <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                      </div>
                      <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded font-bold">Learn More</button>
                  </div>
               </motion.div>

               <motion.div 
                 className="w-full md:w-1/2 space-y-8"
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
               >
                  <div className="flex gap-4">
                     <div className="p-3 bg-purple-900/20 rounded-xl h-fit text-purple-500"><Target size={24} /></div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2">Creating Awareness</h3>
                        <p className="text-gray-400 text-sm">Create instant awareness with potential customers through targeted campaigns.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="p-3 bg-blue-900/20 rounded-xl h-fit text-blue-500"><Users size={24} /></div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2">Widening Engagement</h3>
                        <p className="text-gray-400 text-sm">Engage with a broader audience and build a community around your brand.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="p-3 bg-green-900/20 rounded-xl h-fit text-green-500"><TrendingUp size={24} /></div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2">Stimulating Reach</h3>
                        <p className="text-gray-400 text-sm">Maximize your reach and visibility across various social media platforms.</p>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* What We Do - Circular Process */}
      <section className="py-20 bg-white text-black relative">
         <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="w-full md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Team" 
                    className="rounded-2xl shadow-xl"
                  />
               </div>
               <div className="w-full md:w-2/3">
                  <h2 className="text-3xl font-bold mb-8 text-center md:text-left">What Create with Amit will do on behalf of you?</h2>
                  
                  {/* Custom Circular Layout Approximation */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-6">
                      {[
                        { title: "Create High End Content", color: "bg-cyan-400" },
                        { title: "Target Right Audience", color: "bg-pink-400" },
                        { title: "Monitor & Analyze Campaign", color: "bg-purple-500" },
                        { title: "Competitive Analysis", color: "bg-blue-600" },
                        { title: "Valuable Insights", color: "bg-green-500" }
                      ].map((item, i) => (
                         <div key={i} className={`${item.color} text-white w-32 h-32 rounded-full flex items-center justify-center text-center p-4 shadow-lg transform hover:scale-110 transition-transform font-bold text-sm`}>
                            {item.title}
                         </div>
                      ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Google Ads Section */}
      <section className="py-20 bg-[#0f0f15]">
         <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
               <motion.div 
                 className="w-full md:w-1/2"
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
               >
                  <div className="relative">
                     <div className="absolute -inset-4 bg-blue-500/20 blur-xl rounded-full"></div>
                     <img 
                       src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                       alt="Google Ads" 
                       className="relative rounded-2xl shadow-2xl border border-gray-800"
                     />
                  </div>
               </motion.div>

               <motion.div 
                 className="w-full md:w-1/2 space-y-8"
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
               >
                  <div className="flex gap-4 group">
                     <div className="p-3 bg-gray-800 rounded-xl h-fit text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors"><Search size={24} /></div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2">Search Advertisement</h3>
                        <p className="text-gray-400 text-sm">Appear at the top of search results when customers look for your products.</p>
                     </div>
                  </div>
                  <div className="flex gap-4 group">
                     <div className="p-3 bg-gray-800 rounded-xl h-fit text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors"><Monitor size={24} /></div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2">Display Advertisement</h3>
                        <p className="text-gray-400 text-sm">Reach customers across millions of websites and apps with engaging visuals.</p>
                     </div>
                  </div>
                  <div className="flex gap-4 group">
                     <div className="p-3 bg-gray-800 rounded-xl h-fit text-pink-400 group-hover:bg-pink-600 group-hover:text-white transition-colors"><Share2 size={24} /></div>
                     <div>
                        <h3 className="text-xl font-bold text-white mb-2">Remarketing Advertisement</h3>
                        <p className="text-gray-400 text-sm">Re-engage users who have previously visited your website or app.</p>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Portfolio Slider Section */}
      <section className="py-20 bg-black relative">
         <div className="w-full px-4 mb-12 text-center">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-3xl md:text-5xl font-bold mb-4"
            >
               Glimpse of our <br />
               <span className="text-purple-500">Social Media Creatives</span>
            </motion.h2>
            <p className="text-red-500 font-medium">Top number of conversion delivering design guaranteed here!</p>
         </div>
         
         <div className="relative">
            {/* Gradient Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
            
            <Row direction="left" speed={40} size="large" />
            <Row direction="right" speed={45} size="medium" />
            <Row direction="left" speed={35} size="small" />
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0a0a0a]">
         <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-500">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
               {/* Column 1 */}
               <div className="space-y-8">
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> Which social media platforms are best?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        It depends on your target audience. We help you identify the best platforms for your business.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> How do you measure success?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        We use KPIs like reach, engagement, conversions, and ROI to measure campaign success.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> Do you create content also?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        Yes, we have a dedicated team for content creation including graphics and copy.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> What is the minimum budget required?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        We work with budgets of all sizes and tailor strategies to maximize your spend.
                     </p>
                  </div>
               </div>

               {/* Column 2 */}
               <div className="space-y-8">
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> Can you help with Google Ads?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        Yes, we are experts in setting up and managing high-converting Google Ads campaigns.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> Do I get reports?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        Yes, we provide detailed weekly and monthly performance reports.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> How long to see results?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        Some campaigns show immediate results (PPC), while SEO and organic growth take time.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> Why Create with Amit for Marketing?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        We combine creativity with data to deliver results that matter to your bottom line.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
         href="https://wa.me/919933288398"
         target="_blank"
         rel="noopener noreferrer"
         className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
      >
         <MessageCircle size={24} />
      </a>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
