import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, 
});

export const loginUser = (data) => API.post('/auth/login', data);
export const registerUser = (data) => API.post('/auth/register', data);
export const getAadhaarStatus = (data) => API.post('/aadhaar-status', data);
