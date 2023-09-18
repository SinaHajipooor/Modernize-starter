import axiosConfig from "@/utils/axios";

export async function apiLogin(userData: any) {
    try {
        const response = await axiosConfig.post('/api/auth/base/login', userData);
        if (response.status != 200) throw new Error('Failed to login user')
        // extract user data 
        const data = response.data.result;
        return data;
    } catch (error: any) {
        throw new Error(error.message)
    }
}