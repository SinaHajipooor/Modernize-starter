import { apiCreateActivityHistory } from "@/utils/api/activity-histories/apiActivityHistories";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useCreateActivity(file: any) {

    const router = useRouter()
    const queryClient = useQueryClient();

    const { mutate, isLoading } = useMutation({
        mutationFn: (newActivityHistory: any) => apiCreateActivityHistory(newActivityHistory, file),
        onSuccess: () => {
            toast.success('با موفقیت ایجاد شد');
            queryClient.invalidateQueries({
                queryKey: ['activity-histories']
            });
            router.back()
        },
        onError: () => {
            toast.error('خطایی رخ داد ');
        }
    });
    return { mutate, isLoading }
}