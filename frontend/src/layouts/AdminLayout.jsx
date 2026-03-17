import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post('/logout');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    } catch (error) {
      console.error('Logout failed', error);
      // Force logout on client side even if API fails
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/login');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      <aside className="w-64 bg-gray-900 text-white flex-shrink-0">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <p className="text-gray-400 text-sm">Welcome, Amit</p>
        </div>
        <nav className="mt-6">
          <Link to="/admin" className="block px-6 py-3 hover:bg-gray-800 transition">Dashboard</Link>
          <Link to="/admin/projects" className="block px-6 py-3 hover:bg-gray-800 transition">Projects</Link>
          <Link to="/admin/content" className="block px-6 py-3 hover:bg-gray-800 transition text-blue-400">Page Content</Link>
          <Link to="/admin/services" className="block px-6 py-3 hover:bg-gray-800 transition">Services</Link>
          <Link to="/admin/skills" className="block px-6 py-3 hover:bg-gray-800 transition">Skills</Link>
          <Link to="/admin/contacts" className="block px-6 py-3 hover:bg-gray-800 transition">Messages</Link>
          <Link to="/admin/settings" className="block px-6 py-3 hover:bg-gray-800 transition">Settings</Link>
          <button onClick={handleLogout} className="block w-full text-left px-6 py-3 hover:bg-gray-800 transition text-red-400">Logout</button>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
