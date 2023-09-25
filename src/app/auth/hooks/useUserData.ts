import { useQuery } from "@tanstack/react-query";
import { apiAuthenticate } from "@/api/auth/apiAuthenticate";

export default function useUserData() {

    const { data: userData, isLoading, isError } = useQuery({
        queryKey: ['userData'],
        queryFn: apiAuthenticate,
        retry: false,
    });


    return { isLoading, userData, isError }
}