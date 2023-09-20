'use client'

import { Box, Button, Grid } from '@mui/material';

import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ParentCard from '@/app/(DashboardLayout)/components/shared/ParentCard';
import Table2 from '@/app/(DashboardLayout)/components/tables/Table2';
import Link from 'next/link';




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
                        LinkComponent={Link}
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