import { useQuery } from "@tanstack/react-query";
import { apiShowActivityHistory } from '@/api/activity-histories/apiActivityHistories';


export default function useActivityDetails(id: any) {
    const { data: activityHistory, isLoading, isStale } = useQuery({
        queryKey: ['activity-history', id],
        queryFn: () => apiShowActivityHistory(id),
    });


    return { activityHistory, isLoading, isStale }
}