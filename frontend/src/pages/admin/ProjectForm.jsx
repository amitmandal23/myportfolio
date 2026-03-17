import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';

const ProjectForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [formData, setFormData] = useState({
    title: '',
    category: 'Web Development',
    description: '',
    url: '',
    technologies: '',
    sort_order: 0,
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEdit) {
      fetchProject();
    }
  }, [id]);

  const fetchProject = async () => {
    try {
      const response = await api.get(`/projects/${id}`);
      const data = response.data;
      setFormData({
        title: data.title,
        category: data.category || 'Web Development',
        description: data.description,
        url: data.url || '',
        technologies: Array.isArray(data.technologies) ? data.technologies.join(', ') : (data.technologies || ''),
        sort_order: data.sort_order || 0,
        image: null // File input can't be set programmatically
      });
      if (data.image) {
        setImagePreview(`http://localhost:8000${data.image}`);
      }
    } catch (error) {
      console.error('Failed to fetch project', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append('title', formData.title);
    data.append('category', formData.category);
    data.append('description', formData.description);
    data.append('url', formData.url);
    data.append('sort_order', formData.sort_order);
    
    // Process technologies string to array
    const techs = formData.technologies.split(',').map(t => t.trim()).filter(t => t);
    techs.forEach((tech, index) => {
        data.append(`technologies[${index}]`, tech);
    });

    if (formData.image) {
      data.append('image', formData.image);
    }

    if (isEdit) {
      data.append('_method', 'PUT'); // Laravel requires this for PUT with FormData
    }

    try {
      if (isEdit) {
        // For file upload with PUT in Laravel, we often need to use POST with _method=PUT
        // or just use POST for update if we route it that way, but standard is POST with _method
        await api.post(`/projects/${id}`, data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
      } else {
        await api.post('/projects', data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
      }
      navigate('/admin/projects');
    } catch (error) {
      console.error('Failed to save project', error.response?.data || error);
      alert('Failed to save project. Please check the form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">{isEdit ? 'Edit Project' : 'Add New Project'}</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Title</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            className="w-full border p-2 rounded" 
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Category</label>
          <select 
            name="category" 
            value={formData.category} 
            onChange={handleChange} 
            className="w-full border p-2 rounded"
          >
            <option value="Web Development">Web Development</option>
            <option value="Graphics Design">Graphics Design</option>
            <option value="Video Editing">Video Editing</option>
            <option value="SEO">SEO</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            className="w-full border p-2 rounded h-32" 
            required 
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Project URL</label>
          <input 
            type="url" 
            name="url" 
            value={formData.url} 
            onChange={handleChange} 
            className="w-full border p-2 rounded" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Technologies (comma separated)</label>
          <input 
            type="text" 
            name="technologies" 
            value={formData.technologies} 
            onChange={handleChange} 
            className="w-full border p-2 rounded" 
            placeholder="React, Laravel, Tailwind"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Sort Order</label>
          <input 
            type="number" 
            name="sort_order" 
            value={formData.sort_order} 
            onChange={handleChange} 
            className="w-full border p-2 rounded" 
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Image</label>
          <input 
            type="file" 
            onChange={handleFileChange} 
            className="w-full" 
            accept="image/*"
          />
          {imagePreview && (
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Preview:</p>
              <img src={imagePreview} alt="Preview" className="h-40 object-cover rounded border" />
            </div>
          )}
        </div>

        <div className="flex justify-end">
            <button 
                type="button" 
                onClick={() => navigate('/admin/projects')}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-4 hover:bg-gray-400"
            >
                Cancel
            </button>
            <button 
                type="submit" 
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
                {loading ? 'Saving...' : (isEdit ? 'Update Project' : 'Create Project')}
            </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
