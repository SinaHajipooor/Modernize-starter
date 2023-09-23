import axiosConfig from "@/utils/axios";

const ACTIVITY_BASE_URL = '/api/profile/activity-history'


// index 
export async function apiFetchAllActivityHistories() {
    try {
        const response = await axiosConfig.get(`${ACTIVITY_BASE_URL}?user_id=1`);
        const data = response.data.result.data;
        return data;
    } catch (error: any) {
        throw new Error(error.message)
    }
}

// delete 
export async function apiDeleteActivityHistory(id: any) {
    try {
        const response = await axiosConfig.delete(`${ACTIVITY_BASE_URL}/destroy/${id}`)
        return response;
    } catch (error: any) {
        console.log(error.message);
        throw new Error(error.message)
    }
}

// create 
export async function apiCreateActivityHistory(newActivityHistory: any, file: any) {
    try {
        const formData = new FormData();
        Object.entries(newActivityHistory).forEach(([key, value]: any) => {
            formData.append(key, value);
        });
        formData.append('file', file[0]);
        const response = await axiosConfig.post(`${ACTIVITY_BASE_URL}/store`, formData, {
            headers: {}
        });
        return response
    } catch (error: any) {
        console.log(error.message);
        throw new Error(error.message)
    }
}


// show 
export async function apiShowActivityHistory(id: any) {
    try {
        const response = await axiosConfig(`${ACTIVITY_BASE_URL}/show/${id}?user_id=1`);
        const data = response.data.result;
        return data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

