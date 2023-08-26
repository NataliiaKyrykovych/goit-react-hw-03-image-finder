import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const apiKey = '39077697-cfc67df85231ec7c5add9da2a';

export const fetchImages = async (query, page) => {
  const response = await axios.get(`/?`, {
    params: {
      key: apiKey,
      q: query,
      page,
      per_page: 12,
    },
  });
  console.log(response.data);
  return response.data;
};