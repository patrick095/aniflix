import axios from 'axios';
import config from '../config';

const URL_CATEGORIES = `${config.URL}/categories`;

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
  return fetch(`${URL_CATEGORIES}?page=1&limit=10`)
    .then(async (res) => {
      if (res.ok) {
        const response = await res.json();
        return response;
      }
      throw new Error('Failed to fetch data :(');
    });
}
function createNewCategory({
  name, id, description, color, token, userid,
}) {
  const URL_NEWCATEGORY = `${config.URL}/auth/newcategory`;
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
    userid,
  };
  const data = {
    name,
    id,
    description,
    color,
  };
  return axios.post(URL_NEWCATEGORY, data, {
    headers,
  })
    .then((res) => res);
}

function deleteCategory({
  name, id, token, userid,
}) {
  const URL_NEWCATEGORY = `${config.URL}/auth/deletecategory`;
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
    userid,
  };
  const data = {
    name,
    id,
  };
  return axios.post(URL_NEWCATEGORY, data, {
    headers,
  })
    .then((res) => res);
}

export default {
  getAllCategoriesWithVideos,
  getAll,
  createNewCategory,
  deleteCategory,
};
