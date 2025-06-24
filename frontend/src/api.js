import axios from 'axios';
import { ACCESS_TOKEN } from './constants';

const apiUrl = "/choreo-apis/django-react/backend/v1"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,  // environment variable for API URL
})

// no need to set the base URL
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default api;
// This code sets up an Axios instance with a base URL and an interceptor to add the access token to the headers of each request.