import axios from 'axios';

const axiosConfig = axios.create({baseURL: 'http://localhost:5000'}); //https://drizzard.herokuapp.com
export default axiosConfig;