import axiosConfig from "@/utils/axios";

export async function register(userData: any) {
    const response = await axiosConfig.post('api/auth/register')
}
