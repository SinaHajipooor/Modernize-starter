import axiosConfig from "@/utils/axios";
import axios from "axios";

export async function apiLogin(userData: any) {
    try {
        const response = await axiosConfig.post('/api/auth/base/login', userData);
        if (response.status != 200) throw new Error('Failed to login user')
        // extract user data 
        const data = response.data.result;
        const nextResponse = await axios.post('/api/auth/login', { token: data.token });
        return nextResponse;
    } catch (error: any) {
        throw new Error(error.message)
    }
}