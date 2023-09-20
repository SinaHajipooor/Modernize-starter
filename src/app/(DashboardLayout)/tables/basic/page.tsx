'use client'

import { Box, Button, Grid } from '@mui/material';

import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ParentCard from '@/app/(DashboardLayout)/components/shared/ParentCard';
import Table2 from '@/app/(DashboardLayout)/components/tables/Table2';
import Table3 from '@/app/(DashboardLayout)/components/tables/Table3';
import Table1 from '@/app/(DashboardLayout)/components/tables/Table1';
import Table4 from '@/app/(DashboardLayout)/components/tables/Table4';
import Table5 from '@/app/(DashboardLayout)/components/tables/Table5';



const BCrumb = [
    {
        to: '/',
        title: 'Home',
    },
    {
        title: 'سوابق فعالیت',
    },
];

const BasicTable = () => {



    return (
        <PageContainer title="Basic Table" description="this is Basic Table">

            <ParentCard title="سوابق فعالیت" >
                <>
                    <Button
                        color="primary"
                        variant="contained"
                        size="large"
                        href="/forms/form-custom"
                        type="submit"
                    >
                        ایجاد
                    </Button>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                        </Grid>
                        <Grid item xs={12}>
                            <Box>
                                <Table2 />
                            </Box>
                        </Grid>
                    </Grid>
                </>
            </ParentCard>
        </PageContainer>
    );
}
export default BasicTable;
