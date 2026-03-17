import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import ParticleNetwork from '../components/ParticleNetwork';

const Blog = () => {
  // Mock Data for Blogs
  const blogs = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest technologies and methodologies shaping the web development landscape, from AI-driven coding to WebAssembly.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Oct 15, 2023",
      author: "Amit",
      category: "Technology"
    },
    {
      id: 2,
      title: "Maximizing ROI with Digital Marketing Strategies",
      excerpt: "Learn how to optimize your digital marketing budget and achieve better returns through targeted campaigns and data analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Oct 10, 2023",
      author: "Amit",
      category: "Marketing"
    },
    {
      id: 3,
      title: "Why Minimalist Design is More Than Just a Trend",
      excerpt: "Discover the principles of minimalist design and how it enhances user experience by focusing on simplicity and functionality.",
      image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Sep 28, 2023",
      author: "Amit",
      category: "Design"
    },
    {
      id: 4,
      title: "The Importance of SEO for Small Businesses",
      excerpt: "A comprehensive guide on why Search Engine Optimization is crucial for local businesses looking to grow their online presence.",
      image: "https://images.unsplash.com/photo-1571721795195-a2ca2d337096?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Sep 15, 2023",
      author: "Amit",
      category: "SEO"
    },
    {
      id: 5,
      title: "Building Scalable E-commerce Platforms",
      excerpt: "Key considerations for developing robust e-commerce solutions that can handle growth and high traffic volumes.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Aug 30, 2023",
      author: "Amit",
      category: "Development"
    },
    {
      id: 6,
      title: "Understanding Brand Identity in the Digital Age",
      excerpt: "How to create and maintain a strong brand identity that resonates with your audience across various digital channels.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Aug 12, 2023",
      author: "Amit",
      category: "Branding"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20 font-sans">
      {/* Hero Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-purple-900/20 to-transparent"></div>
           <ParticleNetwork />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="text-4xl md:text-6xl font-bold mb-6"
           >
             Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Insights</span>
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2, duration: 0.6 }}
             className="text-gray-400 max-w-2xl mx-auto text-lg"
           >
             Thoughts, tutorials, and insights on web development, design, and digital marketing.
           </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-[#12121a] rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/10"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-xs font-bold text-white rounded-full border border-gray-700 flex items-center gap-1">
                      <Tag size={12} className="text-purple-500" /> {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-500 text-xs mb-4">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {blog.date}</span>
                    <span className="flex items-center gap-1"><User size={14} /> {blog.author}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${blog.id}`}
                    className="inline-flex items-center gap-2 text-purple-500 font-bold text-sm group-hover:gap-3 transition-all"
                  >
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
