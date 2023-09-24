import { useQuery } from "@tanstack/react-query";
import { apiShowActivityHistory } from '@/utils/api/activity-histories/apiActivityHistories';


export default function useActivityDetails(id: any) {


    const { data: activityHistory, isLoading } = useQuery({
        queryKey: ['activity-history', id],
        queryFn: () => apiShowActivityHistory(id)
    });


    return { activityHistory, isLoading }
}