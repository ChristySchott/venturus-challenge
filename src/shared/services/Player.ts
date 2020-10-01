import api from './api';

export default async function getPlayerByName(filter: string) {
  try {
    const response = await api.get(`/players?q=${filter}`);

    if (response.data) {
      return response.data;
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
