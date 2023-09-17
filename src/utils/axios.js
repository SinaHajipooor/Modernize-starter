import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'http://45.149.77.156:8081',  // BASE URL
    headers: {
        'Content-Type': 'application/json', // CONTENT TYPE
    },
});
export default axiosConfig;

// USER TOKEN
axiosConfig.interceptors.request.use(
    //     (config) => {
    //         const userToken = localStorage.getItem('userToken');
    //         if (userToken) {
    //             config.headers['Authorization'] = `Bearer ${userToken}`;
    //         }
    //         return config;
    //     },
    //     (error) => {
    //         return Promise.reject(error);
    //     }
);


