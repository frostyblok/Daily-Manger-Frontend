import axios from 'axios';
import authUtils from './auth';

const instance = axios.create({
  baseURL: 'http://localhost:8000'
});

instance.interceptors.request.use((config) => {
  const configInstance = { ...config };
  configInstance.headers.Authorization = authUtils.getUserToken();
  return configInstance;
});

export default instance;
