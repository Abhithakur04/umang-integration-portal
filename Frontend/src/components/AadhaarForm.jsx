import { useState } from 'react';
import { getAadhaarStatus } from '../utils/api';
import ResultCard from './ResultCard';

const AadhaarForm = () => {
  const [form, setForm] = useState({ aadhaar: '', dob: '' });
  const [result, setResult] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await getAadhaarStatus(form);
      setResult(res.data);
    } catch {
      alert('Invalid input or session expired');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Check Aadhaar Status</h2>
        <input
          name="aadhaar"
          placeholder="Aadhaar Number (12 digits)"
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          name="dob"
          placeholder="DOB (YYYY-MM-DD)"
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <button className="w-full bg-green-600 text-white py-2 rounded">Submit</button>
      </form>

      {result && <ResultCard data={result} />}
    </div>
  );
};

export default AadhaarForm;
