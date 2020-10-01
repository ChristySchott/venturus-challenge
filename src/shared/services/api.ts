import Axios from 'axios';

export const BASE_URL = 'http://localhost:3333';

const api = Axios.create({
  baseURL: BASE_URL,
});

export default api;
