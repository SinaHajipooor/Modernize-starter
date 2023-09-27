import axiosConfig from "@/utils/axios";
import axios from "axios";
import toast from "react-hot-toast";

export async function apiLogin(userData: any) {
    try {
        const response = await axiosConfig.post('/api/auth/base/login', userData);
        if (response.status != 200) {
            toast.error('اطلاعات وارد شده اشتباه است')
            throw new Error('Failed to login user')
        } else {
            // extract user data 
            const data = response.data.result;
            const nextResponse = await axios.post('/api/auth/login', { token: data.token });
            return nextResponse;
        }
    } catch (error: any) {
        throw new Error(error.message)
    }
}