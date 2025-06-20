import axios from 'axios';

//produccion
// const URL_BASE = 'https://harmony-production-ff6ebeae2992.herokuapp.com/'; // anterior ya no fucniona
const URL_BASE = 'https://harmony-api-prod-4a08fe78d33b.herokuapp.com1/'; // 20-06-2025

const HarmonyApi = axios.create({
  baseURL: URL_BASE,
});

export default HarmonyApi;
