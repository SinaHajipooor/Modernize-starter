import axiosConfig from "@/utils/axios";
import axios from "axios";

export async function login(userData: any) {
    try {
        const response = await axios.post('http://45.149.77.156:8081/api/auth/base/login', userData);
        if (response.status != 200) throw new Error('Failed to login user')
        // get the user token
        const token = response.data.result.token;
        // extract user data 
        const data = response.data.result.user;
        console.log(data)

    } catch (error) {

    }
}
