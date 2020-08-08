import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function getAll() {
  return fetch(URL_CATEGORIES)
    .then(async (res) => {
      if (res.ok) {
        const response = await res.json();
        return response;
      }
      throw new Error('Failed to fetch data :(');
    });
}

function getAllCategoriesWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (res) => {
      if (res.ok) {
        const response = await res.json();
        return response;
      }
      throw new Error('Failed to fetch data :(');
    });
}

export default {
  getAllCategoriesWithVideos,
  getAll,
};
