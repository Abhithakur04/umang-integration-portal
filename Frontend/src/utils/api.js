import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;


const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, 
});

export const loginUser = (data) => API.post('/auth/login', data);
export const registerUser = (data) => API.post('/auth/register', data);
export const getAadhaarStatus = (data) => API.post('/aadhaar-status', data);
export const logoutUser = () => API.post('/auth/logout'); 
