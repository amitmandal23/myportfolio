import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const AdminSkills = () => {
  const [skills, setSkills] = useState([]);
  const [form, setForm] = useState({ name: '', proficiency: 50, category: '', icon: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const res = await api.get('/skills');
      setSkills(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/skills/${editingId}`, form);
      } else {
        await api.post('/skills', form);
      }
      setForm({ name: '', proficiency: 50, category: '', icon: '' });
      setEditingId(null);
      fetchSkills();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (skill) => {
    setForm({ 
        name: skill.name, 
        proficiency: skill.proficiency, 
        category: skill.category || '', 
        icon: skill.icon || '' 
    });
    setEditingId(skill.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete skill?')) {
      try {
        await api.delete(`/skills/${id}`);
        fetchSkills();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">{editingId ? 'Edit Skill' : 'Add Skill'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input 
                type="text" 
                value={form.name} 
                onChange={e => setForm({...form, name: e.target.value})} 
                className="w-full border p-2 rounded" 
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Proficiency (%)</label>
              <input 
                type="number" 
                min="0"
                max="100"
                value={form.proficiency} 
                onChange={e => setForm({...form, proficiency: e.target.value})} 
                className="w-full border p-2 rounded" 
                required 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
              <select 
                value={form.category} 
                onChange={e => setForm({...form, category: e.target.value})}
                className="w-full border p-2 rounded"
              >
                  <option value="">Select Category</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Design">Design</option>
                  <option value="Tools">Tools</option>
              </select>
            </div>
            <div className="flex justify-end">
              {editingId && (
                <button 
                  type="button" 
                  onClick={() => { setEditingId(null); setForm({ name: '', proficiency: 50, category: '', icon: '' }); }}
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
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Skill</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Proficiency</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {skills.map(skill => (
                        <tr key={skill.id}>
                            <td className="px-6 py-4 font-medium text-gray-900">{skill.name}</td>
                            <td className="px-6 py-4">
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skill.proficiency}%` }}></div>
                                </div>
                                <span className="text-xs text-gray-500 mt-1">{skill.proficiency}%</span>
                            </td>
                            <td className="px-6 py-4 text-gray-500">{skill.category}</td>
                            <td className="px-6 py-4 text-right whitespace-nowrap text-sm font-medium">
                                <button onClick={() => handleEdit(skill)} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                                <button onClick={() => handleDelete(skill.id)} className="text-red-600 hover:text-red-900">Delete</button>
                            </td>
                        </tr>
                    ))}
                    {skills.length === 0 && <tr><td colSpan="4" className="px-6 py-4 text-center text-gray-500">No skills added.</td></tr>}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default AdminSkills;
