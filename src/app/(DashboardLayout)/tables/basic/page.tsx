'use client'

import { Box, Button, Grid } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ParentCard from '@/app/(DashboardLayout)/components/shared/ParentCard';
import Table2 from '@/app/(DashboardLayout)/components/tables/Table2';
import Link from 'next/link';
import { apiFetchAllActivityHistories } from '@/utils/api/activity-histories/apiActivityHistories';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../components/ui/Spinner';




const BasicTable = () => {

    const { isLoading, data: activityHistories } = useQuery({
        queryKey: ['activity-histories'],
        queryFn: apiFetchAllActivityHistories
    });


    return (
        <Box mt={2}>
            <PageContainer title="Basic Table" description="this is Basic Table">
                <ParentCard title="سوابق فعالیت" >
                    {isLoading ? <Box mb={5}><Spinner /> </Box> : <>
                        <Button
                            color="primary"
                            variant="contained"
                            size="large"
                            href="/tables/create"
                            LinkComponent={Link}
                        >
                            ایجاد
                        </Button>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                            </Grid>
                            <Grid item xs={12} >
                                <Box>
                                    <Table2 data={activityHistories} />
                                </Box>
                            </Grid>
                        </Grid>
                    </>}
                </ParentCard>
            </PageContainer>
        </Box>
    );
}
export default BasicTable;
