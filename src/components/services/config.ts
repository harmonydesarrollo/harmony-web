import axios from 'axios';
// produccion baushell
const URL_BASE = 'https://harmony-production-ff6ebeae2992.herokuapp.com/';

const HarmonyApi = axios.create({
  baseURL: URL_BASE,
});

export default HarmonyApi;
