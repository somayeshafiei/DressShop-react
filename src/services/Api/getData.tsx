import axios from 'axios';

const getData = axios.create({
  method: 'GET',
  baseURL: 'http://localhost:3001',
});
export default getData;
