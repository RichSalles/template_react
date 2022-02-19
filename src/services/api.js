import axios from 'axios';

const api = axios.create({
  baseURL: 'https://c2.tours',
});

export default api;
