const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:3000'
  : 'https://aniflix-backend.herokuapp.com/';

export default {
  URL,
};
