import axios from 'axios';

const client = axios.create({
  // TODO: loaded this variable dynamically depending of the environment
  baseURL: 'https://torre-test-api.uc.r.appspot.com',
});

export default client;
