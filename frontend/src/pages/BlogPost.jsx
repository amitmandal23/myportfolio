import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Clock, Share2, Tag, Facebook, Twitter, Linkedin } from 'lucide-react';
import ParticleNetwork from '../components/ParticleNetwork';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  // Mock Data (Same as Blog.jsx)
  const blogs = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      content: `
        <p>The web development landscape is constantly evolving, driven by technological advancements and changing user expectations. As we look ahead to 2024, several key trends are emerging that will shape the way we build and interact with the web.</p>
        
        <h3>1. AI-Driven Development</h3>
        <p>Artificial Intelligence (AI) is no longer just a buzzword; it's becoming an integral part of the development process. From AI-powered code assistants like GitHub Copilot to automated testing and debugging tools, developers are leveraging AI to write cleaner code faster. Moreover, AI is enabling more personalized user experiences through dynamic content generation and intelligent chatbots.</p>
        
        <h3>2. WebAssembly (Wasm) Taking Center Stage</h3>
        <p>WebAssembly allows code written in languages like C++, Rust, and Go to run in the browser at near-native speed. This opens up possibilities for high-performance applications such as video editing, 3D rendering, and gaming directly within web pages, breaking the limitations of traditional JavaScript.</p>
        
        <h3>3. The Rise of Serverless Architecture</h3>
        <p>Serverless computing continues to gain traction, allowing developers to focus on writing code without managing infrastructure. With platforms like AWS Lambda and Vercel, scaling applications has never been easier or more cost-effective.</p>
        
        <h3>4. Motion UI and Micro-Interactions</h3>
        <p>User experience is paramount, and motion design plays a crucial role. In 2024, we expect to see more subtle yet impactful animations that guide users, provide feedback, and add a layer of polish to web interfaces.</p>
        
        <p>In conclusion, staying ahead in web development requires continuous learning and adaptation. Embracing these trends will not only future-proof your skills but also enable you to deliver exceptional digital experiences.</p>
      `,
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Oct 15, 2023",
      author: "Amit",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Maximizing ROI with Digital Marketing Strategies",
      content: `
        <p>In the competitive digital landscape, simply having an online presence isn't enough. To truly succeed, businesses need to implement data-driven digital marketing strategies that maximize Return on Investment (ROI).</p>
        
        <h3>Understanding Your Audience</h3>
        <p>The foundation of any successful campaign is a deep understanding of your target audience. Utilizing tools like Google Analytics and social media insights allows you to create detailed buyer personas and tailor your messaging effectively.</p>
        
        <h3>Content is King</h3>
        <p>High-quality, relevant content drives engagement and builds trust. Whether it's blog posts, videos, or infographics, providing value to your audience is key to converting visitors into customers.</p>
        
        <p>By combining SEO, content marketing, and paid advertising, businesses can create a cohesive strategy that delivers measurable results.</p>
      `,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Oct 10, 2023",
      author: "Amit",
      category: "Marketing",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Why Minimalist Design is More Than Just a Trend",
      content: "<p>Minimalism in web design is about stripping away the unnecessary to focus on what's important. It improves load times, enhances readability, and provides a better user experience across devices.</p>",
      image: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Sep 28, 2023",
      author: "Amit",
      category: "Design",
      readTime: "3 min read"
    },
    {
      id: 4,
      title: "The Importance of SEO for Small Businesses",
      content: "<p>For local businesses, SEO is the key to being found by customers in your area. Optimizing your Google My Business profile and building local citations can significantly boost your visibility.</p>",
      image: "https://images.unsplash.com/photo-1571721795195-a2ca2d337096?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Sep 15, 2023",
      author: "Amit",
      category: "SEO",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Building Scalable E-commerce Platforms",
      content: "<p>Scalability is critical for e-commerce. Choosing the right tech stack and architecture ensures your store can handle Black Friday traffic spikes without crashing.</p>",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Aug 30, 2023",
      author: "Amit",
      category: "Development",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Understanding Brand Identity in the Digital Age",
      content: "<p>Your brand is more than just a logo. It's the emotional connection you build with your audience through consistent visual language and tone of voice.</p>",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "Aug 12, 2023",
      author: "Amit",
      category: "Branding",
      readTime: "5 min read"
    }
  ];

  useEffect(() => {
    // Find post by ID
    const foundPost = blogs.find(b => b.id === parseInt(id));
    if (foundPost) {
      setPost(foundPost);
    } else {
      // Redirect to blog listing if not found
      navigate('/blog');
    }
    // Scroll to top
    window.scrollTo(0, 0);
  }, [id, navigate]);

  if (!post) return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white pt-20 font-sans">
      {/* Article Header */}
      <div className="relative h-[60vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} /> Back to Blog
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-2 text-gray-300 text-sm">
                <Clock size={16} /> {post.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
              <span className="flex items-center gap-2"><User size={16} /> {post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-3/4">
            <div 
              className="prose prose-lg prose-invert max-w-none
                prose-headings:text-white prose-headings:font-bold 
                prose-p:text-gray-300 prose-p:leading-relaxed
                prose-a:text-purple-500 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white
                prose-li:text-gray-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-xl font-bold mb-4">Share this article</h3>
              <div className="flex gap-4">
                <button className="p-3 bg-[#1e1e2d] rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                  <Facebook size={20} />
                </button>
                <button className="p-3 bg-[#1e1e2d] rounded-full hover:bg-sky-500 hover:text-white transition-colors">
                  <Twitter size={20} />
                </button>
                <button className="p-3 bg-[#1e1e2d] rounded-full hover:bg-blue-700 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </button>
                <button className="p-3 bg-[#1e1e2d] rounded-full hover:bg-purple-600 hover:text-white transition-colors">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-8">
            <div className="bg-[#12121a] p-6 rounded-2xl border border-gray-800">
              <h3 className="text-lg font-bold mb-4 border-b border-gray-800 pb-2">Related Posts</h3>
              <div className="space-y-4">
                {blogs.filter(b => b.id !== post.id).slice(0, 3).map(related => (
                  <Link key={related.id} to={`/blog/${related.id}`} className="block group">
                    <h4 className="font-bold text-sm text-gray-300 group-hover:text-purple-500 transition-colors mb-1">
                      {related.title}
                    </h4>
                    <span className="text-xs text-gray-500">{related.date}</span>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-6 rounded-2xl border border-purple-500/20 text-center">
              <h3 className="text-lg font-bold mb-2">Need a Website?</h3>
              <p className="text-sm text-gray-400 mb-4">Let's create something amazing together.</p>
              <Link to="/contact" className="inline-block px-6 py-2 bg-purple-600 rounded-full text-sm font-bold hover:bg-purple-700 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
