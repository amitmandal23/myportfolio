import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import api from '../../services/api';
import { Save, Image, Type, AlignLeft, Layers } from 'lucide-react';

const AdminContent = () => {
  const [selectedPage, setSelectedPage] = useState('Home');
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const pages = [
    'Home', 
    'About', 
    'WebsiteDevelopment', 
    'DigitalMarketing', 
    'GraphicsDesign', 
    'LogoDesign', 
    'Blog', 
    'Contact'
  ];

  // Fetch content when page changes
  useEffect(() => {
    fetchContent(selectedPage);
  }, [selectedPage]);

  const fetchContent = async (page) => {
    setLoading(true);
    try {
      const response = await api.get(`/content?page=${page}`);
      setContent(response.data);
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (section, key, value, type = 'text') => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: { value, type, page: selectedPage, section, key }
      }
    }));
  };

  const handleImageUpload = async (section, key, file) => {
    if (!file) return;

    const formData = new FormData();
    formData.append('page', selectedPage);
    formData.append('section', section);
    formData.append('key', key);
    formData.append('value', file);
    formData.append('type', 'image');

    try {
        setSaving(true);
        const response = await api.post('/content', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        
        // Update state with new image URL
        handleInputChange(section, key, response.data.value, 'image');
        setMessage('Image uploaded successfully!');
        setTimeout(() => setMessage(''), 3000);
    } catch (error) {
        console.error('Upload failed:', error);
        setMessage('Image upload failed.');
    } finally {
        setSaving(false);
    }
  };

  const saveContent = async () => {
    setSaving(true);
    setMessage('');
    
    // Flatten content for bulk update
    const updates = [];
    Object.keys(content).forEach(section => {
        Object.keys(content[section]).forEach(key => {
            const item = content[section][key];
            // Only add if it has a value and is not an image (images are saved on upload)
            // Or if it is an image URL string (already saved, but good to ensure consistency)
            if (item.type !== 'image' || typeof item.value === 'string') {
                 updates.push({
                    page: selectedPage,
                    section: section,
                    key: key,
                    value: item.value,
                    type: item.type || 'text'
                });
            }
        });
    });

    try {
      await api.post('/content/bulk', updates);
      setMessage('Content saved successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error saving content:', error);
      setMessage('Failed to save content.');
    } finally {
      setSaving(false);
    }
  };

  // Helper to render inputs based on type
  const renderInput = (section, key, item) => {
    const type = item.type || 'text';
    const value = item.value || '';

    if (type === 'rich_text') {
        return (
            <div className="mb-4">
                <ReactQuill 
                    theme="snow" 
                    value={value} 
                    onChange={(val) => handleInputChange(section, key, val, 'rich_text')}
                    className="bg-white text-black h-64 mb-12"
                />
            </div>
        );
    }

    if (type === 'image_array') {
        // For gallery - multiple images
        const images = Array.isArray(value) ? value : (value ? [value] : []);
        
        return (
            <div className="mb-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                    {images.map((img, idx) => (
                        <div key={idx} className="relative group">
                            <img src={img} alt={`Gallery ${idx}`} className="w-full h-32 object-cover rounded-lg border border-gray-600" />
                            <button
                                onClick={() => {
                                    const newImages = images.filter((_, i) => i !== idx);
                                    handleInputChange(section, key, newImages, 'image_array');
                                }}
                                className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <span className="text-xs">×</span>
                            </button>
                        </div>
                    ))}
                </div>
                <input 
                    type="file" 
                    accept="image/*"
                    multiple
                    onChange={async (e) => {
                        const files = Array.from(e.target.files);
                        if (files.length === 0) return;
                        
                        const uploadedImages = [...images];
                        
                        for (const file of files) {
                            const formData = new FormData();
                            formData.append('page', selectedPage);
                            formData.append('section', section);
                            formData.append('key', key);
                            formData.append('value', file);
                            formData.append('type', 'image');
                            
                            try {
                                const response = await api.post('/content', formData, {
                                    headers: { 'Content-Type': 'multipart/form-data' }
                                });
                                uploadedImages.push(response.data.value);
                            } catch (error) {
                                console.error('Upload failed:', error);
                            }
                        }
                        
                        handleInputChange(section, key, uploadedImages, 'image_array');
                        setMessage('Images uploaded successfully!');
                        setTimeout(() => setMessage(''), 3000);
                    }}
                    className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                />
                <p className="text-xs text-gray-500 mt-2">Select multiple images to add to gallery</p>
            </div>
        );
    }

    if (type === 'image') {
        return (
            <div className="mb-4">
                {value && (
                    <img src={value} alt={key} className="w-32 h-32 object-cover rounded-lg border border-gray-600 mb-2" />
                )}
                <input 
                    type="file" 
                    onChange={(e) => handleImageUpload(section, key, e.target.files[0])}
                    className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                />
            </div>
        );
    }

    // Default text area for long text, input for short
    return (
        <div className="mb-4">
            {value.length > 50 ? (
                <textarea 
                    value={value} 
                    onChange={(e) => handleInputChange(section, key, e.target.value, 'text')}
                    className="w-full bg-gray-700 border border-gray-600 p-3 rounded text-white focus:outline-none focus:border-blue-500 h-32"
                />
            ) : (
                <input 
                    type="text" 
                    value={value} 
                    onChange={(e) => handleInputChange(section, key, e.target.value, 'text')}
                    className="w-full bg-gray-700 border border-gray-600 p-3 rounded text-white focus:outline-none focus:border-blue-500"
                />
            )}
        </div>
    );
  };

  // Configuration for default fields if they don't exist in DB yet
  // This helps bootstrap the UI
  const getDefaultFields = (page) => {
      if (page === 'Home') return {
          Hero: {
              title: { type: 'text', value: 'Creative & Modern Portfolio' },
              subtitle: { type: 'text', value: 'I build digital experiences.' },
              image: { type: 'image', value: '' }
          },
          About: {
              content: { type: 'rich_text', value: '<p>About me content...</p>' },
              image: { type: 'image', value: '' }
          },
          PortfolioGallery: {
              galleryImages: { type: 'image_array', value: [] }
          }
      };
      if (page === 'WebsiteDevelopment') return {
          Hero: {
              title: { type: 'text', value: 'Website Development' },
              subtitle: { type: 'text', value: 'Custom solutions for your business.' },
              image: { type: 'image', value: '' },
              badge: { type: 'text', value: 'Modern & Fast' }
          },
          Intro: {
              title: { type: 'text', value: 'Create with Amit is a full-service Digital Media agency...' },
              description: { type: 'text', value: 'Intro description...' },
              image: { type: 'image', value: '' }
          },
          Platforms: {
              title: { type: 'text', value: 'Web Development Platforms' },
              subtitle: { type: 'text', value: 'We specialize in both Custom Website Development...' },
              cardTitle: { type: 'text', value: 'Custom & WordPress Development' },
              cardDescription: { type: 'text', value: 'Whether you need a fully custom-coded website...' },
              cardImage: { type: 'image', value: '' }
          }
      };
      return {};
  };

  // Merge fetched content with defaults
  const displayContent = { ...getDefaultFields(selectedPage), ...content };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Page Content Manager</h2>
        <div className="flex gap-4">
            {message && <span className="text-green-600 font-medium animate-pulse">{message}</span>}
            <button 
                onClick={saveContent} 
                disabled={saving}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
                <Save size={20} />
                {saving ? 'Saving...' : 'Save Changes'}
            </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar Page Selector */}
        <div className="col-span-3 bg-white rounded-xl shadow-sm p-4 h-fit">
            <h3 className="text-lg font-semibold mb-4 text-gray-700 flex items-center gap-2">
                <Layers size={20} /> Pages
            </h3>
            <ul className="space-y-2">
                {pages.map(page => (
                    <li key={page}>
                        <button 
                            onClick={() => setSelectedPage(page)}
                            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedPage === page ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </div>

        {/* Content Editor */}
        <div className="col-span-9 space-y-6">
            {loading ? (
                <div className="text-center py-12 text-gray-500">Loading content...</div>
            ) : (
                Object.keys(displayContent).length > 0 ? (
                    Object.keys(displayContent).map(section => (
                        <div key={section} className="bg-white rounded-xl shadow-sm p-6">
                            <h3 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2">{section} Section</h3>
                            <div className="space-y-6">
                                {Object.keys(displayContent[section]).map(key => (
                                    <div key={key}>
                                        <label className="block text-sm font-medium text-gray-700 mb-2 capitalize flex items-center gap-2">
                                            {key} 
                                            <span className="text-xs text-gray-400 font-normal">({displayContent[section][key].type || 'text'})</span>
                                        </label>
                                        {renderInput(section, key, displayContent[section][key])}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="bg-white rounded-xl shadow-sm p-12 text-center text-gray-500">
                        No editable content configured for this page yet. 
                        <br/>Start by adding content keys in the code or DB.
                    </div>
                )
            )}
            
            {/* Add New Field Helper (Optional, for dynamic field creation) */}
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                <p className="text-gray-500 mb-4">Need to add a new field?</p>
                <div className="flex gap-2 justify-center">
                    <input id="newSection" placeholder="Section Name" className="p-2 border rounded" />
                    <input id="newKey" placeholder="Field Name" className="p-2 border rounded" />
                    <select id="newType" className="p-2 border rounded">
                        <option value="text">Text</option>
                        <option value="rich_text">Rich Text</option>
                        <option value="image">Image</option>
                    </select>
                    <button 
                        onClick={() => {
                            const section = document.getElementById('newSection').value;
                            const key = document.getElementById('newKey').value;
                            const type = document.getElementById('newType').value;
                            if(section && key) {
                                handleInputChange(section, key, '', type);
                                // Clear inputs
                                document.getElementById('newKey').value = '';
                            }
                        }}
                        className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                    >
                        Add Field
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
