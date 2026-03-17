import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { 
      name: 'Creative Service', 
      path: '#services',
      submenu: [
        { name: 'Creative Logo Design', path: '/logo-design' },
        { name: 'Graphics Designing Solution', path: '/graphics-design' },
        { name: 'Digital Marketing & Brand Promotion', path: '/digital-marketing' },
        { name: 'Website Development', path: '/website-development' }
      ]
    },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white">
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-sm border-b border-gray-800 py-4' : 'bg-transparent py-6'}`}>
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            Amit<span className="text-blue-500">.</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link 
                  to={link.path} 
                  className="font-medium text-gray-300 hover:text-blue-500 transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.submenu && <ChevronDown size={16} />}
                </Link>
                
                {/* Submenu */}
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-black border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-blue-500 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
             <Link 
                to="/contact" 
                className="px-6 py-2.5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] transform hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white rounded-lg">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black border-b border-gray-800 overflow-hidden shadow-lg"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <div className="flex justify-between items-center border-b border-gray-800 last:border-0">
                      <Link 
                        to={link.path} 
                        onClick={() => !link.submenu && setIsOpen(false)}
                        className="text-gray-300 hover:text-blue-500 font-medium py-2 flex-grow"
                      >
                        {link.name}
                      </Link>
                      {link.submenu && (
                        <button 
                          onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                          className="p-2 text-gray-400"
                        >
                          <ChevronDown size={16} className={`transform transition-transform ${activeSubmenu === link.name ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Submenu */}
                    {link.submenu && activeSubmenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="pl-4 bg-gray-900/50"
                      >
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 text-sm text-gray-400 hover:text-blue-500 border-b border-gray-800/50 last:border-0"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                 <Link 
                    to="/contact" 
                    onClick={() => setIsOpen(false)}
                    className="text-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
                  >
                    Contact Us
                  </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
