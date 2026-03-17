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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const [p, s, sk, set] = await Promise.all([
                api.get('/projects'),
                api.get('/services'),
                api.get('/skills'),
                api.get('/settings')
            ]);
            setProjects(p.data);
            setServices(s.data);
            setSkills(sk.data);
            setSettings(set.data);
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
      <Portfolio projects={projects} />
      <Pricing />
      <BrandBuilder />
      <Footer settings={settings} />
    </div>
  );
};

export default Home;
