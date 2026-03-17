import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', icon: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await api.get('/services');
      setServices(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/services/${editingId}`, form);
      } else {
        await api.post('/services', form);
      }
      setForm({ title: '', description: '', icon: '' });
      setEditingId(null);
      fetchServices();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (service) => {
    setForm({ title: service.title, description: service.description, icon: service.icon || '' });
    setEditingId(service.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete service?')) {
      try {
        await api.delete(`/services/${id}`);
        fetchServices();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">{editingId ? 'Edit Service' : 'Add Service'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
              <input 
                type="text" 
                value={form.title} 
                onChange={e => setForm({...form, title: e.target.value})} 
                className="w-full border p-2 rounded" 
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
              <textarea 
                value={form.description} 
                onChange={e => setForm({...form, description: e.target.value})} 
                className="w-full border p-2 rounded h-24" 
                required 
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Icon (Lucide Name)</label>
              <input 
                type="text" 
                value={form.icon} 
                onChange={e => setForm({...form, icon: e.target.value})} 
                className="w-full border p-2 rounded" 
                placeholder="e.g. Code, Layout"
              />
            </div>
            <div className="flex justify-end">
              {editingId && (
                <button 
                  type="button" 
                  onClick={() => { setEditingId(null); setForm({ title: '', description: '', icon: '' }); }}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2 hover:bg-gray-400"
                >
                  Cancel
                </button>
              )}
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                {editingId ? 'Update' : 'Add'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="bg-white rounded shadow overflow-hidden">
            <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {services.map(service => (
                        <tr key={service.id}>
                            <td className="px-6 py-4">
                                <div className="font-medium text-gray-900">{service.title}</div>
                                <div className="text-sm text-gray-500">{service.description}</div>
                            </td>
                            <td className="px-6 py-4 text-right whitespace-nowrap text-sm font-medium">
                                <button onClick={() => handleEdit(service)} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                                <button onClick={() => handleDelete(service.id)} className="text-red-600 hover:text-red-900">Delete</button>
                            </td>
                        </tr>
                    ))}
                    {services.length === 0 && <tr><td colSpan="2" className="px-6 py-4 text-center text-gray-500">No services added.</td></tr>}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default AdminServices;
