import Axios from 'axios';

export const BASE_URL = 'https://www.api-football.com/demo/v2';

const api = Axios.create({
  baseURL: BASE_URL,
});

export default api;
