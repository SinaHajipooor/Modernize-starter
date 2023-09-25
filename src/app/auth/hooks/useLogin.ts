import { apiLogin } from "@/api/auth/apiLogin";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useLogin() {
    const queryClient = useQueryClient()
    const router = useRouter()
    // mutate 
    const { isLoading, mutate } = useMutation({
        mutationFn: (userInfo: any) => apiLogin(userInfo),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['userData']
            });
            router.replace('/')
            toast.success('با موفقیت وارد حساب شدید');
        },
        onError: (error: any) => {
            toast.error('امکان ورود وجود ندارد')
            throw new Error(error.message)
        }
    });
    return { isLoading, mutate };
} 