import axiosConfig from "@/utils/axios";

export async function apiAuthenticate() {
    const response = await axiosConfig.get('api/user');
    return response;
}