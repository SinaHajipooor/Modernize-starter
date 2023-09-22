import axiosConfig from "@/utils/axios";

const ACTIVITY_BASE_URL = '/api/profile/activity-history'


// index 
export async function apiFetchAllActivityHistories() {
    try {
        const response = await axiosConfig.get(`${ACTIVITY_BASE_URL}?user_id=1`);
        const data = response.data.result.data;
        console.log(data);
        return data;
    } catch (error: any) {
        console.log(error.message)
        throw new Error(error.message)
    }
}

// delete 
export async function deleteActivityHistory(id: any) {
    try {
        const response = await axiosConfig.delete(`${ACTIVITY_BASE_URL}/destroy/${id}`)
        return response;
    } catch (error: any) {
        console.log(error.message);
        throw new Error(error.message)
    }
}