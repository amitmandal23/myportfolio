import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, MessageCircle, Star, Smartphone, Globe, BarChart, Target, Search, Share2, TrendingUp, Users, PieChart, ChevronDown, ExternalLink, Code, Layout, ShoppingCart, Server, Settings, PenTool, Layers, Zap } from 'lucide-react';
import ParticleNetwork from '../components/ParticleNetwork';
import Footer from '../components/Footer';
import usePageContent from '../hooks/usePageContent';

const WebsiteDevelopment = () => {
  const defaultContent = {
      Hero: {
          title: 'Website Development in Port Blair',
          subtitle: 'We create creative websites that are highly skilled in developing digital experiences that are fast and secure, offering web, digital and creative solutions.',
          image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          badge: 'Modern & Fast'
      },
      Intro: {
          title: 'Create with Amit is a full-service Digital Media agency offering web, digital and creative solutions.',
          description: 'Whether you are starting a new venture or establishing an online presence for your existing business, going to any kind of web development company in Port Blair for your product needs enhancement that fits you and your goals.',
          image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      Platforms: {
          title: 'Web Development Platforms',
          subtitle: 'We specialize in both Custom Website Development and WordPress CMS solutions to build scalable, secure, and high-performance websites.',
          cardTitle: 'Custom & WordPress Development',
          cardDescription: 'Whether you need a fully custom-coded website using modern frameworks like React & Node.js, or a flexible Content Management System like WordPress, we deliver tailored solutions. Our agile approach ensures your website is fast, secure, and perfectly aligned with your business goals, from simple portfolios to complex web applications. We take accountability from start to finish regarding your product management.',
          cardImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
  };

  const { content } = usePageContent('WebsiteDevelopment', defaultContent);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Logic for scrolling rows (Infinite Marquee)
  const webProjects = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    title: `Web Project ${i + 1}`,
    category: 'Development'
  }));
  
  const marqueeItems = [...webProjects, ...webProjects, ...webProjects, ...webProjects];

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
                       <span className="font-bold text-purple-500" style={{ fontSize: `${width * 0.12}px` }}>WD{project.id + 1}</span>
                   </div>
                   {size !== "smallest" && (
                     <>
                       <h4 className="text-white font-bold mb-1 truncate px-2" style={{ fontSize: `${Math.max(10, width * 0.06)}px` }}>{project.title}</h4>
                       <span className="text-gray-500 uppercase tracking-widest block truncate" style={{ fontSize: `${Math.max(8, width * 0.04)}px` }}>{project.category}</span>
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
               {/* Left: Image (per reference) */}
               <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-1/2 relative order-2 md:order-1"
               >
                  <div className="relative aspect-[3/4] md:w-[450px] mx-auto">
                     <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent z-10 mix-blend-overlay"></div>
                        <img 
                          src={content.Hero.image}
                          alt="Website Development" 
                          className="w-full h-full object-cover opacity-90"
                        />
                     </div>
                     
                     {/* Floating Badge */}
                     <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="absolute bottom-12 -right-6 md:-right-12 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-purple-500/50 z-20 shadow-lg"
                     >
                        <div className="flex items-center gap-3">
                           <div className="p-2 bg-purple-600 rounded-full">
                              <Code size={20} className="text-white" />
                           </div>
                           <div>
                              <p className="text-xs text-gray-400 uppercase tracking-wider">Tech Stack</p>
                              <p className="font-bold text-white">{content.Hero.badge}</p>
                           </div>
                        </div>
                     </motion.div>
                  </div>
               </motion.div>

               {/* Right: Content (per reference) */}
               <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-1/2 text-left order-1 md:order-2"
               >
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                     {content.Hero.title.includes('Development') ? (
                         <>
                            Website <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Development</span> <br />
                            in Port Blair
                         </>
                     ) : (
                        content.Hero.title
                     )}
                  </h1>
                  
                  <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                     {content.Hero.subtitle}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                     <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                        View Projects <ArrowRight size={20} />
                     </a>
                     <a href="https://wa.me/919933288398" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent border border-gray-700 rounded-full font-bold text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                        <MessageCircle size={20} /> Request Quote
                     </a>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 relative bg-[#0a0a0a]">
         <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
               <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={fadeInUp}
                 className="w-full md:w-1/2"
               >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                     Create with Amit is a full-service <br />
                     <span className="text-gray-500">Digital Media agency</span> <br />
                     offering web, digital <br />
                     and creative solutions.
                  </h2>
                  <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                     Whether you are starting a new venture or establishing an online presence for your existing business, going to any kind of web development company in Port Blair for your product needs enhancement that fits you and your goals.
                     <br /><br />
                     Create with Amit offers you a standard Website Development Service. With our experience and expertise in your service, you can expect nothing less than perfection for your users. Right from scratch, we create our own website along with providing you with a CMS for self-management, so that the users' experience is not compromised.
                  </p>
                  
                  <div className="mt-8">
                     <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                        <span className="p-2 bg-purple-900/30 rounded-lg text-purple-500"><Zap size={20} /></span>
                        Why Create with Amit?
                     </h3>
                     <p className="text-gray-400 text-sm">
                        Web innovation and excellence is not simply a motto or brand; it is our core value. At Create with Amit, we create designs, we build brands. Purely put, we create. You will realize that one amazing solution is not more than just development of business but rather, it is actually about helping you start a venture that treads with your vision.
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
                     <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-20 blur-2xl"></div>
                     <img 
                       src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                       alt="Creative Agency" 
                       className="relative rounded-2xl shadow-2xl border border-gray-800 grayscale hover:grayscale-0 transition-all duration-500"
                     />
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Web Development Platform Section */}
      <section className="py-24 bg-black relative">
         <div className="max-w-7xl mx-auto px-4">
             <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold mb-4 text-purple-500">{content.Platforms.title}</h2>
                 <p className="text-blue-500 font-medium">{content.Platforms.subtitle}</p>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                 {/* Left Column - Large Card */}
                 <div className="lg:col-span-5">
                     <div className="bg-[#12121a] rounded-2xl overflow-hidden border border-gray-800 h-full">
                         <div className="h-64 overflow-hidden">
                             <img 
                               src={content.Platforms.cardImage} 
                               alt="Web Development" 
                               className="w-full h-full object-cover"
                             />
                         </div>
                         <div className="p-8">
                             <h3 className="text-2xl font-bold text-white mb-4">{content.Platforms.cardTitle}</h3>
                             <p className="text-gray-400 text-sm leading-relaxed">
                                 {content.Platforms.cardDescription}
                             </p>
                         </div>
                     </div>
                 </div>

                 {/* Right Column - Features List */}
                 <div className="lg:col-span-7 space-y-8">
                     <div className="flex gap-6">
                         <div className="p-4 bg-purple-900/20 rounded-2xl h-fit text-purple-500"><Globe size={24} /></div>
                         <div>
                             <h3 className="text-xl font-bold text-white mb-2">Custom Design & Themes</h3>
                             <p className="text-gray-400 text-sm">We create unique custom designs from scratch or customize premium themes to perfectly match your brand identity and user experience requirements.</p>
                         </div>
                     </div>
                     <div className="flex gap-6">
                         <div className="p-4 bg-blue-900/20 rounded-2xl h-fit text-blue-500"><Settings size={24} /></div>
                         <div>
                             <h3 className="text-xl font-bold text-white mb-2">Robust Backend Solutions</h3>
                             <p className="text-gray-400 text-sm">Powerful backend development using custom PHP, Node.js, or WordPress core to ensure your website's functionality is robust, secure, and scalable.</p>
                         </div>
                     </div>
                     <div className="flex gap-6">
                         <div className="p-4 bg-pink-900/20 rounded-2xl h-fit text-pink-500"><ShoppingCart size={24} /></div>
                         <div>
                             <h3 className="text-xl font-bold text-white mb-2">E-commerce Solutions</h3>
                             <p className="text-gray-400 text-sm">From custom-built online stores to WooCommerce integration, we build secure shopping experiences with payment gateway integration and inventory management.</p>
                         </div>
                     </div>
                     <div className="flex gap-6">
                         <div className="p-4 bg-indigo-900/20 rounded-2xl h-fit text-indigo-500"><Code size={24} /></div>
                         <div>
                             <h3 className="text-xl font-bold text-white mb-2">Custom Web Applications</h3>
                             <p className="text-gray-400 text-sm">Beyond standard websites, we build complex custom web applications, portals, and dashboards tailored to your specific business workflows.</p>
                         </div>
                     </div>
                     <div className="flex gap-6">
                         <div className="p-4 bg-green-900/20 rounded-2xl h-fit text-green-500"><MessageCircle size={24} /></div>
                         <div>
                             <h3 className="text-xl font-bold text-white mb-2">Website Support</h3>
                             <p className="text-gray-400 text-sm">Updating plugins, new pages, troubleshooting, and problem-solving for both custom and WordPress sites.</p>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-[#0a0a0a]">
         <div className="max-w-7xl mx-auto px-4">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                 {/* Left: Steps */}
                 <div className="space-y-12">
                     <div className="flex gap-6 group">
                         <div className="p-4 bg-gray-800 rounded-2xl h-fit text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors"><Search size={28} /></div>
                         <div>
                             <h3 className="text-xl font-bold text-white mb-2">Project Discovery and Briefing:</h3>
                             <p className="text-gray-400 text-sm">Define the project's underlining goals, milestones and expected outcomes.</p>
                         </div>
                     </div>
                     <div className="flex gap-6 group">
                         <div className="p-4 bg-gray-800 rounded-2xl h-fit text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors"><Layers size={28} /></div>
                         <div>
                             <h3 className="text-xl font-bold text-white mb-2">Ideation and Architecture:</h3>
                             <p className="text-gray-400 text-sm">Create and communicate the well-researched protocol. We aim for a great customer experience.</p>
                         </div>
                     </div>
                     <div className="flex gap-6 group">
                         <div className="p-4 bg-gray-800 rounded-2xl h-fit text-pink-400 group-hover:bg-pink-600 group-hover:text-white transition-colors"><Layout size={28} /></div>
                         <div>
                             <h3 className="text-xl font-bold text-white mb-2">User Interface Design:</h3>
                             <p className="text-gray-400 text-sm">Create permanent justice and well-planned brand guidelines for efficient graphic customer experience.</p>
                         </div>
                     </div>
                     <div className="flex gap-6 group">
                         <div className="p-4 bg-gray-800 rounded-2xl h-fit text-green-400 group-hover:bg-green-600 group-hover:text-white transition-colors"><Server size={28} /></div>
                         <div>
                             <h3 className="text-xl font-bold text-white mb-2">Post-launch testing and evaluation:</h3>
                             <p className="text-gray-400 text-sm">User testing across all web browsers and devices.</p>
                         </div>
                     </div>
                 </div>

                 {/* Right: Approach Card */}
                 <div className="relative">
                     <div className="bg-[#15151e] p-8 rounded-2xl border border-gray-800 h-full relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
                         <h3 className="text-3xl font-bold text-white mb-6">Our Approach</h3>
                         <p className="text-gray-400 text-sm leading-relaxed mb-8">
                             With great growth of business, entrepreneurship and people managing an ecosystem, they can manage all the characters website has showed with many in-house managers. Order for data storage software if you are not a tech-savvy and for the tech people, user portals are basically ecosystems over the website. The backbone for your product functions for a nice global reach. They should have a responsive method to all points of business so it usually simply acts. It is our prime mission to ensure customers in our portfolio better.
                         </p>
                         <div className="rounded-xl overflow-hidden mt-auto">
                             <img 
                               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                               alt="Our Approach" 
                               className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                             />
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* Light Section - Website Design Company */}
      <section className="py-24 bg-gray-100 text-black relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 relative z-10">
             <div className="flex flex-col md:flex-row items-center gap-12">
                 <div className="w-full md:w-1/2">
                     <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                         There are several <br />
                         Website Design <br />
                         Company in Port Blair
                     </h2>
                     <p className="text-gray-600 leading-relaxed text-lg">
                         Website Development Port Blair is known for its quality web templates and stylish designs. With the tons of experience behind the developers, it is only a matter of time before you can have your own website at a guaranteed low cost too.
                     </p>
                 </div>
                 <div className="w-full md:w-1/2">
                     <div className="relative transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                         <div className="absolute inset-0 bg-blue-500 transform translate-x-4 translate-y-4 rounded-2xl"></div>
                         <img 
                           src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                           alt="Artistic Web Design" 
                           className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-white"
                         />
                     </div>
                 </div>
             </div>
         </div>
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 transform origin-top-right z-0 pointer-events-none"></div>
      </section>

      {/* Portfolio Slider Section */}
      <section id="projects" className="py-24 bg-black relative">
         <div className="w-full px-4 mb-12 text-center">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-3xl md:text-5xl font-bold mb-4"
            >
               Glimpse of our <br />
               <span className="text-purple-500">Website Projects</span>
            </motion.h2>
            <p className="text-red-500 font-medium">Your web design that get showcase next here!</p>
         </div>
         
         <div className="relative">
            {/* Gradient Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
            
            <Row direction="left" speed={40} size="large" />
            <Row direction="right" speed={45} size="medium" />
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0a0a0a]">
         <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-500">Frequently Asked Questions</h2>
            <p className="text-center text-gray-500 mb-12 -mt-8">We have covered most of the common questions asked about web design logic.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
               {/* Column 1 */}
               <div className="space-y-8">
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> Should I start working on my project immediately after I receive my design and an advance amount?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        Yes, once we agree on the scope and receive the advance, we begin the initial phase immediately.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> What's your turnaround time for logo design?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        Typically 3-5 business days for initial concepts, depending on complexity.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> Does my fee cover all my costs of my project?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        Our quote is comprehensive. Any additional features requested later will be charged separately.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> What if I want to file for damages?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        We have strict contracts and SLAs to ensure quality. Disputes are handled as per the agreement.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> Why Create with Amit for web solutions, logos or media?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        We offer integrated solutions that ensure your brand consistency across all platforms.
                     </p>
                  </div>
               </div>

               {/* Column 2 */}
               <div className="space-y-8">
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> Tell, my rights, and who owns the computer?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        You own the final website code and design upon full payment. We retain rights to our code libraries.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> Can the logo be used by any organization instead of just businesses, especially for startups who need to mark us as credible packages for small everything?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        Yes, our designs are versatile and suitable for NGOs, startups, and enterprises alike.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> In what format will I receive my file?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        We deliver source files (PSD/AI) along with web-ready formats (JPEG, PNG, SVG).
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> Who owns it at the right time when the design is complete?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        You do. We transfer full ownership rights upon project completion and final payment.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> Can I make changes after construction too?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        Yes, we offer maintenance packages for post-launch updates and changes.
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

export default WebsiteDevelopment;