import { apiFetchAllActivityHistories } from "@/utils/api/activity-histories/apiActivityHistories";
import { useQuery } from "@tanstack/react-query";

export default function useActivityIndex() {
    const { isLoading, data: activityHistories } = useQuery({
        queryKey: ['activity-histories'],
        queryFn: apiFetchAllActivityHistories
    });


    return { isLoading, activityHistories }
}