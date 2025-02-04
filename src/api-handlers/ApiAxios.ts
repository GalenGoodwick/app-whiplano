import axios from 'axios';

const APIAxios = axios.create({
  baseURL: 'https://whiplano-1b8102db6480.herokuapp.com', 
  headers: {
      'Content-Type': 'application/json', // Set the default content type for requests
    // 'ngrok-skip-browser-warning': '1',
  },
});

export default APIAxios;