import axiosConfig from "@/utils/axios";

export async function login(userData: any) {
    try {
        const response = await axiosConfig.post('/api/auth/base/login', userData);
        if (response.status != 200) throw new Error('Failed to login user')
        // get the user token
        const token = response.data.result.token;
        // extract user data 
        const data = response.data.result.user;
        return data;
    } catch (error: any) {
        throw new Error(error.message)
    }
}
