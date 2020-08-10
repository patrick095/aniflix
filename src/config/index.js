const URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:3000'
  : 'https://aniflix-backend.herokuapp.com';
// tive que corrigir um bug!!!
export default {
  URL,
};
