'use client'

import { Box, Grow } from '@mui/material';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ProductTableList from '@/app/(DashboardLayout)/components/apps/ecommerce/ProductTableList/ProductTableList';
import useActivityIndex from '../activity-histories/hooks/useActivityIndex';
import Spinner from '../components/ui/Spinner';

const BCrumb = [
    {
        to: '/',
        title: 'داشبورد',
    },
    {
        title: 'فهرست اعضا',
    },
];

const SearchTable = () => {

    const { isLoading, activityHistories } = useActivityIndex()

    return (
        <Box mt={2}>
            <PageContainer title="Search Table" description="this is Search Table">
                {/* breadcrumb */}
                <Grow in timeout={1 * 600}>
                    <Box>
                        <Breadcrumb title="فهرست اعضا" items={BCrumb} />
                    </Box>
                </Grow>
                {/* end breadcrumb */}
                {isLoading ? <Spinner /> :
                    <Grow in timeout={1 * 600}>
                        <Box>
                            <ProductTableList data={activityHistories} />
                        </Box>
                    </Grow>
                }
            </PageContainer>
        </Box>
    );
};

export default SearchTable;
