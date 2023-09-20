import axiosConfig from "@/utils/axios";

// index 
export async function apiFetchAllActivityHistories() {
    try {
        const response = await axiosConfig.get('/api/profile/activity-history?user_id=1');
        const data = response.data.result.data;
        console.log(data);
        return data;
    } catch (error: any) {
        console.log(error.message)
        throw new Error(error.message)
    }
}