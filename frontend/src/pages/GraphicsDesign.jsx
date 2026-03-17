import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, MessageCircle, Star, Palette, Monitor, Printer, PenTool, Layout as LayoutIcon, Image, Type, ChevronDown, ChevronUp, ExternalLink, Instagram, Facebook, Globe } from 'lucide-react';
import ParticleNetwork from '../components/ParticleNetwork';
import Footer from '../components/Footer';

const GraphicsDesign = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Logic for scrolling rows (Infinite Marquee) - Reused from LogoDesign/Portfolio
  const graphicProjects = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    title: `Graphic Design ${i + 1}`,
    category: i % 2 === 0 ? 'Digital Media' : 'Print Media'
  }));
  
  const marqueeItems = [...graphicProjects, ...graphicProjects, ...graphicProjects, ...graphicProjects];

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
                       <span className="font-bold text-purple-500" style={{ fontSize: `${width * 0.12}px` }}>G{project.id + 1}</span>
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

         <div className="w-full px-4 md:px-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
               {/* Image Side (Left in this design based on reference usually having image left/text right or vice versa, but sticking to standard hero layout first) */}
               {/* Actually reference has image on left for "One of the leading..." section. Hero has text right? Let's check image. 
                   The reference has a hero with a face on the left and text "Creative Agency in Kolkata" on the right. 
               */}
               <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-1/2 relative"
               >
                  <div className="relative aspect-[3/4] md:w-[400px] mx-auto overflow-hidden rounded-2xl shadow-2xl border border-purple-900/50">
                     <img 
                       src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                       alt="Creative Graphics" 
                       className="w-full h-full object-cover opacity-80"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                     
                     {/* Floating Badge */}
                     <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-purple-500/50"
                     >
                        <div className="flex items-center gap-3">
                           <div className="p-2 bg-purple-600 rounded-full">
                              <Star size={20} className="text-white" />
                           </div>
                           <div>
                              <p className="text-xs text-gray-400 uppercase tracking-wider">Experience</p>
                              <p className="font-bold text-white">Top Rated Agency</p>
                           </div>
                        </div>
                     </motion.div>
                  </div>
               </motion.div>

               {/* Text Side */}
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
                     Creative <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Agency</span> <br />
                     in Port Blair
                  </h1>
                  
                  <p className="text-gray-400 text-lg mb-8 max-w-lg ml-auto leading-relaxed">
                     Connect with Create with Amit for world-class design. We craft the advantage, and we drive your business experience.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-end">
                     <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                        View Portfolio <ArrowRight size={20} />
                     </button>
                     <button className="px-8 py-4 bg-transparent border border-gray-700 rounded-full font-bold text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                        <MessageCircle size={20} /> Request Quote
                     </button>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Intro Section - Leading Graphics Design Company */}
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
                     One of the Leading <br />
                     <span className="text-gray-500">Graphics Design</span> <br />
                     Company in Port Blair
                  </h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                     Branding and identity design is a crucial aspect of any business. It involves creating a unique name and image for a product or service in the consumer's mind. At Create with Amit, we design unique logos and identities that leave a lasting impression.
                  </p>
                  
                  <div className="mt-8">
                     <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <span className="p-2 bg-purple-900/30 rounded-lg text-purple-500"><Star size={24} /></span>
                        Why Create with Amit?
                     </h3>
                     <p className="text-gray-400 mb-6">
                        We deliver unique designs that speak your brand's voice. Our designs are not just visually appealing but also strategically crafted to meet your business goals. We ensure your brand stands out in the crowded market of Port Blair.
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
                  <div className="relative w-1/2 mx-auto">
                     <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-30 blur-xl"></div>
                     <img 
                       src="/images/artist-image.jpg" 
                       alt="Artist" 
                       className="relative rounded-2xl shadow-2xl border border-gray-800"
                     />
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Complete Creative Solutions */}
      <section className="py-20 bg-black relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  We aim at providing you with <br />
                  <span className="text-purple-500">Complete Creative Solutions</span>
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Digital Creative Designing */}
               <motion.div 
                 initial={{ x: -50, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 className="bg-[#120a1f] p-8 rounded-2xl border border-purple-900/30 hover:border-purple-500 transition-all duration-300 group"
               >
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Monitor size={32} />
                     </div>
                     <h3 className="text-3xl font-bold">Digital Creative <br /> Designing</h3>
                  </div>
                  
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="p-2 bg-gray-800 rounded-lg h-fit"><Instagram size={20} className="text-purple-400" /></div>
                        <div>
                           <h4 className="font-bold text-lg">Brand Advertisement Awareness</h4>
                           <p className="text-sm text-gray-400">Social Media Campaign Creatives, Banner Designing, Digital Marketing</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="p-2 bg-gray-800 rounded-lg h-fit"><Globe size={20} className="text-blue-400" /></div>
                        <div>
                           <h4 className="font-bold text-lg">Website Creatives</h4>
                           <p className="text-sm text-gray-400">Banner Designing, UI/UX Concepts, Iconography</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="p-2 bg-gray-800 rounded-lg h-fit"><Facebook size={20} className="text-blue-600" /></div>
                        <div>
                           <h4 className="font-bold text-lg">Social Media Posts Design</h4>
                           <p className="text-sm text-gray-400">Facebook/Instagram Post, Twitter Header, YouTube Thumbnail</p>
                        </div>
                     </div>
                  </div>
               </motion.div>

               {/* Print Media Creative Designing */}
               <motion.div 
                 initial={{ x: 50, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 className="bg-[#0a0f1f] p-8 rounded-2xl border border-blue-900/30 hover:border-blue-500 transition-all duration-300 group"
               >
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Printer size={32} />
                     </div>
                     <h3 className="text-3xl font-bold">Print Media <br /> Creative Designing</h3>
                  </div>
                  
                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="p-2 bg-gray-800 rounded-lg h-fit"><LayoutIcon size={20} className="text-blue-400" /></div>
                        <div>
                           <h4 className="font-bold text-lg">Corporate Identification</h4>
                           <p className="text-sm text-gray-400">Business Cards, Letterheads, Envelopes, ID Cards, Brochures</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="p-2 bg-gray-800 rounded-lg h-fit"><Image size={20} className="text-purple-400" /></div>
                        <div>
                           <h4 className="font-bold text-lg">Promotional Print Creatives</h4>
                           <p className="text-sm text-gray-400">Flyers, Posters, Standees, Billboards, Event Banners</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="p-2 bg-gray-800 rounded-lg h-fit"><PenTool size={20} className="text-pink-400" /></div>
                        <div>
                           <h4 className="font-bold text-lg">Brand Merchandise Design</h4>
                           <p className="text-sm text-gray-400">T-shirt Designing, Mug Printing, Packaging Design, Label Design</p>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-y border-gray-800">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-8 uppercase tracking-widest text-gray-400">
               All Files Comes in Series Formats from Adobe Creative Cloud Latest Version Software
            </h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
               {[
                 { name: 'Photoshop', color: 'text-blue-400', bg: 'bg-blue-900/20' },
                 { name: 'Illustrator', color: 'text-orange-500', bg: 'bg-orange-900/20' },
                 { name: 'InDesign', color: 'text-pink-600', bg: 'bg-pink-900/20' },
                 { name: 'Acrobat', color: 'text-red-500', bg: 'bg-red-900/20' }
               ].map((tool, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className={`w-24 h-24 ${tool.bg} rounded-2xl flex flex-col items-center justify-center border border-gray-700 hover:border-white transition-all`}
                  >
                     <span className={`text-3xl font-bold ${tool.color}`}>{tool.name.substring(0, 2)}</span>
                     <span className="text-xs mt-1 text-gray-400">{tool.name}</span>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-20 bg-white text-black relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-200 blur-3xl rounded-full translate-x-1/2"></div>
             <div className="absolute left-0 bottom-0 w-1/2 h-full bg-purple-200 blur-3xl rounded-full -translate-x-1/2"></div>
         </div>
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 max-w-4xl">
               There are several Graphics Design Company in Port Blair
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-6">
               However, at Create with Amit, every design is cruelly proposed with utmost research and interest that they render the type of quality detail. Moreover, with the growing demands of clients, we primarily intend to function a super group of professionals who will personally look into your needs and requirements from time to time.
            </p>
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
               <span className="text-purple-500">Creative Graphic Designs</span>
            </motion.h2>
            <p className="text-red-500 font-medium">Your Creations must get one success next move!</p>
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
                        <span className="text-purple-500">Q.</span> Do you provide only design or print services also?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        We provide both design and print services to ensure quality output.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> What information do I need to start a project?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        We need project details, brand guidelines, content, and any preferences.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> How many revisions do you provide?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        We provide unlimited revisions until you are satisfied with the design.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> What if I don't like the initial concepts?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        We will provide new concepts based on your feedback.
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
                        Upon full payment, you own the full copyright to the final design.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> In what format will I receive my file?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        We deliver print-ready files in AI, PSD, PDF, JPG, and PNG formats.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> Can I make changes after receiving final files?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        Minor changes are free; major layout changes may incur extra charges.
                     </p>
                  </div>
                  <div>
                     <h3 className="text-white font-bold mb-2 flex items-start gap-2">
                        <span className="text-purple-500">Q.</span> Why Create with Amit for Graphics Design?
                     </h3>
                     <p className="text-gray-500 text-sm ml-6">
                        We deliver unique, high-quality designs tailored to your brand's success.
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

export default GraphicsDesign;
