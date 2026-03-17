import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    hero_title: '',
    hero_description: '',
    about_text: '',
    about_image: '', // URL or path
    contact_email: '',
    contact_phone: '',
    contact_address: '',
    facebook_url: '',
    twitter_url: '',
    linkedin_url: '',
    github_url: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await api.get('/settings');
      // res.data is object { key: value }
      setSettings(prev => ({ ...prev, ...res.data }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/settings', settings);
      alert('Settings updated successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to update settings');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">Site Settings</h2>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-8">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">Hero Section</h3>
            <div className="grid grid-cols-1 gap-4">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Hero Title</label>
                    <input type="text" name="hero_title" value={settings.hero_title} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Hero Description</label>
                    <textarea name="hero_description" value={settings.hero_description} onChange={handleChange} className="w-full border p-2 rounded h-24"></textarea>
                </div>
            </div>
        </div>

        <div className="mb-8">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">About Section</h3>
            <div className="grid grid-cols-1 gap-4">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">About Me Text</label>
                    <textarea name="about_text" value={settings.about_text} onChange={handleChange} className="w-full border p-2 rounded h-32"></textarea>
                </div>
            </div>
        </div>

        <div className="mb-8">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">Contact Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input type="email" name="contact_email" value={settings.contact_email} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                    <input type="text" name="contact_phone" value={settings.contact_phone} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
                    <input type="text" name="contact_address" value={settings.contact_address} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
            </div>
        </div>

        <div className="mb-8">
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">Social Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Facebook URL</label>
                    <input type="url" name="facebook_url" value={settings.facebook_url} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Twitter URL</label>
                    <input type="url" name="twitter_url" value={settings.twitter_url} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">LinkedIn URL</label>
                    <input type="url" name="linkedin_url" value={settings.linkedin_url} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">GitHub URL</label>
                    <input type="url" name="github_url" value={settings.github_url} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
            </div>
        </div>

        <button type="submit" disabled={loading} className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 disabled:opacity-50">
            {loading ? 'Saving...' : 'Save Settings'}
        </button>
      </form>
    </div>
  );
};

export default AdminSettings;
