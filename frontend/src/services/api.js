import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Interceptor for token - only add token if it exists and request is not for public endpoints
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  // Don't add auth header to public contact endpoint
  if (token && config.url !== '/contact') {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
