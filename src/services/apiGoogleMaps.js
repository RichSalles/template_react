import axios from 'axios';

const apiGoogleMaps = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api',
});

export default apiGoogleMaps;
