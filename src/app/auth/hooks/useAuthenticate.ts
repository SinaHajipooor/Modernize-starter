import { apiAuthenticate } from "@/api/auth/apiAuthenticate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

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
            console.log(error.message)
            router.push('/auth/login')
        }
    })
    return { mutate, isLoading }

}