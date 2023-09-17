//  import axios from 'axios';

//  const axiosServices = axios.create();

//  // interceptor for http
//  axiosServices.interceptors.response.use(
//      (response) => response,
//      (error) => Promise.reject((error.response && error.response.data) || 'Wrong Services')
//  );

//  export default axiosServices;

// axiosConfig.js

// axiosConfig.js

import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'https://api.example.com',  // BASE URL
    headers: {
        'Content-Type': 'application/json', // CONTENT TYPE
    },
});

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

export default axiosConfig;

