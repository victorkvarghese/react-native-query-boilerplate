import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  responseType: 'json',
  withCredentials: true,
});

export { apiClient };
