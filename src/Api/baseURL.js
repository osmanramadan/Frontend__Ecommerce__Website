import axios from 'axios';

const baseUrl = axios.create({ baseURL: process.env.REACT_APP_API });

export default baseUrl;
