import { apiLogin } from "@/api/auth/apiLogin";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useLogin() {
    const router = useRouter()
    const { isLoading, mutate } = useMutation({
        mutationFn: (userInfo: any) => apiLogin(userInfo),
        onSuccess: () => {
            toast.success('با موفقیت وارد حساب شدید'),
                router.replace('/')
        },
        onError: () => {
            toast.error('امکان ورود وجود ندارد')
        }
    });

    return { mutate, isLoading }
} 