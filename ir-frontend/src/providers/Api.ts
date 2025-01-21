import axios from 'axios';

const baseURL = import.meta.env.VITE_EXTERNAL_URL;

export const Api = axios.create({ baseURL });
