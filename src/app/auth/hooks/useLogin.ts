import { apiLogin } from "@/api/auth/apiLogin";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useLogin() {
    const router = useRouter()
    const { mutate, isLoading } = useMutation({
        mutationFn: (userInfo: any) => apiLogin(userInfo),
        onSuccess: () => {
            toast.success('با موفقیت وارد شدید');
            router.replace('/')
        },
        onError: (err: any) => {
            toast.error('امکان ورود وجود ندارد');
            throw new Error(err.message);
        },

    })


    return { isLoading, mutate }
} 