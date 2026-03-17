import { useState, useEffect } from 'react';
import api from '../services/api';

const usePageContent = (pageName, defaultContent = {}) => {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await api.get(`/content?page=${pageName}`);
        if (response.data && Object.keys(response.data).length > 0) {
            // Merge with defaults deeply? Or just replace sections?
            // For now, let's assume API response structure matches expectations
            // We need to flatten the structure slightly: section -> key -> value
            const formatted = {};
            
            // If API returns grouped by section (which our controller does)
            // { SectionName: { KeyName: { value: "...", type: "..." } } }
            
            Object.keys(response.data).forEach(section => {
                formatted[section] = {};
                Object.keys(response.data[section]).forEach(key => {
                    formatted[section][key] = response.data[section][key].value;
                });
            });

            // Merge formatted with default content to ensure missing keys rely on defaults
            const merged = { ...defaultContent };
            Object.keys(formatted).forEach(section => {
                merged[section] = { ...merged[section], ...formatted[section] };
            });
            
            setContent(merged);
        }
      } catch (err) {
        console.error(`Error fetching content for ${pageName}:`, err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [pageName]);

  return { content, loading, error };
};

export default usePageContent;
