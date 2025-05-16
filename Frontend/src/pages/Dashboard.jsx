import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../utils/api';
import AadhaarForm from '../components/AadhaarForm';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser(); // backend clears the cookie
      navigate('/'); // redirect to login
    } catch (error) {
      alert('Logout failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <span className="text-lg font-semibold">UMANG Dashboard</span>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
        >
          Logout
        </button>
      </header>

      <AadhaarForm />
    </div>
  );
};

export default Dashboard;
