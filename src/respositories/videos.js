import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(video) {
  return fetch(`${URL_VIDEOS}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then(async (res) => {
      if (res.ok) {
        const response = await res.json();
        return response;
      }
      throw new Error('Failed to create data :(');
    });
}

export default {
  create,
};
