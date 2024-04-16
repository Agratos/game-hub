import axios from 'axios';

const API_KEY = process.env.REACT_APP_GAME_API;

// GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY

const api = axios.create({
  baseURL: 'https://api.rawg.io/api',
});

// 요청 전에 api key 추가
api.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      key: API_KEY,
    };
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

export default api;
