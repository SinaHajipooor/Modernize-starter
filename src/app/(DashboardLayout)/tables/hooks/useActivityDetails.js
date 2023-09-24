import { useQuery } from "@tanstack/react-query";
import { apiShowActivityHistory } from '@/utils/api/activity-histories/apiActivityHistories';


export default function useActivityDetails(id) {
    const { data: activityHistory, isFetching } = useQuery({
        queryKey: ['activity'],
        queryFn: () => apiShowActivityHistory(id)
    });


    return { activityHistory, isFetching }
}