import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // User requested "username admin", which we mapped to email field in backend update
      // Backend now accepts 'email' field but validation is just 'required' (not |email)
      const response = await api.post('/login', { email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/admin');
    } catch (err) {
      setError('Invalid username or password');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-xl shadow-2xl w-96 border border-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">Admin Login</h2>
        {error && <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded mb-4 text-sm text-center">{error}</div>}
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Username / Email</label>
          <input 
            type="text" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            className="w-full bg-gray-700 border border-gray-600 p-3 rounded text-white focus:outline-none focus:border-blue-500" 
            placeholder="admin"
            required 
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-400 mb-2">Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            className="w-full bg-gray-700 border border-gray-600 p-3 rounded text-white focus:outline-none focus:border-blue-500" 
            placeholder="••••••••"
            required 
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">Login</button>
        <div className="mt-4 text-center">
            <a href="/forgot-password" className="text-sm text-gray-400 hover:text-blue-500">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
