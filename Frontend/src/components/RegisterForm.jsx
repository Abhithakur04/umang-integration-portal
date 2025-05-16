import { useState } from 'react';
import { registerUser, loginUser } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    role: 'Retailer',
  });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      await loginUser({ username: form.username, password: form.password });
      // Cookie is set by backend after login
      navigate('/dashboard');
    } catch {
      alert('Registration failed or user already exists');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <select
        name="role"
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
        value={form.role}
      >
        <option value="Admin">Admin</option>
        <option value="Distributor">Distributor</option>
        <option value="Retailer">Retailer</option>
      </select>
      <button className="w-full bg-green-600 text-white py-2 rounded">Register</button>
      <p className="text-sm mt-2">
        Already have an account? <a href="/" className="text-blue-600">Login</a>
      </p>
    </form>
  );
};

export default RegisterForm;
