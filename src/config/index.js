const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://devflix-nine.herokuapp.com';

export default {
  URL,
};
