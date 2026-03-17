import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would call an API endpoint to send a reset link
    setMessage('If an account exists with this email, you will receive a password reset link.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl shadow-2xl w-96 border border-gray-700">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-500">Reset Password</h2>
        {message && <div className="bg-green-500/10 border border-green-500 text-green-500 p-3 rounded mb-4 text-sm text-center">{message}</div>}
        <div className="mb-6">
          <label className="block text-gray-400 mb-2">Email Address</label>
          <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            className="w-full bg-gray-700 border border-gray-600 p-3 rounded text-white focus:outline-none focus:border-blue-500" 
            placeholder="admin@example.com"
            required 
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">Send Reset Link</button>
        <div className="mt-4 text-center">
            <Link to="/login" className="text-sm text-gray-400 hover:text-blue-500">Back to Login</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
