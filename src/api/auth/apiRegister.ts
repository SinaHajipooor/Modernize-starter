import axiosConfig from "@/utils/axios";

export async function register(userData: any) {
    const response = await axiosConfig.post('api/auth/register', userData);
    if (response.status != 200) throw new Error('failed to register');
    const data = await response.data.json()
    return data;
}
