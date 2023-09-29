import { apiAuthenticate } from "@/api/auth/apiAuthenticate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

// authenticate user 
export default function useAuthenticate() {

    const router = useRouter()
    const queryClient = useQueryClient()

    const { mutate, isLoading, } = useMutation({
        mutationFn: apiAuthenticate,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['userData']
            });
            router.push('/');
        }, onError: (error: any) => {
            router.push('/auth/login')
            throw new Error(error.message)
        }
    })
    return { mutate, isLoading }

}