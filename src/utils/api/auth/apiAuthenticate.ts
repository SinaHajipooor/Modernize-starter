import axiosConfig from "@/utils/axios";

export async function apiAuthenticate() {
    try {
        const response = await axiosConfig.get('api/user');
        return response;
    } catch (error: any) {
        throw new Error(error)
    }
}