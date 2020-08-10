import axios from 'axios';
import config from '../config';

const URL_API = `${config.URL}/signin`;

function signin(user, password) {
  const data = { user, password };
  return axios.post(URL_API, data)
    .then((res) => res);
}

// function getAllCategoriesWithVideos() {
//   return fetch(`${URL_API}?page=1&limit=10`)
//     .then(async (res) => {
//       if (res.ok) {
//         const response = await res.json();
//         return response;
//       }
//       throw new Error('Failed to fetch data :(');
//     });
// }

export default {
//   getAllCategoriesWithVideos,
  signin,
};
