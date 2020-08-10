const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:3000'
  : 'https://devflix-nine.herokuapp.com';

export default {
  URL,
};
