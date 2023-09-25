import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export default function useLogout() {
    const router = useRouter()

    const { isLoading, mutate } = useMutation({
        mutationFn: () => axios.get('/api/auth/logout'),
        onSuccess: () => {
            router.replace('/auth/login');
            toast.success('با موفقیت از حساب خود خارج شدید');
        },
        onError: (error: any) => {
            toast.error('خروج از حساب امکان پذیر نمی‌باشد');
            throw new Error(error.message)
        }
    })

    return { isLoading, mutate }
}