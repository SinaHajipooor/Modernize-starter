import { apiCreateActivityHistory } from "@/api/activity-histories/apiActivityHistories";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useCreateActivity(file: any) {
    const router = useRouter()
    const queryClient = useQueryClient();
    const { mutate, isLoading } = useMutation({
        mutationFn: (newActivityHistory: any) => apiCreateActivityHistory(newActivityHistory, file),
        onSuccess: () => {
            toast.success('ایجاد سوابق فعالیت با موفقیت انجام شد');
            queryClient.invalidateQueries({
                queryKey: ['activity-histories']
            });
            router.back()
        },
        onError: () => {
            toast.error('خطایی هنگام ایجاد رخ داد ');
        },
    });
    return { mutate, isLoading }
}