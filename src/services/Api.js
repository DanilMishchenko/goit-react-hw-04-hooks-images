import axios from 'axios';

const API_KEY = '21952569-4b44b40a7ae5579ea0d6f7f48';
axios.defaults.baseURL =
  'https://pixabay.com/api/?&image_type=photo&orientation=horizontal&per_page=12&';

export const searchImage = async (search, page) => {
  const url = `&key=${API_KEY}&q=${search}&page=${page}`;
  const materials = await axios.get(url);
  return materials.data.hits;
};
