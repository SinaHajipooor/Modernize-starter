'use client'

import { Box, Button, Grid, Grow } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import Table2 from '@/app/(DashboardLayout)/components/tables/Table2';
import Link from 'next/link';
import Spinner from '../../components/ui/Spinner';
import useActivityIndex from '../hooks/useActivityIndex';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';


const BCrumb = [
    {
        to: '/',
        title: 'داشبورد',
    },
    {
        title: 'سوابق فعالیت',
    },
];


const BasicTable = () => {

    const { isLoading, activityHistories } = useActivityIndex()

    return (

        <Box mt={2}>
            <PageContainer title="Basic Table" description="this is Basic Table">
                <Breadcrumb title="سوابق فعالیت" items={BCrumb} />
                {/* <ParentCard title="فهرست سوابق فعالیت" > */}
                {isLoading ? <Box mb={5}><Spinner /> </Box> : <>
                    <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        href="/activity-histories/create"
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
                {/* </ParentCard> */}
            </PageContainer>
        </Box>

    );
}
export default BasicTable;
