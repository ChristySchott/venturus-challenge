import api from './api';

export default async function getPlayers(filter: string) {
  try {
    const response = await api.get(`/players/search/${filter}`);

    if (response.data) {
      return response.data;
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
