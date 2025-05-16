import { useState } from 'react';
import { loginUser } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(form);
      
      navigate('/dashboard'); 
    } catch {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input name="username" placeholder="Username" onChange={handleChange}
        className="w-full mb-3 p-2 border rounded" required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange}
        className="w-full mb-3 p-2 border rounded" required />
      <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
      <p className="text-sm mt-2">Don't have an account? <a href="/register" className="text-blue-600">Register</a></p>
    </form>
  );
};

export default LoginForm;
