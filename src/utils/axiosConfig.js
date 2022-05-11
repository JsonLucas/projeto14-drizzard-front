import axios from 'axios';

const axiosConfig = axios.create({baseUrl: ':http://localhost:5000'});
export default axiosConfig;