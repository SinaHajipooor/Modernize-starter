import { apiAuthenticate } from "@/api/auth/apiAuthenticate";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useAuthenticate() {

    const queryClient = useQueryClient()

    const { mutate, isLoading } = useMutation({
        mutationFn: apiAuthenticate,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['userData']
            })
        }, onError: (error: any) => {
            console.log(error.message)
        }
    })
    return { mutate, isLoading }

}