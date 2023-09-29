import { useMutation, useQuery } from "@tanstack/react-query";
import { apiAuthenticate } from "@/api/auth/apiAuthenticate";


// get all user data from auth api
export default function useUserData() {

    const { data: userData, isLoading, isError } = useQuery({
        queryKey: ['userData'],
        queryFn: apiAuthenticate,
    });
    return { isLoading, userData, isError }



}