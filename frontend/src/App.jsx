import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import AdminLayout from './layouts/AdminLayout';
import Home from './pages/Home';
import About from './pages/About';
import LogoDesign from './pages/LogoDesign';
import GraphicsDesign from './pages/GraphicsDesign';
import DigitalMarketing from './pages/DigitalMarketing';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';
import AdminProjects from './pages/admin/AdminProjects';
import ProjectForm from './pages/admin/ProjectForm';
import AdminMessages from './pages/admin/AdminMessages';
import AdminServices from './pages/admin/AdminServices';
import AdminSkills from './pages/admin/AdminSkills';
import AdminSettings from './pages/admin/AdminSettings';
import ProtectedRoute from './components/ProtectedRoute';

import ForgotPassword from './pages/ForgotPassword';
import AdminContent from './pages/admin/AdminContent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="logo-design" element={<LogoDesign />} />
          <Route path="graphics-design" element={<GraphicsDesign />} />
          <Route path="digital-marketing" element={<DigitalMarketing />} />
          <Route path="website-development" element={<WebsiteDevelopment />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project/:id" element={<ProjectDetails />} />
        </Route>
        
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="projects" element={<AdminProjects />} />
          <Route path="projects/new" element={<ProjectForm />} />
          <Route path="projects/edit/:id" element={<ProjectForm />} />
          <Route path="services" element={<AdminServices />} />
          <Route path="skills" element={<AdminSkills />} />
          <Route path="contacts" element={<AdminMessages />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="content" element={<AdminContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
