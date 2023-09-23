import axiosConfig from "@/utils/axios";
import axios from "axios";

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
        const response = await axios.post(`http://45.149.77.156:8081/api/profile/activity-history/store`, formData, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status === 200) {
            console.log('Activity history added successfully')
            return response;
        } else {
            console.log(response.statusText)
            throw new Error('Failed to add new Activity history')
        }
    } catch (error: any) {
        console.log(error.message);
        throw new Error(error.message)
    }

}


// edit 
export async function editActivityHistory() {

}

