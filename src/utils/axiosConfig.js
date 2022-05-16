import axios from 'axios';

const axiosConfig = axios.create({baseURL: 'https://drizzard.herokuapp.com/'}); //https://drizzard.herokuapp.com
export default axiosConfig;