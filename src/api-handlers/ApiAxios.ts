import axios from 'axios';

const APIAxios = axios.create({
  baseURL: 'https://whiplano-1b8102db6480.herokuapp.com', 
  headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    // 'ngrok-skip-browser-warning': '1',
  },
});

APIAxios.interceptors.request.use(
  (config) => {
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('authToken='))
      ?.split('=')[1];

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default APIAxios;