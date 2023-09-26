'use client'
import { Grid, Box, Grow } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/SalesOverview';
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboard/YearlyBreakup';
import RecentTransactions from '@/app/(DashboardLayout)/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/(DashboardLayout)/components/dashboard/ProductPerformance';
import MonthlyEarnings from '@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings';
import TopCards from './components/dashboard/modern/TopCards';


export default function Dashboard() {


    return (
        <PageContainer title="Dashboard" description="This is Dashboard">
            <Grid container spacing={3}>
                <Grid item xs={12} lg={12}>
                    <TopCards />
                </Grid>
                <Grid item xs={12} lg={8}>
                    <Grow in timeout={2 * 800}>
                        <Box>
                            <SalesOverview />
                        </Box>
                    </Grow>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Grow in timeout={3 * 800}>
                                <Box>
                                    <YearlyBreakup />
                                </Box>
                            </Grow>
                        </Grid>
                        <Grid item xs={12}>
                            <Grow in timeout={4 * 800}>
                                <Box>
                                    <MonthlyEarnings />
                                </Box>
                            </Grow>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Grow in timeout={6 * 800}>
                        <Box>
                            <RecentTransactions />
                        </Box>
                    </Grow>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <Grow in timeout={6 * 800}>
                        <Box>
                            <ProductPerformance />
                        </Box>
                    </Grow>
                </Grid>
                <Grid item xs={12}>
                    {/* <Grow in>
                        <div>
                            <Blog />
                        </div>
                    </Grow> */}
                </Grid>
            </Grid>
        </PageContainer>
    );
}

