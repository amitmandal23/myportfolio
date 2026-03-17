import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, MessageCircle, Star, Palette, RefreshCw, CreditCard, Clock, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import ParticleNetwork from '../components/ParticleNetwork';
import Footer from '../components/Footer';

const LogoDesign = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Logic for scrolling rows (Infinite Marquee)
  const logoProjects = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    title: `Logo Concept ${i + 1}`,
    category: 'Branding'
  }));
  
  const marqueeItems = [...logoProjects, ...logoProjects, ...logoProjects, ...logoProjects];

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
                       <span className="font-bold text-purple-500" style={{ fontSize: `${width * 0.12}px` }}>L{project.id + 1}</span>
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
         {/* Background Elements */}
         <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-purple-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
            <ParticleNetwork />
         </div>

         <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
               {/* Image Side */}
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8 }}
                 className="w-full md:w-1/2 relative"
               >
                  <div className="relative w-full max-w-md mx-auto aspect-square">
                     {/* Hexagon/Geometric Shape Background */}
                     <div className="absolute inset-0 bg-purple-600/20 clip-path-hexagon transform rotate-12 scale-110"></div>
                     <div className="absolute inset-0 bg-blue-600/10 clip-path-hexagon transform -rotate-6 scale-105"></div>
                     
                     <img 
                        src="/images/hero-5.webp" 
                        alt="Creative Director" 
                        className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl mask-image-gradient"
                        onError={(e) => {
                           e.target.src = 'https://ui-avatars.com/api/?name=Amit&background=6200ea&color=fff&size=500';
                        }}
                     />
                     
                     {/* Floating Elements */}
                     <div className="absolute -bottom-6 -right-6 bg-black border border-purple-500 p-4 rounded-xl shadow-lg z-20">
                        <div className="flex items-center gap-2">
                           <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                           <span className="text-sm font-bold">Available for Projects</span>
                        </div>
                     </div>
                  </div>
               </motion.div>

               {/* Text Side */}
               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8 }}
                 className="w-full md:w-1/2 text-right md:text-right"
               >
                  <h2 className="text-purple-500 font-bold tracking-wider uppercase mb-2">Creative Services</h2>
                  <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                     Logo Design <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                        in Port Blair
                     </span>
                  </h1>
                  <p className="text-gray-400 text-lg mb-8 max-w-xl ml-auto leading-relaxed">
                     Over the years we have done many things that we are proud of. 
                     This motivates us to continue looking for new challenges in order to 
                     improve our services.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 justify-end">
                     <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-all shadow-[0_0_20px_rgba(147,51,234,0.5)]">
                        View Pricing
                     </button>
                     <button className="px-8 py-3 bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold rounded-full transition-all">
                        View Portfolio
                     </button>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Full-stack Brand Development */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-16">
               <div className="w-full md:w-1/2">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Full-stack Brand Development</h2>
                  <p className="text-gray-400 leading-relaxed mb-6">
                     Logo Design is indeed not a symbol or graphics, but also for brand reputation for startups. 
                     It plays a vital role in image of the products and services in the eyes of customers you are in. 
                     In the impression of the products you are dealing with. Using other's platform can ruin your own style.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                     They need a unique identity to be noticed in a competitive world like today's. 
                     CREATE WITH AMIT is a refined Logo Design Company in India. If you are searching for Creative Logo Designer in Kolkata your search ends here with us. We offer different types of logo designs at a pocket friendly budget. We clearly understand your requirement, the font and colors your Logo needs. We are here to listen to all your needs.
                  </p>
               </div>
               <div className="w-full md:w-1/2">
                  <div className="relative bg-white/5 p-4 rounded-lg transform rotate-2 hover:rotate-0 transition-all duration-500">
                     <img 
                        src="https://images.unsplash.com/photo-1626785774573-4b7993125637?q=80&w=1000&auto=format&fit=crop" 
                        alt="Brand Development" 
                        className="w-full h-auto rounded shadow-2xl opacity-80"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Numbers & Achievements */}
      <section className="py-20 bg-black">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Numbers & Achievements</h2>
               <p className="text-gray-500 max-w-2xl mx-auto">
                  We are fastest budding as a fullstack solution firm, we have been successful in satisfying large group of design & branding requirements. Explore the capabilities & achieve about our experience on the below statistics.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
               {[
                  { count: '12+', label: 'Years of Experience' },
                  { count: '100+', label: 'Completed Projects' },
                  { count: '700+', label: 'Logo Designs' }
               ].map((stat, idx) => (
                  <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="p-6"
                  >
                     <div className="text-6xl font-bold text-purple-600 mb-4">{stat.count}</div>
                     <div className="text-white font-medium text-lg uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#0a0514] relative">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <p className="text-pink-500 font-medium mb-2">Let's Start - The whole Logo Designing process has 4 steps</p>
               <h2 className="text-4xl md:text-5xl font-black text-purple-500 mb-4">Process to Develop a Logo?</h2>
               <p className="text-gray-400">We have already built amazing things for our customers.</p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
               {[
                  { icon: <Palette className="w-8 h-8" />, title: '3 Logo Concepts', desc: 'Firstly, we will give 3 different unique Logo ideas that suit your business. You can choose from.' },
                  { icon: <RefreshCw className="w-8 h-8" />, title: 'Unlimited Revision', desc: 'Once having selected your favourite Concept, we will provide Unlimited revisions until you are completely satisfied.' },
                  { icon: <CreditCard className="w-8 h-8" />, title: '50% Advance Payment', desc: 'We value for what effort we do, so we charge 50% advance before the start of the first Phase.' },
                  { icon: <Clock className="w-8 h-8" />, title: '48-72 Hrs Turnaround', desc: 'Expect elegance and just about that in 48-72 hrs. We probably value turnaround and you will found us the fastest.' }
               ].map((card, i) => (
                  <div key={i} className="bg-[#120a1f] p-6 border border-purple-900/30 rounded-lg hover:border-purple-500 transition-colors">
                     <div className="text-purple-500 mb-4">{card.icon}</div>
                     <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                     <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                  </div>
               ))}
            </div>

            {/* Zig Zag Steps */}
            <div className="relative max-w-5xl mx-auto">
               {/* Vertical Line for Mobile */}
               <div className="absolute left-4 top-0 bottom-0 w-1 bg-purple-900/50 md:hidden"></div>
               
               {/* Step 1 */}
               <div className="flex flex-col md:flex-row items-center mb-16 relative">
                  <div className="w-full md:w-1/2 p-6 md:pr-12 md:text-right order-2 md:order-1">
                     <h3 className="text-3xl font-bold mb-4">Step #1</h3>
                     <p className="text-gray-400">Initially, you will have to share the name of the Logo. Tagline (Short phrase if needed). Any colour preference, maybe a visual idea in your mind. Tell us about your business/Target category.</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-600 rounded-full transform -translate-x-1/2 z-10 border-4 border-black"></div>
                  <div className="w-full md:w-1/2 p-6 md:pl-12 order-3 md:order-2">
                     <div className="hidden md:block w-full h-0.5 bg-gradient-to-r from-purple-600 to-transparent"></div>
                  </div>
               </div>

               {/* Step 2 */}
               <div className="flex flex-col md:flex-row items-center mb-16 relative">
                  <div className="w-full md:w-1/2 p-6 md:pr-12 md:text-right order-2 md:order-1">
                     <div className="hidden md:block w-full h-0.5 bg-gradient-to-l from-purple-600 to-transparent"></div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-600 rounded-full transform -translate-x-1/2 z-10 border-4 border-black"></div>
                  <div className="w-full md:w-1/2 p-6 md:pl-12 order-3 md:order-2">
                     <h3 className="text-3xl font-bold mb-4">Step #2</h3>
                     <p className="text-gray-400">Once we receive the Logo design cost in our a/c details, We will then send you the first rough draft of 3 concepts in 2-3 working days accordingly.</p>
                  </div>
               </div>

               {/* Step 3 */}
               <div className="flex flex-col md:flex-row items-center mb-16 relative">
                  <div className="w-full md:w-1/2 p-6 md:pr-12 md:text-right order-2 md:order-1">
                     <h3 className="text-3xl font-bold mb-4">Step #3</h3>
                     <p className="text-gray-400">Choose any 1 Concept you want to proceed with the designer. Thought to perfect the process of selected concept/revision. (Note: The correction you want will be done in under 24 hours).</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-600 rounded-full transform -translate-x-1/2 z-10 border-4 border-black"></div>
                  <div className="w-full md:w-1/2 p-6 md:pl-12 order-3 md:order-2">
                     <div className="hidden md:block w-full h-0.5 bg-gradient-to-r from-purple-600 to-transparent"></div>
                  </div>
               </div>

               {/* Step 4 */}
               <div className="flex flex-col md:flex-row items-center relative">
                  <div className="w-full md:w-1/2 p-6 md:pr-12 md:text-right order-2 md:order-1">
                     <div className="hidden md:block w-full h-0.5 bg-gradient-to-l from-purple-600 to-transparent"></div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-600 rounded-full transform -translate-x-1/2 z-10 border-4 border-black"></div>
                  <div className="w-full md:w-1/2 p-6 md:pl-12 order-3 md:order-2">
                     <h3 className="text-3xl font-bold mb-4">Step #4</h3>
                     <p className="text-gray-400">Last!, when the designing is set aside, We will mail all the Logo in format (CDR, PSD, JPG, PNG & PDF). It will include a High-Resolution file as well, including the source file (Vector).</p>
                  </div>
               </div>
               
               {/* Center Line for Desktop */}
               <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-900/30 transform -translate-x-1/2 -z-10"></div>
            </div>
         </div>
      </section>

      {/* Recent Creativity Section (Infinite Scroll) */}
      <section className="py-24 bg-black overflow-hidden relative">
         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="max-w-7xl mx-auto px-4 mb-16 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-purple-600 mb-4">Glimpse of our Recent Creativity</h2>
            <p className="text-pink-500 font-medium">Your Logo Design shall get showcase next here!</p>
         </div>

         {/* 4 Rows of Infinite Marquee */}
         <div className="relative w-full">
            {/* Gradient Edges for smooth fade */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
            
            <Row direction="left" speed={40} size="large" />
            <Row direction="right" speed={45} size="medium" />
            <Row direction="left" speed={35} size="small" />
            <Row direction="right" speed={50} size="smallest" />
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#0a0a0a]">
         <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl font-bold text-center text-purple-600 mb-16">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {/* Column 1 */}
               <div className="space-y-8">
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> How do we communicate during our project?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        We will start working on your project immediately after we receive your design brief and an advance amount.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> What do you need from me to begin?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        Usually we need Logo name, Tagline, Color preference etc.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> How many times will you revise my project?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        Unlimited revisions until you are completely satisfied.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> What if I just don't like the concepts?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        We will provide new concepts if you don't like the initial ones.
                     </p>
                  </div>
               </div>

               {/* Column 2 */}
               <div className="space-y-8">
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> Who owns the copyright to the final design?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        Our rights are limited by the regular status of stock illustration. Upon full completion of work then client owns full rights.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> In what format will I receive my file?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        We deliver files in CDR, PSD, JPG, PNG & PDF formats.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> Can I make changes after receiving final files?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        Yes, minor changes can be done free of cost. Major changes will be charged.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> Why Create with Amit for Logo Designing?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        We provide creative and unique designs at an affordable price.
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

export default LogoDesign;
