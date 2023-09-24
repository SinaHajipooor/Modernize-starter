import { apiUpdateActivityHistory } from "@/api/activity-histories/apiActivityHistories";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function useUpdateActivity(file: any, id: any) {
    const router = useRouter();
    const queryClient = useQueryClient();

    const { mutate, isLoading } = useMutation({
        mutationFn: (updatedActivityHistory: any) => apiUpdateActivityHistory(updatedActivityHistory, file, id),
        onSuccess: () => {
            toast.success('تغییر با موفقیت اعمال شد');
            queryClient.invalidateQueries({
                queryKey: ['activity-histories']
            });
            router.back();
        },
        onError: () => {
            toast.error('خطایی هنگام اعمال تغییر رخ داد');
        }
    });
    return { mutate, isLoading }
}