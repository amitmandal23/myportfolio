import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [stats, setStats] = useState({
    projects: 0,
    services: 0,
    skills: 0,
    contacts: 0
  });

  useEffect(() => {
    // Fetch counts - simple implementation fetching all lists
    // In a real app, you might want a specific dashboard endpoint
    const fetchStats = async () => {
      try {
        const [p, s, sk, c] = await Promise.all([
          api.get('/projects'),
          api.get('/services'),
          api.get('/skills'),
          api.get('/contacts')
        ]);
        setStats({
          projects: p.data.length,
          services: s.data.length,
          skills: sk.data.length,
          contacts: c.data.length
        });
      } catch (error) {
        console.error('Failed to fetch stats', error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded shadow border-l-4 border-blue-500">
          <h3 className="text-gray-500 text-sm font-medium uppercase">Total Projects</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">{stats.projects}</p>
          <Link to="/admin/projects" className="text-blue-500 text-sm mt-4 block hover:underline">View Projects &rarr;</Link>
        </div>

        <div className="bg-white p-6 rounded shadow border-l-4 border-green-500">
          <h3 className="text-gray-500 text-sm font-medium uppercase">Services</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">{stats.services}</p>
          <Link to="/admin/services" className="text-green-500 text-sm mt-4 block hover:underline">Manage Services &rarr;</Link>
        </div>

        <div className="bg-white p-6 rounded shadow border-l-4 border-purple-500">
          <h3 className="text-gray-500 text-sm font-medium uppercase">Skills</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">{stats.skills}</p>
          <Link to="/admin/skills" className="text-purple-500 text-sm mt-4 block hover:underline">Manage Skills &rarr;</Link>
        </div>

        <div className="bg-white p-6 rounded shadow border-l-4 border-red-500">
          <h3 className="text-gray-500 text-sm font-medium uppercase">Messages</h3>
          <p className="text-3xl font-bold text-gray-800 mt-2">{stats.contacts}</p>
          <Link to="/admin/contacts" className="text-red-500 text-sm mt-4 block hover:underline">View Messages &rarr;</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
