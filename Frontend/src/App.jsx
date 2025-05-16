import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [role, setRole] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setToken={setToken} setRole={setRole} />} />
        <Route path="/register" element={<RegisterPage setToken={setToken} setRole={setRole} />} />
        <Route path="/dashboard" element={<Dashboard token={token} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
