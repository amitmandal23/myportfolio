import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Logo Design on AI vs AI (Artificial Intelligence vs Adobe Illustrator): What's the Real Difference?",
      author: "Amit",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
      category: "Artificial Intelligence"
    },
    {
      id: 2,
      title: "Why You Should Hire a Brand Marketing Consultant in Kolkata",
      author: "Amit",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop",
      category: "Branding"
    },
    {
      id: 3,
      title: "Top 5 Reasons Why Your Business Needs a Professional Website in 2025",
      author: "Amit",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      category: "Web Development"
    },
    {
      id: 4,
      title: "Top 7 Logo Design Mistakes Businesses in Kolkata Must Avoid",
      author: "Amit",
      image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=600&auto=format&fit=crop",
      category: "Design"
    },
    {
      id: 5,
      title: "What Makes a Digital Marketing Campaign Successful in the Kolkata Market?",
      author: "Amit",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=600&auto=format&fit=crop",
      category: "Marketing"
    },
    {
      id: 6,
      title: "How is Branding different than Marketing?",
      author: "Amit",
      image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=600&auto=format&fit=crop",
      category: "Strategy"
    },
    {
      id: 7,
      title: "Essential Steps to Consider Before Starting a Business",
      author: "Amit",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
      category: "Business"
    },
    {
      id: 8,
      title: "Why is Logo Important for a Business?",
      author: "Amit",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600&auto=format&fit=crop",
      category: "Identity"
    }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4 text-purple-600 tracking-tight"
            >
              Latest Topics
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg"
            >
              We publish exclusive content on various topics.
            </motion.p>
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="px-8 py-3 border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white transition-colors uppercase font-bold tracking-wider text-sm rounded-sm"
          >
            View All
          </motion.button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[320px] overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Background Image */}
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-center z-10">
                <h3 className="text-lg font-bold mb-6 leading-snug group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                
                {/* Separator */}
                <div className="w-12 h-[1px] bg-gray-600 mx-auto mb-4"></div>

                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                  <User size={14} />
                  <span className="font-medium">{post.author}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
