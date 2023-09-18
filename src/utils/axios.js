import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'http://45.149.77.156:8081',  // BASE URL
    headers: {
        'Content-Type': 'application/json', // CONTENT TYPE
    },
});
export default axiosConfig;

// // USER TOKEN
axiosConfig.interceptors.request.use(
    async (config) => {
        const response = await axios.get('/api/auth/login')
        if (response.data.token) {
            config.headers['Authorization'] = `Bearer ${response.data.token.value}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


