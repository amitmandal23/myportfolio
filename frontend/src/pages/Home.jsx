import React, { useEffect, useState } from 'react';
import api from '../services/api';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Stats from '../components/Stats';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import BrandBuilder from '../components/BrandBuilder';
import Footer from '../components/Footer';

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [skills, setSkills] = useState([]);
  const [settings, setSettings] = useState({});
  const [portfolioGallery, setPortfolioGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const [p, s, sk, set, content] = await Promise.all([
                api.get('/projects'),
                api.get('/services'),
                api.get('/skills'),
                api.get('/settings'),
                api.get('/content?page=Home')
            ]);
            setProjects(p.data);
            setServices(s.data);
            setSkills(sk.data);
            setSettings(set.data);
            
            // Extract portfolio gallery images from content
            if (content.data && content.data.PortfolioGallery) {
                const galleryData = content.data.PortfolioGallery.galleryImages;
                // Handle both array and object formats, and JSON strings
                let images = [];
                
                if (galleryData) {
                    // If it's an object with value property (from API response)
                    if (galleryData.value) {
                        const value = galleryData.value;
                        // Try to parse as JSON if it's a string
                        if (typeof value === 'string') {
                            try {
                                images = JSON.parse(value);
                            } catch (e) {
                                console.error('Failed to parse gallery JSON:', e);
                                images = [value]; // Fallback to single image
                            }
                        } else if (Array.isArray(value)) {
                            images = value;
                        }
                    } else if (Array.isArray(galleryData)) {
                        // Direct array
                        images = galleryData;
                    }
                }
                
                setPortfolioGallery(images);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    fetchData();
  }, []);

  if (loading) {
      return (
          <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
      );
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      <Hero settings={settings} />
      <Services services={services} />
      <About settings={settings} />
      <Stats />
      <Skills skills={skills} />
      <Portfolio projects={projects} galleryImages={portfolioGallery} />
      <Pricing />
      <BrandBuilder />
      <Footer settings={settings} />
    </div>
  );
};

export default Home;
