import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

const conf: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_URL
}
  
const $authHost: AxiosInstance = axios.create(conf)

$authHost.interceptors.request.use((config) => {
    if (config.headers) { 
        config.headers.authorization = `Bearer ${localStorage.getItem('token')}`; 
    }
    return config;
});

export {
    $host,
    $authHost
}
